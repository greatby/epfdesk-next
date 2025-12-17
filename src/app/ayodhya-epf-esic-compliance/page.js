import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAyodhyaDistrict,
  sectionsAyodhyaDistrict,
  faqAyodhyaDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ayodhya EPF & ESIC Compliance: Hotel License, PE Liability & Construction Risk Management | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Ayodhya hotels, temple infrastructure contractors and service firms. Handle RO Lucknow audits, Principal Employer liability, hotel license PF/ESI mandates and construction labour risks in UP.",
  keywords: [
    "Ayodhya PF consultant",
    "Ayodhya ESIC registration",
    "Hotel license PF ESI Ayodhya",
    "Principal Employer liability Ayodhya",
    "RO Lucknow EPFO audit defense",
    "Ayodhya construction labour compliance",
  ],
  alternates: {
    canonical: "https://epfdesk.com/ayodhya-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ayodhya EPF & ESIC Compliance | Hospitality, Construction & Services | EPFDesk",
    description:
      "PF & ESIC specialists for Ayodhya hotels, guest houses, temple projects and infrastructure contractors under RO Lucknow.",
    url: "https://epfdesk.com/ayodhya-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ayodhya EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ayodhya EPF & ESIC Compliance | Hotel License & PE Risk | EPFDesk",
    description:
      "Critical PF & ESIC compliance for Ayodhya hotels, contractors and service establishments.",
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
          Ayodhya EPF & ESIC Compliance: Hotel License, PE Liability & Construction Risk Management | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defense for Ayodhya Hotels, Infrastructure Contractors and Service Firms under RO Lucknow."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ayodhya-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Ayodhya EPF & ESIC Compliance | Hospitality & Construction"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Ayodhya hotels, guest houses, temple infrastructure projects and contractors."
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
        id="schema-ayodhya"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ayodhya EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Hotels and Contractors in Ayodhya",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ayodhya-epf-esic-compliance",
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
              "Specialized EPF & ESIC compliance for Ayodhya hotels, guest houses, temple infrastructure projects, construction contractors and service establishments governed by RO Lucknow.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Ayodhya District" },
              { "@type": "Place", name: "Ram Path" },
              { "@type": "Place", name: "Janmabhoomi Path" },
              { "@type": "Place", name: "New Ayodhya Township" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "68",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAyodhyaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAyodhyaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAyodhyaDistrict} />
    </>
  );
};

export default page;
