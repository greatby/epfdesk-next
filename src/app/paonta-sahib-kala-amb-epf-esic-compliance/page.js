import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqSirmaur, heroDataSirmaur, sectionsSirmaur } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Paonta Sahib & Kala Amb EPF & ESIC Compliance: Pharma, Chemical Plants & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Sirmaur industrial belt — Paonta Sahib pharma units, Kala Amb steel and chemical plants, and MSMEs. Experts in RO Shimla & SRO Baddi enforcement, hazardous-process ESIC coverage, contractor audits and Principal Employer liability.",

  keywords: [
    "Paonta Sahib PF consultant",
    "Paonta Sahib ESIC consultant",
    "Kala Amb PF ESIC compliance",
    "Sirmaur pharma industry labour laws",
    "Chemical plant ESIC hazardous process Himachal",
    "Steel plant PF audits Kala Amb",
    "Principal Employer liability Sirmaur",
    "RO Shimla EPFO jurisdiction",
    "SRO Baddi EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Paonta Sahib & Kala Amb EPF & ESIC Compliance | Sirmaur Industrial Belt",
    description:
      "PF & ESIC specialists for Paonta Sahib pharma units, Kala Amb chemical plants and Sirmaur MSMEs.",
    url: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Paonta Sahib Kala Amb PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Paonta Sahib & Kala Amb EPF & ESIC Compliance | Pharma & Chemical Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Paonta Sahib pharma units and Kala Amb chemical plants.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ============================
   PAGE
============================ */
const page = () => {
  return (
    <>
      <Head>
        <title>
          Paonta Sahib & Kala Amb EPF & ESIC Compliance: Pharma, Chemical Plants
          & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Paonta Sahib pharma units, Kala Amb steel and chemical plants, and Sirmaur MSMEs. RO Shimla & SRO Baddi audits, hazardous-process ESIC coverage and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Paonta Sahib PF consultant, Paonta Sahib ESIC consultant, Kala Amb PF ESIC compliance, pharma labour laws Himachal, chemical plant ESIC hazardous process, steel plant PF audits Kala Amb, Principal Employer liability Sirmaur, NWC 2025 wage restructuring Himachal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Paonta Sahib & Kala Amb EPF & ESIC Consultant | Pharma & Chemical Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Paonta Sahib pharma units, Kala Amb chemical plants and Sirmaur industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paonta Sahib & Kala Amb EPF & ESIC Compliance | Pharma & Chemical Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Paonta Sahib pharma units and Kala Amb chemical plants — audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-sirmaur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Paonta Sahib & Kala Amb EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
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
              "Paonta Sahib",
              "Kala Amb",
              "Nahan",
              "Moginand",
              "Sirmaur District",
            ],
            description:
              "EPF & ESIC compliance consultancy for Paonta Sahib pharma units and Kala Amb steel, chemical, and MSME industries under RO Shimla / SRO Baddi enforcement.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSirmaur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSirmaur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSirmaur} />
    </>
  );
};

export default page;
