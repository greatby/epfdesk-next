import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKharagpur,
  sectionsKharagpur,
  faqKharagpur,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Kharagpur EPF & ESIC Compliance: Cement Plants, Metal Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kharagpur’s industrial belt — cement plants, metal and engineering units, and Vidyasagar Industrial Park vendors. Experts in RO Kolkata enforcement, Principal Employer liability, contractor audits and New Wage Code restructuring.",

  keywords: [
    "Kharagpur PF consultant",
    "Kharagpur ESIC consultant",
    "Cement plant PF ESIC Kharagpur",
    "Metal industry labour compliance Kharagpur",
    "Vidyasagar Industrial Park PF audits",
    "Engineering unit PF ESIC Kharagpur",
    "Principal Employer liability Kharagpur",
    "RO Kolkata EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kharagpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Kharagpur EPF & ESIC Compliance | Industrial & Manufacturing Hub",
    description:
      "PF & ESIC specialists for Kharagpur cement plants, metal units, engineering factories and industrial park vendors.",
    url: "https://epfdesk.com/kharagpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kharagpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kharagpur EPF & ESIC Compliance | Cement & Metal Industries | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Kharagpur cement plants, metal units and industrial park vendors.",
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
          Kharagpur EPF & ESIC Compliance: Cement Plants, Metal Units & PE
          Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Kharagpur manufacturing units, cement plants, metal and engineering factories, and Vidyasagar Industrial Park vendors. RO Kolkata audits and Principal Employer liability handled."
        />

        <meta
          name="keywords"
          content="Kharagpur PF consultant, Kharagpur ESIC consultant, cement plant PF ESIC Kharagpur, metal industry labour compliance, Vidyasagar Industrial Park PF audits, engineering unit PF ESIC Kharagpur, Principal Employer liability Kharagpur, NWC 2025 wage restructuring West Bengal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kharagpur-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kharagpur EPF & ESIC Consultant | Industrial & Manufacturing Hub | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Kharagpur’s cement plants, metal industries and manufacturing clusters."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kharagpur-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kharagpur EPF & ESIC Compliance | Cement & Metal Industries | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Kharagpur cement plants, metal units and industrial park vendors — PE liability and audits handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-kharagpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Kharagpur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kharagpur-epf-esic-compliance",
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
              "Kharagpur",
              "Paschim Medinipur",
              "Nimpura",
              "Gokulpur",
              "Salboni",
            ],
            description:
              "EPF & ESIC consultancy for Kharagpur’s metal, cement, engineering, and industrial corridor.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKharagpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKharagpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKharagpur} />
    </>
  );
};

export default page;
