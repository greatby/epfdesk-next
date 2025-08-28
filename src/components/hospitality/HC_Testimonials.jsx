"use client";
import React from "react";

const testimonials = [
  {
    quote:
      "EPFDesk transformed our compliance from a nightmare to a seamless operation.",
    name: "Neeta",
    role: "HR Head, Regional Hotel Chain",
  },
  {
    quote:
      "As a single-outlet owner, a fine would have been devastating. EPFDesk took away the fear so I can focus on guests.",
    name: "Rajesh",
    role: "Owner, Boutique Restaurant, Goa",
  },
  {
    quote:
      "Knowing our POSH compliance is handled with 100% accuracy and timeliness is invaluable.",
    name: "Vikram Kumar",
    role: "Commercial Director, 5-Star Hotel Group",
  },
];

export default function HC_Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Trusted by Hospitality Leaders
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
            >
              <p className="text-gray-700 italic flex-grow">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
