import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataChennaiDist, sectionsChennaiDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chennai EPF & ESIC Consultant: NWC 2025 Compliance for IT Corridor, Guindy & Ambattur | EPFDesk",

  description:
    "PF & ESIC compliance experts for Chennai IT/ITES, BFSI, corporates and manufacturing hubs. NWC 2025 payroll structuring, EPFO 7A defense, contractor audits and statutory management across OMR, Guindy and Ambattur.",

  keywords: [
    "Chennai PF consultant",
    "Chennai ESIC consultant",
    "NWC 2025 payroll Chennai",
    "OMR IT Corridor PF ESIC",
    "Guindy industrial compliance",
    "Ambattur PF ESIC consultant",
    "EPFO 7A defense Chennai",
    "Corporate compliance Chennai",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chennai-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chennai EPF & ESIC Consultant | IT Corridor, Guindy & Ambattur | EPFDesk",
    description:
      "Specialised PF & ESIC compliance for Chennai’s IT Corridor, corporates and industrial clusters. NWC 2025 payroll structuring and EPFO 7A defense.",
    url: "https://epfdesk.com/chennai-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chennai PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO + EXTRA META ========= */}
      <Script id="chennai-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Chennai">
            <meta name="geo.position" content="13.0827;80.2707">
            <meta name="ICBM" content="13.0827, 80.2707">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chennai-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chennai-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chennai-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chennai-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Chennai IT & Corporate Sector",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chennai-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.0827,
            longitude: 80.2707,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Chennai District",
            containedIn: {
              "@type": "State",
              name: "Tamil Nadu",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT, Corporate & Manufacturing Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "IT & ITES PF ESIC Compliance",
                  description:
                    "NWC 2025 payroll structuring, EPFO 7A defense and high-CTC salary optimization",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corporate HQ & BFSI Compliance",
                  description:
                    "End-to-end PF, ESIC, CLRA and statutory governance for corporate offices",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Manufacturing & Contractor Compliance",
                  description:
                    "Contract labour audits, PE liability handling and ESIC coverage for industrial units",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChennaiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChennaiDist} />
      </FadeInWhenVisible>
       <Script id="conversion-tracking-chennnai" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'phone_click', {
                event_category: 'conversion',
                event_label: el.getAttribute('href'),
                value: 5
              });
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
