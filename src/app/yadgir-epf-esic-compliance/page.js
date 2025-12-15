import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataYadgirDist,
  sectionsYadgirDist,
  faqYadgir,
} from "@/utils/data";

export const metadata = {
  title:
    "Yadgir EPF & ESIC Compliance for Agro-Processing, Textiles, Cement Ancillaries & MSMEs | EPFDesk",
  description:
    "Expert PF & ESIC compliance support for Yadgir Dal/Cotton Mills, seasonal agro-labor, textile units, and cement ancillary MSMEs. Specialists in PF for piece-rate workers.",
  keywords: [
    "Yadgir PF consultant",
    "Yadgir ESIC registration",
    "Dal mill PF compliance",
    "Cotton ginning PF ESIC Yadgir",
  ],
  alternates: {
    canonical: "https://epfdesk.com/yadgir-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Yadgir EPF & ESIC Compliance | Agro-Processing & MSME Industries | EPFDesk",
    description:
      "PF & ESIC specialists for Dal Mills, Cotton Ginning, Textiles, MSMEs and Cement Ancillaries in Yadgir.",
    url: "https://epfdesk.com/yadgir-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Yadgir PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Yadgir EPF & ESIC Compliance | Agro-Processing, Textiles & MSMEs | EPFDesk",
    description:
      "PF/ESIC experts for seasonal agro-mills, textile workers, and MSME factories in Yadgir.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Yadgir EPF & ESIC Compliance for Agro-Processing, Textiles, Cement Ancillaries & MSMEs | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance support for Dal Mills, Cotton Ginning, Textiles, and MSME units in Yadgir. We specialize in PF for piece-rate and seasonal workers."
        />

        <link rel="canonical" href="https://epfdesk.com/yadgir-epf-esic-compliance" />

        <meta
          property="og:title"
          content="Yadgir EPF & ESIC Compliance | Agro-Processing & MSMEs"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESI for Yadgir Dal Mills, Cotton Ginning, Textile units, Cement suppliers, and KIADB MSMEs."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        id="schema-yadgir"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Yadgir EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Agro-Processing, Textile & MSME Units in Yadgir",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/yadgir-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Yadgir",
              addressRegion: "Karnataka",
              postalCode: "585202",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 16.7702,
              longitude: 77.1376,
            },

            description:
              "Expert PF & ESIC compliance services for Dal Mills, Cotton Ginning, Textiles, Cement Ancillaries & MSMEs in Yadgir.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Yadgir" },
              { "@type": "City", name: "Gurmitkal" },
              { "@type": "City", name: "Surpur" },
              { "@type": "City", name: "Shahapur" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "63",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataYadgirDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsYadgirDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqYadgir} />
    </>
  );
};

export default page;
