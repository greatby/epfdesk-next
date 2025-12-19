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
    "Durgapur & Asansol EPF & ESIC Compliance: Steel Plants, Coal Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for the Durgapur–Asansol industrial belt — Durgapur Steel Plant (DSP) vendors, ECL coal contractors, sponge iron units and hazardous process industries. Experts in RO Durgapur enforcement, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Durgapur PF consultant",
    "Asansol ESIC consultant",
    "Durgapur Steel Plant PF ESIC",
    "ECL coal contractor compliance",
    "Paschim Bardhaman steel PF audits",
    "Sponge iron ESIC compliance",
    "Principal Employer liability Durgapur Asansol",
    "RO Durgapur EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Durgapur & Asansol EPF & ESIC Compliance | Steel & Coal Industrial Belt",
    description:
      "PF & ESIC specialists for Durgapur Steel Plant vendors, ECL coal contractors, sponge iron and hazardous process units across Paschim Bardhaman.",
    url: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Durgapur Asansol PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Durgapur & Asansol EPF & ESIC Compliance | Steel & Coal | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Durgapur–Asansol steel plants, coal contractors and heavy industries.",
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
          Durgapur & Asansol EPF & ESIC Compliance: Steel Plants, Coal
          Contractors & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for the Durgapur–Asansol industrial belt — Durgapur Steel Plant vendors, ECL coal contractors, sponge iron units and hazardous industries. RO Durgapur audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Durgapur PF consultant, Asansol ESIC consultant, Durgapur Steel Plant PF ESIC, ECL coal contractor compliance, Paschim Bardhaman steel labour laws, sponge iron ESIC audits, Principal Employer liability Durgapur Asansol, NWC 2025 wage restructuring West Bengal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/durgapur-asansol-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Durgapur & Asansol EPF & ESIC Consultant | Steel & Coal Industrial Belt | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Paschim Bardhaman’s steel, coal and hazardous process industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/durgapur-asansol-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Durgapur & Asansol EPF & ESIC Compliance | Steel & Coal Sector | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Durgapur–Asansol steel plants, coal contractors and hazardous industries — PE liability and inspections handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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
            name: "Asansol–Durgapur EPF & ESIC Compliance Consultants | EPFDesk",
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
