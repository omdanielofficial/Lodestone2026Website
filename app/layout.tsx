// STYLE
import "./globals.css";
import { Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// SEO
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import UpdateSchemaOrg from "@/components/seo/updateschemaorg";
import CanonicalURL from "@/components/seo/canonicalurl";

// NAVBAR & FOOTER
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// INCLUDES
import Promo from "@/components/includes/promo";
import Trustpillot from "@/components/includes/trustpilot";
import WhyChooseUs from "@/components/includes/whyschooseus";
import DataCenter from "@/components/includes/datacenter";
import GamePanel from "@/components/includes/gamepanel";
import Faq from "@/components/includes/faq";
import BlogCards from "@/components/includes/blogcards";
import CookieBanner from "@/components/includes/cookie";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lodestone - Affordable & Reliable Game Hosting",
  description:
    "Powerful game server hosting with unlimited slots, Ryzen 9 9950X CPUs, and NVMe storage. Experience lag-free gameplay and seamless performance for all your favourite games!",
  keywords:
    "game server hosting, Minecraft hosting, web hosting, 9950x hosting, game hosting, 99.99% uptime, cheap Minecraft hosting, high-performance hosting, 24/7 support, affordable hosting plans, lodestone",
  authors: [{ name: "Lodestone" }],
  applicationName: "Lodestone",
  robots: "index, follow",
  openGraph: {
    title: "Lodestone - Affordable & Reliable Game Hosting",
    description:
      "Powerful game server hosting with unlimited slots, Ryzen 9 9950X CPUs, and NVMe storage. Experience lag-free gameplay and seamless performance for all your favourite games!",
    url: "https://lodestone.host/",
    siteName: "Lodestone",
    type: "website",
    images: [
      {
        url: "https://lodestone.host/assets/images/seo/1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Lodestone Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lodestone",
    title: "Lodestone - Affordable & Reliable Game Hosting",
    description:
      "Powerful game server hosting with unlimited slots, Ryzen 9 9950X CPUs, and NVMe storage. Experience lag-free gameplay and seamless performance for all your favourite games!",
    images: [
      {
        url: "https://lodestone.host/assets/images/seo/1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Lodestone Logo",
      },
    ],
  },
  icons: {
    apple: "/assets/images/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    icon: [
      { url: "/assets/images/favicon-32x32.png", sizes: "32x32" },
      { url: "/assets/images/favicon-16x16.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-violet-800 scrollbar-track-primary scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg"
    >
      <head>
        {/* Add any meta tags or external scripts here */}
      </head>
      <body className="montserrat">
        <GoogleTagManager gtmId="GT-NGS98CTQ" />
        <GoogleAnalytics gaId="G-9J1KM899H6" />
        <div className="text-white">
          <UpdateSchemaOrg />
          <CanonicalURL />
          <Promo />
          <Navbar />
          {children}
          <Trustpillot />
          <WhyChooseUs />
          <DataCenter />
          <GamePanel />
          <Faq />
          <BlogCards />
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
