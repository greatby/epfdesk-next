import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPalgharDistrict,
  sectionsPalgharDistrict,
  faqPalgharDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Palghar EPF & ESIC Compliance for Tarapur MIDC, Boisar Pharma & Hazardous Factory Liability | EPFDesk",
  description:
    "Expert EPF & ESIC defence for Tarapur MIDC chemical and pharma factories, PF liability for Boisar engineering units, and mandatory ESIC for hazardous industry workers. Specialists in Factory Act and Principal Employer liability.",
  keywords: [
    "Palghar PF consultant",
    "Tarapur MIDC ESIC compliance",
    "Boisar Pharma PF ESIC",
    "Hazardous factory ESIC Palghar",
    "Principal Employer liability Tarapur",
    "EPFO 7A defence Palghar",
  ],
  alternates: {
    canonical: "https://epfdesk.com/palghar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Palghar EPF & ESIC Compliance | Tarapur MIDC & Hazardous Industries | EPFDesk",
    description:
      "PF & ESIC specialists for Palghar Tarapur MIDC chemical, pharma, and heavy manufacturing units.",
    url: "https://epfdesk.com/palghar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Palghar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Palghar EPF & ESIC Compliance | Tarapur MIDC & Pharma | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and audit defence for Tarapur MIDC hazardous factories.",
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
          Palghar EPF & ESIC Compliance for Tarapur MIDC, Boisar Pharma & Hazardous Factory Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Tarapur MIDC chemical and pharma factories, Boisar engineering units, and hazardous industry ESIC compliance."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/palghar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Palghar EPF & ESIC Compliance | Tarapur MIDC & Hazardous Industries"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Palghar Tarapur MIDC chemical, pharma, and heavy manufacturing units."
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
        id="schema-palghar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Palghar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Tarapur MIDC & Boisar Pharma",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/palghar-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Palghar district Tarapur MIDC chemical and pharma factories, hazardous manufacturing units, and Principal Employer liability management.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Palghar District" },
              { "@type": "Place", name: "Tarapur MIDC" },
              { "@type": "Place", name: "Boisar Industrial Area" },
              { "@type": "Place", name: "Wada Industrial Belt" },
              { "@type": "Place", name: "Palghar MIDC" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "88",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPalgharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPalgharDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPalgharDistrict} />
    </>
  );
};

export default page;
