import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKolkataRajarhat,
  sectionsKolkataRajarhat,
  faqKolkataRajarhat,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Kolkata & Rajarhat EPF & ESIC Compliance: IT Sector Audits & Expert Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Kolkata IT firms, Rajarhat startups, and Sector V MSMEs. Navigate RO Kolkata audits, 50% Wage Rule, and EEC-2025 filings.",
  alternates: {
    canonical: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kolkata & Rajarhat EPF & ESIC Compliance | IT & Startup Hub",
    description:
      "PF & ESIC experts for Salt Lake Sector V, Rajarhat, and Kolkata service industries.",
    url: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kolkata EPF ESIC Compliance",
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
          Kolkata & Rajarhat EPF & ESIC Compliance | IT & Startup Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Kolkata IT firms, FinTech startups, and service companies."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-kolkata-rajarhat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Kolkata & Rajarhat EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
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
              "Kolkata",
              "Rajarhat",
              "New Town",
              "Salt Lake Sector V",
            ],
            description:
              "EPF & ESIC consultancy for Kolkata IT, FinTech, startups, and service sector establishments.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKolkataRajarhat} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKolkataRajarhat} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKolkataRajarhat} />
    </>
  );
};

export default page;
