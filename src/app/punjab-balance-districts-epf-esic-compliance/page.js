import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPunjabBalance,
  sectionsPunjabBalance,
  faqPunjabBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Punjab EPF & ESIC Compliance: Energy Hubs, Export Clusters & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Punjab’s balance districts — Bathinda refinery and power corridor, Amritsar border trade exporters, Patiala–Rajpura pharma and logistics hubs, and regional MSMEs. Experts in RO Bathinda & RO Amritsar enforcement, contractor audits, Principal Employer liability and EEC-2025 compliance.",

  keywords: [
    "Punjab PF consultant",
    "Punjab ESIC consultant",
    "Bathinda refinery contractor PF ESIC",
    "Amritsar exporter labour compliance",
    "Patiala Rajpura pharma PF audits",
    "Punjab logistics hub PF ESIC",
    "Principal Employer liability Punjab",
    "RO Bathinda EPFO jurisdiction",
    "RO Amritsar EPFO jurisdiction",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Punjab EPF & ESIC Compliance | Energy, Export & Pharma Hubs",
    description:
      "PF & ESIC specialists for Punjab’s energy corridor, export clusters, pharma hubs and logistics districts.",
    url: "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Punjab PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Punjab EPF & ESIC Compliance | Energy & Export Hubs | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Punjab energy corridors, exporters and pharma clusters.",
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
          Punjab EPF & ESIC Compliance: Energy Hubs, Export Clusters & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Punjab’s balance districts — Bathinda refinery corridor, Amritsar border trade exporters, Patiala–Rajpura pharma hubs and logistics MSMEs. RO Bathinda & RO Amritsar audits, contractor compliance and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Punjab PF consultant, Punjab ESIC consultant, Bathinda refinery PF ESIC, Amritsar exporter labour compliance, Patiala Rajpura pharma PF audits, logistics hub PF ESIC Punjab, Principal Employer liability Punjab, NWC 2025 wage restructuring Punjab"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/punjab-balance-districts-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Punjab EPF & ESIC Consultant | Energy, Export & Pharma Hubs | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Punjab’s energy corridors, export clusters, pharma hubs and regional MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/punjab-balance-districts-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Punjab EPF & ESIC Compliance | Energy & Export Hubs | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Punjab energy corridors, exporters and pharma clusters — audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-punjab-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Punjab EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
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
              "Bathinda",
              "Mansa",
              "Barnala",
              "Amritsar",
              "Gurdaspur",
              "Pathankot",
              "Patiala",
              "Rajpura",
              "Fatehgarh Sahib",
              "Mandi Gobindgarh",
            ],
            description:
              "EPF & ESIC consultancy for Punjab’s energy, border trade, pharma, and steel manufacturing districts.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPunjabBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPunjabBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPunjabBalance} />
    </>
  );
};

export default page;
