import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPatna,
  sectionsPatna,
  faqPatna,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Patna EPF & ESIC Consultants: Bihta & Fatuha Industrial Compliance Experts | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Patna IT firms, Bihta logistics parks, and Fatuha MSMEs. Navigate RO Patna audits, EEC-2025, and New Wage Code rules.",
  alternates: {
    canonical: "https://epfdesk.com/patna-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Patna EPF & ESIC Compliance | Service & Logistics Hub",
    description:
      "PF & ESIC experts for Patna IT companies, Bihta logistics parks, Fatuha industrial units, and Bihar service-sector employers.",
    url: "https://epfdesk.com/patna-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Patna EPF ESIC Compliance",
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
          Patna EPF & ESIC Compliance | IT, Logistics & Service Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Patna IT firms, Bihta logistics parks, Fatuha MSMEs, hospitals, and retail chains."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/patna-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-patna"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Patna EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/patna-epf-esic-compliance",
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
              "Patna",
              "Bihta",
              "Fatuha",
              "Kankarbagh",
              "Boring Road",
              "Rajendra Nagar",
            ],
            description:
              "EPF & ESIC consultancy for Patna IT firms, Bihta logistics parks, Fatuha industrial units, and Bihar service-sector employers.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPatna} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPatna} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPatna} />
    </>
  );
};

export default page;