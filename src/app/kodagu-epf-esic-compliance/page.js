import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataKodaguDist,
  sectionsKodaguDist,
  faqKodagu,
} from "@/utils/data";

export const metadata = {
  title:
    "Kodagu EPF & ESIC Compliance for Coffee Plantations, Resorts & Madikeri Tourism | EPFDesk",
  description:
    "Expert PF & ESIC defense for Kodagu Coffee Estates, seasonal harvesting workers, resorts, homestays, and hotels. Specialists in PF plantation rules and ESIC hospitality compliance.",
  keywords: [
    "Kodagu PF consultant",
    "Coorg plantation PF compliance",
    "ESIC for Madikeri resorts",
    "EPFDesk Kodagu",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kodagu-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kodagu EPF & ESIC Compliance | Coffee Estates & Tourism Sector | EPFDesk",
    description:
      "PF/ESIC specialists for Coffee Estates, seasonal labor, resorts, hotels, and agro-processing units in Kodagu.",
    url: "https://epfdesk.com/kodagu-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kodagu PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kodagu EPF & ESIC Compliance | Coffee Plantations & Resorts | EPFDesk",
    description:
      "PF/ESI experts for coffee estate owners, homestays, hotels, and agro-units in Kodagu district.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kodagu EPF & ESIC Compliance for Coffee Plantations, Resorts & Madikeri Tourism | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance support for Coffee Plantations, seasonal labor, resorts, hotels, and agro-processing units in Kodagu. Specialists in PF plantation rules & ESIC hospitality mandates."
        />

        <link rel="canonical" href="https://epfdesk.com/kodagu-epf-esic-compliance" />

        <meta
          property="og:title"
          content="Kodagu EPF & ESIC Compliance | Coffee Estates & Tourism Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF for plantation workers, ESIC for resorts/hotels, and wage audits for agro-units in Kodagu."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-kodagu"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kodagu EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Coffee Estates, Resorts & Homestays in Kodagu",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kodagu-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Kodagu",
              addressRegion: "Karnataka",
              postalCode: "571201",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.3375,
              longitude: 75.8069,
            },

            description:
              "Specialized PF & ESIC compliance services for Coffee Plantations, Resorts, Homestays, and Agro-Units in Kodagu district.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Madikeri" },
              { "@type": "City", name: "Virajpet" },
              { "@type": "City", name: "Kushalnagar" },
              { "@type": "City", name: "Somwarpet" },
            ],

            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "58",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKodaguDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKodaguDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKodagu} />
    </>
  );
};

export default page;
