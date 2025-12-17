import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKeonjharDistrict,
  sectionsKeonjharDistrict,
  faqKeonjharDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Keonjhar EPF & ESIC Compliance: Mining Sector Audits & Expert Consultants | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Keonjhar iron ore mines, crusher units and mining vendors. Navigate RO Keonjhar audits, i3MS integration and Principal Employer liability in India’s mineral hub.",
  keywords: [
    "Keonjhar PF consultant",
    "EPF compliance for iron ore mines",
    "ESIC registration Barbil crusher units",
    "RO Keonjhar EPF 7A defense",
    "i3MS PF compliance Keonjhar",
    "Mining contractor ESIC Odisha",
  ],
  alternates: {
    canonical: "https://epfdesk.com/keonjhar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Keonjhar EPF & ESIC Compliance | Mining & Mineral Hub",
    description:
      "PF & ESIC specialists for Keonjhar mining, quarrying and mineral processing units governed by RO Keonjhar.",
    url: "https://epfdesk.com/keonjhar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Keonjhar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Keonjhar EPF & ESIC Consultants | Mining & Mineral Ecosystem",
    description:
      "High-risk PF & ESIC compliance for iron ore mines, crushers and transport contractors in Keonjhar.",
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
          Keonjhar EPF & ESIC Compliance: Mining Sector Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Keonjhar iron ore mines, Barbil crusher units and mining transport contractors under RO Keonjhar."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/keonjhar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Keonjhar EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Keonjhar’s mining and mineral ecosystem."
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
        id="schema-keonjhar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Keonjhar EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Keonjhar Mining Sector",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/keonjhar-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Keonjhar iron ore mines, crusher units, mineral processing plants and transport contractors governed by RO Keonjhar.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Keonjhar District" },
              { "@type": "Place", name: "Barbil" },
              { "@type": "Place", name: "Joda" },
              { "@type": "Place", name: "Koira" },
              { "@type": "Place", name: "Banspani" },
              { "@type": "Place", name: "Gandhamardan" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "76",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKeonjharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKeonjharDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKeonjharDistrict} />
    </>
  );
};

export default page;
