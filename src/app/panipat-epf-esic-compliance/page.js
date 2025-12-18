import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPanipat,
  sectionsPanipat,
  faqPanipat,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Panipat EPF & ESIC Compliance: Textile Hub & Refinery Vendor Experts | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Panipat handloom units, IOCL Refinery vendors, and textile exporters. Navigate RO Karnal audits, EEC-2025, and hazardous process rules.",
  alternates: {
    canonical: "https://epfdesk.com/panipat-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Panipat EPF & ESIC Compliance | Textile & Petrochemical Hub",
    description:
      "PF & ESIC experts for Panipat textile exporters, IOCL refinery contractors, handloom units, and Haryana MSMEs.",
    url: "https://epfdesk.com/panipat-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Panipat EPF ESIC Compliance",
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
          Panipat EPF & ESIC Compliance | Textile & Refinery Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Panipat textile exporters, handloom units, IOCL Refinery contractors, and MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/panipat-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-panipat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Panipat EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/panipat-epf-esic-compliance",
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
              "Panipat",
              "Old Industrial Area",
              "Sector 25",
              "Sector 29",
              "Samalkha",
              "Israna",
              "Baholi",
            ],
            description:
              "EPF & ESIC consultancy for Panipat textile exporters, handloom clusters, IOCL Refinery contractors, and agro-industrial MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPanipat} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPanipat} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPanipat} />
    </>
  );
};

export default page;