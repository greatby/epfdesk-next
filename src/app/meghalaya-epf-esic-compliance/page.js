import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqMeghalaya, heroDataMeghalaya, sectionsMeghalaya } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Meghalaya EPF & ESIC Consultants: Byrnihat & Umiam Industrial Experts | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Meghalaya cement plants, Byrnihat steel mills, and Umiam MSMEs. Navigate SRO Shillong audits, EEC-2025, ADC norms, and hazardous process rules.",
  alternates: {
    canonical: "https://epfdesk.com/meghalaya-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Meghalaya EPF & ESIC Compliance | Industrial & Resource Corridors",
    description:
      "Statutory PF & ESIC compliance for Meghalaya’s cement, steel, FMCG, and MSME industrial hubs.",
    url: "https://epfdesk.com/meghalaya-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Meghalaya EPF ESIC Compliance",
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
          Meghalaya EPF & ESIC Compliance | Byrnihat & Umiam Industrial Consultants
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Meghalaya cement plants, Byrnihat steel units, and Umiam industrial estates."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/meghalaya-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-meghalaya"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Meghalaya EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/meghalaya-epf-esic-compliance",
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
              "Byrnihat",
              "Umiam",
              "Shillong",
              "Ri-Bhoi",
              "East Jaintia Hills",
              "East Khasi Hills",
            ],
            description:
              "EPF & ESIC consultancy for Meghalaya’s cement, steel, ferroalloy, FMCG, and MSME industrial corridors.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMeghalaya} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMeghalaya} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMeghalaya} />
    </>
  );
};

export default page;