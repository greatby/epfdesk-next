import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import {
  heroDataKakinadaDist,
  kakinandaDistFAQ,
  sectionsKakinadaDist,
} from "@/utils/data";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
export const metadata = {
  title:
    "Kakinada EPF & ESIC Compliance Consultant: NWC 2025 for Ports, Petrochemicals & Contract Labour | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services for Kakinada Port, SEZ logistics, petrochemical & fertilizer units, and oil & gas contractors. Expertise includes NWC 2025 payroll structuring, hazardous occupation ESIC mapping, contractor compliance audits, and PF wage modeling for high-risk industries.",
  keywords: [
    "Kakinada PF consultant",
    "Kakinada ESIC consultant",
    "Kakinada Port PF ESIC compliance",
    "Kakinada SEZ labour compliance",
    "petrochemical PF ESIC",
    "fertilizer industry PF compliance",
    "oil and gas contractor PF ESIC",
    "hazardous occupation ESIC mapping",
    "NWC 2025 payroll Kakinada",
    "EPFDesk Kakinada",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kakinada-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kakinada EPF & ESIC Consultant | Port, SEZ, Petrochemical & Contractor Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Kakinada Port, Kakinada SEZ, petrochemical & fertilizer units, and oil & gas contractors. Services include NWC 2025 payroll structuring, contractor audits, and hazardous occupation ESIC advisory.",
    url: "https://epfdesk.com/kakinada-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kakinada PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kakinada EPF & ESIC Consultant | Ports, Petrochemicals, SEZ & Contract Labour | EPFDesk",
    description:
      "Compliance advisory for Port operations, SEZ logistics, petrochemicals, fertilizers, and oil & gas contractors in Kakinada. PF wage modeling, ESIC for hazardous occupations, and NWC 2025 payroll expertise.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kakinada EPF & ESIC Compliance Consultant: NWC 2025 for Ports,
          Petrochemicals & Contract Labour | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk delivers PF & ESIC compliance solutions for Kakinada Port, Kakinada SEZ, petrochemical units, fertilizer manufacturers, and oil & gas contractor ecosystems. NWC 2025 payroll structuring, hazardous occupation ESIC, and contractor audits included."
        />

        <meta
          name="keywords"
          content="Kakinada PF consultant, Kakinada ESIC consultant, Kakinada Port labour compliance, Kakinada SEZ PF ESIC, petrochemical PF ESIC, fertilizer PF ESIC, oil & gas contractor PF compliance, contract labour ESIC, NWC 2025 Andhra Pradesh, EPFDesk Kakinada"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kakinada-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kakinada EPF & ESIC Consultant | Port, SEZ, Petrochemical & Contractor Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC support for Port operations, SEZ logistics, petrochemical plants, fertilizer units, and oil & gas contractor networks in Kakinada. NWC 2025 payroll and hazardous ESIC mapping specialists."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kakinada-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kakinada EPF & ESIC Consultant | Ports, SEZ, Petrochemical & Contractor Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC compliance advisory for Kakinada’s Port, SEZ, petrochemical, fertilizer, and oil & gas sectors. Contractor compliance and NWC 2025 payroll support."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-kakinada"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kakinada EPF & ESIC Compliance Consultant: NWC 2025 for Ports, Petrochemicals & Contract Labour | EPFDesk",
            alternateName:
              "EPFDesk – Kakinada Port, SEZ, Petrochemical and Hazardous Industry Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kakinada-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged
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
              "EPFDesk provides EPF and ESIC compliance consulting for Kakinada District, specializing in NWC 2025 payroll alignment for Port operations, SEZ logistics, petrochemicals, fertilizers, oil & gas industries. Expertise includes contractor compliance, ESIC for hazardous occupations, and structured PF wage modeling.",

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
              { "@type": "City", name: "Kakinada" },
              { "@type": "Place", name: "Kakinada Deep Water Port" },
              { "@type": "Place", name: "Kakinada SEZ" },
              { "@type": "Place", name: "Petrochemical & Fertilizer Units" },
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
        <PerformanceSectionIndustry data={heroDataKakinadaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKakinadaDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={kakinandaDistFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
