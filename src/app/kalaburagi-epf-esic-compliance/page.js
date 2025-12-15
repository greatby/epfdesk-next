import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataKalaburagiDist,
  sectionsKalaburagiDist,
  faqKalaburagi,
} from "@/utils/data";

export const metadata = {
  title:
    "Kalaburagi EPF & ESIC Compliance for Cement Plants, Dal Mills & Educational Institutions | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance for Kalaburagi’s cement plants, dal mills and educational institutions. Specialists in hazardous industry ESIC enforcement, PF for piece-rate workers and contractor liability management.",
  keywords: [
    "Kalaburagi PF consultant",
    "Kalaburagi ESIC consultant",
    "cement industry PF ESIC",
    "dal mill PF ESIC",
    "piece-rate PF calculation",
    "Kalaburagi educational institution PF ESIC",
    "sedam cement compliance",
    "EPFDesk Kalaburagi",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kalaburagi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kalaburagi EPF & ESIC Consultant | Cement, Dal Mills & Education Sector | EPFDesk",
    description:
      "PF & ESIC solutions for Kalaburagi’s cement plants, pulse processing mills and educational institutions.",
    url: "https://epfdesk.com/kalaburagi-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kalaburagi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kalaburagi EPF & ESIC Compliance | Cement, Dal Mills & Education | EPFDesk",
    description:
      "PF/ESI specialists for hazardous industry, pulse mills and academic institutions in Kalaburagi.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kalaburagi EPF & ESIC Compliance for Cement Plants, Dal Mills &
          Educational Institutions | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance for Kalaburagi’s cement manufacturers, dal mills and private colleges. Specialised in PF audits for piece-rate wages and ESIC enforcement in hazardous industry."
        />

        <meta
          name="keywords"
          content="Kalaburagi PF ESIC, cement plant PF, dal mill ESIC, educational institution PF compliance, Sedam Chittapur cement industry"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kalaburagi-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kalaburagi EPF & ESIC Consultant | Cement, Dal Mills & Education | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Kalaburagi hazardous industries and agro-processing mills."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/kalaburagi-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kalaburagi PF & ESIC Compliance | Cement & Dal Mills | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF/ESI compliance for Kalaburagi’s cement plants, dal mills and educational institutions."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-kalaburagi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kalaburagi EPF & ESIC Compliance | Cement, Dal Mills & Educational Institutions | EPFDesk",
            alternateName:
              "EPFDesk – Kalaburagi PF ESIC Consultants for Cement & Agro Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kalaburagi-epf-esic-compliance",
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
              latitude: 17.3297,
              longitude: 76.8343,
            },

            description:
              "Kalaburagi’s PF/ESI risks stem from hazardous cement operations, dal mill piece-rate labour and widespread educational institutions. EPFDesk specializes in PF wage audits, contractor liability control and ESIC enforcement.",
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
              { "@type": "City", name: "Kalaburagi" },
              { "@type": "Place", name: "Sedam Cement Cluster" },
              { "@type": "Place", name: "Dal Mill Belt" },
              { "@type": "Place", name: "Educational Institutions" },
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
        <PerformanceSectionIndustry data={heroDataKalaburagiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKalaburagiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKalaburagi} />
    </>
  );
};

export default page;
