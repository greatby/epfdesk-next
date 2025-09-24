import React from "react";
import VideoHighlight from "@/components/hospitality/VideoHighlight";
import Testimonials from "@/components/hospitality/Testimonial";
import Bubbles from "@/components/hospitality/Bubbles";
import Questioning from "@/components/hospitality/Questioning";
import Slider from "@/components/hospitality/Slider";
import Upskills from "@/components/hospitality/Upskills";
import YoutubeSlider from "@/components/hospitality/YoutubeSlider";
import Footer from "@/components/hospitality/Footer";
import ComplianceTable from "@/components/hospitality/ComplianceTable";
import FAQ from "@/components/hospitality/FAQ";

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
          Hospitality Compliance: GST, EPF & Labour Laws for India&#39;s Hotels
          & Restaurants
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
          Don&#39;t lose ₹10L+ to compliance errors. Get end-to-end GST, EPF,
          ESIC, and POSH compliance for your hotel or restaurant. We ensure zero
          penalties, from a single cafe to a national chain.
        </p>
      </div>
    </section>
  );
}

const Hospitality = () => {
  return (
    <>
      <Hero />
      <VideoHighlight />

      <ComplianceTable />
      <Questioning />
      <Bubbles />
      <Slider />
      <Testimonials />
      <Upskills />
      {/* <YoutubeSlider /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Hospitality;
