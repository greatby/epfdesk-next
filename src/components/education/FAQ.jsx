"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Are teachers and non-teaching staff both covered by your services?",
    answer:
      "Yes, our services are specifically tailored for educational institutions and cover all staff, including full-time faculty, part-time teachers, administrative staff, and contractual support personnel.",
  },
  {
    question: "Is it mandatory to have a POSH policy and an Internal Committee (IC) in a school or college?",
    answer:
      "Yes. If your institution employs 10 or more people (including teaching, non-teaching, and contractual staff), it is mandatory to have a POSH policy and an Internal Committee (IC). This is a critical legal requirement for the industry.",
  },
  {
    question: "How do you help us manage compliance for multiple campuses in different states?",
    answer:
      " Our unique strength lies in our nationwide operational footprint and deep expertise in the nuances of each state's specific labor laws. We provide centralized management for all your registrations and renewals, ensuring seamless compliance across your entire organization.",
  },
  {
    question: "What is the biggest compliance risk for an educational institution?",
    answer: "The biggest risks are non-compliance with the POSH Act (leading to severe reputational damage), non-adherence to the Shops and Establishment Act (leading to fines), and incorrect statutory contributions for a diverse workforce, which can trigger a large-scale audit.",
  },
  {
    question: "How fast can you start?",
    answer:
      " 48 hours to full compliance. We've done it 500+ times.",
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
