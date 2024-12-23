

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/providers/ReduxProvider";
import Topbar from "@/components/custom/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy a domain name - Register cheapest domain names - Doman",
  description: "Generated by create next app",
};


export default function RootLayout({                    
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="bg-slate-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >  
        <ReduxProvider>
        <Topbar/>

          {children}
        </ReduxProvider>
        
      </body>
    </html>
  );
}
