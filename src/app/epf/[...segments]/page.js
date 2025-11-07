import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import HeroSection from "@/components/linksHeroSection";
import LatticeTabs from "@/components/latticeTabs";
import EPFServicesSection from "@/components/epfServicesSection";
import FaqAccordion from "@/components/faqAccordian";
import StickyScrollSections from "../../../components/scrollSyncComponent";
import {
  heroSlides,
  epfoCards,
  epfManagementFaq,
  cityData,
  standalonePages,
  epfManagementBangalore,
  epfManagementFaqBangalore,
  largeCardsEpfoBangalore,
  pastelCardsEpfoBangalore,
  epfBangaloreCardData,
  epfBangaloreRegistrationCardData,
  largeCardsEpfoBangaloreRegistration,
  pastelCardsEpfoBangaloreRegistration,
  epfManagementFaqBangaloreRegistration,
  sectionsPFConsultants,
  sectionsPFRegsitration,
  metadataMap,
} from "@/utils/data";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";

import { PerformanceSection } from "@/components/PerformanceSection";
import PerformanceCard from "@/components/PerformanceCard";
import SliderCards from "@/components/SliderCards";
import Script from "next/script";
import ThreeStepSection from "@/components/ThreeStepSection";
import CodeOfConduct from "@/components/CodeOfConduct";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SingleQuote from "@/components/SingleQuote";
import QuoteSwiper from "@/components/TestimonialCarousel";

// export const metadata = {
//   title: `PF Consultant in Bangalore | EPF Registration, Returns & Inspections | Workforce`,
//   description:
//     "Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
//   alternates: {
//     canonical: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
//   },
//   openGraph: {
//     title: `Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
//     url: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
//   },
// };

export async function generateMetadata({ params }) {
  // Get the last segment (e.g., "hyderabad")
  const city = params.segments?.[params.segments.length - 1];

  if (!city) {
    return {
      title: "PF Consultants | Workforce",
      description:
        "Expert PF & ESIC compliance services across India. Get stress-free EPF registration, filing, and inspection support.",
    };
  }

  const cityTitle = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `PF Consultant in ${cityTitle} | EPF Registration, Returns & Inspections | Workforce`,
    description: `Leading PF consultants in ${cityTitle} for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
    alternates: {
      canonical: `https://epfdesk.com/epf/${city}/pf-consultants-in-${city}`,
    },
    openGraph: {
      title: `PF Consultant in ${cityTitle} | EPF Registration, Returns & Inspections | Workforce`,
      url: `https://epfdesk.com/epf/${city}/pf-consultants-in-${city}`,
    },
  };
}

