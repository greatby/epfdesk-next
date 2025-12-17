import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHowrah,
  sectionsHowrah,
  faqHowrah,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Howrah EPF & ESIC Compliance: Jute & Engineering Audit Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Howrah engineering firms, jute mills, foundries, and MSMEs. Navigate RO Howrah audits, Section 14B waivers, and EEC-2025.",
  alternates: {
    canonical: "https://epfdesk.com/howrah-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Howrah EPF & ESIC Compliance | Jute & Engineering Hub",
    description:
      "PF & ESIC experts for Howrah’s manufacturing, jute, foundry, and logistics clusters.",
    url: "https://epfdesk.com/howrah-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Howrah EPF ESIC Compliance",
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
          Howrah EPF & ESIC Compliance | Jute & Engineering Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Howrah engineering firms, jute mills, foundries, and MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/howrah-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-howrah"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Howrah EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/howrah-epf-esic-compliance",
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
              "Howrah",
              "Liluah",
              "Belur",
              "Salkia",
              "Ankurhati",
            ],
            description:
              "EPF & ESIC consultancy for Howrah’s jute mills, foundries, engineering firms, and logistics hubs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHowrah} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHowrah} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHowrah} />
    </>
  );
};

export default page;
