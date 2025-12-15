import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataDharwadDist,
  sectionsDharwadDist,
  faqDharwad,
} from "@/utils/data";

export const metadata = {
  title:
    "Dharwad EPF & ESIC Compliance for Educational Trusts, IIT Contractors & ESDM Units | EPFDesk",
  description:
    "Expert PF & ESIC compliance for private colleges, universities, IIT Dharwad contractors, ESDM units and Auto Ancillary MSMEs. Specialized in ESIC for educational institutions and PF wage restructuring under NWC 2025.",
  alternates: {
    canonical: "https://epfdesk.com/dharwad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Dharwad EPF & ESIC Compliance | Education • IIT • ESDM • Auto Ancillaries",
    description:
      "PF & ESIC specialists for educational trusts, IIT Dharwad contractors, ESDM clusters and auto ancillary MSMEs.",
    url: "https://epfdesk.com/dharwad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dharwad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dharwad EPF & ESIC Compliance | Education • IIT • ESDM • MSMEs",
    description:
      "PF & ESIC experts for colleges, universities, IIT Dharwad contract staff, ESDM units and auto ancillary workers.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Dharwad EPF & ESIC Compliance for Educational Trusts, IIT Contractors &
          ESDM Units | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF/ESIC compliance for private colleges, IIT Dharwad contractors, ESDM/Auto MSMEs and teaching/non-teaching staff across Dharwad district."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dharwad-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Dharwad EPF & ESIC Compliance | Educational Trusts • IIT • ESDM Units"
        />
        <meta
          property="og:description"
          content="PF & ESIC consultants for educational institutions, IIT Dharwad support staff, ESDM units and auto ancillary MSMEs."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-dharwad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Dharwad EPF & ESIC Compliance | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultant for Educational Trusts, IIT Dharwad & ESDM Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/dharwad-epf-esic-compliance",
            telephone: "+91-9945933333",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Dharwad",
              addressRegion: "Karnataka",
              postalCode: "580001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 15.4589,
              longitude: 75.0078,
            },

            description:
              "PF & ESIC compliance services for educational institutions, IIT Dharwad contractors, Auto Ancillary MSMEs and ESDM manufacturing units.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "City", name: "Dharwad" },
              { "@type": "City", name: "Hubballi" },
              { "@type": "City", name: "Navalgund" },
              { "@type": "City", name: "Kalghatgi" },
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
        <PerformanceSectionIndustry data={heroDataDharwadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDharwadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDharwad} />
    </>
  );
};

export default page;
