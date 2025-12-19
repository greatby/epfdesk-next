import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqHaridwar, heroDataHaridwar, sectionsHaridwar } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Haridwar EPF & ESIC Compliance: SIDCUL Units, FMCG Plants & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Haridwar SIDCUL industrial units, Patanjali Food Park FMCG plants, BHEL vendors and manufacturing MSMEs. Experts in SRO Haridwar enforcement, Principal Employer liability, contractor PF audits and New Wage Code restructuring.",

  keywords: [
    "Haridwar PF consultant",
    "Haridwar ESIC consultant",
    "SIDCUL Haridwar PF ESIC compliance",
    "Patanjali Food Park labour compliance",
    "BHEL vendor PF ESIC Haridwar",
    "FMCG plant PF audits Haridwar",
    "Principal Employer liability Haridwar",
    "SRO Haridwar EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/haridwar-epf-esic-compliance",
  },

  openGraph: {
    title: "Haridwar EPF & ESIC Compliance | SIDCUL & FMCG Industrial Hub",
    description:
      "PF & ESIC specialists for Haridwar SIDCUL units, FMCG plants, PSU vendors and manufacturing clusters.",
    url: "https://epfdesk.com/haridwar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haridwar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haridwar EPF & ESIC Compliance | SIDCUL & FMCG Units | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Haridwar SIDCUL industries, FMCG plants and PSU vendors.",
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
          Haridwar EPF & ESIC Compliance: SIDCUL Units, FMCG Plants & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Haridwar SIDCUL industrial units, Patanjali Food Park FMCG plants, BHEL vendors and manufacturing MSMEs. SRO Haridwar audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Haridwar PF consultant, Haridwar ESIC consultant, SIDCUL Haridwar PF ESIC, Patanjali Food Park labour compliance, BHEL vendor PF audits Haridwar, FMCG plant ESIC Haridwar, Principal Employer liability Haridwar, NWC 2025 wage restructuring Uttarakhand"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/haridwar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Haridwar EPF & ESIC Consultant | SIDCUL & FMCG Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Haridwar’s SIDCUL industries, FMCG plants and PSU vendor ecosystem."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/haridwar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haridwar EPF & ESIC Compliance | SIDCUL & FMCG Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Haridwar SIDCUL units, FMCG plants and PSU vendors — PE liability and inspections handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-haridwar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Haridwar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haridwar-epf-esic-compliance",
            telephone: "+91-9945933333",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            areaServed: ["Haridwar", "SIDCUL Haridwar", "Ranipur", "Padartha"],
            description:
              "EPF & ESIC consultancy for Haridwar SIDCUL FMCG, Auto, PSU vendors, and large manufacturing units.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaridwar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaridwar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaridwar} />
    </>
  );
};

export default page;
