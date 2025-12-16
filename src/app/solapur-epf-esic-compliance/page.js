import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSolapurDistrict,
  sectionsSolapurDistrict,
  faqSolapurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Solapur EPF & ESIC Compliance for Powerloom, Textile Mills & Sugar Contractors | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Solapur powerloom and textile industries, PF liability for piece-rate workers, and mandatory ESIC compliance for hazardous factories. Specialists in RO Solapur wage audits and PE liability.",
  keywords: [
    "Solapur PF consultant",
    "Powerloom EPF compliance Solapur",
    "Textile ESIC Solapur",
    "Piece rate wages PF ESIC",
    "Sugar mill contractor PF Solapur",
    "RO Solapur EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/solapur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Solapur EPF & ESIC Compliance | Powerloom & Textile Industry | EPFDesk",
    description:
      "PF & ESIC specialists for Solapur powerloom, textile mills, and sugar factories.",
    url: "https://epfdesk.com/solapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Solapur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Solapur EPF & ESIC Compliance | Powerloom & Textile | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Solapur textile and powerloom industries.",
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
          Solapur EPF & ESIC Compliance for Powerloom, Textile Mills & Sugar Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Solapur powerloom industry, textile mills, and sugar factory contractors."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/solapur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Solapur EPF & ESIC Compliance | Powerloom & Textile Industry"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Solapur powerloom, textile, and agro-industrial establishments."
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
        id="schema-solapur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Solapur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Powerloom & Textile Industry in Solapur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/solapur-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Solapur powerloom units, textile mills, sugar factories, and construction Principal Employers with focus on piece-rate wages and RO Solapur audits.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Solapur District" },
              { "@type": "Place", name: "Powerloom & Handloom Units" },
              { "@type": "Place", name: "Textile Processing Mills" },
              { "@type": "Place", name: "Sugar Factories" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSolapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSolapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSolapurDistrict} />
    </>
  );
};

export default page;
