import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTiruvallurDist, sectionsTiruvallurDist } from "@/utils/data";
export const metadata = {
  title:
    "Tiruvallur EPF & ESIC Compliance | NWC 2025 for Gummidipoondi SIPCOT, Ennore Port & Heavy Engineering – EPFDesk",

  description:
    "EPFDesk provides end-to-end EPF & ESIC compliance for Tiruvallur district, covering Gummidipoondi SIPCOT, Ennore Port, Kattupalli logistics corridors, and heavy engineering clusters. Expertise in NWC 2025 payroll restructuring, contractor compliance, PF/ESI registration, and audit defense.",

  keywords: [
    "Tiruvallur EPF Consultant",
    "Tiruvallur ESIC Consultant",
    "Gummidipoondi SIPCOT compliance",
    "Ennore Port EPF ESIC",
    "Kattupalli Port Labour Compliance",
    "Heavy Engineering PF ESIC",
    "NWC 2025 Tiruvallur",
    "EPFDesk Tiruvallur",
  ],

  openGraph: {
    title:
      "Tiruvallur EPF & ESIC Compliance | Gummidipoondi, Ennore Port & Engineering – EPFDesk",
    description:
      "EPFDesk delivers EPF & ESIC compliance for Tiruvallur’s industrial ecosystem: Gummidipoondi SIPCOT, Ennore Port, Kattupalli logistics, and heavy engineering units. NWC 2025 payroll restructuring & end-to-end statutory compliance.",
    url: "https://epfdesk.com/tiruvallur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tiruvallur EPF & ESIC Compliance – EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tiruvallur EPF & ESIC Compliance | Gummidipoondi & Ennore Port – EPFDesk",
    description:
      "EPFDesk provides EPF & ESIC compliance in Tiruvallur for SIPCOT industries, ports, logistics, and engineering firms. NWC 2025-ready payroll restructuring and contractor compliance solutions.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      {" "}
      <Head>
        <title>
          Tiruvallur EPF & ESIC Compliance | NWC 2025 for Gummidipoondi SIPCOT,
          Ennore Port & Heavy Engineering – EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides end-to-end EPF & ESIC compliance for Tiruvallur district, covering Gummidipoondi SIPCOT, Ennore Port, Kattupalli logistics corridors, and heavy engineering clusters. Expertise in NWC 2025 payroll restructuring, contractor compliance, PF/ESI registration, and audit defense."
        />

        <meta
          name="keywords"
          content="Tiruvallur EPF Consultant, Tiruvallur ESIC Consultant, Gummidipoondi SIPCOT compliance, Ennore Port EPF ESIC, Kattupalli Port Labour Compliance, Heavy Engineering PF ESIC, NWC 2025 Tiruvallur, EPFDesk Tiruvallur"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tiruvallur EPF & ESIC Compliance | Gummidipoondi, Ennore Port & Engineering – EPFDesk"
        />
        <meta
          property="og:description"
          content="EPFDesk delivers EPF & ESIC compliance for Tiruvallur’s industrial ecosystem: Gummidipoondi SIPCOT, Ennore Port, Kattupalli logistics, and heavy engineering units. NWC 2025 payroll restructuring & end-to-end statutory compliance."
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/tiruvallur-epf-esic-compliance"
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
          content="Tiruvallur EPF & ESIC Compliance | Gummidipoondi & Ennore Port – EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPFDesk provides EPF & ESIC compliance in Tiruvallur for SIPCOT industries, ports, logistics, and engineering firms. NWC 2025-ready payroll restructuring and contractor compliance solutions."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://epfdesk.com/tiruvallur-epf-esic-compliance"
        />
      </Head>
      <Script
        id="schema-tiruvallur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Tiruvallur EPF & ESIC Compliance: NWC 2025 Ready for Gummidipoondi SIPCOT, Ennore Port & Heavy Engineering | EPFDesk",
            alternateName:
              "EPFDesk – Tiruvallur Heavy Industry, Port & Logistics Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/tiruvallur-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Address remains unchanged as required
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
              "EPFDesk provides comprehensive EPF and ESIC compliance solutions in Tiruvallur, covering the Gummidipoondi SIPCOT industrial estate, Ennore and Kattupalli port-linked logistics, and major heavy engineering units. We specialize in NWC 2025 payroll restructuring, contract labour compliance, ESIC applicability for port operations, and full statutory management for high-risk industrial clusters.",

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
              { "@type": "District", name: "Tiruvallur" },
              { "@type": "Place", name: "Gummidipoondi SIPCOT" },
              { "@type": "Place", name: "Ennore Port" },
              { "@type": "Place", name: "Kattupalli Port Logistics Zone" },
              { "@type": "Place", name: "Heavy Engineering Corridor" },
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
        <PerformanceSectionIndustry data={heroDataTiruvallurDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTiruvallurDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
