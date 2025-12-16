import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAkolaDistrict,
  sectionsAkolaDistrict,
  faqAkolaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Akola EPF & ESIC Compliance for Cotton Mills, Agro-Processing & Paras Power Plant Contractors | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Akola cotton and textile mills, PF liability for seasonal agro-processing workers, and ESIC compliance for Paras Thermal Power Plant contract staff. Specialists in piece-rate wage audits and Principal Employer liability.",
  keywords: [
    "Akola PF consultant",
    "Cotton mill EPF compliance Akola",
    "Piece rate wages PF ESIC",
    "Paras Thermal Power Plant PF liability",
    "Akola EPFO 7A defence",
    "Seasonal worker PF Vidarbha",
  ],
  alternates: {
    canonical: "https://epfdesk.com/akola-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Akola EPF & ESIC Compliance | Cotton, Agro & Power Plant Sector | EPFDesk",
    description:
      "PF & ESIC specialists for Akola cotton mills, agro-processing units, and power plant contractors.",
    url: "https://epfdesk.com/akola-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Akola EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Akola EPF & ESIC Compliance | Cotton Mills & Power Plant | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Akola cotton mills and power plant contractors.",
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
          Akola EPF & ESIC Compliance for Cotton Mills, Agro-Processing & Paras Power Plant Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Akola cotton mills, seasonal agro-processing labour, and Paras Thermal Power Plant contractors."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/akola-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Akola EPF & ESIC Compliance | Cotton & Power Plant Sector"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Akola cotton ginning, agro-processing, and thermal power plant contractors."
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
        id="schema-akola"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Akola EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Cotton Mills & Power Plants",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/akola-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Akola district cotton mills, seasonal agro-processing units, and Paras Thermal Power Station contractors, with strong focus on piece-rate wages and Principal Employer liability.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Akola District" },
              { "@type": "Place", name: "Cotton Ginning & Textile Mills" },
              { "@type": "Place", name: "Paras Thermal Power Station" },
              { "@type": "Place", name: "Akola MIDC Phase IV" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "82",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAkolaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAkolaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAkolaDistrict} />
    </>
  );
};

export default page;
