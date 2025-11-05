"use client";

import React from "react";

export default function CommunityGuidelines() {
  const sections = [
    {
      title: "What We Actually Do (Not Just Consult)",
      description:
        "We don’t give you a checklist. We log into your EPFO portal and do everything",
      //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
      cards: [
        {
          color: "bg-white border-gray-300",
          title: "Onboarding (Day 1)",
          content:
            "EPF onboarding made effortless — we generate and link UANs, complete all KYC and bank verifications via the UMANG app, and ensure every new employee is EPF-compliant within 24 hours of joining.",
        },
        {
          color: "bg-white border-gray-300",
          title: "Monthly Filing (Before 15th Every Month)",
          content: (
            <>
              <p>
                Timely and accurate monthly EPF filing — we generate precise
                ECRs, verify challans, and complete submissions before the 15th
                each month, ensuring zero penalties and full compliance with
                instant filing confirmations.
              </p>
            </>
          ),
        },
        {
          color: "bg-white border-gray-300",
          title: "Exit Management (Within 48 Hours)",
          content:
            "Swift and compliant exit management — we mark exits within 48 hours, handle PF transfers and withdrawals, and ensure smooth final settlements for a hassle-free employee offboarding experience.",
        },
        {
          color: "bg-white border-gray-300",
          title: "Crisis Response (EPFO Inspections)",
          content: (
            <>
              <p>
                Expert EPFO crisis management — we respond to inspection notices
                within 24 hours, prepare complete audit documentation, represent
                you in hearings, and secure favorable resolutions with zero
                penalties.
              </p>
            </>
          ),
        },
        {
          color: "bg-white border-gray-300",
          title: "Employee Support (Grievance Shield)",
          content: (
            <>
              <p>
                End-to-end employee PF support — we manage all grievances
                through the EPFiGMS portal, resolve account issues and delays,
                and provide direct employee assistance so your HR team stays
                complaint-free.
              </p>
            </>
          ),
        },
        {
          color: "bg-white border-gray-300",
          title: "What This Actually Saves You",
          content: (
            <>
              <p>
                What This Actually Saves You — eliminate 40+ HR hours a month,
                avoid ₹50,000+ in annual penalties, and remove every PF-related
                headache. With EPFdesk, you gain guaranteed compliance, zero
                employee complaints, and complete peace of mind — all at a
                fraction of your current cost.
              </p>
            </>
          ),
        },
      ],
    },

    // ------------------ BEFORE YOU START ------------------
    // {
    //   title: "Before you start",
    //   description:
    //     "Follow these simple steps before you can start engaging with the community, to ensure you start in the right conditions.",
    //   cards: [
    //     {
    //       color: "bg-[#e6f9f8] border-[#9de1db]",
    //       title: "Fill your profile",
    //       content:
    //         "Fill out your Slack profile! Add your company name (e.g. 'Grace (Lattice)') and upload a profile picture.",
    //     },
    //     {
    //       color: "bg-[#e7f0ff] border-[#b7cfff]",
    //       title: "Introduce yourself",
    //       content:
    //         "Introduce yourself in the #introductions channel so the community can say hi 👋.",
    //     },
    //     {
    //       color: "bg-[#f1e6ff] border-[#d5bfff]",
    //       title: "Set notifications",
    //       content:
    //         "Set your Slack notifications however you prefer. You can leave or join any channel you wish!",
    //     },
    //   ],
    // },

    // // ------------------ CHANNELS ------------------
    // {
    //   title: "Channels",
    //   description:
    //     "We have a range of channels that you can join. You’ll be added to some automatically, but you can explore and find the ones that fit your needs.",
    //   cards: [
    //     {
    //       color: "bg-[#ede9fe] border-[#c8b5ff]",
    //       title: "Slack channels",
    //       image:
    //         "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/663256670db639b8ccdc9b74_rfh-slack-community.webp",
    //     },
    //     {
    //       color: "bg-[#ffe6f0] border-[#fcb6d0]",
    //       title: "Regional channels",
    //       content: (
    //         <>
    //           <p>
    //             Connect with HR professionals near you through regional
    //             channels. We’re also planning local RfH meetups — let us know if
    //             you’d like to host one!
    //           </p>
    //           <p className="mt-2 font-semibold">
    //             Pro tip: Great for travel connections, too!
    //           </p>
    //         </>
    //       ),
    //     },
    //   ],
    // },

    // // ------------------ RFH AMBASSADORS ------------------
    // {
    //   title: "RfH Ambassadors",
    //   description:
    //     "Join the RfH experts sharing their HR knowledge, both online and offline!",
    //   link: {
    //     label: "Apply here",
    //     href: "/community/ambassadors",
    //   },
    //   cards: [
    //     {
    //       color: "bg-[#fdeaea] border-[#f3b4b4]",
    //       title: "Who are RfH Ambassadors?",
    //       content: (
    //         <>
    //           <p>
    //             RfH Ambassadors are HR leaders within the Resources for Humans
    //             community recognized for their leadership, knowledge, and
    //             positive, ongoing contributions.
    //           </p>
    //           <a
    //             href="/community/ambassadors"
    //             className="inline-flex items-center gap-2 mt-4 text-[#d52f2f] font-medium group"
    //           >
    //             <span>Meet your ambassadors</span>
    //             <span className="relative inline-block overflow-hidden">
    //               <span className="inline-block group-hover:translate-x-full transition-transform duration-300">
    //                 ⯈
    //               </span>
    //               <span className="absolute left-[-100%] group-hover:left-0 transition-all duration-300">
    //                 ⯈
    //               </span>
    //             </span>
    //           </a>
    //         </>
    //       ),
    //     },
    //   ],
    // },
  ];

  return (
    <div className="bg-white">
      {/* <h1 className="text-center text-[2.6rem] font-semibold tracking-[-.024em] text-[#001f1f]">
        What We Actually Do (Not Just Consult)
      </h1>
      <p className="text-center mt-2.5 text-[17px]">
        We don’t give you a checklist. We log into your EPFO portal and do
        everything
      </p> */}
      {sections.map((section, i) => (
        <section key={i} className="py-20 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 self-start">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f1f]">
                {section.title}
              </h2>
              <p className="text-[#374151] text-base leading-[1.3]">
                {section.description}
              </p>
              {section.note && (
                <p className="text-sm text-[#334155] leading-relaxed border-l-4 border-[#008272] pl-3">
                  {section.note}
                </p>
              )}
              {section.link && (
                <a
                  href={section.link.href}
                  className="text-[#008272] font-semibold hover:underline"
                >
                  {section.link.label}
                </a>
              )}
            </div>

            {/* Right column */}
            <div className="lg:col-span-7 space-y-6">
              {section.cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-6 transition-all duration-300 hover:shadow-md ${card.color}`}
                >
                  <h3 className="text-[1.4em] font-semibold text-[#001f1f] mb-3">
                    {card.title}
                  </h3>
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-lg mb-4"
                    />
                  )}
                  <div className="text-[#001f1f9c] text-base font-normal leading-[1.4]">
                    {card.content || card.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
