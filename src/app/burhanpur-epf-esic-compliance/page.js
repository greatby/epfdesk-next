import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBurhanpurDistrict,
  sectionsBurhanpurDistrict,
  faqBurhanpurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Burhanpur EPF & ESIC Compliance: Textile Power Loom PF, Migrant Labor PE Liability & RO Indore Audits 2025 | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Burhanpur textile mills, power looms and agro-processors. Navigate RO Indore audits, EEC-2025 amnesty and migrant labour statutory compliance in MP’s textile heartland.",
  keywords: [
    "Burhanpur PF consultant",
    "EPF ESIC compliance Burhanpur",
    "Power loom PF audit Burhanpur",
    "ESIC registration textile mills MP",
    "Migrant labour PF ESI Burhanpur",
    "RO Indore EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/burhanpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Burhanpur EPF & ESIC Compliance | Textile & Power Loom Hub",
    description:
      "PF & ESIC specialists for Burhanpur textile mills, power looms and sugar units governed by RO Indore.",
    url: "https://epfdesk.com/burhanpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Burhanpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Burhanpur EPF & ESIC Compliance | Textile & Power Loom",
    description:
      "High-risk PF & ESIC compliance for Burhanpur textile, loom and agro-processing units.",
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
          LEGACY HEAD TAGS
      ============================ */}
      <Head>
        <title>
          Burhanpur EPF & ESIC Compliance: Textile Power Loom PF, Migrant Labor PE Liability & RO Indore Audits 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Burhanpur power looms, textile mills and sugar units under RO Indore."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/burhanpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Burhanpur EPF & ESIC Compliance | Textile Hub"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Burhanpur textile and migrant-labour driven industries."
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
        id="schema-burhanpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Burhanpur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Burhanpur Textile & Power Loom Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/burhanpur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Burhanpur textile mills, power loom units, sugar mills and migrant labour–intensive industries governed by RO Indore.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Burhanpur District" },
              { "@type": "Place", name: "Burhanpur City" },
              { "@type": "Place", name: "Nimarkhedi" },
              { "@type": "Place", name: "Icchapur" },
              { "@type": "Place", name: "Shahpur" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "64",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBurhanpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBurhanpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBurhanpurDistrict} />
    </>
  );
};

export default page;
