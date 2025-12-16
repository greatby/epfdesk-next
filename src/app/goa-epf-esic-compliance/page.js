import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGoaState,
  sectionsGoaState,
  faqGoa,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Goa EPF & ESIC Compliance for Hotels, Resorts, Pharma Units & Mormugao Port Contractors | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Goa hospitality sector, seasonal hotel staff, Verna MIDC pharma factories, and Mormugao Port contract labour. Strong EPFO 7A & ESIC defence.",
  keywords: [
    "Goa PF consultant",
    "Goa ESIC registration",
    "PF for hotel staff Goa",
    "ESIC compliance Verna MIDC",
    "Mormugao Port contractor PF",
    "Goa EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/goa-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Goa EPF & ESIC Compliance | Tourism, Pharma & Port Logistics | EPFDesk",
    description:
      "PF & ESIC specialists for Goa Hotels, Resorts, Pharma Units (Verna MIDC) and Mormugao Port contractors.",
    url: "https://epfdesk.com/goa-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Goa EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Goa EPF & ESIC Compliance | Hotels, Pharma & Port Labour | EPFDesk",
    description:
      "EPF/ESIC compliance and audit defence for Goa tourism, pharma, and port contractors.",
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
          Goa EPF & ESIC Compliance for Hotels, Resorts, Pharma Units & Mormugao Port Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC compliance for Goa hospitality sector, seasonal hotel staff, Verna MIDC pharma factories, and Mormugao Port contract labour."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/goa-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Goa EPF & ESIC Compliance | Tourism, Pharma & Port Logistics"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Goa Hotels, Resorts, Pharma Units and Port contractors."
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
        id="schema-goa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Goa EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Goa Hotels, Pharma Units & Port Contractors",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/goa-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS KEPT SAME AS BANGALORE */
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
              "Expert EPF & ESIC compliance for Goa tourism & hospitality sector, pharma manufacturing units at Verna MIDC, and Mormugao Port contractors.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Goa" },
              { "@type": "City", name: "Panaji" },
              { "@type": "City", name: "Margao" },
              { "@type": "City", name: "Vasco da Gama" },
              { "@type": "City", name: "Mapusa" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "78",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGoaState} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGoaState} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGoa} />
    </>
  );
};

export default page;
