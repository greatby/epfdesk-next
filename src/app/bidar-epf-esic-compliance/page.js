import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataBidarDist,
  sectionsBidarDist,
  faqBidar,
} from "@/utils/data";

export const metadata = {
  title:
    "Bidar EPF & ESIC Compliance for Sugar Mills, Garments, Pulses & Kalyana Karnataka Industries | EPFDesk",
  description:
    "Expert PF & ESIC defense for Bidar Sugar Factories, Textile/Garment MSMEs, and Agro-Processing units. Specialists in PF for seasonal crushing labor and ESIC enforcement for garment sector.",
  keywords: [
    "Bidar PF consultant",
    "Bidar ESIC consultant",
    "Sugar mill PF ESIC Karnataka",
    "garment factory PF ESIC Bidar",
    "dal mill PF inspection",
    "EPFDesk Karnataka",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bidar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bidar EPF & ESIC Consultant | Sugar Mills, Garments & Agro-Processing | EPFDesk",
    description:
      "PF & ESIC experts for Bidar’s sugar factories, garment MSMEs, and agro-processing units.",
    url: "https://epfdesk.com/bidar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Bidar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bidar EPF & ESIC Compliance | Sugar Mills, Garments & Agro-Processing | EPFDesk",
    description:
      "PF/ESI compliance for Bidar’s sugar factories, garment MSMEs and agro-processing units.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bidar EPF & ESIC Compliance for Sugar Mills, Garments & Agro-Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC compliance for Bidar sugar factories, garment MSMEs, and agro-processing mills. Specialists in PF for seasonal crushing labor and strict ESIC enforcement."
        />

        <meta
          name="keywords"
          content="Bidar PF ESIC, sugar mill PF Karnataka, garment factory PF ESIC Bidar, agro-processing PF ESIC, seasonal labor PF compliance Bidar"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bidar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bidar EPF & ESIC Consultant | Sugar Mills, Garments & Agro-Processing"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance specialists for Bidar’s sugar mills, garment units and agro-processing sector."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/bidar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bidar PF & ESIC Compliance | Sugar Mills, Garments & Agro-Processing"
        />
        <meta
          name="twitter:description"
          content="Expert PF & ESIC setup, audits and compliance for Bidar industries."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-bidar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bidar EPF & ESIC Compliance | Sugar, Garments & Agro-Processing | EPFDesk",
            alternateName:
              "EPFDesk – Bidar PF ESIC Consultants for Sugar Mills & Textile MSMEs",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bidar-epf-esic-compliance",
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
              latitude: 17.9149,
              longitude: 77.5040,
            },

            description:
              "EPFDesk provides audit-ready PF & ESIC compliance for Bidar sugar mills, garment MSMEs, dal mills, wineries and agro-processing units. Specialists in seasonal worker compliance and PF wage audits.",

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
              { "@type": "City", name: "Bidar" },
              { "@type": "Place", name: "Humnabad" },
              { "@type": "Place", name: "Aurad" },
              { "@type": "Place", name: "Kalyana Karnataka Region" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "37",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBidarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBidarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBidar} />
    </>
  );
};

export default page;
