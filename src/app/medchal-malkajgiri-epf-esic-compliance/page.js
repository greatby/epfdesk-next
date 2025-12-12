import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataMedchalDist, sectionsMedchalDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Medchal-Malkajgiri EPF & ESIC Consultant: Genome Valley, Keesara IT Park & IDA Jeedimetla | NWC 2025 Compliance | EPFDesk",
  description:
    "EPFDesk offers PF & ESIC compliance services for Medchal-Malkajgiri’s Life Sciences, Pharma R&D, Biotech, IT Parks and Manufacturing clusters including Genome Valley, Keesara IT Park and IDA Jeedimetla. Expertise includes NWC 2025 payroll restructuring, PF/ESI registration, audit defense, contractor compliance and monthly ECR filing.",
  keywords: [
    "Medchal-Malkajgiri PF consultant",
    "Medchal ESIC consultant",
    "Genome Valley PF ESIC",
    "biotech EPF ESIC Hyderabad",
    "pharma R&D compliance Telangana",
    "IDA Jeedimetla PF ESIC",
    "Keesara IT Park compliance",
    "industrial compliance Medchal",
    "NWC 2025 payroll Hyderabad",
    "EPFDesk Medchal-Malkajgiri",
  ],
  alternates: {
    canonical: "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Medchal-Malkajgiri EPF & ESIC Consultant | Genome Valley, Keesara IT Park & Jeedimetla Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Pharma R&D, Biotech, IT Park and Manufacturing clusters in Medchal-Malkajgiri. NWC 2025 payroll support, statutory filing, contractor audits and PF/ESI registration.",
    url: "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Medchal-Malkajgiri PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Medchal-Malkajgiri EPF & ESIC Compliance | Genome Valley & Jeedimetla Industrial Hubs | EPFDesk",
    description:
      "Compliance experts for Genome Valley, Keesara IT Park and IDA Jeedimetla. PF/ESI audits, ECR filing, contractor compliance and NWC 2025-ready payroll solutions.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Medchal-Malkajgiri EPF & ESIC Consultant: Genome Valley, Keesara IT
          Park & IDA Jeedimetla | NWC 2025 Compliance | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance services for Medchal-Malkajgiri’s Life Sciences, Pharma R&D, Biotech, IT Parks and Manufacturing zones including Genome Valley, Keesara IT Park and IDA Jeedimetla. PF/ESI registration, audits, vendor compliance and NWC 2025 payroll restructuring."
        />

        <meta
          name="keywords"
          content="Medchal-Malkajgiri PF consultant, Genome Valley labour compliance, biotech PF ESIC Hyderabad, pharma R&D EPF ESIC, Jeedimetla industrial compliance, Keesara IT Park PF ESIC, NWC 2025 Hyderabad payroll, contractor audits Telangana, manufacturing statutory compliance, EPFDesk Medchal"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Medchal-Malkajgiri EPF & ESIC Consultant | Genome Valley, Keesara IT Park & Jeedimetla | EPFDesk"
        />
        <meta
          property="og:description"
          content="Compliance services for Genome Valley, Keesara IT Park and IDA Jeedimetla covering PF/ESI audits, NWC 2025 payroll modelling, and contractor compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medchal-Malkajgiri EPF & ESIC Compliance | Genome Valley & Industrial Hubs | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk helps Life Sciences, Biotech, IT Parks and Manufacturing units in Medchal-Malkajgiri navigate PF, ESIC and NWC 2025 compliance."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-medchal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Medchal-Malkajgiri EPF & ESIC Consultant: NWC 2025 Ready Compliance for Genome Valley, Keesara IT Park, and IDA Jeedimetla | EPFDesk",
            alternateName:
              "EPFDesk – Medchal-Malkajgiri EPF & ESIC Compliance for Pharma R&D, Biotech, Logistics & Manufacturing",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged as you require
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
              "EPFDesk provides EPF and ESIC compliance services in Medchal-Malkajgiri, specializing in NWC 2025 payroll restructuring for Life Sciences, R&D, and industrial clusters including Genome Valley, Keesara IT Park, and IDA Jeedimetla. Services include PF & ESI Registration, Audit Defense, Vendor Compliance, and ECR Filing.",

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
              { "@type": "City", name: "Medchal-Malkajgiri" },
              { "@type": "Place", name: "Genome Valley" },
              { "@type": "Place", name: "Keesara IT Park" },
              { "@type": "Place", name: "IDA Jeedimetla" },
              { "@type": "Place", name: "Industrial & Logistics Hubs" },
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
        <PerformanceSectionIndustry data={heroDataMedchalDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMedchalDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
