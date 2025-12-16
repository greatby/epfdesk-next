import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDharashivDistrict,
  sectionsDharashivDistrict,
  faqDharashivDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Dharashiv (Osmanabad) EPF & ESIC Compliance for Sugar, Dal Mills & Textile Piece-Rate Wages | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Dharashiv Sugar Factories, PF on Retention Allowance, Dal Mill seasonal workers, and ESIC for garment & textile piece-rate staff. Specialists in RO Aurangabad audit defence.",
  keywords: [
    "Osmanabad PF consultant",
    "Dharashiv EPF ESIC compliance",
    "Piece rate PF garment factory",
    "Retention allowance PF sugar mill",
    "Dal mill PF ESIC Marathwada",
    "EPFO 7A defence Osmanabad",
  ],
  alternates: {
    canonical: "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dharashiv (Osmanabad) EPF & ESIC Compliance | Sugar, Dal & Textile",
    description:
      "High-risk PF & ESIC compliance for Dharashiv Sugar Mills, Dal Mills and Textile/Garment piece-rate workers.",
    url: "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dharashiv EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dharashiv EPF & ESIC Compliance | Sugar & Textile | EPFDesk",
    description:
      "PF & ESIC specialists for Dharashiv Sugar Factories, Dal Mills and Garment units.",
    images: ["https://epfdesk.com/images/logo.jpg"],
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
          Dharashiv (Osmanabad) EPF & ESIC Compliance for Sugar, Dal Mills & Textile Piece-Rate Wages | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Dharashiv Sugar Factories, PF on Retention Allowance, Dal Mills and Textile/Garment piece-rate workers."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-dharashiv"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Dharashiv (Osmanabad) EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar, Dal & Textile Units in Dharashiv",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS SAME AS BANGALORE */
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
              "EPF & ESIC compliance services for Dharashiv Sugar Mills, Dal Mills, Textile and Garment units with piece-rate wage exposure.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Dharashiv District" },
              { "@type": "Place", name: "Osmanabad MIDC" },
              { "@type": "Place", name: "Tuljapur" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "63",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDharashivDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDharashivDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDharashivDistrict} />
    </>
  );
};

export default page;
