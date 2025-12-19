import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataFaridabad,
  sectionsFaridabad,
  faqFaridabad,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Faridabad EPF & ESIC Compliance: Engineering Units, IMT Vendors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Faridabad engineering units, IMT Faridabad vendors, tractor ancillaries and manufacturing MSMEs. Experts in RO Faridabad enforcement, Principal Employer liability, hazardous process ESIC and New Wage Code restructuring.",

  keywords: [
    "Faridabad PF consultant",
    "Faridabad ESIC consultant",
    "IMT Faridabad PF ESIC compliance",
    "Engineering unit labour compliance Faridabad",
    "Tractor ancillary PF ESIC Faridabad",
    "Principal Employer liability Faridabad",
    "RO Faridabad EPFO jurisdiction",
    "Hazardous industry ESIC Faridabad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/faridabad-epf-esic-compliance",
  },

  openGraph: {
    title: "Faridabad EPF & ESIC Compliance | Engineering & IMT Industrial Hub",
    description:
      "PF & ESIC specialists for Faridabad engineering units, IMT vendors, tractor ancillaries and manufacturing MSMEs.",
    url: "https://epfdesk.com/faridabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Faridabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Faridabad EPF & ESIC Compliance | Engineering & IMT Vendors | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Faridabad engineering units, IMT vendors and tractor ancillaries.",
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
          Faridabad EPF & ESIC Compliance: Engineering Units, IMT Vendors & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Faridabad engineering units, IMT Faridabad vendors, tractor ancillaries and manufacturing MSMEs. RO Faridabad audits, hazardous process ESIC and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Faridabad PF consultant, Faridabad ESIC consultant, IMT Faridabad PF ESIC, engineering unit labour compliance, tractor ancillary PF audits Faridabad, Principal Employer liability Faridabad, hazardous industry ESIC Faridabad, NWC 2025 wage restructuring Faridabad"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/faridabad-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Faridabad EPF & ESIC Consultant | Engineering & IMT Industrial Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Faridabad’s engineering and IMT manufacturing clusters."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/faridabad-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Faridabad EPF & ESIC Compliance | Engineering & IMT Vendors | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Faridabad engineering units, IMT vendors and tractor ancillaries — PE liability and inspections handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-faridabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Faridabad EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/faridabad-epf-esic-compliance",
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
              "Faridabad",
              "IMT Faridabad",
              "Ballabgarh",
              "NIT Faridabad",
              "Sector 24",
              "Sector 25",
              "Sector 58",
            ],
            description:
              "EPF & ESIC consultancy for Faridabad engineering firms, IMT Faridabad PSU vendors, tractor ancillaries, and manufacturing MSMEs.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFaridabad} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFaridabad} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqFaridabad} />
    </>
  );
};

export default page;
