import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJharkhandBalance,
  sectionsJharkhandBalance,
  faqJharkhandBalance,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jharkhand EPF & ESIC Compliance: Ramgarh, Hazaribagh & Deoghar Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Ramgarh steel units, Hazaribagh mining vendors, and Deoghar MSMEs. Navigate RO Dhanbad/Ranchi audits, EEC-2025, and mining PE liability.",
  alternates: {
    canonical:
      "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jharkhand EPF & ESIC Compliance | Mining & Santal Pargana Hubs",
    description:
      "PF & ESIC experts for Ramgarh sponge iron units, Hazaribagh mining vendors, Deoghar MSMEs, and Jharkhand logistics corridors.",
    url: "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand EPF ESIC Compliance",
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
          Jharkhand EPF & ESIC Compliance | Ramgarh, Hazaribagh & Deoghar
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Jharkhand mining belts, sponge iron units, logistics corridors, and Santal Pargana MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jharkhand-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Jharkhand EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
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
              "Ramgarh",
              "Hazaribagh",
              "Giridih",
              "Koderma",
              "Deoghar",
              "Dumka",
              "Sahibganj",
              "Palamu",
              "Garhwa",
              "Latehar",
            ],
            description:
              "EPF & ESIC consultancy for Jharkhand mining corridors, sponge iron units, logistics hubs, and Santal Pargana MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJharkhandBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJharkhandBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJharkhandBalance} />
    </>
  );
};

export default page;