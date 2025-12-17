import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKorbaDistrict,
  sectionsKorbaDistrict,
  faqKorbaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Korba EPF & ESIC Compliance: Power Plant PE Liability, BALCO Ancillary Audits & EEC-2025 | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Korba power plants, aluminium units and coal contractors. Navigate RO Bilaspur audits, EEC-2025 voluntary disclosure and ESIC medical benefits.",
  keywords: [
    "Korba PF consultant",
    "EPF compliance for power plant contractors",
    "BALCO ancillary ESIC registration",
    "SECL transport PF audits",
    "RO Bilaspur EPF 7A defense",
    "EEC 2025 Korba contractors",
  ],
  alternates: {
    canonical: "https://epfdesk.com/korba-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Korba EPF & ESIC Compliance | Power, Aluminum & Mining Hub",
    description:
      "PF & ESIC specialists for Korba power plants, BALCO ancillaries and coal mining contractors.",
    url: "https://epfdesk.com/korba-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Korba EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Korba EPF & ESIC Compliance | Power & Mining Ecosystem",
    description:
      "High-risk PF & ESIC compliance for Korba’s energy, aluminum and coal sectors.",
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
          Korba EPF & ESIC Compliance: Power Plant PE Liability, BALCO Ancillary Audits & EEC-2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Korba power plants, aluminium smelters and coal-handling contractors under RO Bilaspur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/korba-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Korba EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Korba’s power, aluminum and mining ecosystem."
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
        id="schema-korba"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Korba EPF & ESIC Compliance – Power, Aluminum & Mining | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Korba Power & Mining Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/korba-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Korba’s power plants, aluminium smelters, coal mining contractors and hazardous industrial units governed by RO Bilaspur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Korba District" },
              { "@type": "Place", name: "NTPC Jamnipali" },
              { "@type": "Place", name: "BALCO Korba" },
              { "@type": "Place", name: "SECL Korba" },
              { "@type": "Place", name: "CSPGCL Korba" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "82",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKorbaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKorbaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKorbaDistrict} />
    </>
  );
};

export default page;
