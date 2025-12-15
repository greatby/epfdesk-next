import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataUttaraKannadaDist,
  sectionsUttaraKannadaDist,
  faqUttaraKannada,
} from "@/utils/data";

export const metadata = {
  title:
    "Uttara Kannada EPF & ESIC Compliance for Kaiga Power, Dandeli Paper Mill & Naval Contractors | EPFDesk",
  description:
    "Expert PF & ESIC defense for Kaiga/Nuclear contractors, Naval Base vendors, West Coast Paper Mill, and Arecanut Plantation employers in Uttara Kannada.",
  keywords: [
    "Kaiga PF compliance",
    "Naval Base Karwar ESIC",
    "Dandeli Paper Mill PF ESIC",
    "Uttara Kannada labour law consultant",
  ],
  alternates: {
    canonical: "https://epfdesk.com/uttara-kannada-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Uttara Kannada EPF & ESIC Compliance | Kaiga, Naval Base & Paper Mill",
    description:
      "PF & ESIC specialist compliance for Kaiga Power Station, INS Kadamba Contractors, Paper Mills and Arecanut Plantations.",
    url: "https://epfdesk.com/uttara-kannada-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Uttara Kannada PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Uttara Kannada EPF & ESIC Compliance | Kaiga • Naval Base • Paper Mill",
    description:
      "PF & ESIC experts for Strategic Project contractors, Paper Mills, Heavy Industry & Plantations.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Uttara Kannada EPF & ESIC Compliance for Kaiga Power, Dandeli Paper Mill & Naval Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="Kaiga & Naval Base contractor PF/ESI compliance, hazardous industry ESIC for Dandeli Paper Mill, and Arecanut Plantation PF rules for Uttara Kannada."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/uttara-kannada-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Uttara Kannada EPF & ESIC Compliance | Kaiga, Naval Base & Paper Mill"
        />
        <meta
          property="og:description"
          content="PF & ESIC consultants for Kaiga Power Station, INS Kadamba contractors, West Coast Paper Mill and Arecanut Plantations."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-uttarakannada"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Uttara Kannada EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Kaiga, Naval Base & Dandeli Industry",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/uttara-kannada-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Karwar",
              addressRegion: "Karnataka",
              postalCode: "581301",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 14.813,
              longitude: 74.129,
            },

            description:
              "PF & ESIC compliance for Kaiga Power Station contractors, Naval Base vendors, Dandeli Paper Mills, and Arecanut Plantations in Uttara Kannada.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Karwar" },
              { "@type": "City", name: "Dandeli" },
              { "@type": "City", name: "Ankola" },
              { "@type": "City", name: "Sirsi" },
              { "@type": "City", name: "Siddapur" },
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
        <PerformanceSectionIndustry data={heroDataUttaraKannadaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUttaraKannadaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUttaraKannada} />
    </>
  );
};

export default page;
