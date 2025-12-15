import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataMandyaDist,
  sectionsMandyaDist,
  faqMandya,
} from "@/utils/data";

export const metadata = {
  title:
    "Mandya EPF & ESIC Compliance for Sugar Mills, Distilleries, Textiles & Plantation Workers | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Mandya Sugar Mills (Mysugar, Pandavapura), Distilleries, Textiles & Plantation Workers. Specialists in seasonal workforce PF, ESIC factory compliance, and Principal Employer liability management.",
  keywords: [
    "Mandya PF consultant",
    "Mandya ESIC consultant",
    "Sugar mill PF Mandya",
    "Distillery ESIC Mandya",
    "Plantation worker PF Karnataka",
    "EPFDesk Mandya",
  ],
  alternates: {
    canonical: "https://epfdesk.com/mandya-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Mandya EPF & ESIC Compliance | Sugar Mills, Distilleries & Textiles | EPFDesk",
    description:
      "PF & ESIC experts for Mandya Sugar Mills, Distilleries, Textiles, and Plantation-based industries.",
    url: "https://epfdesk.com/mandya-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Mandya PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mandya EPF & ESIC Compliance | Sugar Mills, Distilleries & Textiles | EPFDesk",
    description:
      "PF/ESI compliance for Mandya sugar mills, distilleries, plantations, and textile factories.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Mandya EPF & ESIC Compliance for Sugar Mills, Distilleries & Textile Units | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert PF & ESIC compliance for Mandya sugar factories (MSCL, Pandavapura), distilleries, textiles, and plantation workers. Specialists in PF for seasonal labour, ESIC enforcement, and Principal Employer risk mitigation."
        />

        <meta
          name="keywords"
          content="Mandya PF ESIC, sugar mill PF Karnataka, distillery ESIC compliance, plantation worker PF, textile PF Mandya"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mandya-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Mandya EPF & ESIC Compliance | Sugar Mills, Distilleries & Textiles"
        />
        <meta
          property="og:description"
          content="PF/ESI specialists for Mandya sugar mills, distilleries, textiles, and plantation workforce."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/mandya-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mandya EPF & ESIC Compliance | Sugar Mills & Distilleries"
        />
        <meta
          name="twitter:description"
          content="Comprehensive PF/ESI compliance for Mandya’s sugar factories, distilleries, plantations and textiles."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-mandya"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Mandya EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Mandya PF ESIC Consultants for Sugar Mills & Distilleries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mandya-epf-esic-compliance",
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
              latitude: 12.5223,
              longitude: 76.8970,
            },

            description:
              "EPFDesk provides audit-ready PF & ESIC compliance for Mandya’s sugar mills, distilleries, textiles, plantations and agro-processing industries. Specialists in managing seasonal labour compliance and Principal Employer liability.",

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
              { "@type": "City", name: "Mandya" },
              { "@type": "Place", name: "Srirangapatna" },
              { "@type": "Place", name: "Pandavapura" },
              { "@type": "Place", name: "Krishnarajpet" },
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
        <PerformanceSectionIndustry data={heroDataMandyaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMandyaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMandya} />
    </>
  );
};

export default page;
