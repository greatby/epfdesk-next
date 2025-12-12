import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataSalemDist, sectionsSalemDist } from "@/utils/data";
export const metadata = {
  title:
    "Salem Labour Law Compliance: Risk Profile for Steel Plants, Powerlooms & Sago Factories | EPFDesk",
  description:
    "EPFDesk delivers labour law risk analysis and compliance frameworks for Salem’s steel plants, powerloom clusters, and sago/tapioca factories. Services include EPF & ESIC applicability reviews, contractor compliance audits, informal workforce formalization, and NWC 2025 readiness strategies tailored to Salem’s high-risk industrial zones.",
  keywords: [
    "Salem PF consultant",
    "Salem ESIC consultant",
    "steel plant labour compliance Salem",
    "powerloom PF ESIC Tamil Nadu",
    "sago factory labour laws",
    "tapioca processing EPF ESIC",
    "contractor compliance Salem",
    "NWC 2025 Salem payroll",
    "labour law audit Salem",
    "EPFDesk Salem",
  ],
  alternates: {
    canonical: "https://epfdesk.com/salem-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Salem EPF & ESIC Compliance | Steel Plants, Powerlooms & Sago Factories | EPFDesk",
    description:
      "Labour compliance risk analysis for Salem’s steel industry, powerloom sector and sago/tapioca factories. Includes EPF/ESI audits, contractor compliance and NWC 2025 readiness solutions.",
    url: "https://epfdesk.com/salem-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Salem PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Salem EPF & ESIC Compliance | Steel, Powerloom & Sago Industry Risk Mapping | EPFDesk",
    description:
      "EPFDesk helps Salem’s major industries manage EPF, ESIC and NWC 2025 compliance risks. Specialist audits for steel plants, loom clusters and sago factories.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Salem Labour Law Compliance: Risk Profile for Steel Plants, Powerlooms
          & Sago Factories | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF, ESIC and NWC 2025 compliance risk mapping for Salem’s steel plants, powerloom clusters and sago factories. Includes contractor audits, informal worker formalization and statutory readiness assessments."
        />

        <meta
          name="keywords"
          content="Salem PF consultant, steel factory labour compliance, powerloom PF ESIC TN, sago factory labour laws, tapioca processing ESIC, contractor compliance audits Salem, NWC 2025 Tamil Nadu, labour documentation Salem, EPF audit for MSMEs, EPFDesk Salem"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/salem-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Salem EPF & ESIC Compliance | Steel, Powerloom & Sago Industries | EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialized compliance analysis for Salem’s industrial sectors: steel, powerloom and sago factories. PF & ESIC audits, contractor compliance and readiness for NWC 2025."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/salem-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Salem Labour Compliance | Steel, Powerloom & Sago Sector | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance risk profiling and statutory support for Salem’s steel plants, powerloom units and sago factories. Includes EPF/ESI audits and contractor management."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-salem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Salem Labour Law Compliance: Risk Profile for Steel Plant Contractors, Powerlooms, and Sago Factories",
            alternateName:
              "EPFDesk – Salem Steel, Powerloom & Sago Industry Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/salem-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address shared across all schemas
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
              "Comprehensive analysis of EPF, ESIC, and Wage Code risks in Salem's major industries including steel plants, powerlooms, and sago factories. EPFDesk provides NWC 2025 readiness strategies, contractor compliance frameworks, and statutory support for Salem’s large informal workforce.",

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
              { "@type": "City", name: "Salem" },
              { "@type": "Place", name: "Steel Plant Industrial Belt" },
              { "@type": "Place", name: "Powerloom Clusters" },
              { "@type": "Place", name: "Sago / Tapioca Factories" },
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
        <PerformanceSectionIndustry data={heroDataSalemDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSalemDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
