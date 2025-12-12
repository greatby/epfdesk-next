import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  gujaratDistFAQ,
  heroDataGujaratDist,
  sectionsGujaratDist,
} from "@/utils/data";
export const metadata = {
  title:
    "Ahmedabad's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for GIDC Naroda, Sanand Auto Hub & DMIC Corridor | EPFDesk",
  description:
    "EPFDesk provides expert PF & ESIC compliance services in Ahmedabad with NWC 2025 payroll restructuring. Specialized support for pharma units in Vatva, auto OEMs in Sanand, and GIDC Naroda industries including PF/ESI registration, audits, contractor compliance, and monthly ECR filings.",
  keywords: [
    "Ahmedabad PF consultant",
    "Ahmedabad ESIC consultant",
    "GIDC Naroda PF ESIC compliance",
    "Sanand auto hub labour compliance",
    "Vatva pharma PF ESIC",
    "DMIC corridor PF consultant",
    "NWC 2025 payroll Ahmedabad",
    "contractor compliance Ahmedabad",
    "PF ESI audit Ahmedabad",
    "EPFDesk Ahmedabad",
  ],
  alternates: {
    canonical: "https://epfdesk.com/ahmedabad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ahmedabad EPF & ESIC Consultant | GIDC Naroda, Sanand Auto Hub & Vatva Pharma Compliance | EPFDesk",
    description:
      "PF & ESIC compliance services for Ahmedabad’s industrial backbone: GIDC Naroda, Sanand auto OEMs, Vatva pharma units, and DMIC Corridor industries. NWC 2025 payroll, audits, contractor verification, and full statutory support.",
    url: "https://epfdesk.com/ahmedabad-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Ahmedabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ahmedabad EPF & ESIC Consultant | NWC 2025 for GIDC Naroda, Sanand Auto Hub & Vatva Pharma | EPFDesk",
    description:
      "Complete PF & ESIC compliance for pharma, auto, engineering, and GIDC industrial units in Ahmedabad. NWC 2025 audits, contractor compliance, and PF/ESI monthly operations.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Ahmedabad's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for
          GIDC Naroda, Sanand Auto Hub & DMIC Corridor | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk delivers PF & ESIC compliance services in Ahmedabad for GIDC Naroda industries, Sanand auto manufacturers, and Vatva pharma units. Expertise in NWC 2025 payroll structuring, contractor audits, PF/ESI registration, and monthly statutory filing."
        />

        <meta
          name="keywords"
          content="Ahmedabad PF consultant, Ahmedabad ESIC consultant, GIDC Naroda PF ESIC, Sanand auto hub PF compliance, Vatva pharma compliance, DMIC corridor PF advisory, NWC 2025 Ahmedabad, PF audit Ahmedabad, contractor compliance Ahmedabad, EPFDesk Ahmedabad"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ahmedabad-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Ahmedabad EPF & ESIC Consultant | GIDC Naroda, Sanand Auto Hub & Vatva Pharma Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Ahmedabad industries: GIDC Naroda, Sanand auto OEMs, Vatva pharma sector, and DMIC corridor units. NWC 2025 structuring and contractor compliance experts."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/ahmedabad-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ahmedabad EPF & ESIC Consultant | GIDC Naroda & Sanand Auto Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC compliance support for Ahmedabad’s pharma, auto, engineering and GIDC clusters. NWC 2025 payroll, PF audits, and statutory advisory."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-ahmedabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ahmedabad's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for GIDC Naroda, Sanand Auto Hub, and the DMIC Corridor | EPFDesk",
            alternateName:
              "EPFDesk – Ahmedabad Compliance for Pharma, Auto OEMs & GIDC Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ahmedabad-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains the same across all schemas
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
              "EPFDesk offers EPF and ESIC compliance in Ahmedabad, specializing in NWC 2025 payroll restructuring. We ensure 100% statutory adherence for pharma firms in Vatva and auto OEMs in Sanand, including expert PF & ESI registration, audits, contractor compliance, and monthly ECR filing support.",

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
              { "@type": "City", name: "Ahmedabad" },
              { "@type": "Place", name: "GIDC Naroda" },
              { "@type": "Place", name: "Sanand Auto Hub" },
              { "@type": "Place", name: "Vatva Industrial Estate" },
              { "@type": "Place", name: "DMIC Corridor" },
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
        <PerformanceSectionIndustry data={heroDataGujaratDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGujaratDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={gujaratDistFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
