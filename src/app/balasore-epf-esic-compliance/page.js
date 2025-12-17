import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBalasoreDistrict,
  sectionsBalasoreDistrict,
  faqBalasoreDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Balasore EPF & ESIC Compliance: MSME Audits & Expert Consultants | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Balasore rubber & plastic units, seafood exporters and MSMEs. Navigate RO Bhubaneswar audits, EEC-2025 and hazardous process rules.",
  keywords: [
    "Balasore PF consultant",
    "EPF ESIC compliance Balasore",
    "Plastic industry PF audit Odisha",
    "Seafood exporter ESIC registration",
    "Balasore MSME labour compliance",
    "RO Bhubaneswar EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/balasore-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Balasore EPF & ESIC Compliance | MSME & Export Hub",
    description:
      "PF & ESIC specialists for Balasore plastic, seafood export and defence-support MSMEs governed by RO Bhubaneswar.",
    url: "https://epfdesk.com/balasore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Balasore EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Balasore EPF & ESIC Consultants | MSME Hub",
    description:
      "High-risk PF & ESIC compliance for Balasore plastic, seafood and MSME units.",
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
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Balasore EPF & ESIC Compliance: MSME & Export Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Balasore rubber, plastic, seafood export and defence-support units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/balasore-epf-esic-compliance"
        />

        <meta property="og:title" content="Balasore EPF & ESIC Compliance" />
        <meta
          property="og:description"
          content="PF & ESIC experts for Balasore’s MSME, plastic and seafood ecosystem."
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
        id="schema-balasore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Balasore EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Balasore MSMEs & Export Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/balasore-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* CONSISTENT ADDRESS */
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
              "EPF & ESIC compliance specialists for Balasore plastic units, seafood exporters and MSMEs governed by RO Bhubaneswar.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Balasore District" },
              { "@type": "Place", name: "Balgopalpur Industrial Area" },
              { "@type": "Place", name: "Ganeshwarpur Industrial Estate" },
              { "@type": "Place", name: "Chandipur" },
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
        <PerformanceSectionIndustry data={heroDataBalasoreDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBalasoreDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBalasoreDistrict} />
    </>
  );
};

export default page;
