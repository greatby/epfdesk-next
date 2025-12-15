import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataKoppalDist,
  sectionsKoppalDist,
  faqKoppal,
} from "@/utils/data";

export const metadata = {
  title:
    "Koppal EPF & ESIC Compliance for Rice Mills, Agro-Processing & Gangavathi MSME Units | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance for Koppal’s rice mills, agro-processing belts and MSME units in Gangavathi. Specialised in PF for seasonal and piece-rate workers, ESIC for mill labour, and statutory registration for unorganized sector MSMEs.",
  keywords: [
    "Koppal PF consultant",
    "Koppal ESIC consultant",
    "rice mill PF ESIC",
    "Gangavathi MSME PF ESIC",
    "piece-rate PF calculation",
    "seasonal worker PF ESIC Karnataka",
    "KSSIDC Gangavathi compliance",
    "EPFDesk Koppal",
  ],
  alternates: {
    canonical: "https://epfdesk.com/koppal-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Koppal EPF & ESIC Consultant | Rice Mills, Agro-Processing & MSME Units | EPFDesk",
    description:
      "Expert PF & ESIC compliance services for Koppal’s rice mills, agro-processing units and industrial estates in Gangavathi.",
    url: "https://epfdesk.com/koppal-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Koppal PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Koppal EPF & ESIC Compliance | Rice Mills, Agro & MSME Cluster | EPFDesk",
    description:
      "PF/ESI compliance for seasonal and piece-rate workforce in Koppal rice mills, agro-processing units, and Gangavathi MSME clusters.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Koppal EPF & ESIC Compliance for Rice Mills, Agro-Processing &
          Gangavathi MSME Units | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance specialists for Koppal rice mills, seasonal agro-processing workers and MSMEs in Gangavathi Industrial Estates."
        />

        <meta
          name="keywords"
          content="Koppal PF ESIC, rice mill PF, agro-processing PF ESIC, piece-rate PF calculation, Gangavathi MSME compliance"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/koppal-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Koppal EPF & ESIC Consultant | Rice Mills, Agro & MSME Sector | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Koppal’s seasonal, piece-rate and agro-processing workforce."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/koppal-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Koppal PF & ESIC Compliance | Rice Mills & MSME | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF/ESI solutions for Koppal’s rice mills, agro-processing units and KSSIDC MSME clusters."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-koppal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Koppal EPF & ESIC Compliance | Rice Mills, Agro-Processing & MSME Units | EPFDesk",
            alternateName:
              "EPFDesk – Koppal PF ESIC Consultants for Rice Mills & MSME Sector",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/koppal-epf-esic-compliance",
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
              latitude: 15.3455,
              longitude: 76.1551,
            },

            description:
              "Koppal’s PF/ESI risks revolve around seasonal labour in rice mills, piece-rate wage structures, and compliance obligations for MSMEs in Gangavathi. EPFDesk provides PF liability defence, ESIC for mill workers, and registration solutions for new MSMEs.",
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
              { "@type": "City", name: "Koppal" },
              { "@type": "Place", name: "Gangavathi Rice Mills" },
              { "@type": "Place", name: "KSSIDC Industrial Estate" },
              { "@type": "Place", name: "Agro-Processing Units" },
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
        <PerformanceSectionIndustry data={heroDataKoppalDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKoppalDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKoppal} />
    </>
  );
};

export default page;
