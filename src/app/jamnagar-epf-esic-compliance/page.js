import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import { heroDataJamnagarDist, sectionsJamnagarDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jamnagar EPF & ESIC Compliance: Brass Industry, GIDC Units & Refinery Contractor Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Jamnagar brass manufacturers, GIDC industrial units and refinery-linked contractors. Coverage includes NWC 2025 payroll restructuring, EPF Exempted Trust oversight, contractor audits and Oil & Gas statutory compliance.",

  keywords: [
    "Jamnagar PF consultant",
    "Jamnagar ESIC compliance",
    "Brass industry PF ESIC Jamnagar",
    "GIDC Jamnagar labour compliance",
    "Reliance refinery contractor PF ESIC",
    "Oil and gas contractor compliance",
    "EPF Exempted Trust Jamnagar",
    "NWC 2025 payroll Jamnagar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jamnagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Jamnagar EPF & ESIC Compliance | Brass Industry, GIDC & Refinery Contractors",
    description:
      "PF & ESIC specialists for Jamnagar brass industry, GIDC manufacturing units and refinery contractor ecosystem.",
    url: "https://epfdesk.com/jamnagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jamnagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
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
      <Script id="jamnagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Jamnagar, Gujarat">
            <meta name="geo.position" content="22.4707;70.0577">
            <meta name="ICBM" content="22.4707, 70.0577">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jamnagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jamnagar-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Compliance Specialists for Jamnagar Industries",

          alternateName:
            "Jamnagar EPF & ESIC Compliance for Brass Industry, GIDC Units & Refinery Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jamnagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jamnagar",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.4707,
            longitude: 70.0577,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jamnagar District" },
            { "@type": "Place", name: "Brass Industry Cluster" },
            { "@type": "Place", name: "GIDC Jamnagar" },
            { "@type": "Place", name: "Reliance Refinery Zone" },
            { "@type": "Place", name: "Oil & Gas Contractor Ecosystem" },
          ],

          description:
            "EPF & ESIC compliance services for Jamnagar brass manufacturers, engineering units, GIDC factories and refinery-linked contractors. Expertise includes NWC 2025 wage restructuring, EPF Exempted Trust compliance, contractor PF audits and Oil & Gas statutory risk mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJamnagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJamnagarDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jamnagar" strategy="afterInteractive">
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

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
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
