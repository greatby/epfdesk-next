import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataChikkamagaluruDist,
  sectionsChikkamagaluruDist,
  faqChikkamagaluru,
} from "@/utils/data";

export const metadata = {
  title:
    "Chikkamagaluru EPF & ESIC Compliance for Coffee Plantations, Resorts & Agro-Units | EPFDesk",
  description:
    "Expert PF & ESIC defense for Coffee Estates, seasonal harvesting workers, resorts/homestays, and agro-processing units in Chikkamagaluru. Specialists in PF plantation rules and ESIC hospitality compliance.",
  keywords: [
    "Chikkamagaluru PF consultant",
    "Coffee plantation PF compliance",
    "Resort ESIC Karnataka",
    "EPFDesk Chikkamagaluru",
  ],
  alternates: {
    canonical: "https://epfdesk.com/chikkamagaluru-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chikkamagaluru EPF & ESIC Compliance | Coffee Estates & Tourism Sector | EPFDesk",
    description:
      "PF/ESIC specialists for Coffee Estates, seasonal labor, resorts, hotels, and agro-processing units in Chikkamagaluru.",
    url: "https://epfdesk.com/chikkamagaluru-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Chikkamagaluru PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chikkamagaluru EPF & ESIC Compliance | Coffee Plantations & Resorts",
    description:
      "PF/ESI experts for plantation owners, resorts, homestays, and agro-processing industries.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Chikkamagaluru EPF & ESIC Compliance for Coffee Plantations, Resorts & Agro-Units | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance support for Coffee Plantations, seasonal harvesting labor, resorts, hotels, and agro-processing units in Chikkamagaluru. Specialists in PF plantation rules & ESIC hospitality law."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chikkamagaluru-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chikkamagaluru EPF & ESIC Compliance | Coffee Estates & Tourism Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF for plantation workers, ESIC for resorts/hotels, and wage audits for agro-units."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-chikkamagaluru"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chikkamagaluru EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Coffee Estates, Resorts & Agro-Processing Units in Chikkamagaluru",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chikkamagaluru-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Chikkamagaluru",
              addressRegion: "Karnataka",
              postalCode: "577101",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 13.3152,
              longitude: 75.7735,
            },

            description:
              "Specialized PF & ESIC compliance services for Coffee Plantations, Resorts, Homestays, and Agro-Processing Units in Chikkamagaluru.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Chikkamagaluru" },
              { "@type": "City", name: "Mudigere" },
              { "@type": "City", name: "Koppa" },
              { "@type": "City", name: "Aldur" },
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
              reviewCount: "62",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChikkamagaluruDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChikkamagaluruDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChikkamagaluru} />
    </>
  );
};

export default page;
