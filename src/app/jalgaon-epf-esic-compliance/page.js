import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalgaonDistrict,
  sectionsJalgaonDistrict,
  faqJalgaonDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Jalgaon EPF & ESIC Compliance for Banana Processing, PVC MIDC & Agro Units | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Jalgaon Banana Processing units, PVC/Chemical MIDC factories, seasonal agro labour PF liability and Dal Mill piece-rate wage audits. SRO Jalgaon liaison.",
  keywords: [
    "Jalgaon EPF consultant",
    "Jalgaon ESIC registration",
    "Banana processing PF compliance",
    "PVC MIDC ESIC Jalgaon",
    "Dal mill piece rate PF",
    "EPFO SRO Jalgaon 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jalgaon-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jalgaon EPF & ESIC Compliance | Banana Processing & PVC MIDC",
    description:
      "High-risk PF & ESIC compliance for Jalgaon agro-processing, PVC MIDC factories and seasonal labour.",
    url: "https://epfdesk.com/jalgaon-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalgaon EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Jalgaon EPF & ESIC Compliance for Banana Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Jalgaon Banana Processing units, PVC MIDC factories, seasonal agro PF liability and Dal Mill piece-rate audits."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jalgaon-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-jalgaon"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Jalgaon EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Jalgaon Banana, PVC & MIDC Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jalgaon-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS SAME AS BANGALORE */
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "EPF & ESIC compliance services for Jalgaon Banana Processing units, PVC MIDC factories, Dal Mills and seasonal agro-processing labour.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jalgaon District" },
              { "@type": "Place", name: "Jalgaon MIDC" },
              { "@type": "Place", name: "Bhusawal MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "47",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalgaonDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalgaonDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalgaonDistrict} />
    </>
  );
};

export default page;
