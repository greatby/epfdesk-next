import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTanjavurDist, sectionsThanjavurDist } from "@/utils/data";
export const metadata = {
  title:
    "Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing & Seasonal Labour | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services in Thanjavur for rice mills, agro-processing units, and seasonal labour clusters. We specialize in NWC 2025 payroll alignment, UAN/KYC onboarding for migrant workers, statutory contribution accuracy, and transitioning informal labour systems into full compliance.",

  keywords: [
    "Thanjavur EPF Consultant",
    "Thanjavur ESIC Consultant",
    "Rice Mill PF Compliance",
    "Agro Processing ESIC",
    "Seasonal Labour PF ESIC",
    "Delta Agro Belt Compliance",
    "NWC 2025 Thanjavur Payroll",
    "EPFDesk Tamil Nadu Compliance",
  ],

  openGraph: {
    title:
      "Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing & Seasonal Labour | NWC 2025 Ready – EPFDesk",
    description:
      "Specialized EPF & ESIC compliance for Thanjavur's rice mills, agro-processing units, and seasonal labour workforce. Expert payroll restructuring, UAN onboarding, audits, contractor compliance, and statutory advisory.",
    url: "https://epfdesk.com/thanjavur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thanjavur Labour Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing & Labour Compliance – EPFDesk",
    description:
      "EPFDesk delivers NWC 2025-ready EPF & ESIC services for Thanjavur’s rice mills, agro-processing units, and seasonal workforces, including payroll restructuring and statutory audits.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing &
          Seasonal Labour | NWC 2025 Compliance – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services in Thanjavur for rice mills, agro-processing units, and seasonal labour clusters. We specialize in NWC 2025 payroll alignment, UAN/KYC onboarding for migrant workers, statutory contribution accuracy, and transitioning informal labour systems into full compliance."
        />

        <meta
          name="keywords"
          content="Thanjavur EPF Consultant, Thanjavur ESIC Consultant, Rice Mill PF Compliance, Agro Processing ESIC, Seasonal Labour PF ESIC, Delta Agro Belt Compliance, NWC 2025 Thanjavur Payroll, EPFDesk Tamil Nadu Compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing & Seasonal Labour | NWC 2025 Ready – EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialized EPF & ESIC compliance for Thanjavur's rice mills, agro-processing units, and seasonal labour workforce. Expert payroll restructuring, UAN onboarding, audits, contractor compliance, and statutory advisory."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/thanjavur-epf-esic-compliance"
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
          content="Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing & Labour Compliance – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk delivers NWC 2025-ready EPF & ESIC services for Thanjavur’s rice mills, agro-processing units, and seasonal workforces, including payroll restructuring and statutory audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/thanjavur-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-thanjavur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Thanjavur EPF & ESIC Compliance: NWC 2025 for Rice Mills, Agro-Processing & Seasonal Labour | Delta Statutory Solutions | EPFDesk",
            alternateName:
              "EPFDesk – Thanjavur Rice Mill, Agro-Processing & Seasonal Labour Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/thanjavur-epf-esic-compliance",
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
              "EPFDesk delivers EPF and ESIC compliance solutions for Thanjavur's rice mills and agro-processing units. We specialize in seasonal labour UAN/KYC onboarding, statutory contribution management, and transitioning informal payment systems to NWC 2025-compliant wage structures.",

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
              { "@type": "City", name: "Thanjavur" },
              { "@type": "Place", name: "Delta Agro-Processing Belt" },
              { "@type": "Place", name: "Thanjavur Rice Mill Cluster" },
              { "@type": "Place", name: "Seasonal Labour Zones" },
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
        <PerformanceSectionIndustry data={heroDataTanjavurDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThanjavurDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
