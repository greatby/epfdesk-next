import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataVirudhunagarDist,
  sectionsVirudhunagarDist,
} from "@/utils/data";
export const metadata = {
  title:
    "Virudhunagar EPF & ESIC Compliance | Fireworks, Match Industries & PM MITRA Mega Textile Park – EPFDesk",
  description:
    "EPFDesk ensures EPF & ESIC compliance for Virudhunagar's high-risk Fireworks & Match industries and the upcoming PM MITRA Mega Textile Park. Expertise includes hazardous industry ESIC classification, contractor compliance, wage restructuring under NWC 2025, and large-scale textile workforce onboarding.",
  keywords: [
    "Virudhunagar EPF Consultant",
    "Virudhunagar ESIC Consultant",
    "Fireworks Industry PF ESIC",
    "Match Factory Compliance Virudhunagar",
    "PM MITRA Mega Textile Park Compliance",
    "Hazardous industry ESIC",
    "NWC 2025 Virudhunagar",
    "EPFDesk Virudhunagar",
  ],
  openGraph: {
    title:
      "Virudhunagar EPF & ESIC Compliance | Fireworks, Match & PM MITRA Textile Park – EPFDesk",
    description:
      "Expert EPF & ESIC compliance services for Virudhunagar’s fireworks & match industries and PM MITRA Mega Textile Park. Hazardous industry compliance, contractor verification, and NWC 2025 wage restructuring.",
    url: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Virudhunagar EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Virudhunagar EPF & ESIC Compliance | Fireworks, Match & Mega Textile Park – EPFDesk",
    description:
      "EPFDesk provides statutory compliance for Virudhunagar’s fireworks, match industries and emerging PM MITRA Mega Textile Park. Includes hazardous zone ESIC alignment, PF audits, contractor compliance & NWC 2025 restructuring.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Virudhunagar EPF & ESIC Compliance | Fireworks, Match & Mega Textile
          Park – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk delivers EPF & ESIC compliance for Virudhunagar’s Fireworks & Match industries and the PM MITRA Mega Textile Park. Specialized in hazardous industry ESIC classification, contractor statutory compliance, NWC 2025 wage restructuring, PF audits & monthly filing."
        />

        <meta
          name="keywords"
          content="Virudhunagar EPF Consultant, Virudhunagar ESIC Consultant, Fireworks Industry PF ESIC, Match Factory Compliance Virudhunagar, PM MITRA Mega Textile Park Compliance, Hazardous industry ESIC, NWC 2025 Virudhunagar, EPFDesk Virudhunagar"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Virudhunagar EPF & ESIC Compliance | Fireworks, Match & Mega Textile Park – EPFDesk"
        />
        <meta
          property="og:description"
          content="Comprehensive EPF & ESIC compliance for Virudhunagar’s Fireworks, Match, and emerging Mega Textile Park. Hazardous occupation ESIC compliance, contractor audits and NWC 2025 statutory alignment."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/virudhunagar-epf-esic-compliance"
        />
        <meta property="og:site_name" content="EPFDesk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Virudhunagar EPF & ESIC Compliance | Fireworks, Match & Textile Park – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk supports EPF/ESIC compliance for Fireworks, Match factories, and PM MITRA Mega Textile Park in Virudhunagar. Includes hazardous zone ESIC guidance & NWC 2025 wage restructuring."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/virudhunagar-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-virudhunagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Virudhunagar EPF & ESIC Compliance: Fireworks, Match Industries & PM MITRA Mega Textile Park | EPFDesk",
            alternateName:
              "EPFDesk – Virudhunagar Fireworks, Matchbox & Mega Textile Park Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard reusable address block
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
              "Virudhunagar is known for its traditional Fireworks and Matchbox industries and is now emerging as a major textile manufacturing zone with the upcoming PM MITRA Mega Textile Park at E. Kumaralingapuram. EPFDesk supports compliance needs across high-risk traditional sectors and future-ready mega-scale textile units, ensuring EPF, ESIC, and NWC 2025 alignment.",

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
              { "@type": "City", name: "Virudhunagar" },
              { "@type": "Place", name: "Fireworks & Match Industry Cluster" },
              {
                "@type": "Place",
                name: "PM MITRA Mega Textile Park (E. Kumaralingapuram)",
              },
              { "@type": "Place", name: "Textile & Emerging Industrial Units" },
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
        <PerformanceSectionIndustry data={heroDataVirudhunagarDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVirudhunagarDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
