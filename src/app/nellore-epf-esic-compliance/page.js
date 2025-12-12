import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import Head from "next/head";
import {
  heroDataNelloreDist,
  sectionsNelloreDist,
  nelloreFAQ,
} from "@/utils/data";

import FaqAccordion from "@/components/faqAccordian";
export const metadata = {
  title:
    "Nellore EPF & ESIC Consultant: Krishnapatnam Port, Aquaculture Processing & Thermal Power Projects | EPFDesk",
  description:
    "EPFDesk delivers EPF & ESIC compliance solutions for Nellore’s Krishnapatnam Port operators, aquaculture and seafood processing units, and EPC contractors in major thermal power projects. Expertise in contract labour audits, BOCW compliance, ESIC coverage for food-processing units, and NWC 2025 payroll restructuring.",
  keywords: [
    "Nellore PF consultant",
    "Nellore ESIC consultant",
    "Krishnapatnam Port PF ESIC",
    "aquaculture EPF ESIC Andhra Pradesh",
    "seafood processing compliance AP",
    "thermal power plant contractor PF",
    "Sembcorp PF ESIC compliance",
    "SDSTPS EPF ESIC",
    "BOCW compliance Nellore",
    "NWC 2025 payroll AP",
    "EPFDesk Nellore",
  ],
  alternates: {
    canonical: "https://epfdesk.com/nellore-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Nellore EPF & ESIC Consultant | Krishnapatnam Port, Aquaculture & Thermal Power Compliance | EPFDesk",
    description:
      "PF & ESIC services for Krishnapatnam Port, Gudur–Kavali aquaculture units, seafood processing units and thermal power plant contractors. Includes BOCW compliance, NWC 2025 payroll and labour documentation systems.",
    url: "https://epfdesk.com/nellore-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Nellore PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nellore EPF & ESIC Compliance | Krishnapatnam Port, Aquaculture & Power Projects | EPFDesk",
    description:
      "Compliance experts for aquaculture, seafood processing, Krishnapatnam Port, EPC contractors and thermal power plant projects in Nellore. PF/ESI audits, vendor compliance and NWC 2025 payroll models.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Nellore EPF & ESIC Consultant: Krishnapatnam Port, Aquaculture
          Processing & Thermal Power Projects | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers specialized EPF & ESIC compliance for aquaculture processing units, Krishnapatnam Port operations and EPC contractors in Nellore’s thermal power plants. Services include BOCW compliance, PF/ESI documentation, and NWC 2025 payroll restructuring."
        />

        <meta
          name="keywords"
          content="Nellore PF consultant, Krishnapatnam Port compliance, aquaculture PF ESIC AP, seafood processing EPF ESIC, thermal power plant PF ESIC, Sembcorp labour compliance, SDSTPS PF ESIC, BOCW compliance Nellore, AP contractor EPF audits, EPFDesk Nellore"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/nellore-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Nellore EPF & ESIC Consultant | Ports, Aquaculture & Power Sector Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="Compliance solutions for Nellore’s Krishnapatnam Port, aquaculture processing and thermal power project contractors. PF/ESI systems, BOCW compliance and NWC 2025 payroll restructuring."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/nellore-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nellore EPF & ESIC Compliance | Aquaculture, Ports & Power | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC advisory for aquaculture, seafood processing, port logistics and power sector contractors in Nellore. Includes BOCW compliance and NWC 2025 payroll."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-nellore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Nellore EPF & ESIC Consultant: Krishnapatnam Port, Aquaculture Processing & Thermal Power Projects | EPFDesk",
            alternateName:
              "EPFDesk – Nellore District EPF & ESIC Compliance for Ports, Aquaculture and Power Sector Contractors",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/nellore-epf-esic-compliance",
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

            description:
              "EPFDesk offers specialized EPF & ESIC compliance services for Nellore's aquaculture units, Krishnapatnam Port operators, and thermal power plant EPC contractors. Expertise in contract labour liability, food-processing ESIC coverage, and BOCW compliance.",

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
              { "@type": "City", name: "Nellore" },
              { "@type": "Place", name: "Krishnapatnam Port" },
              { "@type": "Place", name: "Gudur & Kavali Aquaculture Belt" },
              {
                "@type": "Place",
                name: "Thermal Power Plant Zones (SDSTPS, Sembcorp)",
              },
              { "@type": "Place", name: "BOCW Construction Clusters" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "48",
            },
          }),
        }}
      />

      {/* HERO */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNelloreDist} />
      </FadeInWhenVisible>

      {/* MAIN SECTIONS */}
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNelloreDist} />
      </FadeInWhenVisible>

      {/* FAQ */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={nelloreFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
