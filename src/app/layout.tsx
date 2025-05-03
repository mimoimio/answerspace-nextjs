import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="container mx-auto flex justify-between items-center p-2">
          <h1 className="text-4xl font-bold"><Link href="/">AnswerSpace</Link></h1>
          <div className="flex gap-8">
            <Button>Home</Button>
            <Button>Profile</Button>
            <Button>Settings</Button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
