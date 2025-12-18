import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqSirmaur, heroDataSirmaur, sectionsSirmaur } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Paonta Sahib & Kala Amb EPF ESIC Consultants: Sirmaur Industrial Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Paonta Sahib pharma units and Kala Amb steel & chemical plants. Navigate RO Shimla / SRO Baddi audits, EEC-2025, and hazardous process rules.",
  alternates: {
    canonical:
      "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Paonta Sahib & Kala Amb EPF & ESIC Compliance | Sirmaur Industrial Belt",
    description:
      "Statutory PF & ESIC compliance for Sirmaur’s pharma, steel, chemical, and MSME clusters.",
    url: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Paonta Sahib Kala Amb EPF ESIC Compliance",
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
          Paonta Sahib & Kala Amb EPF & ESIC Compliance | EPFDesk
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Paonta Sahib pharma units and Kala Amb steel & chemical plants."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-sirmaur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Paonta Sahib & Kala Amb EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
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
              "Paonta Sahib",
              "Kala Amb",
              "Nahan",
              "Moginand",
              "Sirmaur District",
            ],
            description:
              "EPF & ESIC compliance consultancy for Paonta Sahib pharma units and Kala Amb steel, chemical, and MSME industries under RO Shimla / SRO Baddi enforcement.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSirmaur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSirmaur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSirmaur} />
    </>
  );
};

export default page;