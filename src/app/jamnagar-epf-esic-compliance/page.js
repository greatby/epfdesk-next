import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataJamnagarDist, sectionsJamnagarDist } from "@/utils/data";
export const metadata = {
  title:
    "Jamnagar PF & ESI Consultant: NWC 2025 Compliance for Brass Industry, GIDC Jamnagar & Reliance Refinery Contractors | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services in Jamnagar for brass part manufacturers, engineering units, GIDC industries, and refinery-linked contractors. Expertise includes NWC 2025 payroll restructuring, EPF Exempted Trust compliance, contractor workforce audits, and Oil & Gas statutory adherence.",
  keywords: [
    "Jamnagar PF consultant",
    "Jamnagar ESIC consultant",
    "Brass industry PF ESIC",
    "GIDC Jamnagar compliance",
    "Reliance Refinery contractor PF ESIC",
    "Oil & Gas contractor compliance",
    "EPF Exempted Trust Jamnagar",
    "NWC 2025 payroll Jamnagar",
    "engineering unit PF ESIC",
    "EPFDesk Jamnagar",
  ],
  alternates: {
    canonical: "https://epfdesk.com/jamnagar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Jamnagar EPF & ESIC Consultant | Brass Industry, GIDC & Refinery Contractor Compliance | EPFDesk",
    description:
      "PF & ESIC compliance experts for Jamnagar’s brass industry, GIDC units, engineering clusters, and refinery contractor ecosystem. NWC 2025 structuring, contractor audits & statutory risk reduction.",
    url: "https://epfdesk.com/jamnagar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Jamnagar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jamnagar EPF & ESIC Consultant | Brass, Engineering & Refinery Contractor Compliance | EPFDesk",
    description:
      "PF & ESIC advisory for brass manufacturers, GIDC Jamnagar units, and Reliance Refinery contractor networks. NWC 2025 payroll, contractor verification, and EPF Trust compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Jamnagar PF & ESI Consultant: NWC 2025 Compliance for Brass Industry,
          GIDC Jamnagar & Reliance Refinery Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance services for brass units, engineering clusters, GIDC Jamnagar, and refinery contractors. Expertise in NWC 2025 payroll, contractor audits, EPF Exempted Trust support, and Oil & Gas statutory compliance."
        />

        <meta
          name="keywords"
          content="Jamnagar PF consultant, Jamnagar ESIC consultant, brass industry PF compliance, GIDC Jamnagar ESIC, Reliance refinery PF ESIC, Oil & Gas contractor PF audits, EPF Exempted Trust Jamnagar, NWC 2025 Gujarat payroll, engineering unit PF ESIC, EPFDesk Jamnagar"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jamnagar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Jamnagar EPF & ESIC Consultant | Brass Industry, GIDC & Refinery Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Jamnagar's brass & engineering units, GIDC industries, and refinery-linked contractor ecosystem. NWC 2025 payroll and contractor verification specialist."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/jamnagar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jamnagar EPF & ESIC Consultant | Brass, Engineering & Refinery Contractor Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC compliance services for Jamnagar's brass industry, engineering units, Oil & Gas contractors, and GIDC clusters. NWC 2025 structuring & EPF Trust advisory."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-jamnagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Jamnagar PF & ESI Consultant: NWC 2025 Compliance for Brass Industry, GIDC Jamnagar, and Reliance Refinery Contractors | EPFDesk",
            alternateName:
              "EPFDesk – Jamnagar Brass, Refinery & Engineering Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jamnagar-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address kept the same as requested
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
              "EPFDesk offers EPF and ESIC compliance in Jamnagar, specializing in NWC 2025 payroll restructuring for the Brass Industry and engineering units. We provide expert support for EPF Exempted Trust compliance, contractor workforce management, and statutory oversight for Oil & Gas and refinery-linked contractors across GIDC Jamnagar and the Reliance Refinery ecosystem.",

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
              { "@type": "City", name: "Jamnagar" },
              { "@type": "Place", name: "Brass Industry Belt" },
              { "@type": "Place", name: "GIDC Jamnagar" },
              { "@type": "Place", name: "Reliance Refinery Zone" },
              { "@type": "Place", name: "Oil & Gas Contractor Ecosystem" },
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
        <PerformanceSectionIndustry data={heroDataJamnagarDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJamnagarDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
