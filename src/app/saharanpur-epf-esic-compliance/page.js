import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqSaharanpur, heroDataSaharanpurDist, sectionsSaharanpurDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Saharanpur EPF & ESIC Compliance: Wood Carving Piece-Rate, Paper Mill Hazard & Sugar Seasonal PF | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Saharanpur wood carving exporters, paper mills and sugar manufacturers. Experts in RO Saharanpur liaison, piece-rate PF audits, ESIC hazard liability and seasonal compliance.",

  keywords: [
    "Saharanpur PF consultant",
    "Saharanpur ESIC registration",
    "Wood carving PF compliance Saharanpur",
    "Paper mill ESIC hazard Saharanpur",
    "Sugar mill seasonal PF Saharanpur",
    "RO Saharanpur EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/saharanpur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Saharanpur EPF & ESIC Compliance | Wood, Paper & Sugar Industries",
    description:
      "PF & ESIC specialists for Saharanpur wood carving, paper mills and sugar factories. RO Saharanpur enforcement handled end-to-end.",
    url: "https://epfdesk.com/saharanpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Saharanpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Saharanpur EPF & ESIC Compliance | Wood, Paper & Sugar | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Saharanpur wood carving exporters, paper mills and sugar factories.",
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
          Saharanpur EPF & ESIC Compliance: Wood Carving, Paper Mill & Sugar PF | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Saharanpur wood carving units, paper mills and sugar factories. Piece-rate PF audits, ESIC hazard liability and seasonal compliance handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/saharanpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Saharanpur EPF & ESIC Compliance | Wood, Paper & Sugar"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Saharanpur wood carving, paper mills and sugar units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-saharanpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Saharanpur EPF & ESIC Compliance Service | Wood, Paper & Sugar | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Wood Carving, Paper Mills and Sugar Units in Saharanpur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/saharanpur-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Saharanpur wood carving exporters, paper and pulp mills, and sugar factories. Expertise in piece-rate PF audits, ESIC hazard liability, seasonal headcount enforcement and RO Saharanpur inspections.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Saharanpur" },
              { "@type": "City", name: "Western Uttar Pradesh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "78",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSaharanpurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSaharanpurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSaharanpur} />
    </>
  );
};

export default page;