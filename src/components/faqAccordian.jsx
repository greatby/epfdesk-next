// "use client";
// import React, { useState } from "react";
// import Script from "next/script";

// const FaqAccordion = ({ faqs, title = "Frequently Asked Questions" }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: faq.answer,
//       },
//     })),
//   };

//   return (
//     <section className="w-full max-w-4xl mx-auto px-4 py-12">
//       <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
//         {title}
//       </h2>

//       <div className="grid grid-cols-1 gap-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 rounded-md transition-all duration-300 bg-white"
//           >
//             <button
//               onClick={() => toggle(index)}
//               className={`w-full flex justify-between items-center text-left px-4 py-3 font-medium transition-colors duration-300 focus:outline-none ${
//                 openIndex === index ? "text-indigo-600" : "text-gray-900"
//               }`}
//               aria-expanded={openIndex === index}
//               aria-controls={`faq-${index}`}
//             >
//               <span className="text-base">{faq.question}</span>
//               <svg
//                 className={`w-5 h-5 transform transition-transform duration-300 ${
//                   openIndex === index
//                     ? "rotate-180 text-indigo-600"
//                     : "text-gray-400"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//             <div
//               id={`faq-${index}`}
//               className={`overflow-hidden transition-all duration-300 ease-in-out px-4 text-gray-700 text-sm ${
//                 openIndex === index ? "max-h-[500px] py-2" : "max-h-0"
//               }`}
//             >
//               {faq.answer}
//             </div>
//           </div>
//         ))}
//       </div>

//       <Script
//         id="faq-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//     </section>
//   );
// };

// export default FaqAccordion;

// "use client";

// import { useState } from "react";
// import Script from "next/script";
// import { FiPlus, FiMinus } from "react-icons/fi";

// export default function FaqAccordion({
//   faqs,
//   title = "Frequently Asked Questions",
// }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (idx) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: faq.answer,
//       },
//     })),
//   };

//   return (
//     <section className="w-full max-w-4xl mx-auto px-4 py-16">
//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#001f1f]">
//         {title}
//       </h2>

//       {/* Accordion items */}
//       <div className="space-y-4">
//         {faqs.map((faq, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div
//               key={index}
//               className={`rounded-xl transition-all duration-300 border ${
//                 isOpen
//                   ? "bg-white shadow-md border-[#e0e0e0]"
//                   : "bg-[#f9fafb] hover:bg-[#f3f4f6] border-transparent"
//               }`}
//             >
//               {/* Button */}
//               <button
//                 onClick={() => toggle(index)}
//                 className={`w-full flex justify-between items-center text-[1rem] font-semibold px-6 py-5 text-left cursor-pointer transition-all duration-300 focus:outline-none ${
//                   isOpen
//                     ? "text-[#008272]"
//                     : "text-[#6a7878] hover:text-[#001f1f]"
//                 }`}
//                 aria-expanded={isOpen}
//                 aria-controls={`faq-${index}`}
//               >
//                 <span className="text-lg">{faq.question}</span>
//                 {isOpen ? (
//                   <FiMinus className="w-5 h-5 text-[#008272]" />
//                 ) : (
//                   <FiPlus className="w-5 h-5 text-[#001f1f99]" />
//                 )}
//               </button>

//               {/* Answer */}
//               <div
//                 id={`faq-${index}`}
//                 className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
//                   isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
//                 }`}
//               >
//                 <p className="text-[#334155] text-base leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Schema for SEO */}
//       <Script
//         id="faq-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Script from "next/script";

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#001f1f]">
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "bg-white shadow-md border-[#e0e0e0]"
                  : "bg-[color-mix(in_srgb,#001f1f_4%,transparent)] hover:bg-[#f3f4f6] border-transparent"
              }`}
            >
              {/* Question button */}
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center px-6 py-5 text-left text-[1rem] font-semibold transition-all duration-300 focus:outline-none ${
                  isOpen ? "text-[#001f1f]" : "text-[#6a7878] hover:text-[#001f1f]"
                }`}
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg">{faq.question}</span>

                {/* ---- Custom Plus-to-Minus Icon (pure CSS) ---- */}
                <span
                  className={`relative w-6 h-6 flex items-center justify-center transform transition-all duration-300 ${
                    isOpen ? "rotate-180 text-[#008272]" : "rotate-0 text-[#001f1f99]"
                  }`}
                >
                  {/* horizontal bar (always visible) */}
                  <span
                    className={`absolute block w-4 h-[2px] bg-current transition-colors duration-300`}
                    aria-hidden="true"
                  />
                  {/* vertical bar (scales to 0 when open) */}
                  <span
                    className={`absolute block h-4 w-[2px] bg-current transform transition-transform duration-300 origin-center ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                    aria-hidden="true"
                  />
                </span>
                {/* ---------------------------------------------- */}
              </button>

              {/* Answer */}
              <div
                id={`faq-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] pb-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-[#334155] text-base leading-[1.4]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
