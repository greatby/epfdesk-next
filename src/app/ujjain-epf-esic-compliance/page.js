import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataUjjainDistrict,
  sectionsUjjainDistrict,
  faqUjjainDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Ujjain EPF & ESIC Compliance: Vikram Udyogpuri Smart City PE Liability, EEC-2025 & ESIC Amnesty 2025 | EPFDesk",
  description:
    "Specialized EPF & ESIC defense for Ujjain industrial units, Vikram Udyogpuri MNCs and MSMEs. Navigate RO Ujjain audits, EEC-2025 enrolment, ESIC Amnesty 2025 and litigation settlement in MP’s flagship DMIC node.",
  keywords: [
    "Ujjain PF consultant",
    "Vikram Udyogpuri EPF ESIC compliance",
    "ESIC registration Nagda Maksi",
    "EEC 2025 enrolment Ujjain",
    "RO Ujjain EPF 7A defense",
    "Medical device park ESIC compliance MP",
  ],
  alternates: {
    canonical: "https://epfdesk.com/ujjain-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ujjain EPF & ESIC Compliance | Vikram Udyogpuri DMIC | EPFDesk",
    description:
      "PF & ESIC specialists for Ujjain’s Vikram Udyogpuri Smart City, pharma, food and chemical clusters under RO Ujjain.",
    url: "https://epfdesk.com/ujjain-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ujjain EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ujjain EPF & ESIC Compliance | Vikram Udyogpuri",
    description:
      "High-risk PF & ESIC compliance for Ujjain Smart City, pharma and food processing units.",
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
          Ujjain EPF & ESIC Compliance: Vikram Udyogpuri Smart City PE Liability, EEC-2025 & ESIC Amnesty 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Ujjain industrial units, Vikram Udyogpuri Smart City investors and MSMEs under RO Ujjain."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ujjain-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Ujjain EPF & ESIC Compliance | Vikram Udyogpuri Smart City"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Ujjain DMIC node, medical devices park and traditional industrial clusters."
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
        id="schema-ujjain"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ujjain EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Vikram Udyogpuri & Ujjain Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ujjain-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Ujjain’s Vikram Udyogpuri Smart City, medical device park, pharma, food processing and chemical units governed by RO Ujjain.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Ujjain District" },
              { "@type": "Place", name: "Vikram Udyogpuri" },
              { "@type": "Place", name: "Nagda" },
              { "@type": "Place", name: "Maksi Road Industrial Area" },
              { "@type": "Place", name: "Bharatpuri" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "72",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUjjainDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUjjainDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUjjainDistrict} />
    </>
  );
};

export default page;
