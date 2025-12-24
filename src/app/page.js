import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Hero from "@/components/hero";
import LargeCardSlider from "@/components/largeCards";
import LimitedCapacitySection from "@/components/limitedCapacitySection";
import MazeEscapeSection from "@/components/mazeEscapeSection";
import StackedCards from "@/components/scrollCards";
import ServiceCards from "@/components/serviceCards";
import CustomerCarousel from "@/components/customerCarousel";
import { largeCardsLanding, slidesLandingPage } from "@/utils/data";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "EPF Desk | Simplifying EPF Compliance for Businesses in India",
  description:
    "EPFDesk.com frees your HR and Finance teams to focus on growth while we manage EPF & ESIC compliance across India.",
  alternates: { canonical: "https://epfdesk.com" },
  openGraph: {
    title: "EPF Desk | Simplifying EPF Compliance for Businesses in India",
    description:
      "India’s trusted EPF & ESIC compliance platform serving 800+ districts.",
    url: "https://epfdesk.com",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk",
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

export default function Home() {
  return (
    <>
      {/* ================== ORGANIZATION SCHEMA ================== */}
      <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EPFDesk",
          alternateName: "EPF Desk India",
          url: "https://epfdesk.com",
          logo: "https://epfdesk.com/images/logo.jpg",
          description:
            "India's leading EPF and ESIC compliance platform serving 800+ districts.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-9945933333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          ],
          sameAs: [
            "https://www.facebook.com/epfdesk",
            "https://www.linkedin.com/company/epfdesk",
            "https://twitter.com/epfdesk",
          ],
        })}
      </Script>

      {/* ================== WEBSITE SCHEMA ================== */}
      <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "EPFDesk",
          url: "https://epfdesk.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://epfdesk.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {/* ================== SERVICE SCHEMA ================== */}
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "EPFDesk - EPF & ESIC Compliance Services",
          url: "https://epfdesk.com",
          description:
            "Comprehensive EPF registration, ESIC compliance, and labor law services across India",
          areaServed: { "@type": "Country", name: "India" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "250",
          },
        })}
      </Script>

      {/* ================== GOOGLE ANALYTICS (FIXED) ================== */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title,
          });
          gtag('event', 'page_view', { page_type: 'homepage' });
        `}
      </Script>

      {/* ================== UI ================== */}
      <Toaster position="top-center" />

      <FadeInWhenVisible><Hero /></FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsLanding} />
      </FadeInWhenVisible>
      <FadeInWhenVisible><ServiceCards /></FadeInWhenVisible>
      <FadeInWhenVisible><StackedCards /></FadeInWhenVisible>
      <FadeInWhenVisible>
        <CustomerCarousel slides={slidesLandingPage} />
      </FadeInWhenVisible>
      <FadeInWhenVisible><LimitedCapacitySection /></FadeInWhenVisible>
      <FadeInWhenVisible><MazeEscapeSection /></FadeInWhenVisible>
    </>
  );
}
