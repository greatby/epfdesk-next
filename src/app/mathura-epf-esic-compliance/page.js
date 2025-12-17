import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqMathura, heroDataMathuraDist, sectionsMathuraDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mathura EPF & ESIC Compliance: IOCL Refinery PE Liability, Petrochemical Hazard & Tourism Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Mathura IOCL refinery contractors, dairy units and hotels. Experts in RO Agra liaison, catastrophic ESIC hazard mitigation and CLRA/PE liability defense.",

  keywords: [
    "Mathura PF consultant",
    "Mathura ESIC registration",
    "IOCL refinery PF compliance",
    "Petrochemical ESIC hazard Mathura",
    "Mathura PE liability contractors",
    "RO Agra EPFO Mathura jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mathura-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Mathura EPF & ESIC Compliance | IOCL Refinery, Petrochemical & Tourism",
    description:
      "PF & ESIC specialists for Mathura refinery contractors, petrochemical units, dairy plants and hotels.",
    url: "https://epfdesk.com/mathura-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mathura PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mathura EPF & ESIC Compliance | IOCL Refinery & Hazard Defence | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Mathura refinery contractors, dairy and tourism sectors.",
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
          Mathura EPF & ESIC Compliance: IOCL Refinery, Petrochemical & Tourism | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Mathura IOCL refinery contractors, dairy units and hotels. RO Agra inspections, PE liability and ESIC hazard risks handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/mathura-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Mathura EPF & ESIC Compliance | IOCL Refinery & Hazard Risk"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Mathura refinery contractors, dairy plants and tourism establishments."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-mathura"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Mathura EPF & ESIC Compliance Service | IOCL Refinery & Petrochemical | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for IOCL Refinery Contractors and Service Sector in Mathura",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/mathura-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Mathura IOCL refinery contractors, petrochemical units, dairy plants and tourism establishments. Expertise in catastrophic ESIC hazard mitigation, CLRA PE liability and RO Agra inspections.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Mathura" },
              { "@type": "AdministrativeArea", name: "Western Uttar Pradesh" },
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
        <PerformanceSectionIndustry data={heroDataMathuraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMathuraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMathura} />
    </>
  );
};

export default page;