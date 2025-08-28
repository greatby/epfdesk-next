"use client";
import React from "react";

export default function HC_PricingComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          The Math Is Simple
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* DIY */}
          <div className="rounded-2xl border bg-white p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Option A: The DIY Headache
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>👤 1 HR person: ₹40,000/month</li>
              <li>⚠️ 1 penalty/year: ₹50,000 avg</li>
              <li>📣 Guest complaint: Immeasurable</li>
              <li>💸 Annual cost: ₹5.3L + brand risk</li>
            </ul>
          </div>

          {/* Workforce */}
          <div className="rounded-2xl border bg-gradient-to-br from-green-50 to-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Option B: Workforce Limited
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✅ All compliance managed: ₹15,000/month</li>
              <li>✅ Penalties: ₹0</li>
              <li>✅ 40 hours saved/month</li>
              <li>✅ Annual cost: ₹1.8L with guarantee</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xl font-bold text-green-600">
          🎉 Save ₹3.5L/year + permanently protect your brand
        </p>
      </div>
    </section>
  );
}
