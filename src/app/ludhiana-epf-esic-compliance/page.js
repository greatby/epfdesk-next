import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataLudhiana,
  sectionsLudhiana,
  faqLudhiana,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ludhiana EPF & ESIC Compliance: Textile & Cycle Industry Audit Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Ludhiana hosiery units, cycle part manufacturers, and textile exporters. Navigate RO Ludhiana audits, EEC-2025, and PE liability.",
  alternates: {
    canonical:
      "https://epfdesk.com/ludhiana-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ludhiana EPF & ESIC Compliance | Textile & Engineering Powerhouse",
    description:
      "PF & ESIC experts for Ludhiana hosiery exporters, cycle part units, dyeing houses, and engineering MSMEs.",
    url: "https://epfdesk.com/ludhiana-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ludhiana EPF ESIC Compliance",
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
          Ludhiana EPF & ESIC Compliance | Textile & Cycle Industry Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Ludhiana hosiery exporters, cycle part manufacturers, dyeing units, and engineering MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/ludhiana-epf-esic-compliance"
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
            name:
              "Ludhiana EPF & ESIC Compliance Consultants | EPFDesk",
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