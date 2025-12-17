import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataIndoreDistrict,
  sectionsIndoreDistrict,
  faqIndoreDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Indore EPF & ESIC Compliance: Pithampur SEZ Liability, EEC-2025 Enrolment & Pharma Export Audits | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Indore MNCs, Pithampur Pharma Units and SEZ entities. Navigate RO Indore audits, EEC-2025 voluntary disclosure, New Labour Code wage rules and Principal Employer liability.",
  keywords: [
    "Indore PF consultant",
    "Pithampur SEZ EPF compliance",
    "EEC 2025 enrolment Indore",
    "RO Indore EPF 7A defense",
    "ESIC compliance pharma units Indore",
    "New Labour Code salary structure Indore",
  ],
  alternates: {
    canonical: "https://epfdesk.com/indore-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Indore EPF & ESIC Compliance | Pithampur SEZ & Pharma | EPFDesk",
    description:
      "PF & ESIC specialists for Indore’s Pithampur SEZ, pharma exporters, MNCs and manufacturing clusters under RO Indore.",
    url: "https://epfdesk.com/indore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Indore EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Indore EPF & ESIC Compliance | Pithampur SEZ & Pharma",
    description:
      "High-risk PF & ESIC compliance for Indore MNCs, SEZ units and pharma exporters.",
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
          Indore EPF & ESIC Compliance: Pithampur SEZ Liability, EEC-2025 Enrolment & Pharma Export Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Indore MNCs, Pithampur SEZ units and pharma exporters under RO Indore."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/indore-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Indore EPF & ESIC Compliance | Pithampur SEZ & Pharma"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Indore SEZ, pharma, auto and manufacturing clusters."
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
        id="schema-indore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Indore EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Pithampur SEZ & Indore MNCs",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/indore-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Indore’s Pithampur SEZ, pharma exporters, MNCs and manufacturing units governed by RO Indore.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Indore District" },
              { "@type": "Place", name: "Pithampur Industrial Area" },
              { "@type": "Place", name: "Indore SEZ" },
              { "@type": "Place", name: "Super Corridor" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "74",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataIndoreDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsIndoreDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqIndoreDistrict} />
    </>
  );
};

export default page;
