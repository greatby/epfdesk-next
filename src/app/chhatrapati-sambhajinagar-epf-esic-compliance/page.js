import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSambhajinagarDistrict,
  sectionsSambhajinagarDistrict,
  faqSambhajinagarDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Aurangabad EPF & ESIC Compliance for Waluj Auto Cluster, DMIC Factories & Tourism Sector | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Waluj Auto MIDC, PF liability for Shendra–Bidkin DMIC contractors, and mandatory ESIC for factory and hazardous industry workers. Specialists in DMIC compliance and Principal Employer liability.",
  keywords: [
    "Aurangabad PF consultant",
    "Waluj MIDC EPF compliance",
    "DMIC Shendra ESIC registration",
    "Bidkin Industrial Area PF liability",
    "Auto MSME EPFO 7A Aurangabad",
    "Hotel ESIC compliance Aurangabad",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Aurangabad EPF & ESIC Compliance | Waluj Auto & DMIC Industrial Corridor | EPFDesk",
    description:
      "PF & ESIC specialists for Waluj Auto MIDC, Shendra–Bidkin DMIC factories, and Chhatrapati Sambhajinagar manufacturing hubs.",
    url:
      "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aurangabad EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aurangabad EPF & ESIC Compliance | Waluj Auto & DMIC | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Waluj Auto MIDC and DMIC factories.",
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
          Aurangabad EPF & ESIC Compliance for Waluj Auto Cluster, DMIC Factories & Tourism Sector | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Waluj Auto MIDC, Shendra–Bidkin DMIC contractors, and factory/hazardous industry ESIC compliance."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Aurangabad EPF & ESIC Compliance | Waluj Auto & DMIC"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Chhatrapati Sambhajinagar Auto MIDC, DMIC industrial corridor, and manufacturing hubs."
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
        id="schema-sambhajinagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Chhatrapati Sambhajinagar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Waluj Auto MIDC & DMIC Corridor",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Chhatrapati Sambhajinagar district covering Waluj Auto MIDC, Shendra–Bidkin DMIC corridor, manufacturing MSMEs, and Principal Employer liability management.",

            priceRange: "₹₹₹",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Chhatrapati Sambhajinagar District",
              },
              { "@type": "Place", name: "Waluj MIDC" },
              { "@type": "Place", name: "Chikalthana MIDC" },
              { "@type": "Place", name: "Shendra DMIC" },
              { "@type": "Place", name: "Bidkin Industrial Area (DMIC)" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "86",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSambhajinagarDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSambhajinagarDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSambhajinagarDistrict} />
    </>
  );
};

export default page;
