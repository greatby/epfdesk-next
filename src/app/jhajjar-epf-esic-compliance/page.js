import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJhajjar,
  sectionsJhajjar,
  faqJhajjar,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jhajjar EPF & ESIC Compliance: Bahadurgarh Footwear Hub Audit Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Bahadurgarh footwear units, MET City industries, and Jhajjar MSMEs. Navigate RO Rohtak audits, EEC-2025, and local hiring laws.",
  alternates: {
    canonical: "https://epfdesk.com/jhajjar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jhajjar EPF & ESIC Compliance | Footwear & MET City Hub",
    description:
      "PF & ESIC experts for Bahadurgarh footwear manufacturers, MET City vendors, and Jhajjar industrial MSMEs.",
    url: "https://epfdesk.com/jhajjar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jhajjar EPF ESIC Compliance",
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
          Jhajjar EPF & ESIC Compliance | Bahadurgarh Footwear Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Bahadurgarh footwear units, MET City industries, and Jhajjar manufacturing MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/jhajjar-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jhajjar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Jhajjar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jhajjar-epf-esic-compliance",
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
              "Jhajjar",
              "Bahadurgarh",
              "MET City",
              "Badli",
              "MIE Bahadurgarh",
              "Sector 16",
              "Sector 17",
            ],
            description:
              "EPF & ESIC consultancy for Bahadurgarh footwear clusters, MET City MNC vendors, and Jhajjar industrial units.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJhajjar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJhajjar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJhajjar} />
    </>
  );
};

export default page;