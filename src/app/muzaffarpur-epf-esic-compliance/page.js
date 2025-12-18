import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMuzaffarpur,
  sectionsMuzaffarpur,
  faqMuzaffarpur,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Muzaffarpur EPF & ESIC Consultants: Textile, Leather & Food Park Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Muzaffarpur Apparel Park, Bela Industrial Area, and Motipur Food Park. Navigate RO Muzaffarpur audits, EEC-2025, and Labour Code shifts.",
  alternates: {
    canonical: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Muzaffarpur EPF & ESIC Compliance | Textile & Agro-Industrial Hub",
    description:
      "PF & ESIC experts for Bela textile units, Motipur Food Park vendors, leather processors, and North Bihar MSMEs.",
    url: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Muzaffarpur EPF ESIC Compliance",
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
          Muzaffarpur EPF & ESIC Compliance | Textile & Food Park Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Muzaffarpur apparel exporters, Bela industrial units, Motipur Food Park vendors, and leather processors."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/muzaffarpur-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-muzaffarpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Muzaffarpur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
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
              "Muzaffarpur",
              "Bela",
              "Motipur",
              "Muzaffarpur City",
              "NH-28 Corridor",
            ],
            description:
              "EPF & ESIC consultancy for Muzaffarpur textile parks, food processing units, leather industries, and North Bihar MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMuzaffarpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMuzaffarpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMuzaffarpur} />
    </>
  );
};

export default page;