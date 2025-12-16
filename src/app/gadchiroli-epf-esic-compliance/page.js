import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGadchiroliDistrict,
  sectionsGadchiroliDistrict,
  faqGadchiroliDistrict,
} from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Gadchiroli EPF & ESIC Compliance for Forest Contractors & LWE Projects | EPFDesk",
  description:
    "Specialized EPF & ESIC defence for Gadchiroli forest, mining and infrastructure contractors. PE liability, CLRA compliance and BOCW cess support under RO Nagpur jurisdiction.",
  keywords: [
    "Gadchiroli EPF consultant",
    "Forest contractor PF compliance",
    "CLRA PE liability Gadchiroli",
    "BOCW cess NH projects",
    "Tendu leaf PF compliance",
    "LWE area labour compliance",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/gadchiroli-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Gadchiroli EPF & ESIC Compliance | Forest & LWE Contractors",
    description:
      "EPF & ESIC compliance for Gadchiroli forest contractors, mining projects and LWE infrastructure works.",
    url: "https://epfdesk.com/gadchiroli-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gadchiroli EPF ESIC Compliance",
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
          Gadchiroli EPF & ESIC Compliance for Forest & LWE Projects | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC defence for Gadchiroli forest contractors, Tendu leaf processing units, mining and LWE infrastructure projects."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/gadchiroli-epf-esic-compliance"
        />
      </Head>

      {/* ============================
          SCHEMA
      ============================ */}
      <Script
        id="schema-gadchiroli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Gadchiroli EPF & ESIC Compliance Service | EPFDesk",
            alternateName:
              "EPFDesk – Forest & Infrastructure Labour Law Consultants Gadchiroli",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/gadchiroli-epf-esic-compliance",
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
              "EPF, ESIC, CLRA and BOCW compliance services for Gadchiroli forest contractors, mining projects and LWE infrastructure works.",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Gadchiroli District",
              },
              { "@type": "Place", name: "Allapalli" },
              { "@type": "Place", name: "Aheri" },
              { "@type": "Place", name: "Armori" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "41",
            },
          }),
        }}
      />

      {/* ============================
          CONTENT
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry
          data={heroDataGadchiroliDistrict}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct
          sections={sectionsGadchiroliDistrict}
        />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGadchiroliDistrict} />
    </>
  );
};

export default page;
