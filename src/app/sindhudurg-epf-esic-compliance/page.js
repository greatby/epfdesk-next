import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSindhudurgDistrict,
  sectionsSindhudurgDistrict,
  faqSindhudurgDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Sindhudurg EPF & ESIC Compliance for Resorts, Cashew Processing & Tourism | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Sindhudurg Hotels & Resorts, Cashew and Mango Processing units, seasonal labour PF liability and tourism contractor compliance. RO Kolhapur liaison.",
  keywords: [
    "Sindhudurg EPF consultant",
    "Sindhudurg ESIC registration",
    "Hotel PF compliance Malvan",
    "Cashew processing PF ESIC",
    "Tourism contractor PF liability",
    "RO Kolhapur EPFO audit defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/sindhudurg-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Sindhudurg EPF & ESIC Compliance | Resorts, Cashew & Tourism Sector",
    description:
      "High-risk EPF & ESIC compliance for Sindhudurg hospitality, cashew processing and seasonal coastal labour.",
    url: "https://epfdesk.com/sindhudurg-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sindhudurg EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Sindhudurg EPF & ESIC Compliance for Resorts & Cashew | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Sindhudurg Hotels, Resorts, Cashew Processing units and Tourism contractors."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sindhudurg-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-sindhudurg"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Sindhudurg EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sindhudurg Resorts & Cashew Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sindhudurg-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS SAME AS BANGALORE */
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
              "EPF & ESIC compliance services for Sindhudurg Resorts, Cashew Processing units and Tourism contractors.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Sindhudurg District" },
              { "@type": "Place", name: "Malvan" },
              { "@type": "Place", name: "Kankavli" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "41",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSindhudurgDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSindhudurgDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSindhudurgDistrict} />
    </>
  );
};

export default page;
