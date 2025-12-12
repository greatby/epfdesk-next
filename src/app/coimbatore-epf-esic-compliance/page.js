import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";

import Script from "next/script";
import { heroDataCoimbatoreDist, sectionsCoimbatoreDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Coimbatore EPF & ESIC Solutions: NWC 2025 for Spinning Mills, Pump Manufacturing & IT SEZs | EPFDesk",
  description:
    "EPFDesk delivers end-to-end PF & ESIC compliance services in Coimbatore for spinning mills, pump manufacturers, engineering MSMEs, and IT/ITES SEZ units. Specialized in NWC 2025 payroll restructuring, EPFO 7A defense, contractor compliance, and statutory audits for SIMA and CODISSIA member units.",
  keywords: [
    "Coimbatore PF consultant",
    "Coimbatore ESIC consultant",
    "SIMA spinning mills PF compliance",
    "CODISSIA industrial estate ESIC",
    "pump manufacturing PF ESIC",
    "Coimbatore IT SEZ compliance",
    "NWC 2025 payroll Coimbatore",
    "EPFO 7A defense Coimbatore",
    "engineering MSME PF ESIC",
    "EPFDesk Coimbatore",
  ],
  alternates: {
    canonical: "https://epfdesk.com/coimbatore-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Coimbatore EPF & ESIC Solutions | Spinning Mills, Pumps & IT SEZ Compliance | EPFDesk",
    description:
      "PF & ESIC compliance experts for Coimbatore's spinning mills, pump manufacturers, engineering MSMEs, and IT SEZs. NWC 2025 payroll support, EPFO 7A defense, and statutory audits for SIMA and CODISSIA member units.",
    url: "https://epfdesk.com/coimbatore-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Coimbatore PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Coimbatore EPF & ESIC Solutions | NWC 2025 Spinning Mills & IT SEZ Support | EPFDesk",
    description:
      "Comprehensive PF & ESIC statutory compliance for spinning mills, pump manufacturers, engineering units, and IT/ITES operations in Coimbatore.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Coimbatore EPF & ESIC Solutions: NWC 2025 for Spinning Mills, Pump
          Manufacturing & IT SEZs | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance services for Coimbatore's spinning mills, pump manufacturers, engineering MSMEs, and IT SEZs. Expertise in NWC 2025 payroll structuring, EPFO 7A defense, contractor compliance, and statutory audits for SIMA and CODISSIA member firms."
        />

        <meta
          name="keywords"
          content="Coimbatore PF consultant, Coimbatore ESIC consultant, spinning mills PF compliance, pump manufacturing ESIC, CODISSIA industrial estate compliance, Coimbatore IT SEZ PF ESIC, NWC 2025 Coimbatore, EPFO 7A defense, MSME PF compliance Coimbatore, EPFDesk Coimbatore"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/coimbatore-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Coimbatore EPF & ESIC Solutions | Spinning Mills, Pumps & IT SEZ Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance expertise for spinning mills, pump & motor manufacturers, engineering MSMEs, and IT SEZ operations in Coimbatore. NWC 2025 payroll, EPFO 7A defense, and contractor audits."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/coimbatore-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Coimbatore EPF & ESIC Solutions | NWC 2025 Spinning Mills & IT SEZ | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC statutory compliance for Coimbatore’s spinning mills, pump manufacturing units, engineering MSMEs, and IT/ITES operations."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-coimbatore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Coimbatore EPF & ESIC Solutions: NWC 2025 for Spinning Mills, Pump Manufacturing & IT SEZs | EPFDesk",
            alternateName:
              "EPFDesk – Coimbatore Engineering, Spinning Mills & IT Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/coimbatore-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address reused for all schemas
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
              "EPFDesk provides comprehensive EPF and ESIC compliance support in Coimbatore for spinning mills, pump manufacturers, engineering MSMEs, and IT/ITES SEZ units. We assist SIMA and CODISSIA member units with NWC 2025 payroll restructuring, Section 7A defense, contractor compliance, and correct computation of Bonus and Gratuity under the new labour codes.",

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
              { "@type": "City", name: "Coimbatore" },
              { "@type": "Place", name: "SIMA Spinning Mills" },
              { "@type": "Place", name: "CODISSIA Industrial Estate" },
              { "@type": "Place", name: "Pump & Motor Manufacturing Cluster" },
              { "@type": "Place", name: "IT SEZs & Tech Parks" },
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
        <PerformanceSectionIndustry data={heroDataCoimbatoreDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCoimbatoreDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
