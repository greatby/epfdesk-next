import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { faqKanpur, heroDataKanpurDist, sectionsKanpurDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kanpur EPF & ESIC Compliance: Leather Tanning Hazard, Ordnance PE Liability & Textile Allowance Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Kanpur Leather & Textile factories and Defence/Ordnance contractors. Experts in RO Kanpur liaison, catastrophic ESIC hazard mitigation in Jajmau, and minimizing CLRA/Principal Employer liability across Central UP.",

  keywords: [
    "Kanpur PF consultant",
    "Kanpur ESIC registration",
    "Leather tanning ESIC hazard Kanpur",
    "Ordnance factory contractor PF compliance",
    "Textile allowance PF audit Kanpur",
    "RO Kanpur EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kanpur-nagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Kanpur EPF & ESIC Compliance | Leather, Defence & Textile Industries",
    description:
      "PF & ESIC specialists for Kanpur leather tanneries, defence contractors and textile mills. ESIC hazard risk, PE liability and RO Kanpur audits handled.",
    url: "https://epfdesk.com/kanpur-nagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kanpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kanpur EPF & ESIC Compliance | Leather & Defence Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Kanpur leather, defence and textile industries.",
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
          Kanpur EPF & ESIC Compliance: Leather Tanning Hazard, Ordnance PE Liability & Textile Allowance Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defense for Kanpur leather tanneries, textile mills and defence contractors. ESIC hazard exposure, CLRA PE liability and RO Kanpur enforcement handled."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kanpur-nagar-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Kanpur EPF & ESIC Compliance | Leather, Defence & Textile"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Kanpur leather, defence/ordnance and textile industries."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-kanpur-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Kanpur EPF & ESIC Compliance Service | Leather, Defence & Textile | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Kanpur Leather & Defence Industries",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kanpur-nagar-epf-esic-compliance",
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
              "Specialized PF & ESIC compliance services for Kanpur leather tanning units, textile mills, and defence/ordnance contractors. Expertise in catastrophic ESIC hazard risk, Principal Employer liability under CLRA, allowance audits, and RO Kanpur proceedings.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Kanpur Nagar" },
              { "@type": "City", name: "Jajmau" },
              { "@type": "City", name: "Panki" },
              { "@type": "City", name: "Kanpur City" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "92",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKanpurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKanpurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKanpur} />
    </>
  );
};

export default page;