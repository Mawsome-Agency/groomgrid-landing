import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getgroomgrid.com"),
  title: {
    default: "GroomGrid — AI-Powered Pet Grooming Business Software",
    template: "%s | GroomGrid",
  },
  description:
    "GroomGrid is the AI-powered business management platform built for pet groomers. Smart scheduling, breed detection AI, automated rebooking, and payment processing — all in one place.",
  keywords: [
    "pet grooming software",
    "grooming business management",
    "pet groomer scheduling app",
    "AI pet grooming",
    "dog grooming software",
    "grooming salon management",
    "pet groomer CRM",
    "grooming appointment software",
  ],
  authors: [{ name: "GroomGrid", url: "https://getgroomgrid.com" }],
  creator: "GroomGrid",
  publisher: "GroomGrid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getgroomgrid.com",
    siteName: "GroomGrid",
    title: "GroomGrid — AI-Powered Pet Grooming Business Software",
    description:
      "The smartest way to run your grooming business. AI breed detection, smart rebooking, and automated client notes — built for groomers who love dogs, not spreadsheets.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GroomGrid — AI-Powered Pet Grooming Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroomGrid — AI-Powered Pet Grooming Business Software",
    description:
      "AI breed detection, smart scheduling, automated notes. Built for groomers who love dogs, not spreadsheets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://getgroomgrid.com",
  },
};

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Non-render-blocking font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={FONT_URL} />
        <link rel="stylesheet" href={FONT_URL} media="print" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.querySelector('link[media="print"][href*="fonts.googleapis.com"]');if(l)l.onload=function(){l.media='all'}})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={FONT_URL} />
        </noscript>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GroomGrid",
              url: "https://getgroomgrid.com",
              logo: {
                "@type": "ImageObject",
                url: "https://getgroomgrid.com/icon.svg",
              },
              description:
                "AI-powered business management platform for pet groomers",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GroomGrid",
              description:
                "AI-powered business management platform for pet groomers",
              url: "https://getgroomgrid.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: [
                {
                  "@type": "Offer",
                  name: "Solo Plan",
                  price: "29",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Salon Plan",
                  price: "79",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Enterprise Plan",
                  price: "149",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    billingDuration: "P1M",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
