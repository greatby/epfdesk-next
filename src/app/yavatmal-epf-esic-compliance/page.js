import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";

import {
  heroDataYavatmalDist,
  sectionsYavatmalDist,
  faqYavatmal,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Yavatmal EPF & ESIC Compliance for Cotton Ginning, Oil Mills & Seasonal Piece-Rate Wages | EPFDesk",

  description:
    "Expert EPF & ESIC compliance and defence for Yavatmal Cotton Ginning, Oil Mills, Dal Mills and Agro-Processing units. Specialists in seasonal and piece-rate PF liability, RO Nagpur liaison, and Minimum Wages Act Zone 3 compliance.",

  keywords: [
    "Yavatmal PF consultant",
    "Yavatmal ESIC registration",
    "Cotton ginning PF compliance Yavatmal",
    "Oil mill ESIC Maharashtra",
    "Piece rate PF compliance Vidarbha",
    "RO Nagpur EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/yavatmal-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Yavatmal EPF & ESIC Compliance | Cotton, Agro-Processing & Seasonal Labour",
    description:
      "PF & ESIC specialists for Yavatmal Cotton Ginning, Oil Mills, Dal Mills and MSMEs. Seasonal workforce, piece-rate wages & EPFO RO Nagpur audits handled.",
    url: "https://epfdesk.com/yavatmal-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Yavatmal PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Yavatmal EPF & ESIC Compliance | Cotton & Seasonal Labour | EPFDesk",
    description:
      "Expert PF/ESIC compliance for seasonal cotton ginning & agro mills in Yavatmal. RO Nagpur handling & wage audits.",
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
          Yavatmal EPF & ESIC Compliance for Cotton Ginning, Oil Mills & Seasonal Piece-Rate Wages | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC compliance support for Cotton Ginning, Oil Mills, Dal Mills and MSMEs in Yavatmal. Specialists in seasonal labour, piece-rate wages and RO Nagpur audits."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/yavatmal-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Yavatmal EPF & ESIC Compliance | Cotton & Agro-Processing"
        />
        <meta
          property="og:description"
          content="Experts in PF/ESIC for Yavatmal Cotton Ginning, Oil Mills, Dal Mills and MIDC MSMEs."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ========= SCHEMA.ORG (ADDRESS UNCHANGED) ========= */}
      <Script
        id="schema-yavatmal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Yavatmal EPF & ESIC Compliance Service | Cotton & Agro-Processing | EPFDesk",

            alternateName:
              "EPFDesk – PF & ESIC Consultant for Cotton Ginning, Oil Mills & MSMEs in Yavatmal",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/yavatmal-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* 🔒 ADDRESS — EXACT SAME AS ALL OTHER PAGES */
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
              "Expert PF & ESIC compliance services for Cotton Ginning, Oil Mills, Dal Mills and Agro-Processing units in Yavatmal. Specialized in seasonal labour, piece-rate wages, Minimum Wages Act Zone 3 and EPFO RO Nagpur audits.",

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Yavatmal" },
              { "@type": "City", name: "Pusad" },
              { "@type": "City", name: "Umarkhed" },
              { "@type": "City", name: "Darwha" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "71",
            },
          }),
        }}
      />

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataYavatmalDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsYavatmalDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqYavatmal} />
    </>
  );
};

export default page;
