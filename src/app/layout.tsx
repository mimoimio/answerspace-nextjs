import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnswerSpace",
  description: "Mimoimio's AnswerSpace",
  icons: {
    icon: "/image/favicon.ico",
  },
  manifest: "/image/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="container mx-auto p-2 flex justify-between items-center ">
            <h1 className="text-4xl font-bold"><Link href="/">AnswerSpace</Link></h1>
            <div className="flex gap-4">
              <ModeToggle />
              <div className="hidden md:gap-8 md:flex md:items-center  ">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Profile</Link>
                <Link href={"/"}>Settings</Link>
              </div>
              <MobileNav />
            </div>

          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
