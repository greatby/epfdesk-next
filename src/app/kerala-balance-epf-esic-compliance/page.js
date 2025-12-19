import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKeralaBalance,
  sectionsKeralaBalance,
  faqKeralaBalance,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Kerala EPF & ESIC Compliance: IT Parks, Cashew Units, Gold Trade & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kerala’s balance districts — Kozhikode Cyberpark IT units, Kollam cashew processing factories, Thrissur gold trade, retail and service establishments. Experts in RO enforcement, Kerala welfare-board reconciliation, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Kerala PF consultant",
    "Kerala ESIC consultant",
    "Kozhikode Cyberpark PF ESIC",
    "Kollam cashew factory labour compliance",
    "Thrissur gold jewellery PF ESIC",
    "Kerala welfare board PF ESIC reconciliation",
    "Retail establishment ESIC Kerala",
    "Principal Employer liability Kerala",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kerala-balance-epf-esic-compliance",
  },

  openGraph: {
    title: "Kerala EPF & ESIC Compliance | IT, Cashew, Gold & Retail Hubs",
    description:
      "PF & ESIC specialists for Kerala IT parks, cashew factories, gold trade, retail and traditional industries.",
    url: "https://epfdesk.com/kerala-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kerala PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kerala EPF & ESIC Compliance | IT, Cashew & Gold Trade | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Kerala IT parks, cashew units, gold trade and retail establishments.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ============================
   PAGE
============================ */
const page = () => {
  return (
    <>
      <Head>
        <title>
          Kerala EPF & ESIC Compliance: IT Parks, Cashew Units, Gold Trade & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Kerala’s balance districts — Kozhikode Cyberpark IT units, Kollam cashew factories, Thrissur gold trade, retail and service establishments. RO audits, welfare-board reconciliation and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Kerala PF consultant, Kerala ESIC consultant, Kozhikode Cyberpark PF ESIC, Kollam cashew labour compliance, Thrissur gold jewellery PF ESIC, Kerala welfare board PF ESIC, retail establishment ESIC Kerala, NWC 2025 wage restructuring Kerala"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kerala-balance-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kerala EPF & ESIC Consultant | IT, Cashew, Gold & Retail Hubs | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Kerala’s IT parks, cashew factories, gold trade and traditional industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kerala-balance-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kerala EPF & ESIC Compliance | IT, Cashew & Gold Trade | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Kerala IT parks, cashew units, gold trade and retail employers — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-kerala-balance-epf-esic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Kerala EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kerala-balance-epf-esic-compliance",
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
              "Kozhikode",
              "Malappuram",
              "Kollam",
              "Alappuzha",
              "Thrissur",
            ],
            description:
              "EPF & ESIC compliance consultancy for Kerala’s regional IT hubs, cashew and coir industries, gold manufacturing clusters, and retail/NBFC establishments.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKeralaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKeralaBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKeralaBalance} />
    </>
  );
};

export default page;
