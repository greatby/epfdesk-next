import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataRamanagaraDist,
  sectionsRamanagaraDist,
  faqRamanagara,
} from "@/utils/data";

export const metadata = {
  title:
    "Ramanagara EPF & ESIC Compliance: Bidadi Auto Cluster, Sericulture & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ramanagara — Bidadi Toyota & Coca-Cola contractors, silk reeling and sericulture units, Channapatna toy MSMEs, Harohalli industrial estates and resort/hospitality employers. Experts in NWC wage restructuring, piece-rate labour audits, contractor PF liability and Principal Employer exposure.",

  keywords: [
    "Ramanagara PF consultant",
    "Ramanagara ESIC consultant",
    "Bidadi auto cluster PF ESIC",
    "Toyota vendor labour compliance Bidadi",
    "Silk sericulture PF ESIC Karnataka",
    "Channapatna toy industry labour laws",
    "Harohalli MSME PF audits",
    "Principal Employer liability Ramanagara",
  ],

  alternates: {
    canonical: "https://epfdesk.com/ramanagara-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Ramanagara EPF & ESIC Compliance | Auto • Sericulture • MSME Clusters",
    description:
      "PF & ESIC specialists for Bidadi auto OEM vendors, silk sericulture units, Channapatna toy makers and Harohalli MSMEs.",
    url: "https://epfdesk.com/ramanagara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ramanagara PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ramanagara EPF & ESIC Compliance | Auto & Sericulture Clusters | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Bidadi auto vendors, silk sericulture workers, Harohalli MSMEs and resort staff.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Ramanagara EPF & ESIC Compliance: Bidadi Auto Cluster, Sericulture &
          PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Ramanagara — Bidadi Toyota & Coca-Cola contractors, silk sericulture and reeling units, Channapatna toy MSMEs, Harohalli industrial estates and resort employers. Piece-rate wage audits, contractor PF liability and Principal Employer exposure handled."
        />

        <meta
          name="keywords"
          content="Ramanagara PF consultant, Ramanagara ESIC consultant, Bidadi auto cluster PF ESIC, Toyota Coca-Cola vendor compliance, silk sericulture labour laws Karnataka, Channapatna toy industry PF audits, Harohalli MSME labour compliance, NWC 2025 wage restructuring Ramanagara"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ramanagara-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Ramanagara EPF & ESIC Consultant | Auto & Sericulture Clusters | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Bidadi auto OEM vendors, silk sericulture units, Channapatna toy MSMEs and Harohalli industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/ramanagara-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ramanagara EPF & ESIC Compliance | Auto & Sericulture Clusters | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Ramanagara auto vendors, silk sericulture workers and MSMEs — audits and PE liability handled."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      <Script
        id="schema-ramanagara"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ramanagara EPF & ESIC Compliance | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Bidadi Auto Cluster, Silk Sericulture & Harohalli Factories",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ramanagara-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Bidadi",
              addressRegion: "Karnataka",
              postalCode: "562109",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.7969,
              longitude: 77.3996,
            },

            description:
              "PF & ESIC compliance for Toyota contractors, silk reeling units, Channapatna toy manufacturers, Harohalli MSMEs and resort staff in Ramanagara district.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Ramanagara" },
              { "@type": "City", name: "Bidadi" },
              { "@type": "City", name: "Channapatna" },
              { "@type": "City", name: "Kanakapura" },
              { "@type": "City", name: "Harohalli" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRamanagaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRamanagaraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRamanagara} />
    </>
  );
};

export default page;
