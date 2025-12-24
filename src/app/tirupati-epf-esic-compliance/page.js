import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataTirupatiDist,
  sectionsTirupatiDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Tirupati EPF & ESIC Compliance | Hospitality, Education & Sri City Electronics | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Tirupati hospitality establishments, educational institutions and Sri City electronics manufacturers. RO Tirupati audits, NWC 2025 payroll restructuring, contractor compliance and fixed-term employment structuring handled.",

  alternates: {
    canonical: "https://epfdesk.com/tirupati-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Tirupati EPF & ESIC Compliance | Hospitality, Education & Electronics",
    description:
      "PF & ESIC specialists for Tirupati hotels, colleges and Sri City electronics manufacturing units.",
    url: "https://epfdesk.com/tirupati-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tirupati EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tirupati EPF & ESIC Compliance | Hospitality & Sri City Electronics",
    description:
      "Expert PF & ESIC compliance for Tirupati hotels, educational institutions and Sri City electronics manufacturers.",
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
      <Script id="tirupati-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Tirupati">
            <meta name="geo.position" content="13.6288;79.4192">
            <meta name="ICBM" content="13.6288, 79.4192">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-tirupati"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/tirupati-epf-esic-compliance#organization",

          name:
            "Tirupati EPF & ESIC Compliance – Hospitality, Education & Electronics | EPFDesk",

          alternateName:
            "EPFDesk – Tirupati EPF & ESIC Consultants for Hotels, Colleges & Sri City",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/tirupati-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "AIR Bypass Road",
            addressLocality: "Tirupati",
            addressRegion: "Andhra Pradesh",
            postalCode: "517501",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.6288,
            longitude: 79.4192,
          },

          areaServed: [
            { "@type": "City", name: "Tirupati" },
            { "@type": "Place", name: "Tirupati Temple City" },
            { "@type": "Place", name: "Sri City Electronics SEZ" },
            { "@type": "Place", name: "Hospitality & Tourism Zone" },
            { "@type": "Place", name: "Educational Institutions Belt" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Tirupati hotels, educational institutions and Sri City electronics manufacturers. Expertise in RO Tirupati audits, NWC 2025 payroll restructuring, fixed-term employment, contractor compliance and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "49",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTirupatiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTirupatiDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tirupati" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'tirupati',
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
                    event_label: 'tirupati',
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
                  event_label: 'tirupati',
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
