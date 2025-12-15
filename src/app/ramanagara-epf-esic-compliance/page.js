import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataRamanagaraDist,
  sectionsRamanagaraDist,
  faqRamanagara,
} from "@/utils/data";

export const metadata = {
  title:
    "Ramanagara EPF & ESIC Compliance for Bidadi Auto Cluster, Silk Sericulture & Harohalli Factories | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Bidadi Toyota/Coca-Cola contractors, Silk Reeling units, Channapatna toy MSMEs, and Harohalli industries. Specialized in NWC wage rules and PE liability.",
  alternates: {
    canonical: "https://epfdesk.com/ramanagara-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ramanagara EPF & ESIC Compliance | Bidadi Auto Cluster • Sericulture • Harohalli MSMEs",
    description:
      "PF & ESIC specialists for Toyota vendors, silk reeling units, Channapatna toy makers and Harohalli manufacturing units.",
    url: "https://epfdesk.com/ramanagara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ramanagara PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ramanagara EPF & ESIC Compliance | Bidadi Auto • Sericulture • MSMEs",
    description:
      "PF & ESIC experts for Toyota/Coca-Cola contractors, Silk Reeling units, Harohalli industrial workers and resort sector labour.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Ramanagara EPF & ESIC Compliance for Bidadi Auto Cluster, Silk
          Sericulture & Harohalli Factories | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF/ESIC compliance for Bidadi Toyota/Coca-Cola vendors, Silk Sericulture workers, Channapatna toy units, Harohalli MSMEs and resort/hospitality labour."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ramanagara-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Ramanagara EPF & ESIC Compliance | Bidadi Auto Cluster • Sericulture • Harohalli MSMEs"
        />
        <meta
          property="og:description"
          content="PF & ESIC consultants for Bidadi OEM contractors, Silk reeling/piece-rate workers, Harohalli MSMEs and resort staff."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      <Script
        id="schema-ramanagara"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ramanagara EPF & ESIC Compliance | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Bidadi Auto Cluster, Silk Sericulture & Harohalli Factories",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ramanagara-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Bidadi",
              addressRegion: "Karnataka",
              postalCode: "562109",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.7969,
              longitude: 77.3996,
            },

            description:
              "PF & ESIC compliance for Toyota contractors, silk reeling units, Channapatna toy manufacturers, Harohalli MSMEs and resort staff in Ramanagara district.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Ramanagara" },
              { "@type": "City", name: "Bidadi" },
              { "@type": "City", name: "Channapatna" },
              { "@type": "City", name: "Kanakapura" },
              { "@type": "City", name: "Harohalli" },
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
        <PerformanceSectionIndustry data={heroDataRamanagaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRamanagaraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRamanagara} />
    </>
  );
};

export default page;
