import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataBelagaviDist,
  sectionsBelagaviDist,
  faqBelagavi,
} from "@/utils/data";

export const metadata = {
  title:
    "Belagavi EPF & ESIC Compliance for Foundries, Auto Components & Heavy Engineering | EPFDesk",
  description:
    "EPF & ESIC experts for Belagavi’s foundries and auto component factories. Specialized in hazardous industry ESIC coverage, PF compliance for contract labour, OHS documentation and 7A audit defence.",
  keywords: [
    "Belagavi PF consultant",
    "Belagavi ESIC consultant",
    "foundry PF ESIC compliance",
    "auto component factory PF ESIC",
    "hazardous industry ESIC Belagavi",
    "OHS statutory compliance Belagavi",
    "NWC 2025 Belagavi PF wages",
    "contract labour PF liability Belagavi",
    "EPFDesk Belagavi",
  ],
  alternates: {
    canonical: "https://epfdesk.com/belagavi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Belagavi EPF & ESIC Consultant | Foundries, Auto Components & Heavy Engineering | EPFDesk",
    description:
      "PF & ESIC compliance services for Belagavi’s foundries, auto components and heavy engineering clusters. Hazardous industry ESIC coverage, contract labour PF audits and OHS statutory management.",
    url: "https://epfdesk.com/belagavi-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Belagavi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Belagavi EPF & ESIC Compliance | Foundries, Auto Components & Heavy Engineering | EPFDesk",
    description:
      "Compliance experts for Belagavi’s foundry and manufacturing ecosystem — ESIC accident liability, PF contractor audits, NWC 2025 wage restructuring and OHS compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Belagavi EPF & ESIC Compliance for Foundries, Auto Components & Heavy
          Engineering | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC defence for Belagavi’s foundries, auto component factories and heavy engineering units — hazardous industry ESIC, PF contractor liabilities and OHS documentation support."
        />

        <meta
          name="keywords"
          content="Belagavi PF consultant, Belagavi ESIC consultant, foundry PF ESIC, auto components labour compliance, OHS safety registers Belagavi, hazardous industry ESIC, NWC 2025 PF restructuring Belagavi"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/belagavi-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Belagavi EPF & ESIC Consultant | Foundries, Auto Components & Heavy Engineering | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Belagavi’s industrial clusters — foundries, auto components and engineering units. Specialists in ESIC accident handling and PF wage audits."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/belagavi-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Belagavi EPF & ESIC Compliance | Foundries, Auto Components & Engineering | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Belagavi’s foundries and heavy engineering — hazardous industry compliance, contractor PF audits, OHS registers and wage structuring."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-belagavi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Belagavi EPF & ESIC Compliance for Foundries, Auto Components & Heavy Engineering | EPFDesk",
            alternateName:
              "EPFDesk – Belagavi PF ESIC Consultants for Foundries & Manufacturing",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/belagavi-epf-esic-compliance",
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
              latitude: 15.8497,
              longitude: 74.4977,
            },

            description:
              "Belagavi is India's Foundry and Heavy Engineering hub with high ESIC accident risks and complex PF contractor liabilities. EPFDesk specializes in hazardous industry compliance, OHS documentation and PF wage audits.",
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
              { "@type": "City", name: "Belagavi" },
              { "@type": "Place", name: "Foundry Clusters" },
              { "@type": "Place", name: "BMIC Corridor" },
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
        <PerformanceSectionIndustry data={heroDataBelagaviDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBelagaviDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBelagavi} />
    </>
  );
};

export default page;
