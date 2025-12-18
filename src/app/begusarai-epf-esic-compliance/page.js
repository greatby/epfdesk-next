import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBegusarai,
  sectionsBegusarai,
  faqBegusarai,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Begusarai EPF & ESIC Consultants: IOCL & NTPC Vendor Compliance Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Barauni Refinery vendors, NTPC contractors, and Begusarai MSMEs. Navigate PE liability, EEC-2025, and hazardous process rules.",
  alternates: {
    canonical: "https://epfdesk.com/begusarai-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Begusarai EPF & ESIC Compliance | Industrial & Petrochemical Hub",
    description:
      "PF & ESIC experts for IOCL Barauni Refinery vendors, NTPC contractors, HURL ancillaries, and Begusarai industrial MSMEs.",
    url: "https://epfdesk.com/begusarai-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Begusarai EPF ESIC Compliance",
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
          Begusarai EPF & ESIC Compliance | Barauni PSU & Industrial Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for IOCL Barauni Refinery vendors, NTPC contractors, HURL ancillaries, and Begusarai MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/begusarai-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-begusarai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Begusarai EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/begusarai-epf-esic-compliance",
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
              "Begusarai",
              "Barauni",
              "Bihat",
              "Begusarai Sadar",
              "Garhpura",
            ],
            description:
              "EPF & ESIC consultancy for Barauni Refinery PSU vendors, NTPC contractors, petrochemical units, and Begusarai MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBegusarai} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBegusarai} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBegusarai} />
    </>
  );
};

export default page;