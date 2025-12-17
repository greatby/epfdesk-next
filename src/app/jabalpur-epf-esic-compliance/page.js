import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJabalpurDistrict,
  sectionsJabalpurDistrict,
  faqJabalpurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jabalpur EPF & ESIC Compliance: Cement & Mining PE Liability, EEC-2025 Amnesty & ESIC Amnesty Scheme 2025 | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Jabalpur mining units, cement factories and government contractors. Navigate RO Jabalpur audits, EEC-2025 amnesty, ESIC Amnesty Scheme 2025 and Principal Employer liability in MP’s mineral belt.",
  keywords: [
    "Jabalpur PF consultant",
    "Mining contractor EPF compliance Jabalpur",
    "Cement plant ESIC compliance MP",
    "EEC 2025 amnesty Jabalpur",
    "RO Jabalpur EPF 7A defense",
    "ESIC Amnesty Scheme 2025 MP",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jabalpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jabalpur EPF & ESIC Compliance | Mining & Cement Sector | EPFDesk",
    description:
      "PF & ESIC specialists for Jabalpur mining, cement and heavy industrial units under RO Jabalpur jurisdiction.",
    url: "https://epfdesk.com/jabalpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jabalpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jabalpur EPF & ESIC Compliance | Mining & Cement",
    description:
      "High-risk PF & ESIC compliance for Jabalpur mining contractors, cement plants and PSU vendors.",
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
          Jabalpur EPF & ESIC Compliance: Cement & Mining PE Liability, EEC-2025 Amnesty & ESIC Amnesty Scheme 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Jabalpur mining units, cement plants and government contractors under RO Jabalpur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jabalpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Jabalpur EPF & ESIC Compliance | Mining & Cement"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Jabalpur iron ore mines, cement factories and PSU contractors."
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
        id="schema-jabalpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Jabalpur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Mining & Cement Units in Jabalpur",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jabalpur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Jabalpur mining clusters, cement plants and government contractors governed by RO Jabalpur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jabalpur District" },
              { "@type": "Place", name: "Sihora" },
              { "@type": "Place", name: "Gosalpur" },
              { "@type": "Place", name: "Richhai Industrial Area" },
              { "@type": "Place", name: "Vijay Nagar" },
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
        <PerformanceSectionIndustry data={heroDataJabalpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJabalpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJabalpurDistrict} />
    </>
  );
};

export default page;
