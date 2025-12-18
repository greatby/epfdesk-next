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
    "Baddi EPF & ESIC Consultants: BBN Pharma & FMCG Compliance Experts | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Baddi pharma MNCs, Nalagarh auto units, and Barotiwala MSMEs. Navigate SRO Baddi audits, New Wage Code, and PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/baddi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Baddi EPF & ESIC Compliance | BBN Pharma & FMCG Industrial Hub",
    description:
      "Statutory PF & ESIC compliance for Baddi-Barotiwala-Nalagarh pharma, FMCG, auto, and MSME units.",
    url: "https://epfdesk.com/baddi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Baddi EPF ESIC Compliance",
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
        <title>Baddi EPF & ESIC Compliance | EPFDesk</title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Baddi pharma units, Nalagarh manufacturing, and Barotiwala MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/baddi-epf-esic-compliance"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-baddi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Baddi (BBN) EPF & ESIC Compliance Consultants | EPFDesk",
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
