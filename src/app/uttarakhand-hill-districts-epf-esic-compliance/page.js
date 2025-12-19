import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqUKHills, heroDataUKHills, sectionsUKHills } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Dehradun & Hill Districts EPF & ESIC Compliance: Selaqui Pharma, Hill MSMEs & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Dehradun and Uttarakhand hill districts — Selaqui pharma manufacturers, Dehradun IT firms, wellness resorts, logistics gateways and hill MSMEs. Experts in RO Dehradun enforcement, EEC-2025 filings, contractor audits and Principal Employer liability.",

  keywords: [
    "Dehradun PF consultant",
    "Dehradun ESIC consultant",
    "Selaqui pharma PF ESIC compliance",
    "Uttarakhand hill MSME labour compliance",
    "Wellness resort PF ESIC Uttarakhand",
    "RO Dehradun EPFO jurisdiction",
    "Principal Employer liability Uttarakhand",
    "EEC 2025 PF ESIC hill districts",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Dehradun & Hill Districts EPF & ESIC Compliance | Pharma & Hill MSMEs",
    description:
      "PF & ESIC specialists for Selaqui pharma units, Dehradun IT firms, hill MSMEs, wellness resorts and logistics hubs across Uttarakhand.",
    url: "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Uttarakhand EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dehradun & Hill Districts EPF & ESIC Compliance | Pharma & MSMEs | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Dehradun Selaqui pharma units, hill MSMEs, wellness resorts and logistics contractors.",
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
          Dehradun & Hill Districts EPF & ESIC Compliance: Selaqui Pharma, Hill
          MSMEs & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Dehradun and Uttarakhand hill districts — Selaqui pharma manufacturers, Dehradun IT firms, wellness resorts, logistics gateways and hill MSMEs. RO Dehradun audits, EEC-2025 filings and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Dehradun PF consultant, Dehradun ESIC consultant, Selaqui pharma PF ESIC compliance, Uttarakhand hill MSME labour laws, wellness resort PF ESIC Uttarakhand, RO Dehradun EPFO jurisdiction, Principal Employer liability hill districts, EEC 2025 PF ESIC Uttarakhand"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Dehradun & Hill Districts EPF & ESIC Consultant | Pharma & Hill MSMEs | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Selaqui pharma units, hill MSMEs, wellness resorts and logistics contractors across Uttarakhand."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dehradun & Hill Districts EPF & ESIC Compliance | Pharma & MSMEs | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Selaqui pharma units, hill MSMEs and wellness resorts in Uttarakhand."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-uttarakhand-hills"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Dehradun & Uttarakhand Hill Districts EPF ESIC Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
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
              "Dehradun",
              "Selaqui",
              "Haldwani",
              "Kotdwar",
              "Almora",
              "Tehri",
              "Pauri Garhwal",
            ],
            description:
              "EPF & ESIC compliance consultancy for Dehradun pharma units, hill MSMEs, logistics hubs, wellness resorts, and educational institutions in Uttarakhand.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUKHills} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUKHills} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUKHills} />
    </>
  );
};

export default page;
