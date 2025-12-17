import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqNoida, heroDataNoidaDist, sectionsNoidaDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Noida EPF & ESIC Compliance: Allowance Audits, PE Liability for IT/ITeS & Electronics MIDC | EPFDesk",

  description:
    "Critical EPF & ESIC defence for Noida IT/BPO hubs and Greater Noida factories. Experts in RO Noida liaison, high-stakes allowance suppression audits, and minimizing CLRA/Principal Employer liability across the NCR contract workforce.",

  keywords: [
    "Noida PF consultant",
    "Noida ESIC registration",
    "IT allowance PF audit Noida",
    "Principal Employer liability Greater Noida",
    "RO Noida EPFO consultant",
    "Electronics MIDC PF ESIC compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/noida-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Noida EPF & ESIC Compliance | IT Allowance Audits & PE Liability",
    description:
      "PF & ESIC specialists for Noida IT/ITeS, BPOs and Greater Noida manufacturing units. Allowance audits, contractor PE liability and RO Noida enforcement handled.",
    url: "https://epfdesk.com/noida-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Noida PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Noida EPF & ESIC Compliance | IT Allowance & PE Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Noida IT, BPO and Electronics units. RO Noida audits & NWC readiness covered.",
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
          Noida EPF & ESIC Compliance: Allowance Audits, PE Liability for IT/ITeS & Electronics MIDC | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Noida IT/ITeS, BPOs and Greater Noida factories. Allowance suppression audits, CLRA PE liability and RO Noida enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/noida-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Noida EPF & ESIC Compliance | IT Allowance & PE Liability"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Noida IT hubs and Greater Noida electronics & manufacturing units."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Noida EPF & ESIC Compliance Service | IT, Electronics & NCR | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Noida IT/ITeS & Greater Noida MIDC",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/noida-epf-esic-compliance",
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
              "Critical PF & ESIC compliance services for Noida IT/ITeS companies, BPOs and Greater Noida Electronics & Manufacturing units. Specialized in allowance suppression audits, Principal Employer liability under CLRA, ESIC factory compliance, and RO Noida proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Noida" },
              { "@type": "City", name: "Greater Noida" },
              { "@type": "City", name: "Sector 62" },
              { "@type": "City", name: "Sector 63" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "96",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNoidaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNoidaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNoida} />
    </>
  );
};

export default page;