import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqHP, heroDataHP, sectionsHP } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Himachal EPF & ESIC Compliance: Una FMCG Units, Kangra MSMEs & Tourism Labour PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Himachal Pradesh’s balance districts — Una Tahliwal FMCG & agro units, Kangra border MSMEs, and Shimla–Kullu tourism & hospitality sector. Experts in SRO Dharamshala enforcement, seasonal labour compliance, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Himachal PF consultant",
    "Himachal ESIC consultant",
    "Una Tahliwal PF ESIC compliance",
    "Kangra MSME labour compliance",
    "Shimla hotel PF ESIC",
    "Kullu tourism labour laws",
    "Seasonal worker PF ESIC Himachal",
    "Principal Employer liability Himachal",
    "SRO Dharamshala EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
  },

  openGraph: {
    title: "Himachal EPF & ESIC Compliance | FMCG, MSMEs & Tourism Hubs",
    description:
      "PF & ESIC specialists for Una FMCG units, Kangra MSMEs and Himachal’s hill tourism & hospitality sector.",
    url: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Himachal PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Himachal EPF & ESIC Compliance | FMCG & Tourism Labour | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Himachal FMCG units, MSMEs and tourism-sector employers.",
    images: ["https://epfdesk.com/images/logo.jpg"],
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
          Himachal EPF & ESIC Compliance: Una FMCG Units, Kangra MSMEs & Tourism
          Labour PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Himachal Pradesh’s balance districts — Una Tahliwal FMCG units, Kangra MSMEs, and Shimla–Kullu hotels and tourism operators. SRO Dharamshala audits, seasonal labour PF/ESIC coverage and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Himachal PF consultant, Himachal ESIC consultant, Una Tahliwal PF ESIC, Kangra MSME labour compliance, Shimla hotel PF ESIC, Kullu tourism labour laws, seasonal worker PF ESIC Himachal, Principal Employer liability Himachal, NWC 2025 wage restructuring Himachal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/himachal-final-balance-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Himachal EPF & ESIC Consultant | FMCG, MSMEs & Tourism Hubs | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Himachal’s FMCG clusters, MSMEs and tourism-driven hospitality sector."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/himachal-final-balance-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Himachal EPF & ESIC Compliance | FMCG & Tourism Labour | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Himachal FMCG units, MSMEs and tourism employers — PE liability and inspections handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-himachal-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Himachal EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
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
              "Una",
              "Tahliwal",
              "Mehatpur",
              "Kangra",
              "Damtal",
              "Sansarpur Terrace",
              "Shimla",
              "Kullu",
              "Manali",
              "Mandi",
              "Bilaspur",
            ],
            description:
              "EPF & ESIC compliance consultancy for Himachal’s FMCG, MSME, and tourism districts under SRO Dharamshala and RO Shimla enforcement.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHP} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHP} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHP} />
    </>
  );
};

export default page;
