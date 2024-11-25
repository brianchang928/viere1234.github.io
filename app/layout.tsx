import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brian Chang",
  description: "A website for Brain Chang's portfolio",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="h-full">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full`}
      >
      <main className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900/90">
        {children}
      </main>
      </body>
      </html>
  );
}