import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMumbaiSuburbanDistrict,
  sectionsMumbaiSuburbanDistrict,
  faqMumbaiSuburbanDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Mumbai Suburban EPF & ESIC Compliance for IT, BPO & Film Industry | EPFDesk",
  description:
    "Critical EPF & ESIC defence for Mumbai Suburban IT/BPO hubs, Film & Entertainment contract labour, allowance suppression audits and RO Bandra liaison.",
  keywords: [
    "Mumbai Suburban EPF consultant",
    "RO Bandra EPFO audit",
    "IT BPO PF compliance Mumbai",
    "Film industry PF ESIC liability",
    "Allowance suppression PF audit",
    "NWC 2025 payroll restructuring IT",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Mumbai Suburban EPF & ESIC Compliance | IT, BPO & Film Industry",
    description:
      "High-risk EPF & ESIC compliance for Mumbai Suburban service sector, IT/ITeS and Film production houses.",
    url: "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mumbai Suburban EPF ESIC Compliance",
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
          Mumbai Suburban EPF & ESIC Compliance for IT & Film | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Mumbai Suburban IT/BPO companies, Film Industry contractors and allowance-based payroll audits."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mumbai-suburban-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-mumbai-suburban"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Mumbai Suburban EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Mumbai Suburban IT & Film Sector",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
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
              "EPF & ESIC compliance services for Mumbai Suburban IT, BPO, Film Industry and service sector establishments.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Mumbai Suburban District",
              },
              { "@type": "Place", name: "Andheri" },
              { "@type": "Place", name: "Malad" },
              { "@type": "Place", name: "Goregaon" },
              { "@type": "Place", name: "BKC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "67",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry
          data={heroDataMumbaiSuburbanDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct
          sections={sectionsMumbaiSuburbanDistrict}
        />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMumbaiSuburbanDistrict} />
    </>
  );
};

export default page;
