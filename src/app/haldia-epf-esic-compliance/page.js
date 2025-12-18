import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHaldia,
  sectionsHaldia,
  faqHaldia,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Haldia EPF & ESIC Compliance: Petrochemical & Port Contractor Audits | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Haldia Petrochemical vendors, IOCL contractors, and Port logistics firms. Navigate RO Haldia audits, EEC-2025, and hazardous process rules.",
  alternates: {
    canonical: "https://epfdesk.com/haldia-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Haldia EPF & ESIC Compliance | Maritime & Petrochemical Hub",
    description:
      "PF & ESIC experts for Haldia’s petrochemical, refinery, port, and logistics contractors.",
    url: "https://epfdesk.com/haldia-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldia EPF ESIC Compliance",
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
          Haldia EPF & ESIC Compliance | Petrochemical & Port Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Haldia petrochemical units, refinery vendors, and port logistics firms."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/haldia-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-haldia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Haldia EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haldia-epf-esic-compliance",
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
              "Haldia",
              "Tamluk",
              "Purba Medinipur",
              "Haldia Industrial Area",
            ],
            description:
              "EPF & ESIC consultancy for Haldia’s petrochemical, refinery, port, and hazardous process industries.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaldia} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaldia} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaldia} />
    </>
  );
};

export default page;