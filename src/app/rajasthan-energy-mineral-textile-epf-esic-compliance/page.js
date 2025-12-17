import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRajasthanThrustZones,
  sectionsRajasthanThrustZones,
  faqRajasthanThrustZones,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Jodhpur Solar Hub, Balotra Refinery & Udaipur Mineral Audits | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Rajasthan’s energy and mineral hubs. Navigate RO Jodhpur/Udaipur audits, Balotra HRRL refinery PE liability and Bhilwara textile EEC-2025 amnesty.",
  keywords: [
    "Jodhpur EPF consultant",
    "Balotra refinery PF compliance",
    "Udaipur mining ESIC",
    "Bhilwara textile PF audit",
    "RO Jodhpur EPF 7A defense",
    "RO Udaipur ESIC compliance",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Energy, Mineral & Textile Hubs",
    description:
      "PF & ESIC specialists for Jodhpur solar parks, Balotra refinery, Udaipur mining belt and Bhilwara textiles.",
    url: "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rajasthan EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan EPF & ESIC Compliance | Energy & Textile Thrust Zones",
    description:
      "High-risk PF & ESIC compliance for Rajasthan’s refinery, mining and textile clusters.",
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
          Rajasthan EPF & ESIC Compliance 2025: Jodhpur Solar Hub, Balotra Refinery & Udaipur Mineral Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Jodhpur solar parks, Balotra HRRL refinery contractors, Udaipur mining units and Bhilwara textile mills."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Rajasthan EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Rajasthan’s energy, mineral and textile thrust zones."
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
        id="schema-rajasthan-thrust-zones"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Rajasthan EPF & ESIC Compliance – Energy, Mineral & Textile Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Jodhpur, Balotra, Udaipur & Bhilwara",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Rajasthan’s refinery, solar, mining and textile clusters governed by RO Jodhpur and RO Udaipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jodhpur District" },
              { "@type": "AdministrativeArea", name: "Balotra District" },
              { "@type": "AdministrativeArea", name: "Udaipur District" },
              { "@type": "AdministrativeArea", name: "Bhilwara District" },
              { "@type": "Place", name: "Pachpadra Refinery (HRRL)" },
              { "@type": "Place", name: "Phalodi" },
              { "@type": "Place", name: "Rajsamand" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "82",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRajasthanThrustZones} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRajasthanThrustZones} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRajasthanThrustZones} />
    </>
  );
};

export default page;
