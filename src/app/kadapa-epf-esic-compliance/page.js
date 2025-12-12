import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import Head from "next/head";
import {
  heroDataKadapaDist,
  sectionsKadapaDist,
  kadapaFAQ,
} from "@/utils/data";

import FaqAccordion from "@/components/faqAccordian";
export const metadata = {
  title:
    "Kadapa EPF & ESIC Consultant: Temple Trust Staff, Barytes Mining & Groundnut Oil Mills | EPFDesk",
  description:
    "EPFDesk offers PF & ESIC compliance services in Kadapa (YSR District) for Barytes mining units, limestone quarries, temple trust employees, and groundnut oil mills. Expertise includes occupational disease risk mapping, PF applicability for religious institutions, contractor compliance, and seasonal ESIC assessments.",
  keywords: [
    "Kadapa PF consultant",
    "Kadapa ESIC consultant",
    "Barytes mining PF ESIC",
    "Proddatur mining labour compliance",
    "Yerraguntla quarry PF ESIC",
    "temple trust PF applicability",
    "seasonal factory ESIC compliance",
    "groundnut oil mill PF ESIC",
    "NWC 2025 Kadapa compliance",
    "EPFDesk Kadapa",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kadapa-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kadapa EPF & ESIC Consultant | Mining, Temple Trust & Agri-Processing Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Kadapa’s Barytes mining units, limestone quarries, temple trust staff, and groundnut/cotton processing units. Expert support for occupational disease risks, seasonal ESIC applicability, and contractor compliance.",
    url: "https://epfdesk.com/kadapa-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kadapa PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kadapa EPF & ESIC Consultant | Barytes Mining, Temple Trust & Agri-Processing | EPFDesk",
    description:
      "PF & ESIC advisory for Kadapa’s mining clusters, quarries, religious institutions, and seasonal agri-processing units. Occupational risk compliance and NWC 2025 alignment.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kadapa EPF & ESIC Consultant: Temple Trust Staff, Barytes Mining &
          Groundnut Oil Mills | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Kadapa’s Barytes mining clusters, limestone quarries, temple trust workers, and agri-processing units. Occupational disease classification, PF rules for religious institutions, seasonal ESIC applicability, and statutory audit support."
        />

        <meta
          name="keywords"
          content="Kadapa PF consultant, Kadapa ESIC consultant, mining PF ESIC, Barytes PF compliance, Yerraguntla quarry PF ESIC, temple trust PF applicability, groundnut oil mill ESIC, seasonal PF ESIC Andhra Pradesh, occupational disease PF ESIC, EPFDesk Kadapa"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kadapa-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kadapa EPF & ESIC Consultant | Mining, Temple Trust & Agri-Processing Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Barytes mining, quarries, temple trusts, and agri-processing units in Kadapa. NWC 2025 frameworks and occupational risk-based compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kadapa-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kadapa EPF & ESIC Consultant | Mining, Temple Trust & Agri-Processing | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Compliance solutions for Kadapa’s Barytes mining units, temple trusts, limestone quarries, and groundnut oil mills. PF, ESIC, NWC 2025 & contractor compliance made easy."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-kadapa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kadapa EPF & ESIC Consultant: Temple Trust Staff, Barytes Mining & Groundnut Oil Mills | EPFDesk",
            alternateName:
              "EPFDesk – Kadapa (YSR) EPF & ESIC Compliance for Mining, Religious Institutions & Agri-Processing",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kadapa-epf-esic-compliance",
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
              "EPFDesk delivers specialized EPF & ESIC compliance for Kadapa’s Barytes mining units, limestone quarries, temple trust employees, and seasonal groundnut oil mills. Expert support for occupational disease risk, PF applicability in religious institutions, and seasonal factory ESIC evaluations.",

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
              { "@type": "City", name: "Kadapa (YSR District)" },
              { "@type": "Place", name: "Proddatur Mining Belt" },
              { "@type": "Place", name: "Yerraguntla Quarry & Slab Units" },
              { "@type": "Place", name: "Devuni Kadapa Temple Trust Areas" },
              { "@type": "Place", name: "Groundnut & Cotton Processing Units" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "44",
            },
          }),
        }}
      />

      {/* HERO SECTION */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKadapaDist} />
      </FadeInWhenVisible>

      {/* MAIN BODY SECTIONS */}
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKadapaDist} />
      </FadeInWhenVisible>

      {/* FAQ SECTION */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={kadapaFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
