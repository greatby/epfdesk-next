import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqMoradabad, heroDataMoradabadDist, sectionsMoradabadDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Moradabad EPF & ESIC Compliance: Brassware Piece-Rate Evasion, Export PE Liability & SME Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Experts in RO Moradabad liaison, piece-rate PF exposure, export house PE liability and ESIC hazard audits.",

  keywords: [
    "Moradabad PF consultant",
    "Moradabad ESIC registration",
    "Brassware piece rate PF Moradabad",
    "Handicraft exporter PF liability",
    "RO Moradabad EPFO consultant",
    "Brass foundry ESIC compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/moradabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Moradabad EPF & ESIC Compliance | Brassware & Handicraft Export Sector",
    description:
      "PF & ESIC specialists for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Piece-rate audits and RO Moradabad enforcement handled.",
    url: "https://epfdesk.com/moradabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Moradabad EPF & ESIC Compliance | Brassware Export Industry | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Moradabad brassware manufacturers and handicraft exporters.",
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
          Moradabad EPF & ESIC Compliance: Brassware Piece-Rate Evasion & Export PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Piece-rate PF audits, export PE liability and RO Moradabad enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/moradabad-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Moradabad EPF & ESIC Compliance | Brassware & Handicraft Exports"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Moradabad brassware manufacturers and handicraft export houses."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-moradabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Moradabad EPF & ESIC Compliance Service | Brassware & Handicraft Export | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Brassware Manufacturers & Export Houses in Moradabad",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/moradabad-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Expertise in piece-rate PF exposure, job-work PE liability, ESIC hazard compliance and RO Moradabad inspections.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Moradabad" },
              { "@type": "City", name: "Moradabad Industrial Areas" },
              { "@type": "City", name: "Western UP Export Clusters" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "82",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMoradabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMoradabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMoradabad} />
    </>
  );
};

export default page;