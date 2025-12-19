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
    "Ranchi EPF & ESIC Compliance: IT Firms, Hospitals, Educational Institutions & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ranchi — IT startups, private hospitals, educational institutions, Tupudana industrial MSMEs and service-sector employers. Experts in RO Ranchi enforcement, New Wage Code compliance, contractor audits and Principal Employer liability.",

  keywords: [
    "Ranchi PF consultant",
    "Ranchi ESIC consultant",
    "Ranchi IT company PF ESIC",
    "Hospital PF ESIC Ranchi",
    "Educational institution PF ESIC Jharkhand",
    "Tupudana industrial area PF audits",
    "Principal Employer liability Ranchi",
    "RO Ranchi EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/ranchi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Ranchi EPF & ESIC Compliance | IT, Healthcare & Education Hub",
    description:
      "PF & ESIC specialists for Ranchi IT firms, hospitals, educational institutions and industrial MSMEs.",
    url: "https://epfdesk.com/ranchi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ranchi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ranchi EPF & ESIC Compliance | IT, Healthcare & Education | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Ranchi IT firms, hospitals, educational institutions and MSMEs.",
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
    Ranchi EPF & ESIC Compliance: IT Firms, Hospitals, Educational Institutions & PE Liability | EPFDesk
  </title>

  <meta
    name="description"
    content="EPF & ESIC compliance defence for Ranchi IT companies, private hospitals, educational institutions and Tupudana industrial MSMEs. RO Ranchi audits, New Wage Code compliance and Principal Employer liability handled."
  />

  <meta
    name="keywords"
    content="Ranchi PF consultant, Ranchi ESIC consultant, IT company PF ESIC Ranchi, hospital labour compliance Ranchi, educational institution PF ESIC Jharkhand, Tupudana MSME PF audits, Principal Employer liability Ranchi, NWC 2025 wage restructuring Jharkhand"
  />

  <link
    rel="canonical"
    href="https://epfdesk.com/ranchi-epf-esic-compliance"
  />

  {/* OpenGraph */}
  <meta
    property="og:title"
    content="Ranchi EPF & ESIC Consultant | IT, Healthcare & Education | EPFDesk"
  />
  <meta
    property="og:description"
    content="PF & ESIC compliance for Ranchi IT firms, hospitals, educational institutions and industrial MSMEs."
  />
  <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
  <meta
    property="og:url"
    content="https://epfdesk.com/ranchi-epf-esic-compliance"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Ranchi EPF & ESIC Compliance | IT, Healthcare & Education | EPFDesk"
  />
  <meta
    name="twitter:description"
    content="PF & ESIC services for Ranchi IT firms, hospitals and educational institutions — audits and PE liability handled."
  />
  <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
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
