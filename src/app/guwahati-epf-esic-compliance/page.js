import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataGuwahati, sectionsGuwahati, faqGuwahati } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Guwahati EPF & ESIC Compliance: IT Parks, Logistics Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Guwahati IT parks, North Guwahati industrial units, logistics contractors, retail chains and Northeast MSMEs. Experts in RO Guwahati enforcement, NEIDS-linked employment audits, Principal Employer liability and Labour Code compliance.",

  keywords: [
    "Guwahati PF consultant",
    "Guwahati ESIC consultant",
    "IT park PF ESIC Guwahati",
    "Logistics contractor PF ESIC Assam",
    "North Guwahati industrial area labour compliance",
    "Retail chain ESIC compliance Guwahati",
    "Principal Employer liability Guwahati",
    "RO Guwahati EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/guwahati-epf-esic-compliance",
  },

  openGraph: {
    title: "Guwahati EPF & ESIC Compliance | Assam Industrial & Commercial Hub",
    description:
      "PF & ESIC specialists for Guwahati IT parks, logistics contractors, retail chains and Northeast industrial MSMEs.",
    url: "https://epfdesk.com/guwahati-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Guwahati PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Guwahati EPF & ESIC Compliance | IT, Logistics & Retail | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Guwahati IT parks, logistics operators, retail chains and Northeast businesses.",
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
          Guwahati EPF & ESIC Compliance: IT Parks, Logistics Contractors & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Guwahati IT parks, North Guwahati industrial units, logistics contractors, retail chains and Northeast MSMEs. RO Guwahati audits, NEIDS-linked employment reviews and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Guwahati PF consultant, Guwahati ESIC consultant, IT park PF ESIC Guwahati, logistics contractor labour compliance Assam, retail chain ESIC Guwahati, North Guwahati industrial area PF audits, Principal Employer liability Guwahati, NWC 2025 wage restructuring Assam"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/guwahati-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Guwahati EPF & ESIC Consultant | IT, Logistics & Retail Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Guwahati’s IT parks, logistics operators, retail chains and industrial units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/guwahati-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guwahati EPF & ESIC Compliance | Assam Industrial Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Guwahati IT parks, logistics contractors, retail chains and Northeast MSMEs — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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
            name: "Guwahati EPF & ESIC Compliance Consultants | EPFDesk",
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
