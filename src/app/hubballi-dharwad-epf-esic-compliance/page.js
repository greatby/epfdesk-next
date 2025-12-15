import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataHubballiDharwadDist,
  sectionsHubballiDharwadDist,
  faqHubballiDharwad,
} from "@/utils/data";

export const metadata = {
  title:
    "Hubballi-Dharwad EPF & ESIC Compliance for SME Manufacturing, Textiles & Electronics SEZ | EPFDesk",
  description:
    "EPFDesk provides expert PF & ESIC services for Hubballi-Dharwad’s SME manufacturing, textiles, auto ancillaries and new Electronics SEZ. Specialization in ESIC defence, PF restructuring for SMEs, SEZ statutory setup and KIADB unit compliance.",
  keywords: [
    "Hubballi PF consultant",
    "Dharwad PF consultant",
    "Hubballi ESIC consultant",
    "SME PF ESIC compliance Hubballi",
    "Textile mill ESIC Hubballi",
    "Auto ancillary PF compliance Dharwad",
    "Electronics SEZ PF ESIC registration",
    "KIADB Belur Industrial Area compliance",
    "EPFDesk Hubballi",
  ],
  alternates: {
    canonical: "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Hubballi-Dharwad EPF & ESIC Consultant | SME Manufacturing, Textiles & Electronics SEZ | EPFDesk",
    description:
      "PF & ESIC compliance for Hubballi-Dharwad’s SME factories, textile mills, auto ancillaries and the new Electronics SEZ. ESIC enforcement defence, PF wage restructuring and KIADB industry compliance.",
    url: "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Hubballi-Dharwad PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hubballi-Dharwad EPF & ESIC Compliance | SME Manufacturing, Textiles & Electronics SEZ | EPFDesk",
    description:
      "Compliance experts for Hubballi-Dharwad’s SME sector, textile units and Electronics SEZ — PF audits, ESIC enforcement defence and contractor compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Hubballi-Dharwad EPF & ESIC Compliance for SME Manufacturing,
          Textiles & Electronics SEZ | EPFDesk
        </title>

        <meta
          name="description"
          content="PF & ESIC specialists for Hubballi-Dharwad’s SME manufacturing, textile mills, auto ancillaries and Electronics SEZ. Expertise in ESIC enforcement defence, PF wage structuring, contractor compliance and KIADB statutory management."
        />

        <meta
          name="keywords"
          content="Hubballi PF consultant, Dharwad PF ESIC consultant, textile ESIC Hubballi, auto ancillary PF compliance, SEZ statutory compliance Dharwad, KIADB industrial area ESIC, PF SME Hubballi-Dharwad"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/hubballi-dharwad-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Hubballi-Dharwad EPF & ESIC Consultant | SME Manufacturing, Textiles & Electronics SEZ | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for Hubballi-Dharwad SMEs, textile mills, auto ancillaries and Electronics SEZ — expert PF/ESI defence and factory compliance."
        />
        <meta property="og:image" content="https://epfdesk.com/images/logo.jpg" />
        <meta
          property="og:url"
          content="https://epfdesk.com/hubballi-dharwad-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hubballi-Dharwad EPF & ESIC Compliance | SME Manufacturing, Textiles & Electronics SEZ | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="Expert PF & ESIC solutions for Hubballi-Dharwad’s SME manufacturing sector, textile units and new ESDM/Electronics SEZ."
        />
        <meta name="twitter:image" content="https://epfdesk.com/images/logo.jpg" />
      </Head>

      <Script
        id="schema-hubballi-dharwad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Hubballi-Dharwad EPF & ESIC Compliance for SME Manufacturing, Textiles & Electronics SEZ | EPFDesk",
            alternateName:
              "EPFDesk – Hubballi-Dharwad PF ESIC Consultants for SME, Textiles & ESDM SEZ",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance",
            telephone: "+91-9945933333",

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
              latitude: 15.3647,
              longitude: 75.1239,
            },

            description:
              "Hubballi-Dharwad is an SME manufacturing, textile and electronics hub. EPFDesk provides EPF/ESIC compliance for KIADB units, textile mills, auto ancillaries and the Electronics SEZ, including PF wage audits, ESIC enforcement defence and statutory setup.",
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
              { "@type": "City", name: "Hubballi" },
              { "@type": "City", name: "Dharwad" },
              { "@type": "Place", name: "KIADB Belur Industrial Area" },
              { "@type": "Place", name: "Electronics SEZ Dharwad" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "44",
            },
          }),
        }}
      />

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHubballiDharwadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHubballiDharwadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqHubballiDharwad} />
    </>
  );
};

export default page;
