import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataHassanDist,
  sectionsHassanDist,
  faqHassan,
} from "@/utils/data";

export const metadata = {
  title:
    "Hassan EPF & ESIC Compliance for Coffee Plantations, Food Processing & Arsikere MSMEs | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance expertise for Hassan’s coffee plantations, curing units, food processing factories and MSME engineering clusters in Arsikere/B. Katihalli. Specialists in plantation PF coverage, piece-rate wage compliance, and MSME statutory onboarding.",
  keywords: [
    "Hassan PF consultant",
    "Hassan ESIC consultant",
    "coffee plantation PF compliance",
    "food processing PF ESIC",
    "Arsikere MSME labour law",
    "EPFDesk Karnataka",
  ],
  alternates: {
    canonical: "https://epfdesk.com/hassan-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Hassan EPF & ESIC Consultant | Coffee, Food Processing & MSME Engineering | EPFDesk",
    description:
      "PF & ESIC services for Hassan’s plantations, food processing units and MSME engineering sector.",
    url: "https://epfdesk.com/hassan-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Hassan PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hassan EPF & ESIC Compliance | Coffee, Food & MSMEs | EPFDesk",
    description:
      "PF/ESI experts for Hassan’s plantations, food processing units and MSME engineering clusters.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Hassan EPF & ESIC Compliance for Coffee Plantations, Food Processing &
          Arsikere MSMEs | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Hassan coffee estates, curing units, food processing factories and MSME engineering workshops. Specialists in PF for piece-rate/seasonal workers, ESIC for factory staff, and statutory PF/ESI onboarding."
        />

        <meta
          name="keywords"
          content="Hassan PF ESIC, coffee plantation PF compliance, food processing PF ESIC, MSME labour law Arsikere"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/hassan-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Hassan EPF & ESIC Consultant | Coffee, Food Processing & MSMEs"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Hassan’s plantations, food processing units, and MSME engineering sector."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/hassan-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hassan PF & ESIC Compliance | Plantations & MSMEs"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance for Hassan’s coffee, spices, food processing & MSME clusters."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-hassan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Hassan EPF & ESIC Compliance | Coffee Plantations, Food Processing & MSMEs | EPFDesk",
            alternateName:
              "EPFDesk – Hassan PF ESIC Consultants for Plantations & MSME Engineering",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/hassan-epf-esic-compliance",
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
              latitude: 13.0072,
              longitude: 76.0960,
            },

            description:
              "Hassan's plantation and MSME ecosystem requires PF/ESI compliance for seasonal workers, coffee curing staff, food processing units, and engineering MSMEs. EPFDesk specialises in plantation PF, ESIC for factory workers, and PF wage audits for piece-rate labour.",
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
              { "@type": "City", name: "Hassan" },
              { "@type": "Place", name: "Arsikere Industrial Estate" },
              { "@type": "Place", name: "B. Katihalli KSSIDC Cluster" },
              { "@type": "Place", name: "Coffee & Spice Plantation Belt" },
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
        <PerformanceSectionIndustry data={heroDataHassanDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHassanDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHassan} />
    </>
  );
};

export default page;
