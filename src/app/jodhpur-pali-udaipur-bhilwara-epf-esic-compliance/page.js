import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJPUB,
  sectionsJPUB,
  faqJPUB,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Jodhpur Solar, Udaipur Mining & Bhilwara Textile Audits | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Rajasthan’s mining, textile and solar hubs. Navigate RO Jodhpur/Udaipur audits, JPMIA PE liability and Bhilwara textile EEC-2025 amnesty.",
  keywords: [
    "Jodhpur EPF consultant",
    "Pali solar PF compliance",
    "Bhilwara textile ESIC",
    "Udaipur mining EPF audit",
    "RO Jodhpur EPF 7A defense",
    "RO Udaipur ESIC compliance",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Mineral, Textile & Solar Hubs",
    description:
      "PF & ESIC specialists for Jodhpur handicrafts & solar parks, Udaipur mining belt and Bhilwara textiles.",
    url:
      "https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jodhpur Udaipur Bhilwara EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan EPF & ESIC Compliance | Solar, Mining & Textiles",
    description:
      "High-risk PF & ESIC compliance for Rajasthan’s solar, mining and textile clusters.",
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
          Rajasthan EPF & ESIC Compliance 2025: Jodhpur Solar, Udaipur Mining & Bhilwara Textile Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Jodhpur handicraft exporters, Pali solar contractors, Udaipur mining units and Bhilwara textile mills."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Rajasthan EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Rajasthan’s mineral, textile and renewable energy sectors."
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
        id="schema-jpub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Rajasthan EPF & ESIC Compliance – Solar, Mining & Textile Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Jodhpur, Pali, Udaipur & Bhilwara",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Rajasthan’s solar parks, handicraft exporters, mining belts and textile clusters governed by RO Jodhpur and RO Udaipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Jodhpur District" },
              { "@type": "AdministrativeArea", name: "Pali District" },
              { "@type": "AdministrativeArea", name: "Udaipur District" },
              { "@type": "AdministrativeArea", name: "Bhilwara District" },
              { "@type": "Place", name: "JPMIA" },
              { "@type": "Place", name: "Phalodi" },
              { "@type": "Place", name: "Rajsamand" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "85",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJPUB} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJPUB} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJPUB} />
    </>
  );
};

export default page;
