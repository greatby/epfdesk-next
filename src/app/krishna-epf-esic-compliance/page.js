import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataKrishnaDist, sectionsKrishnaDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Krishna (Vijayawada) EPF & ESIC Consultant: NWC 2025 for Logistics, Infrastructure & Commercial Establishments | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services in Krishna District (Vijayawada), covering logistics hubs, warehousing parks, construction sites, transport operators and commercial establishments. Expertise includes migrant labour PF/ESI onboarding, NWC 2025 payroll restructuring, BOCW cess handling, contractor audits and OSH/night shift compliance.",
  keywords: [
    "Vijayawada PF consultant",
    "Vijayawada ESIC consultant",
    "Krishna district PF ESIC",
    "logistics PF ESIC Vijayawada",
    "warehousing labour compliance AP",
    "transport PF ESIC Andhra Pradesh",
    "construction PF ESIC Vijayawada",
    "BOCW cess compliance AP",
    "NWC 2025 payroll Vijayawada",
    "EPFDesk Krishna district",
  ],
  alternates: {
    canonical: "https://epfdesk.com/krishna-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Vijayawada EPF & ESIC Consultant | Logistics, Warehousing, Construction & Commercial Compliance | EPFDesk",
    description:
      "PF & ESIC compliance services for logistics corridors, warehousing, construction companies, banks and commercial establishments in Krishna District. Migrant workforce PF/ESI, NWC 2025 payroll and contractor audits.",
    url: "https://epfdesk.com/krishna-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Vijayawada PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vijayawada EPF & ESIC Consultant | Logistics, Construction & Commercial Establishments | EPFDesk",
    description:
      "EPFDesk helps Vijayawada’s logistics operators, warehouses, construction contractors and commercial establishments navigate PF, ESIC, BOCW and NWC 2025 compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Krishna (Vijayawada) EPF & ESIC Consultant: NWC 2025 for Logistics,
          Infrastructure & Commercial Establishments | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Vijayawada’s logistics and warehousing networks, construction sites, transport operators and commercial establishments. NWC 2025 payroll, migrant labour onboarding, BOCW compliance and statutory audits."
        />

        <meta
          name="keywords"
          content="Vijayawada PF consultant, Krishna district ESIC, logistics labour compliance AP, warehousing PF ESIC AP, transport workforce PF, construction PF ESIC AP, BOCW compliance Vijayawada, NWC 2025 payroll AP, commercial establishment PF ESIC, EPFDesk Vijayawada"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/krishna-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Vijayawada EPF & ESIC Consultant | Logistics, Warehousing, Construction & Commercial Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for logistics, warehousing, construction zones and commercial establishments across Krishna District. Migrant labour PF/ESI, NWC 2025 payroll and OSH compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/krishna-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vijayawada EPF & ESIC Compliance | Logistics, Construction & Trade | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance services for logistics parks, warehousing, construction contractors and commercial establishments in Vijayawada. NWC 2025-ready payroll and statutory audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-krishna"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Krishna (Vijayawada) EPF & ESIC Consultant: NWC 2025 for Logistics, Infrastructure & Commercial Establishments | EPFDesk",
            alternateName:
              "EPFDesk – Vijayawada EPF & ESIC Compliance for Logistics, Warehousing, Construction and Trade",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/krishna-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address block unchanged per your system
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
              "EPFDesk provides EPF and ESIC compliance services in Krishna District (Vijayawada), specializing in NWC 2025 requirements for logistics, warehousing, transport, construction, and commercial establishments. Expertise includes migrant workforce compliance, BOCW cess management, payroll restructuring, and OSH compliance for night shift operations.",

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
              { "@type": "City", name: "Vijayawada" },
              { "@type": "Place", name: "NH Network Logistics Belt" },
              {
                "@type": "Place",
                name: "Construction Zones of Krishna District",
              },
              { "@type": "Place", name: "Commercial Establishments & Banks" },
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
        <PerformanceSectionIndustry data={heroDataKrishnaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKrishnaDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
