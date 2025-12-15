import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import {
  chittorDistFAQ,
  heroDataChittoorDist,
  sectionsChittoorDist,
} from "@/utils/data";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";

export const metadata = {
  title:
    "Chittoor EPF & ESIC Consultant: NWC 2025 for Agro-Processing, Dairy & Textile Industries | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance services in Chittoor, specializing in agro-processing, dairy units, textile & weaving clusters. Expert support in minimum wage audits, seasonal workforce compliance, OSH welfare verification, PF inspections, and complete statutory management.",
  keywords: [
    "Chittoor PF consultant",
    "Chittoor ESIC consultant",
    "EPF compliance Chittoor",
    "ESIC compliance Chittoor",
    "Chittoor agro-processing PF",
    "dairy industry ESIC compliance",
    "textile weaving PF ESIC",
    "seasonal labour compliance Chittoor",
    "NWC 2025 compliance Andhra Pradesh",
    "EPFDesk Chittoor",
  ],
  alternates: {
    canonical: "https://epfdesk.com/chittoor-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chittoor EPF & ESIC Consultant | Agro-Processing, Dairy & Textile Compliance | EPFDesk",
    description:
      "Expert PF & ESIC compliance support for Chittoor's agro-processing clusters, dairy units, and textile weaving industries. NWC 2025 audits, seasonal labour compliance, OSH verification, and statutory management.",
    url: "https://epfdesk.com/chittoor-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Chittoor PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chittoor EPF & ESIC Consultant | Agro-Processing, Dairy & Textile Industries | EPFDesk",
    description:
      "PF & ESIC compliance for agro-processing, dairy, and textile units in Chittoor. Seasonal workforce compliance, OSH verification, minimum wage audits, and statutory support.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Chittoor EPF & ESIC Consultant: NWC 2025 for Agro-Processing, Dairy &
          Textile Industries | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance services in Chittoor, focused on agro-processing clusters, dairy units, textile weaving industries, minimum wage audits, seasonal labour compliance, OSH verification, and end-to-end statutory management."
        />

        <meta
          name="keywords"
          content="Chittoor PF consultant, Chittoor ESIC consultant, EPF ESIC Chittoor, agro-processing PF compliance, dairy industry ESIC, textile weaving PF compliance, seasonal workforce compliance AP, OSH welfare verification Chittoor, NWC 2025 Andhra Pradesh, EPFDesk Chittoor"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chittoor-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Chittoor EPF & ESIC Consultant | Agro-Processing, Dairy & Textile Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="Expert PF & ESIC compliance services for agro-processing clusters, dairy units, and textile industries in Chittoor. Specialized in seasonal labour audits, NWC 2025 compliance, and OSH verification."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/chittoor-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chittoor EPF & ESIC Consultant | Agro-Processing, Dairy & Textile | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for agro, textile, and dairy industries in Chittoor with NWC 2025 compliance and seasonal workforce audits."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <script
        id="schema-chittoor"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chittoor EPF & ESIC Consultant: NWC 2025 for Agro-Processing, Dairy & Textile Industries | EPFDesk",
            alternateName:
              "EPFDesk – Chittoor EPF & ESIC Compliance for Agro, Textile and Dairy Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chittoor-epf-esic-compliance",
            telephone: "+91-9945933333",

            // address kept as per template
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
              "EPFDesk manages EPF and ESIC compliance in Chittoor, focusing on agro-processing, dairy units, textile and weaving industries. Expertise includes minimum wage audits, seasonal compliance systems, and OSH welfare facility verification.",

            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },

            priceRange: "₹₹",

            areaServed: [
              { "@type": "City", name: "Chittoor" },
              { "@type": "Place", name: "Agro-Processing Clusters" },
              { "@type": "Place", name: "Textile & Weaving Units" },
              { "@type": "Place", name: "Dairy & Food Processing Units" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "47",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChittoorDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChittoorDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={chittorDistFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
