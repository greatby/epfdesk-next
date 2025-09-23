"use client";

import React from "react";

const data = [
  {
    threshold: "1+ employees",
    law: "GST Act, 2017 (Turnover-based)",
    meaning: "You must register and file GST returns, regardless of employee count.",
  },
  {
    threshold: "1+ employees",
    law: "Shop & Establishment Act",
    meaning: "You must register your premises and comply with rules on working hours and leave.",
  },
  {
    threshold: "10+ employees",
    law: "POSH Act, 2013",
    meaning: "You must constitute an Internal Committee and provide regular employee training.",
  },
  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "You must register your business and contribute for employees with a monthly wage up to ₹21,000.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning: "You must register your business and contribute for all eligible employees.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning: "You must get a Principal Employer certificate and ensure your contractor has a labor license.",
  },
];

export default function ComplianceTable() {
  return (
    <div className="w-full overflow-x-auto max-w-6xl mx-auto">
        <h1 className="text-center mb-8 text-5xl font-extrabold">Compliance Check: At What Employee Count Do You Fall Under Which Law?</h1>
      <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border border-gray-200 px-4 py-3 text-left">
              Employee Threshold
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left">
              Mandatory Law That Kicks In
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left">
              What It Means For You
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-[#ffbaba] even:bg-gray-50 transition-colors"
            >
              <td className="border border-gray-200 px-4 py-3 font-medium">
                {row.threshold}
              </td>
              <td className="border border-gray-200 px-4 py-3">
                {row.law}
              </td>
              <td className="border border-gray-200 px-4 py-3">
                {row.meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
