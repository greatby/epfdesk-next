import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBBJDT,
  sectionsBBJDT,
  faqBBJDT,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Bundi Agro-Hub, Dausa Industrial Link & RO Kota/Jaipur Audits | EPFDesk",
  description:
    "Expert EPF & ESIC defense for Rajasthan’s south-eastern and central hubs. Navigate RO Kota/Jaipur audits, Bundi rice mill PE liability and Dausa stone EEC-2025 amnesty.",
  keywords: [
    "Bundi PF consultant",
    "Baran EPF ESIC compliance",
    "Jhalawar spice park PF audit",
    "Dausa stone mining ESIC",
    "Tonk leather industry PF",
    "RO Kota EPF 7A defense",
    "RO Jaipur ESIC audits",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Agro, Stone & Central Industrial Zones",
    description:
      "PF & ESIC specialists for Bundi rice mills, Jhalawar spice units, Dausa stone mining and Tonk manufacturing clusters.",
    url:
      "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bundi Dausa EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan EPF & ESIC Compliance | Hadoti & Central Rajasthan",
    description:
      "High-risk PF & ESIC compliance for agro-processing, stone and central industrial clusters.",
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
          Rajasthan EPF & ESIC Compliance 2025: Bundi Agro-Hub, Dausa Industrial Link & RO Kota/Jaipur Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Bundi rice mills, Baran agro units, Jhalawar spice parks, Dausa stone units and Tonk MSMEs."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bundi–Dausa EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Rajasthan’s agro-processing, stone and central industrial sectors."
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
        id="schema-bbjdt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Rajasthan EPF & ESIC Compliance – Agro & Central Industrial Zones | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Bundi, Baran, Jhalawar, Dausa & Tonk",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance",
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
              "EPF & ESIC compliance specialists for Rajasthan’s agro-processing clusters, stone mining belts and central industrial zones governed by RO Kota and RO Jaipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Bundi District" },
              { "@type": "AdministrativeArea", name: "Baran District" },
              { "@type": "AdministrativeArea", name: "Jhalawar District" },
              { "@type": "AdministrativeArea", name: "Dausa District" },
              { "@type": "AdministrativeArea", name: "Tonk District" },
              { "@type": "Place", name: "Ramganj Mandi" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "80",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBBJDT} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBBJDT} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBBJDT} />
    </>
  );
};

export default page;
