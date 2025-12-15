import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataGadagDist,
  sectionsGadagDist,
  faqGadag,
} from "@/utils/data";

export const metadata = {
  title:
    "Gadag EPF & ESIC Compliance for Cotton Ginning Mills, Textiles & Agro-Processing MSMEs | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Gadag’s Cotton Ginning Mills, Textile Units, and Agro-Processing MSMEs. Specialists in PF on piece-rate wages, ESIC for seasonal ginning workers, and NWC wage rules.",
  keywords: [
    "Gadag PF consultant",
    "Gadag ESIC consultant",
    "Cotton ginning PF Karnataka",
    "Textile PF ESIC Gadag",
    "PF on piece-rate wages Gadag",
    "EPFDesk Gadag",
  ],
  alternates: {
    canonical: "https://epfdesk.com/gadag-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Gadag EPF & ESIC Compliance | Cotton Ginning, Textiles & Agro MSMEs | EPFDesk",
    description:
      "PF/ESI experts for Gadag’s Cotton Ginning, Textile Mills, and Agro-Processing units.",
    url: "https://epfdesk.com/gadag-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Gadag PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gadag EPF & ESIC Compliance | Cotton, Textiles & Agro-Processing | EPFDesk",
    description:
      "PF/ESIC compliance for Gadag’s Ginning Mills, Spinning Units & MSMEs.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Gadag EPF & ESIC Compliance for Cotton Ginning Mills, Textiles & Agro-Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC compliance for Gadag Ginning Mills, Textile Units & Agro-Processing MSMEs. Specialists in PF for piece-rate workers, seasonal ginning labour ESIC, and NWC wage rules."
        />

        <meta
          name="keywords"
          content="Gadag PF ESIC, Cotton Ginning PF Karnataka, Textile PF ESIC compliance, MSME PF consultant Gadag"
        />

        <link rel="canonical" href="https://epfdesk.com/gadag-epf-esic-compliance" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Gadag EPF & ESIC Compliance | Cotton Ginning, Textiles & Agro MSMEs"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Gadag’s Cotton Ginning, Spinning, and Agro-Processing units."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta property="og:url" content="https://epfdesk.com/gadag-epf-esic-compliance" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gadag EPF & ESIC Compliance | Cotton Ginning & Textiles"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance management for Gadag’s mills & MSMEs."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-gadag"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Gadag EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Gadag PF ESIC Consultants for Cotton Ginning & Textiles",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/gadag-epf-esic-compliance",
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
              latitude: 15.4314,
              longitude: 75.6360,
            },

            description:
              "EPFDesk provides PF & ESIC compliance management for Gadag’s Cotton Ginning Mills, Textile Units, Oil Mills and MSME clusters, specializing in piece-rate wage PF & seasonal ESIC requirements.",

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
              { "@type": "City", name: "Gadag" },
              { "@type": "Place", name: "Mulgund" },
              { "@type": "Place", name: "Laxmeshwar" },
              { "@type": "Place", name: "Naragund" },
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
        <PerformanceSectionIndustry data={heroDataGadagDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGadagDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGadag} />
    </>
  );
};

export default page;
