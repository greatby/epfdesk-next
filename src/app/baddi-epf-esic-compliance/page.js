import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqBaddi, heroDataBaddi, sectionsBaddi } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Baddi EPF & ESIC Compliance: Pharma PF Audits, FMCG Wage Code Risk & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defense for Baddi-Barotiwala-Nalagarh pharma MNCs, FMCG plants and MSMEs. Experts in SRO Baddi enforcement, New Wage Code restructuring and Principal Employer liability.",

  keywords: [
    "Baddi PF consultant",
    "Baddi ESIC registration",
    "Pharma PF compliance Baddi",
    "FMCG ESIC compliance Baddi",
    "SRO Baddi EPFO jurisdiction",
    "BBN industrial area PF ESIC",
    "Principal Employer liability Baddi",
  ],

  alternates: {
    canonical: "https://epfdesk.com/baddi-epf-esic-compliance",
  },

  openGraph: {
    title: "Baddi EPF & ESIC Compliance | Pharma, FMCG & Manufacturing Hub",
    description:
      "PF & ESIC specialists for Baddi-Barotiwala-Nalagarh pharma, FMCG and manufacturing units. SRO Baddi audits handled.",
    url: "https://epfdesk.com/baddi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Baddi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Baddi EPF & ESIC Compliance | Pharma & FMCG | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Baddi pharma MNCs, FMCG plants and MSMEs.",
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
          Baddi EPF & ESIC Compliance: Pharma PF Audits & FMCG PE Liability |
          EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Baddi pharma MNCs, FMCG plants and MSMEs. New Wage Code impact, Principal Employer liability and SRO Baddi audits handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/baddi-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Baddi EPF & ESIC Compliance | Pharma & FMCG Manufacturing"
        />
        <meta
          property="og:description"
          content="PF & ESIC specialists for Baddi-Barotiwala-Nalagarh pharma and FMCG units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-baddi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Baddi (BBN) EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/baddi-epf-esic-compliance",
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
              "Baddi",
              "Barotiwala",
              "Nalagarh",
              "BBN Industrial Area",
            ],
            description:
              "EPF & ESIC compliance consultancy for Baddi-Barotiwala-Nalagarh pharma, FMCG, auto-ancillary, and MSME units under SRO Baddi.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBaddi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBaddi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBaddi} />
    </>
  );
};

export default page;
