import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTrichyDist, sectionsTrichyDist } from "@/utils/data";
export const metadata = {
  title:
    "Trichy EPF & ESIC Compliance | BHEL Contract Labour, Fabrication & Gem Industry – EPFDesk",
  description:
    "EPFDesk provides EPF & ESIC compliance solutions in Trichy for BHEL contract labour, fabrication and welding units, and gem/ornament manufacturing. Includes NWC 2025 payroll restructuring, contractor liability mitigation, PF/ESI audits, and principal employer compliance for heavy engineering ecosystems.",
  keywords: [
    "Trichy EPF Consultant",
    "Trichy ESIC Consultant",
    "BHEL contract labour compliance",
    "Trichy fabrication labour EPF",
    "Heavy engineering EPF ESIC Trichy",
    "Trichy gem industry PF ESIC",
    "NWC 2025 Trichy",
    "EPFDesk Trichy",
  ],
  openGraph: {
    title:
      "Trichy EPF & ESIC Compliance | BHEL Contract Labour & Fabrication – EPFDesk",
    description:
      "EPFDesk delivers EPF & ESIC compliance for Trichy's heavy engineering and fabrication sector, including BHEL-linked units, welding ancillaries, and gem manufacturing clusters. Specialized contractor compliance and NWC 2025 restructuring.",
    url: "https://epfdesk.com/trichy-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Trichy EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trichy EPF & ESIC Compliance | BHEL Contract Labour & Fabrication – EPFDesk",
    description:
      "EPFDesk provides EPF & ESIC compliance in Trichy for heavy engineering, fabrication units, BHEL contractors, and gem industry workers. NWC 2025 payroll restructuring & statutory audit support.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Trichy EPF & ESIC Compliance | BHEL Contract Labour, Fabrication & Gem
          Industry – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance solutions in Trichy for BHEL contract labour, fabrication and welding units, and gem manufacturing. Includes NWC 2025 payroll restructuring, principal employer liability mitigation, PF/ESI audits, and engineering sector compliance."
        />

        <meta
          name="keywords"
          content="Trichy EPF Consultant, Trichy ESIC Consultant, BHEL contract labour compliance, Trichy fabrication labour EPF, Heavy engineering EPF ESIC Trichy, Trichy gem industry PF ESIC, NWC 2025 Trichy, EPFDesk Trichy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Trichy EPF & ESIC Compliance | BHEL Contract Labour & Fabrication – EPFDesk"
        />
        <meta
          property="og:description"
          content="EPFDesk delivers EPF & ESIC compliance for Trichy's heavy engineering sector: BHEL contractor ecosystem, fabrication and welding units, and gem manufacturing clusters. Expert statutory advisory, contractor compliance, and NWC 2025 readiness."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/trichy-epf-esic-compliance"
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
          content="Trichy EPF & ESIC Compliance | BHEL Contract Labour & Fabrication – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk provides EPF & ESIC compliance for Trichy’s fabrication, welding, gem industry, and BHEL-associated contract workforce. NWC 2025 payroll consulting & contractor compliance."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/trichy-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-trichy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Trichy Labour Compliance Analysis: BHEL Contract Labour, Fabrication, and Gem Industry EPF/ESIC Risk",
            alternateName:
              "EPFDesk – Trichy Heavy Engineering, Fabrication & Contract Labour Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/trichy-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address used across all schemas
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
              "Essential compliance guide for Trichy's heavy engineering and fabrication sector. EPFDesk supports Contract Labour Act 1970 adherence, mitigates principal employer risk, and enables smooth New Wage Code 2025 implementation in BHEL-linked and ancillary industrial units.",

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
              { "@type": "City", name: "Trichy" },
              { "@type": "Place", name: "BHEL Trichy Zone" },
              {
                "@type": "Place",
                name: "Fabrication & Welding Ancillary Units",
              },
              {
                "@type": "Place",
                name: "Gems & Ornaments Manufacturing Cluster",
              },
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
        <PerformanceSectionIndustry data={heroDataTrichyDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTrichyDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
