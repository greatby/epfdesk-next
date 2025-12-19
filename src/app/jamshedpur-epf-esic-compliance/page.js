import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJamshedpur,
  sectionsJamshedpur,
  faqJamshedpur,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jamshedpur EPF & ESIC Compliance: TATA Steel Vendors, Adityapur Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jamshedpur — TATA Steel contractors, Adityapur auto-ancillaries, forging units and Jharkhand MSMEs. Experts in RO Jamshedpur enforcement, Principal Employer liability, PSU vendor audits and New Wage Code restructuring.",

  keywords: [
    "Jamshedpur PF consultant",
    "Jamshedpur ESIC consultant",
    "TATA Steel contractor PF ESIC",
    "Adityapur auto ancillary labour compliance",
    "Forging unit PF ESIC Jamshedpur",
    "Principal Employer liability Jamshedpur",
    "RO Jamshedpur EPFO jurisdiction",
    "NWC 2025 wage restructuring Jharkhand",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Jamshedpur EPF & ESIC Compliance | Steel & Auto Industrial Hub",
    description:
      "PF & ESIC specialists for TATA Steel contractors, Adityapur auto-ancillaries and manufacturing MSMEs in Jamshedpur.",
    url: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jamshedpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jamshedpur EPF & ESIC Compliance | TATA Steel & Adityapur | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Jamshedpur TATA Steel vendors and Adityapur auto-ancillaries.",
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
          Jamshedpur EPF & ESIC Compliance: TATA Steel Vendors, Adityapur Units
          & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Jamshedpur TATA Steel contractors, Adityapur auto-ancillaries, forging units and Jharkhand MSMEs. RO Jamshedpur audits, PSU vendor inspections and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Jamshedpur PF consultant, Jamshedpur ESIC consultant, TATA Steel contractor PF ESIC, Adityapur auto ancillary labour compliance, forging unit PF audits Jamshedpur, Principal Employer liability Jamshedpur, NWC 2025 wage restructuring Jharkhand"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jamshedpur-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Jamshedpur EPF & ESIC Consultant | TATA Steel & Auto Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Jamshedpur’s TATA Steel contractors and Adityapur auto-ancillary units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/jamshedpur-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jamshedpur EPF & ESIC Compliance | TATA Steel & Adityapur | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Jamshedpur TATA Steel vendors and Adityapur auto-ancillaries — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jamshedpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Jamshedpur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
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
              "Jamshedpur",
              "Adityapur",
              "Gamharia",
              "Kandra",
              "East Singhbhum",
              "Seraikela-Kharsawan",
            ],
            description:
              "EPF & ESIC consultancy for TATA Steel vendors, Adityapur industrial units, and Jharkhand auto & steel manufacturing clusters.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJamshedpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJamshedpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJamshedpur} />
    </>
  );
};

export default page;
