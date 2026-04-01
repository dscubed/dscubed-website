import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

export const supreme = localFont({
  src: "../public/fonts/Supreme-Variable.woff2",
  variable: "--font-supreme",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
