import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMohali,
  sectionsMohali,
  faqMohali,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Mohali EPF & ESIC Consultants: IT Sector & Electronics Hub Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Mohali IT Park, QuarkCity, and electronics firms. Navigate RO Chandigarh audits, New Wage Code 50% rule, and ESIC digital filings.",
  alternates: {
    canonical:
      "https://epfdesk.com/mohali-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Mohali EPF & ESIC Compliance | IT & Tech Powerhouse",
    description:
      "PF & ESIC experts for Mohali IT companies, QuarkCity startups, electronics manufacturers, and biotech firms.",
    url: "https://epfdesk.com/mohali-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mohali EPF ESIC Compliance",
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
          Mohali EPF & ESIC Compliance | IT & Electronics Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Mohali IT companies, electronics manufacturers, startups, and service-sector employers."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/mohali-epf-esic-compliance"
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
            name:
              "Mohali EPF & ESIC Compliance Consultants | EPFDesk",
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