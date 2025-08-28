"use client";
import React from "react";
import {
  HiBolt,
  HiClock,
  HiGlobeAlt,
  HiCheckBadge,
  HiShieldExclamation,
} from "react-icons/hi2";

const kpis = [
  {
    value: "2 hrs",
    label: "Emergency Response",
    icon: HiBolt,
    color: "bg-red-100 text-red-600",
  },
  {
    value: "48 hrs",
    label: "Full Compliance Go-Live",
    icon: HiClock,
    color: "bg-blue-100 text-blue-600",
  },
  {
    value: "29",
    label: "States Covered",
    icon: HiGlobeAlt,
    color: "bg-green-100 text-green-600",
  },
  {
    value: "500+",
    label: "Rollouts Delivered",
    icon: HiCheckBadge,
    color: "bg-purple-100 text-purple-600",
  },
  {
    value: "47",
    label: "Businesses Saved",
    icon: HiShieldExclamation,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function HC_KPIBar() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Compliance That Scales With You
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
          {kpis.map((k, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${k.color}`}
              >
                <k.icon className="text-2xl" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-green-600">
                {k.value}
              </div>
              <div className="mt-2 text-gray-600 font-medium">{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
