import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAhmednagarDistrict,
  sectionsAhmednagarDistrict,
  faqAhmednagarDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ahmednagar EPF & ESIC Compliance for Sugar Mills, MIDC Factories & Dairy Industry | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Ahmednagar Sugar Mills, PF liability on Retention Allowance (Bombay HC ruling), mandatory ESIC for MIDC MSMEs, Dal Mills and Dairy units. Specialists in agro-industrial Principal Employer liability.",
  keywords: [
    "Ahmednagar PF consultant",
    "Sugar mill retention allowance PF Ahmednagar",
    "Ahmednagar EPFO 7A defence",
    "ESIC registration Ahmednagar MIDC",
    "Dairy ESIC compliance Maharashtra",
    "Dal mill PF ESIC Ahmednagar",
  ],
  alternates: {
    canonical: "https://epfdesk.com/ahmednagar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ahmednagar EPF & ESIC Compliance | Sugar, MIDC & Dairy | EPFDesk",
    description:
      "PF & ESIC specialists for Ahmednagar sugar factories, retention allowance audits, MIDC MSMEs and dairy processing units.",
    url: "https://epfdesk.com/ahmednagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmednagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ahmednagar EPF & ESIC Compliance | Sugar & Agro Industry | EPFDesk",
    description:
      "High-risk PF & ESIC compliance for Ahmednagar Sugar Mills, MIDC factories and Dairy units.",
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
          Ahmednagar EPF & ESIC Compliance for Sugar Mills, MIDC Factories & Dairy Industry | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Ahmednagar Sugar Mills, PF on Retention Allowance, MIDC MSMEs, Dairy & Dal Mills."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ahmednagar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Ahmednagar EPF & ESIC Compliance | Sugar & Agro Industry"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Ahmednagar Sugar Factories, MIDC units and Dairy processing plants."
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
        id="schema-ahmednagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ahmednagar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar Mills & Agro Industry in Ahmednagar",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ahmednagar-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Ahmednagar Sugar Mills, PF on Retention Allowance, MIDC manufacturing units, Dairy processing plants and Dal Mills.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Ahmednagar District" },
              { "@type": "Place", name: "Ahmednagar MIDC" },
              { "@type": "Place", name: "Pravaranagar" },
              { "@type": "Place", name: "Pathardi" },
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
        <PerformanceSectionIndustry data={heroDataAhmednagarDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAhmednagarDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAhmednagarDistrict} />
    </>
  );
};

export default page;
