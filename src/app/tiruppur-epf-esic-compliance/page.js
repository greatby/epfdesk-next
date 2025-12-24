import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataTiruppurDist,
  sectionsTiruppurDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Tiruppur EPF & ESIC Compliance | Knitwear, Garment Exports & Piece-Rate Payroll | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Tiruppur knitwear manufacturers, garment exporters, MSMEs and piece-rate workforce. NWC 2025 payroll restructuring, migrant labour documentation, contractor compliance and PF/ESI audits handled.",

  alternates: {
    canonical: "https://epfdesk.com/tiruppur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Tiruppur EPF & ESIC Compliance | Knitwear & Garment Export Hub",
    description:
      "PF & ESIC specialists for Tiruppur knitwear units, garment exporters and piece-rate wage systems.",
    url: "https://epfdesk.com/tiruppur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tiruppur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tiruppur EPF & ESIC Compliance | Knitwear & Garment Export Sector",
    description:
      "Expert PF & ESIC compliance for Tiruppur knitwear, garment exporters and piece-rate labour systems.",
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
      <Script id="tiruppur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Tiruppur">
            <meta name="geo.position" content="11.1085;77.3411">
            <meta name="ICBM" content="11.1085, 77.3411">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-tiruppur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/tiruppur-epf-esic-compliance#organization",

          name:
            "Tiruppur EPF & ESIC Compliance – Knitwear, Garment Exports & Piece-Rate Workforce | EPFDesk",

          alternateName:
            "EPFDesk – Tiruppur Knitwear & Garment Export Compliance Consultants",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/tiruppur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avinashi Road",
            addressLocality: "Tiruppur",
            addressRegion: "Tamil Nadu",
            postalCode: "641602",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.1085,
            longitude: 77.3411,
          },

          areaServed: [
            { "@type": "City", name: "Tiruppur" },
            { "@type": "Place", name: "Knitwear Cluster" },
            { "@type": "Place", name: "Garment Export Units" },
            { "@type": "Place", name: "Dyeing & Processing Units" },
            { "@type": "Place", name: "TEA Member Units" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Tiruppur knitwear manufacturers, garment exporters and MSMEs. Expertise includes piece-rate wage integration, migrant labour documentation, contractor compliance, RO Coimbatore audits and NWC 2025 payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "51",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTiruppurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTiruppurDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tiruppur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'tiruppur',
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
                    event_label: 'tiruppur',
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
                  event_label: 'tiruppur',
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
