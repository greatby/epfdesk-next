import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTextile, sectionsTextile } from "@/utils/data";
export const metadata = {
  title:
    "Textile & Garments EPF & ESIC Compliance India | Factories, Export Units & Contractors | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for textile and garment manufacturing units across India. Specialized support for spinning, weaving, dyeing, garmenting, and export units including PF/ESI registration, piece-rate wage compliance, contractor labour audits, NWC 2025 payroll structuring, and monthly ECR filings.",

  keywords: [
    "textile EPF compliance India",
    "garment factory PF ESIC",
    "textile labour compliance",
    "piece rate wage EPF compliance",
    "export garment unit PF ESIC",
    "contract labour compliance textile",
    "NWC 2025 textile payroll",
    "PF audit textile industry",
    "ESIC compliance garment workers",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/textile-and-garments-compliance",
  },

  openGraph: {
    title: "Textile & Garments EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for textile mills, garment factories, and export units across India. Piece-rate wage compliance, contractor labour audits, NWC 2025 payroll restructuring, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/textile-and-garments-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Textile and Garments EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Textile & Garments EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for textile mills, garment factories, and export units across India. Contractor compliance, piece-rate wage audits, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Textile & Garments EPF & ESIC Compliance India | Factories, Export
          Units & Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for textile and garment manufacturing units across India. Support includes PF/ESI registration, piece-rate wage compliance, contractor labour audits, NWC 2025 payroll structuring, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="textile EPF compliance India, garment factory PF ESIC, textile labour compliance, piece rate wage EPF, export garment PF ESIC, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/textile-and-garments-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Textile & Garments EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for textile mills, garment factories, and export units across India. Contractor audits, piece-rate wage compliance, and end-to-end statutory advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/textile-and-garments-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Textile & Garments EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for textile and garment units across India. Export factories, piece-rate wages, and contractor compliance handled end-to-end."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-sme-msme"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "EPFdesk - Textile and Garments Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/textile-and-garments-compliance",
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
              latitude: 12.9716,
              longitude: 77.5946,
            },
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
              { "@type": "City", name: "Bangalore" },
              { "@type": "Place", name: "Peenya" },
              { "@type": "Place", name: "Whitefield" },
              { "@type": "Place", name: "Electronic City" },
              { "@type": "Place", name: "Koramangala" },
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
        <PerformanceSectionIndustry data={heroDataTextile} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTextile} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsAutomotive} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
