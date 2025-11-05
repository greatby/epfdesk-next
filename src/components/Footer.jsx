// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link"; // Next.js Link
// import { ChevronUpIcon } from "@heroicons/react/24/solid";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaXTwitter,
//   FaYoutube,
// } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";
// import { IoLogoWhatsapp } from "react-icons/io";

// export default function Footer() {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScroll(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to top on page change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <footer
//       className="z-[9999] w-full border-t border-solid border-t-[#11110d1a] bg-[#ffffffa8] backdrop-blur-[3px]"
//       id="footer-section"
//     >
//       <div className="bg-white px-4 py-12 text-sm text-gray-700 sm:px-6 lg:px-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {/* Company Description */}
//           <div>
//             <h4 className="text-2xl flex flex-col font-bold mb-3 text-gray-900">
//               EPFdesk.com
//             </h4>

//             {/* Social Links */}
//             <div className="flex gap-7 mt-4">
//               <div className="flex flex-col gap-5">
//                 <a
//                   href="https://www.instagram.com/epfdesk/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-pink-600 transition"
//                 >
//                   <FaInstagram className="w-6 h-6" />
//                 </a>
//                 <a
//                   href="https://x.com/epfdesk"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-sky-500 transition"
//                 >
//                   <FaXTwitter className="w-6 h-6" />
//                 </a>
//               </div>
//               <div className="flex flex-col gap-5">
//                 <a
//                   href="https://www.linkedin.com/company/108133988/admin/dashboard/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-blue-700 transition"
//                 >
//                   <FaLinkedin className="w-6 h-6" />
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@epfdesk"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-red-700 transition"
//                 >
//                   <FaYoutube className="w-6 h-6" />
//                 </a>
//               </div>
//               <div className="flex flex-col gap-5">
//                 <a
//                   href={`mailto:hello@epfdesk.com?subject=${encodeURIComponent(
//                     "Inquiry about Compliance Services"
//                   )}&body=${encodeURIComponent(
//                     "Hello EPFDesk,\n\n" +
//                       "I’d like to know more about your compliance services.\n\n" +
//                       "Company Name:\n" +
//                       "No. of Employees:\n" +
//                       "My Role:\n" +
//                       "Areas of interest:"
//                   )}`}
//                   className="text-gray-500 hover:text-blue-700 transition"
//                 >
//                   <IoMail className="w-6 h-6" />
//                 </a>
//                 <a
//                   onClick={() => {
//                     const phone = "919945933333";
//                     const text = encodeURIComponent(
//                       "Hello EPFDesk,\n\n" +
//                         "I’d like to know more about your compliance services.\n\n" +
//                         "Company Name:\n" +
//                         "No. of Employees:\n" +
//                         "My Role:\n" +
//                         "Areas of Interest:"
//                     );
//                     window.open(
//                       `https://wa.me/${phone}?text=${text}`,
//                       "_blank"
//                     );
//                   }}
//                   className="text-gray-500 hover:text-green-700 transition cursor-pointer"
//                 >
//                   <IoLogoWhatsapp className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h5 className="text-lg font-semibold text-gray-500 uppercase mb-2">
//               Quick Links
//             </h5>
//             <ul className="space-y-3 text-[1rem] columns-1 md:columns-2">
//               <li>
//                 <Link href="/epfdesk">EPFDesk</Link>
//               </li>
//               <li>
//                 <Link href="/epfManagement">EPFO</Link>
//               </li>
//               <li>
//                 <Link href="/esic">ESIC</Link>
//               </li>
//               <li>
//                 <Link href="/posh">POSH</Link>
//               </li>
//               <li>
//                 <Link href="/lwf">LWF</Link>
//               </li>
//               <li>
//                 <Link href="/pt">PT</Link>
//               </li>
//               <li>
//                 <Link href="/aboutUs">About Us</Link>
//               </li>
//               {/* <li>
//                 <Link href="/hospitality">Hospitality</Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 border-t border-gray-300 pt-6 text-center text-xs text-gray-500 space-y-1">
//           <p>© 2025 EPFdesk.com All rights reserved.</p>
//         </div>

//         {/* Scroll To Top */}
//         {showScroll && (
//           <div className="my-8 flex justify-center">
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-600 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-200"
//             >
//               <ChevronUpIcon className="w-5 h-5" />
//               Back to Top
//             </button>
//           </div>
//         )}
//       </div>
//     </footer>
//   );
// }

// import React from "react";
// import { FaYoutube, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

