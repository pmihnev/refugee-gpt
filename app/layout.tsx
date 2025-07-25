import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, Typography } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Box className="fixed top-0 left-0 w-full z-50 bg-gray-800 p-4 flex items-center">
          <img
            src="/globe.svg"
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <Typography variant="h6" className="text-white font-semibold">
            Refugee GPT
          </Typography>
        </Box>
        {children}
      </body>
    </html>
  );
}
