import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBhandaraDistrict,
  sectionsBhandaraDistrict,
  faqBhandaraDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Bhandara EPF & ESIC Compliance for Rice Mills & Tendu Leaf Processing | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Bhandara Rice Mills, Tendu Leaf processing units and seasonal agro-workers. Minimum Wages Act, piece-rate audits and RO Nagpur defence.",
  keywords: [
    "Bhandara EPF consultant",
    "Rice mill PF compliance Bhandara",
    "Tendu leaf contractor EPF ESIC",
    "Minimum wages rice mill Maharashtra",
    "RO Nagpur EPFO defence",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/bhandara-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bhandara EPF & ESIC Compliance | Rice Mills & Seasonal Workers",
    description:
      "Statutory EPF & ESIC compliance for Bhandara rice mills, agro-processing and seasonal labour.",
    url: "https://epfdesk.com/bhandara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhandara EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Bhandara EPF & ESIC Compliance for Rice Mills | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance services for Bhandara rice mills, tendu leaf processing and seasonal agro-workers."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bhandara-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-bhandara"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Bhandara EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Rice Mill & Agro-Processing Labour Law Consultants Bhandara",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/bhandara-epf-esic-compliance",
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
              "EPF, ESIC and Minimum Wages Act compliance services for Bhandara rice mills, tendu leaf processing units and seasonal agro-workers.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Bhandara District",
              },
              { "@type": "Place", name: "Bhandara City" },
              { "@type": "Place", name: "Tumsar" },
              { "@type": "Place", name: "Pauni" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "41",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry
          data={heroDataBhandaraDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct
          sections={sectionsBhandaraDistrict}
        />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBhandaraDistrict} />
    </>
  );
};

export default page;
