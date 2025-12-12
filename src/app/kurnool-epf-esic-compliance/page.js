// pages/kurnool/page.jsx  (or app/kurnool/page.jsx)
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import Head from "next/head";
import {
  heroDataKurnoolDist,
  sectionsKurnoolDist,
  kurnoolFAQ,
} from "@/utils/data";

import FaqAccordion from "@/components/faqAccordian";
export const metadata = {
  title:
    "Kurnool EPF & ESIC Consultant: Cement Plants, Limestone Quarries & Renewable Energy Compliance | EPFDesk",
  description:
    "EPFDesk delivers PF & ESIC compliance services for Kurnool’s cement plants, limestone quarries, and renewable energy projects including solar and wind farms. Expertise spans OHS compliance, contractor workforce audits, migrant labour documentation, and NWC 2025 payroll restructuring for high-risk industrial sites.",
  keywords: [
    "Kurnool PF consultant",
    "Kurnool ESIC consultant",
    "cement plant PF ESIC",
    "Nandyal cement cluster compliance",
    "limestone quarry PF ESIC",
    "Kolimigundla quarry labour compliance",
    "solar park PF ESIC Andhra Pradesh",
    "wind energy PF ESIC compliance",
    "contractor compliance Kurnool",
    "NWC 2025 payroll Kurnool",
    "EPFDesk Kurnool",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kurnool-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kurnool EPF & ESIC Consultant | Cement, Quarrying & Renewable Energy Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Kurnool’s cement manufacturing hubs, limestone mining belts, solar parks and wind energy sites. Contractor audits, NWC 2025 payroll, OHS compliance and migrant workforce documentation.",
    url: "https://epfdesk.com/kurnool-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kurnool PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kurnool EPF & ESIC Consultant | Cement, Limestone & Renewable Energy Sectors | EPFDesk",
    description:
      "Advanced PF & ESIC compliance for cement plants, quarrying operations, solar parks, and wind energy projects in Kurnool. OHS compliance, contractor audits and NWC 2025 payroll experts.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kurnool EPF & ESIC Consultant: Cement Plants, Limestone Quarries &
          Renewable Energy Compliance | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance solutions for Kurnool’s cement plants, limestone quarries, solar power parks and wind energy projects. Services include contractor compliance, OHS readiness, migrant workforce PF/ESI, and NWC 2025 payroll restructuring."
        />

        <meta
          name="keywords"
          content="Kurnool PF consultant, cement plant PF ESIC, quarry PF compliance, Nandyal cement cluster, limestone mining PF ESIC, solar park labour compliance AP, wind energy PF ESIC, contractor audits Kurnool, NWC 2025 AP payroll, EPFDesk Kurnool"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kurnool-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kurnool EPF & ESIC Consultant | Cement, Quarrying & Renewable Energy Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC expertise for Kurnool’s cement industry, limestone quarries, solar parks and wind energy project sites. Contractor compliance and NWC 2025-ready payroll solutions."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kurnool-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kurnool EPF & ESIC Compliance | Cement, Quarry & Renewable Energy | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for cement clusters, mining belts, and renewable energy projects in Kurnool. NWC 2025 payroll, contractor labour audits and OHS compliance."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-kurnool"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kurnool EPF & ESIC Consultant: Cement Plants, Limestone Quarries & Renewable Energy Compliance | EPFDesk",
            alternateName:
              "EPFDesk – Kurnool EPF & ESIC Compliance for Cement, Quarrying & Solar/Wind Projects",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kurnool-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address block (unchanged)
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
              "EPFDesk provides EPF and ESIC compliance solutions for Kurnool’s cement plants, limestone quarries, and renewable energy projects. Specialized focus on OHS compliance, contractor liability, and migrant workforce documentation under the New Wage Code 2025.",

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
              { "@type": "City", name: "Kurnool" },
              { "@type": "Place", name: "Nandyal Cement Cluster" },
              { "@type": "Place", name: "Kolimigundla Limestone Belt" },
              { "@type": "Place", name: "Kurnool Ultra Mega Solar Park" },
              { "@type": "Place", name: "Wind Energy Project Sites" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "52",
            },
          }),
        }}
      />

      {/* HERO SECTION */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKurnoolDist} />
      </FadeInWhenVisible>

      {/* MAIN BODY SECTIONS */}
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKurnoolDist} />
      </FadeInWhenVisible>

      {/* FAQ SECTION */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={kurnoolFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
