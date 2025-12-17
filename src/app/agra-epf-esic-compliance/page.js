import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqAgra, heroDataAgraDist, sectionsAgraDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Agra EPF & ESIC Compliance: Footwear Piece-Rate Evasion, Leather Hazard Risk & Tourism PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Agra footwear manufacturers, leather exporters, and hotels. Experts in RO Agra liaison, combating piece-rate wage suppression, ESIC hazard liability in leather/footwear units, and mitigating CLRA/Principal Employer risk across Western UP.",

  keywords: [
    "Agra PF consultant",
    "Agra ESIC registration",
    "Footwear piece rate PF Agra",
    "Leather factory ESIC hazard Agra",
    "Hotel contractor PE liability Agra",
    "RO Agra EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/agra-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Agra EPF & ESIC Compliance | Footwear, Leather & Tourism Sector",
    description:
      "PF & ESIC specialists for Agra footwear factories, leather exporters and hotels. Piece-rate audits, PE liability and RO Agra enforcement handled.",
    url: "https://epfdesk.com/agra-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Agra PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Agra EPF & ESIC Compliance | Footwear & Leather Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Agra footwear, leather and tourism sectors.",
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
          Agra EPF & ESIC Compliance: Footwear Piece-Rate Evasion, Leather Hazard Risk & Tourism PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Agra footwear factories, leather exporters and hotels. Piece-rate PF audits, ESIC hazard exposure and RO Agra enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/agra-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Agra EPF & ESIC Compliance | Footwear & Tourism Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Agra footwear, leather and hospitality industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-agra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Agra EPF & ESIC Compliance Service | Footwear & Leather | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Footwear, Leather & Hotels in Agra",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/agra-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Agra footwear factories, leather exporters and tourism establishments. Expertise in piece-rate wage audits, ESIC hazard risk management, Principal Employer liability under CLRA, and RO Agra proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Agra" },
              { "@type": "City", name: "Agra City" },
              { "@type": "City", name: "Taj Ganj" },
              { "@type": "City", name: "Agra Industrial Areas" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "91",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAgraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAgraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAgra} />
    </>
  );
};

export default page;