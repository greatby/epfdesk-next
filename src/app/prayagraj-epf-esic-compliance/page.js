import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqPrayagraj, heroDataPrayagrajDist, sectionsPrayagrajDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Prayagraj EPF & ESIC Compliance: Educational PF Mandate, High Court PE Liability & Coaching Sector Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Prayagraj educational institutions, coaching centers, hospitals and government contractors. Experts in RO Prayagraj liaison, retrospective PF demands on school staff, allowance audits and CLRA/PE liability management.",

  keywords: [
    "Prayagraj PF consultant",
    "Prayagraj ESIC registration",
    "PF compliance private school Prayagraj",
    "Coaching center PF ESIC Prayagraj",
    "High Court contractor PF liability",
    "RO Prayagraj EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/prayagraj-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Prayagraj EPF & ESIC Compliance | Education, Coaching & Government Contractors",
    description:
      "PF & ESIC specialists for Prayagraj schools, coaching centers, hospitals and government contractors. RO Prayagraj enforcement, PE liability and allowance audits handled.",
    url: "https://epfdesk.com/prayagraj-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Prayagraj PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Prayagraj EPF & ESIC Compliance | Education & Government Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Prayagraj schools, coaching centers and government contractors.",
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
          Prayagraj EPF & ESIC Compliance: Educational PF Mandate, High Court PE Liability & Coaching Sector Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Prayagraj educational institutions, coaching centers, hospitals and government contractors. Retrospective PF audits and RO Prayagraj enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/prayagraj-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Prayagraj EPF & ESIC Compliance | Education & Government Sector"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Prayagraj schools, coaching centers and government contractors."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-prayagraj"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Prayagraj EPF & ESIC Compliance Service | Education & Government Contractors | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Schools, Coaching Centers & Government Contractors in Prayagraj",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/prayagraj-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Prayagraj educational institutions, coaching centers, hospitals and government contractors. Expertise in educational PF mandates, allowance audits, Principal Employer liability under CLRA, ESIC registration and RO Prayagraj proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Prayagraj" },
              { "@type": "City", name: "Allahabad" },
              { "@type": "City", name: "Naini Industrial Area" },
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
        <PerformanceSectionIndustry data={heroDataPrayagrajDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPrayagrajDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPrayagraj} />
    </>
  );
};

export default page;