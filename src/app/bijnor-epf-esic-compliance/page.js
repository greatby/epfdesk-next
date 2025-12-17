import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqBijnor, heroDataBijnorDist, sectionsBijnorDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Bijnor EPF & ESIC Compliance: Sugar Seasonal PF, Paper Mill Hazard & Agro-Contractor PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Bijnor Sugar Mills, Paper Factories and Agro-Processors. Experts in RO Moradabad liaison, seasonal PF audits and ESIC hazard liability.",

  keywords: [
    "Bijnor PF consultant",
    "Bijnor ESIC registration",
    "Sugar mill PF compliance Bijnor",
    "Paper mill ESIC hazard Bijnor",
    "RO Moradabad PF jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/bijnor-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Bijnor EPF & ESIC Compliance | Sugar, Paper & Agro-Processing",
    description:
      "PF & ESIC specialists for Bijnor Sugar Mills, Paper/Chemical factories and Agro-Processing units.",
    url: "https://epfdesk.com/bijnor-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bijnor PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bijnor EPF & ESIC Compliance | Sugar & Paper Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Bijnor Sugar Mills, Paper Factories and Agro units.",
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
          Bijnor EPF & ESIC Compliance: Sugar, Paper & Agro | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Bijnor Sugar Mills, Paper Factories and Agro-Processing units under RO Moradabad."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/bijnor-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Bijnor EPF & ESIC Compliance | Sugar & Paper Sector"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Bijnor Sugar, Paper and Agro-Processing industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-bijnor"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Bijnor EPF & ESIC Compliance | Sugar, Paper & Agro | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sugar & Paper Industries (Bijnor)",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/bijnor-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Bijnor Sugar Mills, Paper/Chemical factories and Agro-Processing units. Expertise in RO Moradabad inspections, seasonal PF audits and ESIC hazard liability mitigation.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Bijnor" },
              { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
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
        <PerformanceSectionIndustry data={heroDataBijnorDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBijnorDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBijnor} />
    </>
  );
};

export default page;