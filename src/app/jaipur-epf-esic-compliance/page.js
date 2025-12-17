import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJaipurDistrict,
  sectionsJaipurDistrict,
  faqJaipurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Jaipur EPF & ESIC Compliance: Gem & Jewellery PF, IT Park PE Liability & RO Jaipur Audits 2025 | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Jaipur gem exporters, Mahindra World City IT firms and RIICO MSMEs. Navigate RO Jaipur audits, EEC-2025 amnesty and New Labour Code wage compliance.",
  keywords: [
    "Jaipur PF consultant",
    "EPF ESIC compliance Jaipur",
    "Gem jewellery PF audit Jaipur",
    "Mahindra World City ESIC",
    "RO Jaipur EPF 7A defense",
    "EEC 2025 EPF Jaipur",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jaipur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jaipur EPF & ESIC Compliance | Gem, IT & Handicraft Hub",
    description:
      "PF & ESIC specialists for Jaipur gem exporters, IT parks and handicraft clusters.",
    url: "https://epfdesk.com/jaipur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jaipur EPF & ESIC Compliance | Gems, IT & MSMEs",
    description:
      "High-risk PF & ESIC compliance for Jaipur gem, IT and textile clusters.",
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
          Jaipur EPF & ESIC Compliance: Gem & Jewellery PF, IT Park PE Liability & RO Jaipur Audits 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Jaipur gem exporters, Mahindra World City IT firms and RIICO MSMEs."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jaipur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Jaipur EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Jaipur gem, IT and handicraft industries."
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
        id="schema-jaipur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Jaipur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Jaipur Gem, IT & Handicraft Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jaipur-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Jaipur gem & jewellery exporters, Mahindra World City IT firms, and traditional handicraft clusters governed by RO Jaipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jaipur District" },
              { "@type": "Place", name: "Mahindra World City" },
              { "@type": "Place", name: "Sitapura" },
              { "@type": "Place", name: "VKI Industrial Area" },
              { "@type": "Place", name: "Sanganer" },
              { "@type": "Place", name: "Bagru" },
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
        <PerformanceSectionIndustry data={heroDataJaipurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJaipurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJaipurDistrict} />
    </>
  );
};

export default page;
