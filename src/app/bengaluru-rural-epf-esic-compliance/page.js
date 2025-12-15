import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataBengaluruRuralDist,
  sectionsBengaluruRuralDist,
  faqBengaluruRural,
} from "@/utils/data";

export const metadata = {
  title:
    "Bengaluru Rural EPF & ESIC Compliance for A&D SEZ, Airport Logistics & Warehousing | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Devanahalli A&D contractors, KIA logistics hubs, warehouse staff and outsourced security teams. Specialized in NWC wage rules and PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/bengaluru-rural-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bengaluru Rural EPF & ESIC Compliance | A&D SEZ • Airport Logistics • Warehousing",
    description:
      "PF & ESIC specialists for Aerospace & Defence contractors, logistics parks, SEZ units and warehouse/security staff.",
    url: "https://epfdesk.com/bengaluru-rural-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bengaluru Rural PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bengaluru Rural EPF & ESIC Compliance | A&D • Logistics • Warehousing",
    description:
      "PF & ESIC experts for Aerospace & Defence contractors, Airport logistics hubs, and warehouse/security labour.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bengaluru Rural EPF & ESIC Compliance for A&D SEZ, Airport Logistics & Warehousing | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF/ESIC compliance for A&D SEZ units, KIA logistics hubs, warehouse/security staff, horticulture processing and FMCG distribution in Bengaluru Rural."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bengaluru-rural-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bengaluru Rural EPF & ESIC Compliance | A&D SEZ, Airport Logistics & Warehousing"
        />
        <meta
          property="og:description"
          content="PF & ESIC consultants for Aerospace & Defence contractors, warehouses, logistics hubs and horticulture/floriculture processing units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      <Script
        id="schema-bengalururural"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bengaluru Rural EPF & ESIC Compliance | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for A&D SEZ, Airport Logistics & Warehousing",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bengaluru-rural-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Devanahalli",
              addressRegion: "Karnataka",
              postalCode: "562110",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 13.2472,
              longitude: 77.6952,
            },

            description:
              "PF & ESIC compliance for A&D contractors, logistics hubs, warehouse staff and horticulture processing industries in Bengaluru Rural.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Doddaballapur" },
              { "@type": "City", name: "Nelamangala" },
              { "@type": "City", name: "Hoskote" },
              { "@type": "City", name: "Devanahalli" },
              { "@type": "City", name: "Bidadi" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBengaluruRuralDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBengaluruRuralDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBengaluruRural} />
    </>
  );
};

export default page;
