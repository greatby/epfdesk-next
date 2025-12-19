import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalandhar,
  sectionsJalandhar,
  faqJalandhar,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jalandhar EPF & ESIC Compliance: Sports Goods Exporters, Hand Tools & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jalandhar sports goods exporters, hand tool manufacturers, leather complex units and engineering MSMEs. Experts in RO Jalandhar enforcement, Principal Employer liability, export-unit wage audits and New Wage Code restructuring.",

  keywords: [
    "Jalandhar PF consultant",
    "Jalandhar ESIC consultant",
    "Sports goods PF ESIC Jalandhar",
    "Hand tool manufacturer labour compliance",
    "Leather complex PF ESIC Jalandhar",
    "Export unit PF audits Jalandhar",
    "Principal Employer liability Jalandhar",
    "RO Jalandhar EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jalandhar-epf-esic-compliance",
  },

  openGraph: {
    title: "Jalandhar EPF & ESIC Compliance | Sports Goods & Engineering Hub",
    description:
      "PF & ESIC specialists for Jalandhar sports goods exporters, hand tool units, leather manufacturers and engineering MSMEs.",
    url: "https://epfdesk.com/jalandhar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalandhar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jalandhar EPF & ESIC Compliance | Sports Goods & Hand Tools | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Jalandhar sports goods exporters and engineering manufacturers.",
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
          Jalandhar EPF & ESIC Compliance: Sports Goods Exporters, Hand Tools &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Jalandhar sports goods exporters, hand tool manufacturers, leather complex units and engineering MSMEs. RO Jalandhar audits, export-unit wage scrutiny and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Jalandhar PF consultant, Jalandhar ESIC consultant, sports goods PF ESIC Jalandhar, hand tool labour compliance, leather complex PF audits Jalandhar, export unit PF ESIC, Principal Employer liability Jalandhar, NWC 2025 wage restructuring Punjab"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jalandhar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Jalandhar EPF & ESIC Consultant | Sports Goods & Engineering Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Jalandhar’s sports goods exporters, hand tool units and engineering MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/jalandhar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jalandhar EPF & ESIC Compliance | Sports Goods & Hand Tools | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Jalandhar sports goods exporters, hand tool manufacturers and engineering MSMEs — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jalandhar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Jalandhar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jalandhar-epf-esic-compliance",
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
              "Jalandhar",
              "Leather Complex",
              "Focal Point",
              "Gadaipur",
              "Dada Colony",
              "Sports Goods Complex",
            ],
            description:
              "EPF & ESIC consultancy for Jalandhar’s sports goods, leather, foundry, and engineering industries.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalandhar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalandhar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalandhar} />
    </>
  );
};

export default page;
