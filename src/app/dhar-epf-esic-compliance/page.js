import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDharDistrict,
  sectionsDharDistrict,
  faqDharDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Dhar Pithampur EPF & ESIC Compliance: Auto Hub PE Liability, EEC-2025 & ESIC Amnesty 2025 | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Pithampur auto-component units, Dhar pharma MNCs and MSMEs. Navigate RO Indore audits, EEC-2025 regularization and ESIC Amnesty 2025 settlement in MP’s DMIC auto hub.",
  keywords: [
    "Pithampur PF consultant",
    "Dhar EPF ESIC compliance",
    "Pithampur auto component PF audit",
    "ESIC registration Pithampur pharma",
    "EEC 2025 enrolment Dhar",
    "RO Indore EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/dhar-pithampur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dhar Pithampur EPF & ESIC Compliance | Auto Hub & DMIC | EPFDesk",
    description:
      "PF & ESIC specialists for Pithampur auto, pharma and SEZ units governed by RO Indore.",
    url: "https://epfdesk.com/dhar-pithampur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhar Pithampur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dhar Pithampur EPF & ESIC Compliance | Auto & Pharma Hub",
    description:
      "High-risk PF & ESIC compliance for Pithampur auto, pharma and SEZ clusters.",
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
          Dhar Pithampur EPF & ESIC Compliance: Auto Hub PE Liability, EEC-2025 & ESIC Amnesty 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Dhar district’s Pithampur auto hub, pharma MNCs and MSMEs under RO Indore."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dhar-pithampur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Dhar Pithampur EPF & ESIC Compliance | Auto Hub"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Pithampur auto, pharma and SEZ manufacturing clusters."
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
        id="schema-dhar-pithampur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Dhar Pithampur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Pithampur Auto & Pharma Hub",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dhar-pithampur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Dhar district’s Pithampur auto hub, pharma MNCs, SEZs and Tier-2/3 vendors governed by RO Indore.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Dhar District" },
              { "@type": "Place", name: "Pithampur Industrial Area" },
              { "@type": "Place", name: "PDMIR" },
              { "@type": "Place", name: "Pithampur SEZ" },
              { "@type": "Place", name: "Mhow" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "75",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDharDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDharDistrict} />
    </>
  );
};

export default page;
