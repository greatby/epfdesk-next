import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBegusarai,
  sectionsBegusarai,
  faqBegusarai,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Begusarai EPF & ESIC Compliance: Barauni PSU Vendors, NTPC Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defense for Begusarai’s Barauni Refinery (IOCL), NTPC contractors, HURL ancillaries and industrial MSMEs. Experts in Principal Employer liability, PSU vendor audits and hazardous process coverage.",

  keywords: [
    "Begusarai PF consultant",
    "Begusarai ESIC registration",
    "Barauni Refinery PF ESIC compliance",
    "IOCL vendor PF Begusarai",
    "NTPC contractor PF ESIC Begusarai",
    "HURL Barauni PF compliance",
    "Principal Employer liability Begusarai",
  ],

  alternates: {
    canonical: "https://epfdesk.com/begusarai-epf-esic-compliance",
  },

  openGraph: {
    title: "Begusarai EPF & ESIC Compliance | Barauni PSU & Industrial Hub",
    description:
      "PF & ESIC specialists for IOCL Barauni Refinery vendors, NTPC contractors, HURL ancillaries and Begusarai industrial units.",
    url: "https://epfdesk.com/begusarai-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Begusarai PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Begusarai EPF & ESIC Compliance | Barauni PSU Vendors | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Begusarai PSU vendors, NTPC contractors and MSMEs.",
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
          Begusarai EPF & ESIC Compliance: Barauni PSU Vendors, NTPC Contractors
          & PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Begusarai’s Barauni Refinery (IOCL) vendors, NTPC contractors, HURL ancillaries and industrial MSMEs. Principal Employer liability and PSU audits handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/begusarai-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Begusarai EPF & ESIC Compliance | Barauni PSU & Industrial Hub"
        />
        <meta
          property="og:description"
          content="PF & ESIC specialists for IOCL Barauni Refinery vendors, NTPC contractors and HURL units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-begusarai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Begusarai EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/begusarai-epf-esic-compliance",
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
              "Begusarai",
              "Barauni",
              "Bihat",
              "Begusarai Sadar",
              "Garhpura",
            ],
            description:
              "EPF & ESIC consultancy for Barauni Refinery PSU vendors, NTPC contractors, petrochemical units, and Begusarai MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBegusarai} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBegusarai} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBegusarai} />
    </>
  );
};

export default page;
