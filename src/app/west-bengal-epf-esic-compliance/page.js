import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataWestBengal,
  sectionsWestBengal,
  faqWestBengal,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "West Bengal EPF & ESIC Compliance: North Bengal & Central Agri-Hub Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Siliguri logistics, Hooghly MSMEs, and North Bengal tea estates. Navigate RO Jalpaiguri/Kolkata audits, EEC-2025, and Labour Code shifts.",
  alternates: {
    canonical:
      "https://epfdesk.com/west-bengal-epf-esic-compliance",
  },
  openGraph: {
    title:
      "West Bengal EPF & ESIC Compliance | North Bengal & Agri-Industrial Belt",
    description:
      "PF & ESIC experts for North Bengal tea estates, Siliguri logistics hubs, and Hooghly–Nadia agri-industries.",
    url: "https://epfdesk.com/west-bengal-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "West Bengal EPF ESIC Compliance",
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
          West Bengal EPF & ESIC Compliance | North Bengal & Agri-Industrial Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Siliguri logistics, tea estates, jute mills, rice mills, and agri-processing units across West Bengal."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/west-bengal-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-west-bengal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "West Bengal EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/west-bengal-epf-esic-compliance",
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
              "Siliguri",
              "Jalpaiguri",
              "Darjeeling",
              "Alipurduar",
              "Hooghly",
              "Nadia",
              "Murshidabad",
            ],
            description:
              "EPF & ESIC consultancy for North Bengal logistics, tea estates, and Central West Bengal agri-industrial clusters.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataWestBengal} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsWestBengal} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqWestBengal} />
    </>
  );
};

export default page;