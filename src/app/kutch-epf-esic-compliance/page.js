import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataKutchDist, sectionsKutchDist } from "@/utils/data";
export const metadata = {
  title:
    "Kutch's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for Kandla Port, Mundra SEZ & Gandhidham | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services in Kutch for port logistics, SEZ enterprises, marine trade and large contractor ecosystems across Kandla Port, Mundra SEZ and Gandhidham. Services include NWC 2025 payroll structuring, ESIC rollout advisory, contractor liability audits, and statutory filing support for high-volume port-based operations.",
  keywords: [
    "Kutch PF consultant",
    "Kutch ESIC consultant",
    "Kandla Port PF ESIC",
    "Mundra SEZ labour compliance",
    "Gandhidham logistics PF ESIC",
    "Deen Dayal Port Trust compliance",
    "port contractor PF ESIC Gujarat",
    "marine trade PF ESIC",
    "NWC 2025 Gujarat payroll",
    "EPFDesk Kutch",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kutch-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kutch EPF & ESIC Consultant | Kandla Port, Mundra SEZ & Gandhidham Compliance | EPFDesk",
    description:
      "PF & ESIC compliance support for Kandla Port, Mundra SEZ, Gandhidham logistics hubs and contractor networks. NWC 2025 payroll modeling, ESIC implementation and statutory compliance for port-led industries.",
    url: "https://epfdesk.com/kutch-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kutch PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kutch EPF & ESIC Consultant | Port, SEZ & Logistics Compliance | EPFDesk",
    description:
      "Compliance experts for Kandla Port, Mundra SEZ, Gandhidham logistics and marine trade. PF/ESI audits, contractor compliance and NWC 2025 statutory alignment.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kutch's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for
          Kandla Port, Mundra SEZ & Gandhidham | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk supports PF & ESIC compliance for Kutch’s port and SEZ ecosystem including Kandla Port, Mundra SEZ, Gandhidham and Deen Dayal Port Trust areas. Contractor workforce audits, NWC 2025 payroll, ESIC implementation and logistics compliance."
        />

        <meta
          name="keywords"
          content="Kutch PF consultant, Kandla Port compliance, Mundra SEZ PF ESIC, Gandhidham PF ESIC, Deen Dayal Port Trust labour compliance, logistics PF ESIC Gujarat, marine trade contractor PF, NWC 2025 Gujarat payroll, SEZ statutory compliance, EPFDesk Kutch"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kutch-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kutch EPF & ESIC Consultant | Ports, SEZ & Logistics Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for port logistics, SEZ units and contractor ecosystems in Kutch. NWC 2025 payroll advisory, ESIC rollout and statutory filings."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kutch-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kutch EPF & ESIC Compliance | Kandla Port, Mundra SEZ & Logistics | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance solutions for Kandla Port, Mundra SEZ and Gandhidham logistics operations. PF, ESIC, contractor audits & NWC 2025 restructuring."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-kutch"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kutch's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for Kandla Port, Mundra SEZ, and Gandhidham | EPFDesk",
            alternateName:
              "EPFDesk – Kutch Ports, Logistics & SEZ Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kutch-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged as per your requirement
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
              "EPFDesk offers EPF and ESIC compliance in Kutch, specializing in NWC 2025 payroll structuring for port logistics, heavy industries, marine trade, and SEZ enterprises. We provide urgent statutory advisory on ESIC implementation and contract labour liability management for Deen Dayal Port Trust, Mundra SEZ, Gandhidham industrial areas, and large contractor ecosystems at Kandla and Mundra ports.",

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
              { "@type": "Region", name: "Kutch" },
              { "@type": "Place", name: "Kandla Port" },
              { "@type": "Place", name: "Mundra SEZ" },
              { "@type": "Place", name: "Gandhidham" },
              { "@type": "Place", name: "Deen Dayal Port Trust Jurisdiction" },
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
        <PerformanceSectionIndustry data={heroDataKutchDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKutchDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
