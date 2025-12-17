import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqAurangabad, heroDataAurangabadDist, sectionsAurangabadDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Aurangabad EPF & ESIC Compliance for Auto/Ancillaries, Waluj MIDC & Pharma Hazard | EPFDesk",

  description:
    "Critical EPF & ESIC defence for Aurangabad Auto & Ancillary factories, Principal Employer liability in Waluj/Shendra MIDC, ESIC hazard exposure in Pharma & Brewing industries, and allowance suppression audits. Specialized RO Aurangabad liaison.",

  keywords: [
    "Aurangabad PF consultant",
    "Aurangabad ESIC registration",
    "Waluj MIDC PF compliance",
    "Auto ancillary principal employer liability",
    "Pharma ESIC hazard compliance",
    "RO Aurangabad EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/aurangabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Aurangabad EPF & ESIC Compliance | Auto, Pharma & MIDC Hubs",
    description:
      "PF & ESIC specialists for Aurangabad Automobile, Pharma, Brewing and MIDC-based industries. Contractor PE liability, hazard ESIC risk & RO Aurangabad audits handled.",
    url: "https://epfdesk.com/aurangabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aurangabad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Aurangabad EPF & ESIC Compliance | Auto & Pharma Hazard | EPFDesk",
    description:
      "Critical PF/ESIC compliance for Waluj & Shendra MIDC auto ancillaries and pharma factories in Aurangabad.",
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
          Aurangabad EPF & ESIC Compliance for Auto/Ancillaries, Waluj MIDC & Pharma Hazard | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Aurangabad Auto Ancillaries, Pharma & Brewing units. Principal Employer liability, hazard risk, allowance audits & RO Aurangabad handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/aurangabad-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Aurangabad EPF & ESIC Compliance | Auto, Pharma & MIDC"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Aurangabad Automobile, Pharma, Brewing and MIDC industries. Contractor PE liability managed."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-aurangabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Aurangabad EPF & ESIC Compliance Service | Auto, Pharma & MIDC | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Waluj & Shendra MIDC Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/aurangabad-epf-esic-compliance",
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
              "Critical PF & ESIC compliance services for Aurangabad Automobile & Ancillary units, Pharma & Brewing factories, and MIDC MSMEs. Specialized in Principal Employer liability, hazard ESIC exposure, allowance suppression audits, and RO Aurangabad proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Aurangabad" },
              { "@type": "City", name: "Waluj" },
              { "@type": "City", name: "Shendra" },
              { "@type": "City", name: "Chikalthana" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "84",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAurangabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAurangabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAurangabad} />
    </>
  );
};

export default page;