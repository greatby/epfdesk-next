import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDewasDistrict,
  sectionsDewasDistrict,
  faqDewasDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Dewas EPF & ESIC Compliance: Auto-Ancillary PE Liability, EEC-2025 & Engineering Audit Defense | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Dewas engineering firms, soya processing units and auto-ancillaries. Navigate RO Ujjain audits, EEC-2025 enrolment and ESIC Amnesty 2025 settlement.",
  keywords: [
    "Dewas PF consultant",
    "EPF ESIC compliance Dewas",
    "Dewas auto ancillary PF audit",
    "ESIC registration Dewas industrial area",
    "EEC 2025 enrolment Dewas",
    "RO Ujjain EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/dewas-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dewas EPF & ESIC Compliance | Engineering & Auto-Ancillary Hub",
    description:
      "PF & ESIC specialists for Dewas engineering, textile and agro-processing units governed by RO Ujjain.",
    url: "https://epfdesk.com/dewas-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dewas EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dewas EPF & ESIC Compliance | Engineering & Soya Hub",
    description:
      "High-risk PF & ESIC compliance for Dewas engineering, auto-ancillary and soya processing units.",
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
          Dewas EPF & ESIC Compliance: Auto-Ancillary PE Liability, EEC-2025 & Engineering Audit Defense | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Dewas engineering firms, auto-ancillaries, textile mills and soya processors under RO Ujjain."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dewas-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Dewas EPF & ESIC Compliance | Engineering & Auto Hub"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Dewas industrial areas and agro-processing units."
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
        id="schema-dewas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Dewas EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Dewas Engineering & Auto Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dewas-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Dewas engineering firms, auto-ancillaries, textile mills and soya processing units governed by RO Ujjain.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Dewas District" },
              { "@type": "Place", name: "Dewas Industrial Area" },
              { "@type": "Place", name: "Dewas Sectors 1 2 3" },
              { "@type": "Place", name: "Bagli" },
              { "@type": "Place", name: "Sonkatch" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "68",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDewasDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDewasDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDewasDistrict} />
    </>
  );
};

export default page;
