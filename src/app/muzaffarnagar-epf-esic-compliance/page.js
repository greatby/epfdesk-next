import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqMuzaffarnagar, heroDataMuzaffarnagarDist, sectionsMuzaffarnagarDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Muzaffarnagar EPF & ESIC Compliance: Sugar Seasonal PF, Paper Mill Hazard & Agro PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Muzaffarnagar Sugar Mills, Paper & Chemical factories and agro-processors. Experts in RO Meerut liaison, Retaining Allowance PF audits and ESIC hazard liability across Western UP.",

  keywords: [
    "Muzaffarnagar PF consultant",
    "Muzaffarnagar ESIC registration",
    "Sugar mill PF retaining allowance Muzaffarnagar",
    "Paper mill ESIC hazard liability",
    "RO Meerut PF jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/muzaffarnagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Muzaffarnagar EPF & ESIC Compliance | Sugar, Paper & Agro Processing",
    description:
      "PF & ESIC specialists for Muzaffarnagar Sugar Mills, Paper factories and agro-processing units.",
    url: "https://epfdesk.com/muzaffarnagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Muzaffarnagar PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Muzaffarnagar EPF & ESIC Compliance | Sugar & Paper Mills | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Muzaffarnagar Sugar Mills, Paper & Chemical industries.",
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
          Muzaffarnagar EPF & ESIC Compliance: Sugar & Paper Industry | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Muzaffarnagar Sugar Mills, Paper & Chemical factories and agro-processing units under RO Meerut."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/muzaffarnagar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Muzaffarnagar EPF & ESIC Compliance | Sugar & Paper Mills"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Muzaffarnagar Sugar, Paper and Agro-Processing industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-muzaffarnagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Muzaffarnagar EPF & ESIC Compliance | Sugar & Paper Industry | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar Mills & Paper Factories in Muzaffarnagar",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/muzaffarnagar-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Muzaffarnagar Sugar Mills, Paper & Chemical industries and agro-processing units. Expertise in RO Meerut inspections, seasonal PF audits and ESIC hazard liability.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Muzaffarnagar" },
              { "@type": "AdministrativeArea", name: "Western Uttar Pradesh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "73",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMuzaffarnagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMuzaffarnagarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMuzaffarnagar} />
    </>
  );
};

export default page;