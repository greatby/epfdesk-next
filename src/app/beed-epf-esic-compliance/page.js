import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBeedDistrict,
  sectionsBeedDistrict,
  faqBeedDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Beed EPF & ESIC Compliance for Sugarcane Contractors, Oil Mills & Migrant Worker Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Beed Sugar Mills, PF liability on migrant cane-cutting contractors (mukadams), Oil/Dal Mills and seasonal labour. Specialists in RO Aurangabad audit defence.",
  keywords: [
    "Beed PF consultant",
    "Beed EPF ESIC compliance",
    "Migrant cane cutter PF liability",
    "Mukadam PF compliance",
    "Retention allowance PF sugar mill",
    "EPFO 7A defence Beed",
  ],
  alternates: {
    canonical: "https://epfdesk.com/beed-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Beed EPF & ESIC Compliance | Sugarcane, Migrant Labour & Agro Industry",
    description:
      "High-risk PF & ESIC compliance for Beed Sugar Mills, migrant cane cutters, Oil & Dal Mills.",
    url: "https://epfdesk.com/beed-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Beed EPF ESIC Compliance",
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
          Beed EPF & ESIC Compliance for Sugarcane Contractors & Migrant Worker Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Beed Sugar Mills, PF liability on migrant cane-cutting contractors (mukadams), Oil & Dal Mills."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/beed-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-beed"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Beed EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugarcane & Migrant Workers in Beed",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/beed-epf-esic-compliance",
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
              "EPF & ESIC compliance services for Beed Sugar Mills, migrant cane cutters, Oil Mills and Dal Mills with high Principal Employer liability.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Beed District" },
              { "@type": "Place", name: "Parli Vaijnath" },
              { "@type": "Place", name: "Ambajogai" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "61",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBeedDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBeedDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBeedDistrict} />
    </>
  );
};

export default page;
