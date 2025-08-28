"use client";
import React from "react";
import { HiUsers, HiBanknotes, HiShieldCheck } from "react-icons/hi2";

const risks = [
  {
    icon: HiUsers,
    color: "bg-green-100 text-green-600",
    title: "High Attrition Nightmare",
    desc: "80% turnover creates endless EPF/ESIC/UAN churn. We automate joins & exits in minutes.",
  },
  {
    icon: HiBanknotes,
    color: "bg-yellow-100 text-yellow-600",
    title: "Overtime & Tips Trap",
    desc: "Errors in variable pay trigger audits. We ensure flawless statutory contributions every time.",
  },
  {
    icon: HiShieldCheck,
    color: "bg-red-100 text-red-600",
    title: "POSH Reputation Bomb",
    desc: "One incident can destroy trust. We provide policy, training & an independent hotline.",
  },
];

export default function HC_RisksGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Why Small Errors Become Systemic Risks
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 ${r.color}`}
              >
                <r.icon className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{r.title}</h3>
              <p className="text-gray-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
