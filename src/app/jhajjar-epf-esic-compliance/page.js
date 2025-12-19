import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataJhajjar, sectionsJhajjar, faqJhajjar } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jhajjar EPF & ESIC Compliance: Bahadurgarh Footwear Units, MET City & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jhajjar district — Bahadurgarh footwear manufacturing clusters, MET City industrial units and regional MSMEs. Experts in RO Rohtak enforcement, contractor PF audits, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Jhajjar PF consultant",
    "Jhajjar ESIC consultant",
    "Bahadurgarh footwear PF ESIC",
    "MET City Jhajjar labour compliance",
    "Footwear factory PF audits Haryana",
    "Principal Employer liability Jhajjar",
    "RO Rohtak EPFO jurisdiction",
    "NWC 2025 wage restructuring Jhajjar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jhajjar-epf-esic-compliance",
  },

  openGraph: {
    title: "Jhajjar EPF & ESIC Compliance | Footwear & MET City Industrial Hub",
    description:
      "PF & ESIC specialists for Bahadurgarh footwear manufacturers, MET City vendors and Jhajjar industrial MSMEs.",
    url: "https://epfdesk.com/jhajjar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jhajjar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jhajjar EPF & ESIC Compliance | Bahadurgarh Footwear Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Bahadurgarh footwear units, MET City industries and Jhajjar MSMEs.",
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
          Jhajjar EPF & ESIC Compliance: Bahadurgarh Footwear Units, MET City &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Jhajjar district — Bahadurgarh footwear manufacturing units, MET City industries and regional MSMEs. RO Rohtak audits, contractor PF liability and Principal Employer compliance handled."
        />

        <meta
          name="keywords"
          content="Jhajjar PF consultant, Jhajjar ESIC consultant, Bahadurgarh footwear PF ESIC, MET City Jhajjar labour compliance, footwear factory PF audits Haryana, Principal Employer liability Jhajjar, NWC 2025 wage restructuring Haryana"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jhajjar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Jhajjar EPF & ESIC Consultant | Bahadurgarh Footwear & MET City Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Bahadurgarh footwear manufacturers, MET City industrial units and Jhajjar MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/jhajjar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jhajjar EPF & ESIC Compliance | Bahadurgarh Footwear Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Bahadurgarh footwear units and MET City industries — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jhajjar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Jhajjar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jhajjar-epf-esic-compliance",
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
              "Jhajjar",
              "Bahadurgarh",
              "MET City",
              "Badli",
              "MIE Bahadurgarh",
              "Sector 16",
              "Sector 17",
            ],
            description:
              "EPF & ESIC consultancy for Bahadurgarh footwear clusters, MET City MNC vendors, and Jhajjar industrial units.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJhajjar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJhajjar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJhajjar} />
    </>
  );
};

export default page;
