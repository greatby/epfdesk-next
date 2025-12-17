import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqAzamgarh, heroDataAzamgarhDist, sectionsAzamgarhDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Azamgarh EPF & ESIC Compliance: Educational PF Mandate, Service Sector PE Liability & MSME Coverage Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Azamgarh educational institutions, hospitals and MSMEs. Experts in RO Varanasi liaison, retrospective PF demands on school staff and CLRA/PE liability management.",

  keywords: [
    "Azamgarh PF consultant",
    "Azamgarh ESIC registration",
    "Private school PF Azamgarh",
    "Hospital PF ESIC Azamgarh",
    "RO Varanasi EPFO jurisdiction Azamgarh",
    "MSME PF coverage Azamgarh",
  ],

  alternates: {
    canonical: "https://epfdesk.com/azamgarh-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Azamgarh EPF & ESIC Compliance | Education, Hospitals & MSMEs",
    description:
      "PF & ESIC specialists for Azamgarh schools, hospitals and trade establishments. RO Varanasi enforcement handled.",
    url: "https://epfdesk.com/azamgarh-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Azamgarh PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Azamgarh EPF & ESIC Compliance | Education & Service Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Azamgarh educational institutions, hospitals and MSMEs.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
const page = () => {
  return (
    <>
      {/* ========= LEGACY HEAD ========= */}
      <Head>
        <title>
          Azamgarh EPF & ESIC Compliance: Educational PF & Service Sector PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Azamgarh schools, hospitals and MSMEs. Retrospective PF audits, CLRA/PE liability and RO Varanasi enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/azamgarh-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Azamgarh EPF & ESIC Compliance | Education & Service Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Azamgarh educational institutions and hospitals."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-azamgarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Azamgarh EPF & ESIC Compliance Service | Education, Hospital & MSME | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Schools, Hospitals and MSMEs in Azamgarh",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/azamgarh-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* 🔒 ADDRESS — DO NOT CHANGE */
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
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "Specialized PF & ESIC compliance services for Azamgarh educational institutions, hospitals and MSMEs. Expertise in retrospective PF audits, service sector PE liability and RO Varanasi inspections.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Azamgarh" },
              { "@type": "City", name: "Purvanchal Region" },
              { "@type": "City", name: "Eastern Uttar Pradesh" },
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
        <PerformanceSectionIndustry data={heroDataAzamgarhDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAzamgarhDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAzamgarh} />
    </>
  );
};

export default page;