import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqMeerut, heroDataMeerutDist, sectionsMeerutDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Meerut EPF & ESIC Compliance: Sports Goods Piece-Rate, Engineering PE Liability & Sugar Seasonal Risk | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Meerut sports goods manufacturers, engineering factories and sugar mills. Experts in RO Meerut liaison, combating piece-rate wage suppression, managing seasonal PF liability, and mitigating Principal Employer risk across Western UP.",

  keywords: [
    "Meerut PF consultant",
    "Meerut ESIC registration",
    "Sports goods piece rate PF Meerut",
    "Sugar mill retaining allowance PF",
    "Engineering PE liability Meerut",
    "RO Meerut EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/meerut-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Meerut EPF & ESIC Compliance | Sports Goods, Engineering & Sugar Mills",
    description:
      "PF & ESIC specialists for Meerut sports goods units, engineering MSMEs and sugar mills. Piece-rate audits, seasonal PF risk and RO Meerut enforcement handled.",
    url: "https://epfdesk.com/meerut-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Meerut PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Meerut EPF & ESIC Compliance | Sports Goods & Seasonal Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Meerut sports goods, engineering and sugar sectors.",
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
          Meerut EPF & ESIC Compliance: Sports Goods Piece-Rate, Engineering PE Liability & Sugar Seasonal Risk | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Meerut sports goods manufacturers, engineering units and sugar mills. Piece-rate PF audits, seasonal compliance and RO Meerut enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/meerut-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Meerut EPF & ESIC Compliance | Sports Goods & Sugar Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Meerut sports goods, engineering and agro-processing industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-meerut"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Meerut EPF & ESIC Compliance Service | Sports Goods & Sugar | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sports Goods, Engineering & Sugar Mills in Meerut",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/meerut-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Meerut sports goods manufacturers, engineering MSMEs and sugar mills. Expertise in piece-rate wage audits, seasonal PF liability (retaining allowance), Principal Employer liability under CLRA, and RO Meerut proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Meerut" },
              { "@type": "City", name: "Meerut City" },
              { "@type": "City", name: "Modipuram" },
              { "@type": "City", name: "Meerut Industrial Areas" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "87",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMeerutDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMeerutDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMeerut} />
    </>
  );
};

export default page;