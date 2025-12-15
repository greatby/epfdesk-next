import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataDakshinaKannadaDist,
  sectionsDakshinaKannadaDist,
  faqDakshinaKannada,
} from "@/utils/data";

export const metadata = {
  title:
    "Mangaluru EPF & ESIC Compliance for Port, Banking, Educational Institutions & Coastal Industry | EPFDesk",
  description:
    "Expert EPF & ESIC defence for New Mangalore Port contractors, petrochemical units, hospitals, colleges and banks in Dakshina Kannada. Specialists in ESIC applicability for medical/educational institutions and PF compliance for financial services.",
  keywords: [
    "Mangaluru PF consultant",
    "Dakshina Kannada ESIC consultant",
    "New Mangalore Port PF ESIC",
    "banking PF compliance Mangaluru",
    "hospital ESIC applicability Mangaluru",
    "petrochemical PF ESIC MRPL",
    "educational institution PF ESIC Mangaluru",
    "EPFDesk Dakshina Kannada",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/dakshina-kannada-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dakshina Kannada EPF & ESIC Consultant | Port, Banking, Education & Petrochemicals | EPFDesk",
    description:
      "PF & ESIC compliance for Dakshina Kannada’s port operations, hospitals, banks, colleges, MRPL units and coastal industries. Experts in ESIC enforcement defence and PF wage structuring.",
    url: "https://epfdesk.com/dakshina-kannada-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Dakshina Kannada PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mangaluru EPF & ESIC Compliance | Port, Banking, Hospitals & Petrochemicals | EPFDesk",
    description:
      "PF & ESIC compliance specialists for Dakshina Kannada—New Mangalore Port, MRPL, private hospitals, colleges and banks.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Mangaluru EPF & ESIC Compliance for Port, Banking, Education & Coastal
          Industry | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC specialists for Dakshina Kannada—New Mangalore Port, MRPL, banking, hospitals and private educational institutions. Expertise in PF wage classification, ESIC enforcement defence and contractor liability management."
        />

        <meta
          name="keywords"
          content="Mangaluru PF consultant, NMP port PF ESIC, hospital ESIC compliance, banking PF allowances, educational institution PF ESIC Mangaluru, petrochemical ESIC MRPL"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dakshina-kannada-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Dakshina Kannada EPF & ESIC Consultant | Port, Banking, Education & Petrochemicals | EPFDesk"
        />
        <meta
          property="og:description"
          content="Compliance experts for New Mangalore Port, banks, hospitals, colleges and MRPL petrochemical units. PF/ESI solutions and statutory defence."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/dakshina-kannada-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dakshina Kannada EPF & ESIC Compliance | Port, Banking, Hospitals & Petrochemicals | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC support for coastal industries, port operations, banks, colleges and hospitals in Mangaluru."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      <Script
        id="schema-dk"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Mangaluru EPF & ESIC Compliance for Port, Banking, Education & Coastal Industry | EPFDesk",
            alternateName:
              "EPFDesk – Dakshina Kannada PF ESIC Consultants for Port, Hospitals & Banking",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dakshina-kannada-epf-esic-compliance",
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
              latitude: 12.9141,
              longitude: 74.8560,
            },

            description:
              "Dakshina Kannada’s PF/ESI compliance risks stem from port contract labour, petroleum/chemical exposure, high-volume hospital and educational institution staff, and PF wage challenges in the banking sector.",
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
              { "@type": "City", name: "Mangaluru" },
              { "@type": "Place", name: "New Mangalore Port" },
              { "@type": "Place", name: "Petrochemical Units (MRPL)" },
              { "@type": "Place", name: "Dakshina Kannada District" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "57",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDakshinaKannadaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDakshinaKannadaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDakshinaKannada} />
    </>
  );
};

export default page;
