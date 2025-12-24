import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataVelloreDist,
  sectionsVelloreDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Vellore EPF & ESIC Compliance | NWC 2025 for Leather, Tanning & Footwear Export Units – EPFDesk",

  description:
    "EPF & ESIC compliance for Vellore’s leather manufacturing ecosystem including Ambur and Ranipet. Experts in piece-rate wage restructuring under NWC 2025, chemical-zone ESIC applicability and contractor audits.",

  alternates: {
    canonical: "https://epfdesk.com/vellore-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Vellore EPF & ESIC Compliance | Leather, Tanning & Footwear Export Units",
    description:
      "PF & ESIC specialists for Ambur and Ranipet leather clusters. Piece-rate wage audits, NWC 2025 payroll restructuring and chemical-zone compliance.",
    url: "https://epfdesk.com/vellore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vellore EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vellore EPF & ESIC Compliance | Leather & Footwear Export Sector",
    description:
      "Expert EPF & ESIC compliance for leather, tanning and footwear export units in Vellore, Ambur and Ranipet.",
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
      <Script id="vellore-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Vellore, Tamil Nadu">
            <meta name="geo.position" content="12.9165;79.1325">
            <meta name="ICBM" content="12.9165, 79.1325">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-vellore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/vellore-epf-esic-compliance#organization",

          name:
            "Vellore EPF & ESIC Compliance for Leather, Tanning & Footwear Export Units | EPFDesk",

          alternateName:
            "EPFDesk – Leather & Footwear Industry PF ESIC Consultants in Vellore",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/vellore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* 🔒 HQ ADDRESS – SAME ACROSS SITE */
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
            latitude: 12.9165,
            longitude: 79.1325,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Vellore District" },
            { "@type": "Place", name: "Ambur Leather Cluster" },
            { "@type": "Place", name: "Ranipet Tanning Belt" },
            { "@type": "Place", name: "Footwear Export Units" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Vellore’s leather manufacturing ecosystem, including Ambur and Ranipet. Specialized in piece-rate wage conversion under NWC 2025, ESIC compliance in chemical processing units, PF audits and contractor statutory control.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVelloreDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVelloreDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-vellore"
        strategy="afterInteractive"
      >
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: el.getAttribute('href'),
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
                    event_label: window.location.pathname,
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
                  event_label: window.location.pathname,
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
