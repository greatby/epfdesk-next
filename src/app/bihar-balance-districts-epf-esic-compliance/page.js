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
    "Bihar EPF & ESIC Compliance: Bhagalpur Silk, Rohtas Cement, Purnia Ethanol & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defense for Bihar’s balance districts — Bhagalpur silk & textile units, Rohtas cement plants, Purnia ethanol and agro-processing hubs. Experts in RO Patna/Bhagalpur enforcement, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Bihar PF consultant",
    "Bihar ESIC consultant",
    "Bhagalpur silk PF ESIC",
    "Rohtas cement PF compliance",
    "Purnia ethanol ESIC coverage",
    "RO Patna EPFO jurisdiction",
    "Principal Employer liability Bihar",
    "Bihar MSME PF ESIC audits",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Bihar EPF & ESIC Compliance | Silk, Cement & Ethanol Clusters",
    description:
      "PF & ESIC specialists for Bhagalpur silk units, Rohtas cement plants, Purnia ethanol hubs and Bihar’s regional MSMEs.",
    url: "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bihar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bihar EPF & ESIC Compliance | Silk, Cement & Ethanol | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Bihar’s balance districts — Bhagalpur, Rohtas and Purnia industrial clusters.",
    images: ["https://epfdesk.com/images/logo.jpg"],
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
          Bihar EPF & ESIC Compliance: Bhagalpur Silk, Rohtas Cement & Purnia
          Ethanol | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Bihar’s balance districts — Bhagalpur silk and textile units, Rohtas cement plants, Purnia ethanol and agro-processing hubs. RO Patna/Bhagalpur audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Bihar PF consultant, Bihar ESIC consultant, Bhagalpur silk PF ESIC, Rohtas cement labour compliance, Purnia ethanol ESIC coverage, Bihar MSME PF audits, Principal Employer liability Bihar, NWC 2025 wage restructuring Bihar"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bihar-balance-districts-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bihar EPF & ESIC Consultant | Silk, Cement & Ethanol Clusters | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Bihar’s silk, cement and ethanol clusters. Specialists in PE liability and regional EPFO enforcement."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/bihar-balance-districts-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bihar EPF & ESIC Compliance | Bhagalpur, Rohtas & Purnia | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Bihar’s balance districts — silk, cement, ethanol and MSME clusters."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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
            name: "Bihar EPF & ESIC Compliance Consultants | EPFDesk",
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
