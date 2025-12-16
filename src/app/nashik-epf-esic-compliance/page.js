import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNashikDistrict,
  sectionsNashikDistrict,
  faqNashikDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Nashik EPF & ESIC Compliance for Satpur/Ambad MIDC, Auto Component & Wine Industry | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Nashik auto and pharma factories (Satpur, Ambad, Sinnar MIDC), PF liability for MIDC contract labour, and mandatory ESIC for grape and wine processing units. Specialists in SRO Satpur liaison and Principal Employer liability.",
  keywords: [
    "Nashik PF consultant",
    "Satpur MIDC EPF compliance",
    "Ambad MIDC ESIC registration",
    "Wine industry ESIC Nashik",
    "Sinnar MIDC PF liability",
    "EPFO SRO Satpur 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/nashik-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Nashik EPF & ESIC Compliance | MIDC, Auto & Wine Industry | EPFDesk",
    description:
      "PF & ESIC specialists for Nashik MIDC factories, auto and pharma units, and grape/wine processing industry.",
    url: "https://epfdesk.com/nashik-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nashik EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nashik EPF & ESIC Compliance | Satpur MIDC & Wine Industry | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Nashik MIDC factories and wine processing units.",
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
          Nashik EPF & ESIC Compliance for Satpur/Ambad MIDC, Auto Component & Wine Industry | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Nashik MIDC auto/pharma factories, contract labour PF liability, and ESIC compliance for wine and grape processing units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/nashik-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Nashik EPF & ESIC Compliance | MIDC & Wine Industry"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Nashik Satpur, Ambad, Sinnar MIDC clusters and wine/agro-processing industry."
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
        id="schema-nashik"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Nashik EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Nashik MIDC & Wine Industry",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/nashik-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Nashik district covering Satpur, Ambad, and Sinnar MIDC factories, auto and pharma manufacturing, wine and grape processing units, and Principal Employer liability management.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Nashik District" },
              { "@type": "Place", name: "Satpur MIDC" },
              { "@type": "Place", name: "Ambad MIDC" },
              { "@type": "Place", name: "Sinnar MIDC" },
              { "@type": "Place", name: "Nashik Wine Industry Belt" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "89",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNashikDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNashikDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNashikDistrict} />
    </>
  );
};

export default page;
