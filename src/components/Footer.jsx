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
    { city: "Hyderabad", slug: "epf-registration-hyderabad" },
    { city: "Goa", slug: "epf-registration-goa" },
    { city: "Mumbai", slug: "epf-registration-mumbai" },
    { city: "Chennai", slug: "epf-registration-chennai" },
    { city: "Visakhapatnam", slug: "epf-registration-visakhapatnam" },
    { city: "Delhi", slug: "epf-registration-delhi" },
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
    { city: "Nagpur", slug: "epf-registration-nagpur" },
    { city: "Bhopal", slug: "epf-registration-bhopal" },
    { city: "Kanpur", slug: "epf-registration-kanpur" },
  ],

  monthlyFiling: [
    { city: "Bangalore", slug: "pf-monthly-filing-in-bangalore" },
    { city: "Hyderabad", slug: "pf-monthly-filing-in-hyderabad" },
    { city: "Mumbai", slug: "pf-monthly-filing-in-mumbai" },
    { city: "Chennai", slug: "pf-monthly-filing-in-chennai" },
    { city: "Visakhapatnam", slug: "pf-monthly-filing-in-visakhapatnam" },
    { city: "Delhi", slug: "pf-monthly-filing-in-delhi" },
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
    { city: "Nagpur", slug: "pf-monthly-filing-in-nagpur" },
    { city: "Bhopal", slug: "pf-monthly-filing-in-bhopal" },
    { city: "Kanpur", slug: "pf-monthly-filing-in-kanpur" },
  ],

  pfCompliance: [
    { city: "Bangalore", slug: "pf-compliance-in-bangalore" },
    { city: "Hyderabad", slug: "pf-compliance-in-hyderabad" },
    { city: "Mumbai", slug: "pf-compliance-in-mumbai" },
    { city: "Chennai", slug: "pf-compliance-in-chennai" },
    { city: "Visakhapatnam", slug: "pf-compliance-in-visakhapatnam" },
    { city: "Delhi", slug: "pf-compliance-in-delhi" },
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
    { city: "Nagpur", slug: "pf-compliance-in-nagpur" },
    { city: "Bhopal", slug: "pf-compliance-in-bhopal" },
    { city: "Kanpur", slug: "pf-compliance-in-kanpur" },
  ],
};

