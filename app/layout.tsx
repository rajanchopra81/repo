import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.drrajanchopra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rajan Chopra, MD — Concierge Neurology, Southern California",
    template: "%s | Rajan Chopra, MD",
  },
  description:
    "A concierge neurology practice for individuals, executives, and families who require direct physician access, unhurried consultation, and coordinated neurological care.",
  keywords: [
    "concierge neurologist",
    "concierge neurology",
    "private neurologist Southern California",
    "second opinion neurology",
    "Dr. Rajan Chopra",
  ],
  authors: [{ name: "Rajan Chopra, MD" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Rajan Chopra, MD",
    title: "Rajan Chopra, MD — Concierge Neurology, Southern California",
    description:
      "Direct physician access and personalized neurological care for a limited number of patients and families.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Chopra, MD — Concierge Neurology",
    description:
      "Direct physician access and personalized neurological care for a limited number of patients and families.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Rajan Chopra, MD",
  medicalSpecialty: "Neurology",
  description:
    "Board-certified neurologist providing concierge neurology, including brain health and cognitive wellness evaluation, second opinions, and care coordination.",
  url: siteUrl,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Los Angeles County" },
    { "@type": "AdministrativeArea", name: "Orange County" },
    { "@type": "AdministrativeArea", name: "Inland Empire" },
  ],
  availableService: [
    "Concierge Neurology",
    "Brain Health & Cognitive Wellness",
    "Expert Second Opinions",
    "Hospital Care Coordination",
    "Telemedicine",
    "House Calls",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
