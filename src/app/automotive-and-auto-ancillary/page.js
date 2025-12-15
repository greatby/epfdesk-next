import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataAutomotive,
  pastelCardsAutomotive,
  sectionsAutomotive,
} from "@/utils/data";
export const metadata = {
  title:
    "Bangalore E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | NWC 2025 Ready | EPFDesk",

  description:
    "EPFDesk delivers specialized EPF & ESIC compliance for e-commerce companies, gig economy employers, and cloud kitchens in Bangalore. Expertise in NWC 2025 wage structuring, delivery partner compliance, contractor audits, PF/ESI registration, and monthly ECR filings.",

  keywords: [
    "Bangalore EPF consultant",
    "Bangalore ESIC consultant",
    "e commerce PF ESIC compliance",
    "gig economy EPF ESIC India",
    "cloud kitchen PF ESIC",
    "delivery partner ESIC compliance",
    "platform worker PF compliance",
    "NWC 2025 payroll structuring",
    "contractor compliance Bangalore",
    "EPFDesk Bangalore",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance",
  },

  openGraph: {
    title:
      "E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | Bangalore | EPFDesk",

    description:
      "PF & ESIC compliance for Bangalore-based e-commerce platforms, gig economy operators, and cloud kitchens. NWC 2025 payroll restructuring, delivery workforce audits, contractor verification, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk E-Commerce Gig Economy Cloud Kitchen EPF ESIC Compliance",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Gig Economy & Cloud Kitchen EPF ESIC Compliance | Bangalore | EPFDesk",

    description:
      "EPF & ESIC compliance for e-commerce firms, gig platforms, and cloud kitchens in Bangalore. NWC 2025 payroll audits, delivery partner compliance, and monthly PF/ESI operations handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bangalore E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC
          Compliance | NWC 2025 Ready | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance for e-commerce platforms, gig economy employers, and cloud kitchens in Bangalore. Expertise in NWC 2025 wage structuring, delivery partner compliance, contractor audits, PF & ESI registration, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="Bangalore EPF consultant, Bangalore ESIC consultant, e-commerce EPF compliance, gig economy ESIC compliance, cloud kitchen PF ESIC, delivery partner ESIC, NWC 2025 payroll compliance, platform worker compliance India, contractor audit EPF, EPFDesk Bangalore"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | Bangalore | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for e-commerce companies, gig platforms, and cloud kitchens in Bangalore. NWC 2025 wage restructuring, delivery workforce audits, and statutory compliance handled end-to-end."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gig Economy & Cloud Kitchen EPF ESIC Compliance | Bangalore | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for gig workers, delivery partners, and cloud kitchens in Bangalore. NWC 2025 payroll structuring and PF audit defense experts."
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
            url: "https://epfdesk.com/automotive-and-auto-ancillary",
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
        <PerformanceSectionIndustry data={heroDataAutomotive} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAutomotive} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsAutomotive} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
