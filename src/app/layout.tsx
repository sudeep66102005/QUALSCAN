import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Qualscan | 24/7 Teleradiology Reporting Services",
  description:
    "Leading teleradiology services providing high-quality radiology reporting for hospitals and diagnostic centers worldwide. Sub-hour STAT finals, sub-30-minute wet reads.",
  keywords:
    "teleradiology, radiology reporting, medical imaging, nighthawk services, STAT reports, diagnostic imaging, healthcare",
  openGraph: {
    title: "Qualscan | 24/7 Teleradiology Reporting Services",
    description:
      "Leading teleradiology services providing high-quality radiology reporting for hospitals and diagnostic centers worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Qualscan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-mark.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
