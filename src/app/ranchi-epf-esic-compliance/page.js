import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRanchi,
  sectionsRanchi,
  faqRanchi,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ranchi EPF & ESIC Consultants: IT, Healthcare & Industrial Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Ranchi IT firms, Tupudana MSMEs, and private hospitals. Navigate RO Ranchi audits, New Wage Code, and EEC-2025 filings.",
  alternates: {
    canonical: "https://epfdesk.com/ranchi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ranchi EPF & ESIC Compliance | IT, Healthcare & MSME Hub",
    description:
      "PF & ESIC experts for Ranchi IT startups, hospitals, educational institutions, and industrial clusters.",
    url: "https://epfdesk.com/ranchi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ranchi EPF ESIC Compliance",
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
          Ranchi EPF & ESIC Compliance | IT, Healthcare & MSME Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Ranchi IT companies, private hospitals, educational institutions, and industrial MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/ranchi-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-ranchi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Ranchi EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ranchi-epf-esic-compliance",
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
              "Ranchi",
              "Namkum",
              "Tupudana",
              "Tatisilwai",
              "Khunti",
            ],
            description:
              "EPF & ESIC consultancy for Ranchi IT startups, healthcare institutions, educational hubs, and Jharkhand MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRanchi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRanchi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRanchi} />
    </>
  );
};

export default page;
