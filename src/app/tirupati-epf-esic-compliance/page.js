import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataTirupatiDist, sectionsTirupatiDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Tirupati EPF & ESIC Consultant | NWC 2025 for Hospitality, Education & Sri City Electronics – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance support in Tirupati, covering hospitality, education institutions, and Sri City electronics manufacturing. We specialize in PF audits, ESIC registration, contractor compliance, fixed-term employment structuring, and NWC 2025-ready payroll systems.",

  keywords: [
    "Tirupati EPF Consultant",
    "Tirupati ESIC Consultant",
    "Sri City EPF ESIC",
    "Hospitality Compliance Tirupati",
    "Education Institution PF ESIC",
    "NWC 2025 Andhra Pradesh",
    "EPFDesk Tirupati",
    "Tirupati Payroll Compliance",
  ],

  openGraph: {
    title:
      "Tirupati EPF & ESIC Consultant | Hospitality, Education & Electronics Manufacturing – EPFDesk",
    description:
      "EPFDesk ensures EPF and ESIC compliance for Tirupati's hotels, colleges, and Sri City electronics manufacturers. We provide PF/ESIC registration, payroll restructuring, statutory audits, and contractor compliance management.",
    url: "https://epfdesk.com/tirupati-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tirupati EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tirupati EPF & ESIC Consultant | Hotels, Colleges & Sri City Electronics – EPFDesk",
    description:
      "NWC 2025-ready EPF & ESIC solutions for Tirupati’s hospitality, education, and electronics manufacturing sectors. Expert compliance management, audits, and payroll advisory.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Tirupati EPF & ESIC Consultant | NWC 2025 for Hospitality, Education &
          Sri City Electronics – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance support in Tirupati for hospitality, education institutions, and Sri City electronics manufacturing. We specialize in PF audits, ESIC registration, contractor compliance, fixed-term employment structuring, and NWC 2025-ready payroll systems."
        />

        <meta
          name="keywords"
          content="Tirupati EPF Consultant, Tirupati ESIC Consultant, Sri City EPF ESIC, Hospitality Compliance Tirupati, Education PF ESIC, NWC 2025 Andhra Pradesh, EPFDesk Tirupati, Tirupati Payroll Compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tirupati EPF & ESIC Consultant | Hospitality, Education & Electronics Manufacturing – EPFDesk"
        />
        <meta
          property="og:description"
          content="EPFDesk ensures EPF and ESIC compliance for Tirupati's hotels, colleges, and Sri City electronics manufacturers. We provide PF/ESIC registration, payroll restructuring, statutory audits, and contractor compliance management."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/tirupati-epf-esic-compliance"
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
          content="Tirupati EPF & ESIC Consultant | Hotels, Colleges & Sri City Electronics – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="NWC 2025-ready EPF & ESIC solutions for Tirupati’s hospitality, education and electronics manufacturing sectors. Expert compliance management, audits, and payroll advisory."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/tirupati-epf-esic-compliance"
        />
      </Head>
      <script
        id="schema-tirupati"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Tirupati EPF & ESIC Consultant: NWC 2025 for Hospitality, Education, and Electronics Manufacturing | EPFDesk",
            alternateName:
              "EPFDesk – Tirupati EPF & ESIC Compliance for Hotels, Colleges, and Sri City Electronics",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/tirupati-epf-esic-compliance",
            telephone: "+91-9945933333",

            // address kept as per template
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
              "EPFDesk provides EPF and ESIC compliance services in Tirupati, specializing in NWC 2025 payroll restructuring for hospitality, education, and Sri City electronics manufacturing. Expertise includes PF audits, ESIC registration, fixed-term employment structuring, and contractor compliance.",

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
              { "@type": "City", name: "Tirupati" },
              { "@type": "Place", name: "Tirupati Temple City" },
              { "@type": "Place", name: "Sri City Electronics SEZ" },
              { "@type": "Place", name: "Educational Institutions Belt" },
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
        <PerformanceSectionIndustry data={heroDataTirupatiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTirupatiDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
