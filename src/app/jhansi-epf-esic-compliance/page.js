import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqJhansi, heroDataJhansiDist, sectionsJhansiDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jhansi EPF & ESIC Compliance: Railway & Defence PE Liability, Agro-Processing Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Jhansi Railway contractors, Defence units, agro-processing factories and MSMEs. Experts in RO Jhansi liaison, CLRA PE liability and seasonal PF audits across Bundelkhand.",

  keywords: [
    "Jhansi PF consultant",
    "Jhansi ESIC registration",
    "Railway contractor PF compliance Jhansi",
    "Defence PE liability Jhansi",
    "Agro processing PF audits Jhansi",
    "RO Jhansi EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jhansi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Jhansi EPF & ESIC Compliance | Railway, Defence & Agro-Processing",
    description:
      "PF & ESIC specialists for Jhansi Railway contractors, Defence establishments, MSMEs and agro units.",
    url: "https://epfdesk.com/jhansi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jhansi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jhansi EPF & ESIC Compliance | Railway & Defence PE Liability | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Jhansi Railway contractors, Defence units and agro-processing industries.",
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
          Jhansi EPF & ESIC Compliance: Railway & Defence PE Liability | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Jhansi Railway contractors, Defence establishments, agro-processing units and MSMEs. RO Jhansi inspections and PE liability handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/jhansi-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Jhansi EPF & ESIC Compliance | Railway & Defence Contractors"
        />
        <meta
          property="og:description"
          content="PF/ESIC experts for Jhansi Railway, Defence, agro-processing and service sectors."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-jhansi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Jhansi EPF & ESIC Compliance Service | Railway & Defence Contractors | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Railway, Defence and MSMEs in Jhansi",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/jhansi-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Jhansi Railway contractors, Defence establishments, agro-processing units and MSMEs. Expertise in CLRA PE liability, seasonal PF audits and RO Jhansi inspections.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Jhansi" },
              { "@type": "AdministrativeArea", name: "Bundelkhand Region" },
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
        <PerformanceSectionIndustry data={heroDataJhansiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJhansiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJhansi} />
    </>
  );
};

export default page;