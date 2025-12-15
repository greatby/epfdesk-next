import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataManufacturing, sectionsManufacturing } from "@/utils/data";
export const metadata = {
  title:
    "Manufacturing & Factory EPF & ESIC Compliance India | Factories Act, NWC 2025 | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for manufacturing units and factories across India. Expertise in Factories Act compliance, contract labour management, NWC 2025 wage structuring, PF/ESI registration, statutory audits, and monthly ECR filings.",

  keywords: [
    "manufacturing EPF compliance India",
    "factory PF ESIC compliance",
    "Factories Act labour compliance",
    "contract labour compliance manufacturing",
    "NWC 2025 factory payroll",
    "shop floor worker PF ESIC",
    "industrial unit PF audit",
    "ESIC compliance factory workers",
    "PF ESIC audit manufacturing sector",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/manufacturing-and-factory-compliance",
  },

  openGraph: {
    title:
      "Manufacturing & Factory EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for manufacturing plants and factories across India. Contract labour audits, Factories Act alignment, NWC 2025 payroll restructuring, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/manufacturing-and-factory-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Manufacturing and Factory EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Manufacturing & Factory EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for manufacturing units and factories across India. Factories Act, contract labour compliance, NWC 2025 payroll structuring, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Manufacturing & Factory EPF & ESIC Compliance India | Factories Act &
          NWC 2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for manufacturing units and factories across India. Support includes Factories Act compliance, contract labour management, NWC 2025 wage structuring, PF/ESI registration, audits, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="manufacturing EPF compliance India, factory PF ESIC, Factories Act compliance, contract labour manufacturing, NWC 2025 factory payroll, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/manufacturing-and-factory-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Manufacturing & Factory EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for manufacturing plants and factories across India. Contract labour audits, Factories Act alignment, and end-to-end statutory compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/manufacturing-and-factory-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Manufacturing & Factory EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for manufacturing units and factories across India. Factories Act, contract labour compliance, and statutory advisory handled end-to-end."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-sme-msme"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "EPFdesk - Manufacturing and Factory Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/manufacturing-and-factory-compliance",
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
              latitude: 12.9716,
              longitude: 77.5946,
            },
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
              { "@type": "City", name: "Bangalore" },
              { "@type": "Place", name: "Peenya" },
              { "@type": "Place", name: "Whitefield" },
              { "@type": "Place", name: "Electronic City" },
              { "@type": "Place", name: "Koramangala" },
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
        <PerformanceSectionIndustry data={heroDataManufacturing} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsManufacturing} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsHealthcare} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
