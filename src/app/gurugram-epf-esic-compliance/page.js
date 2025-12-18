import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGurugram,
  sectionsGurugram,
  faqGurugram,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Gurugram EPF & ESIC Consultants: IT Sector & Auto-Hub Compliance Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Gurugram IT MNCs, Manesar auto units, and Cyber City startups. Navigate RO Gurugram audits, the New Wage Code 50% rule, and local hiring laws.",
  alternates: {
    canonical: "https://epfdesk.com/gurugram-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Gurugram EPF & ESIC Compliance | IT & Automotive Powerhouse",
    description:
      "PF & ESIC experts for Gurugram MNCs, IMT Manesar auto suppliers, Cyber City startups, and Haryana corporates.",
    url: "https://epfdesk.com/gurugram-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gurugram EPF ESIC Compliance",
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
          Gurugram EPF & ESIC Compliance | IT & Auto-Hub Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Gurugram IT MNCs, IMT Manesar auto units, Cyber City startups, and Haryana corporates."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/gurugram-epf-esic-compliance"
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
            name:
              "Gurugram EPF & ESIC Compliance Consultants | EPFDesk",
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