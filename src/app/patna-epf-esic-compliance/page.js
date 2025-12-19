import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataPatna, sectionsPatna, faqPatna } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Patna EPF & ESIC Compliance: IT Firms, Logistics Parks & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Patna — IT & service companies, Bihta logistics parks, Fatuha industrial units, hospitals and retail chains. Experts in RO Patna enforcement, New Wage Code compliance, contractor audits and Principal Employer liability.",

  keywords: [
    "Patna PF consultant",
    "Patna ESIC consultant",
    "Patna IT company PF ESIC",
    "Bihta logistics park labour compliance",
    "Fatuha industrial area PF audits",
    "Hospital PF ESIC Patna",
    "Principal Employer liability Patna",
    "RO Patna EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/patna-epf-esic-compliance",
  },

  openGraph: {
    title: "Patna EPF & ESIC Compliance | IT, Logistics & Service Hub",
    description:
      "PF & ESIC specialists for Patna IT firms, logistics parks, hospitals, retail chains and service-sector employers.",
    url: "https://epfdesk.com/patna-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Patna PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Patna EPF & ESIC Compliance | IT & Logistics Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Patna IT firms, logistics parks, hospitals and service-sector employers.",
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
          Patna EPF & ESIC Compliance: IT Firms, Logistics Parks & PE Liability
          | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Patna IT firms, Bihta logistics parks, Fatuha industrial units, hospitals and retail chains. RO Patna audits, New Wage Code compliance and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Patna PF consultant, Patna ESIC consultant, IT company PF ESIC Patna, Bihta logistics labour compliance, Fatuha industrial area PF audits, hospital PF ESIC Patna, Principal Employer liability Bihar, NWC 2025 wage restructuring Patna"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/patna-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Patna EPF & ESIC Consultant | IT, Logistics & Services | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Patna IT companies, logistics parks, hospitals and service-sector employers."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/patna-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Patna EPF & ESIC Compliance | IT & Logistics Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Patna IT firms, logistics parks and hospitals — audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-patna"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Patna EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/patna-epf-esic-compliance",
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
              "Patna",
              "Bihta",
              "Fatuha",
              "Kankarbagh",
              "Boring Road",
              "Rajendra Nagar",
            ],
            description:
              "EPF & ESIC consultancy for Patna IT firms, Bihta logistics parks, Fatuha industrial units, and Bihar service-sector employers.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPatna} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPatna} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPatna} />
    </>
  );
};

export default page;
