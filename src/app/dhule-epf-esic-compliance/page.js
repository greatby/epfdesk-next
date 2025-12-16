import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDhuleDistrict,
  sectionsDhuleDistrict,
  faqDhuleDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Dhule EPF & ESIC Compliance for Cotton Ginning, Textile Powerlooms & MIDC MSMEs | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Dhule Cotton Ginning, Textile Powerloom units, piece-rate PF liability, seasonal labour compliance and MIDC contractor PE risk. SRO Jalgaon liaison.",
  keywords: [
    "Dhule EPF consultant",
    "Dhule ESIC registration",
    "Cotton ginning PF compliance",
    "Textile powerloom ESIC Dhule",
    "Piece rate PF audit Dhule",
    "EPFO SRO Jalgaon 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/dhule-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dhule EPF & ESIC Compliance | Cotton Ginning & Textile Powerlooms",
    description:
      "High-risk PF & ESIC compliance for Dhule textile, cotton ginning and MIDC manufacturing units.",
    url: "https://epfdesk.com/dhule-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhule EPF ESIC Compliance",
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
          Dhule EPF & ESIC Compliance for Textile & Cotton Units | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Dhule Cotton Ginning units, Textile Powerlooms, seasonal labour PF liability and MIDC contractor audits."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dhule-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-dhule"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Dhule EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Dhule Textile & Cotton Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dhule-epf-esic-compliance",
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
              "EPF & ESIC compliance services for Dhule Cotton Ginning, Textile Powerloom units, MIDC MSMEs and seasonal labour.",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Dhule District" },
              { "@type": "Place", name: "Dhule MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "41",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDhuleDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDhuleDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDhuleDistrict} />
    </>
  );
};

export default page;
