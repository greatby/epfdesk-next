import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataVijayanagaraDist,
  sectionsVijayanagaraDist,
  faqVijayanagara,
} from "@/utils/data";

export const metadata = {
  title:
    "Vijayanagara EPF & ESIC Compliance for JSW Steel, Mining Contractors & Hosapete Industry | EPFDesk",
  description:
    "Expert PF & ESIC defence for JSW Steel contractors and Mining CLRA units in Vijayanagara. Specialists in PE liability, hazardous ESIC compliance, and BOCW Cess management.",
  keywords: [
    "Vijayanagara PF consultant",
    "JSW PF ESIC compliance",
    "Mining contractor PF Karnataka",
    "EPFDesk Vijayanagara",
    "BOCW Cess compliance",
  ],
  alternates: {
    canonical: "https://epfdesk.com/vijayanagara-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Vijayanagara EPF & ESIC Compliance | JSW Steel & Mining Sector | EPFDesk",
    description:
      "PF/ESIC experts for JSW Steel Vendors, Mining Contractors & Heavy Industry Units in Vijayanagara.",
    url: "https://epfdesk.com/vijayanagara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Vijayanagara PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vijayanagara EPF & ESIC Compliance for JSW & Mining | EPFDesk",
    description:
      "Specialists in PF/ESIC for Steel, Mining and Construction Contractors in Vijayanagara.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Vijayanagara EPF & ESIC Compliance for JSW Steel, Mining Contractors & Hosapete Industry | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC defence for JSW Steel contractors and Mining CLRA units in Vijayanagara. Specialists in PE liability, ESIC for hazardous industry, and BOCW Cess compliance."
        />

        <meta
          name="keywords"
          content="JSW PF ESIC, Vijayanagara PF consultant, Mining PF Karnataka, Steel Plant PF liability"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/vijayanagara-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Vijayanagara EPF & ESIC Compliance | JSW Steel & Mining Sector"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Steel, Mining, and Construction Contractors in Vijayanagara."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/vijayanagara-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vijayanagara EPF & ESIC Compliance | Steel & Mining"
        />
        <meta
          name="twitter:description"
          content="Compliance for JSW Steel contractors, Mining CLRA units and heavy industry."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-vijayanagara"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Vijayanagara EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultants for JSW Steel Vendors & Mining Contractors",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/vijayanagara-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              streetAddress: "Vidyanagar",
              addressLocality: "Hosapete",
              addressRegion: "Karnataka",
              postalCode: "583201",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 15.2689,
              longitude: 76.3909,
            },

            description:
              "PF & ESIC compliance for JSW Steel contractors, Mining CLRA vendors and Heavy Industry units in Vijayanagara. Specialists in PE liability, hazardous ESIC, and BOCW Cess compliance.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Hosapete" },
              { "@type": "Place", name: "Toranagallu" },
              { "@type": "Place", name: "Vidyanagar" },
              { "@type": "Place", name: "Sandur" },
            ],

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

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "58",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVijayanagaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVijayanagaraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqVijayanagara} />
    </>
  );
};

export default page;
