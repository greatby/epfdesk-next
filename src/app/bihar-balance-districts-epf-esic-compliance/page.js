import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBiharBalance,
  sectionsBiharBalance,
  faqBiharBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Bihar EPF & ESIC Compliance: Bhagalpur, Rohtas & Purnia Expert Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Bhagalpur silk units, Rohtas cement plants, and Purnia ethanol hubs. Navigate RO Bhagalpur/Patna audits and EEC-2025.",
  alternates: {
    canonical:
      "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bihar EPF & ESIC Compliance | Regional Industrial Clusters",
    description:
      "PF & ESIC experts for Bhagalpur textiles, Rohtas cement plants, Purnia ethanol units, and Bihar agri-industrial corridors.",
    url: "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bihar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

/* ============================
   PAGE COMPONENT
============================ */
const page = () => {
  return (
    <>
      {/* LEGACY HEAD */}
      <Head>
        <title>
          Bihar EPF & ESIC Compliance | Bhagalpur, Rohtas & Purnia
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Bihar’s silk clusters, cement plants, ethanol units, rice mills, and regional MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/bihar-balance-districts-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-bihar-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Bihar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
            telephone: "+91-9945933333",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            areaServed: [
              "Bhagalpur",
              "Banka",
              "Rohtas",
              "Aurangabad",
              "Gaya",
              "Bodhgaya",
              "Purnia",
              "Katihar",
              "Kishanganj",
            ],
            description:
              "EPF & ESIC consultancy for Bihar silk clusters, cement belts, ethanol plants, and regional agri-industrial hubs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBiharBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBiharBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBiharBalance} />
    </>
  );
};

export default page;