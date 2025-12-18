import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBokaro,
  sectionsBokaro,
  faqBokaro,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Bokaro EPF & ESIC Consultants: SAIL Vendor & Balidih Industrial Compliance | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Bokaro Steel Plant (SAIL) vendors, Balidih MSMEs, and engineering units. Navigate RO Bokaro audits, EEC-2025, and Principal Employer liability.",
  alternates: {
    canonical: "https://epfdesk.com/bokaro-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bokaro EPF & ESIC Compliance | Steel & Engineering Belt",
    description:
      "PF & ESIC experts for SAIL-BSL contractors, Balidih engineering units, and PSU-linked industries in Bokaro.",
    url: "https://epfdesk.com/bokaro-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bokaro EPF ESIC Compliance",
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
          Bokaro EPF & ESIC Compliance | SAIL & Engineering Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for SAIL-BSL contractors, Balidih fabrication units, power plant vendors, and engineering MSMEs in Bokaro."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/bokaro-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-bokaro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Bokaro EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bokaro-epf-esic-compliance",
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
              "Bokaro Steel City",
              "Balidih",
              "Chandrapura",
              "Bokaro Thermal",
              "Phusro",
            ],
            description:
              "EPF & ESIC consultancy for SAIL-BSL vendors, Balidih industrial units, and PSU-linked power and engineering clusters in Bokaro.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBokaro} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBokaro} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBokaro} />
    </>
  );
};

export default page;