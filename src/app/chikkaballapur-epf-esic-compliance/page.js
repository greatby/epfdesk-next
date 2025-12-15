import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataChikkaballapurDist,
  sectionsChikkaballapurDist,
  faqChikkaballapur,
} from "@/utils/data";

export const metadata = {
  title:
    "Chikkaballapur EPF & ESIC Compliance for Pharma SEZ, Garments, Sericulture & Agro-Units | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Garment Factories, Sericulture Units, Seasonal Agro Processing and the new Pharma SEZ in Chikkaballapur.",
  keywords: [
    "Chikkaballapur PF ESIC consultant",
    "Pharma SEZ PF registration",
    "Garment factory ESIC",
    "Sericulture PF compliance",
  ],
  alternates: {
    canonical: "https://epfdesk.com/chikkaballapur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chikkaballapur EPF & ESIC Compliance | Pharma SEZ • Garments • Sericulture",
    description:
      "PF & ESIC specialists for Pharma SEZ units, Garment factories, Sericulture, and seasonal agro-labor in Chikkaballapur.",
    url: "https://epfdesk.com/chikkaballapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chikkaballapur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chikkaballapur EPF & ESIC Compliance | Pharma • Garments • Sericulture",
    description:
      "PF & ESIC experts for Pharma SEZ, Garment factories, and Sericulture MSMEs.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Chikkaballapur EPF & ESIC Compliance for Pharma SEZ, Garments, Sericulture & Agro-Units | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF/ESIC compliance for Pharma SEZ, Garment and Sericulture industries in Chikkaballapur. PF for seasonal agro-labor and ESIC for piece-rate workers."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chikkaballapur-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chikkaballapur EPF & ESIC Compliance | Pharma SEZ, Garments & Sericulture"
        />
        <meta
          property="og:description"
          content="PF & ESIC consultants for Pharma SEZ units, Garment factories, Silk weaving and seasonal agro-processing sectors in Chikkaballapur."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-chikkaballapur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chikkaballapur EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Pharma SEZ, Garments & Sericulture",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chikkaballapur-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Chikkaballapur",
              addressRegion: "Karnataka",
              postalCode: "562101",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 13.436,
              longitude: 77.731,
            },

            description:
              "PF & ESIC compliance for Pharma SEZ units, Garment Factories, Sericulture MSMEs, and seasonal agro-processing units in Chikkaballapur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Chintamani" },
              { "@type": "City", name: "Sidlaghatta" },
              { "@type": "City", name: "Gowribidanur" },
              { "@type": "City", name: "Bagepalli" },
              { "@type": "City", name: "Gudibande" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "64",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChikkaballapurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChikkaballapurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChikkaballapur} />
    </>
  );
};

export default page;
