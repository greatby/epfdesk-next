import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNandurbarDistrict,
  sectionsNandurbarDistrict,
  faqNandurbarDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Nandurbar EPF & ESIC Compliance for Agro-Processing, Cotton & Newly Notified Areas | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Nandurbar Cotton Ginning, Agro-Processing units, seasonal tribal labour PF liability and mandatory ESIC compliance effective May 2025. SRO Jalgaon liaison.",
  keywords: [
    "Nandurbar EPF consultant",
    "Nandurbar ESIC registration",
    "Cotton ginning PF compliance",
    "Tribal labour PF liability",
    "ESIC notification May 2025 Nandurbar",
    "EPFO SRO Jalgaon 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/nandurbar-epf-esic-compliance",
  },
  openGraph: {
    title: "Nandurbar EPF & ESIC Compliance | Agro-Processing & Tribal Labour",
    description:
      "High-risk PF & ESIC compliance for Nandurbar cotton, agro-processing and newly notified ESIC areas.",
    url: "https://epfdesk.com/nandurbar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nandurbar EPF ESIC Compliance",
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
          Nandurbar EPF & ESIC Compliance: Agro-Processing, Cotton Ginning &
          Tribal Labour PF Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Nandurbar — cotton ginning factories, agro-processing units, seasonal and tribal labour employment. PF liability on migrant and piece-rate workers, ESIC coverage and inspection readiness handled."
        />

        <meta
          name="keywords"
          content="Nandurbar PF consultant, Nandurbar ESIC consultant, cotton ginning PF ESIC Nandurbar, agro processing labour compliance, seasonal tribal labour PF liability, piece rate wages PF audits, ESIC coverage tribal areas, NWC 2025 wage restructuring Maharashtra"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/nandurbar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Nandurbar EPF & ESIC Consultant | Agro-Processing & Tribal Labour | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Nandurbar cotton ginning, agro-processing units and seasonal tribal labour."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/nandurbar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nandurbar EPF & ESIC Compliance | Agro-Processing & Tribal Labour | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Nandurbar agro-processing units and seasonal tribal labour — PF liability and audits handled."
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
        id="schema-nandurbar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Nandurbar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Nandurbar Agro & Cotton Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/nandurbar-epf-esic-compliance",
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
              "EPF & ESIC compliance services for Nandurbar Cotton Ginning, Agro-Processing units and newly notified ESIC areas.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Nandurbar District" },
              { "@type": "Place", name: "Nandurbar MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "37",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNandurbarDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNandurbarDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNandurbarDistrict} />
    </>
  );
};

export default page;
