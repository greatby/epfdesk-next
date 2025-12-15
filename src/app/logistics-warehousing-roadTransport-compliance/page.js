import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataLogistics, sectionsLogistics } from "@/utils/data";
export const metadata = {
  title:
    "Logistics, Warehousing & Road Transport EPF & ESIC Compliance India | Fleet & Contract Labour | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for logistics companies, warehousing operators, fleet owners, and road transport businesses across India. Expertise in driver and loader ESIC coverage, contractor labour compliance, PF/ESI registration, statutory audits, and monthly ECR filings.",

  keywords: [
    "logistics EPF compliance India",
    "warehousing PF ESIC compliance",
    "road transport labour compliance",
    "driver ESIC compliance India",
    "fleet operator PF ESIC",
    "contract labour compliance logistics",
    "warehouse PF audit",
    "transport company ESIC compliance",
    "PF ESIC audit logistics sector",
    "EPFDesk India",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/logistics-warehousing-roadTransport-compliance",
  },

  openGraph: {
    title:
      "Logistics, Warehousing & Road Transport EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for logistics providers, warehouses, fleet operators, and transport companies across India. Contractor labour audits, driver ESIC coverage, and end-to-end EPF/ESIC statutory compliance.",

    url: "https://epfdesk.com/logistics-warehousing-roadTransport-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Logistics Warehousing Road Transport EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Logistics & Transport EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for logistics companies, warehouses, fleet owners, and transport operators across India. Driver ESIC, contractor compliance, and monthly PF/ESI filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Logistics, Warehousing & Road Transport EPF & ESIC Compliance India |
          Fleet & Contract Labour | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for logistics companies, warehousing operators, fleet owners, and road transport businesses across India. Support includes driver ESIC coverage, contractor labour compliance, PF/ESI registration, audits, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="logistics EPF compliance India, warehousing PF ESIC, road transport labour compliance, driver ESIC India, fleet operator PF ESIC, contractor compliance logistics, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/logistics-warehousing-roadTransport-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Logistics, Warehousing & Road Transport EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for logistics providers, warehouses, fleet operators, and transport companies across India. Contractor audits, driver ESIC coverage, and end-to-end statutory compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/logistics-warehousing-roadTransport-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Logistics & Road Transport EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for logistics companies, warehouses, and transport operators across India. End-to-end statutory compliance handled by experts."
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
            name: "EPFdesk - Logistics, Warehousing and Road Transport Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/logistics-warehousing-roadTransport-compliance",
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
        <PerformanceSectionIndustry data={heroDataLogistics} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLogistics} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsHealthcare} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
