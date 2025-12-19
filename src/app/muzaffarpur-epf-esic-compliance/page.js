import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMuzaffarpur,
  sectionsMuzaffarpur,
  faqMuzaffarpur,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Muzaffarpur EPF & ESIC Compliance: Apparel Park, Food Park Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Muzaffarpur — Apparel Park exporters, Bela Industrial Area textile and leather units, Motipur Food Park vendors and North Bihar MSMEs. Experts in RO Muzaffarpur enforcement, contractor PF audits, Principal Employer liability and Labour Code transitions.",

  keywords: [
    "Muzaffarpur PF consultant",
    "Muzaffarpur ESIC consultant",
    "Muzaffarpur Apparel Park PF ESIC",
    "Bela Industrial Area labour compliance",
    "Motipur Food Park PF audits",
    "Leather unit PF ESIC Muzaffarpur",
    "Principal Employer liability Muzaffarpur",
    "RO Muzaffarpur EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Muzaffarpur EPF & ESIC Compliance | Textile & Agro-Industrial Hub",
    description:
      "PF & ESIC specialists for Muzaffarpur apparel exporters, Bela textile units, Motipur Food Park vendors and leather processors.",
    url: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Muzaffarpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muzaffarpur EPF & ESIC Compliance | Textile & Food Park | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Muzaffarpur apparel exporters, food-park vendors and leather units.",
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
          Muzaffarpur EPF & ESIC Compliance: Apparel Park, Food Park Units & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Muzaffarpur — Apparel Park exporters, Bela Industrial Area textile and leather units, Motipur Food Park vendors and MSMEs. RO Muzaffarpur audits, contractor PF liability and Principal Employer compliance handled."
        />

        <meta
          name="keywords"
          content="Muzaffarpur PF consultant, Muzaffarpur ESIC consultant, Apparel Park PF ESIC Muzaffarpur, Bela Industrial Area labour compliance, Motipur Food Park PF audits, leather unit PF ESIC Muzaffarpur, Principal Employer liability Muzaffarpur, NWC 2025 wage restructuring Bihar"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/muzaffarpur-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Muzaffarpur EPF & ESIC Consultant | Textile & Food Park Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Muzaffarpur apparel exporters, food-park vendors and leather processing units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/muzaffarpur-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muzaffarpur EPF & ESIC Compliance | Textile & Food Park | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Muzaffarpur apparel exporters and Motipur Food Park units — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-muzaffarpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Muzaffarpur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
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
              "Muzaffarpur",
              "Bela",
              "Motipur",
              "Muzaffarpur City",
              "NH-28 Corridor",
            ],
            description:
              "EPF & ESIC consultancy for Muzaffarpur textile parks, food processing units, leather industries, and North Bihar MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMuzaffarpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMuzaffarpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMuzaffarpur} />
    </>
  );
};

export default page;
