import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqBareilly, heroDataBareillyDist, sectionsBareillyDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Bareilly EPF & ESIC Compliance: Furniture Piece-Rate, Sugar Seasonal PF & Defence Contractor PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Bareilly furniture manufacturers, sugar mills and defence contractors. Experts in RO Bareilly liaison, piece-rate PF audits, seasonal PF exposure and PE liability compliance.",

  keywords: [
    "Bareilly PF consultant",
    "Bareilly ESIC registration",
    "Furniture piece rate PF Bareilly",
    "Sugar mill seasonal PF Bareilly",
    "RO Bareilly EPFO consultant",
    "Defence contractor PF ESIC Bareilly",
  ],

  alternates: {
    canonical: "https://epfdesk.com/bareilly-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Bareilly EPF & ESIC Compliance | Furniture, Sugar & Defence Contractors",
    description:
      "PF & ESIC specialists for Bareilly furniture manufacturers, sugar mills and defence contractors. Piece-rate audits and RO Bareilly enforcement handled.",
    url: "https://epfdesk.com/bareilly-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bareilly PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bareilly EPF & ESIC Compliance | Furniture & Sugar Industry | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Bareilly furniture manufacturers and seasonal sugar mills.",
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
          Bareilly EPF & ESIC Compliance: Furniture Piece-Rate & Sugar Seasonal PF | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Bareilly furniture manufacturers, sugar mills and defence contractors. Piece-rate PF audits, seasonal PF exposure and RO Bareilly enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bareilly-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bareilly EPF & ESIC Compliance | Furniture & Sugar Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Bareilly furniture factories, sugar mills and defence contractors."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-bareilly"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Bareilly EPF & ESIC Compliance Service | Furniture, Sugar & Defence Contractors | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Furniture Manufacturers and Sugar Mills in Bareilly",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bareilly-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Bareilly furniture manufacturers, sugar mills and defence contractors. Expertise in piece-rate PF exposure, seasonal PF audits, ESIC hazard compliance and RO Bareilly inspections.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Bareilly" },
              { "@type": "City", name: "Rohilkhand Region" },
              { "@type": "City", name: "Bareilly Industrial Areas" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "76",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBareillyDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBareillyDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBareilly} />
    </>
  );
};

export default page;