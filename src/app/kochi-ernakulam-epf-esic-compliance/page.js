import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqKochi, heroDataKochi, sectionsKochi } from "@/utils/data";

/* ============================
   METADATA
============================ */
export const metadata = {
  title:
    "Kochi EPF & ESIC Consultants: IT, Maritime & Industrial Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Kochi InfoPark, SmartCity, KINFRA units, and Cochin Port contractors. Navigate RO Kochi audits, New Wage Code, and PE liability.",
  alternates: {
    canonical:
      "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kochi EPF & ESIC Compliance | IT, Maritime & Industrial Hub",
    description:
      "Statutory PF & ESIC compliance for Kochi IT parks, KINFRA industries, and Cochin Port vendors.",
    url: "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kochi EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

/* ============================
   PAGE
============================ */
const page = () => {
  return (
    <>
      <Head>
        <title>
          Kochi EPF & ESIC Compliance | IT, Maritime & Industrial Hub
        </title>
        <meta
          name="description"
          content="PF & ESIC compliance consultants for Kochi InfoPark, SmartCity, Cochin Port vendors, and KINFRA industrial units."
        />
        <link
          rel="canonical"
          href="https://epfdesk.com/kochi-ernakulam-epf-esic-compliance"
        />
      </Head>

      {/* SCHEMA */}
      <Script
        id="schema-kochi-epf-esic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              "Kochi EPF & ESIC Compliance Consultants | EPFDesk",
            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
            telephone: "+91-9945933333",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            areaServed: [
              "Ernakulam",
              "Kochi",
              "Kakkanad",
              "Kalamassery",
              "Eloor",
              "Edayar",
              "Willingdon Island",
              "Puthuvypeen",
            ],
            description:
              "EPF & ESIC compliance consultancy for Kochi’s IT parks, maritime contractors, KINFRA units, and SEZ industries under RO Kochi.",
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKochi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKochi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKochi} />
    </>
  );
};

export default page;