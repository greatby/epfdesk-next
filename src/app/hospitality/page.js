import React from "react";

import {
  heroSlides,
  horizontalCardsHosp,
  hospFaq,
  largeCardsHosp,
  pastelCardsHosp,
  slidesLandingHosp,
  verticalCardsHosp,
} from "../../utils/data";
import HeroSection from "@/components/linksHeroSection";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import VerticalAndHorizontalCards from "@/components/verticalAndHorizontalCards";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";
import CustomerCarousel from "@/components/customerCarousel";
import FaqAccordion from "@/components/faqAccordian";
import LimitedOnboardingCTA from "@/components/LimitedOnboardingCTA";
import CostComparison from "@/components/CostComparison";
import HC_CrisisStory from "@/components/hospitality/HC_CrisisStory";
import HC_RisksGrid from "@/components/hospitality/HC_RisksGrid";
import HC_ServicesGrid from "@/components/hospitality/HC_ServicesGrid";
import HC_KPIBar from "@/components/hospitality/HC_KPIBar";
import HC_Testimonials from "@/components/hospitality/HC_Testimonials";
import HC_PricingComparison from "@/components/hospitality/HC_PricingComparison";
import HC_FAQ from "@/components/hospitality/HC_FAQ";
import HC_FinalCTA from "@/components/hospitality/HC_FinalCTA";
import VideoHighlight from "@/components/hospitality/VideoHighlight";
import Testimonials from "@/components/hospitality/Testimonial";
import Bubbles from "@/components/hospitality/Bubbles";
import Questioning from "@/components/hospitality/Questioning";
import Slider from "@/components/hospitality/Slider";
import Upskills from "@/components/hospitality/Upskills";
import YoutubeSlider from "@/components/hospitality/YoutubeSlider";
import Footer from "@/components/hospitality/Footer"


export const metadata = {
  title: `Hospitality Compliance: The Hidden 
Cost of Guest Experience`,
  description:
    "Workforce Limited offers specialized compliance for restaurants & hotels. Master EPF, ESIC, POSH & labor laws. We protect your brand and manage high attrition, from a single outlet to a national chain.",
  alternates: { canonical: "https://epfdesk.com/hospitality" },
  openGraph: {
    title: `Hospitality Compliance: The Hidden 
Cost of Guest Experience`,
    url: "https://epfdesk.com/hospitality",
  },
};

// function Hero() {
//   return (
//  <div
//   style={{
//     backgroundImage: `url("https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?_gl=1*1r2b55l*_ga*MTQ2OTkzMDg1My4xNzQ5NTY3ODA4*_ga_8JE65Q40S6*czE3NTYyMDYwOTYkbzE2JGcxJHQxNzU2MjA2MTA4JGo0OCRsMCRoMA..")`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "100vh",
//     position: "relative",
//   }}
// >
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/50"></div>

//   {/* Content */}
//   <div className="relative flex items-center justify-center h-screen text-white flex-col max-w-5xl m-auto px-4">
//     <h1 className="text-5xl text-center mb-5">
//       Hospitality Compliance: The Hidden Cost of Guest Experience
//     </h1>
//     <p className="text-center text-2xl">
//       Workforce Limited offers specialized compliance for restaurants & hotels.
//       Master EPF, ESIC, POSH & labor laws. We protect your brand and manage high
//       attrition, from a single outlet to a national chain.
//     </p>
//   </div>
// </div>

//   );
// }

function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
          Hospitality Compliance: The Hidden Cost of Guest Experience
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
          Workforce Limited helps restaurants & hotels master EPF, ESIC, POSH &
          labor laws. Protect your brand, reduce risk, and focus on guests.
        </p>
      </div>
    </section>
  );
}


const Hospitality = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <VideoHighlight />
      <Testimonials />
      <Bubbles />
      <Questioning />
      <Slider />
      <Upskills />
      <YoutubeSlider />
      <Footer/>
      {/* <FadeInWhenVisible>
        <HC_CrisisStory />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_RisksGrid />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_ServicesGrid />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_KPIBar />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_Testimonials />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_PricingComparison />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_FAQ />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <HC_FinalCTA />
      </FadeInWhenVisible> */}
    </>
  );
};

export default Hospitality;


