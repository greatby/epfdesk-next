import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKotaDistrict,
  sectionsKotaDistrict,
  faqKotaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Kota EPF & ESIC Compliance: Coaching Sector PF, Stone Mining Hazard & RO Kota Audits 2025 | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Kota coaching institutes, Kota stone mines and chemical factories. Navigate RO Kota audits, EEC-2025 amnesty and New Labour Code wage compliance.",
  keywords: [
    "Kota PF consultant",
    "EPF ESIC compliance Kota",
    "Coaching institute PF audit Kota",
    "Kota stone mining ESIC",
    "RO Kota EPF 7A defense",
    "EEC 2025 EPF Kota",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kota-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kota EPF & ESIC Compliance | Education, Mining & Industry",
    description:
      "PF & ESIC specialists for Kota coaching institutes, stone mining clusters and chemical industries.",
    url: "https://epfdesk.com/kota-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kota EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kota EPF & ESIC Compliance | Coaching, Mining & MSMEs",
    description:
      "High-risk PF & ESIC compliance for Kota coaching, mining and industrial clusters.",
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
          Kota EPF & ESIC Compliance: Coaching Sector PF, Stone Mining Hazard & RO Kota Audits 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Kota coaching institutes, Kota stone mining units and chemical factories."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kota-epf-esic-compliance"
        />

        <meta property="og:title" content="Kota EPF & ESIC Compliance" />
        <meta
          property="og:description"
          content="PF & ESIC experts for Kota’s education, mining and industrial sectors."
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
        id="schema-kota"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kota EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Kota Coaching, Mining & Industrial Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kota-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Kota coaching institutes, Kota stone mining clusters and chemical factories governed by RO Kota.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Kota District" },
              { "@type": "Place", name: "Ramganj Mandi" },
              { "@type": "Place", name: "Indraprastha Industrial Area" },
              { "@type": "Place", name: "Anantpura" },
              { "@type": "Place", name: "Jawahar Nagar" },
              { "@type": "Place", name: "Rajiv Gandhi Nagar" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "68",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKotaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKotaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKotaDistrict} />
    </>
  );
};

export default page;
