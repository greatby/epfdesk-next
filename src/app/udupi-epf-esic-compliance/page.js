import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataUdupiDist,
  sectionsUdupiDist,
  faqUdupi,
} from "@/utils/data";

export const metadata = {
  title:
    "Udupi EPF & ESIC Compliance for Manipal Hospitals, Educational Institutions & Tourism Sector | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Manipal educational/medical trusts, Udupi hotels & resorts, fisheries/cashew units, and UPCL contractors. Specialized in PF for seasonal tourism workers and ESIC enforcement in hospitals.",
  keywords: [
    "Udupi PF consultant",
    "Udupi ESIC consultant",
    "Manipal hospital PF ESIC",
    "UPCL PF contractor compliance",
    "Udupi tourism PF ESI",
    "EPFDesk Karnataka",
  ],
  alternates: {
    canonical: "https://epfdesk.com/udupi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Udupi EPF & ESIC Compliance | Manipal Hospitals, Tourism & Coastal Industry | EPFDesk",
    description:
      "PF & ESIC experts for Manipal hospitals, Udupi tourism, fisheries/cashew units, and UPCL contractors.",
    url: "https://epfdesk.com/udupi-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Udupi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Udupi EPF & ESIC Compliance | Manipal Hospitals, Tourism & Coastal Industry | EPFDesk",
    description:
      "PF/ESI compliance for Manipal medical institutions, resorts, fisheries units, and UPCL power plant contractors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Udupi EPF & ESIC Compliance for Manipal Hospitals, Educational Institutions & Tourism | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC compliance for Manipal medical/educational trusts, Udupi resorts, fisheries units, and UPCL contractors. Specialists in seasonal tourism PF and ESIC enforcement for hospitals."
        />

        <meta
          name="keywords"
          content="Udupi PF ESIC, Manipal hospital PF ESIC, UPCL PF contractor compliance, Udupi tourism PF ESI, coastal industry PF Karnataka"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/udupi-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Udupi EPF & ESIC Compliance | Manipal Hospitals, Tourism & Coastal Industry"
        />
        <meta
          property="og:description"
          content="PF & ESIC specialists for Manipal educational trusts, Udupi hotels, cashew-processing units and UPCL contractors."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/udupi-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Udupi EPF & ESIC Compliance | Manipal Hospitals & Coastal Industry"
        />
        <meta
          name="twitter:description"
          content="Comprehensive PF & ESIC compliance for Udupi's hospitals, tourism, fisheries and power plant contractors."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-udupi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Udupi EPF & ESIC Compliance | Manipal Hospitals & Tourism | EPFDesk",
            alternateName:
              "EPFDesk – Udupi PF ESIC Consultants for Hospitals, Tourism & Coastal Industry",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/udupi-epf-esic-compliance",
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
              latitude: 13.3409,
              longitude: 74.7421,
            },

            description:
              "EPFDesk provides audit-ready PF & ESIC compliance for Udupi’s hospitals, educational trusts, coastal tourism, fisheries, cashew units, and UPCL contractors. Specialized in seasonal and service-sector labour compliance.",

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
              { "@type": "City", name: "Udupi" },
              { "@type": "Place", name: "Manipal" },
              { "@type": "Place", name: "Karkala" },
              { "@type": "Place", name: "Kundapura" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "41",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUdupiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUdupiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUdupi} />
    </>
  );
};

export default page;
