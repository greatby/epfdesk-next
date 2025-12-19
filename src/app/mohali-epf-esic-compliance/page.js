import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataMohali, sectionsMohali, faqMohali } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Mohali EPF & ESIC Compliance: IT Parks, QuarkCity & 50% Wage Rule | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Mohali — IT Park companies, QuarkCity startups, electronics and biotech units. Experts in RO Chandigarh enforcement, 50% Wage Rule implementation, Principal Employer liability and ESIC digital filings.",

  keywords: [
    "Mohali PF consultant",
    "Mohali ESIC consultant",
    "Mohali IT Park PF ESIC",
    "QuarkCity startup labour compliance",
    "Electronics unit PF ESIC Mohali",
    "Biotech company labour laws Mohali",
    "50 percent wage rule PF Mohali",
    "RO Chandigarh EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mohali-epf-esic-compliance",
  },

  openGraph: {
    title: "Mohali EPF & ESIC Compliance | IT & Electronics Hub",
    description:
      "PF & ESIC specialists for Mohali IT companies, QuarkCity startups, electronics manufacturers and service-sector employers.",
    url: "https://epfdesk.com/mohali-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mohali PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohali EPF & ESIC Compliance | IT & Electronics Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Mohali IT companies, electronics units and startups.",
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
          Mohali EPF & ESIC Compliance: IT Parks, QuarkCity & 50% Wage Rule |
          EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Mohali IT Park companies, QuarkCity startups, electronics and biotech units. RO Chandigarh audits, 50% Wage Rule implementation and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Mohali PF consultant, Mohali ESIC consultant, Mohali IT Park PF ESIC, QuarkCity startup labour compliance, electronics unit PF ESIC Mohali, biotech company labour laws Mohali, 50 percent wage rule PF, NWC 2025 wage restructuring Punjab"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mohali-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Mohali EPF & ESIC Consultant | IT & Electronics Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Mohali IT companies, QuarkCity startups and electronics manufacturers."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/mohali-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mohali EPF & ESIC Compliance | IT & Electronics Hub | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Mohali IT companies and electronics units — wage audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-mohali"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Mohali EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mohali-epf-esic-compliance",
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
              "Mohali",
              "SAS Nagar",
              "QuarkCity",
              "IT Park Mohali",
              "Sector 67",
              "Sector 82",
              "Knowledge City",
            ],
            description:
              "EPF & ESIC consultancy for Mohali’s IT, ITeS, electronics, and biotech sectors.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMohali} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMohali} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMohali} />
    </>
  );
};

export default page;
