import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataChamarajanagarDist,
  sectionsChamarajanagarDist,
  faqChamarajanagar,
} from "@/utils/data";

export const metadata = {
  title:
    "Chamarajanagar EPF & ESIC Compliance for Textiles, Turmeric Processing & Kollegal MSMEs | EPFDesk",
  description:
    "Expert PF & ESIC defense for Chamarajanagar Textile Units, Turmeric Processing, and MSMEs in Kollegal/Gundlupet. Specialists in piece-rate PF, agro-labor compliance, and ESIC for remote health institutions.",
  keywords: [
    "Chamarajanagar PF consultant",
    "Kollegal ESIC registration",
    "PF for textile workers Karnataka",
    "EPFDesk Chamarajanagar",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chamarajanagar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chamarajanagar EPF & ESIC Compliance | Textiles & Agro Sector | EPFDesk",
    description:
      "PF/ESIC experts for Textile, Agro-processing, Silk Reeling & Social Sector institutions in Chamarajanagar.",
    url: "https://epfdesk.com/chamarajanagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Chamarajanagar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chamarajanagar EPF & ESIC Compliance | Textiles & Agro-Processing",
    description:
      "Expert PF/ESI compliance for Textile, Silk Weaving, Turmeric Processing and MSMEs in Kollegal & Gundlupet.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Chamarajanagar EPF & ESIC Compliance for Textiles, Turmeric Processing & Kollegal MSMEs | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC defense for Textile Units, Agro-processing, and MSMEs in Chamarajanagar, Kollegal, and Gundlupet. Specialists in PF for piece-rate workers and ESIC for remote health institutions."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chamarajanagar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chamarajanagar EPF & ESIC Compliance | Textile & Agro Sector"
        />
        <meta
          property="og:description"
          content="PF/ESIC specialists for Textile, Silk Weaving, Agro-processing & Social Sector Units in Chamarajanagar."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-chamarajanagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chamarajanagar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultants for Textile, Agro-Processing & MSMEs in Chamarajanagar",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chamarajanagar-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Chamarajanagar",
              addressRegion: "Karnataka",
              postalCode: "571313",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.9231,
              longitude: 76.9395,
            },

            description:
              "PF & ESIC compliance advisory for Textile Units, Turmeric Processing, Silk Reeling & MSMEs in Kollegal and Gundlupet. Specialists in PF for piece-rate workers and ESIC compliance for rural health institutions.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Chamarajanagar" },
              { "@type": "City", name: "Kollegal" },
              { "@type": "City", name: "Gundlupet" },
              { "@type": "Place", name: "Yelandur" },
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
              reviewCount: "42",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChamarajanagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChamarajanagarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChamarajanagar} />
    </>
  );
};

export default page;
