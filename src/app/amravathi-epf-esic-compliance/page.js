import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAmravatiDistrict,
  sectionsAmravatiDistrict,
  faqAmravatiDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Amravati EPF & ESIC Compliance for PM MITRA Textile Park, Nandgaon Peth MIDC & Chemical Factories | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Amravati textile and spinning mills, PF liability for Nandgaon Peth MIDC contractors, and mandatory ESIC compliance for chemical and agro-processing units. Specialists in PM MITRA compliance and Principal Employer liability.",
  keywords: [
    "Amravati PF consultant",
    "PM MITRA Textile Park EPF compliance",
    "Nandgaon Peth MIDC ESIC registration",
    "Textile piece rate PF audit",
    "Chemical factory ESIC Amravati",
    "Amravati EPFO 7A defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/amravati-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Amravati EPF & ESIC Compliance | Textile, Chemical & PM MITRA Hub | EPFDesk",
    description:
      "PF & ESIC specialists for Amravati textile mills, PM MITRA Textile Park units, and chemical factories.",
    url: "https://epfdesk.com/amravati-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Amravati EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Amravati EPF & ESIC Compliance | PM MITRA & MIDC | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Amravati textile, chemical, and MIDC units.",
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
          Amravati EPF & ESIC Compliance for PM MITRA Textile Park, Nandgaon Peth MIDC & Chemical Factories | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Amravati textile mills, PM MITRA Textile Park units, Nandgaon Peth MIDC contractors, and chemical factories."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/amravati-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Amravati EPF & ESIC Compliance | Textile & Chemical Hub"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Amravati textile, chemical, and PM MITRA Textile Park industries."
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
        id="schema-amravati"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Amravati EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Textile & Chemical Industries in Amravati",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/amravati-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance services for Amravati district textile mills, PM MITRA Textile Park units, chemical factories, and MIDC contractors, with focus on piece-rate wages and Principal Employer liability.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Amravati District" },
              { "@type": "Place", name: "PM MITRA Textile Park" },
              { "@type": "Place", name: "Nandgaon Peth MIDC" },
              { "@type": "Place", name: "Amravati MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "76",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAmravatiDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAmravatiDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAmravatiDistrict} />
    </>
  );
};

export default page;