// const footerData = {
//   offerings: [
//     {
//       label: "Education",
//       url: "https://www.epfdesk.com/pf-esic-consultant-education-sector-bangalore/",
//     },
//     {
//       label: "Hospitality",
//       url: "https://www.epfdesk.com/pf-esic-consultant-hospitality-bangalore/",
//     },
//     {
//       label: "Facility Management",
//       url: "https://www.epfdesk.com/pf-esic-consultant-facility-management-bangalore/",
//     },
//     {
//       label: "Transport Logistics",
//       url: "https://www.epfdesk.com/pf-esic-consultant-transport-logistics-bangalore/",
//     },
//     {
//       label: "Construction",
//       url: "https://www.epfdesk.com/pf-esic-consultant-construction-bangalore/",
//     },
//     {
//       label: "Manufacturing",
//       url: "https://www.epfdesk.com/pf-esic-consultant-manufacturing-bangalore/",
//     },
//     {
//       label: "PF Consultants Bangalore",
//       url: "https://www.epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
//     },
//     {
//       label: "EPF Registration Bangalore",
//       url: "https://www.epfdesk.com/epf/bangalore/epf-registration-bangalore",
//     },
//     {
//       label: "ESIC Consultants Bangalore",
//       url: "https://www.epfdesk.com/esicCompliance/bangalore/esic-consultants-bangalore",
//     },
//     {
//       label: "ESIC Registration Bangalore",
//       url: "https://www.epfdesk.com/esicCompliance/bangalore/esic-registration-bangalore",
//     },
//     {
//       label: "PF-ESIC Consultant Bangalore",
//       url: "https://www.epfdesk.com/pf-esic-consultant-bangalore",
//     },
//     {
//       label: "PF-ESIC Registration Bangalore",
//       url: "https://www.epfdesk.com/pf-esic-registration-bangalore",
//     },
//   ],
//   links: [
//     { label: "EPFdesk", url: "/epfdesk" },
//     { label: "EPFO", url: "/epfManagement" },
//     { label: "ESIC", url: "/esic" },
//     { label: "posh", url: "/posh" },
//     { label: "LWF", url: "/lwf" },
//     { label: "PT", url: "/pt" },
//     { label: "About Us", url: "/aboutUs" },
//   ],
//   // capabilities: [
//   //   { label: "AI + ML", url: "#" },
//   //   { label: "AIP for Developers", url: "#" },
//   //   { label: "Data Integration", url: "#" },
//   //   { label: "Digital Twin", url: "#" },
//   //   { label: "Dynamic Scheduling", url: "#" },
//   //   { label: "Edge AI", url: "#" },
//   //   { label: "Marketplace", url: "#" },
//   //   { label: "MetaConstellation", url: "#" },
//   //   { label: "Pipeline Builder", url: "#" },
//   //   { label: "Process Mining", url: "#" },
//   //   { label: "Real-Time Alerting", url: "#" },
//   //   { label: "Streaming", url: "#" },
//   //   { label: "Titanium", url: "#" },
//   //   { label: "Warp Speed", url: "#" },
//   // ],
//   // documents: [
//   //   { label: "Developer Community", url: "#" },
//   //   { label: "Platform Documentation", url: "#" },
//   //   { label: "Palantir Developers", url: "#" },
//   //   { label: "Trust Center", url: "#" },
//   //   { label: "Modern Slavery Statement", url: "#" },
//   //   { label: "Cookies", url: "#" },
//   //   { label: "Privacy and Civil Liberties", url: "#" },
//   //   { label: "Palantir Explained", url: "#" },
//   //   { label: "Sustainability", url: "#" },
//   //   { label: "Human Rights Policy", url: "#" },
//   //   { label: "Privacy Statement", url: "#" },
//   //   { label: "Terms of Use", url: "#" },
//   // ],
//   socials: [
//     {
//       label: "YOUTUBE",
//       icon: FaYoutube,
//       url: "https://www.youtube.com/@PalantirTech",
//     },
//     { label: "X", icon: FaTwitter, url: "https://twitter.com/palantirtech" },
//     {
//       label: "LINKEDIN",
//       icon: FaLinkedin,
//       url: "https://www.linkedin.com/company/palantirtechnologies/",
//     },
//     { label: "GITHUB", icon: FaGithub, url: "https://github.com/palantir" },
//   ],
// };

// export default function PalantirFooter() {
//   return (
//     <footer
//       className="bg-white text-[#111827] border-t border-gray-200"
//       id="footer-section"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-12 gap-8">
//           {/* Left column */}
//           <div className="col-span-12 md:col-span-3 lg:col-span-2">
//             <div className="flex flex-col gap-6">
//               <div className="flex items-center gap-3">
//                 <div className="">
//                   <img
//                     src="/images/EPFdesk (1).svg"
//                     alt="Logo"
//                     width={150}
//                     height={100}
//                     className="cursor-pointer"
//                   />
//                 </div>
//               </div>

//               <div className="text-sm text-[#6b7280]">
//                 © 2025 EPFdesk.com
//                 <br />
//                 All rights reserved.
//               </div>

//               <hr className="border-t border-gray-200" />

//               {/* <button className="text-sm text-gray-600 text-left">
//                 Cookies Settings
//               </button> */}

