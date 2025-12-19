import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataGurugram, sectionsGurugram, faqGurugram } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Gurugram EPF & ESIC Compliance: IT MNCs, IMT Manesar Auto Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Gurugram IT MNCs, Cyber City offices, IMT Manesar auto units and Haryana corporates. Experts in RO Gurugram enforcement, New Wage Code 50% rule, contractor PF liability and local labour law audits.",

  keywords: [
    "Gurugram PF consultant",
    "Gurugram ESIC consultant",
    "IT company PF ESIC Gurugram",
    "IMT Manesar auto unit labour compliance",
    "Cyber City PF audits",
    "Principal Employer liability Gurugram",
    "RO Gurugram EPFO jurisdiction",
    "NWC 2025 wage restructuring Gurugram",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gurugram-epf-esic-compliance",
  },

  openGraph: {
    title: "Gurugram EPF & ESIC Compliance | IT & Automotive Powerhouse",
    description:
      "PF & ESIC specialists for Gurugram IT MNCs, Cyber City startups, IMT Manesar auto suppliers and corporates.",
    url: "https://epfdesk.com/gurugram-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gurugram PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gurugram EPF & ESIC Compliance | IT & Auto Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Gurugram IT MNCs, IMT Manesar auto units and Cyber City offices.",
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
          Gurugram EPF & ESIC Compliance: IT MNCs, IMT Manesar Auto Units & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Gurugram IT MNCs, Cyber City offices, IMT Manesar auto units and Haryana corporates. RO Gurugram audits, New Wage Code 50% rule and contractor PF liability handled."
        />

        <meta
          name="keywords"
          content="Gurugram PF consultant, Gurugram ESIC consultant, IT company PF ESIC Gurugram, IMT Manesar auto labour compliance, Cyber City PF audits, Principal Employer liability Gurugram, NWC 2025 wage restructuring Gurugram"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gurugram-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Gurugram EPF & ESIC Consultant | IT & Automotive Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Gurugram’s IT, auto and corporate clusters."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/gurugram-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gurugram EPF & ESIC Compliance | IT & Auto Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Gurugram IT MNCs, IMT Manesar auto units and Cyber City startups — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-gurugram"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Gurugram EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/gurugram-epf-esic-compliance",
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
              "Gurugram",
              "IMT Manesar",
              "Udyog Vihar",
              "Cyber City",
              "Golf Course Road",
              "Sohna Road",
            ],
            description:
              "EPF & ESIC consultancy for Gurugram IT MNCs, Manesar auto suppliers, startups, and Haryana manufacturing units.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGurugram} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGurugram} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGurugram} />
    </>
  );
};

export default page;
