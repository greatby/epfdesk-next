import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataBokaro, sectionsBokaro, faqBokaro } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Bokaro EPF & ESIC Compliance: SAIL-BSL Vendors, Steel Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defense for Bokaro Steel Plant (SAIL-BSL) vendors, Balidih industrial area MSMEs and engineering contractors. Experts in RO Bokaro enforcement, Principal Employer liability, PSU vendor audits and New Wage Code restructuring.",

  keywords: [
    "Bokaro PF consultant",
    "Bokaro ESIC consultant",
    "SAIL Bokaro PF ESIC compliance",
    "Bokaro Steel Plant contractor PF",
    "Balidih industrial area PF ESIC",
    "Principal Employer liability Bokaro",
    "RO Bokaro EPFO jurisdiction",
    "Steel industry PF ESIC Bokaro",
  ],

  alternates: {
    canonical: "https://epfdesk.com/bokaro-epf-esic-compliance",
  },

  openGraph: {
    title: "Bokaro EPF & ESIC Compliance | SAIL Steel & Engineering Hub",
    description:
      "PF & ESIC specialists for SAIL-BSL vendors, Balidih engineering units and PSU-linked industries in Bokaro.",
    url: "https://epfdesk.com/bokaro-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bokaro PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bokaro EPF & ESIC Compliance | SAIL Steel Contractors | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Bokaro Steel Plant vendors and engineering contractors.",
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
          Bokaro EPF & ESIC Compliance: SAIL-BSL Vendors, Steel Contractors & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Bokaro Steel Plant (SAIL-BSL) vendors, Balidih fabrication units, power plant contractors and engineering MSMEs. RO Bokaro audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Bokaro PF consultant, Bokaro ESIC consultant, SAIL Bokaro PF ESIC, Bokaro Steel Plant contractor compliance, Balidih industrial area labour laws, Principal Employer liability Bokaro, steel industry PF audits Bokaro, NWC 2025 wage restructuring Bokaro"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bokaro-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bokaro EPF & ESIC Consultant | SAIL Steel & Engineering Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Bokaro’s steel and engineering clusters. Specialists in PSU vendor audits and PE liability."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/bokaro-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bokaro EPF & ESIC Compliance | SAIL Steel Contractors | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Bokaro Steel Plant vendors, Balidih engineering units and PSU contractors."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-bokaro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Bokaro EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bokaro-epf-esic-compliance",
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
              "Bokaro Steel City",
              "Balidih",
              "Chandrapura",
              "Bokaro Thermal",
              "Phusro",
            ],
            description:
              "EPF & ESIC consultancy for SAIL-BSL vendors, Balidih industrial units, and PSU-linked power and engineering clusters in Bokaro.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBokaro} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBokaro} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBokaro} />
    </>
  );
};

export default page;
