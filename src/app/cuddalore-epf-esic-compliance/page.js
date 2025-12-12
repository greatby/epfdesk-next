import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";

import Script from "next/script";
import Head from "next/head";
import { heroDataCuddaloreDist, sectionsCuddaloreDist } from "@/utils/data";
export const metadata = {
  title:
    "Cuddalore EPF & ESIC Compliance: NWC 2025 for SIPCOT Chemical, Pharma & Heavy Industry | Principal Employer Liability | EPFDesk",
  description:
    "EPFDesk provides specialized EPF & ESIC compliance services for Cuddalore SIPCOT chemical, petrochemical, pharma, and fertilizer units. We help reduce Principal Employer liability for contractor non-compliance and ensure NWC 2025 payroll alignment in highly regulated industrial zones.",
  keywords: [
    "Cuddalore PF consultant",
    "Cuddalore ESIC consultant",
    "SIPCOT Cuddalore PF compliance",
    "chemical industry ESIC compliance",
    "pharma PF ESIC Cuddalore",
    "fertilizer industry PF ESIC",
    "Principal Employer liability PF ESIC",
    "contractor compliance Cuddalore",
    "NWC 2025 payroll chemical sector",
    "EPFDesk Cuddalore",
  ],
  alternates: {
    canonical: "https://epfdesk.com/cuddalore-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Cuddalore EPF & ESIC Compliance | SIPCOT Chemical, Pharma & Heavy Industry Experts | EPFDesk",
    description:
      "PF & ESIC compliance specialists for chemical, petrochemical, pharma, and fertilizer units in Cuddalore SIPCOT. Reduce Principal Employer liabilities, align payroll with NWC 2025, and ensure contractor compliance.",
    url: "https://epfdesk.com/cuddalore-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Cuddalore PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cuddalore EPF & ESIC Compliance | SIPCOT Chemical, Pharma & Heavy Industry | EPFDesk",
    description:
      "Compliance experts for Cuddalore SIPCOT chemical, pharma & fertilizer sectors. PF & ESIC audits, contractor compliance, NWC 2025 payroll, and Principal Employer liability reduction.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Cuddalore EPF & ESIC Compliance: NWC 2025 for SIPCOT Chemical, Pharma
          & Heavy Industry | Principal Employer Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="Specialized PF & ESIC compliance for Cuddalore SIPCOT industries including chemical, petrochemical, pharma, and fertilizer units. Reduce Principal Employer liability, ensure contractor compliance, and align payroll with NWC 2025."
        />

        <meta
          name="keywords"
          content="Cuddalore PF consultant, Cuddalore ESIC consultant, Cuddalore SIPCOT PF ESIC, chemical industry PF compliance, pharma ESIC compliance, fertilizer manufacturing PF ESIC, contractor compliance Cuddalore, Principal Employer liability PF ESIC, NWC 2025 chemical industry, EPFDesk Cuddalore"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/cuddalore-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Cuddalore EPF & ESIC Compliance | SIPCOT Chemical, Pharma & Heavy Industry Experts | EPFDesk"
        />
        <meta
          property="og:description"
          content="EPF & ESIC compliance experts for chemical, petrochemical, pharma, and fertilizer units in Cuddalore SIPCOT. Reduce Principal Employer risks, manage contractor compliance, and implement NWC 2025 payroll."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/cuddalore-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cuddalore EPF & ESIC Compliance | SIPCOT Chemical, Pharma & Heavy Industry | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC compliance for Cuddalore’s chemical, pharma, and fertilizer industries with NWC 2025 alignment and Principal Employer liability reduction."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-cuddalore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Cuddalore EPF & ESIC Compliance: NWC 2025 for SIPCOT Chemical, Pharma & Heavy Industry | Principal Employer Liability | EPFDesk",
            alternateName:
              "EPFDesk – Cuddalore SIPCOT Chemical, Pharma & Heavy Industry Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/cuddalore-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard reusable address
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
              "EPFDesk provides specialized compliance support for Cuddalore SIPCOT industries, including chemical, pharma, and fertilizer units. We reduce Principal Employer liability for contractor non-compliance and ensure NWC 2025 payroll alignment for high-risk, heavily regulated sectors.",

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
              { "@type": "City", name: "Cuddalore" },
              { "@type": "Place", name: "Cuddalore SIPCOT Industrial Park" },
              { "@type": "Place", name: "Chemical & Petrochemical Units" },
              {
                "@type": "Place",
                name: "Pharma & Fertilizer Manufacturing Belt",
              },
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
        <PerformanceSectionIndustry data={heroDataCuddaloreDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCuddaloreDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
