import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaipurDistrict,
  sectionsRaipurDistrict,
  faqRaipurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Raipur EPF & ESIC Compliance: Urla-Siltara Steel Hub Audits, EEC-2025 & PE Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Raipur steel plants, sponge iron units and MSMEs. Navigate RO Raipur audits, EEC-2025 enrolment and Principal Employer liability.",
  keywords: [
    "Raipur PF consultant",
    "Urla steel plant EPF compliance",
    "Siltara sponge iron ESIC",
    "RO Raipur EPF 7A defense",
    "EEC 2025 PF enrolment Raipur",
    "Principal Employer liability Raipur",
  ],
  alternates: {
    canonical: "https://epfdesk.com/raipur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Raipur EPF & ESIC Compliance | Steel, Power & Manufacturing",
    description:
      "PF & ESIC specialists for Raipur steel clusters, sponge iron units and industrial MSMEs.",
    url: "https://epfdesk.com/raipur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raipur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Raipur EPF & ESIC Compliance | Steel & Industrial Hub",
    description:
      "High-risk PF & ESIC compliance for Raipur’s steel and manufacturing clusters.",
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
          Raipur EPF & ESIC Compliance: Urla-Siltara Steel Hub Audits, EEC-2025 & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Raipur steel plants, sponge iron units and MSMEs under RO Raipur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/raipur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Raipur EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Raipur’s steel, power and manufacturing sectors."
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
        id="schema-raipur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Raipur EPF & ESIC Compliance – Steel & Industrial Clusters | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Urla, Siltara & Birgaon",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/raipur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Raipur’s steel plants, sponge iron units, chemical factories and MSMEs governed by RO Raipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Raipur District" },
              { "@type": "Place", name: "Urla Industrial Area" },
              { "@type": "Place", name: "Siltara Industrial Area" },
              { "@type": "Place", name: "Birgaon" },
              { "@type": "Place", name: "Bhanpuri" },
              { "@type": "Place", name: "Nava Raipur" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "84",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaipurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaipurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRaipurDistrict} />
    </>
  );
};

export default page;
