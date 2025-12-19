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
    "Kolkata & Rajarhat EPF & ESIC Compliance: IT Parks, Sector V & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kolkata metropolitan region — Salt Lake Sector V IT firms, Rajarhat startups, FinTech companies and service-sector MSMEs. Experts in RO Kolkata enforcement, 50% Wage Rule implementation, Principal Employer liability and EEC-2025 filings.",

  keywords: [
    "Kolkata PF consultant",
    "Kolkata ESIC consultant",
    "Sector V PF ESIC compliance",
    "Rajarhat IT startup labour compliance",
    "IT company PF wage audit Kolkata",
    "50 percent wage rule PF Kolkata",
    "Principal Employer liability Kolkata",
    "RO Kolkata EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
  },

  openGraph: {
    title: "Kolkata & Rajarhat EPF & ESIC Compliance | IT & Service Sector Hub",
    description:
      "PF & ESIC specialists for Sector V IT parks, Rajarhat startups and Kolkata service-sector employers.",
    url: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kolkata PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kolkata & Rajarhat EPF & ESIC Compliance | IT & Startups | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Kolkata IT firms, Rajarhat startups and service-sector employers.",
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
          Kolkata & Rajarhat EPF & ESIC Compliance: IT Parks, Sector V & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Kolkata and Rajarhat — Sector V IT companies, FinTech startups and service-sector employers. RO Kolkata audits, 50% Wage Rule implementation and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Kolkata PF consultant, Kolkata ESIC consultant, Sector V PF ESIC compliance, Rajarhat IT startup labour laws, IT company PF audits Kolkata, 50 percent wage rule PF, Principal Employer liability Kolkata, NWC 2025 wage restructuring West Bengal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kolkata & Rajarhat EPF & ESIC Consultant | IT & Startup Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Sector V IT parks, Rajarhat startups and Kolkata service-sector companies."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kolkata & Rajarhat EPF & ESIC Compliance | IT & Startups | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Kolkata IT firms and Rajarhat startups — wage audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
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
            name: "Kolkata & Rajarhat EPF & ESIC Compliance Consultants | EPFDesk",
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
