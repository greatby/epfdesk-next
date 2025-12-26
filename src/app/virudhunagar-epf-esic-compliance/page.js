import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataVirudhunagarDist,
  sectionsVirudhunagarDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Virudhunagar EPF & ESIC Compliance | Fireworks, Match Industries & PM MITRA Mega Textile Park – EPFDesk",

  description:
    "EPF & ESIC compliance for Virudhunagar’s Fireworks & Match industries and the PM MITRA Mega Textile Park. Expertise in hazardous industry ESIC, contractor compliance, and NWC 2025 wage restructuring.",

  alternates: {
    canonical: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Virudhunagar EPF & ESIC Compliance | Fireworks & Mega Textile Park",
    description:
      "PF & ESIC specialists for Virudhunagar’s fireworks, match factories and PM MITRA Mega Textile Park.",
    url: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Virudhunagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Virudhunagar EPF & ESIC Compliance | Fireworks & Textile Park",
    description:
      "PF/ESIC compliance for fireworks, match industries and PM MITRA Mega Textile Park in Virudhunagar.",
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
      <Script id="virudhunagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Virudhunagar, Tamil Nadu">
            <meta name="geo.position" content="9.5680;77.9624">
            <meta name="ICBM" content="9.5680, 77.9624">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/virudhunagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/virudhunagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-virudhunagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/virudhunagar-epf-esic-compliance#organization",

          name:
            "Virudhunagar EPF & ESIC Compliance for Fireworks, Match Industries & PM MITRA Mega Textile Park | EPFDesk",

          alternateName:
            "EPFDesk – Virudhunagar Fireworks, Match & Mega Textile Park Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Virudhunagar",
            addressRegion: "Tamil Nadu",
            postalCode: "626001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.5680,
            longitude: 77.9624,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Virudhunagar District" },
            { "@type": "Place", name: "Fireworks & Match Industry Cluster" },
            {
              "@type": "Place",
              name: "PM MITRA Mega Textile Park (E. Kumaralingapuram)",
            },
            { "@type": "Place", name: "Emerging Textile & Industrial Units" },
          ],

          description:
            "Virudhunagar is historically known for its Fireworks and Matchbox industries and is emerging as a major textile manufacturing zone through the PM MITRA Mega Textile Park. EPFDesk provides EPF & ESIC compliance for hazardous industries, large-scale textile workforce onboarding, contractor audits, and NWC 2025 wage restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVirudhunagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVirudhunagarDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-virudhunagar"
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
