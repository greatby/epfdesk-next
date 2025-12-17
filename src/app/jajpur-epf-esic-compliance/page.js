import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJajpurDistrict,
  sectionsJajpurDistrict,
  faqJajpurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jajpur EPF & ESIC Compliance: Kalinganagar Steel Hub Audits & Expert Consultants | EPFDesk",
  description:
    "Specialized EPF & ESIC consultancy for Jajpur steel plants, Kalinganagar MSMEs and mining ancillaries. Navigate RO Keonjhar audits, EEC-2025 and Principal Employer liability in Odisha’s steel hub.",
  keywords: [
    "Jajpur PF consultant",
    "Kalinganagar EPF ESIC compliance",
    "Tata Steel contractor PF audit",
    "JSL vendor ESIC registration",
    "RO Keonjhar EPF 7A defense",
    "EEC 2025 Jajpur",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jajpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jajpur EPF & ESIC Compliance | Kalinganagar Steel Ecosystem",
    description:
      "PF & ESIC specialists for Kalinganagar steel plants, mining vendors and MSMEs governed by RO Keonjhar.",
    url: "https://epfdesk.com/jajpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jajpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jajpur EPF & ESIC Consultants | Kalinganagar Steel Hub",
    description:
      "High-risk PF & ESIC compliance for Kalinganagar steel, fabrication and mining vendors.",
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
          Jajpur EPF & ESIC Compliance: Kalinganagar Steel Hub Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Jajpur steel plants, Kalinganagar MSMEs and chromite mining vendors under RO Keonjhar."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jajpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Jajpur EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Kalinganagar steel and mining ecosystem."
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
        id="schema-jajpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Jajpur EPF & ESIC Compliance Consultants | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Advisory for Kalinganagar Steel Hub",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jajpur-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS */
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
              "EPF & ESIC compliance specialists for Jajpur steel plants, Kalinganagar MSMEs, chromite mining vendors and fabrication units governed by RO Keonjhar.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jajpur District" },
              { "@type": "Place", name: "Kalinganagar Industrial Area" },
              { "@type": "Place", name: "Jajpur Road" },
              { "@type": "Place", name: "Duburi" },
              { "@type": "Place", name: "Sukinda" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "69",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJajpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJajpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJajpurDistrict} />
    </>
  );
};

export default page;
