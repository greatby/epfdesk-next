import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBhopalDistrict,
  sectionsBhopalDistrict,
  faqBhopalDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Bhopal EPF & ESIC Compliance: New Labour Code 2025, IT Salary Structuring & BHEL Ancillary PE Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Bhopal IT hubs, engineering firms and MSMEs. Navigate RO Bhopal audits, the Nov 2025 Labour Code transition, EEC-2025 enrolment benefits and Principal Employer liability.",
  keywords: [
    "Bhopal PF consultant",
    "New Labour Code salary structure Bhopal",
    "RO Bhopal EPF 7A defense",
    "BHEL ancillary PF ESIC compliance",
    "ESIC gig worker contribution Bhopal",
    "EEC 2025 enrolment MP",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bhopal-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bhopal EPF & ESIC Compliance | New Labour Code 2025 | EPFDesk",
    description:
      "PF & ESIC specialists for Bhopal’s IT, engineering and government contractor ecosystem under RO Bhopal.",
    url: "https://epfdesk.com/bhopal-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhopal EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bhopal EPF & ESIC Compliance | Labour Code 2025",
    description:
      "High-risk PF & ESIC compliance for Bhopal IT firms, BHEL ancillaries and government contractors.",
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
          Bhopal EPF & ESIC Compliance: New Labour Code 2025, IT Salary Structuring & BHEL Ancillary PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Bhopal IT hubs, engineering firms and government contractors under RO Bhopal."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bhopal-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bhopal EPF & ESIC Compliance | Labour Code 2025"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Bhopal IT, engineering and public sector contractor ecosystem."
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
        id="schema-bhopal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bhopal EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for IT & Engineering Firms in Bhopal",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bhopal-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Bhopal’s IT parks, BHEL ancillary units, pharma clusters and government contractors governed by RO Bhopal.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Bhopal District" },
              { "@type": "Place", name: "Govindpura Industrial Area" },
              { "@type": "Place", name: "Mandideep" },
              { "@type": "Place", name: "MP Nagar" },
              { "@type": "Place", name: "Arera Colony" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "73",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBhopalDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBhopalDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBhopalDistrict} />
    </>
  );
};

export default page;
