import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataUPThrustZones,
  sectionsUPThrustZones,
  faqUPThrustZones,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "UP EPF & ESIC Compliance 2025: Raebareli MSME Hub, Ambedkar Nagar Textiles & Kushinagar Agro-Processing | EPFDesk",
  description:
    "Expert EPF & ESIC defense for UP’s new Industrial Thrust Zones. Navigate EEC-2025 enrolment, New Labour Code wage definitions and ESIC 74-district expansion across Raebareli, Ambedkar Nagar and Kushinagar.",
  keywords: [
    "UP EPF ESIC compliance 2025",
    "Raebareli MSME PF ESI",
    "Ambedkar Nagar textile PF compliance",
    "Kushinagar agro processing ESIC",
    "EEC 2025 EPFO enrollment",
    "Unified wage definition PF 2025",
  ],
  alternates: {
    canonical: "https://epfdesk.com/up-thrust-zones-epf-esic-compliance",
  },
  openGraph: {
    title:
      "UP EPF & ESIC Compliance 2025 | New Industrial Thrust Zones | EPFDesk",
    description:
      "Statutory PF & ESIC compliance for UP’s emerging industrial corridors – Raebareli, Ambedkar Nagar and Kushinagar.",
    url: "https://epfdesk.com/up-thrust-zones-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "UP EPF ESIC Compliance 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UP EPF & ESIC Compliance 2025 | New Industrial Zones",
    description:
      "PF & ESIC specialists for UP’s new MSME, textile and agro-processing corridors.",
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
          UP EPF & ESIC Compliance 2025: Raebareli, Ambedkar Nagar & Kushinagar | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for UP’s new Industrial Thrust Zones under EEC-2025 and New Labour Codes."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/up-thrust-zones-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="UP EPF & ESIC Compliance 2025 | Industrial Thrust Zones"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Raebareli, Ambedkar Nagar and Kushinagar industrial corridors."
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
        id="schema-up-thrust-zones"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "UP EPF & ESIC Compliance for New Industrial Thrust Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Raebareli, Ambedkar Nagar & Kushinagar",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/up-thrust-zones-epf-esic-compliance",
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
              "EPF & ESIC compliance advisory for UP’s new MSME, textile and agro-processing industrial corridors under EEC-2025 and New Labour Codes.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Raebareli District" },
              { "@type": "AdministrativeArea", name: "Ambedkar Nagar District" },
              { "@type": "AdministrativeArea", name: "Kushinagar District" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "72",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUPThrustZones} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUPThrustZones} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUPThrustZones} />
    </>
  );
};

export default page;
