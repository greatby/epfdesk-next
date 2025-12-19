import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataHowrah, sectionsHowrah, faqHowrah } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Howrah EPF & ESIC Compliance: Jute Mills, Engineering Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Howrah’s jute mills, engineering units, foundries and industrial MSMEs. Experts in RO Howrah enforcement, Section 14B penalty mitigation, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Howrah PF consultant",
    "Howrah ESIC consultant",
    "Jute mill PF ESIC Howrah",
    "Engineering unit labour compliance Howrah",
    "Foundry PF ESIC Howrah",
    "Section 14B PF waiver Howrah",
    "Principal Employer liability Howrah",
    "RO Howrah EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/howrah-epf-esic-compliance",
  },

  openGraph: {
    title: "Howrah EPF & ESIC Compliance | Jute & Engineering Industrial Hub",
    description:
      "PF & ESIC specialists for Howrah jute mills, engineering units, foundries and manufacturing clusters.",
    url: "https://epfdesk.com/howrah-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Howrah PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Howrah EPF & ESIC Compliance | Jute & Engineering | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Howrah jute mills, engineering units and foundries.",
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
          Howrah EPF & ESIC Compliance: Jute Mills, Engineering Units & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Howrah jute mills, engineering units, foundries and industrial MSMEs. RO Howrah audits, Section 14B penalty mitigation and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Howrah PF consultant, Howrah ESIC consultant, jute mill PF ESIC Howrah, engineering unit labour compliance, foundry PF audits Howrah, Section 14B PF waiver Howrah, Principal Employer liability Howrah, NWC 2025 wage restructuring West Bengal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/howrah-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Howrah EPF & ESIC Consultant | Jute & Engineering Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Howrah’s jute, engineering and foundry clusters."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/howrah-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Howrah EPF & ESIC Compliance | Jute & Engineering | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Howrah jute mills, engineering units and foundries — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-howrah"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Howrah EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/howrah-epf-esic-compliance",
            telephone: "+91-9945933333",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            areaServed: ["Howrah", "Liluah", "Belur", "Salkia", "Ankurhati"],
            description:
              "EPF & ESIC consultancy for Howrah’s jute mills, foundries, engineering firms, and logistics hubs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHowrah} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHowrah} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHowrah} />
    </>
  );
};

export default page;
