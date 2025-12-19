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
    canonical: "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
  },
  openGraph: {
    title: "Mumbai Suburban EPF & ESIC Compliance | IT, BPO & Film Industry",
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
          Mumbai Suburban EPF & ESIC Compliance: IT, BPO, Film Industry & Wage
          Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Mumbai Suburban district — IT & BPO companies, film and media production houses, studios and contractor-driven payrolls. RO Mumbai audits, allowance-based wage scrutiny, Principal Employer liability and ESIC coverage handled."
        />

        <meta
          name="keywords"
          content="Mumbai Suburban PF consultant, Mumbai Suburban ESIC consultant, IT BPO PF ESIC Mumbai, film industry contractor PF liability, media production labour compliance, allowance based payroll PF audits, Principal Employer liability Mumbai Suburban, NWC 2025 wage restructuring Mumbai"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mumbai-suburban-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Mumbai Suburban EPF & ESIC Consultant | IT, BPO & Film Industry | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Mumbai Suburban IT/BPO companies, film industry contractors and media production houses."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/mumbai-suburban-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mumbai Suburban EPF & ESIC Compliance | IT, BPO & Film Industry | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Mumbai Suburban IT/BPO companies and film industry contractors — wage audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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

            name: "Mumbai Suburban EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Mumbai Suburban IT & Film Sector",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
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
        <PerformanceSectionIndustry data={heroDataMumbaiSuburbanDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMumbaiSuburbanDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMumbaiSuburbanDistrict} />
    </>
  );
};

export default page;
