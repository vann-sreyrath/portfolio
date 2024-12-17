
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/layout/ScrollProgressComponent";
import Navbar from "@/components/layout/NavbarComponent";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`w-full overflow-x-hidden`}
      >
              {/* <ScrollProgressBar/> */}
              <Navbar/>
        {children}
      </body>
    </html>
  );
}
