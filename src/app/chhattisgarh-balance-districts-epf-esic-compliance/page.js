import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGBalanceDistricts,
  sectionsCGBalanceDistricts,
  faqCGBalanceDistricts,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Compliance: Cement Hub Audits, Agro-Industrial PE Liability & EEC-2025 | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Chhattisgarh’s cement plants, rice mills and mining ancillaries. Navigate RO Raipur/Bilaspur audits, Baloda Bazar PE liability and EEC-2025 amnesty.",
  keywords: [
    "Baloda Bazar cement EPF compliance",
    "Dhamtari rice mill PF ESIC",
    "Kawardha sugar factory labour law",
    "Mahasamund agro industry PF audit",
    "RO Raipur EPF 7A defense",
    "EEC 2025 Chhattisgarh compliance",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chhattisgarh EPF & ESIC Compliance | Cement, Agro & Emerging Zones",
    description:
      "PF & ESIC specialists for cement hubs, agro-processing clusters and emerging industrial belts in Chhattisgarh.",
    url:
      "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chhattisgarh EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chhattisgarh EPF & ESIC Compliance | Cement & Agro Hubs",
    description:
      "High-risk PF & ESIC compliance for cement plants, rice mills and emerging mining belts.",
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
          Chhattisgarh EPF & ESIC Compliance: Cement Hub Audits, Agro-Industrial PE Liability & EEC-2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Baloda Bazar cement plants, Dhamtari rice mills, Kawardha sugar units and southern Chhattisgarh MSMEs."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chhattisgarh EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for cement, agro-processing and emerging industrial zones in Chhattisgarh."
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
        id="schema-cg-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Chhattisgarh EPF & ESIC Compliance – Cement & Agro Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Balance Districts of Chhattisgarh",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for cement manufacturing belts, agro-processing corridors and emerging mining zones governed by RO Raipur and RO Bilaspur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Baloda Bazar-Bhatapara" },
              { "@type": "AdministrativeArea", name: "Dhamtari District" },
              { "@type": "AdministrativeArea", name: "Mahasamund District" },
              { "@type": "AdministrativeArea", name: "Kabirdham (Kawardha)" },
              { "@type": "AdministrativeArea", name: "Kanker District" },
              { "@type": "AdministrativeArea", name: "Kondagaon District" },
              { "@type": "AdministrativeArea", name: "Gariaband District" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "76",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGBalanceDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGBalanceDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGBalanceDistricts} />
    </>
  );
};

export default page;
