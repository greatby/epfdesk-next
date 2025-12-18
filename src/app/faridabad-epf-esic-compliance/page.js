import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataFaridabad,
  sectionsFaridabad,
  faqFaridabad,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Faridabad EPF & ESIC Consultants: Engineering & PSU Vendor Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Faridabad engineering firms, IMT vendors, and tractor ancillaries. Navigate RO Faridabad audits, EEC-2025, and hazardous process rules.",
  alternates: {
    canonical: "https://epfdesk.com/faridabad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Faridabad EPF & ESIC Compliance | Manufacturing & Engineering Hub",
    description:
      "PF & ESIC experts for Faridabad engineering units, IMT Faridabad vendors, tractor ancillaries, and Haryana MSMEs.",
    url: "https://epfdesk.com/faridabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Faridabad EPF ESIC Compliance",
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
          Faridabad EPF & ESIC Compliance | Engineering & PSU Vendor Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Faridabad engineering units, IMT Faridabad vendors, tractor ancillaries, and manufacturing MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/faridabad-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-faridabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Faridabad EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/faridabad-epf-esic-compliance",
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
              "Faridabad",
              "IMT Faridabad",
              "Ballabgarh",
              "NIT Faridabad",
              "Sector 24",
              "Sector 25",
              "Sector 58",
            ],
            description:
              "EPF & ESIC consultancy for Faridabad engineering firms, IMT Faridabad PSU vendors, tractor ancillaries, and manufacturing MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFaridabad} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFaridabad} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqFaridabad} />
    </>
  );
};

export default page;