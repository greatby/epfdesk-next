import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataKanchipuramDist, sectionsKanchipuramDist } from "@/utils/data";
export const metadata = {
  title:
    "Kanchipuram EPF & ESIC Expert: NWC 2025 Payroll for Oragadam Automotive & Sriperumbudur SEZ Manufacturing | EPFDesk",
  description:
    "EPFDesk delivers PF & ESIC compliance for Kanchipuram’s automotive, electronics, SEZ and SIPCOT manufacturing hubs. We support OEMs and supplier units in Oragadam and Sriperumbudur with NWC 2025 payroll restructuring, contract-labour compliance, PF/ESI filings and complete statutory management.",
  keywords: [
    "Kanchipuram PF consultant",
    "Kanchipuram ESIC consultant",
    "Oragadam SIPCOT PF ESIC",
    "Sriperumbudur SIPCOT labour compliance",
    "automotive manufacturing PF ESIC",
    "electronics SEZ PF compliance",
    "NWC 2025 payroll Tamil Nadu",
    "contract labour PF ESIC TN",
    "SEZ statutory compliance TN",
    "EPFDesk Kanchipuram",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kanchipuram-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kanchipuram EPF & ESIC Consultant | Oragadam Automotive & Sriperumbudur Electronics SEZ Compliance | EPFDesk",
    description:
      "PF & ESIC compliance support for automotive OEMs, EMS/electronics units, SIPCOT industries and SEZ operations across Oragadam and Sriperumbudur. NWC 2025 payroll, contractor audits and monthly statutory filings.",
    url: "https://epfdesk.com/kanchipuram-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kanchipuram PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kanchipuram EPF & ESIC Consultant | Automotive, Electronics & SEZ Compliance | EPFDesk",
    description:
      "PF & ESIC advisory for Oragadam and Sriperumbudur's auto and electronics manufacturing ecosystem. Expert NWC 2025 payroll structuring and end-to-end statutory compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      {" "}
      <Head>
        <title>
          Kanchipuram EPF & ESIC Expert: NWC 2025 Payroll for Oragadam
          Automotive & Sriperumbudur SEZ Manufacturing | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance services for Kanchipuram’s automotive, electronics, SEZ & SIPCOT clusters in Oragadam and Sriperumbudur. NWC 2025 payroll design, PF/ESI registration, contractor audits & OEM-driven statutory compliance."
        />

        <meta
          name="keywords"
          content="Kanchipuram PF consultant, Oragadam SIPCOT PF ESIC, Sriperumbudur SEZ compliance, automotive PF ESIC Tamil Nadu, electronics EMS PF ESIC, NWC 2025 payroll Tamil Nadu, contract labour compliance TN, SIPCOT statutory filings, OEM PF compliance TN, EPFDesk Kanchipuram"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kanchipuram-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kanchipuram EPF & ESIC Consultant | Oragadam Auto Hub & Sriperumbudur Electronics SEZ | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance specialists for automotive, electronics and SEZ units across Oragadam and Sriperumbudur. NWC 2025 payroll restructuring & full statutory support."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kanchipuram-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kanchipuram EPF & ESIC Compliance | Auto, Electronics & SEZ Specialists | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for Oragadam auto corridor and Sriperumbudur SEZ industries. NWC 2025 payroll, contractor audits and OEM statutory compliance."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-kanchipuram"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kanchipuram EPF & ESIC Expert: NWC 2025 Payroll for Oragadam Automotive and Sriperumbudur SEZ Manufacturing | EPFDesk",
            alternateName:
              "EPFDesk – Kanchipuram Automotive & Electronics Compliance Specialists",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kanchipuram-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address stays consistent across all schemas
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
              "EPFDesk specializes in EPF and ESIC compliance for Kanchipuram district, covering the automotive, electronics, and SEZ manufacturing ecosystem across Oragadam and Sriperumbudur. We support OEMs and their suppliers with NWC 2025 payroll restructuring, contract-labour compliance, and end-to-end statutory management for SIPCOT industrial parks and SEZs.",

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
              { "@type": "District", name: "Kanchipuram" },
              { "@type": "Place", name: "Oragadam SIPCOT" },
              { "@type": "Place", name: "Sriperumbudur SIPCOT" },
              { "@type": "Place", name: "Automotive Manufacturing Belt" },
              { "@type": "Place", name: "Electronics SEZs" },
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
        <PerformanceSectionIndustry data={heroDataKanchipuramDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKanchipuramDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
