import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNandedDistrict,
  sectionsNandedDistrict,
  faqNandedDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Nanded EPF & ESIC Compliance for Sugar Mills, Textile Powerlooms & Educational Trusts | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Nanded sugar mills, PF liability for seasonal cane harvest workers, and mandatory ESIC compliance for textile powerlooms and educational institutions. Specialists in piece-rate wage audits and Principal Employer liability.",
  keywords: [
    "Nanded PF consultant",
    "Sugar mill EPF compliance Nanded",
    "Powerloom ESIC registration Nanded",
    "Piece rate wages PF ESIC Marathwada",
    "Educational trust PF ESIC Nanded",
    "Nanded EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/nanded-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Nanded EPF & ESIC Compliance | Sugar, Textile & Education | EPFDesk",
    description:
      "PF & ESIC specialists for Nanded sugar factories, powerloom units, seasonal agro labour, and educational trusts.",
    url: "https://epfdesk.com/nanded-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nanded EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nanded EPF & ESIC Compliance | Sugar Mills & Powerlooms | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Nanded sugar mills, textiles, and education sector.",
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
          Nanded EPF & ESIC Compliance for Sugar Mills, Textile Powerlooms & Educational Trusts | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Nanded sugar mills, seasonal harvest workers, textile powerlooms, and educational institutions."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/nanded-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Nanded EPF & ESIC Compliance | Sugar & Textile Sector"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Nanded sugar factories, powerloom units, agro-processing, and educational trusts."
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
        id="schema-nanded"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Nanded EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar Mills & Textile Units in Nanded",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/nanded-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Nanded sugar mills, textile powerloom units, seasonal cane harvest workers, and educational trusts, with focus on piece-rate wages and Principal Employer liability.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Nanded District" },
              { "@type": "Place", name: "Sugar Mills & Cane Harvesting" },
              { "@type": "Place", name: "Textile Powerloom Units" },
              { "@type": "Place", name: "Educational Institutions" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "74",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNandedDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNandedDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNandedDistrict} />
    </>
  );
};

export default page;
