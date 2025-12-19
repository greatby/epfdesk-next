import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqSikkim, heroDataSikkim, sectionsSikkim } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Sikkim EPF & ESIC Compliance: Pharmaceutical Units, Industrial Estates & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Sikkim — pharmaceutical manufacturing units, Rangpo & Mamring industrial estates, contract manufacturing MSMEs and logistics-linked employers. Experts in SRO Gangtok enforcement, New Wage Code 50% rule, contractor audits, COI labour norms and Principal Employer liability.",

  keywords: [
    "Sikkim PF consultant",
    "Sikkim ESIC consultant",
    "Sikkim pharmaceutical PF ESIC",
    "Rangpo industrial estate labour compliance",
    "Mamring industrial area PF audits",
    "Pharma contract manufacturing PF ESIC Sikkim",
    "Principal Employer liability Sikkim",
    "SRO Gangtok EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/sikkim-epf-esic-compliance",
  },

  openGraph: {
    title: "Sikkim EPF & ESIC Compliance | Pharmaceutical & Industrial Hub",
    description:
      "PF & ESIC specialists for Sikkim pharmaceutical manufacturers, industrial estates and MSMEs.",
    url: "https://epfdesk.com/sikkim-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sikkim PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sikkim EPF & ESIC Compliance | Pharmaceutical Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Sikkim pharmaceutical units and industrial estates.",
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
          Sikkim EPF & ESIC Compliance: Pharmaceutical Units, Industrial Estates
          & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Sikkim pharmaceutical units, Rangpo and Mamring industrial estates, and MSMEs. SRO Gangtok audits, New Wage Code compliance, contractor PF liability and Principal Employer exposure handled."
        />

        <meta
          name="keywords"
          content="Sikkim PF consultant, Sikkim ESIC consultant, pharmaceutical PF ESIC Sikkim, Rangpo industrial estate labour compliance, Mamring PF audits, pharma contract manufacturing compliance, Principal Employer liability Sikkim, NWC 2025 wage restructuring Sikkim"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sikkim-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Sikkim EPF & ESIC Consultant | Pharmaceutical & Industrial Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Sikkim pharmaceutical manufacturers, industrial estates and MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/sikkim-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sikkim EPF & ESIC Compliance | Pharmaceutical Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Sikkim pharmaceutical units and industrial estates — audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-sikkim"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Sikkim EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sikkim-epf-esic-compliance",
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
              "Gangtok",
              "Rangpo",
              "Mamring",
              "Majitar",
              "Melli",
              "Jorethang",
              "East Sikkim",
              "South Sikkim",
            ],
            description:
              "EPF & ESIC consultancy for Sikkim’s pharmaceutical manufacturing, industrial estates, and MSME ecosystem.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSikkim} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSikkim} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSikkim} />
    </>
  );
};

export default page;
