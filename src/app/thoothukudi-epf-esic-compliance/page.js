import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataThoothukudiDist,
  sectionsThoothukudiDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Thoothukudi EPF & ESIC Compliance | Port Labour, Chemical Units & Salt Pan Workers | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Thoothukudi Port Trust labour, chemical manufacturing units and salt pan seasonal workers. RO Madurai audits, NWC 2025 payroll restructuring, contractor compliance and Principal Employer liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Thoothukudi EPF & ESIC Compliance | Port, Chemical & Salt Pan Labour",
    description:
      "PF & ESIC specialists for Thoothukudi Port Trust workforce, chemical units and salt pan seasonal labour clusters.",
    url: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thoothukudi EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thoothukudi EPF & ESIC Compliance | Port & Chemical Industries",
    description:
      "Expert PF & ESIC compliance for Thoothukudi Port Trust labour, chemical units and salt pan workers.",
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
      <Script id="thoothukudi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Thoothukudi">
            <meta name="geo.position" content="8.7642;78.1348">
            <meta name="ICBM" content="8.7642, 78.1348">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-thoothukudi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/thoothukudi-epf-esic-compliance#organization",

          name:
            "Thoothukudi EPF & ESIC Compliance – Port, Chemical & Salt Pan Labour | EPFDesk",

          alternateName:
            "EPFDesk – Thoothukudi Port & Industrial Labour Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Harbour Estate Road",
            addressLocality: "Thoothukudi",
            addressRegion: "Tamil Nadu",
            postalCode: "628004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 8.7642,
            longitude: 78.1348,
          },

          areaServed: [
            { "@type": "City", name: "Thoothukudi" },
            { "@type": "Place", name: "Thoothukudi Port Trust" },
            { "@type": "Place", name: "Chemical Manufacturing Belt" },
            { "@type": "Place", name: "Salt Pan Labour Clusters" },
            { "@type": "Place", name: "Industrial & Logistics Zone" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Thoothukudi Port Trust labour, chemical manufacturing units and salt pan seasonal workers. Expertise in RO Madurai audits, NWC 2025 wage restructuring, contractor compliance and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "48",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataThoothukudiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThoothukudiDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-thoothukudi" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'thoothukudi',
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
                    event_label: 'thoothukudi',
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
                  event_label: 'thoothukudi',
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
