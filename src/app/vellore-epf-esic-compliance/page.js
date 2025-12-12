import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataVelloreDist, sectionsVelloreDist } from "@/utils/data";
export const metadata = {
  title:
    "Vellore EPF & ESIC Compliance | NWC 2025 for Leather, Tanning & Footwear Export Units – EPFDesk",
  description:
    "EPFDesk delivers EPF & ESIC compliance solutions for Vellore’s leather manufacturing ecosystem, including Ambur and Ranipet clusters. Expertise in piece-rate wage restructuring under NWC 2025, chemical-zone ESIC applicability, PF audits, contractor compliance, and statutory workforce digitization.",
  keywords: [
    "Vellore EPF Consultant",
    "Vellore ESIC Consultant",
    "Ambur Leather PF ESIC",
    "Ranipet Tannery Compliance",
    "Footwear Export EPF ESIC",
    "Leather industry wage restructuring",
    "NWC 2025 Vellore",
    "EPFDesk Vellore",
  ],
  openGraph: {
    title:
      "Vellore EPF & ESIC Compliance | Leather, Tanning & Footwear Export Units – EPFDesk",
    description:
      "EPFDesk specializes in EPF & ESIC compliance for Vellore’s leather clusters including Ambur and Ranipet. Includes NWC 2025 payroll restructuring, piece-rate statutory conversion, contractor audits, and chemical-zone ESIC risk controls.",
    url: "https://epfdesk.com/vellore-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vellore EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vellore EPF & ESIC Compliance | Leather & Footwear Export Sector – EPFDesk",
    description:
      "EPFDesk provides specialized EPF & ESIC compliance for leather, tanning and footwear export units in Vellore, Ambur and Ranipet. NWC 2025 payroll structuring, audits, and contractor compliance support.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Vellore EPF & ESIC Compliance | Leather, Tanning & Footwear Export
          Sector – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers EPF & ESIC compliance for Vellore’s leather clusters, including Ambur and Ranipet. Services include NWC 2025 piece-rate wage restructuring, PF/ESI audits, contractor compliance, and statutory readiness for chemical-process units."
        />

        <meta
          name="keywords"
          content="Vellore EPF Consultant, Vellore ESIC Consultant, Ambur Leather PF ESIC, Ranipet Tannery Compliance, Footwear Export EPF ESIC, Leather industry wage restructuring, NWC 2025 Vellore, EPFDesk Vellore"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Vellore EPF & ESIC Compliance | Leather, Tanning & Footwear Export – EPFDesk"
        />
        <meta
          property="og:description"
          content="EPFDesk provides EPF & ESIC compliance expertise for Ambur and Ranipet leather clusters. Specialized in NWC 2025 payroll restructuring, contractor PF/ESI verification and high-risk chemical-zone statutory management."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/vellore-epf-esic-compliance"
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
          content="Vellore EPF & ESIC Compliance | Leather & Footwear Export – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk delivers compliance for Vellore’s leather, tanning and footwear export sectors including Ambur and Ranipet. Expertise in NWC 2025 payroll restructuring and contractor statutory audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://epfdesk.com/vellore-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-vellore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Vellore EPF & ESIC Solutions: NWC 2025 for Leather, Tanning & Footwear Exports | Ambur & Ranipet Labour Compliance | EPFDesk",
            alternateName:
              "EPFDesk – Vellore Leather, Tanning & Footwear Industry Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/vellore-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address (same across all schemas)
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
              "EPFDesk provides specialized EPF and ESIC compliance for Vellore’s leather export ecosystem, including Ambur and Ranipet. We focus on restructuring tanning and finishing piece-rate wages to meet NWC 2025 Basic Pay norms and managing ESIC compliance in high-risk chemical processing environments.",

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
              { "@type": "City", name: "Vellore" },
              { "@type": "Place", name: "Ambur Leather Cluster" },
              { "@type": "Place", name: "Ranipet Tanning Belt" },
              { "@type": "Place", name: "Footwear Export Units" },
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
        <PerformanceSectionIndustry data={heroDataVelloreDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVelloreDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
