import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataMedchalDist,
  sectionsMedchalDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Medchal-Malkajgiri EPF & ESIC Consultant: Genome Valley, Keesara IT Park & IDA Jeedimetla | NWC 2025 Compliance | EPFDesk",

  description:
    "EPFDesk offers PF & ESIC compliance services for Medchal-Malkajgiri’s Life Sciences, Pharma R&D, Biotech, IT Parks and Manufacturing clusters including Genome Valley, Keesara IT Park and IDA Jeedimetla. Expertise includes NWC 2025 payroll restructuring, PF/ESI registration, audit defense, contractor compliance and monthly ECR filing.",

  keywords: [
    "Medchal-Malkajgiri PF consultant",
    "Medchal ESIC consultant",
    "Genome Valley PF ESIC",
    "biotech EPF ESIC Hyderabad",
    "pharma R&D compliance Telangana",
    "IDA Jeedimetla PF ESIC",
    "Keesara IT Park compliance",
    "industrial compliance Medchal",
    "NWC 2025 payroll Hyderabad",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Medchal-Malkajgiri EPF & ESIC Consultant | Genome Valley, Keesara IT Park & Jeedimetla",
    description:
      "PF & ESIC compliance for Pharma R&D, Biotech, IT Park and Manufacturing clusters in Medchal-Malkajgiri. NWC 2025 payroll, statutory filing and contractor audits.",
    url: "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Medchal-Malkajgiri EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Medchal-Malkajgiri EPF & ESIC Compliance | Genome Valley & Industrial Hubs",
    description:
      "PF/ESI audits, contractor compliance and NWC 2025 payroll restructuring for Genome Valley, Keesara IT Park and IDA Jeedimetla.",
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
      <Script id="medchal-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TG">
            <meta name="geo.placename" content="Medchal-Malkajgiri, Telangana, India">
            <meta name="geo.position" content="17.6290;78.4815">
            <meta name="ICBM" content="17.6290, 78.4815">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-medchal"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Compliance Consultants for Medchal-Malkajgiri",

          alternateName:
            "Medchal-Malkajgiri Genome Valley, IT Park & Industrial EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url:
            "https://epfdesk.com/medchal-malkajgiri-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Medchal-Malkajgiri",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.6290,
            longitude: 78.4815,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Medchal-Malkajgiri District" },
            { "@type": "Place", name: "Genome Valley" },
            { "@type": "Place", name: "Keesara IT Park" },
            { "@type": "Place", name: "IDA Jeedimetla" },
            { "@type": "Place", name: "Pharma & Biotech R&D Clusters" },
          ],

          description:
            "EPFDesk provides EPF and ESIC compliance services in Medchal-Malkajgiri, supporting Life Sciences, Pharma R&D, Biotech, IT Parks and manufacturing hubs. Expertise includes NWC 2025 payroll restructuring, PF/ESI registration, audit defense, contractor compliance and ECR filing.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMedchalDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMedchalDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-medchal" strategy="afterInteractive">
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
