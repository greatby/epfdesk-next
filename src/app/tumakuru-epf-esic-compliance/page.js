import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTumakuruDist, sectionsTumakuruDist, faqTumakuru } from "@/utils/data";

export const metadata = {
  title:
    "Tumakuru EPF & ESIC Compliance for VNA Industrial Area, Cement & Auto Component Factories | EPFDesk",
  description:
    "Expert PF & ESIC defence for Tumakuru's VNA Industrial Area and CBIC manufacturing units. Specialized in Principal Employer liability, factory ESIC accident claims, and PF compliance for cement, food processing, and auto component factories.",
  keywords: [
    "Tumakuru PF consultant",
    "Tumakuru ESIC consultant",
    "VNA Industrial Area EPF ESIC",
    "cement factory PF ESIC Tumakuru",
    "auto components PF ESIC",
    "CBIC node statutory compliance",
    "NWC 2025 Tumakuru payroll",
    "Principal Employer PF liability Tumakuru",
    "factory accident ESIC claim Tumakuru",
    "EPFDesk Tumakuru",
  ],
  alternates: {
    canonical: "https://epfdesk.com/tumakuru-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Tumakuru EPF & ESIC Consultant | VNA Industrial Area, Cement & Auto Component Factories | EPFDesk",
    description:
      "PF & ESIC compliance services for Tumakuru’s manufacturing sector — VNA Industrial Area, cement factories, auto components, food processing and CBIC corridor units.",
    url: "https://epfdesk.com/tumakuru-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Tumakuru PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tumakuru EPF & ESIC Compliance | VNA Industrial Area, Cement & Auto Components | EPFDesk",
    description:
      "Compliance experts for Tumakuru’s industrial clusters — PF/ESI management, NWC 2025 wage restructuring, contractor compliance and factory ESIC accident claim support.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Tumakuru EPF & ESIC Compliance for VNA Industrial Area, Cement & Auto Components | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC specialists for Tumakuru’s VNA Industrial Area, cement factories, auto components and CBIC corridor industries. Expertise in PE liability, factory ESIC claims and NWC 2025 PF restructuring."
        />

        <meta
          name="keywords"
          content="Tumakuru PF consultant, Tumakuru ESIC consultant, VNA Industrial Area compliance, cement factory PF ESIC, auto components statutory compliance, CBIC Tumakuru PF ESIC, NWC 2025 Tumakuru wages, Principal Employer PF liability Tumakuru, factory accident ESIC claim Tumakuru"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/tumakuru-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Tumakuru EPF & ESIC Consultant | VNA Industrial Area, Cement & Auto Component Factories | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Tumakuru’s VNA Industrial Area and heavy manufacturing hubs. Specialized in PE liability, ESIC accident cases, NWC 2025 restructuring & factory compliance."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/tumakuru-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tumakuru EPF & ESIC Compliance | VNA Industrial Area, Cement & Auto Components | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Expert EPF & ESIC support for Tumakuru's factories, cement plants and CBIC industries—contract labour compliance, ESIC claims and PF audits."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-tumakuru"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Tumakuru EPF & ESIC Compliance for VNA Industrial Area, Cement & Auto Component Factories | EPFDesk",
            alternateName:
              "EPFDesk – Tumakuru PF ESIC Consultants for Heavy Engineering & CBIC Corridor",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/tumakuru-epf-esic-compliance",
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
              latitude: 13.3409,
              longitude: 77.1010,
            },

            description:
              "Tumakuru is a major heavy manufacturing hub with VNA Industrial Area, cement plants, auto component factories and CBIC corridor industries. EPFDesk specializes in contractor PF/ESI compliance, ESIC accident claim handling and NWC 2025 payroll restructuring.",
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
              { "@type": "City", name: "Tumakuru" },
              { "@type": "Place", name: "VNA Industrial Area" },
              { "@type": "Place", name: "KIADB Industrial Areas" },
              { "@type": "Place", name: "CBIC Corridor Node" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "53",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTumakuruDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTumakuruDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqTumakuru} />
    </>
  );
};

export default page;
