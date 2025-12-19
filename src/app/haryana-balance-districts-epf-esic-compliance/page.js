import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHaryanaBalance,
  sectionsHaryanaBalance,
  faqHaryanaBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Haryana EPF & ESIC Compliance: Sonipat Food Parks, Bawal Auto Hubs & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Haryana’s balance districts — Sonipat food processing parks, Bawal auto & EV hubs, Rewari MSMEs and Yamunanagar plywood clusters. Experts in RO Karnal/Gurugram enforcement, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Haryana PF consultant",
    "Haryana ESIC consultant",
    "Sonipat food park PF ESIC",
    "Bawal auto hub labour compliance",
    "Rewari MSME PF audits",
    "Yamunanagar plywood PF ESIC",
    "Principal Employer liability Haryana",
    "RO Karnal EPFO jurisdiction",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Haryana EPF & ESIC Compliance | Food, Auto & Industrial Clusters",
    description:
      "PF & ESIC specialists for Sonipat food parks, Bawal auto suppliers, Rewari MSMEs and Yamunanagar plywood manufacturers.",
    url: "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haryana PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haryana EPF & ESIC Compliance | Sonipat, Bawal & Rewari | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Haryana’s food parks, auto hubs and regional MSMEs.",
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
          Haryana EPF & ESIC Compliance: Sonipat Food Parks, Bawal Auto Hubs &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Haryana’s balance districts — Sonipat food processing parks, Bawal auto hubs, Rewari MSMEs and Yamunanagar plywood clusters. RO Karnal/Gurugram audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Haryana PF consultant, Haryana ESIC consultant, Sonipat food park PF ESIC, Bawal auto hub labour compliance, Rewari MSME PF audits, Yamunanagar plywood ESIC, Principal Employer liability Haryana, NWC 2025 wage restructuring Haryana"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/haryana-balance-districts-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Haryana EPF & ESIC Consultant | Food, Auto & Industrial Clusters | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Haryana’s food parks, auto hubs and regional industrial MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/haryana-balance-districts-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haryana EPF & ESIC Compliance | Sonipat, Bawal & Rewari | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Haryana’s food processing, auto manufacturing and MSME clusters — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-haryana-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Haryana EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
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
              "Sonipat",
              "Kundli",
              "Rai",
              "Barhi",
              "Rewari",
              "Bawal",
              "Dharuhera",
              "Yamunanagar",
              "Ambala",
              "Hisar",
            ],
            description:
              "EPF & ESIC consultancy for Haryana food parks, auto hubs, plywood industries, and regional MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaryanaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaryanaBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaryanaBalance} />
    </>
  );
};

export default page;
