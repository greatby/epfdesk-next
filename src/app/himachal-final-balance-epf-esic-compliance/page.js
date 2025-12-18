import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqHP, heroDataHP, sectionsHP } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Himachal EPF & ESIC Consultants: Una, Kangra & Tourism Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Una Tahliwal FMCG units, Kangra MSMEs, and Shimla/Kullu hotels. Navigate SRO Dharamshala audits, EEC-2025, and tourism labour compliance.",
  alternates: {
    canonical:
      "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Himachal EPF & ESIC Compliance | Una, Kangra & Tourism Districts",
    description:
      "Statutory PF & ESIC compliance for Himachal’s agro-FMCG, border MSMEs, and hill tourism hubs.",
    url: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Himachal EPF ESIC Compliance",
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
          Himachal EPF & ESIC Compliance | Una, Kangra & Tourism Hubs
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Una Tahliwal FMCG units, Kangra MSMEs, and Shimla/Kullu hospitality sector."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/himachal-final-balance-epf-esic-compliance"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-himachal-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Himachal EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
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
              "Una",
              "Tahliwal",
              "Mehatpur",
              "Kangra",
              "Damtal",
              "Sansarpur Terrace",
              "Shimla",
              "Kullu",
              "Manali",
              "Mandi",
              "Bilaspur",
            ],
            description:
              "EPF & ESIC compliance consultancy for Himachal’s FMCG, MSME, and tourism districts under SRO Dharamshala and RO Shimla enforcement.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHP} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHP} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHP} />
    </>
  );
};

export default page;