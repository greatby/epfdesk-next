import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGEmergingDistricts,
  sectionsCGEmergingDistricts,
  faqCGEmergingDistricts,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Compliance: Expert Consultants for Dhamtari & Mahasamund Hubs | EPFDesk",
  description:
    "Get expert EPF and ESIC compliance services in Chhattisgarh. We handle RO Raipur audits, EEC-2025 filings, and statutory audits for food processing units and MSMEs.",
  keywords: [
    "EPF ESIC consultants Chhattisgarh",
    "Dhamtari rice mill PF compliance",
    "Mahasamund agro industry ESIC",
    "RO Raipur EPF audit support",
    "EEC 2025 Chhattisgarh filing",
    "Labour law consultant Raipur",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chhattisgarh EPF & ESIC Compliance | Emerging Districts",
    description:
      "PF & ESIC specialists for food processing, agri-logistics and emerging mining districts in Chhattisgarh.",
    url:
      "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance",
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
      "Chhattisgarh EPF & ESIC Compliance | Dhamtari & Mahasamund",
    description:
      "Expert PF & ESIC consultancy for food processing and MSMEs in Chhattisgarh.",
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
          Chhattisgarh EPF & ESIC Compliance: Expert Consultants for Dhamtari & Mahasamund Hubs | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC consultancy for Dhamtari rice mills, Mahasamund agro units, and emerging MSMEs under RO Raipur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chhattisgarh EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for emerging food-processing and mining districts in Chhattisgarh."
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
        id="schema-cg-emerging"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Chhattisgarh EPF & ESIC Compliance – Emerging Districts | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultants for Dhamtari & Mahasamund",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for food processing hubs, agri-logistics corridors, and emerging mining districts governed by RO Raipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Dhamtari District" },
              { "@type": "AdministrativeArea", name: "Mahasamund District" },
              { "@type": "AdministrativeArea", name: "Kanker District" },
              { "@type": "AdministrativeArea", name: "Gariaband District" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "69",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGEmergingDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGEmergingDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGEmergingDistricts} />
    </>
  );
};

export default page;
