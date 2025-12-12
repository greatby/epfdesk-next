import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataKhammamDist, sectionsKhammamDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Khammam EPF & ESIC Consultant: NWC 2025 for Mining Contractors, Rice Mills & Transport Logistics | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services in Khammam for SCCL mining contractors, rice mills, agro-processing units, and logistics companies. We offer NWC 2025 wage restructuring, contractor compliance audits, PF/ESI applicability checks, and statutory filing support.",
  keywords: [
    "Khammam PF consultant",
    "Khammam ESIC consultant",
    "SCCL contractor PF ESIC",
    "mining logistics PF compliance",
    "rice mill PF ESIC Telangana",
    "agro processing PF ESIC",
    "transport logistics PF compliance",
    "NWC 2025 payroll Telangana",
    "contractor PF ESIC audits",
    "EPFDesk Khammam",
  ],
  alternates: {
    canonical: "https://epfdesk.com/khammam-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Khammam EPF & ESIC Consultant | SCCL Mining Contractors, Rice Mills & Logistics | EPFDesk",
    description:
      "PF & ESIC compliance experts for SCCL supply chain contractors, rice mills, agro-processing units, and transport/logistics operators in Khammam. NWC 2025 payroll alignment & contractor audits.",
    url: "https://epfdesk.com/khammam-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Khammam PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Khammam EPF & ESIC Consultant | Mining, Agro-Processing & Transport Compliance | EPFDesk",
    description:
      "Compliance support for Khammam’s SCCL mining supply chain, rice mills, agro-processing industries, and logistics companies. PF/ESI audits, NWC 2025 payroll & contractor management.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Khammam EPF & ESIC Consultant: NWC 2025 for Mining Contractors, Rice
          Mills & Transport Logistics | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance solutions for Khammam’s SCCL mining contractor ecosystem, rice mills, agro-processing units, and logistics operators. Services include NWC 2025 payroll revision, PF/ESI applicability, contractor audits, and statutory filings."
        />

        <meta
          name="keywords"
          content="Khammam PF consultant, SCCL contractor PF ESIC, mining logistics labour compliance, rice mill ESIC Telangana, agro processing PF ESIC, transport PF ESIC, NWC 2025 Telangana payroll, contract labour audits Khammam, PF ESI compliance Telangana, EPFDesk Khammam"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/khammam-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Khammam EPF & ESIC Consultant | SCCL Mining Contractors, Rice Mills & Logistics | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Khammam's SCCL mining supply chain, rice mills, agro-processing units, and transport/logistics ecosystem. NWC 2025 payroll and statutory audits included."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/khammam-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Khammam EPF & ESIC Compliance | Mining, Agro-Processing & Transport | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for SCCL contractors, rice mills, agro-processing units and transport companies in Khammam. NWC 2025 alignment and contractor audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-khammam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Khammam EPF & ESIC Consultant: NWC 2025 for Mining Contractors, Rice Mills & Transport Logistics | EPFDesk",
            alternateName:
              "EPFDesk – Khammam EPF & ESIC Compliance for SCCL Supply Chain, Agro-Processing & Transport",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/khammam-epf-esic-compliance",
            telephone: "+91-9945933333",

            // TEMPLATE ADDRESS – unchanged as per your system
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
              "EPFDesk manages EPF and ESIC compliance in Khammam, specializing in NWC 2025 liability for mining supply chain contractors (SCCL/CMPS), agro-processing units, rice mills, and logistics companies. Expert PF audits, ESIC coverage mapping, contractor compliance, and wage restructuring.",

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
              { "@type": "City", name: "Khammam" },
              { "@type": "Place", name: "SCCL Mining Logistics Zone" },
              { "@type": "Place", name: "Madhira Rice Mills" },
              { "@type": "Place", name: "Wyra Agro-Processing Belt" },
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
        <PerformanceSectionIndustry data={heroDataKhammamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKhammamDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
