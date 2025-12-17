import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqGorakhpur, heroDataGorakhpurDist, sectionsGorakhpurDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gorakhpur EPF & ESIC Compliance: Sugar Seasonal PF, Fertilizer PE Liability & Agro-Processing Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Gorakhpur sugar mills, fertilizer units, agro-processing factories and PSU contractors. Experts in RO Gorakhpur liaison, seasonal PF on retaining allowance, ESIC hazard exposure and CLRA/PE liability management.",

  keywords: [
    "Gorakhpur PF consultant",
    "Gorakhpur ESIC registration",
    "Sugar mill seasonal PF Gorakhpur",
    "Retaining allowance PF sugar mill",
    "Fertilizer plant PE liability",
    "RO Gorakhpur EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gorakhpur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gorakhpur EPF & ESIC Compliance | Sugar, Fertilizer & Agro-Processing",
    description:
      "PF & ESIC specialists for Gorakhpur sugar mills, fertilizer plants, agro-processing units and PSU contractors. Seasonal audits and RO Gorakhpur enforcement handled.",
    url: "https://epfdesk.com/gorakhpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gorakhpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Gorakhpur EPF & ESIC Compliance | Sugar & Fertilizer Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Gorakhpur sugar mills, fertilizer units and agro-processing factories.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
const page = () => {
  return (
    <>
      {/* ========= LEGACY HEAD ========= */}
      <Head>
        <title>
          Gorakhpur EPF & ESIC Compliance: Sugar Seasonal PF, Fertilizer PE Liability & Agro-Processing Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Gorakhpur sugar mills, fertilizer units and agro-processing factories. Seasonal PF audits, retaining allowance PF and RO Gorakhpur enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gorakhpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Gorakhpur EPF & ESIC Compliance | Sugar & Fertilizer Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Gorakhpur sugar mills, fertilizer plants and agro-processing units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-gorakhpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Gorakhpur EPF & ESIC Compliance Service | Sugar & Fertilizer Sector | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar Mills, Fertilizer Units & Agro-Processing in Gorakhpur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/gorakhpur-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* 🔒 ADDRESS — DO NOT CHANGE */
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
              "Specialized PF & ESIC compliance services for Gorakhpur sugar mills, fertilizer plants, agro-processing units and PSU contractors. Expertise in seasonal PF liability, retaining allowance audits, ESIC hazard exposure, CLRA Principal Employer liability and RO Gorakhpur proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Gorakhpur" },
              { "@type": "City", name: "Gorakhpur Industrial Areas" },
              { "@type": "City", name: "Northeast UP Agro Belt" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "79",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGorakhpurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGorakhpurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGorakhpur} />
    </>
  );
};

export default page;