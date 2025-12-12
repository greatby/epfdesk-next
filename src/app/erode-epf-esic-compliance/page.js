import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataErodeDist, sectionsErodeDist } from "@/utils/data";
export const metadata = {
  title:
    "Erode EPF & ESIC Consultant: NWC 2025 for Powerloom, Processing Mills & Handloom Cooperatives | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance for Erode’s decentralized textile ecosystem including powerloom clusters, handloom cooperatives, processing mills, and yarn dyeing units. We support NWC 2025 wage formalization, cooperative society compliance, contractor verification, and monthly PF/ESI management.",
  keywords: [
    "Erode PF consultant",
    "Erode ESIC consultant",
    "powerloom PF ESIC compliance",
    "handloom cooperative PF compliance",
    "textile processing mills ESIC",
    "Erode weaving industry PF",
    "NWC 2025 textile compliance",
    "contractor compliance Erode",
    "yarn dyeing unit PF ESIC",
    "EPFDesk Erode",
  ],
  alternates: {
    canonical: "https://epfdesk.com/erode-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Erode EPF & ESIC Consultant | Powerloom, Handloom & Textile Processing Compliance | EPFDesk",
    description:
      "Specialized PF & ESIC compliance for Erode’s powerloom clusters, handloom cooperatives, textile processing mills, and yarn dyeing units. NWC 2025 wage structuring and contractor verification services.",
    url: "https://epfdesk.com/erode-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Erode PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Erode EPF & ESIC Consultant | Powerloom, Handloom & Textile Sector Compliance | EPFDesk",
    description:
      "PF & ESIC solutions for Erode’s textile value chain — powerloom, handloom cooperatives, processing mills, and dyeing units. NWC 2025 wage formalization and statutory compliance support.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Erode EPF & ESIC Consultant: NWC 2025 for Powerloom, Processing Mills
          & Handloom Cooperatives | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk delivers PF & ESIC compliance services for Erode's powerloom clusters, handloom cooperatives, textile processing mills, and yarn dyeing units. NWC 2025 wage formalization, contractor verification, cooperative compliance, and full monthly statutory management."
        />

        <meta
          name="keywords"
          content="Erode PF consultant, Erode ESIC consultant, powerloom PF ESIC, handloom cooperative PF compliance, textile processing mills ESIC, yarn dyeing PF compliance, NWC 2025 wage formalization, contractor compliance Erode, weaving industry PF, EPFDesk Erode"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/erode-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Erode EPF & ESIC Consultant | Powerloom, Handloom & Textile Sector Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Erode's powerloom clusters, handloom cooperatives, textile processing mills, and dyeing units. NWC 2025 structuring and contractor verification services."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/erode-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Erode EPF & ESIC Consultant | Powerloom, Handloom & Textile Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for Erode’s weaving, processing, and textile cooperative ecosystem. Expert NWC 2025 and statutory support."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-erode"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Erode EPF & ESIC Consultant: NWC 2025 for Powerloom, Processing Mills & Handloom Cooperatives | EPFDesk",
            alternateName:
              "EPFDesk – Erode Powerloom & Textile Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/erode-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address for all city schemas
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
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "EPFDesk delivers EPF and ESIC compliance services for Erode’s powerloom, handloom, and textile processing ecosystem. We offer NWC 2025 wage formalization for weavers, statutory compliance for cooperative societies, contractor verification, and complete monthly PF/ESI management for decentralized textile units.",

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
              { "@type": "City", name: "Erode" },
              { "@type": "Place", name: "Powerloom Clusters" },
              { "@type": "Place", name: "Textile Processing Mills" },
              { "@type": "Place", name: "Handloom Cooperatives" },
              { "@type": "Place", name: "Yarn Dyeing Units" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "47",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataErodeDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsErodeDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
