import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqBudaun, heroDataBudaunDist, sectionsBudaunDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Budaun EPF & ESIC Compliance: Agro-Processing Seasonal PF, Trading MSME Coverage & PE Liability Defense | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Budaun Dal Mills, Cold Storages and Trading MSMEs. Experts in RO Bareilly liaison, seasonal PF audits and MSME coverage risk mitigation.",

  keywords: [
    "Budaun PF consultant",
    "Budaun ESIC registration",
    "Dal mill PF compliance Budaun",
    "Cold storage ESIC Budaun",
    "RO Bareilly PF jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/budaun-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Budaun EPF & ESIC Compliance | Agro-Processing & MSME",
    description:
      "PF & ESIC specialists for Budaun Agro-Processing units, Cold Storages and Trading MSMEs.",
    url: "https://epfdesk.com/budaun-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Budaun PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Budaun EPF & ESIC Compliance | Agro & MSME Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Budaun Dal Mills, Cold Storages and Trading Firms.",
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
          Budaun EPF & ESIC Compliance: Agro-Processing & MSME | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Budaun Dal Mills, Cold Storages and Trading MSMEs under RO Bareilly."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/budaun-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Budaun EPF & ESIC Compliance | Agro-Processing & MSME"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Budaun Agro-Processing units and Trading MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-budaun"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Budaun EPF & ESIC Compliance | Agro-Processing & MSME | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Agro & Trading MSMEs (Budaun)",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/budaun-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Budaun Dal Mills, Cold Storages and Trading MSMEs. Expertise in RO Bareilly inspections, seasonal PF audits and MSME headcount compliance defense.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Budaun" },
              { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "64",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBudaunDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBudaunDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBudaun} />
    </>
  );
};

export default page;