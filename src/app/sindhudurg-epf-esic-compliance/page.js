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
          Sindhudurg EPF & ESIC Compliance: Hotels, Resorts, Cashew Processing &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Sindhudurg hotels, beach resorts, cashew processing units and tourism contractors. Seasonal labour PF liability, contractor audits and ESIC coverage for hospitality staff handled."
        />

        <meta
          name="keywords"
          content="Sindhudurg PF consultant, Sindhudurg ESIC consultant, hotel resort PF ESIC Sindhudurg, cashew processing labour compliance, tourism contractor PF liability, seasonal labour PF audits Sindhudurg, hospitality ESIC compliance Maharashtra"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sindhudurg-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Sindhudurg EPF & ESIC Consultant | Resorts & Cashew Processing | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Sindhudurg hotels, resorts, cashew processing units and tourism contractors."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/sindhudurg-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sindhudurg EPF & ESIC Compliance | Resorts & Cashew Processing | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Sindhudurg resorts, hotels and cashew processing units — seasonal labour compliance handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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
