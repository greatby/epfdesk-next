import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataYadadriDist, sectionsYadadriDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Yadadri EPF & ESIC Compliance | NWC 2025 for Pochampally Handloom, Bhongir IP Chemicals & Dandumalkapur MSME Park | EPFDesk",
  description:
    "EPFDesk provides EPF & ESIC compliance services in Yadadri Bhuvanagiri, covering Pochampally Handloom Cluster, Bhongir Industrial Park, Chemicals, Pharma & Dandumalkapur MSME Park. We assist with NWC 2025 payroll restructuring, PF audits, ESIC registration, contractor compliance and piece-rate wage integration.",
  keywords: [
    "Yadadri EPF Consultant",
    "Yadadri ESIC Consultant",
    "Bhongir Industrial Park PF ESIC",
    "Pochampally Handloom PF Compliance",
    "Dandumalkapur MSME Park Compliance",
    "NWC 2025 Telangana",
    "EPFDesk Yadadri Bhuvanagiri",
    "Contractor PF Audit Telangana",
  ],
  openGraph: {
    title:
      "Yadadri EPF & ESIC Compliance | Pochampally Handloom, Bhongir Chemicals & MSME Park – EPFDesk",
    description:
      "Specialized EPF and ESIC compliance for Yadadri Bhuvanagiri: Handloom clusters, Chemical/Pharma units, Bhongir IP and Dandumalkapur MSME Park. NWC 2025 wage restructuring, contractor compliance, PF audits & ESIC applicability support.",
    url: "https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Yadadri EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Yadadri EPF & ESIC Consultant | Pochampally Handloom, Bhongir IP & MSME Compliance – EPFDesk",
    description:
      "EPFDesk offers compliance services for Yadadri’s handloom, chemical, pharma and MSME sectors. PF audits, ESIC registration, wage code restructuring & contractor compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Yadadri EPF & ESIC Compliance | NWC 2025 for Pochampally Handloom,
          Bhongir Chemicals & MSME Park | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance solutions in Yadadri Bhuvanagiri, covering Pochampally Handloom, Bhongir Industrial Park, Chemicals & Pharma units, and Dandumalkapur MSME Park. Includes NWC 2025 wage restructuring, PF audits, contractor compliance & ESIC coverage mapping."
        />

        <meta
          name="keywords"
          content="Yadadri EPF Consultant, Yadadri ESIC Consultant, Pochampally Handloom PF ESIC, Bhongir Industrial Park PF Compliance, Dandumalkapur MSME Park, NWC 2025 Telangana, EPFDesk Telangana, Contractor PF Audit Telangana"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Yadadri EPF & ESIC Compliance | Handloom, Chemicals & MSME – EPFDesk"
        />
        <meta
          property="og:description"
          content="Expert EPF & ESIC compliance for Yadadri’s handloom, chemical, pharma and MSME sectors. Services include NWC 2025 restructuring, contractor audits, PF/ESI registration, and wage structuring for piece-rate and seasonal workers."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance"
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
          content="Yadadri EPF & ESIC Consultant – Handloom, Chemicals & MSME | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="NWC 2025 ready compliance for handloom, chemicals, pharma and MSMEs in Yadadri Bhuvanagiri. PF audits, ESIC coverage mapping & contractor compliance."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance"
        />
      </Head>
      <script
        id="schema-yadadri"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Yadadri EPF & ESIC Compliance: NWC 2025 for Pochampally Handloom, Bhongir IP Chemicals, and Dandumalkapur MSME Park | EPFDesk",
            alternateName:
              "EPFDesk – Yadadri Bhuvanagiri EPF & ESIC Compliance for Handlooms, Chemicals, Pharma, and MSMEs",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged as per your template
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
              "EPFDesk offers EPF and ESIC compliance in Yadadri Bhuvanagiri, specializing in NWC 2025 wage alignment for handlooms, chemical and pharma units, and MSMEs. Services include PF audits, ESIC registration, contractor compliance, and piece-rate worker contribution structuring.",

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
              { "@type": "City", name: "Yadadri Bhuvanagiri" },
              { "@type": "Place", name: "Pochampally Handloom Cluster" },
              { "@type": "Place", name: "Bhongir Industrial Park" },
              { "@type": "Place", name: "Dandumalkapur MSME Park" },
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
        <PerformanceSectionIndustry data={heroDataYadadriDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsYadadriDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
