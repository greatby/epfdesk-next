import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGFinalEmergingDistricts,
  sectionsCGFinalEmergingDistricts,
  faqCGFinalEmergingDistricts,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Consultants: Compliance for New Districts & Mining Hubs | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Bemetara, Kawardha, Mungeli and Bastar. Navigate RO Raipur/Bilaspur audits, EEC-2025 and Principal Employer liability in Chhattisgarh’s emerging hubs.",
  keywords: [
    "EPF ESIC consultants Bastar",
    "Bemetara ethanol plant PF compliance",
    "Kawardha sugar factory ESIC",
    "Mungeli rice mill PF audit",
    "Mining contractor ESIC Bastar",
    "EEC 2025 Chhattisgarh consultants",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-final-emerging-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chhattisgarh EPF & ESIC Compliance | New Districts & Mining Hubs",
    description:
      "PF & ESIC specialists for ethanol plants, food processing units, mining contractors and newly formed districts in Chhattisgarh.",
    url:
      "https://epfdesk.com/chhattisgarh-final-emerging-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chhattisgarh EPF ESIC Consultants",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chhattisgarh EPF & ESIC Consultants | Emerging Industrial Districts",
    description:
      "High-risk PF & ESIC consultancy for ethanol, food processing, mining and tribal-area projects.",
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
          Chhattisgarh EPF & ESIC Consultants: Compliance for New Districts & Mining Hubs | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC consultancy for Bemetara, Kawardha, Mungeli and Bastar districts under RO Raipur and RO Bilaspur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chhattisgarh-final-emerging-districts-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chhattisgarh EPF & ESIC Consultants"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for emerging industrial, tribal and mining districts of Chhattisgarh."
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
        id="schema-cg-final-emerging"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Chhattisgarh EPF & ESIC Consultants – Emerging Districts | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultants for New CG Districts",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/chhattisgarh-final-emerging-districts-epf-esic-compliance",
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
              "EPF & ESIC compliance consultants for ethanol plants, food processing units, mining contractors and newly formed districts governed by RO Raipur and RO Bilaspur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Bemetara District" },
              { "@type": "AdministrativeArea", name: "Kabirdham (Kawardha)" },
              { "@type": "AdministrativeArea", name: "Mungeli District" },
              { "@type": "AdministrativeArea", name: "Bastar District" },
              { "@type": "AdministrativeArea", name: "Dantewada District" },
              { "@type": "AdministrativeArea", name: "Sukma District" },
              { "@type": "AdministrativeArea", name: "Bijapur District" },
              { "@type": "AdministrativeArea", name: "Narayanpur District" },
              { "@type": "AdministrativeArea", name: "Kondagaon District" },
              { "@type": "AdministrativeArea", name: "Sakti District" },
              { "@type": "AdministrativeArea", name: "Sarangarh-Bilaigarh" },
              { "@type": "AdministrativeArea", name: "Gaurela-Pendra-Marwahi" },
              { "@type": "AdministrativeArea", name: "Khairagarh-Chhuikhadan-Gandai" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "83",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGFinalEmergingDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGFinalEmergingDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGFinalEmergingDistricts} />
    </>
  );
};

export default page;
