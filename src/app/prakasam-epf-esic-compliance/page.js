import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import {
  heroDataPrakasamDist,
  sectionsPrakasamDist,
  prakasamFAQ,
} from "@/utils/data";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
export const metadata = {
  title:
    "Prakasam EPF & ESIC Compliance Consultant: Granite Mining, Stone Processing & Aqua Units | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services across Prakasam District, including Chimakurthy’s granite mining belt, stone processing zones, aquaculture units, and tobacco curing facilities. Expertise includes hazardous occupation PF/ESI coverage, seasonal labour applicability, contractor PF enforcement, and audit-ready documentation for PF 7A and ESIC inspections.",
  keywords: [
    "Prakasam PF consultant",
    "Ongole ESIC consultant",
    "Chimakurthy granite PF ESIC",
    "stone processing EPF ESIC AP",
    "aquaculture labour compliance AP",
    "seasonal labour PF ESIC",
    "tobacco industry PF ESIC AP",
    "contractor PF compliance Andhra Pradesh",
    "PF 7A audit defense AP",
    "EPFDesk Prakasam",
  ],
  alternates: {
    canonical: "https://epfdesk.com/prakasam-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Prakasam EPF & ESIC Consultant | Granite Mining, Stone Processing & Aqua Units | EPFDesk",
    description:
      "Compliance support for granite (Chimakurthy), stone processing, aquaculture and tobacco units in Prakasam district. PF/ESI for hazardous occupations, seasonal workers and contract labour, plus 7A/ESIC audit documentation.",
    url: "https://epfdesk.com/prakasam-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Prakasam PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Prakasam EPF & ESIC Compliance | Granite, Aquaculture & Seasonal Labour | EPFDesk",
    description:
      "PF & ESIC compliance for Chimakurthy granite units, stone processing, aquaculture and tobacco industries. Contract labour PF/ESI, hazardous occupation coverage and audit-ready documentation.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Prakasam EPF & ESIC Compliance Consultant: Granite Mining, Stone
          Processing & Aqua Units | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC solutions for Prakasam District covering Chimakurthy granite mining, stone processing, aquaculture and tobacco units. We specialise in hazardous occupation PF/ESI, seasonal labour coverage, contractor compliance and PF 7A/ESIC audit readiness."
        />

        <meta
          name="keywords"
          content="Prakasam PF consultant, Ongole ESIC consultant, Chimakurthy granite labour compliance, stone processing PF ESIC AP, aquaculture PF ESIC Andhra Pradesh, seasonal labour PF rules, tobacco industry PF ESIC AP, contractor PF compliance AP, 7A audit defense, EPFDesk Prakasam"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/prakasam-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Prakasam EPF & ESIC Consultant | Granite Mining, Stone Processing & Aqua Units | EPFDesk"
        />
        <meta
          property="og:description"
          content="Compliance for granite mining, stone processing, aquaculture and seasonal labour sectors in Prakasam district. PF/ESI systems, contractor audits and occupational risk coverage."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/prakasam-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prakasam EPF & ESIC Compliance | Granite, Aquaculture & Hazardous Labour | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance for Chimakurthy granite units, aquaculture clusters and tobacco facilities in Prakasam. Contractor compliance and seasonal labour PF applicability included."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-prakasam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Prakasam EPF & ESIC Compliance Consultant: Granite Mining, Aqua Processing & Seasonal Labour | EPFDesk",
            alternateName:
              "EPFDesk – Prakasam Granite, Stone Processing and Aqua Unit Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/prakasam-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged
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
              "EPFDesk provides EPF and ESIC compliance services for Prakasam District, specializing in Granite Mining (Chimakurthy), Stone Processing, Aquaculture, and Tobacco units. We ensure full compliance for hazardous occupations, seasonal labour applicability, PF for contract workers, and 7A/ESIC audit-ready documentation.",

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
              { "@type": "City", name: "Ongole" },
              { "@type": "Place", name: "Chimakurthy Granite Belt" },
              { "@type": "Place", name: "Singarayakonda Aqua Processing Zone" },
              { "@type": "Place", name: "Kothapatnam Coastal Belt" },
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
        <PerformanceSectionIndustry data={heroDataPrakasamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPrakasamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={prakasamFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
