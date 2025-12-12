import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataSurendranagarDist,
  sectionsSurendranagarDist,
} from "@/utils/data";
export const metadata = {
  title:
    "Surendranagar EPF & ESIC Consultant | Wadhwan GIDC, Thangadh Ceramics & Textile Mills | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services in Surendranagar for ceramics, textiles, salt-processing units, Wadhwan GIDC, Thangadh ceramic clusters, and Dhrangadhra industrial belts. We specialize in NWC 2025 payroll restructuring, PF/ESI registration, audits, piece-rate wage compliance, and seasonal labour statutory alignment.",

  keywords: [
    "Surendranagar EPF Consultant",
    "Surendranagar ESIC Consultant",
    "Wadhwan GIDC PF Compliance",
    "Thangadh Ceramics ESIC",
    "Dhrangadhra Industrial Belt PF",
    "Surendranagar Textile Mills PF ESIC",
    "Salt Industry Compliance Gujarat",
    "NWC 2025 Payroll Gujarat",
    "EPFDesk Gujarat Compliance",
  ],

  openGraph: {
    title:
      "Surendranagar EPF & ESIC Consultant | Wadhwan GIDC, Thangadh Ceramics & Textile Mills | NWC 2025 Ready – EPFDesk",
    description:
      "Specialized EPF & ESIC compliance for Surendranagar’s ceramics, textiles, and salt industries. Expert payroll structuring, contractor compliance, PF/ESI registration, audits, and statutory advisory.",
    url: "https://epfdesk.com/surendranagar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Surendranagar Labour Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Surendranagar EPF & ESIC Consultant | Ceramics, Textiles & GIDC Compliance – EPFDesk",
    description:
      "EPFDesk delivers NWC 2025-ready EPF & ESIC solutions for Surendranagar’s ceramics, textiles, and salt-industry units across Wadhwan, Thangadh, and Dhrangadhra.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Surendranagar EPF & ESIC Consultant | Wadhwan GIDC, Thangadh Ceramics
          & Textile Mills | NWC 2025 Compliance – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services in Surendranagar for ceramics, textiles, salt-processing units, Wadhwan GIDC, Thangadh ceramic clusters, and Dhrangadhra industrial belts. We specialize in NWC 2025 payroll restructuring, PF/ESI registration, audits, piece-rate wage compliance, and seasonal labour statutory alignment."
        />

        <meta
          name="keywords"
          content="Surendranagar EPF Consultant, Surendranagar ESIC Consultant, Wadhwan GIDC PF Compliance, Thangadh Ceramics ESIC, Dhrangadhra Industrial Belt PF, Surendranagar Textile Mills PF ESIC, Salt Industry Compliance Gujarat, NWC 2025 Payroll Gujarat, EPFDesk Gujarat Compliance"
        />

        {/* Open Graph  */}
        <meta
          property="og:title"
          content="Surendranagar EPF & ESIC Consultant | Wadhwan GIDC, Thangadh Ceramics & Textile Mills | NWC 2025 Ready – EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialized EPF & ESIC compliance for Surendranagar’s ceramics, textiles, and salt industries. Expert payroll structuring, contractor compliance, PF/ESI registration, audits, and statutory advisory."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/surendranagar-epf-esic-compliance"
        />
        <meta property="og:site_name" content="EPFDesk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Surendranagar EPF & ESIC Consultant | Ceramics, Textiles & GIDC Compliance – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk delivers NWC 2025-ready EPF & ESIC solutions for Surendranagar’s ceramics, textiles, and salt-industry units across Wadhwan, Thangadh, and Dhrangadhra."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://epfdesk.com/surendranagar-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-surendranagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Surendranagar EPF & ESIC Consultant: NWC 2025 Ready Compliance for Wadhwan GIDC, Thangadh Ceramics, and Textile Mills | EPFDesk",
            alternateName:
              "EPFDesk – Surendranagar Ceramics, Textiles & Salt Industry Compliance",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/surendranagar-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged across all schemas
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
              "EPFDesk offers EPF and ESIC compliance in Surendranagar, specializing in NWC 2025 payroll structuring for ceramics, textiles, and salt-industry units. We assist firms in Wadhwan GIDC, Thangadh, and Dhrangadhra with PF & ESI registration, minimum wage adherence, piece-rate wage compliance, and full statutory alignment for seasonal and low-wage workforce segments.",

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
              { "@type": "City", name: "Surendranagar" },
              { "@type": "Place", name: "Wadhwan GIDC" },
              { "@type": "Place", name: "Thangadh Ceramics Zone" },
              { "@type": "Place", name: "Dhrangadhra Industrial Belt" },
              { "@type": "Place", name: "Textile Mills Cluster" },
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
        <PerformanceSectionIndustry data={heroDataSurendranagarDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSurendranagarDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
