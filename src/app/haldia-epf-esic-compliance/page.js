import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataHaldia, sectionsHaldia, faqHaldia } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Haldia EPF & ESIC Compliance: Petrochemical Units, IOCL & Port Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Haldia petrochemical units, IOCL refinery contractors, port and logistics operators. Experts in RO Haldia enforcement, hazardous process ESIC, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Haldia PF consultant",
    "Haldia ESIC consultant",
    "Haldia Petrochemical PF ESIC",
    "IOCL Haldia refinery contractor compliance",
    "Port labour compliance Haldia",
    "Logistics contractor PF ESIC Haldia",
    "Principal Employer liability Haldia",
    "RO Haldia EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/haldia-epf-esic-compliance",
  },

  openGraph: {
    title: "Haldia EPF & ESIC Compliance | Petrochemical & Port Industrial Hub",
    description:
      "PF & ESIC specialists for Haldia petrochemical units, IOCL refinery vendors, port operators and logistics contractors.",
    url: "https://epfdesk.com/haldia-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldia PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Haldia EPF & ESIC Compliance | Petrochemical & Port Contractors | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Haldia petrochemical units, IOCL contractors and port logistics firms.",
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
          Haldia EPF & ESIC Compliance: Petrochemical Units, IOCL & Port
          Contractors & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Haldia petrochemical units, IOCL refinery contractors, port operators and logistics firms. RO Haldia audits, hazardous process ESIC and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Haldia PF consultant, Haldia ESIC consultant, Haldia Petrochemical PF ESIC, IOCL Haldia refinery contractor compliance, port labour laws Haldia, logistics contractor PF audits, Principal Employer liability Haldia, NWC 2025 wage restructuring West Bengal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/haldia-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Haldia EPF & ESIC Consultant | Petrochemical & Port Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Haldia’s petrochemical plants, refinery vendors and port logistics operations."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/haldia-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haldia EPF & ESIC Compliance | Petrochemical & Port Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Haldia petrochemical units, IOCL contractors and port logistics firms — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-haldia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Haldia EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haldia-epf-esic-compliance",
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
              "Haldia",
              "Tamluk",
              "Purba Medinipur",
              "Haldia Industrial Area",
            ],
            description:
              "EPF & ESIC consultancy for Haldia’s petrochemical, refinery, port, and hazardous process industries.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaldia} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaldia} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaldia} />
    </>
  );
};

export default page;
