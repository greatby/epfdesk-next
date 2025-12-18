import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqHaridwar, heroDataHaridwar, sectionsHaridwar } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Haridwar EPF & ESIC Consultants: SIDCUL Industrial & FMCG Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Haridwar SIDCUL industries, Patanjali Food Park units, and BHEL vendors. Navigate SRO Haridwar audits, EEC-2025, and PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/haridwar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Haridwar EPF & ESIC Compliance | SIDCUL Industrial Hub",
    description:
      "Statutory PF & ESIC compliance for Haridwar SIDCUL FMCG, Auto, PSU, and Food Processing industries.",
    url: "https://epfdesk.com/haridwar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haridwar EPF ESIC Compliance",
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
          Haridwar EPF & ESIC Compliance | SIDCUL Industrial Consultants
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Haridwar SIDCUL, Patanjali Food Park, and BHEL vendor ecosystem."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/haridwar-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-haridwar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Haridwar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haridwar-epf-esic-compliance",
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
              "Haridwar",
              "SIDCUL Haridwar",
              "Ranipur",
              "Padartha",
            ],
            description:
              "EPF & ESIC consultancy for Haridwar SIDCUL FMCG, Auto, PSU vendors, and large manufacturing units.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaridwar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaridwar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaridwar} />
    </>
  );
};

export default page;