import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import ToastProvider from "@/components/ToastProvider";
import Footer from "@/components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Daily Bangla News Portal",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className}    h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <Marquee></Marquee>
        <ToastProvider />

        {children}
        <Footer />
      </body>
    </html>
  );
}
export const dynamic = "force-dynamic";
