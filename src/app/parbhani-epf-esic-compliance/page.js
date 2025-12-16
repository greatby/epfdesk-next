import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataParbhaniDistrict,
  sectionsParbhaniDistrict,
  faqParbhaniDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Parbhani EPF & ESIC Compliance for Dal Mills, Cotton Ginning & Seasonal Agro-Processing | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Parbhani Dal Mills, PF liability on seasonal cotton ginning workers, and mandatory ESIC for agro-processing factories. Specialists in RO Aurangabad audit defence.",
  keywords: [
    "Parbhani PF consultant",
    "Parbhani EPF ESIC compliance",
    "Dal mill PF piece rate",
    "Cotton ginning ESIC",
    "Seasonal worker PF liability",
    "EPFO 7A defence Parbhani",
  ],
  alternates: {
    canonical: "https://epfdesk.com/parbhani-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Parbhani EPF & ESIC Compliance | Dal Mills & Cotton Ginning",
    description:
      "High-risk PF & ESIC compliance for Parbhani Dal Mills, Cotton Ginning units and seasonal agro-processing workers.",
    url: "https://epfdesk.com/parbhani-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Parbhani EPF ESIC Compliance",
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
          Parbhani EPF & ESIC Compliance for Dal Mills & Cotton Ginning | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Parbhani Dal Mills, PF liability on seasonal cotton ginning workers and agro-processing factories."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/parbhani-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-parbhani"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Parbhani EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Dal Mills & Cotton Ginning in Parbhani",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/parbhani-epf-esic-compliance",
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
              "EPF & ESIC compliance services for Parbhani Dal Mills, Cotton Ginning factories, seasonal agro-processing units and educational institutions.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Parbhani District" },
              { "@type": "Place", name: "Parbhani MIDC" },
              { "@type": "Place", name: "Manwat" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "58",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataParbhaniDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsParbhaniDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqParbhaniDistrict} />
    </>
  );
};

export default page;
