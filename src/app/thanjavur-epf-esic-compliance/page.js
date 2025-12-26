import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataTanjavurDist,
  sectionsThanjavurDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Thanjavur EPF & ESIC Consultant | Rice Mills, Agro-Processing & Seasonal Labour | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services in Thanjavur for rice mills, agro-processing units, and seasonal labour clusters. Specialists in NWC 2025 payroll alignment, UAN/KYC onboarding for migrant workers and statutory compliance.",

  alternates: {
    canonical: "https://epfdesk.com/thanjavur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Thanjavur EPF & ESIC Compliance | Rice Mills & Agro-Processing",
    description:
      "PF & ESIC compliance for Thanjavur rice mills, agro-processing units and seasonal labour workforce.",
    url: "https://epfdesk.com/thanjavur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thanjavur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thanjavur EPF & ESIC Consultant | Rice Mills & Agro-Processing",
    description:
      "NWC 2025-ready PF & ESIC compliance for Thanjavur rice mills, agro units and seasonal labour.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="thanjavur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Thanjavur">
            <meta name="geo.position" content="10.7867;79.1378">
            <meta name="ICBM" content="10.7867, 79.1378">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/thanjavur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/thanjavur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-thanjavur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/thanjavur-epf-esic-compliance#organization",

          name:
            "Thanjavur EPF & ESIC Compliance – Rice Mills, Agro Processing & Seasonal Labour | EPFDesk",

          alternateName:
            "EPFDesk – Thanjavur Rice Mill & Agro-Processing Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/thanjavur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Medical College Road",
            addressLocality: "Thanjavur",
            addressRegion: "Tamil Nadu",
            postalCode: "613004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 10.7867,
            longitude: 79.1378,
          },

          areaServed: [
            { "@type": "City", name: "Thanjavur" },
            { "@type": "AdministrativeArea", name: "Thanjavur District" },
            { "@type": "Place", name: "Cauvery Delta Agro Belt" },
            { "@type": "Place", name: "Rice Mill Clusters" },
            { "@type": "Place", name: "Seasonal Labour Zones" },
          ],

          description:
            "EPF & ESIC compliance services for Thanjavur rice mills and agro-processing units. Expertise includes seasonal labour UAN/KYC onboarding, migrant workforce compliance, statutory contribution accuracy and NWC 2025 wage restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTanjavurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThanjavurDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-thanjavur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'thanjavur',
                  value: 5
                });
              }
            });
          });

          document
            .querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]')
            .forEach(el => {
              el.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                  gtag('event', 'whatsapp_click', {
                    event_category: 'conversion',
                    event_label: 'thanjavur',
                    value: 5
                  });
                }
              });
            });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'form_submission', {
                  event_category: 'lead',
                  event_label: 'thanjavur',
                  value: 10
                });
              }
            });
          });
        `}
      </Script>
    </>
  );
}
