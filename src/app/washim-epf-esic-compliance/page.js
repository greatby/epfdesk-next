import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataWashimDistrict,
  sectionsWashimDistrict,
  faqWashimDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Washim EPF & ESIC Compliance for Cotton Ginning & Oil Mills | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Washim cotton ginning, oil mills and agro-processing units. Zone-3 minimum wage audits, seasonal PF risk and RO Akola defence.",
  keywords: [
    "Washim EPF consultant",
    "Cotton ginning PF compliance Washim",
    "Zone 3 minimum wages Maharashtra",
    "Oil mill ESIC registration Washim",
    "RO Akola EPFO defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/washim-epf-esic-compliance",
  },
  openGraph: {
    title: "Washim EPF & ESIC Compliance | Cotton & Agro-Processing",
    description:
      "Statutory EPF & ESIC compliance for Washim cotton ginning, oil mills and seasonal agro-labour.",
    url: "https://epfdesk.com/washim-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Washim EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD
      ============================ */}
      <Head>
        <title>
          Washim EPF & ESIC Compliance: Cotton Ginning, Oil Mills & Seasonal
          Labour Audits | EPFDesk
        </title>

        <meta
          name="description"
          content="EPF & ESIC compliance defence for Washim cotton ginning factories, oil mills and agro-processing units. Handling seasonal and piece-rate labour PF liability, ESIC coverage expansion and RO Akola enforcement audits."
        />

        <meta
          name="keywords"
          content="Washim PF consultant, Washim ESIC consultant, cotton ginning PF ESIC Washim, oil mill labour compliance Washim, seasonal labour PF liability Vidarbha, RO Akola EPFO jurisdiction, ESIC notified area Washim, agro-processing PF audits Maharashtra"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/washim-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Washim EPF & ESIC Compliance | Cotton Ginning & Agro-Processing | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Washim cotton ginning units, oil mills and seasonal agro-processing employers."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/washim-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Washim EPF & ESIC Compliance | Cotton Ginning & Agro Units | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for Washim cotton ginning factories, oil mills and seasonal agro-processing units."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-washim"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Washim EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Cotton Ginning & Agro-Processing Compliance Washim",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/washim-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ ADDRESS KEPT SAME AS BANGALORE */
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
              "EPF, ESIC and Minimum Wages Act compliance for Washim cotton ginning, oil mills and agro-processing units under Zone-3 wages.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Washim District",
              },
              { "@type": "Place", name: "Washim City" },
              { "@type": "Place", name: "Mangrulpir" },
              { "@type": "Place", name: "Karanja Lad" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "32",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataWashimDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsWashimDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqWashimDistrict} />
    </>
  );
};

export default page;
