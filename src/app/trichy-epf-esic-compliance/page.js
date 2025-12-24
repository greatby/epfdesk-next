import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataTrichyDist,
  sectionsTrichyDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Trichy EPF & ESIC Compliance | BHEL Contract Labour, Fabrication & Gem Industry | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Trichy covering BHEL contract labour, fabrication & welding ancillaries, and gem/ornament manufacturing units. NWC 2025 payroll restructuring, contractor audits, PF/ESI compliance and Principal Employer liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/trichy-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Trichy EPF & ESIC Compliance | BHEL Contract Labour & Heavy Engineering",
    description:
      "PF & ESIC specialists for Trichy BHEL contractors, fabrication units and gem manufacturing clusters.",
    url: "https://epfdesk.com/trichy-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Trichy EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Trichy EPF & ESIC Compliance | BHEL Contract Labour & Fabrication",
    description:
      "Expert PF & ESIC compliance for Trichy heavy engineering, fabrication and contract labour ecosystems.",
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
      <Script id="trichy-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Tiruchirappalli">
            <meta name="geo.position" content="10.7905;78.7047">
            <meta name="ICBM" content="10.7905, 78.7047">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-trichy"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/trichy-epf-esic-compliance#organization",

          name:
            "Trichy EPF & ESIC Compliance – BHEL Contract Labour & Heavy Engineering | EPFDesk",

          alternateName:
            "EPFDesk – Trichy BHEL Contractor, Fabrication & Labour Compliance Consultants",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/trichy-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Williams Road",
            addressLocality: "Tiruchirappalli",
            addressRegion: "Tamil Nadu",
            postalCode: "620001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 10.7905,
            longitude: 78.7047,
          },

          areaServed: [
            { "@type": "City", name: "Tiruchirappalli" },
            { "@type": "Place", name: "BHEL Trichy Complex" },
            { "@type": "Place", name: "Fabrication & Welding Units" },
            { "@type": "Place", name: "Heavy Engineering Ancillaries" },
            { "@type": "Place", name: "Gems & Ornaments Manufacturing Cluster" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Trichy’s heavy engineering ecosystem including BHEL contract labour, fabrication and welding ancillaries, and gem manufacturing units. Services include New Wage Code 2025 payroll restructuring, contractor PF audits, CLRA compliance and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "51",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTrichyDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTrichyDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-trichy" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'trichy',
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
                    event_label: 'trichy',
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
                  event_label: 'trichy',
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
