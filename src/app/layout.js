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
    default: "ISAConnect | Real Estate Lead Conversion & Appointment Setting",
    template: "%s | ISAConnect",
  },
  description: "We act as a dedicated Inside Sales Agent (ISA) team that converts leads into qualified appointments. Inbound Call Handling, Outbound Calling, Appointment Scheduling, Lead Nurturing, CRM Follow-Up for Real Estate Teams & Agents and Home Inspection Companies.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  keywords: ["real estate ISA", "inside sales agent", "lead conversion", "appointment setting", "real estate leads", "Zillow leads", "Facebook leads", "speed to lead", "inbound call handling", "outbound calling", "appointment scheduling", "lead nurturing", "CRM follow-up"],
  authors: [{ name: "ISAConnect" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaconnect.com",
    siteName: "ISAConnect",
    title: "ISAConnect | Real Estate Lead Conversion & Appointment Setting",
    description: "We act as a dedicated Inside Sales Agent (ISA) team that converts leads into qualified appointments.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ISAConnect - Real Estate Lead Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISAConnect | Real Estate Lead Conversion",
    description: "We act as a dedicated Inside Sales Agent (ISA) team that converts leads into qualified appointments.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: '/ISA-Connect/favicon.svg',
    apple: '/ISA-Connect/favicon.svg',
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
