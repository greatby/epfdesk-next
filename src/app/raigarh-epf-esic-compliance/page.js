import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaigarhDistrict,
  sectionsRaigarhDistrict,
  faqRaigarhDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Raigarh EPF & ESIC Compliance: Steel Hub PE Liability, Sponge Iron Audits & EEC-2025 | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Raigarh steel plants, sponge iron units and power hubs. Navigate RO Bilaspur audits, EEC-2025 voluntary disclosure and hazardous process compliance.",
  keywords: [
    "Raigarh PF consultant",
    "EPF compliance for Raigarh steel plants",
    "Sponge iron ESIC Raigarh",
    "RO Bilaspur EPF 7A defense",
    "EEC 2025 Raigarh MSMEs",
    "Principal Employer liability Raigarh",
  ],
  alternates: {
    canonical: "https://epfdesk.com/raigarh-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Raigarh EPF & ESIC Compliance | Steel, Power & Metal Clusters",
    description:
      "PF & ESIC specialists for Raigarh steel belts, sponge iron units and power plants.",
    url: "https://epfdesk.com/raigarh-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raigarh EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Raigarh EPF & ESIC Compliance | Steel & Power Hub",
    description:
      "High-risk PF & ESIC compliance for Raigarh’s steel, sponge iron and power sectors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ============================
   PAGE COMPONENT
============================ */
const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD TAGS
      ============================ */}
      <Head>
        <title>
          Raigarh EPF & ESIC Compliance: Steel Hub PE Liability, Sponge Iron Audits & EEC-2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Raigarh steel plants, sponge iron units and power-sector contractors under RO Bilaspur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/raigarh-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Raigarh EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Raigarh’s steel, power and secondary metal clusters."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ============================
          JSON-LD SCHEMA
      ============================ */}
      <Script
        id="schema-raigarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Raigarh EPF & ESIC Compliance – Steel & Power Clusters | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Raigarh Industrial Area",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/raigarh-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS */
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "EPF & ESIC compliance specialists for Raigarh’s steel plants, sponge iron units, power projects and hazardous industrial operations governed by RO Bilaspur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Raigarh District" },
              { "@type": "Place", name: "Punjipathra Industrial Area" },
              { "@type": "Place", name: "Tamnar" },
              { "@type": "Place", name: "Kharsia" },
              { "@type": "Place", name: "Raigarh Industrial Area" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "78",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaigarhDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaigarhDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRaigarhDistrict} />
    </>
  );
};

export default page;
