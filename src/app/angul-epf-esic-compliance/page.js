import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAngulDistrict,
  sectionsAngulDistrict,
  faqAngulDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Angul EPF & ESIC Compliance: NALCO-NTPC Contractor Audits & Expert Consultants | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Angul power plants, NALCO aluminum units and MCL coal vendors. Navigate RO Sambalpur audits, EEC-2025 and Principal Employer liability.",
  keywords: [
    "Angul PF consultant",
    "EPF ESIC compliance Angul",
    "NALCO contractor PF audit",
    "NTPC Kaniha ESIC registration",
    "Talcher coal PF compliance",
    "RO Sambalpur EPF 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/angul-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Angul EPF & ESIC Compliance | Power, Aluminum & Coal Hub",
    description:
      "PF & ESIC specialists for NTPC, NALCO and MCL contractors in Angul district governed by RO Sambalpur.",
    url: "https://epfdesk.com/angul-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Angul EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Angul EPF & ESIC Consultants | Odisha Energy Hub",
    description:
      "High-risk PF & ESIC compliance for power, aluminum and coal contractors in Angul.",
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
          Angul EPF & ESIC Compliance: NALCO & NTPC Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Angul power plants, aluminum units and coal mining contractors under RO Sambalpur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/angul-epf-esic-compliance"
        />

        <meta property="og:title" content="Angul EPF & ESIC Compliance" />
        <meta
          property="og:description"
          content="PF & ESIC experts for Angul district’s power, aluminum and coal ecosystem."
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
        id="schema-angul"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Angul EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Angul Power & Aluminum Hub",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/angul-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for NTPC, NALCO and MCL contractors in Angul district governed by RO Sambalpur.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Angul District" },
              { "@type": "Place", name: "Talcher" },
              { "@type": "Place", name: "Kaniha" },
              { "@type": "Place", name: "NALCO Smelter Area" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "86",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAngulDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAngulDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAngulDistrict} />
    </>
  );
};

export default page;
