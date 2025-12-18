import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGuwahati,
  sectionsGuwahati,
  faqGuwahati,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Guwahati EPF & ESIC Consultants: Assam Industrial & Service Hub Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Guwahati IT Parks, North Guwahati industrial units, and retail chains. Navigate RO Guwahati audits, NEIDS 2025, and Labour Code compliance.",
  alternates: {
    canonical:
      "https://epfdesk.com/guwahati-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Guwahati EPF & ESIC Compliance | Assam Industrial & Commercial Hub",
    description:
      "PF & ESIC experts for Guwahati manufacturing units, logistics contractors, IT parks, retail chains, and Northeast MSMEs.",
    url: "https://epfdesk.com/guwahati-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Guwahati EPF ESIC Compliance",
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
          Guwahati EPF & ESIC Compliance | Assam Industrial Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Guwahati industrial estates, IT parks, retail chains, and Northeast India businesses."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/guwahati-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-guwahati"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Guwahati EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/guwahati-epf-esic-compliance",
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
              "Guwahati",
              "Amingaon",
              "North Guwahati",
              "Rani",
              "Chaygaon",
              "Bamunimaidam",
              "GS Road",
              "Bongora IT Park",
            ],
            description:
              "EPF & ESIC consultancy for Guwahati’s manufacturing, logistics, IT, retail, and Northeast MSME ecosystem.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGuwahati} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGuwahati} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGuwahati} />
    </>
  );
};

export default page;