import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSonbhadraDistrict,
  sectionsSonbhadraDistrict,
  faqSonbhadraDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Sonbhadra EPF & ESIC Compliance: Power & Mining PE Liability, Stone Crusher Risk & NTPC Contractor Audits | EPFDesk",
  description:
    "Specialized EPF & ESIC advisory for Sonbhadra mining units, power plant contractors and stone crushers. Manage RO Varanasi audits, NTPC/NCL Principal Employer liability, hazardous industry ESIC mandates and 7A proceedings.",
  keywords: [
    "Sonbhadra PF consultant",
    "ESIC registration Sonbhadra",
    "NTPC contractor PF compliance",
    "NCL mining EPF liability",
    "Stone crusher ESIC Sonbhadra",
    "RO Varanasi EPFO audit defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/sonbhadra-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Sonbhadra EPF & ESIC Compliance | Power, Mining & Heavy Industry | EPFDesk",
    description:
      "PF & ESIC specialists for Sonbhadra power plants, mining contractors, stone crushers and hazardous industries under RO Varanasi.",
    url: "https://epfdesk.com/sonbhadra-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sonbhadra EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sonbhadra EPF & ESIC Compliance | Mining & Power Sector | EPFDesk",
    description:
      "High-risk PF & ESIC compliance for Sonbhadra mining, power and stone crushing industries.",
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
          Sonbhadra EPF & ESIC Compliance: Power & Mining PE Liability, Stone Crusher Risk & NTPC Contractor Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defense for Sonbhadra power plants, mining units, stone crushers and PSU contractors under RO Varanasi."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sonbhadra-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Sonbhadra EPF & ESIC Compliance | Mining & Power Sector"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Sonbhadra NTPC, NCL, mining contractors and stone crushing units."
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
        id="schema-sonbhadra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Sonbhadra EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Mining and Power Projects in Sonbhadra",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sonbhadra-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Sonbhadra power plants, mining units, stone crushers and hazardous industries governed by RO Varanasi.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Sonbhadra District" },
              { "@type": "Place", name: "Shaktinagar" },
              { "@type": "Place", name: "Anpara" },
              { "@type": "Place", name: "Obra" },
              { "@type": "Place", name: "Renukoot" },
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
        <PerformanceSectionIndustry data={heroDataSonbhadraDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSonbhadraDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSonbhadraDistrict} />
    </>
  );
};

export default page;
