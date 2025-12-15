import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataChitradurgaDist,
  sectionsChitradurgaDist,
  faqChitradurga,
} from "@/utils/data";

export const metadata = {
  title:
    "Chitradurga EPF & ESIC Compliance for Solar/Wind Projects, DRDO Contractors & Agro-Mills | EPFDesk",
  description:
    "Expert PF & ESIC defense for Chitradurga Solar/Wind Farm contractors and DRDO ancillary units. Specialists in PF for CLRA workers, BOCW Cess compliance, and ESIC for agro-processing MSMEs.",
  keywords: [
    "Chitradurga PF consultant",
    "Solar project ESIC compliance",
    "DRDO ATR PF ESI",
    "EPFDesk Chitradurga",
  ],
  alternates: {
    canonical: "https://epfdesk.com/chitradurga-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chitradurga EPF & ESIC Compliance | Renewable Energy & DRDO Sector | EPFDesk",
    description:
      "PF/ESIC specialists for Solar/Wind EPC contractors, DRDO ATR ancillary units, and agro-processing MSMEs.",
    url: "https://epfdesk.com/chitradurga-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Chitradurga PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chitradurga EPF & ESIC Compliance | Renewable Energy & DRDO Contractors",
    description:
      "Expert PF/ESI compliance for Solar/Wind projects, DRDO ATR contractors, and agro-processing units in Chitradurga.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Chitradurga EPF & ESIC Compliance for Solar/Wind Projects, DRDO Contractors & Agro-Mills | EPFDesk
        </title>

        <meta
          name="description"
          content="Specialized PF & ESIC compliance support for Solar/Wind EPC contractors, DRDO ancillary units, and agro-processing MSMEs in Chitradurga. Experts in BOCW Cess and PF wage audits."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chitradurga-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chitradurga EPF & ESIC Compliance | Renewable Energy & DRDO"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for EPC contractors in Solar/Wind projects, DRDO ATR, and agro-units across Chitradurga."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-chitradurga"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chitradurga EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Renewable Energy, DRDO Contractors & Agro-Processing Units in Chitradurga",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chitradurga-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Chitradurga",
              addressRegion: "Karnataka",
              postalCode: "577501",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 14.2251,
              longitude: 76.398,
            },

            description:
              "PF & ESIC compliance advisory for Solar/Wind EPC contractors, DRDO ATR vendors, agro-processing units and engineering MSMEs in Chitradurga.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Chitradurga" },
              { "@type": "City", name: "Challakere" },
              { "@type": "City", name: "Hiriyur" },
              { "@type": "City", name: "Hosadurga" },
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
              reviewCount: "57",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChitradurgaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChitradurgaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChitradurga} />
    </>
  );
};

export default page;
