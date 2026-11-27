import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://ronnydigitalhub.vercel.app";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ronnydigital Hub",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.jpeg`,
      },
      description:
        "Ronnydigital Hub provides website development and custom web application development services for businesses, organisations and individuals.",
      sameAs: [
      "https://www.instagram.com/ronnydigital_hub/",
      "https://www.tiktok.com/@ronnydigital_hub",
      "https://github.com/roniblaq",
      "https://x.com/RoniBlaq",
    ],
        },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ronnydigital Hub",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google:"W_xPWShKgQvYJSIJ0eMfXridRvodYkMX3qKvVsjOkAY",
  },

  title: "Ronnydigital Hub | Website & Web App Development",

  description:
  "Ronnydigital Hub builds modern websites and custom web applications for businesses, organisations and individuals in Nigeria and beyond.",

  authors: [{ name: "Ronnydigital Hub" }],

  creator: "Ronnydigital Hub",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Ronnydigital Hub | Websites & Web Applications",
   description:
  "Discover modern website development and custom web application solutions by Ronnydigital Hub.",
    url: siteUrl,
    siteName: "Ronnydigital Hub",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Ronnydigital Hub - Website Development, Web Apps",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  title: "Ronnydigital Hub | Websites & Web Applications",
   description:
  "Modern websites and custom web applications for businesses and organisations.",
    images: ["/preview.jpeg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-09GGFL3E3H"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-09GGFL3E3H');
          `}
        </Script>

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
