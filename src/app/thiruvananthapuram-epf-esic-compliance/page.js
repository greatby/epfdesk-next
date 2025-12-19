import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataTrivandrum,
  sectionsTrivandrum,
  faqTrivandrum,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Thiruvananthapuram EPF & ESIC Compliance: Technopark IT Firms, Space-Tech Vendors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Thiruvananthapuram — Technopark IT companies, KINFRA Video Park units, ISRO/aerospace and electronics vendors, and service-sector employers. Experts in RO Trivandrum enforcement, New Wage Code compliance, contractor audits and Principal Employer liability.",

  keywords: [
    "Thiruvananthapuram PF consultant",
    "Thiruvananthapuram ESIC consultant",
    "Technopark PF ESIC compliance",
    "KINFRA aerospace vendor labour compliance",
    "ISRO contractor PF ESIC Trivandrum",
    "Electronics manufacturing PF audits Kerala",
    "Principal Employer liability Thiruvananthapuram",
    "RO Trivandrum EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
  },

  openGraph: {
    title: "Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech Hub",
    description:
      "PF & ESIC specialists for Technopark IT firms, aerospace vendors, electronics manufacturers and MSMEs in Thiruvananthapuram.",
    url: "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thiruvananthapuram PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Technopark IT firms, aerospace vendors and electronics units in Thiruvananthapuram.",
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
          Thiruvananthapuram EPF & ESIC Compliance: Technopark IT Firms,
          Space-Tech Vendors & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Thiruvananthapuram — Technopark IT companies, KINFRA aerospace and electronics vendors, and service-sector employers. RO Trivandrum audits, New Wage Code compliance and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Thiruvananthapuram PF consultant, Thiruvananthapuram ESIC consultant, Technopark PF ESIC compliance, KINFRA aerospace vendor labour laws, ISRO contractor PF ESIC Trivandrum, electronics manufacturing PF audits Kerala, Principal Employer liability Trivandrum, NWC 2025 wage restructuring Kerala"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/thiruvananthapuram-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Thiruvananthapuram EPF & ESIC Consultant | IT & Space-Tech Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Technopark IT firms, aerospace vendors and electronics manufacturers in Thiruvananthapuram."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/thiruvananthapuram-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Thiruvananthapuram IT companies and aerospace vendors — audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-trivandrum-epf-esic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Thiruvananthapuram EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
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
              "Thiruvananthapuram",
              "Trivandrum",
              "Kazhakkoottam",
              "Pallippuram",
              "Technopark",
              "KINFRA Aerospace Park",
              "KINFRA Video Park",
            ],
            description:
              "EPF & ESIC compliance consultancy for Technopark IT firms, aerospace and defense vendors, electronics units, and creative industries under RO Thiruvananthapuram.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTrivandrum} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTrivandrum} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqTrivandrum} />
    </>
  );
};

export default page;
