import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJharkhandBalance,
  sectionsJharkhandBalance,
  faqJharkhandBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jharkhand EPF & ESIC Compliance: Mining Belts, Sponge Iron Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jharkhand’s balance districts — Ramgarh sponge iron units, Hazaribagh mining vendors, Deoghar MSMEs and logistics corridors. Experts in RO Dhanbad/Ranchi enforcement, mining Principal Employer liability, contractor audits and New Wage Code restructuring.",

  keywords: [
    "Jharkhand PF consultant",
    "Jharkhand ESIC consultant",
    "Ramgarh sponge iron PF ESIC",
    "Hazaribagh mining contractor compliance",
    "Deoghar MSME PF audits",
    "Mining Principal Employer liability Jharkhand",
    "RO Dhanbad EPFO jurisdiction",
    "RO Ranchi EPFO jurisdiction",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Jharkhand EPF & ESIC Compliance | Mining & Industrial Corridors",
    description:
      "PF & ESIC specialists for Ramgarh sponge iron units, Hazaribagh mining vendors, Deoghar MSMEs and Jharkhand logistics belts.",
    url: "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jharkhand EPF & ESIC Compliance | Mining & Industrial Belts | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Jharkhand mining districts, sponge iron units and regional MSMEs.",
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
          Jharkhand EPF & ESIC Compliance: Mining Belts, Sponge Iron Units & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Jharkhand’s balance districts — Ramgarh sponge iron units, Hazaribagh mining contractors, Deoghar MSMEs and logistics corridors. RO Dhanbad/Ranchi audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Jharkhand PF consultant, Jharkhand ESIC consultant, Ramgarh sponge iron PF ESIC, Hazaribagh mining contractor compliance, Deoghar MSME PF audits, mining Principal Employer liability Jharkhand, NWC 2025 wage restructuring Jharkhand"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Jharkhand EPF & ESIC Consultant | Mining & Industrial Corridors | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Jharkhand’s mining belts, sponge iron units and regional MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jharkhand EPF & ESIC Compliance | Mining & Industrial Belts | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Jharkhand mining districts, sponge iron units and MSMEs — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jharkhand-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Jharkhand EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
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
              "Ramgarh",
              "Hazaribagh",
              "Giridih",
              "Koderma",
              "Deoghar",
              "Dumka",
              "Sahibganj",
              "Palamu",
              "Garhwa",
              "Latehar",
            ],
            description:
              "EPF & ESIC consultancy for Jharkhand mining corridors, sponge iron units, logistics hubs, and Santal Pargana MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJharkhandBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJharkhandBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJharkhandBalance} />
    </>
  );
};

export default page;
