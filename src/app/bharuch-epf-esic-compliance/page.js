import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";

import Script from "next/script";
import { heroDataBharuchDist, sectionsBharuchDist } from "@/utils/data";
export const metadata = {
  title:
    "Bharuch PF & ESI Expert: NWC 2025 Ready Compliance for Ankleshwar GIDC, Dahej SIR & PCPIR Corridor | EPFDesk",
  description:
    "EPFDesk offers PF & ESIC compliance services in Bharuch with NWC 2025-ready payroll for MNCs in the PCPIR region. Expertise in PF audits, ESIC inspections, contractor compliance, and statutory adherence for chemical & pharma units in Ankleshwar GIDC and Dahej Port.",
  keywords: [
    "Bharuch PF consultant",
    "ESI consultant Bharuch",
    "Ankleshwar GIDC PF compliance",
    "Dahej SIR ESIC compliance",
    "PCPIR chemical hub PF ESIC",
    "PF & ESIC consultant Bharuch",
    "NWC 2025 payroll compliance Gujarat",
    "EPFDesk Bharuch",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bharuch-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bharuch PF & ESI Expert | Ankleshwar GIDC & Dahej SIR Compliance | EPFDesk",
    description:
      "Specialised PF & ESIC compliance for Bharuch’s PCPIR chemical corridor, Ankleshwar GIDC, and Dahej SIR. End-to-end payroll restructuring, contractor audits, and NWC 2025 readiness.",
    url: "https://epfdesk.com/bharuch-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Bharuch PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bharuch PF & ESI Expert | Ankleshwar GIDC & Dahej SIR Compliance | EPFDesk",
    description:
      "EPFDesk delivers PF, ESIC, and NWC 2025 compliance expertise for Bharuch’s chemical industry clusters including Ankleshwar GIDC & Dahej Port.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};


const page = () => {
  return (
    <><Head>
        <title>
          Bharuch PF & ESI Expert: NWC 2025 Ready Compliance for Ankleshwar
          GIDC, Dahej SIR & PCPIR Corridor | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers PF & ESIC compliance services in Bharuch with NWC 2025-ready payroll for MNCs in the PCPIR region. Expertise in contractor audits, PF inspections, ESIC adherence, and statutory compliance for chemical & pharma units in Ankleshwar GIDC and Dahej Port."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/bharuch-epf-esic-compliance"
        />

        <meta
          name="keywords"
          content="Bharuch PF consultant, ESIC consultant Bharuch, Ankleshwar GIDC PF compliance, Dahej SIR ESIC compliance, PCPIR chemical hub compliance, PF ESIC Gujarat, EPFDesk Bharuch, NWC 2025 payroll"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bharuch PF & ESI Expert | Ankleshwar GIDC & Dahej SIR Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialised PF & ESIC compliance for Bharuch’s PCPIR chemical corridor, Ankleshwar GIDC, and Dahej SIR. End-to-end payroll restructuring, contractor audits, and NWC 2025 readiness."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/bharuch-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bharuch PF & ESI Expert | Ankleshwar GIDC & Dahej SIR Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="End-to-end PF & ESIC compliance services for Bharuch’s chemical manufacturing ecosystem including Ankleshwar GIDC & Dahej Port."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-bharuch"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bharuch PF & ESI Expert: NWC 2025 Ready Compliance for Ankleshwar GIDC, Dahej SIR, and the PCPIR Corridor | EPFDesk",
            alternateName: "EPFDesk – Bharuch PCPIR & Chemical Hub Compliance",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bharuch-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged
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
              "EPFDesk offers EPF and ESIC compliance in Bharuch, specializing in NWC 2025 payroll for MNCs operating within the PCPIR region. We ensure 100% statutory adherence for pharma and chemical units in Ankleshwar GIDC and Dahej Port, including expert PF and ESI liability resolution. Bharuch’s compliance landscape is shaped by large-scale MNC operations, chemical safety regulations, and project-based labour in the Dahej PCPIR and Ankleshwar industrial corridor.",

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
              { "@type": "City", name: "Bharuch" },
              { "@type": "Place", name: "Ankleshwar GIDC" },
              { "@type": "Place", name: "Dahej SIR" },
              { "@type": "Place", name: "PCPIR Corridor" },
              { "@type": "Place", name: "Dahej Port" },
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
        <PerformanceSectionIndustry data={heroDataBharuchDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBharuchDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
