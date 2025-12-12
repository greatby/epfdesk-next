import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataVadodaraDist, sectionsVadodaraDist } from "@/utils/data";
export const metadata = {
  title:
    "Vadodara EPF & ESIC Consultant | NWC 2025 Compliance for GSFC, Nandesari GIDC & Petrochemical Corridor – EPFDesk",
  description:
    "EPFDesk delivers EPF & ESIC compliance solutions in Vadodara for petrochemical, refinery, PSU, and heavy engineering companies. Expertise includes NWC 2025 payroll restructuring, contractor workforce compliance, PF/ESI audits, hazard pay structuring, and shift-based statutory management for GSFC, Nandesari GIDC, and PCC Corridor units.",
  keywords: [
    "Vadodara EPF Consultant",
    "Vadodara ESIC Consultant",
    "Nandesari GIDC PF Compliance",
    "GSFC ESIC Compliance",
    "Petrochemical Corridor PF ESIC",
    "Refinery contractor compliance Vadodara",
    "NWC 2025 Vadodara payroll",
    "EPFDesk Vadodara",
  ],
  openGraph: {
    title:
      "Vadodara EPF & ESIC Consultant | GSFC, Nandesari GIDC & Petrochemical Corridor – EPFDesk",
    description:
      "EPFDesk provides EPF & ESIC compliance advisory for Vadodara’s petrochemical, refinery, and engineering sectors including Nandesari GIDC, PCC Corridor, and PSU operations. Expert PF audits, contractor compliance, and wage-code restructuring.",
    url: "https://epfdesk.com/vadodara-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vadodara EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vadodara EPF & ESIC Compliance | GSFC, Nandesari GIDC & Petrochem Corridor – EPFDesk",
    description:
      "EPFDesk ensures EPF & ESIC compliance for Vadodara’s petrochemical, refinery, PSU, and engineering units. NWC 2025 payroll models, statutory audits, contractor workforce compliance & risk mitigation.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Vadodara EPF & ESIC Consultant | NWC 2025 Compliance for GSFC,
          Nandesari GIDC & Petrochemical Corridor – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers EPF & ESIC compliance in Vadodara for petrochemical, refinery, PSU and heavy engineering units. Specializing in NWC 2025 payroll structuring, PF/ESI audits, contractor compliance, hazard pay policy, and shift-based statutory adherence for GSFC, Nandesari GIDC, and the PCC Corridor."
        />

        <meta
          name="keywords"
          content="Vadodara EPF Consultant, Vadodara ESIC Consultant, Nandesari GIDC PF Compliance, GSFC ESIC Compliance, Petrochemical Corridor PF ESIC, Refinery contractor compliance Vadodara, NWC 2025 Vadodara payroll, EPFDesk Vadodara"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Vadodara EPF & ESIC Consultant | GSFC, Nandesari GIDC & Petrochemical Corridor – EPFDesk"
        />
        <meta
          property="og:description"
          content="EPFDesk provides EPF & ESIC compliance support for Vadodara’s petrochemical and engineering sectors, including GSFC, Nandesari GIDC, and PCC Corridor. Expert PF audits, ESI applicability, contractor risk control & New Wage Code alignment."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/vadodara-epf-esic-compliance"
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
          content="Vadodara EPF & ESIC Compliance | Petrochemical & Engineering Sector – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk offers full EPF & ESIC compliance, wage-code alignment, PF/ESI audits, contractor verification & hazard pay optimization for Vadodara’s petrochemical and industrial clusters."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/vadodara-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-vadodara"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Vadodara EPF & ESIC Consultant | NWC 2025 Ready Compliance for GSFC, Nandesari GIDC & Petrochemical Corridor | EPFDesk",
            alternateName:
              "EPFdesk - Petrochem & Engineering Compliance Vadodara",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/vadodara-epf-esic-compliance",
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
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "EPFDesk offers EPF and ESIC compliance in Vadodara (Gujarat), specializing in NWC 2025 payroll restructuring for Petrochemical, Refinery, and Heavy Engineering firms. We ensure 100% adherence for PSUs in the PCC Area and GIDC Nandesari, including expert PF & ESI audits. Vadodara is a Petrochem & Engineering powerhouse with complex shift-based operations, hazard pay management, and significant contractor-based compliance challenges.",

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
              { "@type": "City", name: "Vadodara" },
              { "@type": "Place", name: "Nandesari GIDC" },
              {
                "@type": "Place",
                name: "PCC Area (Petrochemical Complex Corridor)",
              },
              { "@type": "Place", name: "GSFC Zone" },
              { "@type": "Place", name: "Baroda Industrial Estate" },
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
        <PerformanceSectionIndustry data={heroDataVadodaraDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVadodaraDist} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsAutomotive} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
