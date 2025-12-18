import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqSikkim, heroDataSikkim, sectionsSikkim } from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Sikkim EPF & ESIC Consultants: Pharma Hub & Industrial Compliance Experts | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Sikkim pharmaceutical units, Rangpo & Mamring MSMEs. Navigate SRO Gangtok audits, New Wage Code 50% rule, and COI labour norms.",
  alternates: {
    canonical: "https://epfdesk.com/sikkim-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Sikkim EPF & ESIC Compliance | Pharmaceutical & Industrial Hub",
    description:
      "PF & ESIC compliance experts for Sikkim pharma manufacturers, industrial estates, and MSMEs.",
    url: "https://epfdesk.com/sikkim-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sikkim EPF ESIC Compliance",
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
          Sikkim EPF & ESIC Compliance | Pharma & Industrial Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for Sikkim pharmaceutical units, Rangpo, Mamring, and South Sikkim industrial clusters."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/sikkim-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-sikkim"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Sikkim EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sikkim-epf-esic-compliance",
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
              "Gangtok",
              "Rangpo",
              "Mamring",
              "Majitar",
              "Melli",
              "Jorethang",
              "East Sikkim",
              "South Sikkim",
            ],
            description:
              "EPF & ESIC consultancy for Sikkim’s pharmaceutical manufacturing, industrial estates, and MSME ecosystem.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSikkim} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSikkim} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSikkim} />
    </>
  );
};

export default page;