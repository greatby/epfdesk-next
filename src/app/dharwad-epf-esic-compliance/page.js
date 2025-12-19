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
    "Dharwad EPF & ESIC Compliance: Educational Trusts, IIT Dharwad Contractors, ESDM Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Dharwad educational trusts, private colleges, IIT Dharwad contractors, ESDM clusters and auto ancillary MSMEs. Experts in ESIC coverage for education sector, teaching/non-teaching staff audits and New Wage Code 2025 restructuring.",

  keywords: [
    "Dharwad PF consultant",
    "Dharwad ESIC consultant",
    "Educational trust PF ESIC Dharwad",
    "Private college PF compliance Dharwad",
    "IIT Dharwad contractor PF ESIC",
    "ESDM labour compliance Dharwad",
    "Auto ancillary PF ESIC Dharwad",
    "Principal Employer liability Dharwad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dharwad-epf-esic-compliance",
  },

  openGraph: {
    title: "Dharwad EPF & ESIC Compliance | Education, IIT & ESDM Clusters",
    description:
      "PF & ESIC specialists for Dharwad educational institutions, IIT Dharwad contractors, ESDM units and auto ancillary MSMEs.",
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
    title: "Dharwad EPF & ESIC Compliance | Education • IIT • ESDM | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Dharwad colleges, IIT Dharwad contract staff, ESDM units and auto ancillary workers.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Dharwad EPF & ESIC Compliance: Educational Trusts, IIT Dharwad
          Contractors & ESDM Units | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Dharwad educational trusts, private colleges, IIT Dharwad contractors, ESDM clusters and auto ancillary MSMEs. Teaching/non-teaching staff coverage, contractor PF liability and wage audits handled."
        />

        <meta
          name="keywords"
          content="Dharwad PF consultant, Dharwad ESIC consultant, educational trust PF ESIC Dharwad, private college labour compliance, IIT Dharwad contractor PF, ESDM unit PF ESIC, auto ancillary labour laws Dharwad, Principal Employer liability Dharwad, NWC 2025 wage restructuring Dharwad"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/dharwad-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Dharwad EPF & ESIC Consultant | Education, IIT & ESDM Units | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Dharwad educational institutions, IIT Dharwad contractors, ESDM units and auto ancillary MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/dharwad-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dharwad EPF & ESIC Compliance | Education • IIT • ESDM | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Dharwad colleges, IIT Dharwad support staff, ESDM units and auto ancillary workers."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
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
