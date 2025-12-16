import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSataraDistrict,
  sectionsSataraDistrict,
  faqSataraDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Satara EPF & ESIC Compliance for Sugar Mills, Karad MIDC & Seasonal Labour | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Satara and Karad Sugar Factories, PF liability on Retention Allowance, seasonal harvest workers, and mandatory ESIC compliance for MIDC MSMEs.",
  keywords: [
    "Satara PF consultant",
    "Sugar mill PF retention allowance",
    "Karad MIDC ESIC compliance",
    "Seasonal sugar factory PF",
    "EPFO 7A Satara sugar mill",
    "Koregaon MIDC PF ESIC",
  ],
  alternates: {
    canonical: "https://epfdesk.com/satara-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Satara EPF & ESIC Compliance | Sugar Mills & MIDC MSMEs | EPFDesk",
    description:
      "PF & ESIC specialists for Satara sugar industry, seasonal labour, and MIDC factories.",
    url: "https://epfdesk.com/satara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Satara EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Satara EPF & ESIC Compliance | Sugar & MIDC Sector | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance for Satara sugar mills, retention allowance audits, and MIDC MSMEs.",
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
          Satara EPF & ESIC Compliance for Sugar Mills, Karad MIDC & Seasonal Labour | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Satara sugar factories, PF on Retention Allowance, and ESIC compliance for Karad and Koregaon MIDC MSMEs."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/satara-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Satara EPF & ESIC Compliance | Sugar & MIDC Sector"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Satara sugar mills, seasonal labour, and MIDC factories."
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
        id="schema-satara"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Satara EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar Mills & MIDC Units in Satara",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/satara-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Satara sugar mills, PF on Retention Allowance, seasonal labour management, and MIDC MSME compliance.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Satara District" },
              { "@type": "Place", name: "Sugar Mills" },
              { "@type": "Place", name: "Karad MIDC" },
              { "@type": "Place", name: "Koregaon MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "66",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSataraDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSataraDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSataraDistrict} />
    </>
  );
};

export default page;
