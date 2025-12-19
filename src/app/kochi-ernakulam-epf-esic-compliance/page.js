import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqKochi, heroDataKochi, sectionsKochi } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Kochi EPF & ESIC Compliance: IT Parks, Cochin Port Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kochi (Ernakulam) — InfoPark & SmartCity IT companies, KINFRA industrial units, Cochin Port contractors and maritime service providers. Experts in RO Kochi enforcement, Principal Employer liability, New Wage Code restructuring and Kerala labour-law reconciliation.",

  keywords: [
    "Kochi PF consultant",
    "Ernakulam ESIC consultant",
    "InfoPark PF ESIC compliance",
    "SmartCity Kochi labour laws",
    "Cochin Port contractor PF ESIC",
    "KINFRA industrial unit compliance Kerala",
    "Principal Employer liability Kochi",
    "RO Kochi EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
  },

  openGraph: {
    title: "Kochi EPF & ESIC Compliance | IT, Maritime & Industrial Hub",
    description:
      "PF & ESIC specialists for Kochi IT parks, Cochin Port contractors, KINFRA industries and service-sector employers.",
    url: "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kochi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kochi EPF & ESIC Compliance | IT & Port Contractors | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Kochi IT parks, Cochin Port vendors and KINFRA industrial units.",
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
          Kochi EPF & ESIC Compliance: IT Parks, Cochin Port Contractors & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Kochi (Ernakulam) — InfoPark and SmartCity IT companies, Cochin Port contractors, KINFRA industrial units and service-sector employers. RO Kochi audits, Principal Employer liability and wage restructuring handled."
        />

        <meta
          name="keywords"
          content="Kochi PF consultant, Ernakulam ESIC consultant, InfoPark PF ESIC, SmartCity Kochi labour compliance, Cochin Port contractor PF audits, KINFRA unit ESIC Kerala, Principal Employer liability Kochi, NWC 2025 wage restructuring Kerala"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kochi-ernakulam-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kochi EPF & ESIC Consultant | IT & Maritime Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Kochi IT parks, Cochin Port contractors and KINFRA industrial units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kochi-ernakulam-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kochi EPF & ESIC Compliance | IT & Maritime Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Kochi IT companies, Cochin Port contractors and industrial units — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-kochi-epf-esic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Kochi EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
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
              "Ernakulam",
              "Kochi",
              "Kakkanad",
              "Kalamassery",
              "Eloor",
              "Edayar",
              "Willingdon Island",
              "Puthuvypeen",
            ],
            description:
              "EPF & ESIC compliance consultancy for Kochi’s IT parks, maritime contractors, KINFRA units, and SEZ industries under RO Kochi.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKochi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKochi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKochi} />
    </>
  );
};

export default page;
