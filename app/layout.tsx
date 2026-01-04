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
  title: "Signal-Guard-Website",
  description:
    "Signal-Guard-Website is a multi-section single-page website with a unique and visually striking design. It focuses on aesthetics and user experience, featuring elements and animations rarely seen on typical websites. The project is primarily frontend and does not include complex logic or backend functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#000d01] overflow-x-hidden select`}>
        {children}
      </body>
    </html>
  );
}
