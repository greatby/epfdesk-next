import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataSuratDist, sectionsSuratDist } from "@/utils/data";
export const metadata = {
  title:
    "Surat EPF & ESIC Consultant | Sachin GIDC, Hazira Port & Diamond Industry | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services in Surat for Textile/Power Loom units, Diamond Processing hubs, Pandesara, Sachin GIDC, and Hazira Port industries. We specialize in NWC 2025 payroll restructuring, PF/ESI registration, audits, contractor compliance, and workforce formalization for Surat’s labour-intensive sectors.",

  keywords: [
    "Surat EPF Consultant",
    "Surat ESIC Consultant",
    "Sachin GIDC PF Compliance",
    "Hazira Port ESIC",
    "Pandesara Industrial Estate PF",
    "Surat Diamond Industry PF ESIC",
    "Surat Textile PF Consultant",
    "NWC 2025 Surat Payroll",
    "EPFDesk Gujarat Compliance",
  ],

  openGraph: {
    title:
      "Surat EPF & ESIC Consultant | Sachin GIDC, Hazira Port & Diamond Sector | NWC 2025 Ready – EPFDesk",
    description:
      "Specialized EPF & ESIC compliance for Surat’s Textile, Diamond, and Port industries. Expert PF/ESI audits, payroll restructuring, contractor compliance, and statutory support.",
    url: "https://epfdesk.com/surat-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Surat EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Surat EPF & ESIC Consultant | NWC 2025 Textile, Diamond & Port Compliance – EPFDesk",
    description:
      "EPFDesk provides NWC 2025-ready EPF & ESIC solutions for Surat’s Textile/Powerloom, Diamond Processing, Pandesara, Sachin GIDC, and Hazira Port sectors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Surat EPF & ESIC Consultant | Sachin GIDC, Hazira Port & Diamond
          Industry | NWC 2025 Compliance – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services in Surat for Textile/Power Loom units, Diamond Processing hubs, Pandesara, Sachin GIDC, and Hazira Port industries. We specialize in NWC 2025 payroll restructuring, PF/ESI registration, audits, contractor compliance, and workforce formalization for Surat’s labour-intensive sectors."
        />

        <meta
          name="keywords"
          content="Surat EPF Consultant, Surat ESIC Consultant, Sachin GIDC PF Compliance, Hazira Port ESIC, Pandesara Industrial Estate PF, Surat Diamond Industry PF ESIC, Surat Textile PF Consultant, NWC 2025 Surat Payroll, EPFDesk Gujarat Compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Surat EPF & ESIC Consultant | Sachin GIDC, Hazira Port & Diamond Sector | NWC 2025 Ready – EPFDesk"
        />
        <meta
          property="og:description"
          content="Specialized EPF & ESIC compliance for Surat’s Textile, Diamond, and Port industries. Expert PF/ESI audits, payroll restructuring, contractor compliance, and statutory support."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/surat-epf-esic-compliance"
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
          content="Surat EPF & ESIC Consultant | NWC 2025 Textile, Diamond & Port Compliance – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk provides NWC 2025-ready EPF & ESIC solutions for Surat’s Textile/Powerloom, Diamond Processing, Pandesara, Sachin GIDC, and Hazira Port sectors."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/surat-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-surat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Surat's Expert EPF & ESIC Firm: NWC 2025 Ready Compliance for Sachin GIDC, Hazira Port, and the Diamond Sector | EPFDesk",
            alternateName:
              "EPFDesk – Surat Textile, Diamond & Port Compliance Experts",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/surat-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged as per your requirement
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
              "EPFDesk offers EPF and ESIC compliance in Surat, specializing in NWC 2025 payroll frameworks for the Textile/Power Loom, Gems & Jewellery (Diamond Polishing), and Hazira Port sectors. Surat’s labour-intensive and highly mobile workforce presents unique compliance challenges. We ensure 100% statutory adherence for firms in Pandesara, Sachin GIDC, and Hazira, including expert PF & ESI registration, audits, and SPREE 2025 advisory.",

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
              { "@type": "City", name: "Surat" },
              { "@type": "Place", name: "Sachin GIDC" },
              { "@type": "Place", name: "Hazira Port" },
              { "@type": "Place", name: "Pandesara Industrial Estate" },
              { "@type": "Place", name: "Diamond Processing Zone" },
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
        <PerformanceSectionIndustry data={heroDataSuratDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSuratDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
