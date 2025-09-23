"use client";

import React from "react";

const data = [
  {
    threshold: "10+ employees",
    law: "POSH Act, 2013",
    meaning:
      "You must constitute an Internal Committee (IC) to address sexual harassment complaints.",
  },
  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning:
      "You must register your institution and contribute for all eligible staff.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning:
      "You must register your institution and contribute for all eligible staff, including teachers.",
  },
  {
    threshold: "1+ employees",
    law: "Payment of Wages Act",
    meaning:
      "You must ensure timely and full payment of wages to all employees.",
  },
  {
    threshold: "10+ employees",
    law: "Payment of Gratuity Act, 1972",
    meaning:
      "You must pay gratuity to employees with 5+ years of continuous service.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "You must get a Principal Employer certificate and ensure your contractor has a labor license.",
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
