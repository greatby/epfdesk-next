import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMirzapurDistrict,
  sectionsMirzapurDistrict,
  faqMirzapurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Mirzapur EPF & ESIC Compliance: Carpet Industry Piece-Rate PF, Brassware Hazard & RO Varanasi Audits 2025 | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Mirzapur Carpet Exporters, Brassware Manufacturers and Stone Mines. Navigate RO Varanasi audits, 2025 piece-rate PF mandates and ESIC hazard liability in the Purvanchal carpet belt.",
  keywords: [
    "Mirzapur PF consultant",
    "Piece rate PF carpet industry",
    "ESIC registration brassware Mirzapur",
    "RO Varanasi EPF audit defense",
    "Silicosis ESIC liability Mirzapur",
    "Carpet exporter PF compliance UP",
  ],
  alternates: {
    canonical: "https://epfdesk.com/mirzapur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Mirzapur EPF & ESIC Compliance | Carpet, Brass & Mining | EPFDesk",
    description:
      "PF & ESIC specialists for Mirzapur carpet exporters, brassware units and sandstone mining clusters under RO Varanasi.",
    url: "https://epfdesk.com/mirzapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mirzapur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mirzapur EPF & ESIC Compliance | Carpet & Brass Industry | EPFDesk",
    description:
      "High-risk PF & ESIC compliance for Mirzapur’s carpet, brassware and mining sectors.",
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
          Mirzapur EPF & ESIC Compliance: Carpet Industry Piece-Rate PF, Brassware Hazard & RO Varanasi Audits 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defense for Mirzapur carpet exporters, brassware manufacturers and stone mining units under RO Varanasi."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mirzapur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Mirzapur EPF & ESIC Compliance | Carpet & Brassware"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Mirzapur carpet exporters, brass foundries and mining units."
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
        id="schema-mirzapur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Mirzapur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Carpet and Brass Industries in Mirzapur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mirzapur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Mirzapur carpet exporters, brassware units and mining operations governed by RO Varanasi.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Mirzapur District" },
              { "@type": "Place", name: "Bhadohi-Mirzapur Road" },
              { "@type": "Place", name: "Chunar" },
              { "@type": "Place", name: "Ahraura" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "67",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMirzapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMirzapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMirzapurDistrict} />
    </>
  );
};

export default page;
