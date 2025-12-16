import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKolhapurDistrict,
  sectionsKolhapurDistrict,
  faqKolhapurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Kolhapur EPF & ESIC Compliance for Foundries, Sugar Mills & MIDC Contractors | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Kolhapur foundries and casting units, PF liability on sugar mill Retention Allowance, and mandatory ESIC for hazardous MIDC workers. Specialists in RO Kolhapur audit defence.",
  keywords: [
    "Kolhapur PF consultant",
    "Foundry ESIC compliance Kolhapur",
    "Gokul Shirgaon MIDC ESIC",
    "Kagal MIDC PF ESIC",
    "Sugar mill PF retention allowance Kolhapur",
    "RO Kolhapur EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kolhapur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kolhapur EPF & ESIC Compliance | Foundry & Sugar Industry | EPFDesk",
    description:
      "PF & ESIC specialists for Kolhapur foundries, sugar mills, and MIDC manufacturing clusters.",
    url: "https://epfdesk.com/kolhapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kolhapur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kolhapur EPF & ESIC Compliance | Foundry & Sugar Sector | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance for Kolhapur foundries, retention allowance audits, and MIDC factories.",
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
          Kolhapur EPF & ESIC Compliance for Foundries, Sugar Mills & MIDC Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Kolhapur foundries, sugar mills, PF on Retention Allowance, and hazardous MIDC units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kolhapur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Kolhapur EPF & ESIC Compliance | Foundry & Sugar Industry"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Kolhapur foundries, sugar factories, and engineering MIDC units."
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
        id="schema-kolhapur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kolhapur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Foundries & Sugar Mills in Kolhapur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kolhapur-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Kolhapur foundries, sugar mills, PF on Retention Allowance, and hazardous MIDC manufacturing units.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Kolhapur District" },
              { "@type": "Place", name: "Shiroli MIDC" },
              { "@type": "Place", name: "Gokul Shirgaon MIDC" },
              { "@type": "Place", name: "Kagal 5 Star MIDC" },
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
        <PerformanceSectionIndustry data={heroDataKolhapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKolhapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKolhapurDistrict} />
    </>
  );
};

export default page;
