import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqFirozabad, heroDataFirozabadDist, sectionsFirozabadDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Firozabad EPF & ESIC Compliance: Glass & Bangle Piece-Rate Evasion, Furnace Hazard & MSME PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Firozabad Glass Factories, Bangle Units and ancillary MSMEs. Experts in RO Agra liaison, piece-rate PF audits and catastrophic ESIC furnace hazard liability.",

  keywords: [
    "Firozabad PF consultant",
    "Firozabad ESIC registration",
    "Glass industry PF compliance Firozabad",
    "Bangle factory ESIC hazard",
    "RO Agra PF jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/firozabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Firozabad EPF & ESIC Compliance | Glass & Bangle Industry",
    description:
      "PF & ESIC specialists for Firozabad Glass, Bangle and Furnace-based industries.",
    url: "https://epfdesk.com/firozabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Firozabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Firozabad EPF & ESIC Compliance | Glass & Bangle Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Firozabad Glass and Bangle industries.",
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
          Firozabad EPF & ESIC Compliance: Glass & Bangle Industry | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Firozabad Glass Factories, Bangle Units and ancillary MSMEs under RO Agra."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/firozabad-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Firozabad EPF & ESIC Compliance | Glass & Bangle Industry"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Firozabad Glass, Bangle and Furnace-based units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-firozabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Firozabad EPF & ESIC Compliance | Glass & Bangle Industry | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Glass & Bangle Units (Firozabad)",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/firozabad-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Firozabad Glass Factories, Bangle Units and furnace-based MSMEs. Expertise in RO Agra inspections, piece-rate PF audits and catastrophic ESIC hazard liability.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Firozabad" },
              { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "69",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFirozabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFirozabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqFirozabad} />
    </>
  );
};

export default page;