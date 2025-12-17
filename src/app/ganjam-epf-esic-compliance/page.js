import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGanjamDistrict,
  sectionsGanjamDistrict,
  faqGanjamDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ganjam EPF & ESIC Compliance: Berhampur & Gopalpur SEZ Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Gopalpur Port contractors, Tata Steel SEZ units and Berhampur MSMEs. Navigate RO Berhampur audits, EEC-2025 and SEZ compliance.",
  keywords: [
    "Ganjam PF consultant",
    "Berhampur EPF ESIC compliance",
    "Gopalpur SEZ PF audit",
    "Port contractor ESIC Odisha",
    "RO Berhampur EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/ganjam-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ganjam EPF & ESIC Compliance | Gopalpur SEZ & Port Hub",
    description:
      "PF & ESIC specialists for Ganjam’s SEZ, port logistics and MSME ecosystem governed by RO Berhampur.",
    url: "https://epfdesk.com/ganjam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ganjam EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ganjam EPF & ESIC Consultants | Berhampur & Gopalpur",
    description:
      "High-risk PF & ESIC compliance for Gopalpur SEZ, port contractors and Berhampur MSMEs.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ============================
   PAGE COMPONENT
============================ */
const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Ganjam EPF & ESIC Compliance: Gopalpur SEZ & Port Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Gopalpur SEZ contractors, Berhampur MSMEs and hazardous-process units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ganjam-epf-esic-compliance"
        />

        <meta property="og:title" content="Ganjam EPF & ESIC Compliance" />
        <meta
          property="og:description"
          content="PF & ESIC experts for Ganjam’s SEZ, port logistics and MSME ecosystem."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ============================
          JSON-LD SCHEMA
      ============================ */}
      <Script
        id="schema-ganjam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Ganjam EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Gopalpur SEZ & Berhampur MSMEs",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ganjam-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* CONSISTENT ADDRESS */
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
              "EPF & ESIC compliance specialists for Ganjam SEZ units, port contractors and MSMEs governed by RO Berhampur.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Ganjam District" },
              { "@type": "Place", name: "Berhampur" },
              { "@type": "Place", name: "Gopalpur SEZ" },
              { "@type": "Place", name: "Chatrapur" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "81",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGanjamDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGanjamDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGanjamDistrict} />
    </>
  );
};

export default page;
