import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataHaveriDist,
  sectionsHaveriDist,
  faqHaveri,
} from "@/utils/data";

export const metadata = {
  title:
    "Haveri EPF & ESIC Compliance for Textile Mills, Cotton Ginning & Seasonal Agro-Processing | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Haveri’s textile mills, cotton ginning units and agro-processing industries. Specialists in PF for piece-rate workers, ESIC for seasonal labor and NWC 2025 wage definition compliance.",
  keywords: [
    "Haveri PF consultant",
    "Haveri ESIC consultant",
    "Textile mill PF ESIC",
    "cotton ginning PF ESIC",
    "PF on piece-rate wages",
    "seasonal worker PF ESI Karnataka",
    "Haveri agro-processing compliance",
    "EPFDesk Haveri",
  ],
  alternates: {
    canonical: "https://epfdesk.com/haveri-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Haveri EPF & ESIC Consultant | Textile Mills, Cotton Ginning & Agro-Processing | EPFDesk",
    description:
      "PF & ESIC compliance for Haveri’s textile and agro-industrial sector, including piece-rate wages, seasonal ESIC obligations and NWC 2025 implementation.",
    url: "https://epfdesk.com/haveri-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Haveri PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Haveri EPF & ESIC Compliance | Textile, Ginning & Agro-Processing | EPFDesk",
    description:
      "PF/ESI solutions for textile mills, cotton ginning units and seasonal agro-processing industries in Haveri.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Haveri EPF & ESIC Compliance for Textile Mills, Cotton Ginning &
          Agro-Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Haveri’s seasonal and piece-rate industries: textile mills, cotton ginning units and agro-processing mills."
        />

        <meta
          name="keywords"
          content="Haveri PF ESIC, cotton ginning PF, textile mill piece-rate PF, agro-processing ESIC Karnataka, Haveri labour compliance"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/haveri-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Haveri EPF & ESIC Consultant | Textile, Ginning & Agro-Processing | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Haveri’s textile, ginning and agro-processing sectors."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/haveri-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haveri PF & ESIC Compliance | Textile & Agro Industry | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF/ESI solutions for Haveri’s seasonal workforce, piece-rate wage structures and textile compliance risks."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-haveri"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Haveri EPF & ESIC Compliance | Textile, Cotton Ginning & Agro-Processing | EPFDesk",
            alternateName:
              "EPFDesk – Haveri PF ESIC Consultants for Textiles & Agro Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/haveri-epf-esic-compliance",
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
              latitude: 14.7951,
              longitude: 75.3975,
            },

            description:
              "Haveri’s textile mills, cotton ginning units and agro-processing industries require strict PF/ESI compliance for seasonal and piece-rate workers. EPFDesk specializes in NWC wage alignment, PF audits and ESIC seasonal coverage.",
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
              { "@type": "City", name: "Haveri" },
              { "@type": "Place", name: "Cotton Ginning Cluster" },
              { "@type": "Place", name: "Textile Mills" },
              { "@type": "Place", name: "Agro-Processing Units" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "42",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaveriDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaveriDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHaveri} />
    </>
  );
};

export default page;
