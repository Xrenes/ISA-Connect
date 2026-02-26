import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ISA Connect | Real Estate Lead Conversion & Appointment Setting",
    template: "%s | ISA Connect",
  },
  description: "Turn your real estate leads into booked appointments with ISA Connect's 24/7 outbound call center. Speed-to-lead follow-up, appointment setting, and lead qualification for U.S. agents.",
  keywords: ["real estate ISA", "inside sales agent", "lead conversion", "appointment setting", "real estate leads", "Zillow leads", "Facebook leads", "speed to lead"],
  authors: [{ name: "ISA Connect" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaconnect.com",
    siteName: "ISA Connect",
    title: "ISA Connect | Real Estate Lead Conversion & Appointment Setting",
    description: "Turn your real estate leads into booked appointments with ISA Connect's 24/7 outbound call center.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ISA Connect - Real Estate Lead Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISA Connect | Real Estate Lead Conversion",
    description: "Turn your real estate leads into booked appointments 24/7.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
