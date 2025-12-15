import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataBagalkotDist,
  sectionsBagalkotDist,
  faqBagalkot,
} from "@/utils/data";

export const metadata = {
  title:
    "Bagalkot EPF & ESIC Compliance for Sugar Mills, Cement Plants & Seasonal Factory Workers | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Bagalkot Sugar Factories, Cement Plants & Agro-Processing Units. Specialists in PF for seasonal labor, ESIC for hazardous industries, and Principal Employer liability.",
  keywords: [
    "Bagalkot PF consultant",
    "Bagalkot ESIC consultant",
    "Sugar mill PF Karnataka",
    "Cement plant PF ESIC Bagalkot",
    "PF on seasonal workers",
    "EPFDesk Bagalkot",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bagalkot-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bagalkot EPF & ESIC Compliance | Sugar Mills, Cement & Agro-Processing | EPFDesk",
    description:
      "PF/ESI experts for Bagalkot’s Sugar Mills, Cement Plants and Seasonal Factory Workforce.",
    url: "https://epfdesk.com/bagalkot-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Bagalkot PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bagalkot EPF & ESIC Compliance | Sugar Mills & Cement Plants | EPFDesk",
    description:
      "PF/ESIC compliance management for Bagalkot’s Agro & Heavy Industries.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bagalkot EPF & ESIC Compliance for Sugar Mills, Cement Plants & Agro-Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC compliance for Bagalkot Sugar Mills, Cement Plants & Agro-Processing Units. Specialists in PF for seasonal labor, ESIC for hazardous operations, and PE liability."
        />

        <meta
          name="keywords"
          content="Bagalkot PF ESIC, Sugar Mill PF Karnataka, Cement PF ESIC compliance, Seasonal PF consultant Bagalkot"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bagalkot-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bagalkot EPF & ESIC Compliance | Sugar Mills, Cement & Agro MSMEs"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Bagalkot’s Sugar Mills, Cement Plants and seasonal factory workers."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/bagalkot-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bagalkot EPF & ESIC Compliance | Sugar & Cement Sector"
        />
        <meta
          name="twitter:description"
          content="PF/ESIC compliance for Bagalkot’s Sugar Mills, Cement Plants & MSMEs."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-bagalkot"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bagalkot EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Bagalkot PF ESIC Consultants for Sugar Mills & Cement Plants",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bagalkot-epf-esic-compliance",
            telephone: "+91-9945933333",

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
              latitude: 16.1723,
              longitude: 75.6557,
            },

            description:
              "EPFDesk provides PF & ESIC compliance management for Bagalkot’s Sugar Mills, Cement Plants and Agro-Processing Units. Specialists in seasonal PF liability, ESIC for hazardous industries, and PE liability.",

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

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Bagalkot" },
              { "@type": "Place", name: "Jamakhandi" },
              { "@type": "Place", name: "Ilkal" },
              { "@type": "Place", name: "Badami" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "41",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBagalkotDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBagalkotDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBagalkot} />
    </>
  );
};

export default page;
