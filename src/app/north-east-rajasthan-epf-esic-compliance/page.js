import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNorthEastRajasthan,
  sectionsNorthEastRajasthan,
  faqNorthEastRajasthan,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Bikaner Agro-Hub, Bharatpur Manufacturing & RO Jaipur/Ajmer Audits | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Rajasthan’s northern and eastern hubs. Navigate RO Ajmer/Jaipur audits, Sri Ganganagar agro-logistics PE liability and Bharatpur foundry EEC-2025 amnesty.",
  keywords: [
    "Bikaner EPF consultant",
    "Sri Ganganagar PF compliance",
    "Bharatpur foundry ESIC",
    "Dholpur glass industry PF",
    "RO Ajmer EPF 7A defense",
    "RO Jaipur ESIC audits",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Agro, Foundry & Gateway Zones",
    description:
      "PF & ESIC specialists for Bikaner agro hubs, Sri Ganganagar logistics, Bharatpur foundries and Dholpur manufacturing.",
    url:
      "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "North & East Rajasthan EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan EPF & ESIC Compliance | Agro & Manufacturing Hubs",
    description:
      "High-risk PF & ESIC compliance for Rajasthan’s agro-logistics and foundry clusters.",
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
          Rajasthan EPF & ESIC Compliance 2025: Bikaner Agro-Hub, Bharatpur Manufacturing & RO Jaipur/Ajmer Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Bikaner agro-processing, Sri Ganganagar logistics, Bharatpur foundries and Dholpur manufacturing units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/north-east-rajasthan-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="North & East Rajasthan EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Rajasthan’s agro, foundry and eastern manufacturing hubs."
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
        id="schema-north-east-rajasthan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Rajasthan EPF & ESIC Compliance – Agro & Manufacturing Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Bikaner, Sri Ganganagar, Bharatpur & Dholpur",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Rajasthan’s agro-processing, solar, foundry and manufacturing clusters governed by RO Ajmer and RO Jaipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Bikaner District" },
              { "@type": "AdministrativeArea", name: "Sri Ganganagar District" },
              { "@type": "AdministrativeArea", name: "Bharatpur District" },
              { "@type": "AdministrativeArea", name: "Dholpur District" },
              { "@type": "Place", name: "Hanumangarh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "79",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNorthEastRajasthan} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNorthEastRajasthan} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNorthEastRajasthan} />
    </>
  );
};

export default page;
