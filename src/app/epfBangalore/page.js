import Bubbles from "@/components/reusableComponents/Bubbles";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import FAQ from "@/components/reusableComponents/FAQ";
import Footer from "@/components/reusableComponents/Footer";
import Bootcamps from "@/components/reusableComponents/Hero";
import Questioning from "@/components/reusableComponents/Questioning";
import ContentSlider from "@/components/reusableComponents/Slider";
import Upskills from "@/components/reusableComponents/Upskills";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import {
  dataTableConstruction,
  epfManagementFaqBangalore,
  faqsConstruction,
  slidesConstruction,
  slidesEpfBangalore,
  uspDataConstruction,
  uspDataEpfBangalore,
  videoHighlightDataConstruction,
  videoHighlightDataEpfBangalore,
} from "@/utils/data";
import React from "react";

export const metadata = {
  title: `Construction Compliance: Master BOCW, Fuel Project Continuity & Safety`,
  description:
    "Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC.",
  alternates: { canonical: "https://epfdesk.com/construction" },
  openGraph: {
    title: `Construction Compliance: Master BOCW, Fuel Project Continuity & Safety`,
    url: "https://epfdesk.com/construction",
  },
};

function Hero() {
  return (
    <Bootcamps
      title="EPF Compliance"
      description={
        "Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit."
      }
    />
  );
}

const Construction = () => {
  return (
    <>
      <Hero />
      <VideoHighlight data={videoHighlightDataEpfBangalore} />
      {/* <ComplianceTable data={dataTableConstruction} /> */}
      <Questioning uspData={uspDataEpfBangalore} />
      <Bubbles />
      <ContentSlider slides={slidesEpfBangalore} />

      <Upskills
        title="Workforce: End-to-End EPF Management for Modern Businesses"
        paragraphs={[
          "Looking for PF consultants near you?",
          "Workforce operates across Karnataka — Mysore, Hubballi, Mangalore, Belgaum, Davangere, and Tumkur.",
        ]}
      />
      <FAQ faqs={epfManagementFaqBangalore} />
      <Footer />
    </>
  );
};

export default Construction;
