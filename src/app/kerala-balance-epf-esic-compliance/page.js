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
    "Kerala EPF & ESIC Consultants: Kozhikode, Kollam & Thrissur Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Kozhikode Cyberpark startups, Kollam cashew units, and Thrissur gold & retail businesses. Navigate RO audits, EEC-2025, and Kerala welfare-board reconciliation.",
  alternates: {
    canonical:
      "https://epfdesk.com/kerala-balance-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kerala EPF & ESIC Compliance | Kozhikode, Kollam & Thrissur",
    description:
      "Statutory PF & ESIC compliance for Kerala’s IT, cashew, gold, retail, and traditional industries.",
    url: "https://epfdesk.com/kerala-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kerala EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
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
          Kerala EPF & ESIC Compliance | Kozhikode, Kollam & Thrissur
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Kozhikode Cyberpark, Kollam cashew units, and Thrissur gold, retail, and NBFC sectors."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/kerala-balance-epf-esic-compliance"
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
            name:
              "Kerala EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/kerala-balance-epf-esic-compliance",
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
