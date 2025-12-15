import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataRetailSector,
  pastelCardsRetailSector,
  sectionsRetailSector,
} from "@/utils/data";
export const metadata = {
  title:
    "Retail Sector EPF & ESIC Compliance India | Stores, Chains & E-Commerce Retail | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for retail businesses across India. Specialized support for retail chains, supermarkets, showrooms, franchise stores, and omni-channel retailers covering PF/ESI registration, contract labour compliance, statutory audits, and monthly ECR filings.",

  keywords: [
    "retail EPF compliance India",
    "retail ESIC compliance",
    "shop establishment PF ESIC",
    "retail chain labour compliance",
    "franchise store PF ESIC",
    "contract labour compliance retail",
    "PF audit retail sector",
    "ESIC compliance shops",
    "payroll compliance retail India",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/retail-sector-compliance",
  },

  openGraph: {
    title: "Retail Sector EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for retail chains, supermarkets, showrooms, and franchise stores across India. End-to-end statutory compliance including registrations, audits, contractor labour management, and ongoing EPF/ESIC operations.",

    url: "https://epfdesk.com/retail-sector-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Retail Sector EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Retail Sector EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for retail businesses across India including chains, supermarkets, and franchise stores. Registration, audits, contractor compliance, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Retail Sector EPF & ESIC Compliance India | Stores, Chains & Franchise
          Retail | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for retail businesses across India. Support for retail chains, supermarkets, showrooms, and franchise stores including PF/ESI registration, audits, contractor labour compliance, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="retail EPF compliance India, retail ESIC compliance, shop establishment PF ESIC, retail chain labour compliance, franchise store PF ESIC, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/retail-sector-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Retail Sector EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for retail chains, supermarkets, showrooms, and franchise stores across India. End-to-end statutory compliance and advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/retail-sector-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Retail Sector EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for retail businesses across India. Chains, franchise stores, and supermarkets supported end-to-end."
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
            name: "EPFdesk - Retail Sector Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/retail-sector-compliance",
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
        <PerformanceSectionIndustry data={heroDataRetailSector} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRetailSector} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsRetailSector} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
