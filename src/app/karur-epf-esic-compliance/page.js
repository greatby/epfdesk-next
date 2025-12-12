import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataKarurDist, sectionsKarurDist } from "@/utils/data";
export const metadata = {
  title:
    "Karur EPF & ESIC Compliance: NWC 2025 for Home Textiles, Export Units & Paper Manufacturing | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance support for Karur’s home textile exporters, paper mills, and bus body building units. We specialize in export-driven wage structuring, NWC 2025 payroll alignment, migrant & contract labour compliance, PF/ESI applicability, and monthly statutory management.",
  keywords: [
    "Karur PF consultant",
    "Karur ESIC consultant",
    "home textile PF ESIC",
    "export textiles compliance Karur",
    "paper mill PF ESIC Tamil Nadu",
    "bus body building PF ESIC",
    "NWC 2025 payroll Karur",
    "contract labour compliance Karur",
    "migrant worker PF ESIC",
    "EPFDesk Karur",
  ],
  alternates: {
    canonical: "https://epfdesk.com/karur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Karur EPF & ESIC Consultant | Home Textiles, Paper Mills & Bus Body Building | EPFDesk",
    description:
      "PF & ESIC compliance services for Karur’s home textile exporters, paper manufacturers, and bus body building units. NWC 2025 payroll structuring, migrant labour compliance, and statutory audits.",
    url: "https://epfdesk.com/karur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Karur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Karur EPF & ESIC Compliance | Home Textiles, Paper & Bus Body Building | EPFDesk",
    description:
      "Compliance experts for Karur’s home textile clusters, paper mills and bus body building units. NWC 2025 payroll, contract labour audits, PF/ESI coverage & statutory filings.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Karur EPF & ESIC Compliance: NWC 2025 for Home Textiles, Export Units
          & Paper Manufacturing | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk specializes in PF & ESIC compliance for Karur’s home textile exports, paper manufacturing belt, and bus body building sector. Services include NWC 2025 payroll alignment, PF/ESI applicability for migrant/contract labour, and complete statutory management."
        />

        <meta
          name="keywords"
          content="Karur PF consultant, Karur ESIC consultant, home textile PF ESIC, export textile PF compliance, paper mill labour compliance, bus body building PF ESIC, NWC 2025 Karur wage structuring, migrant worker PF ESIC TN, contract labour audits Karur, EPFDesk Karur"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/karur-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Karur EPF & ESIC Consultant | Home Textiles, Paper Mills & Bus Body Building | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Karur's home textile export hub, paper mills, and bus body building units. NWC 2025 payroll, migrant labour compliance & statutory filing experts."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/karur-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Karur EPF & ESIC Compliance | Home Textiles, Paper & Bus Body Building | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for Karur’s home textile exporters, paper belt & bus body building sector. NWC 2025 compliance & contractor audits included."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-karur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Karur EPF & ESIC Compliance: NWC 2025 for Home Textiles, Export Units & Paper Manufacturing | EPFDesk",
            alternateName:
              "EPFDesk – Karur Home Textile, Paper & Bus Body Building Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/karur-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard global address block
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
              "Karur is a global hub for home textiles and a major center for paper manufacturing and bus body building. EPFDesk addresses Karur’s compliance challenges around export-driven wage structures, EPF/ESIC coverage for migrant and contract workers, and alignment with NWC 2025 requirements.",

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
              { "@type": "City", name: "Karur" },
              { "@type": "Place", name: "Home Textile Export Cluster" },
              { "@type": "Place", name: "Paper Manufacturing Belt" },
              { "@type": "Place", name: "Bus Body Building Sector" },
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
        <PerformanceSectionIndustry data={heroDataKarurDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKarurDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
