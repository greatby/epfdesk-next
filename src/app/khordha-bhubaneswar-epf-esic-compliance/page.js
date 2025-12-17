import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKhordhaDistrict,
  sectionsKhordhaDistrict,
  faqKhordhaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Bhubaneswar EPF & ESIC Compliance: IT Sector Audits & Expert Consultants in Khordha | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Bhubaneswar IT firms, startups and manufacturing units. Navigate RO Bhubaneswar audits, O-Hub compliance and New Labour Code transitions.",
  keywords: [
    "Bhubaneswar PF consultant",
    "EPF ESIC compliance Khordha",
    "IT sector PF audit Bhubaneswar",
    "ESIC registration for startups Odisha",
    "RO Bhubaneswar EPF 7A defense",
    "50% wage rule IT sector Odisha",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bhubaneswar-khordha-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bhubaneswar EPF & ESIC Compliance | IT & Services Hub",
    description:
      "PF & ESIC specialists for Bhubaneswar IT, startup, healthcare and service-sector establishments governed by RO Bhubaneswar.",
    url: "https://epfdesk.com/bhubaneswar-khordha-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhubaneswar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bhubaneswar EPF & ESIC Consultants | Khordha District",
    description:
      "High-risk PF & ESIC compliance for IT, startups and service-sector employers in Bhubaneswar.",
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
          Bhubaneswar EPF & ESIC Compliance: IT Sector Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Bhubaneswar IT companies, startups, hospitals and MSMEs under RO Bhubaneswar."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bhubaneswar-khordha-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bhubaneswar EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Khordha district’s IT and service ecosystem."
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
        id="schema-khordha"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Bhubaneswar EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Khordha IT & Service Hub",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bhubaneswar-khordha-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS */
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
              "EPF & ESIC compliance specialists for Bhubaneswar IT companies, startups, hospitals, manufacturing units and service-sector employers governed by RO Bhubaneswar.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Khordha District" },
              { "@type": "Place", name: "Bhubaneswar" },
              { "@type": "Place", name: "Infocity Bhubaneswar" },
              { "@type": "Place", name: "Patia" },
              { "@type": "Place", name: "Mancheswar Industrial Area" },
              { "@type": "Place", name: "Chandaka Industrial Estate" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "88",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKhordhaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKhordhaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKhordhaDistrict} />
    </>
  );
};

export default page;
