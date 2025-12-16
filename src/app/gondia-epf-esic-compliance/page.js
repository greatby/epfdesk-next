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
    canonical:
      "https://epfdesk.com/gondia-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Gondia EPF & ESIC Compliance | Rice Mills & Interstate Labour",
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
          Gondia EPF & ESIC Compliance for Rice Mills | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance services for Gondia rice mills, interstate migrant workers and seasonal agro-labour."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gondia-epf-esic-compliance"
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

            name:
              "Gondia EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Rice Mill & Interstate Labour Law Consultants Gondia",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/gondia-epf-esic-compliance",
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
        <PerformanceSectionIndustry
          data={heroDataGondiaDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct
          sections={sectionsGondiaDistrict}
        />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGondiaDistrict} />
    </>
  );
};

export default page;
