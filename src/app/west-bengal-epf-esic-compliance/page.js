import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataWestBengal,
  sectionsWestBengal,
  faqWestBengal,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "West Bengal EPF & ESIC Compliance: North Bengal Tea Estates, Siliguri Logistics & Agri-Industrial Audits | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for West Bengal — North Bengal tea estates, Siliguri logistics and warehousing hubs, Hooghly–Nadia agri-industries, jute mills and MSMEs. Experts in RO Jalpaiguri / RO Kolkata enforcement, EEC-2025 filings, contractor audits and Principal Employer liability.",

  keywords: [
    "West Bengal PF consultant",
    "West Bengal ESIC consultant",
    "North Bengal tea estate PF ESIC",
    "Siliguri logistics labour compliance",
    "Hooghly jute mill PF ESIC",
    "Rice mill PF ESIC West Bengal",
    "RO Jalpaiguri EPFO jurisdiction",
    "RO Kolkata EPF audits",
    "Principal Employer liability West Bengal",
    "EEC 2025 PF ESIC compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/west-bengal-epf-esic-compliance",
  },

  openGraph: {
    title:
      "West Bengal EPF & ESIC Compliance | Tea Estates, Logistics & Agri-Industries",
    description:
      "PF & ESIC specialists for North Bengal tea estates, Siliguri logistics hubs, jute mills, rice mills and agri-processing units across West Bengal.",
    url: "https://epfdesk.com/west-bengal-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "West Bengal EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "West Bengal EPF & ESIC Compliance | Tea Estates & Agri-Industries | EPFDesk",
    description:
      "Expert PF & ESIC compliance for West Bengal tea estates, logistics hubs, jute mills, rice mills and agri-processing units.",
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
          West Bengal EPF & ESIC Compliance: Tea Estates, Siliguri Logistics &
          Agri-Industrial Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for West Bengal — North Bengal tea estates, Siliguri logistics hubs, jute mills, rice mills and agri-processing units. RO Jalpaiguri and RO Kolkata audits, EEC-2025 filings and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="West Bengal PF consultant, West Bengal ESIC consultant, North Bengal tea estate PF ESIC, Siliguri logistics labour compliance, Hooghly jute mill PF audits, rice mill PF ESIC West Bengal, RO Jalpaiguri EPFO jurisdiction, RO Kolkata EPF audits, Principal Employer liability West Bengal, EEC 2025 compliance"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/west-bengal-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="West Bengal EPF & ESIC Consultant | Tea Estates & Agri-Industries | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for West Bengal tea estates, logistics hubs, jute mills, rice mills and agri-processing employers."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/west-bengal-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="West Bengal EPF & ESIC Compliance | Tea Estates & Logistics | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for West Bengal tea estates, Siliguri logistics hubs and agri-industrial units."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-west-bengal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "West Bengal EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/west-bengal-epf-esic-compliance",
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
              "Siliguri",
              "Jalpaiguri",
              "Darjeeling",
              "Alipurduar",
              "Hooghly",
              "Nadia",
              "Murshidabad",
            ],
            description:
              "EPF & ESIC consultancy for North Bengal logistics, tea estates, and Central West Bengal agri-industrial clusters.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataWestBengal} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsWestBengal} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqWestBengal} />
    </>
  );
};

export default page;
