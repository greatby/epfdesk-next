import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPaschimBardhaman,
  sectionsPaschimBardhaman,
  faqPaschimBardhaman,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Durgapur & Asansol EPF & ESIC Compliance: Steel & Coal Sector Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Durgapur Steel Plant vendors, ECL coal contractors, and Asansol MSMEs. Navigate RO Durgapur audits and EEC-2025.",
  alternates: {
    canonical:
      "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Asansol–Durgapur EPF & ESIC Compliance | Paschim Bardhaman Industrial Belt",
    description:
      "PF & ESIC experts for steel, coal, sponge iron, and hazardous process units across Paschim Bardhaman.",
    url: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Asansol Durgapur EPF ESIC Compliance",
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
          Durgapur & Asansol EPF & ESIC Compliance | Steel & Coal Sector Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Paschim Bardhaman steel plants, coal contractors, and industrial MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/durgapur-asansol-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-paschim-bardhaman"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Asansol–Durgapur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
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
              "Durgapur",
              "Asansol",
              "Raniganj",
              "Jamuria",
              "Paschim Bardhaman",
            ],
            description:
              "EPF & ESIC consultancy for Paschim Bardhaman’s steel, coal, sponge iron, and hazardous process industries.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPaschimBardhaman} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPaschimBardhaman} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPaschimBardhaman} />
    </>
  );
};

export default page;