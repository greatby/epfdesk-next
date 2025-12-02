"use client";

import React from "react";
import Link from "next/link";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const footerData = {
  socials: [
    {
      label: "YOUTUBE",
      icon: FaYoutube,
      url: "https://www.youtube.com/@EPFDesk",
    },
    { label: "X", icon: FaXTwitter, url: "https://twitter.com/epfdesk" },
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
  ],

  cities: [
    {
      label: "Bangalore",
      url: "https://epfdesk-next.vercel.app/epf/bangalore/pf-consultants-in-bangalore",
      seoTitle: "PF Consultants in Bangalore | EPFdesk",
    },
    {
      label: "Mumbai",
      url: "https://epfdesk-next.vercel.app/epf/mumbai/pf-consultants-in-mumbai",
      seoTitle: "PF Consultants in Mumbai | EPFdesk",
    },
    {
      label: "Delhi (NCR)",
      url: "https://epfdesk-next.vercel.app/epf/delhi/pf-consultants-in-delhi",
      seoTitle: "PF Consultants in Delhi NCR | EPFdesk",
    },
    {
      label: "Chennai",
      url: "https://epfdesk-next.vercel.app/epf/chennai/pf-consultants-in-chennai",
      seoTitle: "PF Consultants in Chennai | EPFdesk",
    },
    {
      label: "Hyderabad",
      url: "https://epfdesk-next.vercel.app/epf/hyderabad/pf-consultants-in-hyderabad",
      seoTitle: "PF Consultants in Hyderabad | EPFdesk",
    },
    {
      label: "Pune",
      url: "https://epfdesk-next.vercel.app/epf/pune/pf-consultants-in-pune",
      seoTitle: "PF Consultants in Pune | EPFdesk",
    },
    {
      label: "Kolkata",
      url: "https://epfdesk-next.vercel.app/epf/kolkata/pf-consultants-in-kolkata",
      seoTitle: "PF Consultants in Kolkata | EPFdesk",
    },
    {
      label: "Ahmedabad",
      url: "https://epfdesk-next.vercel.app/epf/ahmedabad/pf-consultants-in-ahmedabad",
      seoTitle: "PF Consultants in Ahmedabad | EPFdesk",
    },
    {
      label: "Surat",
      url: "https://epfdesk-next.vercel.app/epf/surat/pf-consultants-in-surat",
      seoTitle: "PF Consultants in Surat | EPFdesk",
    },
    {
      label: "Gurgaon (Gurugram)",
      url: "https://epfdesk-next.vercel.app/epf/gurgaon/pf-consultants-in-gurgaon",
      seoTitle: "PF Consultants in Gurgaon (Gurugram) | EPFdesk",
    },
    {
      label: "Noida",
      url: "https://epfdesk-next.vercel.app/epf/noida/pf-consultants-in-noida",
      seoTitle: "PF Consultants in Noida | EPFdesk",
    },
    {
      label: "Jaipur",
      url: "https://epfdesk-next.vercel.app/epf/jaipur/pf-consultants-in-jaipur",
      seoTitle: "PF Consultants in Jaipur | EPFdesk",
    },
    {
      label: "Lucknow",
      url: "https://epfdesk-next.vercel.app/epf/lucknow/pf-consultants-in-lucknow",
      seoTitle: "PF Consultants in Lucknow | EPFdesk",
    },
    {
      label: "Indore",
      url: "https://epfdesk-next.vercel.app/epf/indore/pf-consultants-in-indore",
      seoTitle: "PF Consultants in Indore | EPFdesk",
    },
    {
      label: "Coimbatore",
      url: "https://epfdesk-next.vercel.app/epf/coimbatore/pf-consultants-in-coimbatore",
      seoTitle: "PF Consultants in Coimbatore | EPFdesk",
    },
    {
      label: "Vadodara",
      url: "https://epfdesk-next.vercel.app/epf/vadodara/pf-consultants-in-vadodara",
      seoTitle: "PF Consultants in Vadodara | EPFdesk",
    },
    {
      label: "Visakhapatnam",
      url: "https://epfdesk-next.vercel.app/epf/visakhapatnam/pf-consultants-in-visakhapatnam",
      seoTitle: "PF Consultants in Visakhapatnam | EPFdesk",
    },
    {
      label: "Nagpur",
      url: "https://epfdesk-next.vercel.app/epf/nagpur/pf-consultants-in-nagpur",
      seoTitle: "PF Consultants in Nagpur | EPFdesk",
    },
    {
      label: "Bhopal",
      url: "https://epfdesk-next.vercel.app/epf/bhopal/pf-consultants-in-bhopal",
      seoTitle: "PF Consultants in Bhopal | EPFdesk",
    },
    {
      label: "Kanpur",
      url: "https://epfdesk-next.vercel.app/epf/kanpur/pf-consultants-in-kanpur",
      seoTitle: "PF Consultants in Kanpur | EPFdesk",
    },
  ],

  offerings: [
    {
      label: "Education",
      url: "https://www.epfdesk.com/pf-esic-consultant-education-sector-bangalore/",
      seoTitle:
        "PF & ESIC Consultant for Education Sector in Bangalore | EPFdesk",
    },
    {
      label: "Hospitality",
      url: "https://www.epfdesk.com/pf-esic-consultant-hospitality-bangalore/",
      seoTitle:
        "PF & ESIC Consultant for Hospitality Sector in Bangalore | EPFdesk",
    },
    {
      label: "Facility Management",
      url: "https://www.epfdesk.com/pf-esic-consultant-facility-management-bangalore/",
      seoTitle:
        "PF & ESIC Consultant for Facility Management in Bangalore | EPFdesk",
    },
    {
      label: "Transport Logistics",
      url: "https://www.epfdesk.com/pf-esic-consultant-transport-logistics-bangalore/",
      seoTitle:
        "PF & ESIC Consultant for Transport & Logistics in Bangalore | EPFdesk",
    },
    {
      label: "Construction",
      url: "https://www.epfdesk.com/pf-esic-consultant-construction-bangalore/",
      seoTitle:
        "PF & ESIC Consultant for Construction Sector in Bangalore | EPFdesk",
    },
    {
      label: "Manufacturing",
      url: "https://www.epfdesk.com/pf-esic-consultant-manufacturing-bangalore/",
      seoTitle:
        "PF & ESIC Consultant for Manufacturing Sector in Bangalore | EPFdesk",
    },
  ],

  links: [
    {
      label: "EPFdesk",
      url: "/epfdesk",
      seoTitle: "About EPFdesk – PF, ESIC, Compliance Experts",
    },
    {
      label: "EPFO",
      url: "/epfManagement",
      seoTitle: "EPFO Services & PF Compliance Management | EPFdesk",
    },
    {
      label: "ESIC",
      url: "/esic",
      seoTitle: "ESIC Compliance & Registration Services | EPFdesk",
    },
    {
      label: "About Us",
      url: "/aboutUs",
      seoTitle: "About EPFdesk – Company Profile & Compliance Expertise",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-white text-[#111827] border-t border-gray-200"
      id="footer-section"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="/images/EPFdesk (1).svg"
                  alt="EPFdesk Logo"
                  width={150}
                  height={100}
                  className="cursor-pointer"
                />
              </div>

              <div className="text-sm text-[#6b7280]">
                © 2025 EPFdesk.com
                <br />
                All rights reserved.
              </div>

              <hr className="border-t border-gray-200" />

              {/* Social buttons */}
              <div className="flex flex-col gap-3 mt-2">
                {footerData.socials.map(({ label, icon: Icon, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 text-sm font-medium w-full justify-center hover:bg-gray-50 transition"
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          {/* Right columns */}
          <div className="col-span-12 md:col-span-9 lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Offerings (external URLs) */}
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">
                  Locations
                </h4>
                <ul className="space-y-2 text-sm text-[#374151]">
                  {footerData.cities.map(({ label, url, seoTitle }) => (
                    <li key={label} className="leading-6">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={seoTitle}
                        className="hover:underline hover:text-[#066] transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">
                  Industries
                </h4>
                <ul className="space-y-2 text-sm text-[#374151]">
                  {footerData.offerings.map(({ label, url, seoTitle }) => (
                    <li key={label} className="leading-6">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={seoTitle}
                        className="hover:underline hover:text-[#066] transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links (internal routes) */}
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">Links</h4>
                <ul className="space-y-2 text-sm text-[#374151]">
                  {footerData.links.map(({ label, url, seoTitle }) => (
                    <li key={label} className="leading-6">
                      <Link
                        href={url}
                        title={seoTitle}
                        className="hover:underline hover:text-[#066] transition-colors"
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
  );
}
