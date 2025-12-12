import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataRajkotDist, sectionsRajkotDist } from "@/utils/data";
export const metadata = {
  title:
    "Rajkot EPF & ESIC Consultant: NWC 2025 Compliance for GIDC Metoda, Shapar Veraval & MSME Engineering Units | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services in Rajkot, supporting engineering, casting, fabrication and machine component units across GIDC Metoda, Shapar Veraval and the MSME industrial belt. We specialise in NWC 2025 payroll restructuring, EPF/ESI registration, contractor compliance, statutory audits and MSME workforce formalization.",
  keywords: [
    "Rajkot PF consultant",
    "Rajkot ESIC consultant",
    "GIDC Metoda PF ESIC",
    "Shapar Veraval labour compliance",
    "Rajkot MSME engineering PF ESIC",
    "casting industry labour compliance Gujarat",
    "NWC 2025 payroll Rajkot",
    "MSME statutory compliance Rajkot",
    "EPF audit Rajkot",
    "EPFDesk Rajkot",
  ],
  alternates: {
    canonical: "https://epfdesk.com/rajkot-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Rajkot EPF & ESIC Consultant | GIDC Metoda, Shapar Veraval & MSME Engineering Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Rajkot’s engineering, casting and fabrication MSMEs. Coverage includes GIDC Metoda, Shapar Veraval, payroll structuring, contractor audits and NWC 2025 readiness.",
    url: "https://epfdesk.com/rajkot-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Rajkot PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rajkot EPF & ESIC Consultant | Engineering & Casting MSME Compliance | EPFDesk",
    description:
      "Compliance experts for GIDC Metoda, Shapar Veraval and Rajkot’s engineering/casting MSME sector. PF/ESI audits, NWC 2025 payroll and labour formalization solutions.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Rajkot EPF & ESIC Consultant: NWC 2025 Compliance for GIDC Metoda,
          Shapar Veraval & MSME Engineering Units | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers PF & ESIC compliance services for Rajkot’s engineering, casting and fabrication MSMEs across GIDC Metoda and Shapar Veraval. Expertise includes NWC 2025 payroll restructuring, PF/ESI registration, contractor audits and formal workforce migration systems."
        />

        <meta
          name="keywords"
          content="Rajkot PF consultant, GIDC Metoda compliance, Shapar Veraval ESIC, engineering MSME PF ESIC, casting unit PF ESIC, fabrication industry labour compliance, NWC 2025 payroll Rajkot, contractor PF audit Gujarat, EPF registration Rajkot, EPFDesk Rajkot"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/rajkot-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Rajkot EPF & ESIC Consultant | GIDC Metoda, Shapar Veraval & MSME Engineering Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="Compliance support for Rajkot’s engineering, casting and fabrication MSMEs. PF/ESI registration, payroll structuring and contractor audits for GIDC Metoda & Shapar Veraval."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/rajkot-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rajkot EPF & ESIC Compliance | Engineering & Casting MSMEs | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for engineering, casting and fabrication units in Rajkot’s GIDC and MSME clusters. Includes NWC 2025 payroll and statutory audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-rajkot"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Rajkot's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for GIDC Metoda, Shapar Veraval, and the MSME Cluster | EPFDesk",
            alternateName:
              "EPFDesk – Rajkot MSME Engineering & Casting Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/rajkot-epf-esic-compliance",
            telephone: "+91-9945933333",
            // Address kept unchanged as requested
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
              "EPFDesk offers EPF and ESIC compliance in Rajkot, specializing in NWC 2025 payroll restructuring for engineering and casting firms in Metoda and Shapar. We provide expert PF & ESI registration, audits, and MSME workforce formalization services tailored to Rajkot's large MSME engineering and casting ecosystem.",
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
              { "@type": "City", name: "Rajkot" },
              { "@type": "Place", name: "GIDC Metoda" },
              { "@type": "Place", name: "Shapar Veraval" },
              { "@type": "Place", name: "Rajkot MSME Cluster" },
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
        <PerformanceSectionIndustry data={heroDataRajkotDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRajkotDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
