import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataThaneDistrict,
  sectionsThaneDistrict,
  faqThaneDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Thane EPF & ESIC Compliance for Bhiwandi Warehouses, MIDC Factories & Principal Employer Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Thane MIDC factories (Ambernath, Dombivli), PF liability for Bhiwandi logistics hubs, and ESIC compliance for warehouse and loading staff. Specialists in Mathadi Act & CLRA compliance.",
  keywords: [
    "Thane PF consultant",
    "Bhiwandi warehouse PF liability",
    "Thane ESIC registration",
    "MIDC factory ESIC compliance",
    "Mathadi Act PF ESIC",
    "EPFO 7A defence Thane",
  ],
  alternates: {
    canonical: "https://epfdesk.com/thane-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Thane EPF & ESIC Compliance | Warehousing, MIDC Factories & Logistics | EPFDesk",
    description:
      "PF & ESIC specialists for Thane Bhiwandi warehouses, MIDC factories, and high-risk contract labour environments.",
    url: "https://epfdesk.com/thane-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thane EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Thane EPF & ESIC Compliance | Bhiwandi Warehouses & MIDC | EPFDesk",
    description:
      "High-risk PF & ESIC compliance and EPFO 7A defence for Thane logistics hubs and MIDC factories.",
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
          Thane EPF & ESIC Compliance for Bhiwandi Warehouses, MIDC Factories & Principal Employer Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Thane MIDC factories, PF liability for Bhiwandi warehouses, and Mathadi Act & CLRA compliance."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/thane-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Thane EPF & ESIC Compliance | Warehousing & MIDC Factories"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Thane logistics hubs, MIDC manufacturing units, and contract labour compliance."
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
        id="schema-thane"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Thane EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Bhiwandi Warehouses & Thane MIDC",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/thane-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Thane district logistics warehouses, MIDC factories, Mathadi Act governed labour, and Principal Employer risk environments.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Thane District" },
              { "@type": "Place", name: "Bhiwandi Warehouse Hub" },
              { "@type": "Place", name: "Ambernath MIDC" },
              { "@type": "Place", name: "Dombivli MIDC" },
              { "@type": "Place", name: "Badlapur MIDC" },
              { "@type": "Place", name: "Taloja MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "96",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataThaneDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThaneDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqThaneDistrict} />
    </>
  );
};

export default page;
