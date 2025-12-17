import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKharagpur,
  sectionsKharagpur,
  faqKharagpur,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Kharagpur EPF & ESIC Compliance: Industrial Hub Audits & Expert Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Kharagpur metal units, cement plants, and Vidyasagar Industrial Park vendors. Navigate RO Kolkata audits, EEC-2025, and PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/kharagpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kharagpur EPF & ESIC Compliance | Paschim Medinipur Industrial Belt",
    description:
      "PF & ESIC experts for Kharagpur’s manufacturing, cement, metal, and engineering clusters.",
    url: "https://epfdesk.com/kharagpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kharagpur EPF ESIC Compliance",
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
          Kharagpur EPF & ESIC Compliance | Industrial & Manufacturing Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Kharagpur manufacturing units, cement plants, and MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/kharagpur-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-kharagpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Kharagpur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kharagpur-epf-esic-compliance",
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
              "Kharagpur",
              "Paschim Medinipur",
              "Nimpura",
              "Gokulpur",
              "Salboni",
            ],
            description:
              "EPF & ESIC consultancy for Kharagpur’s metal, cement, engineering, and industrial corridor.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKharagpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKharagpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKharagpur} />
    </>
  );
};

export default page;