//               {/* <div className="flex gap-3 text-sm text-gray-600">
//                 <button className="px-1">US</button>
//                 <button className="px-1">UK</button>
//                 <button className="px-1">JP</button>
//                 <button className="px-1">KR</button>
//               </div> */}

//               <div className="flex flex-col gap-3 mt-2">
//                 {footerData.socials.map(({ label, icon: Icon, url }) => (
//                   <a
//                     key={label}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 text-sm font-medium w-full justify-center hover:bg-gray-50 transition"
//                   >
//                     <Icon />
//                     <span>{label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right columns */}
//           <div className="col-span-12 md:col-span-9 lg:col-span-10">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//               {["offerings", "links"].map(
//                 (section) => (
//                   <div key={section}>
//                     <h4 className="text-sm font-semibold mb-4 uppercase">
//                       {section.replace(/_/g, " ")}
//                     </h4>
//                     <ul className="space-y-2 text-sm text-[#374151]">
//                       {footerData[section].map(({ label, url }) => (
//                         <li key={label} className="leading-6">
//                           <a
//                             href={url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:underline"
//                           >
//                             {label}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
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
    { label: "Bengaluru", url: "/test" },
    { label: "Mumbai", url: "/test" },
    { label: "Delhi (NCR)", url: "/test" },
    { label: "Chennai", url: "/test" },
    { label: "Hyderabad", url: "/test" },
    { label: "Pune", url: "/test" },
    { label: "Kolkata", url: "/test" },
    { label: "Ahmedabad", url: "/test" },
    { label: "Surat", url: "/test" },
    { label: "Gurgaon (Gurugram)", url: "/test" },
    { label: "Noida", url: "/test" },
    { label: "Jaipur", url: "/test" },
    { label: "Lucknow", url: "/test" },
    { label: "Indore", url: "/test" },
    { label: "Coimbatore", url: "/test" },
    { label: "Vadodara", url: "/test" },
    { label: "Visakhapatnam", url: "/test" },
    { label: "Nagpur", url: "/test" },
    { label: "Bhopal", url: "/test" },
    { label: "Kanpur", url: "/test" },
  ],
  offerings: [
    {
      label: "Education",
      url: "https://www.epfdesk.com/pf-esic-consultant-education-sector-bangalore/",
    },
    {
      label: "Hospitality",
      url: "https://www.epfdesk.com/pf-esic-consultant-hospitality-bangalore/",
    },
    {
      label: "Facility Management",
      url: "https://www.epfdesk.com/pf-esic-consultant-facility-management-bangalore/",
    },
    {
      label: "Transport Logistics",
      url: "https://www.epfdesk.com/pf-esic-consultant-transport-logistics-bangalore/",
    },
    {
      label: "Construction",
      url: "https://www.epfdesk.com/pf-esic-consultant-construction-bangalore/",
    },
    {
      label: "Manufacturing",
      url: "https://www.epfdesk.com/pf-esic-consultant-manufacturing-bangalore/",
    },
    {
      label: "PF Consultant Bangalore",
      url: "https://www.epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
    },
    {
      label: "EPF Registration Bangalore",
      url: "https://www.epfdesk.com/epf/bangalore/epf-registration-bangalore",
    },
    {
      label: "ESIC Consultant Bangalore",
      url: "https://www.epfdesk.com/esicCompliance/bangalore/esic-consultants-bangalore",
    },
    {
      label: "ESIC Registration Bangalore",
      url: "https://www.epfdesk.com/esicCompliance/bangalore/esic-registration-bangalore",
    },
    {
      label: "PF-ESIC Consultant Bangalore",
      url: "https://www.epfdesk.com/pf-esic-consultant-bangalore",
    },
    {
      label: "PF-ESIC Registration Bangalore",
      url: "https://www.epfdesk.com/pf-esic-registration-bangalore",
    },
  ],

  links: [
    { label: "EPFdesk", url: "/epfdesk" },
    { label: "EPFO", url: "/epfManagement" },
    { label: "ESIC", url: "/esic" },
    { label: "POSH", url: "/posh" },
    { label: "LWF", url: "/lwf" },
    { label: "PT", url: "/pt" },
    { label: "About Us", url: "/aboutUs" },
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
                <h4 className="text-sm font-semibold mb-4 uppercase">Locations</h4>
                <ul className="space-y-2 text-sm text-[#374151]">
                  {footerData.cities.map(({ label, url }) => (
                    <li key={label} className="leading-6">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-[#066] transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">Offerings</h4>
                <ul className="space-y-2 text-sm text-[#374151]">
                  {footerData.offerings.map(({ label, url }) => (
                    <li key={label} className="leading-6">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
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
                  {footerData.links.map(({ label, url }) => (
                    <li key={label} className="leading-6">
                      <Link
                        href={url}
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
