import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaigadDistrict,
  sectionsRaigadDistrict,
  faqRaigadDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Raigad EPF & ESIC Compliance for JNPT Contractors, Patalganga MIDC & Chemical Factory Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defence for JNPT Port and Uran contractors, PF liability for Patalganga and Taloja MIDC chemical factories, and mandatory ESIC for hazardous industry workers. Specialists in Dock Workers Act and Principal Employer liability.",
  keywords: [
    "Raigad PF consultant",
    "JNPT contractor PF ESIC",
    "Patalganga MIDC ESIC compliance",
    "Taloja chemical factory PF",
    "Dock Workers Act PF ESIC",
    "EPFO 7A defence Raigad",
  ],
  alternates: {
    canonical: "https://epfdesk.com/raigad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Raigad EPF & ESIC Compliance | JNPT Port & Hazardous Industries | EPFDesk",
    description:
      "PF & ESIC specialists for Raigad JNPT port operations, chemical MIDC factories, and high-risk contract labour environments.",
    url: "https://epfdesk.com/raigad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raigad EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Raigad EPF & ESIC Compliance | JNPT & MIDC Chemical Units | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for JNPT port contractors and Raigad chemical factories.",
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
          Raigad EPF & ESIC Compliance for JNPT Contractors, Patalganga MIDC & Chemical Factory Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for JNPT port contractors, Patalganga and Taloja MIDC chemical factories, and hazardous industry ESIC compliance."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/raigad-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Raigad EPF & ESIC Compliance | JNPT Port & Hazardous Industries"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Raigad JNPT port operations and chemical MIDC factories."
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
        id="schema-raigad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Raigad EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for JNPT Port & Raigad MIDC Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/raigad-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Raigad district JNPT port contractors, chemical and petrochemical MIDC factories, and Principal Employer liability management.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Raigad District" },
              { "@type": "Place", name: "Jawaharlal Nehru Port Trust (JNPT)" },
              { "@type": "Place", name: "Patalganga MIDC" },
              { "@type": "Place", name: "Taloja MIDC" },
              { "@type": "Place", name: "Panvel Logistics Hub" },
              { "@type": "Place", name: "Dighi Port" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "92",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaigadDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaigadDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRaigadDistrict} />
    </>
  );
};

export default page;
