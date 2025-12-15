import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataEcommerce, sectionsEcommerce } from "@/utils/data";

export const metadata = {
  title:
    "E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | NWC 2025 Ready | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance for e-commerce companies, gig economy platforms, and cloud kitchens in India. Expertise in NWC 2025 wage structuring, delivery partner ESIC coverage, contractor audits, PF/ESI registration, and monthly ECR filings.",

  keywords: [
    "EPF consultant",
    "ESIC consultant",
    "ecommerce PF ESIC compliance",
    "gig economy EPF ESIC",
    "cloud kitchen PF ESIC",
    "delivery partner ESIC compliance",
    "platform worker PF compliance",
    "NWC 2025 payroll structuring",
    "contractor compliance",
    "EPFDesk",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/eCommerce-gigEconomy-cloudKitchens-compliance",
  },

  openGraph: {
    title:
      "E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | Bangalore | EPFDesk",

    description:
      "PF & ESIC compliance for Bangalore-based e-commerce platforms, gig economy employers, and cloud kitchens. NWC 2025 payroll restructuring, delivery workforce audits, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/eCommerce-gigEconomy-cloudKitchens-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk E-Commerce Gig Economy Cloud Kitchen EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "E-Commerce & Gig Economy EPF ESIC Compliance | EPFDesk",

    description:
      "EPF & ESIC compliance for e-commerce companies, gig platforms, and cloud kitchens in India. NWC 2025 payroll audits, delivery partner compliance, and monthly PF/ESI operations.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC
          Compliance | NWC 2025 Ready | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance for e-commerce companies, gig economy platforms, and cloud kitchens in Bangalore. NWC 2025 wage structuring, delivery partner ESIC coverage, contractor audits, PF/ESI registration, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="EPF consultant, ESIC consultant, ecommerce PF ESIC compliance, gig economy EPF ESIC, cloud kitchen PF ESIC, delivery partner ESIC compliance, platform worker PF compliance, NWC 2025 payroll, EPFDesk"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/eCommerce-gigEconomy-cloudKitchens-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for e-commerce platforms, gig economy employers, and cloud kitchens in India. NWC 2025 payroll restructuring and contractor compliance experts."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/eCommerce-gigEconomy-cloudKitchens-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Commerce & Gig Economy EPF ESIC Compliance | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for e-commerce firms, gig platforms, and cloud kitchens in India. NWC 2025 payroll structuring and PF/ESI statutory support."
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
            name: "EPFdesk - E-Commerce,Gig Economy and Cloud Kitchens Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/eCommerce-gigEconomy-cloudKitchens-compliance",
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
        <PerformanceSectionIndustry data={heroDataEcommerce} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsEcommerce} />
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
