"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "We have 200+ employees across 5 cities. Too complex?",
    answer:
      "Our biggest client has 2,000 employees across 15 cities, including 5-star chains. You're simple.",
  },
  {
    question: "We get raided tomorrow?",
    answer:
      "We'll be there in 2 hours with all documents. Our emergency response has saved 47 hospitality businesses from closure.",
  },
  {
    question: "What about my odd Goa or Kerala state rules?",
    answer:
      " We operate in all 29 states. Kerala's Shops Act? We wrote the compliance guide.",
  },
  {
    question: "How fast can you start?",
    answer: " 48 hours to full compliance. We've done it 500+ times",
  },
  {
    question: "Our biggest pain is high staff attrition. How do you help?",
    answer:
      " We directly solve this. Our systems automate the creation, linking, and management of EPF and ESIC records for every joiner and exit, turning your biggest administrative burden into a seamless background task. This ensures perfect compliance, even with a high-turnover workforce.",
  },
    {
    question: "Can you handle our GST reconciliation and filings too?",
    answer:
      ` Yes, our specialized GST team acts as the "operator for your GST machine." We handle meticulous data reconciliation, return filing, and audit defense, ensuring you maximize your Input Tax Credit and are protected from penalties and audits.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-3 mb-8">
      <h1 className="text-center mb-8 font-extrabold text-5xl">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-xl bg-[#fbf6ef] p-4 transition-all">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left cursor-pointer"
          >
            <span className="font-semibold text-lg text-gray-800">
              {faq.question}
            </span>
            {openIndex === index ? (
              <FiMinus className="text-teal-500 w-5 h-5" />
            ) : (
              <FiPlus className="text-teal-500 w-5 h-5" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
