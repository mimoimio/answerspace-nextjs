import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">AnswerSpace</h1>
          <div className="flex gap-8">
            <Button variant={"ghost"}>Home</Button>
            <Button variant={"ghost"}>Profile</Button>
            <Button variant={"ghost"}>Settings</Button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
