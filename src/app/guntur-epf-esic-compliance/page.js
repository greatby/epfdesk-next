// pages/guntur/page.jsx  (or app/guntur/page.jsx)
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import Head from "next/head";
import {
  gunturDistFAQ,
  heroDataGunturDist,
  sectionsGunturDist,
} from "@/utils/data";
import FaqAccordion from "@/components/faqAccordian";
export const metadata = {
  title:
    "Guntur EPF & ESIC Consultant: NWC 2025 Seasonal & Agri-Processing Compliance | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services for Guntur’s agro-processing hubs, cold storage facilities, tobacco units, and chilli/turmeric markets. We specialize in NWC 2025 seasonal payroll design, unorganized workforce onboarding, warehousing compliance, and monthly statutory filings.",
  keywords: [
    "Guntur PF consultant",
    "Guntur ESIC consultant",
    "agro-processing PF ESIC compliance",
    "Guntur tobacco industry PF ESIC",
    "cold storage PF compliance",
    "warehousing ESIC compliance",
    "seasonal labour PF ESIC",
    "NWC 2025 Guntur payroll",
    "chilli market PF ESIC compliance",
    "EPFDesk Guntur",
  ],
  alternates: {
    canonical: "https://epfdesk.com/guntur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Guntur EPF & ESIC Consultant | Agro-Processing, Warehousing & Seasonal Labour Compliance | EPFDesk",
    description:
      "PF & ESIC compliance solutions for Guntur’s agro-processing clusters, cold storage units, warehousing operations, and commodity trade markets. Seasonal labour PF frameworks and NWC 2025 payroll structuring.",
    url: "https://epfdesk.com/guntur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Guntur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Guntur EPF & ESIC Consultant | Seasonal & Agro-Processing Compliance | EPFDesk",
    description:
      "PF & ESIC advisory for Guntur’s tobacco, chilli, turmeric, warehousing and agro-processing industries. Seasonal labour PF frameworks and NWC 2025 payroll compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Guntur EPF & ESIC Consultant: NWC 2025 Seasonal & Agri-Processing
          Compliance | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance for Guntur's agro-processing hubs, tobacco processing units, cold storage facilities, and chilli/turmeric trade markets. Expertise in NWC 2025 seasonal payroll, unorganized sector onboarding, and regulatory filings."
        />

        <meta
          name="keywords"
          content="Guntur PF consultant, Guntur ESIC consultant, seasonal labour PF ESIC, agro-processing compliance Guntur, tobacco PF ESIC, cold storage PF ESIC, warehousing ESIC compliance, NWC 2025 Andhra Pradesh, commodity market PF ESIC, EPFDesk Guntur"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/guntur-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Guntur EPF & ESIC Consultant | Agro-Processing, Warehousing & Seasonal Labour Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance specialists for Guntur’s agro-processing clusters, warehousing, cold storage, tobacco, chilli, and turmeric markets. NWC 2025 payroll structuring for seasonal labour."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/guntur-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guntur EPF & ESIC Consultant | Seasonal & Agro-Processing Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance services for Guntur’s agro-processing, tobacco, warehousing, cold-chain and chilli/turmeric trade ecosystems. NWC 2025 seasonal payroll experts."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-guntur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Guntur EPF & ESIC Consultant: NWC 2025 Seasonal & Agri-Processing Compliance | EPFDesk",
            alternateName:
              "EPFDesk – Guntur EPF & ESIC Compliance for Agro-Processing, Warehousing, and Seasonal Labour",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/guntur-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged
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
              "EPFDesk provides EPF and ESIC compliance for Guntur's seasonal agro-processing, warehousing and cold-chain operators, focusing on NWC-compliant payroll, seasonal registration frameworks and unorganized sector mapping.",

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
              { "@type": "City", name: "Guntur" },
              { "@type": "Place", name: "Tobacco & Agro-Processing Hubs" },
              { "@type": "Place", name: "Cold Storage & Warehousing" },
              { "@type": "Place", name: "Chilli & Turmeric Trade Markets" },
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
        <PerformanceSectionIndustry data={heroDataGunturDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGunturDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={gunturDistFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
