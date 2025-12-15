import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataHealthcare,
  pastelCardsHealthcare,
  sectionsHealthcare,
} from "@/utils/data";
export const metadata = {
  title:
    "Healthcare & Pharma EPF & ESIC Compliance India | Hospitals, Labs & Manufacturing | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC statutory compliance services for healthcare and pharmaceutical organizations across India. Specialized support for hospitals, diagnostic labs, clinics, pharma manufacturing units, CROs, and research facilities including PF/ESI registration, audits, contractor compliance, and monthly ECR filings.",

  keywords: [
    "healthcare EPF compliance India",
    "pharma PF ESIC compliance",
    "hospital EPF ESIC registration",
    "diagnostic lab PF ESIC",
    "pharmaceutical manufacturing labour compliance",
    "clinical research PF ESIC",
    "contractor compliance healthcare sector",
    "PF audit hospitals",
    "ESIC compliance pharma industry",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/healthcare-and-pharma-statutory-compliance",
  },

  openGraph: {
    title: "Healthcare & Pharma EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for hospitals, diagnostic labs, clinics, and pharmaceutical manufacturing units across India. End-to-end statutory support including registrations, audits, contractor labour management, and ongoing EPF/ESIC operations.",

    url: "https://epfdesk.com/healthcare-and-pharma-statutory-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Healthcare and Pharma Statutory Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Healthcare & Pharma EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for hospitals, clinics, diagnostic labs, and pharma manufacturing units across India. Registration, audits, contractor compliance, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Healthcare & Pharma EPF & ESIC Compliance India | Hospitals, Labs &
          Manufacturing | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC statutory compliance services for healthcare and pharmaceutical organizations across India. Support for hospitals, diagnostic labs, clinics, pharma manufacturing units, CROs, and research facilities including PF/ESI registration, audits, and contractor compliance."
        />

        <meta
          name="keywords"
          content="healthcare EPF compliance India, pharma PF ESIC, hospital EPF ESIC, diagnostic lab PF ESIC, pharma manufacturing labour compliance, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/healthcare-and-pharma-statutory-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Healthcare & Pharma EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for hospitals, diagnostic labs, clinics, and pharmaceutical manufacturing units across India. End-to-end statutory compliance and advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/healthcare-and-pharma-statutory-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Healthcare & Pharma EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for hospitals, clinics, labs, and pharma manufacturing units across India. End-to-end statutory compliance handled by experts."
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
            name: "EPFdesk - Healthcare and Pharma statutory Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/healthcare-and-pharma-statutory-compliance",
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
        <PerformanceSectionIndustry data={heroDataHealthcare} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHealthcare} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsHealthcare} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
