import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTiruppurDist, sectionsTiruppurDist } from "@/utils/data";
export const metadata = {
  title:
    "Tiruppur EPF & ESIC Compliance | NWC 2025 Payroll for Knitwear, Garment Exporters & Piece-Rate Workers – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance for Tiruppur’s knitwear ecosystem, garment exporters, MSME units, and piece-rate workforce. We offer NWC 2025 payroll restructuring, migrant labour documentation, contractor compliance, and monthly PF/ESI filing management.",

  keywords: [
    "Tiruppur EPF Consultant",
    "Tiruppur ESIC Consultant",
    "Knitwear Industry Compliance",
    "Garment Export PF ESIC",
    "Piece-Rate Worker PF",
    "NWC 2025 Tiruppur",
    "EPFDesk Tiruppur",
    "MSME Garment Compliance",
  ],

  openGraph: {
    title:
      "Tiruppur EPF & ESIC Compliance | Knitwear, Garment Exports & Piece-Rate Payroll – EPFDesk",
    description:
      "EPFDesk specializes in EPF and ESIC compliance for Tiruppur’s knitwear units, garment exporters, and MSMEs. Expert support for piece-rate wage integration, migrant labour compliance, PF/ESI registration, and NWC 2025 payroll restructuring.",
    url: "https://epfdesk.com/tiruppur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tiruppur EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tiruppur EPF & ESIC Compliance | Knitwear & Garment Export Sector – EPFDesk",
    description:
      "EPFDesk offers full EPF/ESIC compliance for Tiruppur’s knitwear, garment exporters, migrant workforce and piece-rate wage systems. NWC 2025-ready payroll structures.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Tiruppur EPF & ESIC Compliance | NWC 2025 Payroll for Knitwear,
          Garment Exporters & Piece-Rate Workers – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance for Tiruppur’s knitwear ecosystem, garment exporters, MSME units, and piece-rate workforce. We offer NWC 2025 payroll restructuring, migrant labour documentation, contractor compliance, and monthly PF/ESI filing management."
        />

        <meta
          name="keywords"
          content="Tiruppur EPF Consultant, Tiruppur ESIC Consultant, Knitwear Industry Compliance, Garment Export PF ESIC, Piece-Rate Worker PF, NWC 2025 Tiruppur, EPFDesk Tiruppur, MSME Garment Compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tiruppur EPF & ESIC Compliance | Knitwear, Garment Exports & Piece-Rate Payroll – EPFDesk"
        />
        <meta
          property="og:description"
          content="EPFDesk specializes in EPF and ESIC compliance for Tiruppur’s knitwear units, garment exporters, and MSMEs. Expert support for piece-rate wage integration, migrant labour compliance, PF/ESI registration, and NWC 2025 payroll restructuring."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/tiruppur-epf-esic-compliance"
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
          content="Tiruppur EPF & ESIC Compliance | Knitwear & Garment Export Sector – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk offers full EPF/ESIC compliance for Tiruppur’s knitwear, garment exporters, migrant workforce and piece-rate wage systems. NWC 2025-ready payroll structures."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/tiruppur-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-tiruppur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Tiruppur EPF & ESIC Compliance: NWC 2025 Payroll for Knitwear, Garment Exporters & Piece-Rate Workers | EPFDesk",
            alternateName:
              "EPFDesk – Tiruppur Knitwear & Garment Export Compliance Specialists",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/tiruppur-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged for all schemas
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
              "EPFDesk provides specialized EPF and ESIC compliance for Tiruppur’s knitwear, garment exporters, and MSME production units. We support NWC 2025 payroll restructuring, piece-rate wage integration into statutory wages, comprehensive migrant labour documentation, contractor compliance, and full monthly PF/ESI filing management.",

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
              { "@type": "City", name: "Tiruppur" },
              { "@type": "Place", name: "Knitwear Cluster" },
              { "@type": "Place", name: "Garment Export Units" },
              { "@type": "Place", name: "Dyeing & Processing Units" },
              { "@type": "Place", name: "TEA Member Units" },
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
        <PerformanceSectionIndustry data={heroDataTiruppurDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTiruppurDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
