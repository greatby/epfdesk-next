"use client";

import React from "react";
import Link from "next/link";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

import Image from "next/image";
import {
  FiUsers,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
  FiBriefcase,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const footerCities = {
  pfConsultants: [
    { city: "Bangalore", slug: "pf-consultants-in-bangalore" },
    { city: "Mumbai", slug: "pf-consultants-in-mumbai" },
    { city: "Delhi", slug: "pf-consultants-in-delhi" },
    { city: "Chennai", slug: "pf-consultants-in-chennai" },
    { city: "Hyderabad", slug: "pf-consultants-in-hyderabad" },
    { city: "Pune", slug: "pf-consultants-in-pune" },
    { city: "Kolkata", slug: "pf-consultants-in-kolkata" },
    { city: "Ahmedabad", slug: "pf-consultants-in-ahmedabad" },
    { city: "Surat", slug: "pf-consultants-in-surat" },
    { city: "Gurgaon", slug: "pf-consultants-in-gurgaon" },
    { city: "Noida", slug: "pf-consultants-in-noida" },
    { city: "Jaipur", slug: "pf-consultants-in-jaipur" },
    { city: "Lucknow", slug: "pf-consultants-in-lucknow" },
    { city: "Indore", slug: "pf-consultants-in-indore" },
    { city: "Coimbatore", slug: "pf-consultants-in-coimbatore" },
    { city: "Vadodara", slug: "pf-consultants-in-vadodara" },
    { city: "Visakhapatnam", slug: "pf-consultants-in-visakhapatnam" },
    { city: "Nagpur", slug: "pf-consultants-in-nagpur" },
    { city: "Bhopal", slug: "pf-consultants-in-bhopal" },
    { city: "Kanpur", slug: "pf-consultants-in-kanpur" },
  ],

  epfRegistration: [
    { city: "Bangalore", slug: "epf-registration-bangalore" },
    { city: "Mumbai", slug: "epf-registration-mumbai" },
    { city: "Delhi", slug: "epf-registration-delhi" },
    { city: "Chennai", slug: "epf-registration-chennai" },
    { city: "Hyderabad", slug: "epf-registration-hyderabad" },
    { city: "Pune", slug: "epf-registration-pune" },
    { city: "Kolkata", slug: "epf-registration-kolkata" },
    { city: "Ahmedabad", slug: "epf-registration-ahmedabad" },
    { city: "Surat", slug: "epf-registration-surat" },
    { city: "Gurgaon", slug: "epf-registration-gurgaon" },
    { city: "Noida", slug: "epf-registration-noida" },
    { city: "Jaipur", slug: "epf-registration-jaipur" },
    { city: "Lucknow", slug: "epf-registration-lucknow" },
    { city: "Indore", slug: "epf-registration-indore" },
    { city: "Coimbatore", slug: "epf-registration-coimbatore" },
    { city: "Vadodara", slug: "epf-registration-vadodara" },
    { city: "Visakhapatnam", slug: "epf-registration-visakhapatnam" },
    { city: "Nagpur", slug: "epf-registration-nagpur" },
    { city: "Bhopal", slug: "epf-registration-bhopal" },
    { city: "Kanpur", slug: "epf-registration-kanpur" },
  ],

  monthlyFiling: [
    { city: "Bangalore", slug: "pf-monthly-filing-in-bangalore" },
    { city: "Mumbai", slug: "pf-monthly-filing-in-mumbai" },
    { city: "Delhi", slug: "pf-monthly-filing-in-delhi" },
    { city: "Chennai", slug: "pf-monthly-filing-in-chennai" },
    { city: "Hyderabad", slug: "pf-monthly-filing-in-hyderabad" },
    { city: "Pune", slug: "pf-monthly-filing-in-pune" },
    { city: "Kolkata", slug: "pf-monthly-filing-in-kolkata" },
    { city: "Ahmedabad", slug: "pf-monthly-filing-in-ahmedabad" },
    { city: "Surat", slug: "pf-monthly-filing-in-surat" },
    { city: "Gurgaon", slug: "pf-monthly-filing-in-gurgaon" },
    { city: "Noida", slug: "pf-monthly-filing-in-noida" },
    { city: "Jaipur", slug: "pf-monthly-filing-in-jaipur" },
    { city: "Lucknow", slug: "pf-monthly-filing-in-lucknow" },
    { city: "Indore", slug: "pf-monthly-filing-in-indore" },
    { city: "Coimbatore", slug: "pf-monthly-filing-in-coimbatore" },
    { city: "Vadodara", slug: "pf-monthly-filing-in-vadodara" },
    { city: "Visakhapatnam", slug: "pf-monthly-filing-in-visakhapatnam" },
    { city: "Nagpur", slug: "pf-monthly-filing-in-nagpur" },
    { city: "Bhopal", slug: "pf-monthly-filing-in-bhopal" },
    { city: "Kanpur", slug: "pf-monthly-filing-in-kanpur" },
  ],

  pfCompliance: [
    { city: "Bangalore", slug: "pf-compliance-in-bangalore" },
    { city: "Mumbai", slug: "pf-compliance-in-mumbai" },
    { city: "Delhi", slug: "pf-compliance-in-delhi" },
    { city: "Chennai", slug: "pf-compliance-in-chennai" },
    { city: "Hyderabad", slug: "pf-compliance-in-hyderabad" },
    { city: "Pune", slug: "pf-compliance-in-pune" },
    { city: "Kolkata", slug: "pf-compliance-in-kolkata" },
    { city: "Ahmedabad", slug: "pf-compliance-in-ahmedabad" },
    { city: "Surat", slug: "pf-compliance-in-surat" },
    { city: "Gurgaon", slug: "pf-compliance-in-gurgaon" },
    { city: "Noida", slug: "pf-compliance-in-noida" },
    { city: "Jaipur", slug: "pf-compliance-in-jaipur" },
    { city: "Lucknow", slug: "pf-compliance-in-lucknow" },
    { city: "Indore", slug: "pf-compliance-in-indore" },
    { city: "Coimbatore", slug: "pf-compliance-in-coimbatore" },
    { city: "Vadodara", slug: "pf-compliance-in-vadodara" },
    { city: "Visakhapatnam", slug: "pf-compliance-in-visakhapatnam" },
    { city: "Nagpur", slug: "pf-compliance-in-nagpur" },
    { city: "Bhopal", slug: "pf-compliance-in-bhopal" },
    { city: "Kanpur", slug: "pf-compliance-in-kanpur" },
  ],
};
export const esicCities = {
  consultants: [
    { city: "Bangalore", slug: "esic-consultants-bangalore" },
    { city: "Mumbai", slug: "esic-consultants-mumbai" },
    { city: "Delhi", slug: "esic-consultants-delhi" },
    { city: "Chennai", slug: "esic-consultants-chennai" },
    { city: "Hyderabad", slug: "esic-consultants-hyderabad" },
    { city: "Pune", slug: "esic-consultants-pune" },
    { city: "Kolkata", slug: "esic-consultants-kolkata" },
    { city: "Ahmedabad", slug: "esic-consultants-ahmedabad" },
    { city: "Surat", slug: "esic-consultants-surat" },
    { city: "Gurgaon", slug: "esic-consultants-gurgaon" },
    { city: "Noida", slug: "esic-consultants-noida" },
    { city: "Jaipur", slug: "esic-consultants-jaipur" },
    { city: "Lucknow", slug: "esic-consultants-lucknow" },
    { city: "Indore", slug: "esic-consultants-indore" },
    { city: "Coimbatore", slug: "esic-consultants-coimbatore" },
    { city: "Vadodara", slug: "esic-consultants-vadodara" },
    { city: "Visakhapatnam", slug: "esic-consultants-visakhapatnam" },
    { city: "Nagpur", slug: "esic-consultants-nagpur" },
    { city: "Bhopal", slug: "esic-consultants-bhopal" },
    { city: "Kanpur", slug: "esic-consultants-kanpur" },
  ],

  registration: [
    { city: "Bangalore", slug: "esic-registration-bangalore" },
    { city: "Mumbai", slug: "esic-registration-mumbai" },
    { city: "Delhi", slug: "esic-registration-delhi" },
    { city: "Chennai", slug: "esic-registration-chennai" },
    { city: "Hyderabad", slug: "esic-registration-hyderabad" },
    { city: "Pune", slug: "esic-registration-pune" },
    { city: "Kolkata", slug: "esic-registration-kolkata" },
    { city: "Ahmedabad", slug: "esic-registration-ahmedabad" },
    { city: "Surat", slug: "esic-registration-surat" },
    { city: "Gurgaon", slug: "esic-registration-gurgaon" },
    { city: "Noida", slug: "esic-registration-noida" },
    { city: "Jaipur", slug: "esic-registration-jaipur" },
    { city: "Lucknow", slug: "esic-registration-lucknow" },
    { city: "Indore", slug: "esic-registration-indore" },
    { city: "Coimbatore", slug: "esic-registration-coimbatore" },
    { city: "Vadodara", slug: "esic-registration-vadodara" },
    { city: "Visakhapatnam", slug: "esic-registration-visakhapatnam" },
    { city: "Nagpur", slug: "esic-registration-nagpur" },
    { city: "Bhopal", slug: "esic-registration-bhopal" },
    { city: "Kanpur", slug: "esic-registration-kanpur" },
  ],

  monthlyFiling: [
    { city: "Bangalore", slug: "esic-monthly-filing-bangalore" },
    { city: "Mumbai", slug: "esic-monthly-filing-mumbai" },
    { city: "Delhi", slug: "esic-monthly-filing-delhi" },
    { city: "Chennai", slug: "esic-monthly-filing-chennai" },
    { city: "Hyderabad", slug: "esic-monthly-filing-hyderabad" },
    { city: "Pune", slug: "esic-monthly-filing-pune" },
    { city: "Kolkata", slug: "esic-monthly-filing-kolkata" },
    { city: "Ahmedabad", slug: "esic-monthly-filing-ahmedabad" },
    { city: "Surat", slug: "esic-monthly-filing-surat" },
    { city: "Gurgaon", slug: "esic-monthly-filing-gurgaon" },
    { city: "Noida", slug: "esic-monthly-filing-noida" },
    { city: "Jaipur", slug: "esic-monthly-filing-jaipur" },
    { city: "Lucknow", slug: "esic-monthly-filing-lucknow" },
    { city: "Indore", slug: "esic-monthly-filing-indore" },
    { city: "Coimbatore", slug: "esic-monthly-filing-coimbatore" },
    { city: "Vadodara", slug: "esic-monthly-filing-vadodara" },
    { city: "Visakhapatnam", slug: "esic-monthly-filing-visakhapatnam" },
    { city: "Nagpur", slug: "esic-monthly-filing-nagpur" },
    { city: "Bhopal", slug: "esic-monthly-filing-bhopal" },
    { city: "Kanpur", slug: "esic-monthly-filing-kanpur" },
  ],

  compliance: [
    { city: "Bangalore", slug: "esic-compliance-bangalore" },
    { city: "Mumbai", slug: "esic-compliance-mumbai" },
    { city: "Delhi", slug: "esic-compliance-delhi" },
    { city: "Chennai", slug: "esic-compliance-chennai" },
    { city: "Hyderabad", slug: "esic-compliance-hyderabad" },
    { city: "Pune", slug: "esic-compliance-pune" },
    { city: "Kolkata", slug: "esic-compliance-kolkata" },
    { city: "Ahmedabad", slug: "esic-compliance-ahmedabad" },
    { city: "Surat", slug: "esic-compliance-surat" },
    { city: "Gurgaon", slug: "esic-compliance-gurgaon" },
    { city: "Noida", slug: "esic-compliance-noida" },
    { city: "Jaipur", slug: "esic-compliance-jaipur" },
    { city: "Lucknow", slug: "esic-compliance-lucknow" },
    { city: "Indore", slug: "esic-compliance-indore" },
    { city: "Coimbatore", slug: "esic-compliance-coimbatore" },
    { city: "Vadodara", slug: "esic-compliance-vadodara" },
    { city: "Visakhapatnam", slug: "esic-compliance-visakhapatnam" },
    { city: "Nagpur", slug: "esic-compliance-nagpur" },
    { city: "Bhopal", slug: "esic-compliance-bhopal" },
    { city: "Kanpur", slug: "esic-compliance-kanpur" },
  ],
};

const footerLinks = [
  { label: "EPFdesk", url: "/epfdesk" },
  { label: "EPFO", url: "/epfManagement" },
  { label: "ESIC", url: "/esic" },
  { label: "About Us", url: "/aboutUs" },
];

export default function Footer() {
  return (
    <>
      <footer
        className="bg-white text-[#111827] border-t border-gray-200"
        id="footer-section"
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* LEFT SECTION */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3">
              <div className="flex flex-col gap-6">
                <img
                  src="/images/EPFdesk (1).svg"
                  alt="EPFdesk Logo"
                  width={150}
                  height={100}
                />

                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "YOUTUBE",
                      icon: FaYoutube,
                      url: "https://www.youtube.com/@EPFDesk",
                    },
                    {
                      label: "X",
                      icon: FaXTwitter,
                      url: "https://twitter.com/epfdesk",
                    },
                    {
                      label: "LINKEDIN",
                      icon: FaLinkedin,
                      url: "https://linkedin.com/company/epfdesk",
                    },
                    {
                      label: "INSTAGRAM",
                      icon: FaInstagram,
                      url: "https://www.instagram.com/epfdesk/",
                    },
                  ].map(({ label, icon: Icon, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 text-sm justify-center hover:bg-gray-50"
                    >
                      <Icon />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SECTION (5 COLUMNS NOW) */}
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
                {/* 1 — PF Consultants */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    PF Consultants
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.pfConsultants.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2 — EPF Registration */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    EPF Registration
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.epfRegistration.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3 — Monthly Filing */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    Monthly Filing
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.monthlyFiling.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4 — PF Compliance */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    PF Compliance
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.pfCompliance.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5 — Links (RESTORED) */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    Links
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerLinks.map(({ label, url }) => (
                      <li key={url}>
                        <Link
                          href={url}
                          className="hover:underline hover:text-[#066]"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-300 my-6" />
        <div className="flex justify-center items-center">
          <img
            src="/images/EPFdesk (1).svg"
            alt="EPFdesk Logo"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <hr className="text-gray-300 my-6" />

        <div className="">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
            {[
              { title: "PF Consultants", list: footerCities.pfConsultants },
              { title: "EPF Registration", list: footerCities.epfRegistration },
              { title: "PF Monthly Filing", list: footerCities.monthlyFiling },
              { title: "PF Compliance", list: footerCities.pfCompliance },
            ].map(({ title, list }) => (
              <div key={title} className="leading-relaxed">
                {/* Title */}
                <div className="text-sm font-bold text-gray-800 tracking-wide uppercase mb-3">
                  {title}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-1 text-[12px] text-gray-600">
                  {list.map(({ city, slug }, i) => (
                    <span key={slug} className="flex items-center">
                      <Link
                        href={`/epf/${city.toLowerCase()}/${slug}`}
                        className="hover:text-[#066] hover:underline"
                      >
                        {`${title} in ${city}`}
                      </Link>

                      {i !== list.length - 1 && (
                        <span className="px-2 text-gray-400">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* --- ESIC BOOKMYSHOW STYLE LISTS --- */}
        <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">
          {[
            { title: "ESIC Consultants", list: esicCities.consultants },
            { title: "ESIC Registration", list: esicCities.registration },
            { title: "ESIC Monthly Filing", list: esicCities.monthlyFiling },
            { title: "ESIC Compliance", list: esicCities.compliance },
          ].map(({ title, list }) => (
            <div key={title}>
              <div className="text-sm font-semibold text-gray-900 uppercase mb-2">
                {title}
              </div>

              <div className="flex flex-wrap gap-2 text-[12px] text-gray-700">
                {list.map(({ city, slug }, i) => (
                  <span key={slug} className="flex items-center">
                    {/* ✔ CORRECT ROUTE FOR ESIC */}
                    <a
                      href={`https://epfdesk.com/esicCompliance/${city.toLowerCase()}/${slug}`}
                      className="hover:text-[#066] hover:underline"
                    >
                      {`${title} in ${city}`}
                    </a>

                    {i !== list.length - 1 && (
                      <span className="px-2 text-gray-400">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200" />
        <div className="text-sm my-5 text-center text-[#6b7280]">
          © 2025 EPFdesk.com | All rights reserved.
        </div>
      </footer>
    </>
  );
}
