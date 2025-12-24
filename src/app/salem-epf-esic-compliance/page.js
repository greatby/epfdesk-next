import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataSalemDist, sectionsSalemDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Salem Labour Law Compliance: Risk Profile for Steel Plants, Powerlooms & Sago Factories | EPFDesk",

  description:
    "EPFDesk delivers labour law risk analysis and compliance frameworks for Salem’s steel plants, powerloom clusters, and sago/tapioca factories. Services include EPF & ESIC applicability reviews, contractor audits, informal workforce formalization and NWC 2025 readiness.",

  alternates: {
    canonical: "https://epfdesk.com/salem-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Salem EPF & ESIC Compliance | Steel Plants, Powerlooms & Sago Factories",
    description:
      "Labour compliance risk analysis for Salem’s steel industry, powerloom sector and sago/tapioca factories. EPF/ESI audits, contractor compliance and NWC 2025 readiness.",
    url: "https://epfdesk.com/salem-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Salem EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salem EPF & ESIC Compliance | Steel, Powerloom & Sago Industry",
    description:
      "Compliance risk profiling for Salem steel plants, powerloom clusters and sago factories. EPF, ESIC and NWC 2025 readiness handled.",
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
      <Script id="salem-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Salem">
            <meta name="geo.position" content="11.6643;78.1460">
            <meta name="ICBM" content="11.6643, 78.1460">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-salem"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/salem-epf-esic-compliance#organization",

          name: "Salem Labour Law Compliance – Steel, Powerloom & Sago Industries | EPFDesk",

          alternateName:
            "EPFDesk – Salem Steel Plant, Powerloom & Sago Factory Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/salem-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* 🔒 ADDRESS — STANDARDIZED */
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
            latitude: 11.6643,
            longitude: 78.146,
          },

          areaServed: [
            { "@type": "City", name: "Salem" },
            { "@type": "AdministrativeArea", name: "Salem District" },
            { "@type": "AdministrativeArea", name: "Western Tamil Nadu" },
          ],

          description:
            "EPF & ESIC compliance and labour law risk analysis for Salem’s steel plants, powerloom clusters and sago/tapioca factories. Services include contractor PF audits, informal workforce formalization, piece-rate wage risk analysis and NWC 2025 readiness strategies.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSalemDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSalemDist} />
      </FadeInWhenVisible>
      <Script id="conversion-salem" strategy="afterInteractive">
        {`
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
      el.addEventListener('click', () => {
        if (typeof gtag === 'function') {
          gtag('event', 'phone_click', {
            event_category: 'conversion',
            event_label: 'salem',
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
              event_label: 'salem',
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
            event_label: 'salem',
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
