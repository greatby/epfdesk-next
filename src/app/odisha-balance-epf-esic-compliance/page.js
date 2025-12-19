import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataOdishaBalance,
  sectionsOdishaBalance,
  faqOdishaBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Odisha EPF & ESIC Compliance: Agri-Processing, Mineral Belts & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Odisha’s balance districts — Western Odisha agri-processing hubs (Bargarh), Southern mineral belts (Koraput, Rayagada) and regional MSMEs. Experts in RO Sambalpur & RO Berhampur enforcement, mining Principal Employer liability, contractor audits and Labour Code transitions.",

  keywords: [
    "Odisha PF consultant",
    "Odisha ESIC consultant",
    "Bargarh agro processing PF ESIC",
    "Koraput mining labour compliance",
    "Rayagada mineral belt PF audits",
    "Mining Principal Employer liability Odisha",
    "RO Sambalpur EPFO jurisdiction",
    "RO Berhampur EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
  },

  openGraph: {
    title: "Odisha EPF & ESIC Compliance | Agri & Mineral Belts",
    description:
      "PF & ESIC specialists for Odisha’s agri-processing districts and southern mineral belts governed by RO Sambalpur and RO Berhampur.",
    url: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Odisha PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Odisha EPF & ESIC Compliance | Agri & Mineral Belts | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Odisha agri-processing hubs and mineral districts.",
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
          Odisha EPF & ESIC Compliance: Agri-Processing, Mineral Belts & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Odisha’s balance districts — Western Odisha agri-processing hubs and Southern mineral belts. RO Sambalpur & RO Berhampur audits, mining contractor compliance and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Odisha PF consultant, Odisha ESIC consultant, Bargarh agro processing PF ESIC, Koraput mining labour compliance, Rayagada mineral belt PF audits, mining Principal Employer liability Odisha, NWC 2025 wage restructuring Odisha"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/odisha-balance-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Odisha EPF & ESIC Consultant | Agri & Mineral Belts | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Odisha’s agri-processing districts and southern mineral belts."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/odisha-balance-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Odisha EPF & ESIC Compliance | Agri & Mineral Belts | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Odisha agri-processing hubs and mineral districts — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-odisha-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Odisha EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
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
              "Koraput",
              "Rayagada",
              "Kalahandi",
              "Bargarh",
              "Balangir",
              "Sambalpur",
              "Dhenkanal",
              "Puri",
              "Nayagarh",
            ],
            description:
              "EPF & ESIC consultancy for Odisha’s western agri-industrial hubs and southern mineral belt.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataOdishaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsOdishaBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqOdishaBalance} />
    </>
  );
};

export default page;