const footerLinks = [
  { label: "EPFdesk", url: "/epfdesk" },
  { label: "EPFO", url: "/epfManagement" },
  { label: "ESIC", url: "/esic" },
  { label: "About Us", url: "/aboutUs" },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (name) => {
    setOpenSection(openSection === name ? null : name);
  };
  const DesktopSection = ({ icon: Icon, title, children }) => (
    <div className="min-w-[150px]">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-gray-700 text-[14px]" />
        <h3 className="text-[11px] font-semibold text-gray-700 uppercase tracking-wide">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );

  // Mobile Accordion
  const MobileAccordion = ({ icon: Icon, title, children }) => (
    <div className="border-b border-gray-200 py-3 md:hidden">
      <button
        onClick={() => toggle(title)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <Icon className="text-gray-700 text-[16px]" />
          <span className="text-[12px] font-semibold uppercase text-gray-700 tracking-wide">
            {title}
          </span>
        </div>

        {openSection === title ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </button>

      {openSection === title && (
        <div className="mt-2 pl-6 pb-2">{children}</div>
      )}
    </div>
  );

  const ListDesktop = ({ items }) => (
    <ul className="space-y-1">
      {items.map(({ city, slug }) => (
        <li key={slug}>
          <Link
            href={`/epf/${city.toLowerCase()}/${slug}`}
            className="text-[11px] text-gray-500 hover:text-[#ec5b6b] transition"
          >
            {city}
          </Link>
        </li>
      ))}
    </ul>
  );

  const ListMobile = ({ items }) => (
    <ul className="space-y-2">
      {items.map(({ city, slug }) => (
        <li key={slug}>
          <Link
            href={`/epf/${city.toLowerCase()}/${slug}`}
            className="text-[11px] text-gray-600 hover:text-[#ec5b6b] transition"
          >
            {city}
          </Link>
        </li>
      ))}
    </ul>
  );
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

                <div className="text-sm text-[#6b7280]">
                  © 2025 EPFdesk.com <br /> All rights reserved.
                </div>

                <hr className="border-t border-gray-200" />

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
      </footer>
      <footer className="bg-white border-t pt-10 pb-8 border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* LOGO (Desktop spacing copied from BMS) */}
          <div className="mb-10 flex items-center">
            <Image
              src="/images/EPFdesk (1).svg"
              width={140}
              height={70}
              alt="EPFdesk Logo"
              className="opacity-90"
            />
          </div>

          {/* ------------------ DESKTOP FOOTER ------------------ */}
          <div
            className="
          hidden md:grid
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-y-10 
          gap-x-8 
          lg:gap-x-14
        "
          >
            <DesktopSection icon={FiUsers} title="PF Consultants">
              <ListDesktop items={footerCities.pfConsultants} />
            </DesktopSection>

            <DesktopSection icon={FiFileText} title="EPF Registration">
              <ListDesktop items={footerCities.epfRegistration} />
            </DesktopSection>

            <DesktopSection icon={FiCalendar} title="Monthly Filing">
              <ListDesktop items={footerCities.monthlyFiling} />
            </DesktopSection>

            <DesktopSection icon={FiCheckCircle} title="PF Compliance">
              <ListDesktop items={footerCities.pfCompliance} />
            </DesktopSection>

            <DesktopSection icon={FiBriefcase} title="Company">
              <ul className="space-y-1">
                {footerLinks.map(({ label, url }) => (
                  <li key={url}>
                    <Link
                      href={url}
                      className="text-[11px] text-gray-500 hover:text-[#ec5b6b] transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </DesktopSection>

            <DesktopSection icon={FiGlobe} title="Social">
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://youtube.com/@EPFDesk"
                    className="text-[11px] text-gray-500 hover:text-[#ec5b6b]"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/epfdesk"
                    className="text-[11px] text-gray-500 hover:text-[#ec5b6b]"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/epfdesk"
                    className="text-[11px] text-gray-500 hover:text-[#ec5b6b]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/epfdesk"
                    className="text-[11px] text-gray-500 hover:text-[#ec5b6b]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </DesktopSection>
          </div>

          {/* ------------------ MOBILE FOOTER ------------------ */}
          <div className="md:hidden">
            <MobileAccordion title="PF Consultants" icon={FiUsers}>
              <ListMobile items={footerCities.pfConsultants} />
            </MobileAccordion>

            <MobileAccordion title="EPF Registration" icon={FiFileText}>
              <ListMobile items={footerCities.epfRegistration} />
            </MobileAccordion>

            <MobileAccordion title="Monthly Filing" icon={FiCalendar}>
              <ListMobile items={footerCities.monthlyFiling} />
            </MobileAccordion>

            <MobileAccordion title="PF Compliance" icon={FiCheckCircle}>
              <ListMobile items={footerCities.pfCompliance} />
            </MobileAccordion>

            <MobileAccordion title="Company" icon={FiBriefcase}>
              <ul className="space-y-2">
                {footerLinks.map(({ label, url }) => (
                  <li key={url}>
                    <Link
                      href={url}
                      className="text-[11px] text-gray-600 hover:text-[#ec5b6b]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileAccordion>

            <MobileAccordion title="Social" icon={FiGlobe}>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://youtube.com/@EPFDesk"
                    className="text-[11px] text-gray-600 hover:text-[#ec5b6b]"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/epfdesk"
                    className="text-[11px] text-gray-600 hover:text-[#ec5b6b]"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/epfdesk"
                    className="text-[11px] text-gray-600 hover:text-[#ec5b6b]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/epfdesk"
                    className="text-[11px] text-gray-600 hover:text-[#ec5b6b]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </MobileAccordion>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 border-t border-gray-300 pt-4">
            <p className="text-center text-[11px] text-gray-500">
              © 2025 EPFdesk.com — All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
