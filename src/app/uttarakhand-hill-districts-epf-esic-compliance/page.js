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
    "Dehradun & Hill Districts EPF ESIC Consultants: Pharma & MSME Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Selaqui Pharma Hub, Dehradun IT firms, and Uttarakhand Hill MSMEs. Navigate RO Dehradun audits, EEC-2025, and hill subsidies.",
  alternates: {
    canonical:
      "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Uttarakhand Hill Districts EPF & ESIC Compliance | Dehradun Pharma & MSMEs",
    description:
      "Statutory PF & ESIC compliance for Dehradun Selaqui pharma units, hill MSMEs, wellness resorts, and logistics gateways.",
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
};

/* ============================
   PAGE
============================ */
const page = () => {
  return (
    <>
      <Head>
        <title>
          Dehradun & Hill Districts EPF ESIC Compliance | EPFDesk
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Dehradun Selaqui pharma hub, hill MSMEs, wellness resorts, and Uttarakhand logistics gateways."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance"
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
            name:
              "Dehradun & Uttarakhand Hill Districts EPF ESIC Consultants | EPFDesk",
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