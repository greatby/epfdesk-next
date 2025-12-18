import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqNE, heroDataNE, sectionsNE } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Northeast India EPF & ESIC Consultants: Tripura, Nagaland & Manipur Experts | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Tripura rubber units, Nagaland trade hubs, Arunachal hydro projects, and Manipur border industries. Navigate SRO audits, EEC-2025, and NEIDS compliance.",
  alternates: {
    canonical: "https://epfdesk.com/northeast-india-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Northeast India EPF & ESIC Compliance | Frontier States & Infrastructure Projects",
    description:
      "Statutory PF & ESIC compliance for Tripura, Nagaland, Arunachal Pradesh, Manipur, and Mizoram industrial and infrastructure hubs.",
    url: "https://epfdesk.com/northeast-india-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Northeast India EPF ESIC Compliance",
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
          Northeast India EPF & ESIC Compliance | Tripura, Nagaland & Arunachal Consultants
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Tripura rubber, Nagaland trade hubs, Arunachal hydropower projects, and Northeast border industries."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/northeast-india-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-northeast"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Northeast India EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/northeast-india-epf-esic-compliance",
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
              "Agartala",
              "Dimapur",
              "Itanagar",
              "Imphal",
              "Aizawl",
              "Bodhjungnagar",
              "Ganeshnagar",
              "Moreh",
              "Zokhawthar",
            ],
            description:
              "EPF & ESIC consultancy for Northeast India covering Tripura, Nagaland, Arunachal Pradesh, Manipur, and Mizoram industrial and infrastructure projects.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNE} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNE} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNE} />
    </>
  );
};

export default page;