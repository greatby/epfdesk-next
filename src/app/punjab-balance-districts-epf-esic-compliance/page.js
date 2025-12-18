import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPunjabBalance,
  sectionsPunjabBalance,
  faqPunjabBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Punjab EPF & ESIC Compliance: Bathinda, Amritsar & Patiala Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Bathinda refinery vendors, Amritsar exporters, and Rajpura pharma hubs. Navigate RO Bathinda/Amritsar audits and EEC-2025.",
  alternates: {
    canonical:
      "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Punjab EPF & ESIC Compliance | Regional Industrial & Energy Hubs",
    description:
      "PF & ESIC experts for Bathinda energy corridor, Amritsar trade exporters, and Patiala–Rajpura pharma and logistics clusters.",
    url: "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Punjab EPF ESIC Compliance",
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
          Punjab EPF & ESIC Compliance | Regional Industrial Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Punjab’s energy hubs, border trade clusters, pharma corridors, and regional MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/punjab-balance-districts-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-punjab-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Punjab EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
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
              "Bathinda",
              "Mansa",
              "Barnala",
              "Amritsar",
              "Gurdaspur",
              "Pathankot",
              "Patiala",
              "Rajpura",
              "Fatehgarh Sahib",
              "Mandi Gobindgarh",
            ],
            description:
              "EPF & ESIC consultancy for Punjab’s energy, border trade, pharma, and steel manufacturing districts.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPunjabBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPunjabBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPunjabBalance} />
    </>
  );
};

export default page;