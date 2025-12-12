import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import { heroDataSiddipetDist, sectionsSiddipetDist } from "@/utils/data";
import Head from "next/head";
export const metadata = {
  title:
    "Siddipet EPF & ESIC Consultant | Genome Valley, Nangnoor Industrial Park & Gajwel Agri-Units | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides expert EPF & ESIC compliance services in Siddipet for Mulugu Biotech Park, Nangnoor Industrial Park, Gajwel agri-processing units, and MSMEs. We handle NWC 2025 payroll restructuring, contractor compliance, seasonal labour coverage, PF/ESI registration, audits, and statutory workforce management.",

  keywords: [
    "Siddipet EPF Consultant",
    "Siddipet ESIC Consultant",
    "Genome Valley PF Compliance",
    "Mulugu Biotech Park ESIC",
    "Nangnoor Industrial Park PF",
    "Gajwel Agri Processing PF ESIC",
    "NWC 2025 Siddipet Payroll",
    "EPFDesk Telangana Compliance",
  ],

  openGraph: {
    title:
      "Siddipet EPF & ESIC Consultant | Genome Valley, Nangnoor & Gajwel Compliance | NWC 2025 Ready – EPFDesk",
    description:
      "Trusted EPF & ESIC consultant for Siddipet’s Biotech, Agro-Processing, Cotton Ginning & Industrial Parks. Expert PF/ESI audits, contractor compliance & NWC 2025 payroll alignment.",
    url: "https://epfdesk.com/siddipet-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Siddipet EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Siddipet EPF & ESIC Consultant | Genome Valley & Industrial Park Compliance – EPFDesk",
    description:
      "NWC 2025-ready EPF & ESIC services for Siddipet’s Biotech, Agro, Ginning & Manufacturing clusters. Payroll structuring, contractor compliance, PF/ESI audits & more.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Siddipet EPF & ESIC Consultant | Genome Valley, Nangnoor Industrial
          Park & Gajwel Agri-Units | NWC 2025 Compliance – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides expert EPF & ESIC compliance services in Siddipet for Mulugu Biotech Park, Nangnoor Industrial Park, Gajwel agri-processing units, and MSMEs. We handle NWC 2025 payroll restructuring, contractor compliance, seasonal labour coverage, PF/ESI registration, audits, and statutory workforce management."
        />

        <meta
          name="keywords"
          content="Siddipet EPF Consultant, Siddipet ESIC Consultant, Genome Valley PF Compliance, Mulugu Biotech Park ESIC, Nangnoor Industrial Park PF, Gajwel Agri Processing PF ESIC, NWC 2025 Siddipet Payroll, EPFDesk Telangana Compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Siddipet EPF & ESIC Consultant | Genome Valley, Nangnoor & Gajwel Compliance | NWC 2025 Ready – EPFDesk"
        />
        <meta
          property="og:description"
          content="Trusted EPF & ESIC consultant for Siddipet’s Biotech, Agro-Processing, Cotton Ginning & Industrial Parks. Expert PF/ESI audits, contractor compliance & NWC 2025 payroll alignment."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/siddipet-epf-esic-compliance"
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
          content="Siddipet EPF & ESIC Consultant | Genome Valley & Industrial Park Compliance – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="NWC 2025-ready EPF & ESIC services for Siddipet’s Biotech, Agro, Ginning & Manufacturing clusters. Payroll structuring, contractor compliance, PF/ESI audits & more."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/siddipet-epf-esic-compliance"
        />
      </Head>
      <script
        id="schema-siddipet"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Siddipet EPF & ESIC Consultant: NWC 2025 Agro-Industrial Compliance for Biotech Park Mulugu, Nangnoor Industrial Park, and Gajwel Agri-Units | EPFDesk",
            alternateName:
              "EPFDesk – Siddipet EPF & ESIC Compliance for Agro-Processing, Ginning, Biotech, and IT/ITES Units",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/siddipet-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address unchanged as per your template
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
              "EPFDesk ensures EPF and ESIC compliance in Siddipet, focusing on NWC 2025 restructuring for Agro-Processing, Seed and Cotton Ginning, and emerging IT/Biotech sectors such as Mulugu Biotech Park and Nangnoor Industrial Park. We specialize in PF and ESI management for MSMEs and seasonal workforce compliance.",

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
              { "@type": "City", name: "Siddipet" },
              { "@type": "Place", name: "Mulugu Biotech Park" },
              { "@type": "Place", name: "Nangnoor Industrial Park" },
              { "@type": "Place", name: "Gajwel Agri-Processing Units" },
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
        <PerformanceSectionIndustry data={heroDataSiddipetDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSiddipetDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
