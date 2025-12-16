import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPuneDistrict,
  sectionsPuneDistrict,
  faqPuneDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Pune EPF & ESIC Compliance for Auto MIDC, Hinjewadi IT Park & Principal Employer Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Pimpri-Chinchwad auto clusters, PF liability for Hinjewadi IT contractors, and ESIC compliance for Bhosari MIDC factory workers. Specialists in CLRA and IT salary allowance audits.",
  keywords: [
    "Pune PF consultant",
    "Hinjewadi IT PF compliance",
    "Auto MIDC ESIC Pune",
    "PF on Special Allowance Pune",
    "EPFO 7A defence Pune IT",
    "Principal Employer liability Pune",
  ],
  alternates: {
    canonical: "https://epfdesk.com/pune-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Pune EPF & ESIC Compliance | Auto, IT & Manufacturing Hubs | EPFDesk",
    description:
      "PF & ESIC specialists for Pune auto OEMs, IT parks, and MIDC manufacturing units.",
    url: "https://epfdesk.com/pune-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pune EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pune EPF & ESIC Compliance | Auto MIDC & Hinjewadi IT | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Pune auto and IT sectors.",
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
          Pune EPF & ESIC Compliance for Auto MIDC, Hinjewadi IT Park & Principal Employer Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Pune auto clusters, Hinjewadi IT contractors, and MIDC factory ESIC compliance."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/pune-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Pune EPF & ESIC Compliance | Auto, IT & Manufacturing"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Pune auto OEMs, IT parks, and MIDC manufacturing units."
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
        id="schema-pune"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Pune EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Pune Auto & IT Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/pune-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Pune district auto manufacturing clusters, IT parks, MIDC factories, and Principal Employer liability management.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Pune District" },
              { "@type": "Place", name: "Pimpri-Chinchwad Auto Cluster" },
              { "@type": "Place", name: "Chakan MIDC" },
              { "@type": "Place", name: "Hinjewadi IT Park" },
              { "@type": "Place", name: "Bhosari MIDC" },
              { "@type": "Place", name: "Ranjangaon MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "104",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPuneDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPuneDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPuneDistrict} />
    </>
  );
};

export default page;
