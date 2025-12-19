import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataPanipat, sectionsPanipat, faqPanipat } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Panipat EPF & ESIC Compliance: Textile Exporters, IOCL Refinery Vendors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Panipat — handloom and powerloom units, textile exporters, IOCL Refinery contractors and dyeing/processing houses. Experts in RO Karnal enforcement, hazardous process ESIC coverage, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Panipat PF consultant",
    "Panipat ESIC consultant",
    "Panipat textile exporter PF ESIC",
    "Handloom powerloom labour compliance Panipat",
    "IOCL Panipat refinery contractor PF ESIC",
    "Textile dyeing unit PF audits Panipat",
    "Principal Employer liability Panipat",
    "RO Karnal EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/panipat-epf-esic-compliance",
  },

  openGraph: {
    title: "Panipat EPF & ESIC Compliance | Textile & Refinery Industrial Hub",
    description:
      "PF & ESIC specialists for Panipat textile exporters, handloom units and IOCL Refinery contractors.",
    url: "https://epfdesk.com/panipat-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Panipat PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Panipat EPF & ESIC Compliance | Textile & Refinery Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Panipat textile exporters and IOCL Refinery vendors.",
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
          Panipat EPF & ESIC Compliance: Textile Exporters, IOCL Refinery
          Vendors & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Panipat textile exporters, handloom and powerloom units, IOCL Refinery contractors and processing houses. RO Karnal audits, hazardous process ESIC coverage and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Panipat PF consultant, Panipat ESIC consultant, textile exporter PF ESIC Panipat, handloom powerloom labour compliance, IOCL refinery contractor PF audits Panipat, hazardous industry ESIC Haryana, Principal Employer liability Panipat, NWC 2025 wage restructuring Haryana"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/panipat-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Panipat EPF & ESIC Consultant | Textile & Refinery Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Panipat textile exporters, handloom units and IOCL Refinery contractors."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/panipat-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Panipat EPF & ESIC Compliance | Textile & Refinery Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Panipat textile exporters and IOCL Refinery vendors — wage audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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
            name: "Panipat EPF & ESIC Compliance Consultants | EPFDesk",
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
