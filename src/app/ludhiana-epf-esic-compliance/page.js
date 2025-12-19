import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataLudhiana, sectionsLudhiana, faqLudhiana } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ludhiana EPF & ESIC Compliance: Hosiery Exporters, Cycle Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ludhiana — hosiery and knitwear exporters, cycle part manufacturers, dyeing/processing houses and engineering MSMEs. Experts in RO Ludhiana enforcement, Principal Employer liability, contractor PF audits and New Wage Code restructuring.",

  keywords: [
    "Ludhiana PF consultant",
    "Ludhiana ESIC consultant",
    "Hosiery exporter PF ESIC Ludhiana",
    "Cycle industry labour compliance Ludhiana",
    "Textile dyeing unit PF audits",
    "Engineering MSME PF ESIC Ludhiana",
    "Principal Employer liability Ludhiana",
    "RO Ludhiana EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/ludhiana-epf-esic-compliance",
  },

  openGraph: {
    title: "Ludhiana EPF & ESIC Compliance | Textile & Engineering Hub",
    description:
      "PF & ESIC specialists for Ludhiana hosiery exporters, cycle units, dyeing houses and engineering MSMEs.",
    url: "https://epfdesk.com/ludhiana-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ludhiana PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ludhiana EPF & ESIC Compliance | Hosiery & Cycle Industry | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Ludhiana hosiery exporters, cycle manufacturers and textile units.",
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
          Ludhiana EPF & ESIC Compliance: Hosiery Exporters, Cycle Units & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Ludhiana hosiery exporters, cycle part manufacturers, textile dyeing units and engineering MSMEs. RO Ludhiana audits, contractor PF liability and Principal Employer compliance handled."
        />

        <meta
          name="keywords"
          content="Ludhiana PF consultant, Ludhiana ESIC consultant, hosiery exporter PF ESIC Ludhiana, cycle industry labour compliance, textile dyeing PF audits, engineering MSME PF ESIC Ludhiana, Principal Employer liability Ludhiana, NWC 2025 wage restructuring Punjab"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ludhiana-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Ludhiana EPF & ESIC Consultant | Hosiery & Cycle Industry | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Ludhiana hosiery exporters, cycle manufacturers and textile processing units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/ludhiana-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ludhiana EPF & ESIC Compliance | Hosiery & Cycle Industry | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Ludhiana hosiery exporters and cycle units — wage audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-ludhiana"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Ludhiana EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ludhiana-epf-esic-compliance",
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
              "Ludhiana",
              "Focal Point",
              "Gill Road",
              "Miller Ganj",
              "Rahon Road",
              "Bahadur Ke Road",
              "Dhandari Kalan",
            ],
            description:
              "EPF & ESIC consultancy for Ludhiana’s textile, hosiery, cycle part, and engineering industries.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLudhiana} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLudhiana} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqLudhiana} />
    </>
  );
};

export default page;
