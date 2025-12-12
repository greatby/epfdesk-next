import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataThoothukudiDist, sectionsThoothukudiDist } from "@/utils/data";
export const metadata = {
  title:
    "Thoothukudi EPF & ESIC Consultant | Port Labour, Chemical Units & Salt Pan Workers | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance solutions in Thoothukudi for Port Trust labour, chemical manufacturing units, and salt pan seasonal workers. We specialize in NWC 2025 payroll restructuring, high-risk principal employer liability reduction, contractor compliance audits, and statutory documentation for large informal workforces.",

  keywords: [
    "Thoothukudi EPF Consultant",
    "Thoothukudi ESIC Consultant",
    "Port Trust Labour Compliance",
    "Salt Pan Workers PF ESIC",
    "Chemical Industry ESIC",
    "NWC 2025 Tamil Nadu Labour",
    "EPFDesk Tamil Nadu Compliance",
    "Thoothukudi Port Compliance",
  ],

  openGraph: {
    title:
      "Thoothukudi EPF & ESIC Consultant | Port Labour, Chemical Units & Salt Pan Compliance – EPFDesk",
    description:
      "Specialized EPF & ESIC compliance for Thoothukudi's Port Trust workforce, chemical units, and salt pan seasonal labour. Expert PF/ESI audits, payroll structuring, workforce onboarding and contractor compliance.",
    url: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thoothukudi Labour Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thoothukudi EPF & ESIC Consultant | Port, Chemical & Salt Pan Labour Compliance – EPFDesk",
    description:
      "NWC 2025-ready EPF & ESIC services for Thoothukudi Port Trust, chemical manufacturing, and salt pan seasonal labour clusters. Expert statutory audits and compliance management.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Thoothukudi EPF & ESIC Consultant | Port Labour, Chemical Units & Salt
          Pan Workers | NWC 2025 Compliance – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance solutions in Thoothukudi for Port Trust labour, chemical manufacturing units, and salt pan seasonal workers. We specialize in NWC 2025 payroll restructuring, high-risk principal employer liability reduction, contractor compliance audits, and statutory documentation for large informal workforces."
        />

        <meta
          name="keywords"
          content="Thoothukudi EPF Consultant, Thoothukudi ESIC Consultant, Port Trust Labour Compliance, Salt Pan Workers PF ESIC, Chemical Industry ESIC, NWC 2025 Tamil Nadu Labour, EPFDesk Tamil Nadu Compliance, Thoothukudi Port Compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Thoothukudi EPF & ESIC Consultant | Port Labour, Chemical Units & Salt Pan Compliance – EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialized EPF & ESIC compliance for Thoothukudi's Port Trust workforce, chemical units, and salt pan seasonal labour. Expert PF/ESI audits, payroll structuring, workforce onboarding and contractor compliance."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/thoothukudi-epf-esic-compliance"
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
          content="Thoothukudi EPF & ESIC Consultant | Port, Chemical & Salt Pan Labour Compliance – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="NWC 2025-ready EPF & ESIC services for Thoothukudi Port Trust, chemical manufacturing, and salt pan seasonal labour clusters. Expert statutory audits and compliance management."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/thoothukudi-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-thoothukudi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Thoothukudi EPF & ESIC Compliance: NWC 2025 for Port Labour, Chemical Units, and Salt Pan Seasonal Workers | EPFDesk",
            alternateName:
              "EPFDesk – Thoothukudi Port, Chemical Industry & Salt Pan Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard address block
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
              "EPFDesk specializes in Thoothukudi compliance, handling Port Trust labour regulations, seasonal workforce documentation in salt pans, and ensuring NWC 2025 readiness for chemical industry payrolls. We provide expert support for high-risk principal employer liability and statutory compliance frameworks.",

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
              { "@type": "City", name: "Thoothukudi" },
              { "@type": "Place", name: "Thoothukudi Port Trust" },
              { "@type": "Place", name: "Chemical Manufacturing Belt" },
              { "@type": "Place", name: "Salt Pan Labour Clusters" },
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
        <PerformanceSectionIndustry data={heroDataThoothukudiDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThoothukudiDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
