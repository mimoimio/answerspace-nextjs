// lib/pb.ts
import PocketBase from "pocketbase";

declare global {
    // Re‑use across hot‑reloads in `next dev`
    var __pb: PocketBase | undefined;
    var __pbReady: Promise<void> | undefined;
}

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL!;
const ADMIN = process.env.POCKETBASE_ADMIN_EMAIL;
const PASSWORD = process.env.POCKETBASE_ADMIN_PASSWORD;

const pb = global.__pb ?? new PocketBase(PB_URL);

global.__pb = pb;   // cache the instance

// One shared promise that resolves after admin auth (or instantly if none)
global.__pbReady =
    global.__pbReady ??
    (async () => {
        if (typeof window !== "undefined") return;           // browser: skip
        if (!ADMIN || !PASSWORD) return;                     // no creds: skip
        if (pb.authStore.isValid) return;                    // already logged
        await pb.admins.authWithPassword(ADMIN, PASSWORD);   // login once
    })();

/**
 * Call this in route handlers / server actions.
 * It waits for the admin login if needed, then returns the singleton.
 */
export async function getPB() {
    await global.__pbReady;
    return pb;
}
