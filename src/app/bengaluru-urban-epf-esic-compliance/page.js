import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqBlrUrban, heroDataBlrUrban, sectionsBlrUrban } from "@/utils/data";

export const metadata = {
  title:
    "Bengaluru Urban EPF & ESIC Compliance for IT, GCC, Biotech & Aerospace | International Worker PF | EPFDesk",
  description:
    "EPFDesk provides expert PF & ESIC compliance for Bengaluru Urban’s IT, GCC, Biotech and Aerospace sectors. Specialization in International Worker PF rules, 7A defence for high-salary GCC payrolls, variable pay wage structuring, and ESIC Principal Employer risk management.",
  keywords: [
    "Bengaluru PF consultant",
    "Bengaluru ESIC consultant",
    "IT PF ESIC compliance",
    "GCC payroll PF Bangalore",
    "International Worker PF Bengaluru",
    "ESIC Principal Employer liability ORR",
    "Aerospace defence EPF compliance Bengaluru",
    "Biotech ESIC audit",
    "NWC 2025 PF IT salaries Bengaluru",
    "EPFDesk Bengaluru",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bengaluru-urban-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bengaluru Urban EPF & ESIC Consultant | IT, GCC, Biotech & Aerospace | EPFDesk",
    description:
      "PF & ESIC compliance for Bengaluru Urban’s high-skill IT, GCC, Biotech & Aerospace workforce. Expert support for International Worker PF, ESIC audits, variable pay PF structuring & 7A defence.",
    url: "https://epfdesk.com/bengaluru-urban-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Bengaluru Urban PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bengaluru Urban EPF & ESIC Compliance | IT, GCC, Biotech & Aerospace | EPFDesk",
    description:
      "EPF & ESIC solutions for Bengaluru Urban’s IT, GCC, Biotech & Aerospace sectors. Includes International Worker PF, variable pay restructuring & Principal Employer ESIC risk audits.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bengaluru Urban EPF & ESIC Compliance for IT, GCC, Biotech &
          Aerospace | EPFDesk
        </title>

        <meta
          name="description"
          content="Specialized PF & ESIC advisory for Bengaluru Urban’s IT, GCC, Biotech & Aerospace landscape. Expert support for International Worker PF, 7A audits, variable pay wage structuring and ESIC Principal Employer liability."
        />

        <meta
          name="keywords"
          content="Bengaluru PF consultant, Bengaluru ESIC consultant, IT PF compliance, GCC payroll PF Bangalore, International Worker PF rules, ESIC ORR Principal Employer liability, Aerospace PF ESIC Bangalore, Biotech ESIC audit Karnataka, NWC 2025 PF IT salaries, EPFDesk Bengaluru"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bengaluru-urban-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bengaluru Urban EPF & ESIC Consultant | IT, GCC, Biotech & Aerospace | EPFDesk"
        />
        <meta
          property="og:description"
          content="EPF & ESIC compliance for Bengaluru Urban’s IT, GCC, Biotech & Aerospace sectors including International Worker PF, high-salary payroll audits & Principal Employer ESIC liability."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/bengaluru-urban-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bengaluru Urban EPF & ESIC Compliance | IT, GCC, Biotech & Aerospace | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC solutions for Bengaluru Urban’s IT/GCC ecosystem — International Worker PF, 7A defence, ESIC Principal Employer audits & NWC 2025 payroll structuring."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-bengaluru-urban"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Bengaluru Urban EPF & ESIC Compliance for IT, GCC, Biotech & Aerospace | EPFDesk",
            alternateName:
              "EPFDesk – Bengaluru PF & ESIC Consultants for IT, GCC, Biotech and International Worker Compliance",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bengaluru-urban-epf-esic-compliance",
            telephone: "+91-9945933333",

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
              "Bengaluru Urban is India's largest hub for IT, GCC, Biotech, Fintech, and Aerospace. EPFDesk specializes in International Worker PF, 7A defence for high-variable pay payrolls, ESIC Principal Employer liability for support staff, and NWC 2025 wage alignment for large corporates.",

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
              { "@type": "City", name: "Bengaluru" },
              { "@type": "Place", name: "Whitefield" },
              { "@type": "Place", name: "Electronics City" },
              { "@type": "Place", name: "Outer Ring Road (ORR)" },
              { "@type": "Place", name: "Hebbal" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "62",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBlrUrban} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBlrUrban} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBlrUrban}/>
    </>
  );
};

export default page;
