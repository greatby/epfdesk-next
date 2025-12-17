import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAlwarBhiwadi,
  sectionsAlwarBhiwadi,
  faqAlwarBhiwadi,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Bhiwadi & Alwar EPF & ESIC Compliance: Japanese Zone PE Liability, EEC-2025 & Global Supply Chain Audits | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Bhiwadi auto MNCs, Neemrana Japanese Zone units, and Alwar MSMEs. Navigate RO Alwar/Bhiwadi audits, EEC-2025 and global ESG labour compliance.",
  keywords: [
    "Bhiwadi EPF consultant",
    "Alwar ESIC compliance",
    "Neemrana Japanese zone PF",
    "Bhiwadi auto component ESIC",
    "EEC 2025 EPF Alwar",
    "RO Bhiwadi 7A defense",
  ],
  alternates: {
    canonical: "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bhiwadi & Alwar EPF & ESIC Compliance | Global Industrial Hub",
    description:
      "PF & ESIC specialists for Bhiwadi auto MNCs, Neemrana Japanese Zone and Alwar MSMEs.",
    url: "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhiwadi Alwar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bhiwadi & Alwar EPF & ESIC Compliance | Japanese & Korean Zones",
    description:
      "High-risk PF & ESIC compliance for Bhiwadi, Neemrana and Alwar industrial units.",
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
          Bhiwadi & Alwar EPF & ESIC Compliance: Japanese Zone PE Liability, EEC-2025 & Global Supply Chain Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Bhiwadi auto MNCs, Neemrana Japanese Zone units and Alwar MSMEs."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bhiwadi & Alwar EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Japanese Zone, Korean Zone and DMIC industrial units."
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
        id="schema-alwar-bhiwadi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bhiwadi & Alwar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Bhiwadi, Neemrana & Alwar Industrial Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS AS REQUESTED */
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
              "EPF & ESIC compliance specialists for Bhiwadi auto MNCs, Neemrana Japanese Zone, Ghiloth Korean Zone and Alwar MSMEs under RO Alwar and RO Bhiwadi.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Alwar District" },
              { "@type": "Place", name: "Bhiwadi" },
              { "@type": "Place", name: "Neemrana" },
              { "@type": "Place", name: "Ghiloth" },
              { "@type": "Place", name: "Khairthal-Tijara" },
              { "@type": "Place", name: "Kotputli-Behror" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAlwarBhiwadi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAlwarBhiwadi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAlwarBhiwadi} />
    </>
  );
};

export default page;
