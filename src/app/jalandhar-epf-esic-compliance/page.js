import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalandhar,
  sectionsJalandhar,
  faqJalandhar,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jalandhar EPF & ESIC Consultants: Sports Goods & Hand Tool Industry Experts | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Jalandhar sports goods manufacturers, leather complex units, and hand tool exporters. Navigate RO Jalandhar audits & EEC-2025.",
  alternates: {
    canonical:
      "https://epfdesk.com/jalandhar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jalandhar EPF & ESIC Compliance | Sports & Engineering Hub",
    description:
      "PF & ESIC experts for Jalandhar sports goods exporters, leather tanneries, foundries, and engineering MSMEs.",
    url: "https://epfdesk.com/jalandhar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalandhar EPF ESIC Compliance",
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
          Jalandhar EPF & ESIC Compliance | Sports Goods & Engineering Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Jalandhar sports goods exporters, leather units, hand-tool foundries, and engineering MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/jalandhar-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jalandhar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Jalandhar EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jalandhar-epf-esic-compliance",
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
              "Jalandhar",
              "Leather Complex",
              "Focal Point",
              "Gadaipur",
              "Dada Colony",
              "Sports Goods Complex",
            ],
            description:
              "EPF & ESIC consultancy for Jalandhar’s sports goods, leather, foundry, and engineering industries.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalandhar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalandhar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalandhar} />
    </>
  );
};

export default page;