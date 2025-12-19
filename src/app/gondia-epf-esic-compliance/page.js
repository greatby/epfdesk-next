import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGondiaDistrict,
  sectionsGondiaDistrict,
  faqGondiaDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Gondia EPF & ESIC Compliance for Rice Mills & Interstate Workers | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Gondia Rice Mills, interstate tendu leaf workers, seasonal agro-labour and Minimum Wages Act compliance. RO Nagpur defence.",
  keywords: [
    "Gondia EPF consultant",
    "Rice mill PF compliance Gondia",
    "Interstate Migrant Workmen Act Gondia",
    "Tendu leaf contractor EPF ESIC",
    "RO Nagpur EPFO defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/gondia-epf-esic-compliance",
  },
  openGraph: {
    title: "Gondia EPF & ESIC Compliance | Rice Mills & Interstate Labour",
    description:
      "Statutory EPF & ESIC compliance for Gondia rice mills, agro-processing and interstate seasonal workers.",
    url: "https://epfdesk.com/gondia-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gondia EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Gondia EPF & ESIC Compliance: Rice Mills, Interstate Migrant Labour &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Gondia rice mills, interstate migrant workers and seasonal agro-labour. Contractor PF liability, wage audits and inspection readiness handled."
        />

        <meta
          name="keywords"
          content="Gondia PF consultant, Gondia ESIC consultant, rice mill PF ESIC Gondia, interstate migrant labour compliance, seasonal agro labour PF ESIC, contractor PF liability Gondia, Principal Employer liability Gondia, NWC 2025 wage restructuring Gondia"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gondia-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Gondia EPF & ESIC Consultant | Rice Mills & Agro Labour | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Gondia’s rice mills, migrant workforce and seasonal agro-based industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/gondia-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gondia EPF & ESIC Compliance | Rice Mills & Migrant Labour | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Gondia rice mills and interstate migrant labour — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-gondia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Gondia EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Rice Mill & Interstate Labour Law Consultants Gondia",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/gondia-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS KEPT SAME AS BANGALORE */
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "EPF, ESIC, ISMWA and Minimum Wages Act compliance for Gondia rice mills, tendu leaf processing and interstate seasonal labour.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Gondia District",
              },
              { "@type": "Place", name: "Gondia City" },
              { "@type": "Place", name: "Tirora" },
              { "@type": "Place", name: "Arjuni Morgaon" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "38",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGondiaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGondiaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGondiaDistrict} />
    </>
  );
};

export default page;
