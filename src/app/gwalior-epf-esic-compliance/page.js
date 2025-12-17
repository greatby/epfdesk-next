import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGwaliorDistrict,
  sectionsGwaliorDistrict,
  faqGwaliorDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Gwalior EPF & ESIC Compliance: Stone Cluster PE Liability, EEC-2025 & ESIC Amnesty 2025 Settlement | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Gwalior stone mines, engineering units and food processors. Navigate RO Gwalior audits, EEC-2025 enrolment, SPREE 2025 onboarding and ESIC Amnesty 2025 litigation settlement in the Gwalior–Chambal belt.",
  keywords: [
    "Gwalior PF consultant",
    "Stone industry EPF compliance Gwalior",
    "ESIC registration Banmore industrial area",
    "EEC 2025 enrolment Gwalior",
    "ESIC Amnesty Scheme 2025 MP",
    "SPREE 2025 registration Gwalior MSME",
  ],
  alternates: {
    canonical: "https://epfdesk.com/gwalior-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Gwalior EPF & ESIC Compliance | Stone & Industrial Clusters | EPFDesk",
    description:
      "PF & ESIC specialists for Gwalior stone clusters, engineering units and food processing industries under RO Gwalior.",
    url: "https://epfdesk.com/gwalior-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gwalior EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gwalior EPF & ESIC Compliance | Stone & MSME Clusters",
    description:
      "High-risk PF & ESIC compliance for Gwalior stone quarry units, engineering factories and food processors.",
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
          Gwalior EPF & ESIC Compliance: Stone Cluster PE Liability, EEC-2025 & ESIC Amnesty 2025 Settlement | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Gwalior stone mines, engineering units and food processors under RO Gwalior."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gwalior-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Gwalior EPF & ESIC Compliance | Stone & Industrial Clusters"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Gwalior stone carving, engineering and food processing clusters."
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
        id="schema-gwalior"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Gwalior EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Stone & MSME Units in Gwalior",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/gwalior-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Gwalior stone clusters, engineering factories, food processors and MSMEs governed by RO Gwalior.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Gwalior District" },
              { "@type": "Place", name: "Banmore Industrial Area" },
              { "@type": "Place", name: "Malanpur Industrial Area" },
              { "@type": "Place", name: "Ghatigaon" },
              { "@type": "Place", name: "Dabra" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "70",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGwaliorDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGwaliorDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGwaliorDistrict} />
    </>
  );
};

export default page;
