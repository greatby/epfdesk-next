import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataShivamoggaDist,
  sectionsShivamoggaDist,
  faqShivamogga,
} from "@/utils/data";

export const metadata = {
  title:
    "Shivamogga EPF & ESIC Compliance for Foundries, Rice Mills, Arecanut Processing & VISL Contractors | EPFDesk",
  description:
    "EPFDesk provides expert PF & ESIC compliance services for Shivamogga foundries, heavy engineering, rice mills, arecanut processing units and VISL/MPM contractors. Specialists in hazardous industry ESIC, PF wage audits, contractor liability and NWC 2025 wage compliance.",
  keywords: [
    "Shivamogga PF consultant",
    "Shivamogga ESIC consultant",
    "foundry PF ESIC",
    "VISL contractor PF liability",
    "arecanut processing PF",
    "EPFDesk Karnataka"
  ],
  alternates: {
    canonical: "https://epfdesk.com/shivamogga-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Shivamogga EPF & ESIC Consultant | Foundries, Agro-Processing & VISL | EPFDesk",
    description:
      "PF & ESIC experts for Shivamogga’s foundries, heavy engineering, rice mills, and VISL-linked contract workforce.",
    url: "https://epfdesk.com/shivamogga-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Shivamogga PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Shivamogga EPF & ESIC Compliance | Foundries & Agro-Processing | EPFDesk",
    description:
      "PF/ESI experts for Shivamogga’s foundries, engineering units, rice and arecanut processing clusters.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Shivamogga EPF & ESIC Compliance for Foundries, Rice Mills, Arecanut
          Processing & VISL Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Shivamogga’s foundry cluster, engineering MSMEs, VISL contractors and agro-processing units. High-risk ESIC, PF wage audits, contractor compliance & NWC 2025 alignment."
        />

        <meta
          name="keywords"
          content="Shivamogga PF ESIC, foundry PF compliance, VISL contractor PF, rice mill PF ESIC, arecanut processing PF"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/shivamogga-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Shivamogga EPF & ESIC Consultant | Foundries & VISL Contractors"
        />
        <meta
          property="og:description"
          content="Expert PF & ESIC services for Shivamogga's foundry belt, engineering sector, rice mills and VISL-linked contractors."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/shivamogga-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shivamogga PF & ESIC Compliance | Foundries & Agro-Processing"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance for Shivamogga’s engineering, foundry, rice mill & arecanut sectors."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-shivamogga"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Shivamogga EPF & ESIC Compliance | Foundries, Engineering & Agro-Processing | EPFDesk",
            alternateName:
              "EPFDesk – Shivamogga PF ESIC Consultants for Foundries & VISL Contractors",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/shivamogga-epf-esic-compliance",
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
              latitude: 13.9299,
              longitude: 75.5681,
            },

            description:
              "EPFDesk handles PF & ESIC compliance for Shivamogga foundries, heavy engineering units, VISL/MPM contractors, rice mills and arecanut processing clusters. Specialists in hazardous industry ESIC, PF wage audits & contractor liability mitigation.",
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
              { "@type": "City", name: "Shivamogga" },
              { "@type": "Place", name: "Bhadravathi VISL/MPM Belt" },
              { "@type": "Place", name: "Machenahalli Industrial Area" },
              { "@type": "Place", name: "Arecanut Processing Cluster" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "36",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataShivamoggaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsShivamoggaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqShivamogga} />
    </>
  );
};

export default page;
