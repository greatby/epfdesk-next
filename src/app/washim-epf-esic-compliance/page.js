import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataWashimDistrict,
  sectionsWashimDistrict,
  faqWashimDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Washim EPF & ESIC Compliance for Cotton Ginning & Oil Mills | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Washim cotton ginning, oil mills and agro-processing units. Zone-3 minimum wage audits, seasonal PF risk and RO Akola defence.",
  keywords: [
    "Washim EPF consultant",
    "Cotton ginning PF compliance Washim",
    "Zone 3 minimum wages Maharashtra",
    "Oil mill ESIC registration Washim",
    "RO Akola EPFO defence",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/washim-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Washim EPF & ESIC Compliance | Cotton & Agro-Processing",
    description:
      "Statutory EPF & ESIC compliance for Washim cotton ginning, oil mills and seasonal agro-labour.",
    url:
      "https://epfdesk.com/washim-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Washim EPF ESIC Compliance",
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
          Washim EPF & ESIC Compliance for Cotton Ginning | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance services for Washim cotton ginning, oil mills and seasonal agro-processing units."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/washim-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-washim"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Washim EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Cotton Ginning & Agro-Processing Compliance Washim",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/washim-epf-esic-compliance",
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
              "EPF, ESIC and Minimum Wages Act compliance for Washim cotton ginning, oil mills and agro-processing units under Zone-3 wages.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Washim District",
              },
              { "@type": "Place", name: "Washim City" },
              { "@type": "Place", name: "Mangrulpir" },
              { "@type": "Place", name: "Karanja Lad" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "32",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry
          data={heroDataWashimDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct
          sections={sectionsWashimDistrict}
        />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqWashimDistrict} />
    </>
  );
};

export default page;
