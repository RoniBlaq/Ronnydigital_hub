import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://ronnydigitalhub.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Ronnydigital Hub | Website & Web App Development",

  description:
    "Ronnydigital Hub helps businesses and organisations build modern websites, web applications and digital brand identities. Explore our services and projects.",

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
    title: "Ronnydigital Hub | Websites, Web Apps & Branding",
    description:
      "We build modern websites, web applications and digital brand identities for businesses and organisations.",
    url: siteUrl,
    siteName: "Ronnydigital Hub",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Ronnydigital Hub - Website Development, Web Apps and Branding",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ronnydigital Hub | Websites, Web Apps & Branding",
    description:
      "Modern websites, web applications and digital branding for businesses and organisations.",
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
