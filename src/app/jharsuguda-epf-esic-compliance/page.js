import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJharsugudaDistrict,
  sectionsJharsugudaDistrict,
  faqJharsugudaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jharsuguda EPF & ESIC Compliance: Vedanta–MCL Contractor Audits & Expert Consultants | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Jharsuguda power plants, aluminium smelters and mining vendors. Navigate RO Sambalpur audits, EEC-2025 disclosure and Principal Employer liability in Odisha’s energy hub.",
  keywords: [
    "Jharsuguda PF consultant",
    "Vedanta Jharsuguda EPF audit",
    "MCL contractor ESIC compliance",
    "RO Sambalpur EPF 7A defense",
    "EEC 2025 Jharsuguda",
    "Hazardous process ESIC Odisha",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jharsuguda-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jharsuguda EPF & ESIC Compliance | Vedanta & MCL Contractor Risk",
    description:
      "PF & ESIC specialists for Jharsuguda aluminium, power and mining ecosystems governed by RO Sambalpur.",
    url: "https://epfdesk.com/jharsuguda-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jharsuguda EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jharsuguda EPF & ESIC Consultants | Vedanta & MCL Hub",
    description:
      "High-risk PF & ESIC compliance for Jharsuguda power, aluminium and coal-handling vendors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ============================
   PAGE COMPONENT
============================ */
const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD TAGS
      ============================ */}
      <Head>
        <title>
          Jharsuguda EPF & ESIC Compliance: Vedanta–MCL Contractor Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Jharsuguda aluminium smelters, power plants and mining contractors under RO Sambalpur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jharsuguda-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Jharsuguda EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Vedanta, MCL and Jharsuguda industrial vendors."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ============================
          JSON-LD SCHEMA
      ============================ */}
      <Script
        id="schema-jharsuguda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Jharsuguda EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Jharsuguda Energy & Mining Hub",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jharsuguda-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS AS TEMPLATE */
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
              "EPF & ESIC compliance specialists for Jharsuguda aluminium smelters, coal-handling contractors, power plants and MSMEs governed by RO Sambalpur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jharsuguda District" },
              { "@type": "Place", name: "Vedanta Aluminium Jharsuguda" },
              { "@type": "Place", name: "Brajrajnagar" },
              { "@type": "Place", name: "Kalimandir Industrial Area" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJharsugudaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJharsugudaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJharsugudaDistrict} />
    </>
  );
};

export default page;
