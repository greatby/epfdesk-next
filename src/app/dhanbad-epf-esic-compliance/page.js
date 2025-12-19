import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataDhanbad, sectionsDhanbad, faqDhanbad } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Dhanbad EPF & ESIC Compliance: BCCL Coal Mines, Mining Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Dhanbad’s BCCL coal mines, mining contractors, coal transporters and coke oven units. Experts in RO Dhanbad enforcement, Principal Employer liability, hazardous industry ESIC and New Wage Code restructuring.",

  keywords: [
    "Dhanbad PF consultant",
    "Dhanbad ESIC consultant",
    "BCCL coal mine PF ESIC",
    "Dhanbad mining contractor compliance",
    "Coal transporter PF ESIC Dhanbad",
    "Coke oven PF ESIC Dhanbad",
    "Principal Employer liability mining",
    "RO Dhanbad EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dhanbad-epf-esic-compliance",
  },

  openGraph: {
    title: "Dhanbad EPF & ESIC Compliance | Coal Mining & PSU Contractors",
    description:
      "PF & ESIC specialists for BCCL contractors, coal transporters, coke oven units and mining-linked MSMEs in Dhanbad.",
    url: "https://epfdesk.com/dhanbad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhanbad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dhanbad EPF & ESIC Compliance | BCCL Mining Contractors | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Dhanbad coal mines, BCCL contractors and coke oven units.",
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
          Dhanbad EPF & ESIC Compliance: BCCL Coal Mines, Mining Contractors &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Dhanbad’s BCCL coal mines, mining contractors, coal transporters and coke oven plants. RO Dhanbad audits, hazardous industry ESIC and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Dhanbad PF consultant, Dhanbad ESIC consultant, BCCL coal mine PF ESIC, mining contractor compliance Dhanbad, coal transporter labour laws, coke oven ESIC Dhanbad, Principal Employer liability mining, NWC 2025 wage restructuring Dhanbad"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dhanbad-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Dhanbad EPF & ESIC Consultant | Coal Mining & PSU Contractors | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Dhanbad’s coal mining ecosystem — BCCL contractors, transporters and coke oven units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/dhanbad-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dhanbad EPF & ESIC Compliance | BCCL Coal Mines | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Dhanbad coal mines, mining contractors and coke oven units — PE liability and inspections handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-dhanbad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Dhanbad EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dhanbad-epf-esic-compliance",
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
              "Dhanbad",
              "Jharia",
              "Katras",
              "Sijua",
              "Govindpur",
              "Barwadda",
              "Nirsa",
              "Mugma",
            ],
            description:
              "EPF & ESIC consultancy for coal mining contractors, BCCL vendors, hard coke units, and PSU-linked industries in Dhanbad.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDhanbad} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDhanbad} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDhanbad} />
    </>
  );
};

export default page;
