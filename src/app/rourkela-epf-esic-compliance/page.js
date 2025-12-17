import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSundargarhDistrict,
  sectionsSundargarhDistrict,
  faqSundargarhDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Rourkela EPF & ESIC Compliance: SAIL Vendor Audits & Expert Consultants in Sundargarh | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Rourkela Steel Plant (SAIL) contractors, Kalunga MSMEs and Rajgangpur cement units. Navigate RO Rourkela audits, EEC-2025 and Principal Employer liability.",
  keywords: [
    "Rourkela PF consultant",
    "EPF ESIC compliance Sundargarh",
    "SAIL contractor PF audit",
    "ESIC registration Rajgangpur cement",
    "RO Rourkela EPF 7A defense",
    "EEC 2025 Rourkela",
  ],
  alternates: {
    canonical: "https://epfdesk.com/rourkela-sundargarh-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rourkela EPF & ESIC Compliance | SAIL & Heavy Industry Hub",
    description:
      "PF & ESIC specialists for SAIL vendors, cement plants and MSMEs in Sundargarh district governed by RO Rourkela.",
    url: "https://epfdesk.com/rourkela-sundargarh-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rourkela EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rourkela EPF & ESIC Consultants | Sundargarh District",
    description:
      "High-risk PF & ESIC compliance for SAIL vendors and heavy industries in Rourkela.",
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
          Rourkela EPF & ESIC Compliance: SAIL Vendor Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for SAIL Rourkela contractors, cement plants and engineering MSMEs under RO Rourkela."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/rourkela-sundargarh-epf-esic-compliance"
        />

        <meta property="og:title" content="Rourkela EPF & ESIC Compliance" />
        <meta
          property="og:description"
          content="PF & ESIC experts for Sundargarh district’s heavy industrial ecosystem."
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
        id="schema-sundargarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Rourkela EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Sundargarh Heavy Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/rourkela-sundargarh-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* SAME ADDRESS */
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
              "EPF & ESIC compliance specialists for SAIL vendors, cement plants and MSMEs in Rourkela and Sundargarh district governed by RO Rourkela.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Sundargarh District" },
              { "@type": "Place", name: "Rourkela" },
              { "@type": "Place", name: "Rajgangpur" },
              { "@type": "Place", name: "Kalunga Industrial Estate" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "91",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSundargarhDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSundargarhDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSundargarhDistrict} />
    </>
  );
};

export default page;
