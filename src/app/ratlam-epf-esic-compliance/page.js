import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRatlamDistrict,
  sectionsRatlamDistrict,
  faqRatlamDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ratlam EPF & ESIC Compliance: DMIC Logistics, Pharma Hazard & RO Ujjain Audit Defense 2025 | EPFDesk",
  description:
    "Expert EPF & ESIC advisory for Ratlam pharma MNCs, logistics hubs and chemical units. Navigate RO Ujjain audits, EEC-2025 amnesty and New Labour Code wage compliance in MP’s strategic rail corridor.",
  keywords: [
    "Ratlam PF consultant",
    "EPF ESIC compliance Ratlam",
    "Ratlam pharma PF audit",
    "ESIC registration Ratlam chemical units",
    "DMIC logistics labour compliance Ratlam",
    "RO Ujjain EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/ratlam-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ratlam EPF & ESIC Compliance | DMIC Logistics & Pharma Hub",
    description:
      "PF & ESIC specialists for Ratlam pharma, logistics, chemical and agro-processing units governed by RO Ujjain.",
    url: "https://epfdesk.com/ratlam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ratlam EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ratlam EPF & ESIC Compliance | Logistics & Pharma",
    description:
      "High-risk PF & ESIC compliance for Ratlam DMIC logistics hubs, pharma and chemical units.",
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
          Ratlam EPF & ESIC Compliance: DMIC Logistics, Pharma Hazard & RO Ujjain Audit Defense 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Ratlam pharma plants, logistics hubs and chemical units under RO Ujjain."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ratlam-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Ratlam EPF & ESIC Compliance | DMIC Logistics Hub"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Ratlam logistics, pharma, chemical and agro-industrial clusters."
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
        id="schema-ratlam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ratlam EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Ratlam Pharma & Logistics Hub",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ratlam-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Ratlam’s DMIC logistics hub, pharma MNCs, chemical units and agro-processing industries governed by RO Ujjain.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Ratlam District" },
              { "@type": "Place", name: "I.A. Namli" },
              { "@type": "Place", name: "I.A. Ratlam Dosigaon" },
              { "@type": "Place", name: "Multi-Modal Logistics Hub Ratlam" },
              { "@type": "Place", name: "Jaora" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "66",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRatlamDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRatlamDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRatlamDistrict} />
    </>
  );
};

export default page;
