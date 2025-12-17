import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJagatsinghpurDistrict,
  sectionsJagatsinghpurDistrict,
  faqJagatsinghpurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Paradip EPF & ESIC Compliance: IOCL & Port Contractor Audits | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Paradip Port contractors, IOCL vendors and petrochemical units. Navigate RO Bhubaneswar audits, EEC-2025 and maritime PE liability.",
  keywords: [
    "Paradip PF consultant",
    "EPF ESIC compliance Jagatsinghpur",
    "Paradip Port contractor PF audit",
    "IOCL Paradip ESIC registration",
    "PCPIR Odisha labour compliance",
    "RO Bhubaneswar EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jagatsinghpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Paradip EPF & ESIC Compliance | Port & Petrochemical Hub",
    description:
      "PF & ESIC specialists for Paradip Port, IOCL refinery and PCPIR contractors governed by RO Bhubaneswar.",
    url: "https://epfdesk.com/jagatsinghpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Paradip EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Paradip EPF & ESIC Consultants | Port & IOCL Hub",
    description:
      "High-risk PF & ESIC compliance for Paradip Port, IOCL and petrochemical contractors.",
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
          Paradip EPF & ESIC Compliance: IOCL & Port Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Paradip Port contractors, IOCL refinery vendors and PCPIR petrochemical units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jagatsinghpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Paradip EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Jagatsinghpur’s port and petrochemical ecosystem."
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
        id="schema-jagatsinghpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Paradip EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Paradip Port & IOCL Vendors",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jagatsinghpur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Paradip Port contractors, IOCL refinery vendors and PCPIR petrochemical units under RO Bhubaneswar.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jagatsinghpur District" },
              { "@type": "Place", name: "Paradip Port" },
              { "@type": "Place", name: "IOCL Paradip Refinery" },
              { "@type": "Place", name: "PCPIR Odisha" },
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
        <PerformanceSectionIndustry
          data={heroDataJagatsinghpurDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJagatsinghpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJagatsinghpurDistrict} />
    </>
  );
};

export default page;
