import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataRaichurDist,
  sectionsRaichurDist,
  faqRaichur,
} from "@/utils/data";

export const metadata = {
  title:
    "Raichur EPF & ESIC Compliance for RTPS Thermal Power, Hutti Gold Mines & Rice Mills | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Raichur’s RTPS power plant contractors, Hutti Gold Mines labour and Sindhanur rice mills. Specialists in PF Principal Employer liability, seasonal worker ESIC coverage and hazardous industry compliance.",
  keywords: [
    "Raichur PF consultant",
    "RTPS PF ESIC contractor compliance",
    "Hutti Gold Mines ESIC",
    "Sindhanur rice mill PF ESI",
    "KPCL contractor PF liability",
    "thermal power PF ESIC",
    "agro processing PF compliance",
    "EPFDesk Raichur",
  ],
  alternates: {
    canonical: "https://epfdesk.com/raichur-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Raichur EPF & ESIC Consultant | Thermal Power, Gold Mining & Rice Mills | EPFDesk",
    description:
      "PF & ESIC compliance for Raichur’s high-risk sectors — RTPS, Hutti Gold Mines, agro-processing and KPCL contractors.",
    url: "https://epfdesk.com/raichur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Raichur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Raichur EPF & ESIC Compliance | RTPS, Hutti Gold Mines & Rice Mills | EPFDesk",
    description:
      "Specialised PF/ESI solutions for hazardous industries, power plants and agro-processing units in Raichur.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Raichur EPF & ESIC Compliance for RTPS Thermal Power, Gold Mining &
          Rice Mills | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC specialists for Raichur’s RTPS contractors, Hutti Gold Mines workers and Sindhanur rice mills. Expertise in 7A defence, hazardous industry ESIC compliance and seasonal workforce PF obligations."
        />

        <meta
          name="keywords"
          content="Raichur PF ESIC, RTPS PF compliance, KPCL contractor PF, Hutti Gold Mines ESIC, rice mill PF seasonal workers, Raichur SRO EPFO"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/raichur-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Raichur EPF & ESIC Consultant | RTPS, Hutti Gold Mines & Rice Mills | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance experts for Raichur’s power, mining and agro-processing sectors."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/raichur-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Raichur PF & ESIC Compliance | Power, Mining & Agro Processing | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF/ESI solutions for RTPS contractors, Hutti mines, rice mills and agro industries in Raichur."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-raichur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Raichur EPF & ESIC Compliance | Thermal Power, Gold Mining & Agro Processing | EPFDesk",
            alternateName:
              "EPFDesk – Raichur PF ESIC Consultants for RTPS & Hutti Gold Mines",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/raichur-epf-esic-compliance",
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
              latitude: 16.2055,
              longitude: 77.3557,
            },

            description:
              "Raichur’s PF/ESI risks relate to RTPS thermal power contractors, hazardous mining (Hutti) and seasonal agro-processing workers. EPFDesk provides PF liability defence, ESIC hazardous risk coverage and seasonal PF/ESI applicability guidance.",
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
              { "@type": "City", name: "Raichur" },
              { "@type": "Place", name: "RTPS Shaktinagar" },
              { "@type": "Place", name: "Hutti Gold Mines" },
              { "@type": "Place", name: "Sindhanur Rice Mills" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "38",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaichurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaichurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRaichur} />
    </>
  );
};

export default page;
