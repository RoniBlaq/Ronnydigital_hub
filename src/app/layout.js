import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title:"Ronnydigitalhub",
  description:"Ronnydigital is a frontend developer passionate about building modern, user-friendly web applications with clean design and smooth user experience.",

  keywords: [
    "Frontend Developer",
    "Next.js",
    "Tailwindcss",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Ronnydigitalhub"}],

  creator: "Ronnydigitalhub",

  viewport: "width=device-width, initial-scale=1",

  metadataBase: new URL("https://ronkedigital.vercel.app"),

  openGraph: {
    title: "Ronnydigitalhub Portfolio",
    description: "Explore my projects and skills in frontend development",
    url: "https://ronkedigital.vercel.app",
    siteName: "Ronnydigital hub",
    images:[
      {
        url:"/preview.jpeg",
        width:1200,
        height: 630,
        alt:"Ronnydigitalhub portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: " summary_large _image",
    tittle: "Ronnydigitalhub portfolio",
    description: "Frontend Developer building modern and responsive web apps.",
    images: [
      "/preview.jpeg"
    ],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
       {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-09GGFL3E3H"></script>
<script id="google-analytics" strategy="afterInteractive">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-09GGFL3E3H');
  `}
</script>

       <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
