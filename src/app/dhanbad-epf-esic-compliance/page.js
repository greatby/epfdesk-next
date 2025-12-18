import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDhanbad,
  sectionsDhanbad,
  faqDhanbad,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Dhanbad EPF & ESIC Consultants: Coal Mining & Heavy Industrial Compliance | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Dhanbad coal vendors, BCCL contractors, and hard coke units. Navigate RO Dhanbad audits, EEC-2025, and mining PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/dhanbad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dhanbad EPF & ESIC Compliance | Coal, Mining & PSU Vendors",
    description:
      "PF & ESIC experts for BCCL contractors, coal transporters, coke oven units, and heavy industrial MSMEs in Dhanbad.",
    url: "https://epfdesk.com/dhanbad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhanbad EPF ESIC Compliance",
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
          Dhanbad EPF & ESIC Compliance | Coal & Mining Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for BCCL contractors, coal transporters, coke oven plants, and mining-linked MSMEs in Dhanbad."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/dhanbad-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-dhanbad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Dhanbad EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dhanbad-epf-esic-compliance",
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
              "Dhanbad",
              "Jharia",
              "Katras",
              "Sijua",
              "Govindpur",
              "Barwadda",
              "Nirsa",
              "Mugma",
            ],
            description:
              "EPF & ESIC consultancy for coal mining contractors, BCCL vendors, hard coke units, and PSU-linked industries in Dhanbad.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDhanbad} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDhanbad} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDhanbad} />
    </>
  );
};

export default page;