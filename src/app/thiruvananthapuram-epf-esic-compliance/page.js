import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataTrivandrum,
  sectionsTrivandrum,
  faqTrivandrum,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Thiruvananthapuram EPF & ESIC Consultants: IT & Space-Tech Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Technopark, KINFRA Video Park, aerospace & electronics vendors in Thiruvananthapuram. Navigate RO Trivandrum audits, New Wage Code, and ESIC mandates.",
  alternates: {
    canonical:
      "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech Hub",
    description:
      "Statutory PF & ESIC compliance for Technopark IT firms, KINFRA aerospace vendors, and Trivandrum electronics manufacturers.",
    url: "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thiruvananthapuram EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

/* ============================
   PAGE
============================ */
const page = () => {
  return (
    <>
      <Head>
        <title>
          Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech Hub
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Technopark IT companies, KINFRA aerospace vendors, and electronics units in Thiruvananthapuram."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/thiruvananthapuram-epf-esic-compliance"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-trivandrum-epf-esic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Thiruvananthapuram EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
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
              "Thiruvananthapuram",
              "Trivandrum",
              "Kazhakkoottam",
              "Pallippuram",
              "Technopark",
              "KINFRA Aerospace Park",
              "KINFRA Video Park",
            ],
            description:
              "EPF & ESIC compliance consultancy for Technopark IT firms, aerospace and defense vendors, electronics units, and creative industries under RO Thiruvananthapuram.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTrivandrum} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTrivandrum} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqTrivandrum} />
    </>
  );
};

export default page;