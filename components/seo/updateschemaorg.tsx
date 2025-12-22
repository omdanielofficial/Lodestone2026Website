"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const UpdateSchemaOrg = () => {
  const pathname = usePathname();
  const fullUrl = `https://lodestone.host${pathname}`;

  useEffect(() => {
    const metaName = document.title || "Default Name";
    const metaDescription =
      document
        .querySelector("meta[name='description']")
        ?.getAttribute("content") || "Default Description";

    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: metaName,
      legalName: "Lodestone Technologies LTD",
      foundingDate: "2024",
      logo: "https://nusantara-pi.vercel.app/assets/images/logo.png",
      image:
        "https://nusantara-pi.vercel.app/assets/images/logo.png",
      url: fullUrl,
      description: metaDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "82A James Carter Road, Mildenhall, Suffolk, United Kingdom, IP28 7DE",
        addressLocality: "Mildenhall",
        addressRegion: "Midenhall, Suffolk",
        postalCode: "IP28 7DE",
        addressCountry: "GBR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Support Tickets",
        url: "https://billing.lodestone.host/submitticket.php",
      },
      sameAs: [
        "https://x.com/lodestone_host",
        "https://youtube.com/@lodestonehost",
        "https://tiktok.com/@lodestonehost",
        "https://linkedin.com/company/lodestonetechnologies",
      ],
    };

    const webSiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: fullUrl,
      name: metaName,
      description: metaDescription,
      image: {
        "@type": "ImageObject",
        url: "https://nusantara-pi.vercel.app/assets/images/logo.png",
        width: "400",
        height: "400",
      },
      sameAs: [
        "https://x.com/lodestone_host",
        "https://youtube.com/@lodestonehost",
        "https://tiktok.com/@lodestonehost",
        "https://linkedin.com/company/lodestonetechnologies",
      ],
    };

    const webPageData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaName,
      description: metaDescription,
      inLanguage: "id-ID",
      url: fullUrl,
      mainEntity: {
        "@type": "Service",
        name: metaName,
        serviceType: "Game Hosting",
        provider: {
          "@type": "Organization",
          name: metaName,
          description: metaDescription,
          url: fullUrl,
          logo: "https://nusantara-pi.vercel.app/assets/images/logo.png",
        },
        areaServed: "Worldwide",
        description: metaDescription,
        alternateName: [
          "Best game server hosting providers",
          "Game server solutions",
          "Game server hosting with modpack support",
          "Top-rated game server hosting services",
        ],
      },
    };

    const webPageElementData = {
      "@context": "https://schema.org",
      "@type": "WebPageElement",
      keywords:
        "lodestone, lodestonehosting, lodestone hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming",
      text: metaDescription,
      mentions: {
        "@type": "Thing",
        name: metaName,
      },
    };

    const productData = {
      "@context": "https://schema.org",
      "@type": "Product",
      aggregateRating: {
        "@type": "AggregateRating",
        bestRating: "5",
        ratingCount: "8000",
        ratingValue: "5",
        worstRating: "1",
      },
      image:
        "https://nusantara-pi.vercel.app/assets/images/logo.png",
      name: metaName,
      sku: "mainPage",
      description: metaDescription,
      brand: { "@type": "Brand", name: "Nusantara" },
      offers: {
        "@type": "AggregateOffer",
        url: fullUrl,
        availability: "https://schema.org/InStock",
        offerCount: 40,
        lowPrice: 3,
        highPrice: 97,
        priceCurrency: "GBP",
      },
    };

    const schemas = [
      organizationData,
      webSiteData,
      webPageData,
      webPageElementData,
      productData,
    ];

    schemas.forEach((schema) => {
      const existingScript = document.querySelector(
        `script[type="application/ld+json"][data-schema="${schema["@type"]}"]`,
      );
      const scriptContent = JSON.stringify(schema);
      if (existingScript) {
        existingScript.textContent = scriptContent;
      } else {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-schema", schema["@type"]);
        script.textContent = scriptContent;
        document.head.appendChild(script);
      }
    });
  }, [fullUrl, pathname]);

  return null;
};

export default UpdateSchemaOrg;