export default async function EPFPage({ params }) {
  const { segments = [] } = await params;

  // CASE 1: /epf
  if (segments.length === 0) {
    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
              Complete EPF Services We Provide
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              Our end-to-end EPF management solution eliminates administrative
              burdens while ensuring 100% regulatory compliance and audit
              readiness.
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <FaqAccordion faqs={epfManagementFaq} />
        </FadeInWhenVisible>
      </>
    );
  }

  // CASE 2: /epf/:slug
  if (segments.length === 1) {
    const [slug] = segments;
    const data = standalonePages[slug];

    if (!data)
      return (
        <div className="p-10 text-center text-red-500">
          No page found for “{slug}”
        </div>
      );

    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} slug={slug} data={data} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
              {data.title}
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              {data.description}
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <FaqAccordion faqs={epfManagementFaq} />
        </FadeInWhenVisible>
      </>
    );
  }

  // CASE 3: /epf/:city/:slug
  if (segments.length === 2) {
    // const [city, slug] = segments;
    // const data = cityData[city]?.pf;
    const [city, slug] = segments;
    const cityPages = cityData[city];
    console.log(cityPages);

    if (!cityPages)
      return (
        <div className="p-10 text-center text-red-500">
          No data found for city “{city}”
        </div>
      );

    const slugMap = {
      // PF Consultants
      "pf-consultants-in-bangalore": "pfBangalore",
      "epf-registration-bangalore": "pfRegistrationBangalore",
      "esic-consultants-bangalore": "esicBangalore",
      "pf-consultants-in-hyderabad": "pfHyderabad",
      "pf-consultants-in-mumbai": "pfMumbai",
      "pf-consultants-in-chennai": "pfChennai",
      "pf-consultants-in-visakhapatnam": "pfVisakhapatnam",
      "pf-consultants-in-delhi": "pfDelhi",
      "pf-consultants-in-pune": "pfPune",
      "pf-consultants-in-kolkata": "pfKolkata",
      "pf-consultants-in-ahmedabad": "pfAhmedabad",
      "pf-consultants-in-surat": "pfSurat",
      "pf-consultants-in-gurgaon": "pfGurgaon",
      "pf-consultants-in-noida": "pfNoida",
      "pf-consultants-in-jaipur": "pfJaipur",
      "pf-consultants-in-lucknow": "pfLucknow",
      "pf-consultants-in-indore": "pfIndore",
      "pf-consultants-in-coimbatore": "pfCoimbatore",
      "pf-consultants-in-vadodara": "pfVadodara",
      "pf-consultants-in-nagpur": "pfNagpur",
      "pf-consultants-in-bhopal": "pfBhopal",
      "pf-consultants-in-kanpur": "pfKanpur",
      // EPF Registration
      "epf-registration-bangalore": "pfRegistrationBangalore",
      "epf-registration-hyderabad": "pfRegistrationHyderabad",
      "epf-registration-goa": "pfRegistrationGoa",
      "epf-registration-mumbai": "pfRegistrationMumbai",
      "epf-registration-chennai": "pfRegistrationChennai",
      "epf-registration-visakhapatnam": "pfRegistrationVisakhapatnam",
      "epf-registration-delhi": "pfRegistrationDelhi",
      "epf-registration-pune": "pfRegistrationPune",
      "epf-registration-kolkata": "pfRegistrationKolkata",
      "epf-registration-ahmedabad": "pfRegistrationAhmedabad",
      "epf-registration-surat": "pfRegistrationSurat",
      "epf-registration-gurgaon": "pfRegistrationGurgaon",
      "epf-registration-noida": "pfRegistrationNoida",
      "epf-registration-jaipur": "pfRegistrationJaipur",
      "epf-registration-lucknow": "pfRegistrationLucknow",
      "epf-registration-indore": "pfRegistrationIndore",
      "epf-registration-coimbatore": "pfRegistrationCoimbatore",
      "epf-registration-vadodara": "pfRegistrationVadodara",
      "epf-registration-nagpur": "pfRegistrationNagpur",
      "epf-registration-bhopal": "pfRegistrationBhopal",
      "epf-registration-kanpur": "pfRegistrationKanpur",
    };

    const key = slugMap[slug];
    const data = key ? cityPages[key] : null;

    if (!data)
      return (
        <div className="p-10 text-center text-red-500">
          No data found for “{slug}” in {city}
        </div>
      );
    if (slug === "pf-consultants-in-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard slug={slug} data={epfBangaloreCardData} /> */}
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>
          {/* <SliderCards /> */}
          {/* <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">{data.title}</h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              {data.description}
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible> */}

          {/* <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible> */}
          <FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            PF Consultants in Bangalore — End-to-End EPF Compliance by Workforce
          </h2> */}

            {/* <FadeInWhenVisible>
              <LargeCardSlider cardsData={largeCardsEpfoBangalore} />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider cardsData={pastelCardsEpfoBangalore} /> */}
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>
          <TestimonialCarousel />
          <SingleQuote />
          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/pf-consultants-in-hyderabad/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/mumbai/pf-consultants-in-mumbai/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/chennai/pf-consultants-in-chennai/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/visakhapatnam/pf-consultants-in-visakhapatnam/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/delhi/pf-consultants-in-delhi/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/pune/pf-consultants-in-pune/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kolkata/pf-consultants-in-kolkata/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/ahmedabad/pf-consultants-in-ahmedabad/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/surat/pf-consultants-in-surat/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/gurgaon/pf-consultants-in-gurgaon/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/noida/pf-consultants-in-noida/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/jaipur/pf-consultants-in-jaipur/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/lucknow/pf-consultants-in-lucknow/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/indore/pf-consultants-in-indore/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/coimbatore/pf-consultants-in-coimbatore/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/vadodara/pf-consultants-in-vadodara/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/nagpur/pf-consultants-in-nagpur/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bhopal/pf-consultants-in-bhopal/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kanpur/pf-consultants-in-kanpur/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/epf-registration-bangalore/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/epf-registration-hyderabad/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/mumbai/epf-registration-mumbai/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/delhi/epf-registration-delhi/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/chennai/epf-registration-chennai/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/pune/epf-registration-pune/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kolkata/epf-registration-kolkata/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/ahmedabad/epf-registration-ahmedabad/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/surat/epf-registration-surat/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/gurgaon/epf-registration-gurgaon/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/noida/epf-registration-noida/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/jaipur/epf-registration-jaipur/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/lucknow/epf-registration-lucknow/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/indore/epf-registration-indore/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/coimbatore/epf-registration-coimbatore/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/vadodara/epf-registration-vadodara/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/visakhapatnam/epf-registration-visakhapatnam/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/nagpur/epf-registration-nagpur/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bhopal/epf-registration-bhopal/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kanpur/epf-registration-kanpur/",
                telephone: "+91-9945933333",
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
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            /> */}
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              /> */}
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    }
  }

  // Invalid path fallback
  return (
    <div className="p-10 text-center text-red-500">
      Invalid route: /epf/{segments.join("/")}
    </div>
  );
}
