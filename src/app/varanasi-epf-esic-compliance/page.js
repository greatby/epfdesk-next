import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqVaranasi, heroDataVaranasiDist, sectionsVaranasiDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Varanasi EPF & ESIC Compliance: Handloom Piece-Rate Evasion, Tourism PE Liability & Service Sector Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Varanasi silk merchants, handloom exporters, hotels and hospitals. Experts in RO Varanasi liaison, combating piece-rate wage suppression, and minimizing CLRA/Principal Employer liability across the service and contract workforce.",

  keywords: [
    "Varanasi PF consultant",
    "Varanasi ESIC registration",
    "Handloom piece rate PF Varanasi",
    "Silk exporter PF compliance",
    "Hotel contractor PE liability Varanasi",
    "RO Varanasi EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/varanasi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Varanasi EPF & ESIC Compliance | Handloom, Tourism & Service Sector",
    description:
      "PF & ESIC specialists for Varanasi handloom exporters, hotels, hospitals and educational institutions. Piece-rate audits, PE liability and RO Varanasi enforcement handled.",
    url: "https://epfdesk.com/varanasi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Varanasi EPF & ESIC Compliance | Handloom & Tourism Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Varanasi silk, handloom and tourism sectors.",
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
          Varanasi EPF & ESIC Compliance: Handloom Piece-Rate Evasion, Tourism PE Liability & Service Sector Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Varanasi silk exporters, handloom units, hotels, hospitals and educational institutions. Piece-rate PF audits, PE liability and RO Varanasi enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/varanasi-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Varanasi EPF & ESIC Compliance | Handloom & Tourism Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Varanasi handloom exporters, hotels and service establishments."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-varanasi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Varanasi EPF & ESIC Compliance Service | Handloom & Tourism | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Handloom Exporters & Hotels in Varanasi",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/varanasi-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* 🔒 ADDRESS — SAME AS ALL OTHER PAGES */
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
              "Specialized PF & ESIC compliance services for Varanasi handloom and silk exporters, hotels, hospitals and educational institutions. Expertise in piece-rate wage audits, Principal Employer liability under CLRA, ESIC service-sector compliance, and RO Varanasi proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Varanasi" },
              { "@type": "City", name: "Ramnagar" },
              { "@type": "City", name: "Karsara" },
              { "@type": "City", name: "Varanasi City" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "88",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVaranasiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVaranasiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqVaranasi} />
    </>
  );
};

export default page;