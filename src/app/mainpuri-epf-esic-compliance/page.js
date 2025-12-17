import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMainpuriDistrict,
  sectionsMainpuriDistrict,
  faqMainpuriDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Mainpuri EPF & ESIC Compliance: Agro-Industrial PF, MSME Liability & New ESIC Extension Defense | EPFDesk",
  description:
    "Specialized EPF & ESIC advisory for Mainpuri Rice Mills, Cold Storages and MSMEs. Manage RO Agra audits, the 2023 ESIC expansion, Retaining Allowance PF exposure and Principal Employer liability.",
  keywords: [
    "Mainpuri PF consultant",
    "ESIC registration Mainpuri",
    "Rice mill PF compliance Mainpuri",
    "Cold storage retaining allowance PF",
    "RO Agra EPFO audit defense",
    "Mainpuri MSME EPF ESIC",
  ],
  alternates: {
    canonical: "https://epfdesk.com/mainpuri-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Mainpuri EPF & ESIC Compliance | Agro-Industry & MSMEs | EPFDesk",
    description:
      "PF & ESIC specialists for Mainpuri rice mills, cold storages, tobacco units and MSMEs under RO Agra jurisdiction.",
    url: "https://epfdesk.com/mainpuri-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mainpuri EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mainpuri EPF & ESIC Compliance | Agro & MSME Risk | EPFDesk",
    description:
      "Critical PF & ESIC compliance for Mainpuri agro-industrial and MSME sectors after ESIC expansion.",
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
          Mainpuri EPF & ESIC Compliance: Agro-Industrial PF, MSME Liability & New ESIC Extension Defense | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defense for Mainpuri Rice Mills, Cold Storages, MSMEs and seasonal workforce audits under RO Agra."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mainpuri-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Mainpuri EPF & ESIC Compliance | Agro & MSMEs"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Mainpuri agro-processing units, MSMEs and seasonal employers."
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
        id="schema-mainpuri"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Mainpuri EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Agro-Industrial Units in Mainpuri",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mainpuri-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Mainpuri rice mills, cold storages, tobacco units and MSMEs after the 2023 ESIC extension, governed by RO Agra.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Mainpuri District" },
              { "@type": "Place", name: "Kishni" },
              { "@type": "Place", name: "Karhal" },
              { "@type": "Place", name: "Bewar" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "64",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMainpuriDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMainpuriDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMainpuriDistrict} />
    </>
  );
};

export default page;
