import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChandrapurDistrict,
  sectionsChandrapurDistrict,
  faqChandrapurDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Chandrapur EPF & ESIC Compliance for WCL, CSTPS & Mining Contractors | EPFDesk",
  description:
    "Critical EPF & ESIC defence for Chandrapur power plants, coal mining, cement factories and PSU contractors. CLRA PE liability, BOCW cess and hazard compliance under RO Nagpur.",
  keywords: [
    "Chandrapur EPF consultant",
    "CSTPS contractor PF compliance",
    "WCL mining EPF ESIC",
    "Power plant CLRA liability",
    "Cement factory ESIC hazard",
    "RO Nagpur EPFO defence",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chandrapur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chandrapur EPF & ESIC Compliance | Power, Mining & PSU Contractors",
    description:
      "EPF & ESIC compliance for Chandrapur coal, power, cement and heavy industrial contractors.",
    url: "https://epfdesk.com/chandrapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chandrapur EPF ESIC Compliance",
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
          Chandrapur EPF & ESIC Compliance for WCL & CSTPS Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Chandrapur coal mining, CSTPS power plant contractors, cement factories and hazardous industries."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chandrapur-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-chandrapur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Chandrapur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Power, Mining & PSU Labour Law Consultants Chandrapur",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/chandrapur-epf-esic-compliance",
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
              "EPF, ESIC, CLRA and BOCW compliance services for Chandrapur power plants, coal mining, cement factories and heavy industry contractors.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Chandrapur District",
              },
              { "@type": "Place", name: "Ballarpur" },
              { "@type": "Place", name: "Ghugus" },
              { "@type": "Place", name: "Rajura" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "53",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry
          data={heroDataChandrapurDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct
          sections={sectionsChandrapurDistrict}
        />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChandrapurDistrict} />
    </>
  );
};

export default page;
