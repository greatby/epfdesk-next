import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataVijayapuraDist,
  sectionsVijayapuraDist,
  faqVijayapura,
} from "@/utils/data";

export const metadata = {
  title:
    "Vijayapura EPF & ESIC Compliance for Sugar Mills, Grape Processing & Educational Trusts | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance for Vijayapura sugar mills, grape/pomegranate processors, wineries, dal mills and private educational institutions. Experts in seasonal labour PF, ESIC for medical institutions and wage audit defence.",
  keywords: [
    "Vijayapura PF consultant",
    "Vijayapura ESIC consultant",
    "sugar mill PF compliance",
    "grape processing PF ESIC",
    "educational institution ESIC Vijayapura",
    "EPFDesk North Karnataka",
  ],
  alternates: {
    canonical: "https://epfdesk.com/vijayapura-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Vijayapura EPF & ESIC Consultant | Sugar Mills, Grape Processing & Education | EPFDesk",
    description:
      "PF/ESI solutions for Vijayapura sugar/agro mills and educational institutions.",
    url: "https://epfdesk.com/vijayapura-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Vijayapura PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vijayapura EPF & ESIC Compliance | Sugar Mills & Education | EPFDesk",
    description:
      "PF/ESI specialists for Vijayapura’s agro-processing units and private institutions.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Vijayapura EPF & ESIC Compliance for Sugar Mills, Grape Processing &
          Educational Trusts | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Vijayapura’s sugar mills, grape processors, dal mills and private educational institutions. Specialists in seasonal labour PF, ESIC for hospitals/colleges and MSME statutory onboarding."
        />

        <meta
          name="keywords"
          content="Vijayapura PF ESIC, sugar mill PF compliance, grape processing PF ESIC, educational trust ESIC Vijayapura"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/vijayapura-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Vijayapura EPF & ESIC Consultant | Sugar Mills, Grape Processing & Education"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Vijayapura’s agro-processing and education sectors."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/vijayapura-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vijayapura PF & ESIC Compliance | Sugar & Education Sectors"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance for Vijayapura’s mills, processors and private institutions."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-vijayapura"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Vijayapura EPF & ESIC Compliance | Sugar Mills, Wine Units & Educational Trusts | EPFDesk",
            alternateName:
              "EPFDesk – Vijayapura PF ESIC Consultants for Agro-Processing & Education",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/vijayapura-epf-esic-compliance",
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
              latitude: 16.8302,
              longitude: 75.7100,
            },

            description:
              "Vijayapura PF/ESI risks stem from seasonal sugar/agro labour, grape/pomegranate processing units and mandatory ESIC coverage for private colleges and hospitals. EPFDesk specialises in PF wage audits, seasonal labour coverage and statutory MSME onboarding.",
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
              { "@type": "City", name: "Vijayapura" },
              { "@type": "Place", name: "Aliabad Industrial Estate" },
              { "@type": "Place", name: "Mahalbagayat Industrial Area" },
              { "@type": "Place", name: "Sugar/Grape Processing Belt" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "53",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVijayapuraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVijayapuraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqVijayapura} />
    </>
  );
};

export default page;
