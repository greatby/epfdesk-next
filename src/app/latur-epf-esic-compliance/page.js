import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataLaturDistrict,
  sectionsLaturDistrict,
  faqLaturDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Latur EPF & ESIC Compliance for Dal Mills, Oilseed Processing & Educational Institutions | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Latur Dal and Oilseed Mills, PF liability for seasonal agro-processing workers, and mandatory ESIC compliance for educational institutions and MIDC MSMEs. Specialists in piece-rate wage audits and Principal Employer liability.",
  keywords: [
    "Latur PF consultant",
    "Dal mill EPF compliance Latur",
    "Oilseed processing ESIC Latur",
    "Piece rate wages PF ESIC Marathwada",
    "Educational institution ESIC Latur",
    "Latur EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/latur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Latur EPF & ESIC Compliance | Dal Mills & Education Sector | EPFDesk",
    description:
      "PF & ESIC specialists for Latur Dal Mills, oilseed processing units, seasonal agro labour, and educational institutions.",
    url: "https://epfdesk.com/latur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Latur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Latur EPF & ESIC Compliance | Dal Mills & Agro Processing | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Latur Dal Mills, agro-processing, and education sector.",
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
          Latur EPF & ESIC Compliance for Dal Mills, Oilseed Processing & Educational Institutions | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Latur Dal Mills, oilseed processing units, seasonal agro workers, and educational institutions."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/latur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Latur EPF & ESIC Compliance | Dal Mills & Education"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Latur Dal Mills, agro-processing, MIDC MSMEs, and educational institutions."
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
        id="schema-latur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Latur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Dal Mills & Educational Institutions in Latur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/latur-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Latur Dal Mills, oilseed processing units, seasonal agro-processing labour, MIDC MSMEs, and educational institutions with focus on piece-rate wages and Principal Employer liability.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Latur District" },
              { "@type": "Place", name: "Dal Mills & Oilseed Processing Units" },
              { "@type": "Place", name: "Latur MIDC" },
              { "@type": "Place", name: "Educational Institutions" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLaturDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLaturDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqLaturDistrict} />
    </>
  );
};

export default page;
