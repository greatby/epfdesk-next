import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNagpurDistrict,
  sectionsNagpurDistrict,
  faqNagpurDistrict,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Nagpur EPF & ESIC Compliance for MIHAN SEZ, Butibori MIDC & Vidarbha Industrial Hubs | EPFDesk",
  description:
    "Expert EPF & ESIC defence for MIHAN SEZ IT and aviation contractors, PF liability for Butibori MIDC factories, and mandatory ESIC for hazardous industry workers. Specialists in SEZ compliance and Principal Employer liability.",
  keywords: [
    "Nagpur PF consultant",
    "MIHAN SEZ EPF compliance",
    "Butibori MIDC ESIC registration",
    "Hingna MIDC PF liability",
    "EPFO 7A defence Nagpur",
    "SEZ labour law compliance MIHAN",
  ],
  alternates: {
    canonical: "https://epfdesk.com/nagpur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Nagpur EPF & ESIC Compliance | MIHAN SEZ & MIDC Factories | EPFDesk",
    description:
      "PF & ESIC specialists for Nagpur MIHAN SEZ, Butibori & Hingna MIDC factories, and Vidarbha industrial hubs.",
    url: "https://epfdesk.com/nagpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nagpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nagpur EPF & ESIC Compliance | MIHAN SEZ & Butibori MIDC | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Nagpur MIHAN and MIDC factories.",
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
          Nagpur EPF & ESIC Compliance for MIHAN SEZ, Butibori MIDC & Vidarbha Industrial Hubs | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for MIHAN SEZ contractors, Butibori & Hingna MIDC factories, and hazardous industry ESIC compliance."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/nagpur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Nagpur EPF & ESIC Compliance | MIHAN SEZ & MIDC Factories"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for Nagpur MIHAN SEZ, Butibori MIDC, and Vidarbha industrial clusters."
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
        id="schema-nagpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Nagpur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for MIHAN SEZ & Butibori MIDC",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/nagpur-epf-esic-compliance",
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
              "Expert EPF & ESIC compliance for Nagpur district MIHAN SEZ operations, Butibori and Hingna MIDC factories, and Principal Employer liability management across Vidarbha.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Nagpur District" },
              { "@type": "Place", name: "MIHAN SEZ" },
              { "@type": "Place", name: "Butibori MIDC" },
              { "@type": "Place", name: "Hingna MIDC" },
              { "@type": "Place", name: "Vidarbha Industrial Corridor" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "90",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNagpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNagpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNagpurDistrict} />
    </>
  );
};

export default page;
