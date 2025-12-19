import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import {
  faqMeghalaya,
  heroDataMeghalaya,
  sectionsMeghalaya,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Meghalaya EPF & ESIC Compliance: Cement Plants, Byrnihat Steel & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Meghalaya — Byrnihat steel mills, cement plants, Umiam industrial estates and regional MSMEs. Experts in SRO Shillong enforcement, hazardous process compliance, Principal Employer liability, ADC norms and New Wage Code restructuring.",

  keywords: [
    "Meghalaya PF consultant",
    "Meghalaya ESIC consultant",
    "Byrnihat steel plant PF ESIC",
    "Meghalaya cement plant labour compliance",
    "Umiam industrial estate PF audits",
    "Hazardous process ESIC Meghalaya",
    "Principal Employer liability Meghalaya",
    "SRO Shillong EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/meghalaya-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Meghalaya EPF & ESIC Compliance | Cement, Steel & Industrial Corridors",
    description:
      "PF & ESIC specialists for Meghalaya cement plants, Byrnihat steel units, Umiam industrial estates and MSMEs.",
    url: "https://epfdesk.com/meghalaya-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Meghalaya PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Meghalaya EPF & ESIC Compliance | Cement & Steel Industries | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Meghalaya cement plants, steel mills and industrial estates.",
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
          Meghalaya EPF & ESIC Compliance: Cement Plants, Byrnihat Steel & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Meghalaya — cement plants, Byrnihat steel mills, Umiam industrial estates and MSMEs. SRO Shillong audits, hazardous process ESIC coverage, ADC norms and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Meghalaya PF consultant, Meghalaya ESIC consultant, Byrnihat steel PF ESIC, Meghalaya cement plant labour compliance, Umiam industrial estate PF audits, hazardous process ESIC Meghalaya, Principal Employer liability Meghalaya, NWC 2025 wage restructuring Northeast"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/meghalaya-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Meghalaya EPF & ESIC Consultant | Cement & Steel Industries | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Meghalaya cement plants, Byrnihat steel mills and industrial estates."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/meghalaya-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meghalaya EPF & ESIC Compliance | Cement & Steel Industries | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Meghalaya cement plants and steel units — hazardous industry compliance and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-meghalaya"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Meghalaya EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/meghalaya-epf-esic-compliance",
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
              "Byrnihat",
              "Umiam",
              "Shillong",
              "Ri-Bhoi",
              "East Jaintia Hills",
              "East Khasi Hills",
            ],
            description:
              "EPF & ESIC consultancy for Meghalaya’s cement, steel, ferroalloy, FMCG, and MSME industrial corridors.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMeghalaya} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMeghalaya} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMeghalaya} />
    </>
  );
};

export default page;
