import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataGandhinagarDist, sectionsGandhinagarDist } from "@/utils/data";
export const metadata = {
  title:
    "Gandhinagar's EPF & ESIC Consultant: NWC 2025 Compliance for GIFT City, IT/ITES SEZs & Kalol Electronics | EPFDesk",
  description:
    "EPFDesk supports PF & ESIC compliance for Gandhinagar's GIFT City firms, IT/ITES SEZs, fintech companies, and electronics manufacturing units. We specialize in NWC 2025 payroll structuring, fixed-term employment compliance, startup statutory advisory, SEZ labour requirements, and high-CTC payroll optimisation.",
  keywords: [
    "Gandhinagar PF consultant",
    "Gandhinagar ESIC consultant",
    "GIFT City PF ESIC compliance",
    "GIFT City labour law advisor",
    "IT SEZ PF compliance Gujarat",
    "Kalol electronics PF ESIC",
    "NWC 2025 payroll Gujarat",
    "startup compliance Gandhinagar",
    "fixed-term employment PF ESIC",
    "EPFDesk Gandhinagar",
  ],
  alternates: {
    canonical: "https://epfdesk.com/gandhinagar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Gandhinagar EPF & ESIC Consultant | GIFT City, IT/ITES & Electronics Compliance | EPFDesk",
    description:
      "PF & ESIC compliance solutions for GIFT City, IT/ITES SEZs, fintech companies, and electronics units in Gandhinagar. NWC 2025 payroll structuring, startup advisory, and SEZ-specific statutory compliance.",
    url: "https://epfdesk.com/gandhinagar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Gandhinagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Gandhinagar EPF & ESIC Consultant | GIFT City, IT/ITES SEZ & Electronics | EPFDesk",
    description:
      "NWC 2025 payroll structuring, startup labour compliance, PF/ESIC advisory for GIFT City firms, IT SEZs, fintech units, and electronics manufacturers in Gandhinagar.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Gandhinagar's EPF & ESIC Consultant: NWC 2025 Compliance for GIFT
          City, IT/ITES SEZs & Kalol Electronics | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk offers PF & ESIC compliance services for firms in GIFT City, IT/ITES SEZs, fintech operations, and Kalol electronics units. Expertise includes NWC 2025 payroll structuring, startup advisory, fixed-term employment compliance, and SEZ-specific statutory requirements."
        />

        <meta
          name="keywords"
          content="Gandhinagar PF consultant, GIFT City labour compliance, IT SEZ PF ESIC, fintech PF ESIC, Kalol electronics compliance, startup PF ESIC Gandhinagar, fixed-term employment PF rules, NWC 2025 Gujarat, EPF ESIC advisor Gandhinagar, EPFDesk Gandhinagar"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gandhinagar-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Gandhinagar EPF & ESIC Consultant | GIFT City, IT/ITES & Electronics Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for GIFT City, IT SEZs, fintech, and electronics units. NWC 2025 payroll, startup compliance, SEZ statutory advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/gandhinagar-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gandhinagar EPF & ESIC Consultant | GIFT City & IT SEZ Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance solutions for GIFT City, IT/ITES SEZs, fintech companies, and Kalol electronics units — PF, ESIC, NWC 2025 payroll, and startup labour law advisory."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-gandhinagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Gandhinagar's EPF & ESIC Consultant: NWC 2025 Compliance for GIFT City, IT/ITES SEZs, and Kalol Electronics | EPFDesk",
            alternateName:
              "EPFDesk – Gandhinagar GIFT City & IT Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/gandhinagar-epf-esic-compliance",
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
              "EPFDesk offers EPF and ESIC compliance in Gandhinagar, specializing in NWC 2025 payroll structuring for GIFT City firms and the IT/ITES sector. We provide expert advisory on fixed-term employment, high-CTC payroll models, startup compliance, and SEZ-specific statutory requirements for IT, electronics, and financial service companies.",

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
              { "@type": "City", name: "Gandhinagar" },
              { "@type": "Place", name: "GIFT City" },
              { "@type": "Place", name: "IT/ITES SEZs" },
              { "@type": "Place", name: "Kalol Electronics Belt" },
              { "@type": "Place", name: "Infotech & Government Services Zone" },
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
        <PerformanceSectionIndustry data={heroDataGandhinagarDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGandhinagarDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
