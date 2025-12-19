import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqNE, heroDataNE, sectionsNE } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Northeast India EPF & ESIC Compliance: Infrastructure Projects, Border Industries & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Northeast India — Tripura rubber and agro units, Nagaland trade hubs, Arunachal Pradesh hydropower projects, Manipur border industries and Mizoram MSMEs. Experts in SRO enforcement, NEIDS compliance, contractor audits, hazardous-process coverage and Principal Employer liability.",

  keywords: [
    "Northeast India PF consultant",
    "Northeast India ESIC consultant",
    "Tripura rubber PF ESIC",
    "Nagaland trade hub labour compliance",
    "Arunachal hydropower contractor PF ESIC",
    "Manipur border industry compliance",
    "NEIDS labour law compliance",
    "Principal Employer liability Northeast India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/northeast-india-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Northeast India EPF & ESIC Compliance | Infrastructure & Frontier States",
    description:
      "PF & ESIC specialists for Northeast India’s infrastructure projects, border industries and industrial hubs.",
    url: "https://epfdesk.com/northeast-india-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Northeast India PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Northeast India EPF & ESIC Compliance | Infrastructure & Border Industries | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Northeast India infrastructure projects, border industries and MSMEs.",
    images: ["https://epfdesk.com/images/logo.jpg"],
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
          Northeast India EPF & ESIC Compliance: Infrastructure Projects, Border
          Industries & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Northeast India — Tripura rubber units, Nagaland trade hubs, Arunachal hydropower contractors, Manipur border industries and regional MSMEs. SRO audits, NEIDS compliance and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Northeast India PF consultant, Northeast India ESIC consultant, Tripura rubber PF ESIC, Nagaland trade hub labour compliance, Arunachal hydropower contractor PF audits, Manipur border industry compliance, NEIDS labour law compliance, Principal Employer liability Northeast"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/northeast-india-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Northeast India EPF & ESIC Consultant | Infrastructure & Frontier States | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Northeast India infrastructure projects, border industries and industrial hubs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/northeast-india-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Northeast India EPF & ESIC Compliance | Infrastructure & Border Industries | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Northeast India infrastructure projects and border industries — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-northeast"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Northeast India EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/northeast-india-epf-esic-compliance",
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
              "Agartala",
              "Dimapur",
              "Itanagar",
              "Imphal",
              "Aizawl",
              "Bodhjungnagar",
              "Ganeshnagar",
              "Moreh",
              "Zokhawthar",
            ],
            description:
              "EPF & ESIC consultancy for Northeast India covering Tripura, Nagaland, Arunachal Pradesh, Manipur, and Mizoram industrial and infrastructure projects.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNE} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNE} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNE} />
    </>
  );
};

export default page;
