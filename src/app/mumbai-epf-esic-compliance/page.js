import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMumbaiCity,
  sectionsMumbaiCity,
  faqMumbaiCity,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Mumbai EPF & ESIC Compliance for BFSI, IT Services, Stock Exchanges & Port Logistics | EPFDesk",
  description:
    "Expert EPF & ESIC defence for BFSI & FinTech firms, PF liability for contract staffing agencies in BKC, and ESIC compliance for support staff in corporate offices and Mumbai Port operations. Specialists in NWC wage rules & PE liability.",
  keywords: [
    "Mumbai PF consultant",
    "Mumbai ESIC registration",
    "PF on special allowance Mumbai",
    "EPFO 7A defence BFSI",
    "BKC contract staffing PF",
    "Mumbai Port contractor PF ESIC",
  ],
  alternates: {
    canonical: "https://epfdesk.com/mumbai-city-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Mumbai EPF & ESIC Compliance | BFSI, IT & Port Operations | EPFDesk",
    description:
      "PF & ESIC specialists for Mumbai BFSI, IT services, corporate offices, and Mumbai Port contractors.",
    url: "https://epfdesk.com/mumbai-city-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mumbai EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mumbai EPF & ESIC Compliance | BFSI, IT & Corporate Sector | EPFDesk",
    description:
      "High-stakes PF & ESIC compliance and EPFO 7A defence for Mumbai BFSI, IT firms, and port contractors.",
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
          Mumbai EPF & ESIC Compliance for BFSI, IT Services, Stock Exchanges & Port Logistics | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for BFSI & FinTech firms, PF liability for contract staffing agencies in BKC, and ESIC compliance for corporate offices and Mumbai Port operations."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mumbai-city-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Mumbai EPF & ESIC Compliance | BFSI, IT & Port Operations"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Mumbai BFSI firms, IT services, corporate offices, and port contractors."
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
        id="schema-mumbai-city"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Mumbai City EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Mumbai BFSI, IT & Corporate Sector",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mumbai-city-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS KEPT SAME AS BANGALORE */
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
              "Expert EPF & ESIC compliance for Mumbai City BFSI, IT services, corporate offices, contract staffing agencies, and Mumbai Port contractors, including NWC 2025 wage structuring and Section 7A defence.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Mumbai City" },
              { "@type": "Place", name: "Bandra Kurla Complex (BKC)" },
              { "@type": "Place", name: "Nariman Point" },
              { "@type": "Place", name: "Lower Parel" },
              { "@type": "Place", name: "Mumbai Port Trust Area" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "112",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMumbaiCity} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMumbaiCity} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMumbaiCity} />
    </>
  );
};

export default page;
