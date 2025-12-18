import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJamshedpur,
  sectionsJamshedpur,
  faqJamshedpur,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jamshedpur EPF & ESIC Consultants: TATA Steel & Adityapur Vendor Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Jamshedpur auto-ancillaries, TATA Steel vendors, and Adityapur MSMEs. Navigate RO Jamshedpur audits, EEC-2025, and Principal Employer liability.",
  alternates: {
    canonical: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jamshedpur EPF & ESIC Compliance | Steel & Auto Industrial Hub",
    description:
      "PF & ESIC experts for TATA Steel contractors, Adityapur auto-ancillaries, and Jharkhand manufacturing MSMEs.",
    url: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jamshedpur EPF ESIC Compliance",
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
          Jamshedpur EPF & ESIC Compliance | TATA Steel & Adityapur Consultants
        </title>
        <meta
          name="description"
          content="Statutory PF & ESIC compliance for TATA Steel contractors, Adityapur auto ancillaries, forging units, and Jharkhand MSMEs."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/jamshedpur-epf-esic-compliance"
        />
      </Head>

      {/* JSON-LD SCHEMA */}
      <Script
        id="schema-jamshedpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Jamshedpur EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
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
              "Jamshedpur",
              "Adityapur",
              "Gamharia",
              "Kandra",
              "East Singhbhum",
              "Seraikela-Kharsawan",
            ],
            description:
              "EPF & ESIC consultancy for TATA Steel vendors, Adityapur industrial units, and Jharkhand auto & steel manufacturing clusters.",
          }),
        }}
      />

      {/* PAGE SECTIONS */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJamshedpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJamshedpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJamshedpur} />
    </>
  );
};

export default page;