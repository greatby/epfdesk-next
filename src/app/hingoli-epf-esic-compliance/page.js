import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHingoliDistrict,
  sectionsHingoliDistrict,
  faqHingoliDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Hingoli EPF & ESIC Compliance for Cotton Ginning, Oil Mills & Newly Notified Areas | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Hingoli Cotton Ginning units, PF liability on seasonal piece-rate workers, and mandatory ESIC compliance in newly notified MIDC and commercial areas.",
  keywords: [
    "Hingoli EPF consultant",
    "Hingoli ESIC registration",
    "Cotton ginning PF piece rate",
    "Newly notified ESIC area Hingoli",
    "Seasonal worker PF liability",
    "EPFO 7A defence Hingoli",
  ],
  alternates: {
    canonical: "https://epfdesk.com/hingoli-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Hingoli EPF & ESIC Compliance | Cotton Ginning & Newly Notified Areas",
    description:
      "High-risk PF & ESIC compliance for Hingoli agro-processing, cotton ginning units and newly ESIC-notified establishments.",
    url: "https://epfdesk.com/hingoli-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hingoli EPF ESIC Compliance",
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
          Hingoli EPF & ESIC Compliance for Cotton Ginning | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Hingoli Cotton Ginning units, seasonal piece-rate PF liability and newly notified ESIC areas."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/hingoli-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-hingoli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Hingoli EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Hingoli Agro-Processing & Cotton Ginning",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/hingoli-epf-esic-compliance",
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
              "EPF & ESIC compliance services for Hingoli Cotton Ginning units, Oil Mills, Dal Mills and newly ESIC-notified MSMEs.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Hingoli District" },
              { "@type": "Place", name: "Hingoli MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "44",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHingoliDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHingoliDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHingoliDistrict} />
    </>
  );
};

export default page;
