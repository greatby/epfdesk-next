import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataBallariDist,
  sectionsBallariDist,
  faqBallari,
} from "@/utils/data";

export const metadata = {
  title:
    "Ballari EPF & ESIC Compliance for Iron Ore Mining, Steel Plants & Thermal Power Contractors | EPFDesk",
  description:
    "Expert PF & ESIC defence for Ballari/Vijayanagara mining and steel contractors. Specialised in PF liability management for mining CLRA workers, ESIC compliance for hazardous industry, and complete BOCW cess support.",
  keywords: [
    "Ballari PF consultant",
    "Vijayanagara PF ESIC consultant",
    "mining contractor PF Ballari",
    "steel plant ESIC compliance",
    "JSW PF audit defence",
    "thermal power PF ESIC",
    "BOCW Cess Ballari",
    "EPFDesk Ballari",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/ballari-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Ballari EPF & ESIC Consultant | Mining, Steel & Thermal Power Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Ballari's mining-to-steel sector: contract labour PF liability, hazardous industry ESIC, BOCW cess and 7A defence.",
    url: "https://epfdesk.com/ballari-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Ballari PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ballari EPF & ESIC Compliance | Mining, Steel Plants & Thermal Power | EPFDesk",
    description:
      "PF & ESIC experts for Ballari’s high-risk industrial sector — mining, steel and power.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Ballari EPF & ESIC Compliance for Iron Ore Mining, Steel Plants &
          Thermal Power | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC specialists for Ballari’s mining, steel and power contractors. Expertise in 7A defence, hazardous industry ESIC, mining PF liability and BOCW compliance."
        />

        <meta
          name="keywords"
          content="Ballari mining PF, JSW steel PF ESIC, CLRA contractor PF Ballari, hazardous industry ESIC, thermal power plant PF ESI, BOCW cess steel plant"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ballari-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Ballari EPF & ESIC Consultant | Mining, Steel & Thermal Power | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for mining and steel clusters of Ballari & Vijayanagara — contractor PF audits, ESIC accident support, BOCW compliance."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/ballari-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ballari Mining & Steel PF ESIC Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Mining PF suppression defence, ESIC hazardous industry compliance and steel plant contractor audits."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-ballari"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Ballari EPF & ESIC Compliance for Mining, Steel & Thermal Power | EPFDesk",
            alternateName:
              "EPFDesk – Ballari PF ESIC Consultants for Mining & Heavy Industry",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ballari-epf-esic-compliance",
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
              latitude: 15.1394,
              longitude: 76.9214,
            },

            description:
              "Ballari’s mining-to-steel sector has intense PF & ESIC scrutiny. EPFDesk specialises in contractor PF compliance, ESIC hazardous industry coverage, BOCW cess and Section 7A defence.",
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
              { "@type": "City", name: "Ballari" },
              { "@type": "City", name: "Hospet / Vijayanagara" },
              { "@type": "Place", name: "JSW Steel – Toranagallu" },
              { "@type": "Place", name: "Sandur Mining Zone" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "62",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBallariDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBallariDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBallari} />
    </>
  );
};

export default page;
