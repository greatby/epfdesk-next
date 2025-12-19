import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNorth24Parganas,
  sectionsNorth24Parganas,
  faqNorth24Parganas,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "North 24 Parganas EPF & ESIC Compliance: Sector V IT Firms, Barrackpore Industries & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for North 24 Parganas — Salt Lake Sector V IT companies, Barrackpore manufacturing units, Barasat logistics hubs and MSMEs. Experts in RO Barrackpore enforcement, IT wage audits, Principal Employer liability and EEC-2025 filings.",

  keywords: [
    "North 24 Parganas PF consultant",
    "North 24 Parganas ESIC consultant",
    "Sector V PF ESIC compliance",
    "Barrackpore industrial labour compliance",
    "Barasat logistics PF audits",
    "IT company wage audit North 24 Parganas",
    "Principal Employer liability West Bengal",
    "RO Barrackpore EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
  },

  openGraph: {
    title: "North 24 Parganas EPF & ESIC Compliance | IT & Industrial Corridor",
    description:
      "PF & ESIC specialists for Sector V IT firms, Barrackpore industries, logistics hubs and MSMEs in North 24 Parganas.",
    url: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "North 24 Parganas PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "North 24 Parganas EPF & ESIC Compliance | IT & Industrial Corridor | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Sector V IT companies, Barrackpore industries and logistics hubs.",
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
          North 24 Parganas EPF & ESIC Compliance: Sector V IT Firms,
          Barrackpore Industries & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for North 24 Parganas — Salt Lake Sector V IT companies, Barrackpore manufacturing units, Barasat logistics hubs and MSMEs. RO Barrackpore audits, IT wage scrutiny and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="North 24 Parganas PF consultant, North 24 Parganas ESIC consultant, Sector V PF ESIC compliance, Barrackpore industry labour laws, Barasat logistics PF audits, IT wage audit West Bengal, Principal Employer liability North 24 Parganas, NWC 2025 wage restructuring WB"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/north-24-parganas-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="North 24 Parganas EPF & ESIC Consultant | IT & Industrial Corridor | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Sector V IT firms, Barrackpore industries and logistics hubs in North 24 Parganas."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/north-24-parganas-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="North 24 Parganas EPF & ESIC Compliance | IT & Manufacturing | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for North 24 Parganas IT companies, manufacturing units and logistics hubs — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-north-24-parganas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "North 24 Parganas EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
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
              "Salt Lake Sector V",
              "Barrackpore",
              "Barasat",
              "Madhyamgram",
              "North 24 Parganas",
            ],
            description:
              "EPF & ESIC consultancy for IT companies, manufacturing units, and logistics hubs across North 24 Parganas.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNorth24Parganas} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNorth24Parganas} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNorth24Parganas} />
    </>
  );
};

export default page;
