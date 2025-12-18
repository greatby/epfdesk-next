import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHaryanaBalance,
  sectionsHaryanaBalance,
  faqHaryanaBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Haryana EPF & ESIC Compliance: Sonipat, Rewari & Bawal Expert Consultants | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Sonipat food parks, Bawal auto hubs, and Rewari MSMEs. Navigate RO Karnal/Gurugram audits, EEC-2025, and PE liability.",
  alternates: {
    canonical:
      "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Haryana EPF & ESIC Compliance | Industrial & Agri-Hub Frontiers",
    description:
      "PF & ESIC experts for Sonipat food processing units, Bawal auto suppliers, Yamunanagar plywood manufacturers, and Haryana MSMEs.",
    url: "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haryana EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

/* ============================
   PAGE COMPONENT
============================ */
const page = () => {
  return (
    <>
      {/* LEGACY HEAD */}
      <Head>
        <title>
          Haryana EPF & ESIC Compliance | Sonipat, Bawal & Regional Clusters
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Haryana food parks, auto hubs, plywood clusters, and regional industrial MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/haryana-balance-districts-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-haryana-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Haryana EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
            telephone: "+91-9945933333",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            areaServed: [
              "Sonipat",
              "Kundli",
              "Rai",
              "Barhi",
              "Rewari",
              "Bawal",
              "Dharuhera",
              "Yamunanagar",
              "Ambala",
              "Hisar",
            ],
            description:
              "EPF & ESIC consultancy for Haryana food parks, auto hubs, plywood industries, and regional MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaryanaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaryanaBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaryanaBalance} />
    </>
  );
};

export default page;