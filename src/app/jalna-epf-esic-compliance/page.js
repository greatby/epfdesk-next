import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalnaDistrict,
  sectionsJalnaDistrict,
  faqJalnaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jalna EPF & ESIC Compliance for Steel Mills, Seed Processing & Agro-Units | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Jalna steel reroll mills, PF liability for seed processing seasonal workers, and mandatory ESIC compliance for agro-processing units. Specialists in piece-rate wage audits and Principal Employer liability.",
  keywords: [
    "Jalna PF consultant",
    "Steel reroll mill EPF compliance Jalna",
    "Seed processing ESIC Jalna",
    "Piece rate wages PF ESIC Marathwada",
    "Agro processing EPF Jalna",
    "Jalna EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jalna-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jalna EPF & ESIC Compliance | Steel & Seed Processing | EPFDesk",
    description:
      "PF & ESIC specialists for Jalna steel mills, seed processing units, and agro-industries.",
    url: "https://epfdesk.com/jalna-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalna EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jalna EPF & ESIC Compliance | Steel & Agro Units | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Jalna steel mills and seed processors.",
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
          Jalna EPF & ESIC Compliance for Steel Mills, Seed Processing & Agro-Units | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Jalna steel reroll mills, seed processing units, and agro-processing industries."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jalna-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Jalna EPF & ESIC Compliance | Steel & Seed Processing"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Jalna steel mills, agro-processing, and seed industry units."
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
        id="schema-jalna"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Jalna EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Steel & Seed Industries in Jalna",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jalna-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Jalna steel reroll mills, seed processing units, agro-processing industries, and MIDC MSMEs with focus on piece-rate wages and Principal Employer liability.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jalna District" },
              { "@type": "Place", name: "Steel Reroll & TMT Mills" },
              { "@type": "Place", name: "Seed Processing Units" },
              { "@type": "Place", name: "Jalna MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "69",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalnaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalnaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalnaDistrict} />
    </>
  );
};

export default page;
