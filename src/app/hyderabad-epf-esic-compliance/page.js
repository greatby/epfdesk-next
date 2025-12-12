import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataHyderabadDist, sectionsHyderabadDist } from "@/utils/data";
export const metadata = {
  title:
    "Hyderabad's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for HITEC City & Financial District | EPFDesk",
  description:
    "EPFDesk provides IT/ITeS-focused PF & ESIC compliance services in Hyderabad. We specialize in NWC 2025 payroll structuring, PF/ESI registration, monthly ECR filings, audit defense, contractor compliance, and corporate statutory management for HITEC City, Gachibowli, and the Financial District.",
  keywords: [
    "Hyderabad PF consultant",
    "Hyderabad ESIC consultant",
    "HITEC City PF ESIC compliance",
    "Gachibowli labour law advisor",
    "Financial District PF compliance",
    "NWC 2025 payroll Hyderabad",
    "IT ITES PF ESIC consultant",
    "corporate compliance Hyderabad",
    "PF audit support Hyderabad",
    "EPFDesk Hyderabad",
  ],
  alternates: {
    canonical: "https://epfdesk.com/hyderabad-epf-esic-consultant",
  },
  openGraph: {
    title:
      "Hyderabad EPF & ESIC Consultant | HITEC City, Gachibowli & Financial District Compliance | EPFDesk",
    description:
      "Specialized PF & ESIC compliance for IT/ITeS companies in HITEC City, Gachibowli and Hyderabad Financial District. Expert payroll restructuring for NWC 2025, audit support, PF/ESI registration, and monthly filings.",
    url: "https://epfdesk.com/hyderabad-epf-esic-consultant",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Hyderabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hyderabad EPF & ESIC Consultant | HITEC City & Financial District NWC 2025 Compliance | EPFDesk",
    description:
      "PF & ESIC compliance services for IT/ITeS companies in Hyderabad, with NWC 2025 payroll support, monthly ECR filing, and PF/ESI registration for corporate offices and tech parks.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Hyderabad's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for
          HITEC City & Financial District | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance solutions for Hyderabad’s IT hubs including HITEC City, Gachibowli, and the Financial District. Services include NWC 2025 payroll restructuring, PF/ESI registration, ECR filing, audit defense, and corporate statutory compliance."
        />

        <meta
          name="keywords"
          content="Hyderabad PF consultant, Hyderabad ESIC consultant, HITEC City PF compliance, Gachibowli ESIC compliance, Financial District PF ESIC, IT ITES PF consultant, payroll restructuring NWC 2025 Hyderabad, PF audit Hyderabad, contractor compliance Hyderabad, EPFDesk Hyderabad"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/hyderabad-epf-esic-consultant"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Hyderabad EPF & ESIC Consultant | HITEC City, Gachibowli & Financial District Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance expertise for IT/ITeS companies in HITEC City and Gachibowli. NWC 2025 payroll structuring, PF/ESI registration, audits, and statutory filings."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/hyderabad-epf-esic-consultant"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hyderabad EPF & ESIC Consultant | HITEC City & Financial District | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance services for IT/ITeS companies in HITEC City, Gachibowli & the Financial District. PF, ESIC, NWC 2025 payroll, and audit support."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-hyderabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Hyderabad's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for HITEC City & Financial District | EPFDesk",
            alternateName:
              "EPFDesk – Hyderabad EPF & ESIC Consultants for IT/ITeS Firms in HITEC City, Gachibowli & Financial District",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/hyderabad-epf-esic-consultant",
            telephone: "+91-9945933333",

            // ⛔ Address kept EXACTLY as you requested (Bangalore block reused)
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
              "EPFDesk provides specialized EPF and ESIC compliance services in Hyderabad, ensuring NWC 2025-ready payroll structuring for IT/ITeS companies in HITEC City, Gachibowli, and the Financial District. We offer expert PF & ESI Registration, Monthly ECR Filing, Audit Support, and Risk-Free Statutory Compliance for corporate offices and tech parks.",

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
              { "@type": "City", name: "Hyderabad" },
              { "@type": "Place", name: "HITEC City" },
              { "@type": "Place", name: "Gachibowli" },
              { "@type": "Place", name: "Financial District" },
              { "@type": "Place", name: "Corporate Offices & IT Parks" },
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
        <PerformanceSectionIndustry data={heroDataHyderabadDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHyderabadDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
