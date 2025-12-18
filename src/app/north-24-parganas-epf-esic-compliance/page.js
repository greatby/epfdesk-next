import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNorth24Parganas,
  sectionsNorth24Parganas,
  faqNorth24Parganas,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "North 24 Parganas EPF & ESIC Compliance: IT & Manufacturing Hub Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Barrackpore industries, Sector V IT firms, and Barasat MSMEs. Navigate RO Barrackpore audits, EEC-2025, and IT wage rules.",
  alternates: {
    canonical:
      "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
  },
  openGraph: {
    title:
      "North 24 Parganas EPF & ESIC Compliance | IT & Industrial Corridor",
    description:
      "PF & ESIC experts for Salt Lake Sector V IT companies, Barrackpore industries, and logistics hubs.",
    url: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "North 24 Parganas EPF ESIC Compliance",
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
          North 24 Parganas EPF & ESIC Compliance | IT & Manufacturing Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Sector V IT firms, Barrackpore industries, and Barasat logistics hubs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/north-24-parganas-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-north-24-parganas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "North 24 Parganas EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
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
              "Salt Lake Sector V",
              "Barrackpore",
              "Barasat",
              "Madhyamgram",
              "North 24 Parganas",
            ],
            description:
              "EPF & ESIC consultancy for IT companies, manufacturing units, and logistics hubs across North 24 Parganas.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNorth24Parganas} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNorth24Parganas} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNorth24Parganas} />
    </>
  );
};

export default page;