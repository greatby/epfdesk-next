import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataKolarDist,
  sectionsKolarDist,
  faqKolar,
} from "@/utils/data";

export const metadata = {
  title:
    "Kolar EPF & ESIC Compliance for Auto EMC, Honda Contractors & Sericulture Units | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Kolar’s Auto EMC, Honda vendor ecosystem, Silk Sericulture units, and MSME factories. Specialists in NWC wage rules, PF wage correction, and PE liability under Section 7A.",
  keywords: [
    "Kolar PF consultant",
    "Kolar ESIC consultant",
    "Narasapura PF ESIC",
    "Honda vendor PF compliance",
    "Sericulture PF ESIC Karnataka",
    "EPFDesk Kolar",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kolar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kolar EPF & ESIC Compliance | Auto EMC, Honda Contractors & Sericulture | EPFDesk",
    description:
      "PF/ESI specialists for Kolar’s Auto EMC, Honda supplier clusters, silk weaving units and MSME vendors.",
    url: "https://epfdesk.com/kolar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kolar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kolar EPF & ESIC Compliance | Auto EMC, Honda Contractors & Sericulture | EPFDesk",
    description:
      "PF/ESI compliance for Kolar’s Auto EMC, Honda ecosystem, Sericulture & MSME sector.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kolar EPF & ESIC Compliance for Auto EMC, Honda Contractors & Sericulture | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC compliance for Kolar Auto EMC, Honda vendor contractors, Silk Weaving units in Malur, and MSMEs. Specialists in NWC wage rules, PF arrears defense and Principal Employer liability."
        />

        <meta
          name="keywords"
          content="Kolar PF ESIC, Honda contractor PF, Narasapura PF ESIC, Sericulture PF Karnataka, MSME PF compliance Kolar"
        />

        <link rel="canonical" href="https://epfdesk.com/kolar-epf-esic-compliance" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kolar EPF & ESIC Compliance | Auto EMC, Honda Vendors & Sericulture"
        />
        <meta
          property="og:description"
          content="PF/ESI experts for Kolar’s Auto EMC, Sericulture, and MSME industrial clusters."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta property="og:url" content="https://epfdesk.com/kolar-epf-esic-compliance" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kolar EPF & ESIC Compliance | Auto EMC & Sericulture"
        />
        <meta
          name="twitter:description"
          content="PF/ESI management for Kolar’s OEM vendors, MSMEs, and silk industry."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-kolar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kolar EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Kolar PF ESIC Consultants for Auto EMC & Sericulture",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kolar-epf-esic-compliance",
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
              latitude: 13.1369,
              longitude: 78.1290,
            },

            description:
              "EPFDesk provides PF & ESIC compliance management for Kolar’s Auto EMC, Honda contractors, MSME vendors, silk sericulture units and agro-processing workforce.",

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
              { "@type": "City", name: "Kolar" },
              { "@type": "Place", name: "Malur" },
              { "@type": "Place", name: "Narasapura" },
              { "@type": "Place", name: "Bangarpet" },
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
        <PerformanceSectionIndustry data={heroDataKolarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKolarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKolar} />
    </>
  );
};

export default page;
