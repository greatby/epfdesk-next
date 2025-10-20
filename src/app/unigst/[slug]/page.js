// app/unigst/[slug]/page.js

import ESCIServicesSection from "@/components/esciServicesSection";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import LatticeTabs from "@/components/latticeTabs";
import StickyScrollSections from "@/components/scrollSyncComponent";
import { epfManagementFaq, epfoCards, heroSlides,plans,gstData } from "@/utils/data";

export default async function UniGSTPage({ params }) {
  // ✅ await params as per Next.js App Router rules
  const { slug } = await params;

  // Example: use slug to fetch city or service data
  const data = gstData.find((item) => item.slug === slug);

  if (!data)
    return <div className="p-10 text-red-500">Service not found!</div>;

  return (
    <>
      <FadeInWhenVisible>
        <HeroSection slide={heroSlides[1]} slug={slug} data={data} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div>
          <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
            Complete GST Services We Provide
          </h2>
          <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
            End-to-end GST compliance management, from registration to return filing.
          </p>
          <LatticeTabs cards={epfoCards} />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ESCIServicesSection plans={plans}/>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={epfManagementFaq} />
      </FadeInWhenVisible>
    </>
  );
}
