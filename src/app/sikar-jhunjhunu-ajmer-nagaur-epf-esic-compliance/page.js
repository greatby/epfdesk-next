import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSJAN,
  sectionsSJAN,
  faqSJAN,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Sikar Education Hub, Ajmer Manufacturing & RO Ajmer Audits | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Rajasthan’s central and Shekhawati hubs. Navigate RO Ajmer audits, Sikar education PE liability and Beawar cement EEC-2025 amnesty.",
  keywords: [
    "Sikar PF consultant",
    "Jhunjhunu EPF ESIC compliance",
    "Ajmer EPF audit defense",
    "Beawar cement ESIC",
    "Nagaur marble PF compliance",
    "RO Ajmer EPF 7A defense",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Education, Cement & Central Industry",
    description:
      "PF & ESIC specialists for Sikar coaching hubs, Ajmer manufacturing, Beawar cement and Nagaur mineral units.",
    url:
      "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sikar Ajmer EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan EPF & ESIC Compliance | Education & Cement Hubs",
    description:
      "High-risk PF & ESIC compliance for Shekhawati and Central Rajasthan industries.",
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
          Rajasthan EPF & ESIC Compliance 2025: Sikar Education Hub, Ajmer Manufacturing & RO Ajmer Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Sikar coaching institutes, Ajmer MSMEs, Beawar cement units and Nagaur mineral processors."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Sikar–Ajmer EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Rajasthan’s education, cement and central industrial sectors."
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
        id="schema-sjan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Rajasthan EPF & ESIC Compliance – Education & Central Industrial Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sikar, Jhunjhunu, Ajmer & Nagaur",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Rajasthan’s education-service hubs, cement plants and mineral belts governed by RO Ajmer.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Sikar District" },
              { "@type": "AdministrativeArea", name: "Jhunjhunu District" },
              { "@type": "AdministrativeArea", name: "Ajmer District" },
              { "@type": "AdministrativeArea", name: "Nagaur District" },
              { "@type": "Place", name: "Beawar" },
              { "@type": "Place", name: "Khetri" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "81",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSJAN} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSJAN} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSJAN} />
    </>
  );
};

export default page;
