import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSangliDistrict,
  sectionsSangliDistrict,
  faqSangliDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Sangli EPF & ESIC Compliance for Sugar Mills, Kupwad Foundries & Agro Processing | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Sangli sugar factories, PF liability on Retention Allowance, mandatory ESIC for Kupwad foundry and casting units, and turmeric processing compliance. Specialists in PE liability and RO Solapur liaison.",
  keywords: [
    "Sangli PF consultant",
    "Sugar mill PF retention allowance Sangli",
    "Kupwad foundry ESIC compliance",
    "Foundry hazard ESIC Maharashtra",
    "Turmeric processing PF ESIC",
    "EPFO 7A Sangli sugar mills",
  ],
  alternates: {
    canonical: "https://epfdesk.com/sangli-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Sangli EPF & ESIC Compliance | Sugar Mills & Foundry Sector | EPFDesk",
    description:
      "PF & ESIC specialists for Sangli sugar factories, Kupwad foundries, and agro-processing industries.",
    url: "https://epfdesk.com/sangli-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sangli EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sangli EPF & ESIC Compliance | Sugar & Foundry Industry | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance for Sangli sugar mills, retention allowance audits, and Kupwad foundry units.",
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
          Sangli EPF & ESIC Compliance for Sugar Mills, Kupwad Foundries & Agro Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Sangli sugar factories, PF on Retention Allowance, ESIC compliance for Kupwad foundries, and agro-processing units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sangli-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Sangli EPF & ESIC Compliance | Sugar & Foundry Sector"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Sangli sugar mills, foundry units, and turmeric processing industries."
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
        id="schema-sangli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Sangli EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar Mills & Foundries in Sangli",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sangli-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Sangli sugar mills, PF on Retention Allowance, Kupwad foundry hazard ESIC coverage, and agro-processing industries.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Sangli District" },
              { "@type": "Place", name: "Sugar Mills" },
              { "@type": "Place", name: "Kupwad MIDC" },
              { "@type": "Place", name: "Foundry & Casting Units" },
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
        <PerformanceSectionIndustry data={heroDataSangliDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSangliDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSangliDistrict} />
    </>
  );
};

export default page;
