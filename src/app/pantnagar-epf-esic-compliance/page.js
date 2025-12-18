import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqPantnagar, heroDataPantnagar, sectionsPantnagar } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Pantnagar EPF & ESIC Consultants: Auto-Hub & SIDCUL Compliance | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Pantnagar auto units, Rudrapur MSMEs, and Sitarganj SIDCUL clusters. Navigate RO Haldwani audits, EEC-2025, and PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/pantnagar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Pantnagar EPF & ESIC Compliance | Automotive & Industrial Hub",
    description:
      "Statutory PF & ESIC compliance for Pantnagar auto OEM vendors, Rudrapur engineering MSMEs, and Sitarganj industrial parks.",
    url: "https://epfdesk.com/pantnagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pantnagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
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
          Pantnagar EPF & ESIC Compliance | Auto & SIDCUL Consultants
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Pantnagar auto-component vendors, Rudrapur MSMEs, and Sitarganj SIDCUL industries."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/pantnagar-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-pantnagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Pantnagar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/pantnagar-epf-esic-compliance",
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
              "Pantnagar",
              "Rudrapur",
              "Sitarganj",
              "Gadarpur",
              "Kashipur",
            ],
            description:
              "EPF & ESIC consultancy for Pantnagar auto OEM vendors, Rudrapur engineering MSMEs, Sitarganj SIDCUL clusters, and Kumaon logistics hubs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPantnagar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPantnagar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPantnagar} />
    </>
  );
};

export default page;