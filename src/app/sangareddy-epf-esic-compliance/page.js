import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataSangareddyDist, sectionsSangareddyDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Sangareddy EPF & ESIC Compliance Expert: NWC 2025 Payroll for IDA Bollaram, Pashamylaram & Patancheru | EPFDesk",
  description:
    "EPFDesk delivers EPF & ESIC compliance solutions for Sangareddy’s major industrial zones including IDA Bollaram, Pashamylaram and Patancheru. Expertise covers NWC 2025 payroll restructuring, PF/ESI registration, vendor compliance, contractor audits, chemical/pharma labour mapping, and monthly ECR & statutory support.",
  keywords: [
    "Sangareddy PF consultant",
    "Sangareddy ESIC consultant",
    "IDA Bollaram PF ESIC",
    "Pashamylaram labour compliance",
    "Patancheru PF ESIC",
    "pharma EPF ESIC Hyderabad",
    "chemical industry compliance Telangana",
    "manufacturing PF ESIC",
    "NWC 2025 payroll Sangareddy",
    "contractor compliance Telangana",
    "EPFDesk Sangareddy",
  ],
  alternates: {
    canonical: "https://epfdesk.com/sangareddy-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Sangareddy EPF & ESIC Consultant | IDA Bollaram, Pashamylaram & Patancheru Manufacturing Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Sangareddy’s manufacturing, chemicals, pharma and engineering sectors. Includes NWC 2025 payroll restructuring, statutory filing, contractor audits and workforce documentation.",
    url: "https://epfdesk.com/sangareddy-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Sangareddy PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sangareddy EPF & ESIC Compliance | Manufacturing, Chemicals & Pharma Zones | EPFDesk",
    description:
      "Compliance experts for PF/ESI, contractor audits, payroll restructuring and documentation across IDA Bollaram, Pashamylaram and Patancheru industrial hubs.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Sangareddy EPF & ESIC Compliance Expert: NWC 2025 Payroll for IDA
          Bollaram, Pashamylaram & Patancheru | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance support for Sangareddy’s manufacturing, chemical, pharma and engineering sectors across IDA Bollaram, Pashamylaram and Patancheru. Includes NWC 2025 payroll restructuring, contractor audits, vendor compliance and monthly ECR filing."
        />

        <meta
          name="keywords"
          content="Sangareddy PF consultant, IDA Bollaram EPF ESIC, Pashamylaram labour compliance, Patancheru PF ESIC, pharma compliance Telangana, chemical industry EPF ESIC, manufacturing compliance Telangana, contractor audits Sangareddy, NWC 2025 payroll Hyderabad, EPFDesk Sangareddy"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/sangareddy-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Sangareddy EPF & ESIC Consultant | IDA Bollaram, Pashamylaram & Patancheru Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="EPF & ESIC compliance for manufacturing, chemicals, pharma and engineering hubs in Sangareddy. Includes PF/ESI registration, contractor audits, NWC 2025 payroll and ECR filing support."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/sangareddy-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sangareddy EPF & ESIC Compliance | Manufacturing & Pharma Zones | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC support for IDA Bollaram, Pashamylaram and Patancheru — payroll restructuring, audits, vendor compliance and statutory documentation."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-sangareddy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Sangareddy EPF & ESIC Compliance Expert: NWC 2025 Ready Payroll for IDA Bollaram, Pashamylaram, and Patancheru Manufacturing | EPFDesk",
            alternateName:
              "EPFDesk – Sangareddy EPF & ESIC Compliance for Manufacturing, Chemicals, Pharma and Engineering Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sangareddy-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address kept unchanged as per your template
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
              "EPFDesk provides EPF and ESIC compliance services in Sangareddy, specializing in NWC 2025 payroll restructuring for heavy manufacturing, chemicals, pharma units, and Industrial Development Areas including IDA Bollaram, Pashamylaram, and Patancheru. Services include PF & ESI Registration, Audit Defense, Vendor Compliance, and ECR Filing.",

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
              { "@type": "City", name: "Sangareddy" },
              { "@type": "Place", name: "IDA Bollaram" },
              { "@type": "Place", name: "Pashamylaram" },
              { "@type": "Place", name: "Patancheru" },
              { "@type": "Place", name: "Industrial Manufacturing Zones" },
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
        <PerformanceSectionIndustry data={heroDataSangareddyDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSangareddyDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
