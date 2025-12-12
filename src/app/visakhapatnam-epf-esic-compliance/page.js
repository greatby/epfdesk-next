// pages/visakhapatnam/page.jsx  (or app/visakhapatnam/page.jsx)
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import {
  heroDataVisakhapatnamDist,
  sectionsVisakhapatnamDist,
  vizagDistFAQ,
} from "@/utils/data";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
export const metadata = {
  title:
    "Visakhapatnam EPF & ESIC Consultant | NWC 2025 for Port Logistics, Pharma, Heavy Engineering & IT | EPFDesk",
  description:
    "EPFDesk provides EPF & ESIC compliance services in Visakhapatnam, specializing in Port Logistics, Pharma City, Heavy Engineering, Naval Supply Chain & IT/ITES. Includes contractor audits, OSH/ESIC integration, payroll modelling for high-salaried engineering staff, and complete ECR filing management.",
  keywords: [
    "Visakhapatnam EPF Consultant",
    "Vizag ESIC Consultant",
    "Vizag Port Labour Compliance",
    "Pharma City PF ESIC",
    "Vizag Steel Plant Compliance",
    "NWC 2025 Visakhapatnam",
    "Contractor PF Audit Vizag",
    "EPFDesk Visakhapatnam",
  ],
  openGraph: {
    title:
      "Visakhapatnam EPF & ESIC Compliance | Port Logistics, Pharma & Heavy Engineering – EPFDesk",
    description:
      "Expert EPF & ESIC compliance solutions for Vizag’s Port, Pharma City, Naval Supply Chain, and Heavy Engineering industries. NWC 2025 payroll restructuring, contractor audits, OSH compliance & workforce documentation.",
    url: "https://epfdesk.com/visakhapatnam-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Visakhapatnam EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Visakhapatnam EPF & ESIC Consultant | Port, Pharma & Heavy Engineering – EPFDesk",
    description:
      "EPFDesk supports Visakhapatnam industries with EPF/ESIC compliance, NWC 2025 payroll modelling, contractor audits & OSH/ESIC integration. Expertise for Port Logistics, Pharma City, Steel & IT sectors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      {" "}
      <Head>
        <title>
          Visakhapatnam EPF & ESIC Consultant | NWC 2025 for Port Logistics,
          Pharma & Heavy Engineering | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk manages EPF & ESIC compliance in Vizag across Port Logistics, Pharma City, Heavy Engineering, IT/ITES and Naval Supply Chain. Includes OSH/ESIC integration, contractor audits, payroll modelling and statutory filing."
        />

        <meta
          name="keywords"
          content="Visakhapatnam EPF Consultant, Vizag ESIC Consultant, Port Logistics Compliance, Pharma City PF ESIC, Vizag Steel Plant PF, Contractor PF Audit Vizag, NWC 2025 Vizag, EPFDesk Visakhapatnam"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Visakhapatnam EPF & ESIC Compliance | Port, Pharma & Heavy Engineering – EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialized EPF & ESIC compliance for Vizag's port logistics, pharma clusters, heavy engineering units & IT/ITES companies. Expert PF audits, NWC 2025 payroll restructuring & ESIC applicability guidance."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/visakhapatnam-epf-esic-compliance"
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
          content="Visakhapatnam EPF & ESIC Consultant | Port, Pharma & Heavy Engineering – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk supports Vizag’s port, pharma and industrial ecosystem with EPF/ESIC compliance, payroll restructuring, contractor audits & NWC 2025 readiness."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/visakhapatnam-epf-esic-compliance"
        />
      </Head>
      <script
        id="schema-visakhapatnam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Visakhapatnam EPF & ESIC Consultant: NWC 2025 for Port Logistics, Pharma, Heavy Engineering & IT | EPFDesk",
            alternateName:
              "EPFDesk – Visakhapatnam EPF & ESIC Compliance for Port, Pharma, Heavy Engineering and IT",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/visakhapatnam-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged
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
              "EPFDesk provides EPF and ESIC compliance services in Visakhapatnam, focusing on port logistics, naval defence supply chains, heavy engineering, pharma clusters and IT/ITES. Services include contractor audits, OSH/ESIC integration, payroll modelling for high-salaried staff, and ECR filing.",

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
              { "@type": "City", name: "Visakhapatnam" },
              { "@type": "Place", name: "Port & Shipping Logistics" },
              { "@type": "Place", name: "APIIC Pharma City" },
              { "@type": "Place", name: "Vizag Steel & Heavy Engineering" },
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
        <PerformanceSectionIndustry data={heroDataVisakhapatnamDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVisakhapatnamDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={vizagDistFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
