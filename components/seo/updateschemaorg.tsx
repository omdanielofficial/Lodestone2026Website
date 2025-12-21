"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const UpdateSchemaOrg = () => {
  const pathname = usePathname();
  const fullUrl = `https://nusantara-pi.vercel.app${pathname}`;

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
      legalName: "Nusantara",
      foundingDate: "1998",
      logo: "https://nusantara-pi.vercel.app/assets/images/logo-nusantara-400x400.png",
      image:
        "https://nusantara-pi.vercel.app/assets/images/logo-nusantara-400x400.png",
      url: fullUrl,
      description: metaDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Jl. Boulevard Bar. Raya No.6a, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
        addressLocality: "Jakarta",
        addressRegion: "Daerah Khusus Ibu Kota Jakarta",
        postalCode: "14240",
        addressCountry: "IDN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Support Agent",
        url: "https://nusantara-pi.vercel.app/contact",
      },
      sameAs: [
        "https://www.facebook.com/nusantara",
        "https://www.instagram.com/nusantara/",
        "https://twitter.com/nusantara",
        "https://www.youtube.com/channel/nusantara",
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
        url: "https://nusantara-pi.vercel.app/assets/images/logo-nusantara-400x400.png",
        width: "400",
        height: "400",
      },
      sameAs: [
        "https://www.facebook.com/nusantara",
        "https://www.instagram.com/nusantara/",
        "https://twitter.com/nusantara",
        "https://www.youtube.com/channel/nusantara",
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
        serviceType: "Gaming",
        provider: {
          "@type": "Organization",
          name: metaName,
          description: metaDescription,
          url: fullUrl,
          logo: "https://nusantara-pi.vercel.app/assets/images/logo-nusantara-400x400.png",
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
        "nusantara, nusantarahosting, nusantara hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming",
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
        "https://nusantara-pi.vercel.app/assets/images/logo-nusantara-400x400.png",
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
        priceCurrency: "USD",
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
