import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataKanchipuramDist,
  sectionsKanchipuramDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kanchipuram EPF & ESIC Expert: NWC 2025 Payroll for Oragadam Automotive & Sriperumbudur SEZ Manufacturing | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Kanchipuram District — Oragadam automotive OEMs, Sriperumbudur SIPCOT & SEZ electronics manufacturers. Coverage includes NWC 2025 payroll restructuring, contractor labour compliance, PF/ESI filings and OEM-driven statutory audits.",

  keywords: [
    "Kanchipuram PF consultant",
    "Kanchipuram ESIC consultant",
    "Oragadam SIPCOT PF ESIC",
    "Sriperumbudur SIPCOT labour compliance",
    "automotive manufacturing PF ESIC",
    "electronics SEZ PF compliance",
    "NWC 2025 payroll Tamil Nadu",
    "contract labour PF ESIC TN",
    "SEZ statutory compliance Tamil Nadu",
    "EPFDesk Kanchipuram",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kanchipuram-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kanchipuram-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Kanchipuram, Tamil Nadu">
            <meta name="geo.position" content="12.8185;79.6947">
            <meta name="ICBM" content="12.8185, 79.6947">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kanchipuram"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kanchipuram-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Compliance Specialists for Kanchipuram Manufacturing Hubs",

          alternateName:
            "Kanchipuram EPF & ESIC Compliance for Oragadam Automotive & Sriperumbudur SEZ Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kanchipuram-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kanchipuram",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.8185,
            longitude: 79.6947,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kanchipuram District" },
            { "@type": "Place", name: "Oragadam SIPCOT Industrial Park" },
            { "@type": "Place", name: "Sriperumbudur SIPCOT & SEZ" },
            { "@type": "Place", name: "Automotive Manufacturing Corridor" },
            { "@type": "Place", name: "Electronics & EMS SEZ Units" },
          ],

          description:
            "EPF & ESIC compliance services for Kanchipuram automotive OEMs, Tier-1 suppliers, electronics SEZ manufacturers and SIPCOT industrial units. Expertise includes NWC 2025 payroll restructuring, contract labour compliance, PF/ESI filings and OEM-driven statutory audit defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKanchipuramDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKanchipuramDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-kanchipuram"
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
