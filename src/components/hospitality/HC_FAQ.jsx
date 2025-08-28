"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "We have 200+ employees across 5 cities. Too complex?",
    a: "Our biggest client has 2,000 employees across 15 cities, including 5-star chains.",
  },
  {
    q: "We get raided tomorrow?",
    a: "We'll be there in 2 hours with documents. Our emergency response has saved 47 hospitality businesses.",
  },
  {
    q: "What about Goa or Kerala state rules?",
    a: "We operate in all 29 states. Kerala’s Shops Act? We wrote the guide.",
  },
  {
    q: "How fast can you start?",
    a: "48 hours to full compliance. We've done it 500+ times.",
  },
  {
    q: "High staff attrition is our biggest pain.",
    a: "We automate EPF/ESIC creation, linking, and exits so turnover doesn’t break compliance.",
  },
];

export default function HC_FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-xl bg-white">
              <button
                className="w-full text-left px-5 py-4 font-semibold flex items-center justify-between"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <span className="text-2xl leading-none">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-5 pb-5 text-gray-600">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
