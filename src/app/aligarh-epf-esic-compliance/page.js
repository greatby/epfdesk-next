import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqAligarh, heroDataAligarhDist, sectionsAligarhDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Aligarh EPF & ESIC Compliance: Lock & Brass Piece-Rate, Hardware Hazard Risk & MSME PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Aligarh Lock manufacturers, Brass foundries and Hardware exporters. Experts in RO Aligarh liaison, combating piece-rate wage suppression, job-work PE liability, and mitigating ESIC hazard exposure for MSMEs.",

  keywords: [
    "Aligarh PF consultant",
    "Aligarh ESIC registration",
    "Lock industry PF compliance Aligarh",
    "Brass foundry ESIC hazard",
    "Hardware MSME PF ESIC",
    "RO Aligarh EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/aligarh-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Aligarh EPF & ESIC Compliance | Lock, Brass & Hardware MSMEs",
    description:
      "PF & ESIC specialists for Aligarh lock manufacturers, brass foundries and hardware exporters. Piece-rate audits, job-work PE liability and RO Aligarh enforcement handled.",
    url: "https://epfdesk.com/aligarh-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aligarh PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Aligarh EPF & ESIC Compliance | Lock & Brass Industry | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Aligarh lock, brass and hardware MSMEs.",
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
          Aligarh EPF & ESIC Compliance: Lock & Brass Piece-Rate, Hardware Hazard Risk & MSME PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Aligarh lock manufacturers, brass foundries and hardware exporters. Piece-rate PF audits, job-work PE liability and RO Aligarh enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/aligarh-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Aligarh EPF & ESIC Compliance | Lock & Brass Industry"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Aligarh lock, brass and hardware MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-aligarh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Aligarh EPF & ESIC Compliance Service | Lock & Brass Industry | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Lock, Brass & Hardware MSMEs in Aligarh",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/aligarh-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Aligarh lock manufacturers, brass foundries and hardware exporters. Expertise in piece-rate wage audits, job-work Principal Employer liability, ESIC hazard exposure, and RO Aligarh proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Aligarh" },
              { "@type": "City", name: "Aligarh Industrial Areas" },
              { "@type": "City", name: "MSME Clusters Aligarh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "74",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAligarhDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAligarhDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAligarh} />
    </>
  );
};

export default page;