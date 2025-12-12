import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataMaduraiDist, sectionsMaduraiDist } from "@/utils/data";
export const metadata = {
  title:
    "Madurai Labour Compliance Analysis: Risk in Granite, Textiles & MSME EPF/ESIC Adherence | EPFDesk",
  description:
    "EPFDesk provides expert EPF, ESIC and NWC 2025 compliance analysis for Madurai’s labour-intensive sectors including granite processing, textile mills, powerloom clusters and MSME manufacturing. We identify statutory risks, contractor liability gaps, workforce documentation issues and provide practical compliance strategies for local industries.",
  keywords: [
    "Madurai PF consultant",
    "Madurai ESIC consultant",
    "granite industry labour compliance",
    "textile EPF ESIC Madurai",
    "powerloom PF ESIC Tamil Nadu",
    "MSME statutory compliance Madurai",
    "NWC 2025 Madurai payroll",
    "contractor compliance Tamil Nadu",
    "EPF inspection risk analysis Madurai",
    "EPFDesk Madurai",
  ],
  alternates: {
    canonical: "https://epfdesk.com/madurai-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Madurai EPF & ESIC Compliance | Granite, Textile & MSME Labour Risk Analysis | EPFDesk",
    description:
      "Specialized EPF & ESIC compliance insights for Madurai’s granite, textile and MSME sectors. Identify high-risk labour zones, statutory gaps, contractor liabilities and NWC 2025 readiness challenges.",
    url: "https://epfdesk.com/madurai-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Madurai PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Madurai Labour Compliance Analysis | Granite, Textile & MSME EPF/ESIC Risks | EPFDesk",
    description:
      "EPFDesk supports Madurai's industries with risk-focused EPF/ESIC audits, contractor compliance assessment, NWC 2025 payroll restructuring and sector-specific labour law mapping.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Madurai Labour Compliance Analysis: Risk in Granite, Textiles & MSME
          EPF/ESIC Adherence | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF, ESIC and NWC 2025 compliance analysis for Madurai’s granite, textile and MSME sectors—highlighting labour risks, contractor liabilities, documentation gaps and statutory compliance challenges."
        />

        <meta
          name="keywords"
          content="Madurai PF consultant, granite labour compliance, textile PF ESIC Madurai, powerloom compliance Tamil Nadu, MSME EPF ESIC Madurai, NWC 2025 compliance, contractor risk audits TN, labour documentation Madurai, EPF inspection readiness, EPFDesk Madurai"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/madurai-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Madurai EPF & ESIC Compliance | Granite, Textile & MSME Labour Risk | EPFDesk"
        />
        <meta
          property="og:description"
          content="Compliance and labour risk insights for Madurai’s granite, textile and MSME industries. Contractor audits, risk assessment and NWC 2025 payroll solutions included."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/madurai-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Madurai Labour Compliance | Granite, Textile & MSME Sectors | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Risk-based EPF/ESIC compliance strategies for Madurai’s key industrial sectors: granite, powerlooms, textiles and MSMEs. NWC 2025 readiness and contractor liability audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-madurai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Madurai Labour Compliance Analysis: Risk in Granite, Textiles, and MSME EPF/ESIC Adherence",
            alternateName:
              "EPFDesk – Madurai Granite, Textile & MSME Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/madurai-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Global address format maintained across all schemas
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
              "Navigate Madurai's complex labour landscape with EPFDesk. We provide critical compliance insights for the granite, textile, and MSME sectors, along with hyper-local strategies for EPF, ESIC, and New Wage Code (NWC 2025) preparedness.",

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
              { "@type": "City", name: "Madurai" },
              { "@type": "Place", name: "Granite Industry Belt" },
              { "@type": "Place", name: "Textile Mills & Powerloom Clusters" },
              { "@type": "Place", name: "Madurai MSME Industrial Units" },
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
        <PerformanceSectionIndustry data={heroDataMaduraiDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMaduraiDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
