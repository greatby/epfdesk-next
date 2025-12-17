import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqLucknow, heroDataLucknowDist, sectionsLucknowDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Lucknow EPF & ESIC Compliance: HAL/BEL PE Liability, Service Sector Allowance Audits & Educational PF | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Lucknow HAL/BEL contractors, IT/ITeS firms, private schools and hospitals. Experts in RO Lucknow liaison, high-stakes allowance suppression audits, and minimizing CLRA/Principal Employer liability across Central UP government contracts.",

  keywords: [
    "Lucknow PF consultant",
    "Lucknow ESIC registration",
    "HAL BEL contractor PF compliance",
    "Service sector allowance audit Lucknow",
    "Educational institution PF compliance Lucknow",
    "RO Lucknow EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/lucknow-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Lucknow EPF & ESIC Compliance | Government Contractors & Service Sector",
    description:
      "PF & ESIC specialists for Lucknow defence contractors, IT services, private schools and hospitals. Allowance audits, PE liability and RO Lucknow enforcement handled.",
    url: "https://epfdesk.com/lucknow-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lucknow PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Lucknow EPF & ESIC Compliance | HAL/BEL & Service Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Lucknow government contractors, IT firms and educational institutions.",
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
          Lucknow EPF & ESIC Compliance: HAL/BEL PE Liability, Service Sector Allowance Audits & Educational PF | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Lucknow HAL/BEL contractors, IT services, private schools and hospitals. Allowance audits, CLRA PE liability and RO Lucknow enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/lucknow-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Lucknow EPF & ESIC Compliance | Government & Service Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Lucknow government contractors, IT/ITeS firms and educational institutions."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-lucknow"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Lucknow EPF & ESIC Compliance Service | Government & Service Sector | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for HAL/BEL Contractors & Service Firms in Lucknow",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/lucknow-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Lucknow defence contractors (HAL/BEL), IT/ITeS firms, private schools, hospitals and government service providers. Expertise in allowance suppression audits, Principal Employer liability under CLRA, educational sector PF mandates, and RO Lucknow proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Lucknow" },
              { "@type": "City", name: "Alambagh" },
              { "@type": "City", name: "Chinhat" },
              { "@type": "City", name: "Amausi" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "95",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLucknowDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLucknowDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqLucknow} />
    </>
  );
};

export default page;