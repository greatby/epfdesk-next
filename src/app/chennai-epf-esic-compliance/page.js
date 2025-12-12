import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";

import Script from "next/script";
import { heroDataChennaiDist, sectionsChennaiDist } from "@/utils/data";
export const metadata = {
  title:
    "Chennai EPF & ESIC Consultant: NWC 2025 Compliance for IT Corridor, Guindy & Ambattur | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance in Chennai with NWC 2025-ready payroll structuring for IT/ITES, BFSI, corporates, and manufacturing. Expertise in EPFO 7A defense, high-CTC payroll restructuring, contractor compliance, and end-to-end statutory management across OMR IT Corridor, Guindy, and Ambattur.",
  keywords: [
    "Chennai PF consultant",
    "Chennai ESIC consultant",
    "Chennai EPF compliance",
    "NWC 2025 payroll Chennai",
    "IT Corridor OMR PF ESIC",
    "Guindy industrial compliance",
    "Ambattur PF ESIC consultant",
    "EPFO 7A defense Chennai",
    "corporate compliance Chennai",
    "EPFDesk Chennai",
  ],
  alternates: {
    canonical: "https://epfdesk.com/chennai-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chennai EPF & ESIC Consultant | IT Corridor, Guindy & Ambattur Compliance | EPFDesk",
    description:
      "Specialized PF & ESIC compliance support for Chennai's IT Corridor, corporates, and industrial zones. Expert NWC 2025 structuring, 7A defense, and contractor compliance for IT/ITES, BFSI, and manufacturing sectors.",
    url: "https://epfdesk.com/chennai-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Chennai PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chennai EPF & ESIC Consultant | IT Corridor, Guindy & Ambattur | EPFDesk",
    description:
      "PF & ESIC compliance for IT, corporate, and industrial firms in Chennai. NWC 2025 payroll, EPFO 7A handling, and complete statutory management.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Chennai EPF & ESIC Consultant: NWC 2025 Compliance for IT Corridor,
          Guindy & Ambattur | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers PF & ESIC compliance services in Chennai, with NWC 2025-ready payroll restructuring for IT/ITES, BFSI, corporates, and industrial zones. We specialize in EPFO 7A defense, salary restructuring, contractor audits, and statutory compliance across OMR, Guindy, and Ambattur."
        />

        <meta
          name="keywords"
          content="Chennai PF consultant, Chennai ESIC consultant, Chennai PF ESIC compliance, OMR IT Corridor PF ESIC, Guindy PF compliance, Ambattur industrial compliance, NWC 2025 payroll Chennai, EPFO 7A defense, corporate compliance Chennai, EPFDesk Chennai"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chennai-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Chennai EPF & ESIC Consultant | IT Corridor, Guindy & Ambattur Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialised PF & ESIC compliance services for Chennai’s IT Corridor, corporates, and industrial clusters. NWC 2025 payroll, EPFO 7A defense, and contractor compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/chennai-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chennai EPF & ESIC Consultant | IT Corridor, Guindy & Ambattur | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Complete PF & ESIC statutory management for IT, corporate, and manufacturing units in Chennai."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-chennai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chennai EPF & ESIC Consultant: NWC 2025 Compliance for IT Corridor, Guindy, and Ambattur | EPFDesk",
            alternateName:
              "EPFDesk – Chennai IT, Corporate & Services Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chennai-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged across all city schemas
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
              "EPFDesk provides EPF and ESIC compliance services in Chennai, specializing in NWC 2025 payroll structuring for IT/ITES, financial services, and corporate headquarters. We offer expert defense against EPFO 7A inquiries, high-CTC salary restructuring, fixed-term workforce compliance, and complete statutory management for companies across the IT Corridor, OMR, Guindy, and Ambattur industrial areas.",

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
              { "@type": "City", name: "Chennai" },
              { "@type": "Place", name: "IT Corridor (OMR)" },
              { "@type": "Place", name: "Guindy Industrial Estate" },
              { "@type": "Place", name: "Ambattur Industrial Area" },
              { "@type": "Place", name: "Chennai Corporate HQ Zone" },
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
        <PerformanceSectionIndustry data={heroDataChennaiDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChennaiDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
