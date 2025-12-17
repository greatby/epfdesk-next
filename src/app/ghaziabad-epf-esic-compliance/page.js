import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqGhaziabad, heroDataGhaziabadDist, sectionsGhaziabadDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ghaziabad EPF & ESIC Compliance: Sahibabad PE Liability, Hazard Risk & Engineering MSME Defense | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Ghaziabad MSMEs and heavy engineering industries in Sahibabad and Loni. Experts in RO Ghaziabad liaison, CLRA/Principal Employer liability mitigation, Minimum Wage audits, and ESIC hazard risk management across NCR.",

  keywords: [
    "Ghaziabad PF consultant",
    "Ghaziabad ESIC registration",
    "Sahibabad PE liability PF ESIC",
    "Engineering MSME PF compliance Ghaziabad",
    "ESIC hazard liability heavy industry",
    "RO Ghaziabad EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/ghaziabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Ghaziabad EPF & ESIC Compliance | Engineering, MSME & Hazard Risk",
    description:
      "PF & ESIC specialists for Ghaziabad engineering factories, steel units and MSMEs. PE liability, ESIC hazard exposure and RO Ghaziabad audits handled.",
    url: "https://epfdesk.com/ghaziabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ghaziabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ghaziabad EPF & ESIC Compliance | PE Liability & Hazard Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Ghaziabad engineering MSMEs and heavy industry clusters.",
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
          Ghaziabad EPF & ESIC Compliance: Sahibabad PE Liability, Hazard Risk & Engineering MSME Defense | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Ghaziabad engineering factories and MSMEs in Sahibabad and Loni. Principal Employer liability, ESIC hazard exposure, Minimum Wage audits and RO Ghaziabad enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ghaziabad-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Ghaziabad EPF & ESIC Compliance | Engineering & MSME Risk"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Ghaziabad engineering, steel and chemical MSMEs. PE liability and ESIC hazard risk managed."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-ghaziabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Ghaziabad EPF & ESIC Compliance Service | Engineering & MSME | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Sahibabad & Loni Industrial Areas",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/ghaziabad-epf-esic-compliance",
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
              "Critical PF & ESIC compliance services for Ghaziabad engineering factories, steel and chemical MSMEs. Specialized in Principal Employer liability under CLRA, ESIC hazard exposure, Minimum Wage audits, and RO Ghaziabad proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Ghaziabad" },
              { "@type": "City", name: "Sahibabad" },
              { "@type": "City", name: "Loni" },
              { "@type": "City", name: "Ghaziabad City" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "89",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGhaziabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGhaziabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGhaziabad} />
    </>
  );
};

export default page;