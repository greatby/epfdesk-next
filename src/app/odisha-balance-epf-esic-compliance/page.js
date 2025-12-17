import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataOdishaBalance,
  sectionsOdishaBalance,
  faqOdishaBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Odisha EPF & ESIC Compliance: Western Agri-Hubs & Southern Mineral Belt Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Bargarh, Koraput, Rayagada and Western Odisha. Navigate RO Sambalpur/Berhampur audits, EEC-2025 and mining PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Odisha EPF & ESIC Compliance | Western Agri & Southern Mineral Belt",
    description:
      "PF & ESIC experts for Odisha’s agri-processing and mineral districts governed by RO Sambalpur & RO Berhampur.",
    url: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Odisha EPF ESIC Compliance",
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
          Odisha EPF & ESIC Compliance: Western & Southern Districts | EPFDesk
        </title>
        <meta
          name="description"
          content="Specialized PF & ESIC compliance for Odisha’s agri-processing and mineral districts."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/odisha-balance-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-odisha-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Odisha EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
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
              "Koraput",
              "Rayagada",
              "Kalahandi",
              "Bargarh",
              "Balangir",
              "Sambalpur",
              "Dhenkanal",
              "Puri",
              "Nayagarh",
            ],
            description:
              "EPF & ESIC consultancy for Odisha’s western agri-industrial hubs and southern mineral belt.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataOdishaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsOdishaBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqOdishaBalance} />
    </>
  );
};

export default page;
