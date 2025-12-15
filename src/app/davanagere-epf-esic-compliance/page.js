import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataDavanagereDist,
  sectionsDavanagereDist,
  faqDavanagere,
} from "@/utils/data";

export const metadata = {
  title:
    "Davanagere EPF & ESIC Compliance for Textile Mills, Agro-Processing & Educational Institutions | EPFDesk",
  description:
    "EPFDesk provides expert PF & ESIC compliance for Davanagere's textile mills, gherkin/maize processing units, and private educational institutions. Specialists in PF for piece-rate workers, ESIC enforcement for factory workers, and contractor liability management.",
  keywords: [
    "Davanagere PF consultant",
    "Davanagere ESIC consultant",
    "textile mill PF ESIC",
    "gherkin processing PF",
    "private college PF ESIC Davanagere",
    "EPFDesk Karnataka",
  ],
  alternates: {
    canonical: "https://epfdesk.com/davanagere-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Davanagere EPF & ESIC Consultant | Textile, Gherkin Processing & Education Sector | EPFDesk",
    description:
      "PF & ESIC experts for Davanagere’s textile mills, agro-processing units, and private colleges/schools.",
    url: "https://epfdesk.com/davanagere-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Davanagere PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Davanagere EPF & ESIC Compliance | Textile, Agro-Processing & Education Sector | EPFDesk",
    description:
      "PF/ESI compliance for Davanagere’s textile factories, gherkin/maize processing units, and private educational institutions.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Davanagere EPF & ESIC Compliance for Textile Mills, Agro-Processing &
          Educational Institutions | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Davanagere’s textile mills, gherkin/maize processing units, and private schools/colleges. Expert PF wage audits, ESIC enforcement & seasonal workforce compliance."
        />

        <meta
          name="keywords"
          content="Davanagere PF ESIC, textile mill PF compliance, gherkin processing PF ESIC, private college PF ESIC Davanagere"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/davanagere-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Davanagere EPF & ESIC Consultant | Textile & Education Sector Compliance"
        />
        <meta
          property="og:description"
          content="Expert PF & ESIC services for Davanagere's textile mills, agro-processing units and private educational institutions."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/davanagere-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Davanagere PF & ESIC Compliance | Textile Mills, Gherkin Processing & Education"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance for Davanagere's textile, agro-processing and educational sectors."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-davanagere"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Davanagere EPF & ESIC Compliance | Textile & Agro-Processing Sector | EPFDesk",
            alternateName:
              "EPFDesk – Davanagere PF ESIC Consultants for Textile Mills & Educational Institutions",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/davanagere-epf-esic-compliance",
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
              latitude: 14.4664,
              longitude: 75.9200,
            },

            description:
              "EPFDesk ensures audit-proof PF & ESIC compliance for Davanagere textile mills, spinning/power looms, gherkin/maize processing units, and private educational institutions. Specialists in piece-rate PF audits, ESIC enforcement & seasonal contract labour compliance.",

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
              { "@type": "City", name: "Davanagere" },
              { "@type": "Place", name: "Harihara" },
              { "@type": "Place", name: "Channagiri" },
              { "@type": "Place", name: "Texile & Ginning Clusters" },
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
        <PerformanceSectionIndustry data={heroDataDavanagereDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDavanagereDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDavanagere} />
    </>
  );
};

export default page;
