import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  MdBarChart,
  MdLoop,
  MdFavorite,
  MdAttachMoney,
  MdNature,
} from "react-icons/md";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export const epfServices = [
  {
    title: "Seamless Employee Lifecycle Management",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Monthly employee additions and deletions with immediate EPFO reflection: We precisely
manage your roster updates, ensuring compliance from day one for new hires and seamless
processing for exits. This addresses common employer queries about "How to add new
employee in EPF" and "deletion of member.`,
      `Automated UAN generation and linking for all new hires within 24 hours: Swift UAN allocation
and linking to Aadhaar streamline onboarding and prevent delays. This directly answers "How
to generate UAN for new employees" and "Linking Aadhaar with UAN by employer.`,
      `Complete employee data management and ongoing verification: We maintain pristine member
records, proactively correcting discrepancies and managing updates like name, DOB, and KYC
to mitigate future issues.`,
      `Expert coordination for exit formalities and final settlement processes: Ensuring smooth,
compliant EPF exits and seamless transfers for outgoing employees, simplifying the employer's
role in these crucial moments.`,
    ],
  },
  {
    title: "Automated Challan Generation & Payment Facilitation",
    icon: UsersIcon,
    items: [
      `Precision EPF challan creation validated against latest EPFO norms: Our system guarantees
accurate calculations for all employees, including complex scenarios like "EPF calculation for
salary above ₹15,000," and ensures correct "EPF contribution breakdown for employer and
employee.`,
      `Automated contribution calculation based on "basic wages" as per EPF Act: We accurately
determine taxable components and ensure correct inclusion of salary components (like
Dearness Allowance) for EPF, clarifying "What components of salary are included in EPF basic
wages?`,
      `Pre-submission validation to catch errors before filing: Our multi-layered checks identify
discrepancies before your "monthly EPF ECR online" filing, preventing costly mistakes and
addressing "errors in ECR filing and how to correct them.`,
      `Payment timeline management with timely reminders and alerts: We ensure your contributions
are remitted well before the "Monthly EPF return filing deadline" (15th of every month),
completely protecting you from "penalties for late EPF payment" and interest charges.`,
    ],
  },
  {
    title: "Expert Regulatory Filings & Approvals",
    icon: CalendarDaysIcon,
    items: [
      `Accurate and timely monthly ECR (Electronic Challan-cum-Return) filing: We manage your core
monthly submission with utmost precision, streamlining "How to file monthly EPF ECR online"
for your team.`,
      `Comprehensive handling of all employer approvals, declarations, and annexures: Ensuring
every required document, including "Nomination Form" and other necessary declarations, is
properly processed and uploaded.`,
      `Secure digital document management with ironclad audit trails: All filed records are securely
managed and easily retrievable, providing crucial support during any "EPFO audit process for
employers" and helping you "prepare for an EPF inspection" with confidence.`,
      `Proactive error detection and swift resubmission when needed: We identify and correct "errors
in ECR filing" promptly, ensuring continuous compliance and mitigating "legal consequences of
EPF non-compliance.`,
    ],
  },
  {
    title: "Proactive Regulatory Updates & Advisory",
    icon: UserCircleIcon,
    items: [
      `Continuous monitoring of all EPFO circulars, notifications, and "EPF & MP Act 1952 latest
amendments": Our experts are constantly updating their knowledge base, providing you with
real-time insights.`,
      `Impact analysis of new regulations on your specific business operations: We translate complex
legal jargon into actionable insights tailored to your organizational structure and workforce,
including the "New Social Security Code impact on EPF for employers.`,
      `Strategic recommendations for policy adaptations: We advise on necessary internal
adjustments to ensure seamless compliance with evolving laws, allowing you to strategically
adapt your HR and payroll policies ahead of time.`,
      `Advance notice of upcoming compliance requirements and deadlines: You're always prepared,
eliminating last-minute rushes and ensuring "best practices for EPF compliance in India.`,
    ],
  },
];

export const whyEpfDesk = [
  {
    title: "Unmatched Expertise & Zero-Error Accuracy",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Consistently high accuracy rate in EPF filings (e.g., 99.9%): Our multi-layered validation and
expert review process minimizes discrepancies, significantly reducing "interest on delayed EPF
contributions" for your business.`,
      `Zero audit failures across our client portfolio for 5+ years: A testament to our robust processes
and unwavering commitment to compliance integrity, offering true peace of mind.`,
      `Rapid average response time (e.g., 2-4 hours) for client queries: Ensuring your concerns are
addressed promptly by dedicated specialists, improving your operational efficiency.`,
      `100% deadline adherence for all submissions: Protecting you from "legal consequences of EPF
non-compliance" and preserving your organization's reputation.`,
    ],
  },
  {
    title: "Complete HR & Finance Team Liberation",
    icon: UsersIcon,
    items: [
      `Up to 90% reduction in compliance-related administrative tasks: Freeing up countless hours
previously spent on manual processing and follow-ups, directly translating to "measurable
productivity gains.`,
      `Accelerated new employee onboarding process (e.g., 80% faster): Streamlining your initial
employee setup by expertly managing all EPF complexities, allowing your HR to onboard
quickly.`,
      `100% elimination of penalty and interest risks: Direct financial savings and mitigation of "what
happens if employer does not deposit PF?" concerns, due to flawless and timely compliance.`,
      `Significant reduction in employee EPF queries reaching HR (e.g., 75%): Our integrated solutions,
including the EPF Desk for employees, offload individual queries, allowing HR to focus on
strategic initiatives.`,
    ],
  },
  {
    title: "Implementation & Support",
    icon: CalendarDaysIcon,
    items: [
      `Initial Consultation: A brief session to understand your current EPF setup and specific needs.`,
      `Secure Portal Integration: Our team manages the secure integration with relevant EPFO portals
and gathers necessary access details.`,
      `Brief Team Orientation: A quick, efficient orientation session with your relevant staff to ensure a
smooth handover.`,
      `Full Service Activation: Your EPF compliance is fully operational, seamlessly managed by
EPFDesk.com experts within 24 hours.`,
    ],
  },
  {
    title: "Dedicated Support Team",
    icon: UserCircleIcon,
    items: [
      `Dedicated Client Manager: A single point of contact who understands your specific account
and compliance needs, ensuring personalized service.`,
      `Monthly Compliance Reports & Insights: Regular updates on your compliance status and
performance.`,
      `Immediate Resolution of EPF-related Queries: Your dedicated manager ensures any questions
or issues are addressed promptly.`,
      `Proactive Communication on Regulatory Changes: You're informed of relevant updates,
ensuring continuous compliance.`,
    ],
  },
];

export const plans = {
  mainTitle:
    "Ensuring Employee Well-being: Comprehensive ESIC Benefits Management",
  cards: [
    {
      title: "Guaranteeing ESIC Benefits Access for Your Workforce",
      features: [
        `Full Medical Care Access: We ensure proper registration and contribution records
so employees can effortlessly access ESIC medical benefits for family, and
locate ESIC dispensary nearby and ESIC hospital list.`,
        `Robust Cash Benefits Eligibility: Our accurate contribution management means
employees are eligible for vital support like ESIC sickness benefit eligibility(70% wages), ESIC maternity benefit rules (100% wages), ESIC disablement
benefit (90% wages), and ESIC unemployment allowance under Atal Bimit
Vyakti Kalyan Yojana (ABVKY).`,
        `Comprehensive Additional Benefits: We manage data crucial for dependents to
access ESIC dependent benefits, and ensure eligibility for ESIC funeral
expenses (₹15,000), ESIC confinement expenses, and ESIC vocational
rehabilitation.`,
        `Seamless Access Tools: We ensure accurate details for employees to download
ESIC E-Pehchan card and check ESI registration of an employee online,
facilitating their access to benefits.`,
        `Your Benefit: A healthier, more secure workforce, reduced employee frustration related
to ESIC benefits, and a stronger employer reputation that aids in talent retention.`,
      ],
    },
    {
      title: "Proven ESIC Expertise & Zero-Risk Compliance",
      features: [
        "99.9% Accuracy in ESIC Filings: Consistent 99.9% accuracy rate in all ESIC filings and contribution calculations, rigorously minimizing financial discrepancies and audit risks.",
        "Zero Audit Failures in 5+ Years: Zero audit failures across our client portfolio for 5+ years, a testament to our robust control environment and unwavering commitment to compliance integrity.",
        "Rapid Query Resolution (2–4 hrs): Rapid average response times 2-4 hours for all client queries and urgent matters, ensuring your concerns are addressed promptly by dedicated specialists.",
        "100% Deadline Adherence: 100% deadline adherence for all ESIC submissions, completely eliminating interest charges and 'legal consequences of ESIC non-compliance.'",
      ],
    },
    {
      title: "Complete HR & Finance Team Liberation",
      features: [
        "80% Reduction in ESIC Admin Time: Up to 80% reduction in administrative time typically spent on ESIC registration, calculation, and filing processes, directly enhancing operational efficiency.",
        "Elimination of ESIC Penalty Risks: 100% elimination of penalty and interest risks, leading to direct financial savings and complete protection from unforeseen costs.",
        "Protection from Legal & Reputational Risks: Complete protection from non-compliance legal consequences and reputational damage, ensuring your business's integrity.",
        "Strategic Resource Redirection: Strategic resource redirection toward talent development, advanced financial planning, and core business growth, maximizing your organization's potential.",
      ],
    },
    {
      title: "Rapid Implementation & Ongoing Support",
      features: [
        `Initial Consultation: A quick, efficient session to understand your current ESIC
setup, employee count, and specific organizational requirements.`,
        `Secure Data Integration: Our team securely accesses necessary payroll and
employee information via compliant channels for initial ESIC processing.`,
        `ESIC Portal Setup & Linkage: We manage the efficient setup and linkage with the
ESIC employer portal and other relevant online platforms.`,
        `Brief Team Orientation: A concise, practical orientation session for your relevant
HR and Finance staff to ensure a smooth operational handover and understanding
of our processes.`,
        `Full Service Activation: Your ESIC compliance is fully operational and seamlessly
managed by EPFDesk.com experts within 24-48 hours of successful onboarding.`,
      ],
    },
    {
      title: "Dedicated Ongoing Support for Continuous Compliance",
      features: [
        `Dedicated Client Manager: You'll have a single point of contact who possesses
deep knowledge of your specific account and compliance needs, ensuring
personalized and consistent service.`,
        `Monthly Compliance Reports: Receive regular, clear updates on your ESIC status,
contributions, key metrics, and any emerging trends relevant to your workforce.`,
        `Immediate Query Resolution: Our team is committed to prompt responses,
ensuring any questions or issues related to your ESIC compliance are addressed
swiftly.`,
        `Proactive Regulatory Updates: You'll receive timely notifications and expert
advice on new ESIC rules, rates, benefit changes, or specific directives, ensuring
you are always informed and compliant.`,
      ],
    },
    {
      title: "Key Employer ESIC Concerns We Resolve",
      features: [
        `Registration & Setup: Navigating the ESIC registration process, assessing ESIC
Act applicability, compiling required documentation, and managing ESIC code
allocation.`,
        `Ongoing Compliance: Ensuring accurate monthly contribution calculations and
payments,managing ESIC return filing and deadlines, and handling wage
ceiling and exemption compliance.`,
        `Risk & Audit Management: Addressing penalties for late ESIC payments,
understanding consequences of non-compliance, and providing ESIC audit
support.`,
        `Portal & Data Management: Assisting with ESIC employer portal login, employee
data updates,and generating ESIC ID`,
      ],
    },
    {
      title: "Employee ESIC Benefits Support We Ensure",
      features: [
        `Medical Benefit Access: Seamless access to ESIC medical care including
dispensaries and hospital networks for employees and their families.`,
        `Cash Benefits Eligibility: Ensuring eligibility for sickness benefit, maternity
benefit, disablement benefit, and unemployment allowance (ABVKY).`,
        `Other Benefits: Facilitating access to dependent benefits, funeral expenses, and
vocational rehabilitation.`,
        `Access Tools: Support for E-Pehchan card generation and checking ESIC
registration status of an employee online.`,
      ],
    },
  ],
};

export const epfManagementFaq = [
  {
    question: "How quickly can we start using your EPF management services?",
    answer: `We pride ourselves on efficiency; your EPF compliance can be fully operational with EPFDesk.com within
24 hours of onboarding completion.`,
  },
  {
    question:
      "What happens to our existing EPF records and historical filings?",
    answer: `We perform a secure and meticulous migration of all your historical data and records, ensuring seamless
continuity with zero disruption to your ongoing operations or past records.`,
  },
  {
    question:
      "Do you handle EPF compliance for multi-state operations across India?",
    answer: `Absolutely. Our nationwide operational footprint and deep understanding of varying state-level nuances
enable us to manage EPF compliance effectively across all Indian states and territories, regardless of your
company's dispersed locations.`,
  },
  {
    question: "How do you ensure accuracy in EPF calculations and filings?",
    answer: `Our process involves a multi-layer validation system, automated checks against EPFO norms, and final
expert review by our compliance specialists, resulting in a 99.9% accuracy rate in all submissions.`,
  },
  {
    question: "What if there's an EPFO audit of our company?",
    answer: `You can rest assured. We provide complete audit support, including compiling all necessary
documentation, offering expert guidance, and providing representation as required, making your audit
process stress-free.`,
  },
  {
    question:
      "What's included in the monthly service fee for Employer EPF Management?",
    answer: `Our monthly service fee is comprehensive, covering all core EPF compliance activities, dedicated client
support, timely regulatory updates, ongoing data management, and full audit-ready documentation.`,
  },
  {
    question:
      "How do you handle urgent EPF queries or unforeseen issues that arise?",
    answer: `Our dedicated client managers and expert teams are committed to rapid response, ensuring same-day
resolution for all urgent matters and critical EPF-related issues.`,
  },
];

export const esicFaq = [
  {
    question: "Who needs to comply with ESIC regulations in India?",
    answer: `ESIC generally applies to establishments with 10 or more employees (or 20+ in some states)
where an employee's monthly wage does not exceed ₹21,000 (or ₹25,000 for persons with
disabilities). We can confirm your specific applicability.`,
  },
  {
    question: "What are the current ESIC contribution rates?",
    answer: `As per current regulations, the employer contributes 3.25% and the employee contributes
0.75% of gross monthly wages, up to the defined wage ceiling.`,
  },
  {
    question: "Which salary components are included in ESIC calculations?",
    answer: `ESIC contributions are calculated on gross wages, typically encompassing basic pay,
dearness allowance (DA), house rent allowance (HRA), city compensatory allowance (CCA),
production incentives, night shift allowance, and other applicable allowances.`,
  },
  {
    question: "What penalties apply for late ESIC payments or non-compliance?",
    answer: `Delays in ESIC contribution payment incur an interest rate of 12% per annum. Additionally,
damages ranging from 5% to 25% of the arrears may be imposed depending on the period of
delay. Non-registration or repeated non-compliance can lead to further legal actions.`,
  },
  {
    question: "How does EPFDesk ensure timely ESIC filing?",
    answer: `We manage your complete ESIC filing process, including accurate calculation, automated
challan generation, multi-layer validation, and guaranteed submission before the 15th-of-thefollowing-
month deadline.`,
  },
  {
    question:
      "Will our employees still be able to access their ESIC benefits seamlessly?",
    answer: `Our monthly service fee is comprehensive, covering all core EPF compliance activities, dedicated client
support, timely regulatory updates, ongoing data management, and full audit-ready documentation.`,
  },
  {
    question:
      "How do you handle urgent EPF queries or unforeseen issues that arise?",
    answer: `Absolutely. Our accurate and timely compliance ensures seamless access for your
employees to all their entitled ESIC benefits, including medical care, various cash benefits,
and social security entitlements.`,
  },
  {
    question: "Can you help with new company ESIC registration?",
    answer: `Yes, we provide comprehensive registration support, from initial applicability assessment
and documentation to successful ESIC code allocation, streamlining the entire setup process
for new establishments.`,
  },
  {
    question: "How do you handle multi-state ESIC compliance?",
    answer: `Our nationwide operational footprint and deep understanding of varied state-level ESIC
regulations enable us to manage compliance effectively across all Indian states and
territories, providing consistent support for multi-location businesses.`,
  },
];

export const lwfFaq = [
  {
    question: "Is Labour Welfare Fund (LWF) mandatory in all Indian states?",
    answer: `No, LWF is a state-specific contribution and is implemented by individual state
legislatures.8 It is currently mandatory in only about 16-20 states and union territories
across India, with rules varying significantly.`,
  },
  {
    question:
      "What are the typical LWF contribution rates and how often are they paid?",
    answer: `LWF rates vary widely by state (e.g., ₹6 to ₹60 total per employee).9 Contributions can
be deducted monthly, half-yearly (e.g., June & December), or annually (e.g., December),
depending on the specific state's LWF Act.10`,
  },
  {
    question: "Which employees are typically covered under the LWF Act?",
    answer: `Generally, LWF applies to all employees except those in managerial or supervisory
positions earning above a certain wage threshold, which varies by state. We ensure
accurate applicability for your workforce in each state.`,
  },
  {
    question:
      "What penalties can apply for LWF non-compliance or late payments?",
    answer: `Penalties for LWF non-compliance vary by state but can include monetary fines (e.g.,
₹500 to ₹5,000+), interest on unpaid amounts (e.g., 12-25% per annum), and even
imprisonment (up to 3-6 months) for repeated or willful defaults.`,
  },
  {
    question:
      "Do you handle LWF compliance for companies operating in multiple states?",
    answer: `Absolutely. Our nationwide operational footprint and deep expertise in state-specific
LWF Acts enable us to manage and ensure flawless compliance across all Indian states
where you operate.`,
  },
  {
    question:
      "How do you ensure accuracy in LWF calculations given state variations?",
    answer: `Our process involves meticulous tracking of each state's unique LWF Act, specific
rates, wage components, and frequencies. We use multi-layer validation and expert
review to ensure 99.9% accuracy for every contribution and filing.`,
  },
  {
    question: "Can LWF payments be made online?",
    answer: `Many states now offer online portals for LWF payments and return filings (e.g.,
Maharashtra, Gujarat, Haryana).11 We utilize these online systems where available to
streamline the process. For states requiring manual submission, we handle that as well.`,
  },
];

export const ptFaq = [
  {
    question: "Is Professional Tax (PT) mandatory in all Indian states?",
    answer: `No, Professional Tax is a state-specific tax levied by individual state governments. It is
currently applicable in approximately 18-20 states and Union Territories in India, and its
rules vary significantly from one state to another.`,
  },
  {
    question: "What are the typical PT rates and how often are they paid?",
    answer: `PT rates are based on a slab system tied to income, varying by state. The maximum
annual PT payable by an individual cannot exceed ₹2,500. Payment frequency also
varies: some states require monthly payments, others quarterly, half-yearly, or annually,
depending on the tax liability or type of registration.`,
  },
  {
    question: "Which employees are typically covered under Professional Tax?",
    answer: `Generally, Professional Tax applies to all salaried individuals and self-employed
professionals earning above a certain income threshold, which is set by each state. We
ensure accurate applicability for your specific workforce in each state.`,
  },
  {
    question:
      "What penalties apply for late Professional Tax payments or non-compliance?",
    answer: `Penalties for PT non-compliance vary significantly by state but commonly include
interest on delayed payments (e.g., 1% to 2% per month), fixed fines for late registration
(e.g., ₹5 to ₹1,000 per day), and penalties for late filing or non-payment (e.g., 10% to 50%
of the tax due).`,
  },
  {
    question:
      "Do you handle Professional Tax compliance for companies operating in multiple states?",
    answer: `Yes, absolutely. Our nationwide operational footprint and deep expertise in each
state's unique Professional Tax laws enable us to seamlessly manage and ensure
flawless PT compliance across all Indian states where your company operates.`,
  },
  {
    question:
      "How do you ensure accuracy in PT calculations and filings given state variations?",
    answer: `Our process involves meticulous tracking of each state's unique PT Act, specific slab
rates, wage components, and due dates. We use multi-layer validation and expert review
to ensure 99.9% accuracy for every contribution and filing, protecting you from
discrepancies.`,
  },
  {
    question: "Can Professional Tax payments be made online?",
    answer: `Most states now offer online portals for Professional Tax payments and return filings
(e.g., Maharashtra, Karnataka, West Bengal). We utilize these online systems where
available to streamline the process for maximum efficiency.`,
  },
];

export const epfDeskFaq = [
  {
    question: "How do our employees get support from EPFDesk?",
    answer: `Employees simply email their EPF-related queries to a dedicated, secure EPFDesk
email address provided by us. Each email automatically generates a unique ticket ID,
and employees receive email updates on their query's progress.`,
  },
  {
    question: "What specific EPF issues can employees resolve through EPFDesk?",
    answer: `Employees can raise tickets for virtually all EPF-related queries including balance checks, UAN activation, KYC updates,
withdrawals (partial/full), transfers, pension matters, passbook updates, and portal login issues.`,
  },
  {
    question: "Is there any cost to our employees for using EPFDesk?",
    answer: `No, the EPFDesk platform and all its support services are included as part of your company's partnership with
EPFDesk.com. There is no direct cost to individual employees.`,
  },
  {
    question:
      "How quickly are employee EPF issues typically resolved through EPFDesk?",
    answer: `While resolution times can vary based on complexity and EPFO processing, our expert teams prioritize speed and accuracy.
Employees can track real-time progress, with most common queries resolved within days.`,
  },
  {
    question: "Can employees still contact our internal HR for EPF matters?",
    answer: `While EPFDesk is designed to be the primary resolution channel for EPF queries, employees always retain the option to
contact your internal HR for company-specific policy questions or non-EPF related matters.`,
  },
  {
    question:
      "How does EPFDesk ensure the security and privacy of employee data?",
    answer: `We employ industry-standard data encryption, secure login protocols, and strict data privacy policies, ensuring complete
confidentiality and compliance with data protection regulations.`,
  },
  {
    question:
      "What happens if an employee's case requires visiting EPFO offices?",
    answer: `Our unique on-ground teams across India handle these situations. For cases requiring physical presence at EPFO offices,
our local experts manage all interactions directly, ensuring resolution without burdening your employee or HR.`,
  },
  {
    question:
      "Can the email-based system handle high volumes of employee queries for large companies?",
    answer: `Yes, our robust email ticketing system and expert teams are specifically designed
and equipped to efficiently manage high query volumes for organizations of all sizes,
from mid-sized companies to large enterprises seamlessly.`,
  },
];

export const epfDeskServices = [
  {
    title: "Secure & Intuitive Employee Access (24/7)",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Dedicated Member Login Portal: Provides secure, personalized employee access to the EPFDesk platform,
making it their central hub for all EPF matters.`,
      `User-Friendly Interface: Designed for clarity and ease of use, ensuring all employees, regardless of technical
skill, can effortlessly navigate and find solutions.`,
      `Mobile-Responsive Design: Guarantees seamless support availability on any device – desktop, tablet, or
smartphone – for ultimate convenience.`,
      `Instant Expert Access: Employees get immediate access to EPF expertise without needing HR intervention,
streamlining their journey from query to resolution.`,
    ],
  },
  {
    title: "Streamlined Query Management System",
    icon: UsersIcon,
    items: [
      `Guided Ticket Creation: Employees can easily log tickets for virtually all EPF issues. This includes common
queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF
withdrawal process.`,
      `Real-time Progress Tracking: Each submitted ticket comes with a clear, live progress bar, transparent status
updates, and estimated resolution timelines. Employees always know where their request stands, reducing
anxiety and eliminating the need for constant follow-ups.`,
      `Automated Notifications: Employees receive proactive updates via email or SMS as their ticket progresses
through the resolution stages, keeping them fully informed without having to manually check the portal.`,
      `Comprehensive Issue Coverage: Our system handles a vast range of concerns, from simple queries (e.g.,
"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries.`,
    ],
  },
  {
    title: "Expert-Led Resolution & Direct EPFO Liaison",
    icon: CalendarDaysIcon,
    items: [
      `Dedicated EPF Specialists: Our team comprises seasoned professionals who take full ownership of each
employee query, specializing in accurate resolutions for issues like "Why is my EPF passbook not updated?"
or "What to do if employer is not depositing PF?"`,
      `Direct EPFO Communication Channels: We utilize established channels for faster resolution and
documentation exchange with the Employees' Provident Fund Organisation (EPFO), eliminating the need for
your HR to act as a middleman.`,
      `Complex Case Management: Our expertise extends to intricate cases such as inter-company EPF transfers,
legacy account merging, pension payment processing, and resolving discrepancies in contribution
claims.`,
      `Complete Resolution Lifecycle: We manage the entire resolution journey, from the initial query submission to
final settlement or problem closure, including necessary employer attestation for EPF transfer claims and
approval of online EPF claims from an employer's perspective.`,
    ],
  },
  {
    title: "Nationwide On-Ground Support for Unresolved Cases",
    icon: UserCircleIcon,
    items: [
      `Local Teams Across Major Metros: Unlike purely online services, our on-ground teams in key Indian cities
(including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune) provide invaluable physical support where it
matters most.`,
      `In-Person EPFO Office Representation: For complex or unresolved cases that mandate direct interaction,
submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective
resolution. This addresses queries related to "EPFO portal usage" and "employer's guide to EPFiGMS."`,
      `Physical Verification Assistance: When required by EPFO processes (e.g., for certain withdrawal claims or death
claim processing), our teams provide on-ground assistance for physical verification, bridging any logistical gaps.Guaranteed Case Closure: This unique capability ensures even the most challenging or bureaucratic EPF issues are
resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.`,
    ],
  },
];

export const epfDeskStatergy = [
  {
    title: "Complete HR Team Liberation",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Significant reduction (e.g., 80%) in daily EPF-related employee queries: Freeing up countless hours
previously spent on routine tasks.`,
      `Valuable HR bandwidth reclaimed (e.g., 15-20 hours monthly): Allowing your HR team to focus on strategic
initiatives like talent acquisition, employee development programs, and fostering a vibrant workplace culture.`,
      `Eliminated EPFO liaison requirement: Your HR team no longer needs to be the middleman for individual
employee EPF issues, reducing their administrative overhead.`,
      `Shift to Strategic Focus: Empowering HR to lead retention strategies, succession planning, and workplace
culture building.`,
    ],
  },
  {
    title: "Enhanced Employee Experience & Satisfaction",
    icon: UsersIcon,
    items: [
      `Instant expert access: Employees experience swift resolution, eliminating frustration associated with delayed
responses or unanswered questions.`,
      `Transparent resolution process: Builds confidence in how their EPF matters are managed, as they can track
progress in real-time.`,
      `Professional support quality: The consistent and expert support enhances the perception of employer care
and commitment to employee well-being.`,
      `Empowered workforce: Employees feel more in control and informed about their provident fund matters,
leading to increased satisfaction and morale.`,
    ],
  },
];

// export const plansEpfDesk = {
//   mainTitle:
//     "Simple Implementation & Ongoing Support",
//   cards: [
//     {
//       id:"01",
//       title: "24-Hour Platform Activation",
//         bg: 'bg-[#fceff1]',
//       desc: [
//         `Platform Setup & Configuration: Our team handles the swift setup of your company's EPFDesk portal,
// customizing access configuration as needed.`,
//         `Employee Credential Generation/Guided Registration: We facilitate the creation of secure login credentials
// or guide your employees through a simple self-registration process.`,
//         `Comprehensive Employee Onboarding Kit Delivery: We provide easy-to-understand usage guides, FAQs, and
// tutorials to ensure your employees can quickly adopt and benefit from the platform.`,
//         `Immediate Platform Availability: Your employees can begin raising tickets and accessing expert support
// within 24 hours of onboarding completion, experiencing instant value.`,
//       ],
//     },
//     {
//       id:"02",
//       title: "Seamless Integration & Proactive Management",
//       bg: 'bg-[#f0f4ff]',
//       desc: [
//         `Optional HR Dashboard: While we handle direct employee resolution, your HR team can access an optional
// dashboard to monitor common query trends (anonymized), view overall ticket resolution rates, and identify areas for
// internal communication.`,
//         `Dedicated Client Manager: You'll have an assigned client manager who serves as your single point of contact for
// organizational-level support, reporting needs, and any high-level strategic consultations.`,
//         `Continuous Platform Enhancement: We constantly enhance the EPFDesk platform based on user feedback, evolving
// EPFO processes, and emerging employee needs, ensuring your employees always have access to the best support.`,
//         `Scalable Solution: Our platform and expert teams are built to handle ever-increasing query volumes, seamlessly
// growing with your workforce from mid-sized companies to large enterprises.`,
//       ],
//     },
//     {
//       id:"03",
//       title: "Common Employee Issues We Resolve:",
//       bg: 'bg-[#e7fbe9]',
//       desc: [
//         `EPF balance checking and passbook updates: Including "How to check EPF balance online" and resolving "Why is
// my EPF passbook not updated?`,
//         `UAN activation, linking, and Aadhaar integration: Expert assistance with "How to activate UAN," "How to know
// your UAN," and managing "Common UAN login issues and solutions.`,
//         `KYC document updates and verification: Guidance and processing for "How to update EPF KYC"and other member
// profile corrections.`,
//         `EPF withdrawal claims (partial and full settlement): Navigating "EPF withdrawal rules" and assisting with "How
// to withdraw EPF online" and required documents.`,
// `EPF transfer between employers and states: Expertly managing the "EPF transfer process" to ensure seamless
// continuity of funds.`,
// `Pension-related queries and processing: Understanding "Understanding EPS benefits" and assisting with "How
// to get EPS Scheme Certificate."`,

//       ],
//     },
//     {
//       id:"04",
//       title: "Rapid Implementation & Ongoing Support",
//        bg: 'bg-[#fff7ed]',
//       desc: [
//         `Initial Consultation: A quick, efficient session to understand your current ESIC
// setup, employee count, and specific organizational requirements.`,
//         `Secure Data Integration: Our team securely accesses necessary payroll and
// employee information via compliant channels for initial ESIC processing.`,
//         `ESIC Portal Setup & Linkage: We manage the efficient setup and linkage with the
// ESIC employer portal and other relevant online platforms.`,
//         `Brief Team Orientation: A concise, practical orientation session for your relevant
// HR and Finance staff to ensure a smooth operational handover and understanding
// of our processes.`,
//         `Full Service Activation: Your ESIC compliance is fully operational and seamlessly
// managed by EPFDesk.com experts within 24-48 hours of successful onboarding.`,
//       ],
//     },
//   ],
// };

export const plansEpfDesk = {
  mainTitle: "Simple Implementation & Ongoing Support",
  cards: [
    {
      id: "01",
      title: "24-Hour Platform Activation",
      bg: "bg-[#fceff1]",
      heading: "Experience immediate productivity with same-day activation.",
      body: [
        "Platform Setup & Configuration: Our team handles the swift setup of your company's EPFDesk portal, customizing access configuration as needed.",
        "Employee Credential Generation/Guided Registration: We facilitate the creation of secure login credentials or guide your employees through a simple self-registration process.",
        "Comprehensive Employee Onboarding Kit Delivery: Easy-to-understand guides, FAQs, and tutorials.",
        "Immediate Platform Availability: Employees can begin accessing support within 24 hours of onboarding.",
      ],
      image: "https://dummyimage.com/600x400/fceff1/333&text=Activation",
    },
    {
      id: "02",
      title: "Seamless Integration & Proactive Management",
      bg: "bg-[#f0f4ff]",
      heading: "Scale confidently with expert-led integration.",
      body: [
        "Optional HR Dashboard for insights and anonymized trend data.",
        "Dedicated Client Manager for strategic guidance and support.",
        "Continuous Platform Enhancement based on feedback and compliance changes.",
        "Scalable to handle increased volumes as your workforce grows.",
      ],
      image: "https://dummyimage.com/600x400/f0f4ff/333&text=Integration",
    },
    {
      id: "03",
      title: "Common Employee Issues We Resolve:",
      bg: "bg-[#e7fbe9]",
      heading: "Relieve HR stress with our comprehensive support.",
      body: [
        "EPF balance and passbook update support.",
        "UAN activation, Aadhaar linking, and login help.",
        "KYC updates and profile corrections.",
        "Assistance with EPF withdrawal rules and documentation.",
        "Expert-managed EPF transfers between employers/states.",
        "Pension-related EPS benefits and certification guidance.",
      ],
      image: "https://dummyimage.com/600x400/e7fbe9/333&text=Support",
    },
    {
      id: "04",
      title: "Rapid Implementation & Ongoing Support",
      bg: "bg-[#fff7ed]",
      heading: "Quick setup and dependable ESIC compliance.",
      body: [
        "Initial Consultation to understand your requirements.",
        "Secure Data Integration for payroll and employee info.",
        "ESIC Portal Setup and configuration.",
        "Concise Orientation for HR and Finance teams.",
        "Full Service Activation within 24-48 hours.",
      ],
      image: "https://dummyimage.com/600x400/fff7ed/333&text=Implementation",
    },
  ],
};

export const dummyCards = [
  {
    title: "Seamless Employee Lifecycle Management",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Peace of mind for every pay cycle.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With a unified employee record, your payroll information is always
            up to date. Lattice calculates payroll and tracks deductions and
            contributions so you don’t have to.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Tax Compliance",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Simplify compliance with worry-free withholdings.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice files taxes on your behalf, and gives you all the data you
            need for reporting and auditing.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Employee Self Service",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Empower employees with an easy, intuitive platform.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Let employees view and manage paystubs, bank accounts, and tax
            documents without asking HR.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Time Tracking",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get time back with built-in time tracking.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Cut down on manual data entry and errors with fast time card entry,
            review, and approval—synced automatically to payroll.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Integrations",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ensure every system works together seamlessly.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice Payroll integrates with your preferred third-party apps,
            like benefits, 401(k), and more.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const epfoCards = [
  {
    title: "Seamless Employee Lifecycle Management",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/seamless.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seamless Employee Lifecycle Management
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Streamline onboarding, exits, and EPF compliance with automated UAN
            generation, real-time roster updates, verified member records, and
            expert handling of exit formalities — ensuring smooth transitions
            and regulatory alignment throughout the employee journey.
          </p>
        </div>
        <img
          src="/images/seamless.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Automated EPF Challan Generation & Error-Free Payments",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/automated-epf.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Automated EPF Challan Generation & Error-Free Payments
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Ensure accurate, compliant EPF challan creation with automated
            wage-based calculations, real-time validation checks, and timely
            reminders — eliminating filing errors, ensuring on-time payments,
            and protecting you from penalties and interest charges.
          </p>
        </div>
        <img
          src="/images/automated-epf.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Expert EPF Filings, Approvals & Compliance Assurance",
    description: "Reduce HR admin burden.",
    image: "/images/epf-filings.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Expert EPF Filings, Approvals & Compliance Assurance
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle all your monthly ECR filings, declarations, and approvals
            with precision—backed by secure digital records, audit-ready
            documentation, and proactive error correction—to ensure full EPFO
            compliance and peace of mind during audits or inspections.
          </p>
        </div>
        <img
          src="/images/epf-filings.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Proactive EPF Regulatory Updates & Strategic Advisory",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/epf-regulatory.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Proactive EPF Regulatory Updates & Strategic Advisory
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Stay ahead of compliance with real-time EPFO updates, personalized
            impact analysis, strategic policy guidance, and advance
            alerts—empowering your organization to adapt seamlessly to evolving
            EPF regulations and avoid last-minute surprises.
          </p>
        </div>
        <img
          src="/images/epf-regulatory.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Stay Compliant with Confidence",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/compliance.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Compliant with Confidence
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We decode every EPFO circular and regulatory change for you—offering
            tailored guidance, compliance checklists, and strategic insights—so
            your organization is always prepared, always compliant, and never
            caught off-guard.
          </p>
        </div>
        <img
          src="/images/compliance.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const slidesEpfo = {
  sectionTitle: "Why Companies Trust EPFDesk.com",
  sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Consistently high accuracy rate in EPF filings (e.g., 99.9%)",
      desc: `Our multi-layered validation and expert review process minimizes discrepancies, significantly reducing "interest on delayed EPF contributions" for your business`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Zero audit failures across our client portfolio for 5+ years",
      desc: "A testament to our robust processes and unwavering commitment to compliance integrity, offering true peace of mind.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Rapid average response time (e.g., 2-4 hours) for client queries",
      desc: "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "100% deadline adherence for all submissions",
      desc: `Protecting you from "legal consequences of EPF non-compliance" and preserving your organization's reputation.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const epfDeskData = {
  title: "Streamlined Query Management System",
  largeCard: {
    title: "Guided Ticket Creation",
    desc: `Employees can easily log tickets for virtually all EPF issues. This includes common queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF withdrawal process."`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp",
    tag: "ebook",
  },
  sideCards: [
    {
      title:
        "Each submitted ticket comes with a clear, live progress bar, transparent status updates, and estimated resolution timelines.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Real-time Progress Tracking",
    },
    {
      title:
        "Employees receive proactive updates via email or SMS as their ticket progresses through the resolution stages",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Automated Notifications",
    },
    {
      title: `Our system handles a vast range of concerns, from simple queries (e.g.,"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries."`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Comprehensive Issue Coverage",
    },
  ],
};

export const epfoGridData = {
  title: "Complete HR & Finance Team Liberation",
  largeCard: {
    title: "Liberating HR & Finance Teams from Compliance Overload",
    desc: `Our platform handles end-to-end compliance and employee support, enabling your internal teams to focus on strategic priorities instead of repetitive administrative tasks.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title:
        "Up to 90% reduction in compliance-related admin tasks: freeing up hours spent on manual work, resulting in measurable productivity gains.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Productivity Boost",
    },
    {
      title:
        "80% faster onboarding process: our team handles EPF complexities so HR can onboard new hires swiftly without delays.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Fast Onboarding",
    },
    {
      title:
        "100% elimination of penalty & interest risks: Never worry about 'what if employer does not deposit PF' — we ensure flawless and timely compliance.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Penalty-Free Compliance",
    },
    {
      title:
        "75% reduction in employee queries to HR: EPF Desk enables self-service, reducing the burden on HR teams.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Query Deflection",
    },
  ],
};

export const epfDeskPlustabs = {
  title: "Expert-Led Resolution & Direct EPFO Liaison",
  tabs: [
    {
      id: "analytics",
      label: "Dedicated EPF Specialists",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Our team comprises seasoned professionals who take full ownership of
            each employee query, specializing in accurate resolutions for issues
            like "Why is my EPF passbook not updated?" or "What to do if
            employer is not depositing PF?"
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Direct EPFO Communication Channels",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We utilize established channels for faster resolution and
            documentation exchange with the Employees' Provident Fund
            Organisation (EPFO), eliminating the need for your HR to act as a
            middleman.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Complex Case Management",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Our expertise extends to intricate cases such as inter-company EPF
            transfers, legacy account merging, pension payment processing, and
            resolving discrepancies in contribution claims.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Complete Resolution Lifecycle",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We manage the entire resolution journey, from the initial query
            submission to final settlement or problem closure, including
            necessary employer attestation for EPF transfer claims and approval
            of online EPF claims from an employer's perspective.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const epfDeskMiddletabsData = {
  title: "Nationwide On-Ground Support for Unresolved Cases",
  tabs: [
    {
      id: "library",
      title: "Local Teams Across Major Metros",
      desc: "Unlike purely online services, our on-ground teams in key Indian cities (including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune) provide invaluable physical support where it matters most.",
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "In-Person EPFO Office Representation",
      desc: `For complex or unresolved cases that mandate direct interaction, submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective resolution. This addresses queries related to "EPFO portal usage" and "employer's guide to EPFiGMS."`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Physical Verification Assistance",
      desc: "When required by EPFO processes (e.g., for certain withdrawal claims or death claim processing), our teams provide on-ground assistance for physical verification, bridging any logistical gaps.",
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Guaranteed Case Closure",
      desc: "This unique capability ensures even the most challenging or bureaucratic EPF issues are resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const epfoMiddletabsData = {
  title: "Implementation & Support",
  tabs: [
    {
      id: "library",
      title: "Initial Consultation",
      desc: "A brief session to understand your current EPF setup and specific needs.",
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Secure Portal Integration",
      desc: ` Our team manages the secure integration with relevant EPFO portals and gathers necessary access details.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Brief Team Orientation",
      desc: " A quick, efficient orientation session with your relevant staff to ensure a smooth handover.",
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Full Service Activation",
      desc: "Your EPF compliance is fully operational, seamlessly managed by EPFDesk.com experts within 24 hours.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const epfoPlustabs = {
  title: "Dedicated Support Team",
  tabs: [
    {
      id: "analytics",
      label: "Dedicated Client Manager",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            A single point of contact who understands your specific account and
            compliance needs, ensuring personalized service.
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Monthly Compliance Reports & Insights",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>Regular updates on your compliance status and performance.</p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Immediate Resolution of EPF-related Queries",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Your dedicated manager ensures any questions or issues are addressed
            promptly.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Proactive Communication on Regulatory Changes",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            You're informed of relevant updates, ensuring continuous compliance.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const slidesEsic = {
  sectionTitle: "Comprehensive ESIC Compliance Management Services",
  sectionSubtitle: "ESIC Registration & Applicability Management",
  items: [
    {
      title: "Complete ESIC registration process",
      desc: `We guide you through and meticulously handle all steps for "ESIC registration process online India," including online application, documentation, and swift ESIC code allocation.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Precise applicability assessment",
      desc: `We accurately determine "Who is eligible for ESIC registration?" based on employee count (e.g., 10+ or 20+ depending on state) and wage limits, ensuring correct and ongoing coverage without a hitch.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Rapid average response time (e.g., 2-4 hours) for client queries",
      desc: "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Required documentation compilation",
      desc: `We assist in gathering and submitting all "documents required for ESIC registration," streamlining the initial setup within statutory time limits.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
    {
      title: "Coverage continuity management",
      desc: `We advise on crucial aspects like the "once covered, always covered" rule, ensuring compliance even if the number of employees temporarily goes below the minimum limit.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const esicPlustabs = {
  title: "Accurate ESIC Contribution Calculation & Payment",
  tabs: [
    {
      id: "analytics",
      label: "Precision contribution calculation",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We perform accurate "ESIC calculation on salary" using the "current
            ESIC contribution rate employer and employee" (e.g., Employer:
            3.25%, Employee: 0.75%) and the "ESIC wage ceiling current" (₹21,000
            for general employees, ₹25,000 for persons with disabilities).
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Correct wage component inclusion",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We meticulously identify and include all applicable "salary
            components for ESIC wages" (Basic, DA, HRA, CCA, production
            incentive, night shift, meal/food allowance), ensuring "ESIC is
            deducted on gross salary, not just basic."
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Exemption management",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We accurately identify and manage "exemptions from ESIC
            contributions for low-wage employees" (e.g., daily wage up to ₹176),
            optimizing your deductions while remaining compliant.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Timely payment facilitation",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We generate accurate "ESIC challan online" and support "how to pay
            ESIC contribution online," guaranteeing deposits are made well
            before the "Monthly ESIC return filing deadline"
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const esicGridData = {
  title: "Seamless Monthly Filings & Employee Data Management",
  largeCard: {
    title: "Monthly ESIC return filing",
    desc: ` We manage the entire "ESIC return filing process" with 100% accuracy and punctuality before the 15th of the following month deadline.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We handle "how to update employee details in ESIC portal by employer," ensuring accurate records for your workforce, including "generating ESIC Code number" (17-digit ID) and managing "ESIC login for insured person" access.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Employee data updates & IP Management",
    },
    {
      title: `We expertly manage all interactions on the "ESIC employer login portal," ensuring accurate data reflection, complete submissions, and efficient grievance management (like EPFiGMS)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Employer Portal Navigation",
    },
    {
      title: `We meticulously track "ESIC Contribution Period vs. Cash Benefit Period" to maintain continuous coverage for your employees, even if salaries briefly exceed the ceiling.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Contribution Period Tracking",
    },
  ],
};

export const esicMiddletabsData = {
  title: "Proactive Regulatory Updates & Risk Management",
  tabs: [
    {
      id: "library",
      title: "Continuous regulatory monitoring",
      desc: `Our dedicated experts meticulously monitor the latest "ESIC Act amendments," "ESIC circulars," and "ESIC contribution rate changes."`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact analysis & strategic advice",
      desc: `We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the "consequences of ESIC non-compliance.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty prevention strategies",
      desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit readiness support",
      desc: " We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const esciCards = [
  {
    title: "Guaranteeing ESIC Benefits Access for Your Workforce",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/esic-benefits.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Guaranteeing ESIC Benefits Access for Your Workforce
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We ensure accurate employee registration and contribution tracking,
            enabling seamless access to ESIC medical care, cash benefits, and
            support services. This includes eligibility for family medical
            treatment, sickness and maternity benefits, disablement and
            unemployment allowances, dependent and funeral benefits, as well as
            tools like the E-Pehchan card and online registration verification.
          </p>
        </div>
        <img
          src="/images/esic-benefits.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Proven ESIC Expertise & Zero-Risk Compliance",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/esic-expertise.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Proven ESIC Expertise & Zero-Risk Compliance
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We deliver 99.9% accuracy in ESIC filings, zero audit failures over
            5+ years, rapid 2–4 hour response times for client queries, and 100%
            on-time submissions—eliminating financial risks, penalties, and
            compliance-related legal exposure.
          </p>
        </div>
        <img
          src="/images/esic-expertise.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Complete HR & Finance Team Liberation",
    description: "Reduce HR admin burden.",
    image: "/images/hr-liberation.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Complete HR & Finance Team Liberation
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Achieve up to 80% reduction in ESIC-related admin workload,
            eliminate penalties and legal risks, and redirect resources toward
            strategic initiatives—boosting efficiency, financial health, and
            business growth.
          </p>
        </div>
        <img
          src="/images/hr-liberation.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Rapid Implementation & Ongoing Support",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/rapid-implementation.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rapid Implementation & Ongoing Support
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial consultation to full service activation, we ensure
            secure data integration, ESIC portal setup, and quick team
            orientation—enabling complete ESIC compliance within 24–48 hours.
          </p>
        </div>
        <img
          src="/images/rapid-implementation.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "End-to-End ESIC Compliance, Accuracy & Employee Empowerment",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/esic-compailance.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            End-to-End ESIC Compliance, Accuracy & Employee Empowerment
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We ensure complete ESIC compliance with 99.9% filing accuracy, zero
            audit failures, and 100% deadline adherence—eliminating penalties
            and legal risks. Our rapid response support, seamless onboarding,
            and secure data integration streamline operations by reducing admin
            workload up to 80%. From enabling access to medical and cash
            benefits to safeguarding your reputation and freeing up HR
            resources, EPFDesk delivers expert-led, full-service ESIC management
            within 24–48 hours.
          </p>
        </div>
        <img
          src="/images/esic-compailance.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const lwfCards = [
  {
    title: "Facilitating Employee Access to LWF Welfare Schemes",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/lwf-welfare.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Facilitating Employee Access to LWF Welfare Schemes
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We facilitate seamless access to Labour Welfare Fund (LWF)
            benefits—including medical care, educational scholarships, housing
            support, skill development programs, and social security
            schemes—ensuring worker well-being and family upliftment through
            state-backed initiatives.
          </p>
        </div>
        <img
          src="/images/lwf-welfare.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Why Companies Trust LWF Compliance with EPFDesk.com",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/lwf-compliance.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Companies Trust LWF Compliance with EPFDesk.com
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With 99.9% accuracy in LWF filings, zero audit failures in 5+ years,
            and 100% on-time submissions, we eliminate penalties and legal risks
            across state regulations. Our expert team ensures rapid 2–4 hour
            response times, delivering reliable, state-compliant LWF management.
          </p>
        </div>
        <img
          src="/images/lwf-compliance.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)",
    description: "Reduce HR admin burden.",
    image: "/images/lwf-goLive.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial assessment to full portal setup, we ensure secure data
            integration, multi-state board linkage, and quick HR
            orientation—enabling smooth, compliant LWF operations tailored to
            your organization’s footprint.
          </p>
        </div>
        <img
          src="/images/lwf-goLive.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Key Employer LWF Concerns We Resolve",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/lwf-concern.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Key Employer LWF Concerns We Resolve:
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle everything from determining LWF applicability and
            registration to accurate contribution calculations, timely filings,
            and remittance. Our expert team ensures audit readiness, digital
            compliance, and seamless coordination across multiple state-specific
            LWF regulations.
          </p>
        </div>
        <img
          src="/images/lwf-concern.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title:
      "Employee LWF Benefits Support We Ensure (by facilitating eligibility)",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/lwf-benefits.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Employee LWF Benefits Support We Ensure (by facilitating
            eligibility)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Employees gain access to medical care, educational scholarships,
            emergency financial aid, marriage and funeral support, as well as
            opportunities for skill development and recreational
            activities—ensuring holistic well-being through Labour Welfare Fund
            provisions.
          </p>
        </div>
        <img
          src="/images/lwf-benefits.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const slideLWF = {
  sectionTitle: "Comprehensive Labour Welfare Fund Compliance Services",
  sectionSubtitle: "LWF Applicability & Registration Across India",
  items: [
    {
      title: "Precise applicability assessment",
      desc: ` We accurately determine "LWF applicability rules India" for your establishment in each state, considering factors like employee thresholds (which vary significantly by state) and industry type`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "State-specific registration management",
      desc: `We guide you through and handle all steps for LWF registration with the respective State Labour Welfare Boards, ensuring timely and correct setup.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Multi-state coverage analysis",
      desc: `We manage the complexities for companies with branches in various states, ensuring compliance where "LWF is mandatory" and where it is "not applicable" (e.g., states like Uttar Pradesh, Bihar which may not have LWF)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Required documentation compilation",
      desc: `We assist in gathering and submitting all necessary documents for LWF registration and ongoing compliance in each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const lwfGridData = {
  title: "Accurate LWF Contribution Calculation & Payment",
  largeCard: {
    title: "Precision Contribution Calculation",
    desc: `We accurately determine "how much is the LWF contribution" for both employer and employee shares, navigating varying "LWF contribution rates by state" (e.g., Maharashtra, Karnataka, Delhi)`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We precisely identify "what salary components are included in LWF wages" and whether "LWF deduction is on gross salary or basic," aligning with each state's specific LWF Act.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "State-specific Wage Inclusion",
    },
    {
      title: `We track and ensure correct deduction based on the state's mandate – whether monthly, half-yearly, or annually, clarifying queries like "What is the frequency of LWF deduction?"`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Deduction Frequency Management",
    },
    {
      title: ` We generate accurate LWF challans and support "online LWF payments" where available, ensuring deposits are made well before the varied "LWF due dates" for each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Timely Payment Facilitation",
    },
  ],
};

export const lwfPlustabs = {
  title: "Seamless LWF Returns & Data Management",
  tabs: [
    {
      id: "analytics",
      label: "State-Specific Return Filing",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We manage the entire "LWF return filing process" using the correct
            "LWF forms" (e.g., Form A, Form F, Form A-1, which vary by state)
            with accuracy and punctuality as per each state's deadline.
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Employee Data Management",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We ensure all employee data relevant for LWF contributions is
            accurately maintained and updated, handling nuances like wage
            thresholds and employee categories for applicability in each state.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Digital Record Keeping",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We maintain meticulous digital records of all LWF challans, payment
            receipts, and filed returns, creating a robust audit trail for
            future reference.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Online Portal Navigation",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We expertly manage interactions with various State Labour Welfare
            Board online portals, ensuring accurate data reflection and complete
            submissions across diverse systems.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const lwfMiddletabsData = {
  title: "Proactive LWF Regulatory Advisory & Risk Mitigation",
  tabs: [
    {
      id: "library",
      title: "Continuous Regulatory Monitoring",
      desc: `Our dedicated experts continuously monitor the highly fragmented "LWF Act states India" for any new amendments, circulars, or rate changes from each respective State Labour Welfare Board.`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact Analysis & Strategic Advice",
      desc: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and "penalties for noncompliance with LWF.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty Prevention Strategies",
      desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit Readiness Support",
      desc: " We provide complete assistance for any LWF inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const pfCards = [
  {
    title: "Unmatched PT Expertise & Zero-Risk Compliance Across States",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/pt-expertise.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Unmatched PT Expertise & Zero-Risk Compliance Across States
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With 99.9% accuracy, zero audit failures over 5+ years, and 100%
            on-time PT filings, we eliminate penalties and audit risks across
            state jurisdictions. Our experts ensure fast 2–4 hour response times
            and seamless, compliant Professional Tax management.
          </p>
        </div>
        <img
          src="/images/pt-expertise.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Complete HR & Finance Team Liberation",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/hr-liberation.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Complete HR & Finance Team Liberation
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We reduce admin workload by up to 85%, eliminate penalties and legal
            risks across states, and protect your brand’s compliance reputation.
            Our streamlined PT management enables HR and Finance teams to focus
            on strategic growth instead of navigating complex state tax systems.
          </p>
        </div>
        <img
          src="/images/hr-liberation.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)",
    description: "Reduce HR admin burden.",
    image: "/images/rapid-implementation.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial consultation to full service activation within 24–48
            hours, we handle secure data integration, multi-state tax portal
            setup, and HR/Finance team orientation—ensuring seamless, compliant
            Professional Tax operations from day one.
          </p>
        </div>
        <img
          src="/images/rapid-implementation.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Dedicated Ongoing Support for Continuous Multi-State Adherence",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/lwf-concern.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Dedicated Ongoing Support for Continuous Multi-State Adherence
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Get a dedicated client manager, timely compliance reports, rapid
            query resolution, and proactive regulatory updates—ensuring smooth,
            transparent, and fully informed Professional Tax management across
            all operating states.
          </p>
        </div>
        <img
          src="/images/lwf-concern.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Key Employer PT Concerns We Resolve",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/lwf-benefits.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Key Employer PT Concerns We Resolve
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle end-to-end Professional Tax compliance—from applicability
            assessment and state-wise registration to accurate contribution
            calculation, timely filings, and digital remittance. Our expert team
            ensures audit readiness, eliminates risks, and manages multi-state
            compliance seamlessly across PTEC and PTRC requirements.
          </p>
        </div>
        <img
          src="/images/lwf-benefits.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const ptPlustabs = {
  title: "PT Applicability & Registration Across India",
  tabs: [
    {
      id: "analytics",
      label: "Precise applicability assessment",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We accurately determine "Is professional tax mandatory in all states
            in India?" and identify "Which states have professional tax in
            India" relevant to your business operations. We assess applicability
            based on employee count, income thresholds, and specific state laws
            (e.g., in Maharashtra, Karnataka, West Bengal, Gujarat, Tamil Nadu,
            Telangana, Kerala)
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "State-specific registration management",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We guide you through and handle all steps for the "Professional tax
            registration online process," ensuring you obtain the correct
            Professional Tax Registration Certificate (PTRC) for employers or
            Professional Tax Enrollment Certificate (PTEC)for the establishment,
            within statutory timelines.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Required documentation compilation",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We assist in gathering and submitting all necessary "documents
            required for professional tax registration," streamlining the
            initial setup for each applicable state.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Coverage analysis for evolving operations",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We provide insights into "Professional tax enrollment certificate
            (PTEC) vs registration certificate (PTRC)" and manage compliance as
            your workforce or business locations change.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const slidesPt = {
  sectionTitle: " Comprehensive Professional Tax Compliance Services",
  sectionSubtitle: "Accurate PT Contribution Calculation & Payment",
  items: [
    {
      title: "Precision Contribution Calculation",
      desc: `We accurately determine "how to calculate professional tax on salary" for both employer and employee shares, meticulously applying varying "Professional tax slab rates by state" (e.g., "Maharashtra professional tax slab," "Karnataka PT slab rates").`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Correct Wage Component Inclusion",
      desc: `We precisely identify whether "professional tax is deducted from gross salary or basic salary," aligning with each state's specific PT Act and ensuring accurate calculation against the "professional tax exemption limit" (minimum salary threshold).`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Deduction Frequency Management",
      desc: "We track and ensure correct deduction based on the state's mandate, whether monthly, half-yearly, or annually, clarifying complex scenarios like higher February deductions in Maharashtra.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Timely Payment Facilitation",
      desc: ` We generate accurate PT challans and support "how to pay professional tax online," ensuring deposits are made well before the varied "Professional tax due dates by state" (e.g., 20th of succeeding month in Karnataka, 15th in Gujarat)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const ptGridData = {
  title: "Seamless PT Returns & Data Management",
  largeCard: {
    title: "State-Specific Return Filing",
    desc: `We manage the entire "Professional tax return filing online"process, using the correct "PT return forms by state" (e.g., Form III for Maharashtra) with 100% accuracy and punctuality as per each state's varied deadlines.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We ensure all employee data relevant for PT contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Employee Data Management",
    },
    {
      title: `We maintain meticulous digital records of all PT challans, payment receipts, and filed returns, creating a robust audit trail for future reference and addressing queries about "Professional tax challan download.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Digital Record Keeping",
    },
    {
      title: `We expertly manage interactions with various State Tax Department online portals (the "professional tax login portal state wise"), ensuring accurate data reflection and complete submissions across diverse systems.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Online Portal Navigation",
    },
  ],
};

export const ptMiddletabsData = {
  title: "Proactive PT Regulatory Advisory & Risk Mitigation",
  tabs: [
    {
      id: "library",
      title: "Continuous regulatory monitoring",
      desc: `Our dedicated experts continuously monitor the highly fragmented Professional Tax Acts for any new amendments, circulars, or rate changes from each respective state.`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact Analysis & Strategic Advice",
      desc: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and "consequences of not paying professional tax`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty prevention strategies",
      desc: ` We implement proactive measures to safeguard against "penalty for late professional tax payment" (which can be daily fines or percentage of tax due) and other forms of "legal action for PT non-compliance.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit readiness support",
      desc: " We provide complete assistance for any Professional Tax inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const slidesLanding = {
  // sectionTitle: "Why Companies Trust EPFDesk.com",
  // sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Monthly Compliance Panic",
      desc: `You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.`,
      img: "/images/Test_Compliance.png",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Employee Frustration & HR Burnout",
      desc: "Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI calibration",
    },
    {
      title: "Statutory penalties and audit risk.",
      desc: "Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI writing assistant",
    },
    {
      title: "The Cost of Lost Productivity and Focus.",
      desc: `HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI team trends",
    },
  ],
};

export const slidesStacking = {
  // sectionTitle: "Why Companies Trust EPFDesk.com",
  // sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Hands-on Government Expertise",
      desc: `Our team combines deep portal expertise with on-ground EPFO office experience, legal knowledge, and proven audit handling capabilities. From complex registrations and deregistrations to navigating ever-changing compliance procedures, our experts have mastered every aspect of statutory compliance.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Nationwide Operational Footprint",
      desc: "Our offices across major metros and presence in almost all states ensure seamless statutory compliance support wherever your business operates. Your employees can access social security benefits without geographical barriers.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI calibration",
    },
    {
      title: "Proactive Regulatory Guidance",
      desc: "We monitor every update in EPFO, ESIC, PT, and LWF laws. Our team ensures your company is compliant before new mandates take effect—no surprises, no gaps.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Dedicated Client Managers",
      desc: `Your assigned manager becomes an extension of your team, managing all compliance obligations proactively so you can focus on growth. No missed deadlines, no stress—just total confidence.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI team trends",
    },
  ],
};

export const heroSlides = [
  {
    id: 1,
    gradientClass:
      "linear-gradient(to bottom right, #818cf8, #a855f7, #6b21a8)",
    icon: "🚀",
    title:
      "ESIC Compliance: Effortless Management for Employee Well-being & Business Protection",
    subtitle:
      "Master ESIC compliance with EPFDesk.com. We handle registration, accurate contributions, monthly filings & ensure all employee benefits. Avoid penalties, achieve 99.9% accuracy, and empower your HR.",
  },
  {
    id: 2,
    gradientClass:
      "linear-gradient(to bottom right, #f472b6, #ec4899, #ef4444)",
    icon: "🎯",
    title: "EPFDesk: Your Direct Line to Effortless EPF Solutions & Support",
    subtitle:
      "EPFDesk empowers your employees with instant EPF query resolution via email. Check balance, track claims, update KYC – all issues handled by our experts. Free your HR team from daily EPF queries.",
  },
  {
    id: 3,
    gradientClass:
      "linear-gradient(to bottom right, #60a5fa, #38bdf8, #22d3ee)",
    icon: "⚡",
    title:
      "Labour Welfare Fund (LWF) Compliance: Navigating State Nuances for Flawless Adherence",
    subtitle:
      "Master LWF compliance across India with EPFDesk.com. We handle state-specific calculations, filings & ensure timely adherence. Avoid penalties, achieve 100% accuracy for LWF.",
  },
  {
    id: 4,
    gradientClass:
      "linear-gradient(to bottom right, #4ade80, #2dd4bf, #34d399)",
    icon: "🌟",
    title:
      "Professional Tax Compliance: Master Multi-State Nuances, Ensure Flawless Adherence",
    subtitle:
      "Master Professional Tax compliance across India with EPFDesk.com. We handle state-specific calculations, precise filings, and ensure timely adherence. Avoid penalties, achieve 100% accuracy for PT.",
  },
  {
    id: 5,
    gradientClass:
      "linear-gradient(to bottom right, #fb7185, #f9a8d4, #facc15)",
    icon: "🤝",
    title:
      "Employer EPF Management: Streamline Your Compliance & Unleash HR's Potential",
    subtitle:
      "Master employer EPF compliance with EPFDesk.com. We automate challans, manage filings & mitigate risks, freeing your HR & Finance teams for strategic growth. Expert-led solutions for Indian businesses.",
  },
  {
    id: 6,
    gradientClass:
      "linear-gradient(to bottom right, #b19cd9, #c8a8e9, #8ec5d6, #7fb3d3)",
    icon: "🛡️",
    title: `POSH Act Compliance: Fostering Safe
Workplaces, Ensuring Legal Integrity`,
    subtitle: `EPFdesk.com offers expert POSH Act compliance in India, including
a dedicated 3rd-party complaint hotline. Establish IC, conduct training, handle
complaints & ensure 100% adherence to POSH Act 2013 for safe workplaces.`,
  },
  {
    id: 7,
    gradientClass:
      "linear-gradient(to bottom right, #ddd6fe, #c4b5fd, #fbcfe8)",
    icon: "👁️",
    title: `Labour & HR Registrations & Licenses:
Master Multi-State Compliance,
Eliminate Risk`,
    subtitle: `Workforce Limited offers expert Labour & HR Registrations &
Licenses services in India. We handle Shop Act, CLRA, Factories Act, Contract Labour,
BOCW, and all mandatory renewals. Ensure compliance, avoid penalties.`,
  },
  {
    id: 8,
    gradientClass:
      "linear-gradient(to bottom right, #fca5a5, #fdba74, #fcd34d)",
    icon: "🌟",
    title: `Hospitality Compliance: The Hidden 
Cost of Guest Experience`,
    subtitle: ` Workforce Limited offers specialized compliance for restaurants & 
hotels. Master EPF, ESIC, POSH & labor laws. We protect your brand and manage high 
attrition, from a single outlet to a national chain.`,
  },
];

export const verticalCardsEsic = {
  mainTitle: "Comprehensive ESIC Compliance Management Services",
  mainSubtitleVer: "ESIC Registration & Applicability Management",
  subText:
    "Ensure your establishment is correctly registered and continuously compliant with ESIC regulations from day one.",
  cardsVer: [
    {
      title: "Monthly ESIC return filing",
      subtitle: `We manage the entire ESIC return filing process with 100% accuracy and punctuality before the 15th of the following month deadline.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Employee data updates & IP Management",
      subtitle: `We handle how to update employee details in ESIC portal by employer, ensuring accurate records for your workforce, including generating ESIC Code number (17-digit ID) and managing ESIC login for insured person access.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Employer Portal Navigation",
      subtitle: `We expertly manage all interactions on the ESIC employer login portal, ensuring accurate data reflection, complete submissions, and efficient grievance management like EPFiGMS`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Contribution Period Tracking",
      subtitle: `We meticulously track ESIC Contribution Period vs. Cash Benefit Period to maintain continuous coverage for your employees, even if salaries briefly exceed the ceiling.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Swift, accurate ESIC registration, guaranteed applicability compliance,
and complete protection from non-registration penalties and legal repercussions.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsEsic = {
  mainSubtitleHor: "Seamless Monthly Filings & Employee Data Management",
  subTextHor:
    "Ensure flawless record-keeping, simplified portal interactions, and comprehensive employee data updates for continuous compliance.",
  cardsHor: [
    {
      title: "Complete ESIC registration process",
      subtitle: `We guide you through and meticulously handle all steps for ESIC registration process online India, including online application, documentation, and swift ESIC code allocation.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Precise applicability assessment",
      subtitle: `We accurately determine Who is eligible for ESIC registration? based on employee count 10+ or 20+ depending on state and wage limits, ensuring correct and ongoing coverage without a hitch.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Rapid average response time 2-4 hours for client queries",
      subtitle:
        "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Required documentation compilation",
      subtitle: `We assist in gathering and submitting all documents required for ESIC registration, streamlining the initial setup within statutory time limits.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Coverage continuity management",
      subtitle: `We advise on crucial aspects like the once covered, always covered rule, ensuring compliance even if the number of employees temporarily goes below the minimum limit.`,
      icon: "⚡",
      bubble: "Empower!",
      bg: "bg-gradient-to-br from-[#84fab0] to-[#8fd3f4]",
    },
    {
      title: "Your Benefit",
      subtitle:
        "Effortless monthly compliance, accurate employee records for seamless benefit access, and eliminated administrative burden on your HR teams for ESIC data management.",
      icon: "❤️",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
  ],
};

export const largeCardsEsic = {
  subTitle: "Proactive Regulatory Updates & Risk Management",
  subText:
    "Stay ahead of ESIC law changes with expert guidance that prevents costly non-compliance and transforms risks into strategic advantages.",
  cards: [
    {
      title: "Continuous regulatory monitoring",
      subtitle:
        "Our dedicated experts meticulously monitor the latest ESIC Act amendments, ESIC circulars, and ESIC contribution rate changes.",
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Impact analysis & strategic advice",
      subtitle:
        "We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the consequences of ESIC non-compliance.",
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Penalty prevention strategies",
      subtitle:
        "We implement proactive measures to safeguard against what happens if employer does not pay ESIC contribution? and other common non-compliance scenarios.",
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Audit readiness support",
      subtitle:
        "We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation",
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Perpetual compliance, complete penalty protection, and the strategic
advantage of early adaptation to regulatory shifts, maintaining your business's integrity
and reputation.`,
      icon: "❤️",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const pastelCardsEsic = {
  subTitle: "Accurate ESIC Contribution Calculation & Payment",
  subText:
    "Eliminate calculation errors and ensure timely payments, rigorously protecting your business from penalties and interest.",
  cards: [
    {
      title: "Precision contribution calculation",
      subtitle: `We perform accurate ESIC calculation on salary using the current ESIC contribution rate employer and employee, Employer: 3.25%, Employee: 0.75% and the ESIC wage ceiling current ₹21,000 for general employees, ₹25,000 for persons with disabilities.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Correct wage component inclusion",
      subtitle: `We meticulously identify and include all applicable salary components for ESIC wages (Basic, DA, HRA, CCA, production incentive, night shift, meal/food allowance), ensuring ESIC is deducted on gross salary, not just basic.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Exemption management",
      subtitle: `We accurately identify and manage exemptions from ESIC contributions for low-wage employees daily wage up to ₹176, optimizing your deductions while remaining compliant.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Timely payment facilitation",
      subtitle: `We generate accurate ESIC challan online and support how to pay ESIC contribution online, guaranteeing deposits are made well before the Monthly ESIC return filing deadline`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Zero calculation errors, robust protection from penalty for late ESIC
payment including 12% interest and damages, optimized contribution accuracy, and
guaranteed timely payments.`,
      icon: "❤️",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const verticalCardsLwf = {
  mainTitle: "Comprehensive Labour Welfare Fund Compliance Services",
  mainSubtitleVer: "LWF Applicability & Registration Across India",
  subText: `Ensure your establishment is correctly registered and always compliant with each state's LWF Act.`,
  cardsVer: [
    {
      title: "Precise applicability assessment",
      subtitle: ` We accurately determine LWF applicability rules India for your establishment in each state, considering factors like employee thresholds which vary significantly by state and industry type`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "State-specific registration management",
      subtitle: `We guide you through and handle all steps for LWF registration with the respective State Labour Welfare Boards, ensuring timely and correct setup.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Multi-state coverage analysis",
      subtitle: `We manage the complexities for companies with branches in various states, ensuring compliance where LWF is mandatory and where it is not applicable states like Uttar Pradesh, Bihar which may not have LWF`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Required documentation compilation",
      subtitle: `We assist in gathering and submitting all necessary documents for LWF registration and ongoing compliance in each state.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Guaranteed LWF applicability compliance across all your operational
locations, seamless registration, and complete protection from non-registration
penalties.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsLwf = {
  mainSubtitleHor: "Accurate LWF Contribution Calculation & Payment",
  subTextHor:
    "Eliminate calculation errors and ensure timely payments based on diverse state-specific rules.",
  cardsHor: [
    {
      title: "Precision Contribution Calculation",
      subtitle: `We accurately determine how much is the LWF contribution for both employer and employee shares, navigating varying LWF contribution rates by state Maharashtra, Karnataka, Delhi`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "State-specific Wage Inclusion",
      subtitle: `We precisely identify what salary components are included in LWF wages and whether LWF deduction is on gross salary or basic, aligning with each state's specific LWF Act.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Deduction Frequency Management",
      subtitle: `We track and ensure correct deduction based on the state's mandate – whether monthly, half-yearly, or annually, clarifying queries like What is the frequency of LWF deduction?`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Timely Payment Facilitation",
      subtitle: ` We generate accurate LWF challans and support online LWF payments where available, ensuring deposits are made well before the varied LWF due dates for each state.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Your Benefit",
      subtitle: `Zero calculation errors, accurate contributions aligned with each
state's unique rules, and robust protection from penalties for late LWF payments.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsLwf = {
  subTitle: "Seamless LWF Returns & Data Management",
  subText:
    "Ensure flawless record-keeping, simplified portal interactions, and comprehensive employee data updates for continuous compliance.",
  cards: [
    {
      title: "State-Specific Return Filing",
      subtitle: `We manage the entire LWF return filing process using the correct LWF forms (Form A, Form F, Form A-1, which vary by state) with accuracy and punctuality as per each state's deadline.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Data Management",
      subtitle: `We ensure all employee data relevant for LWF contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Digital Record Keeping",
      subtitle: `We maintain meticulous digital records of all LWF challans, payment receipts, and filed returns, creating a robust audit trail for future reference.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Online Portal Navigation",
      subtitle: `We expertly manage interactions with various State Labour Welfare Board online portals, ensuring accurate data reflection and complete submissions across diverse systems.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Effortless monthly/periodic compliance, accurate employee records
for LWF benefits, and reduced administrative burden on your HR and Finance
teams.`,
      icon: "❤️",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsLwf = {
  subTitle: "Proactive LWF Regulatory Advisory & Risk Mitigation",
  subText:
    "Stay ahead of LWF law changes and safeguard your business from the costly consequences of non-compliance across multiple states.",
  cards: [
    {
      title: "Continuous Regulatory Monitoring",
      subtitle: `Our dedicated experts continuously monitor the highly fragmented LWF Act states India for any new amendments, circulars, or rate changes from each respective State Labour Welfare Board.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Impact Analysis & Strategic Advice",
      subtitle: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and penalties for noncompliance with LWF.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Penalty Prevention Strategies",
      subtitle: `We implement proactive measures to safeguard against what happens if employer does not pay ESIC contribution? and other common non-compliance scenarios.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Audit Readiness Support",
      subtitle: `We provide complete assistance for any LWF inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Perpetual compliance across all applicable states, complete
protection from penalties and legal repercussions, and the strategic advantage of
early adaptation to unique state-specific regulatory shifts.`,
      icon: "❤️",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const verticalCardsPf = {
  mainTitle: "Comprehensive Professional Tax Compliance Services",
  subTitleVer: `Our end-to-end PT solution eliminates administrative burdens, ensures flawless
regulatory adherence, and provides complete peace of mind for your multi-state
operations.`,
  mainSubtitleVer: "Accurate PT Contribution Calculation & Payment",
  subText:
    "Eliminate calculation errors and ensure timely payments based on diverse, statespecific slab rates and rules, protecting your business from costly penalties.",
  cardsVer: [
    {
      title: "Precision Contribution Calculation",
      subtitle: `We accurately determine how to calculate professional tax on salary for both employer and employee shares, meticulously applying varying Professional tax slab rates by state Maharashtra professional tax slab, Karnataka PT slab rates.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Correct Wage Component Inclusion",
      subtitle: `We precisely identify whether professional tax is deducted from gross salary or basic salary, aligning with each state's specific PT Act and ensuring accurate calculation against the professional tax exemption limit (minimum salary threshold).`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Deduction Frequency Management",
      subtitle: `We track and ensure correct deduction based on the state's mandate, whether monthly, half-yearly, or annually, clarifying complex scenarios like higher February deductions in Maharashtra.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Timely Payment Facilitation",
      subtitle: ` We generate accurate PT challans and support how to pay professional tax online, ensuring deposits are made well before the varied Professional tax due dates by state 20th of succeeding month in Karnataka, 15th in Gujarat`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Zero calculation errors, accurate contributions aligned with each
state's unique rules, and robust protection from penalty for late professional tax
payment and associated interest.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsPf = {
  mainSubtitleHor: "PT Applicability & Registration Across India",
  subTextHor:
    "Ensure your establishment is correctly registered and continuously compliant with Professional Tax regulations in every applicable state.",
  cardsHor: [
    {
      title: "Precise applicability assessment",
      subtitle: `We accurately determine Is professional tax mandatory in all states in India? and identify Which states have professional tax in India relevant to your business operations. We assess applicability based on employee count, income thresholds, and specific state laws in Maharashtra, Karnataka, West Bengal, Gujarat, Tamil Nadu, Telangana, Kerala`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "State-specific registration management",
      subtitle: `We guide you through and handle all steps for the Professional tax registration online process, ensuring you obtain the correct Professional Tax Registration Certificate (PTRC) for employers or Professional Tax Enrollment Certificate (PTEC)for the establishment, within statutory timelines.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Required documentation compilation",
      subtitle: `We assist in gathering and submitting all necessary documents required for professional tax registration, streamlining the initial setup for each applicable state.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Coverage analysis for evolving operations",
      subtitle: ` We provide insights into Professional tax enrollment certificate (PTEC) vs registration certificate (PTRC) and manage compliance as your workforce or business locations change.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Your Benefit",
      subtitle: `Swift, accurate Professional Tax registration across all applicable
states, guaranteed applicability compliance, and complete protection from nonregistration
penalties.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsPf = {
  subTitle: "Seamless PT Returns & Data Management",
  subText:
    "Ensure flawless record-keeping, simplified portal interactions, and comprehensive employee data updates for continuous compliance.",
  cards: [
    {
      title: "State-Specific Return Filing",
      subtitle: `We manage the entire "Professional tax return filing online process, using the correct PT return forms by state (Form III for Maharashtra) with 100% accuracy and punctuality as per each state's varied deadlines.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Data Management",
      subtitle: `We ensure all employee data relevant for PT contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Digital Record Keeping",
      subtitle: `We maintain meticulous digital records of all PT challans, payment receipts, and filed returns, creating a robust audit trail for future reference and addressing queries about Professional tax challan download.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Online Portal Navigation",
      subtitle: `We expertly manage interactions with various State Tax Department online portals the professional tax login portal state wise, ensuring accurate data reflection and complete submissions across diverse systems.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Effortless monthly/periodic compliance, accurate employee records
for PT purposes, and reduced administrative burden on your HR and Finance teams.`,
      icon: "❤️",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsPf = {
  subTitle: "Proactive PT Regulatory Advisory & Risk Mitigation",
  subText:
    "Stay ahead of Professional Tax law changes and safeguard your business from the costly consequences of non-compliance across multiple states.",
  cards: [
    {
      title: "Continuous Regulatory Monitoring",
      subtitle: `Our dedicated experts continuously monitor the highly fragmented Professional Tax Acts for any new amendments, circulars, or rate changes from each respective state.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Impact Analysis & Strategic Advice",
      subtitle: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and consequences of not paying professional tax`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Penalty Prevention Strategies",
      subtitle: `We implement proactive measures to safeguard against penalty for late professional tax payment which can be daily fines or percentage of tax due and other forms of legal action for PT non-compliance.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Audit Readiness Support",
      subtitle: `We provide complete assistance for any Professional Tax inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Perpetual compliance across all applicable states, complete
protection from penalties and legal repercussions, and the strategic advantage of
early adaptation to unique state-specific regulatory shifts.`,
      icon: "❤️",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const verticalCardsDesk = {
  mainTitle: "Complete Employee EPF Support Platform",
  subTitleVer: `Our comprehensive platform empowers your workforce with instant access to EPF
expertise, ensuring their peace of mind while completely liberating your HR team from
administrative queries.`,
  mainSubtitleVer: "Effortless Employee Access (24/7 via Email)",
  subText:
    "Give your employees direct, secure access to EPF expertise anytime, anywhere, fostering self-service and reducing reliance on HR.",
  cardsVer: [
    {
      title: "Dedicated Query Email Address",
      subtitle: `Employees simply email their EPF
questions or issues to a designated, secure EPFDesk email address. This means no
new logins or portals for them to remember.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "User-Friendly Initiation",
      subtitle: `The process is as simple as sending an email,
making expert support accessible to all employees, regardless of technical
skill.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Mobile-Responsive Convenience",
      subtitle: `Employees can submit queries from
any device where they access their email – desktop, tablet, or smartphone
– ensuring support is always at their fingertips.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Instant Expert Engagement",
      subtitle: `Employees get immediate access to EPF expertise without needing HR intervention, streamlining their journey from query to resolution.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    // {
    //   title: "Coaching for when HR can’t be everywhere",
    //   subtitle: `71% of HR leaders don’t think they are effectively developing midlevel leaders.`,
    //   icon: "🧭",
    //   bubble: "Shine!",
    //   bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    // },
    {
      title: "Employee Benefits",
      subtitle: `Round-the-clock EPF support via a familiar communication
method, intuitive initiation, secure data handling via email, and mobile
convenience, enhancing their overall experience.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsDesk = {
  mainSubtitleHor: "Streamlined Query Management & Tracking System",
  subTextHor:
    "Employees can resolve any EPF issue with guided, transparent processes, ensuring they are always informed.",
  cardsHor: [
    {
      title: "Unique Ticket Creation per Email",
      subtitle: `Every incoming employee email
automatically generates a unique ticket ID. Employees receive an instant
auto-response confirming receipt and providing this ID for future
reference.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Expert-Guided Resolution",
      subtitle: `Our dedicated specialists immediately begin
working on the query. This includes common issues like How to check
EPF balance online, How to activate UAN, How to update EPF
KYC, and EPF withdrawl process.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Real-time Progress Updates (via Email)",
      subtitle: `Employees receive proactive
updates via email as their ticket progresses through the resolution stages,
keeping them fully informed without having to manually check a portal.
This includes status changes and estimated resolution timelines.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Comprehensive Issue Coverage",
      subtitle: `Our system handles a vast range of concerns, from simple queries How to download EPF passbook to more complex EPF transfer cases and pension-related inquiries.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Employee Benefits",
      subtitle: `Clear process guidance, complete transparency via email,
proactive updates on resolution status, and expert resolution for any EPF
complexity, from UAN login issues to name mismatch in EPF account.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsDesk = {
  subTitle: "Expert-Led Resolution & Direct EPFO Liaison",
  subText:
    "Our specialized teams handle every complexity directly with EPFO, ensuring accurate resolutions and completely liberating your HR from individual employee EPF issues.",
  cards: [
    {
      title: "Dedicated EPF Specialists",
      subtitle: `Our team comprises seasoned professionals who take full ownership of each employee query, specializing in accurate resolutions for issues like Why is my EPF passbook not updated? or What to do if employer is not depositing PF?`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Direct EPFO Communication Channels",
      subtitle: `We utilize established channels
for faster resolution and documentation exchange with the Employees'
Provident Fund Organisation (EPFO), eliminating the need for your HR to
act as a middleman.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Complex Case Management",
      subtitle: `Our expertise extends to intricate cases such as inter-company EPF transfers, legacy account merging, pension payment processing, and resolving discrepancies in contribution claims.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Complete Resolution Lifecycle",
      subtitle: `We manage the entire resolution journey, from the initial query submission to final settlement or problem closure, including necessary employer attestation for EPF transfer claims and approval of online EPF claims from an employer's perspective.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Business Benefits",
      subtitle: `Zero HR involvement required for individual EPF issues, access to expert problem-solving,
efficient direct EPFO liaison, and comprehensive issue resolution that covers all angles, including potential tax
implications on EPF withdrawal.`,
      icon: "❤️",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsDesk = {
  subTitle: "Nationwide On-Ground Support for Unresolved Cases",
  subText:
    "For issues requiring physical interaction or specialized presence, our local teams are there to ensure complete resolution.",
  cards: [
    {
      title: "Local Teams Across Major Metros",
      subtitle: `Unlike purely online services, our on-ground teams in key Indian cities including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune provide invaluable physical support where it matters most.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "In-Person EPFO Office Representation",
      subtitle: `For complex or unresolved cases that mandate direct interaction, submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective resolution. This addresses queries related to EPFO portal usage and employer's guide to EPFiGMS.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Physical Verification Assistance",
      subtitle: `When required by EPFO processes for certain withdrawal claims or death claim processing, our teams provide on-ground assistance for physical verification, bridging any logistical gaps.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Guaranteed Case Closure",
      subtitle: `This unique capability ensures even the most challenging or bureaucratic EPF issues are resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const verticalCardsEpfo = {
  mainTitle: "Why Companies Trust EPFDesk.com",
  mainSubtitleVer: "Unmatched Expertise & Zero-Error Accuracy",
  subText:
    "Our commitment to precision is foundational to your peace of mind and protection against non-compliance penalties.",
  cardsVer: [
    {
      title: "Consistently high accuracy rate in EPF filings 99.9%",
      subtitle: `Our multi-layered validation and expert review process minimizes discrepancies, significantly reducing interest on delayed EPF contributions for your business`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Zero audit failures across our client portfolio for 5+ years",
      subtitle: `A testament to our robust processes and unwavering commitment to compliance integrity, offering true peace of mind.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Rapid average response time 2-4 hours for client queries",
      subtitle: `Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "100% deadline adherence for all submissions",
      subtitle: `Protecting you from legal consequences of EPF non-compliance and preserving your organization's reputation.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const horizontalCardsEpfo = {
  mainSubtitleHor: "Complete HR & Finance Team Liberation",
  subTextHor:
    "Reclaim valuable HR and Finance bandwidth, redirecting it towards your organizational growth.",

  cardsHor: [
    {
      title: "Liberating HR & Finance Teams from Compliance Overload",
      subtitle: `Our platform handles end-to-end compliance and employee support, enabling your internal teams to focus on strategic priorities instead of repetitive administrative tasks.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Productivity Boost",
      subtitle: `Up to 90% reduction in compliance-related admin tasks: freeing up hours spent on manual work, resulting in measurable productivity gains.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Fast Onboarding",
      subtitle: `80% faster onboarding process: our team handles EPF complexities so HR can onboard new hires swiftly without delays.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Penalty-Free Compliance",
      subtitle: `100% elimination of penalty & interest risks: Never worry about what if employer does not deposit PF — we ensure flawless and timely compliance.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Query Deflection",
      subtitle: `75% reduction in employee queries to HR: EPF Desk enables self-service, reducing the burden on HR teams.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsEpfo = {
  subTitle: "Dedicated Support Team",
  subText:
    "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Dedicated Client Manager",
      subtitle: `A single point of contact who understands your specific account and compliance needs, ensuring personalized service.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Monthly Compliance Reports & Insights",
      subtitle: `Regular updates on your compliance status and performance.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Immediate Resolution of EPF-related Queries",
      subtitle: `Your dedicated manager ensures any questions or issues are addressed promptly.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Proactive Communication on Regulatory Changes",
      subtitle: `You're informed of relevant updates, ensuring continuous compliance.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const pastelCardsEpfo = {
  subTitle: "Implementation & Support",
  subText:
    "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Initial Consultation",
      subtitle: `A brief session to understand your current EPF setup and specific needs.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Secure Portal Integration",
      subtitle: `Our team manages the secure integration with relevant EPFO portals and gathers necessary access details.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Brief Team Orientation",
      subtitle: `A quick, efficient orientation session with your relevant staff to ensure a smooth handover.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Full Service Activation",
      subtitle: `
Your EPF compliance is fully operational, seamlessly managed by EPFDesk.com experts within 24 hours.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const largeCardsLanding = {
  // subTitle: "Dedicated Support Team",
  cards: [
    {
      title: "Monthly Compliance Panic",
      subtitle: `You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Frustration & HR Burnout",
      subtitle: `Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Statutory penalties and audit risk.",
      subtitle: `Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Lost Productivity and Focus.",
      subtitle: `HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const pastelCardsLanding = {
  // subTitle: "Implementation & Support",
  cards: [
    {
      title: "Hands-on Government Expertise",
      subtitle: `Our team combines deep portal expertise with on-ground EPFO office experience, legal knowledge, and proven audit handling capabilities. From complex registrations and deregistrations to navigating ever-changing compliance procedures, our experts have mastered every aspect of statutory compliance.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Nationwide Operational Footprint",
      subtitle: `Our offices across major metros and presence in almost all states ensure seamless statutory compliance support wherever your business operates. Your employees can access social security benefits without geographical barriers.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Proactive Regulatory Guidance",
      subtitle: `We monitor every update in EPFO, ESIC, PT, and LWF laws. Our team ensures your company is compliant before new mandates take effect—no surprises, no gaps.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Dedicated Client Managers",
      subtitle: `
Your assigned manager becomes an extension of your team, managing all compliance obligations proactively so you can focus on growth. No missed deadlines, no stress—just total confidence.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const horizontalCardsLinks = [
  {
    title: "EPFdesk",
    subtitle:
      "Say goodbye to endless employee EPF queries. Our unique EPF Desk platform offers a direct, transparent channel for your workforce to resolve all their EPF issues. Our on-ground experts handle everything from status updates to complex EPFO interactions, allowing your HR to focus on core employee engagement.",
    icon: "🎯",
    link: "/epfdesk",
    bubble: "Focus!",
    gradient: "from-[#a18cd1] to-[#fbc2eb]",
    bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
  },

  {
    title: "EPF",
    subtitle:
      "Reclaim up to 90% of your HR's time spent on EPF administration. We meticulously handle monthly employee additions/deletions, precise challan creation, and all employer approvals, ensuring flawless compliance and freeing your teams for strategic growth.",
    icon: "🔍",
    link: "/epfManagement",
    bubble: "Discover!",
    gradient: "from-[#ff9a9e] to-[#fecfef]",
    bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
  },

  {
    title: "ESIC",
    subtitle:
      "Navigate the complexities of Employee State Insurance with ease. We meticulously handle all monthly ESIC contributions, filings, and regulatory updates, ensuring your complete adherence and freeing your team from this critical statutory burden.",
    icon: "🤝",
    link: "/esic",
    bubble: "Collaborate!",
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    bgs: ["bg-[#4ecdc4]", "bg-[#ffe66d]"],
  },
  // {
  //   title: "POSH",
  //   subtitle: `EPFdesk.com offers comprehensive POSH Act compliance services, including implementation, training, complaint redressal, advisory, and an independent complaint hotline. We ensure 100% adherence to the POSH Act 2013, fostering a safe, respectful workplace while protecting your organization’s reputation and legal integrity.`,
  //   icon: "🛡️",
  //   link: "/posh",
  //   bubble: "Impact!",
  //   gradient: "from-[#f093fb] to-[#f5576c]",
  //   bgs: ["bg-[#4ecdc4]", "bg-[#ffe66d]"],
  // },
  // {
  //   title: "LWF",
  //   subtitle:
  //     "Ensure flawless adherence to Labour Welfare Fund obligations across all your locations. We manage the diverse state-specific rates and periodic filings for LWF, simplifying this often-overlooked statutory requirement for your business.",
  //   icon: "⚡",
  //   link: "/lwf",
  //   bubble: "Empower!",
  //   gradient: "from-[#84fab0] to-[#8fd3f4]",
  //   bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
  // },
  // {
  //   title: "PT",
  //   subtitle:
  //     "Eliminate the headaches of varying state-specific Professional Tax laws. We provide accurate calculation, timely remittance, and meticulous filing for all applicable states, guaranteeing your PT compliance is always precise and penalty-free.",
  //   icon: "💡",
  //   link: "/pt",
  //   bubble: "Innovate!",
  //   gradient: "from-[#d4fc79] to-[#96e6a1]",
  //   bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
  // },
];

export const plansEpfManagement = {
  mainTitle: "Unlock the Strategic Value of Your HR Team",
  cards: [
    {
      title: "Complete HR Team Liberation",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Significant reduction 80% in daily EPF-related employee queries: Freeing up countless hours
 previously spent on routine tasks.`,
        `Valuable HR bandwidth reclaimed 15-20 hours monthly: Allowing your HR team to focus on strategic
 initiatives like talent acquisition, employee development programs, and fostering a vibrant workplace culture.`,
        `Eliminated EPFO liaison requirement: Your HR team no longer needs to be the middleman for individual
 employee EPF issues, reducing their administrative overhead.`,
        `Shift to Strategic Focus: Empowering HR to lead retention strategies, succession planning, and workplace
 culture building.`,
      ],
    },
    {
      title: "Enhanced Employee Experience & Satisfaction",
      //  icon: UsersIcon,
      features: [
        `Instant expert access: Employees experience swift resolution, eliminating frustration associated with delayed
 responses or unanswered questions.`,
        `Transparent resolution process: Builds confidence in how their EPF
matters are managed, as they can track progress in real-time via email
updates.`,
        `Professional support quality: The consistent and expert support enhances the perception of employer care
 and commitment to employee well-being.`,
        `Empowered workforce: Employees feel more in control and informed about their provident fund matters,
 leading to increased satisfaction and morale.`,
        `Business Impact: Higher employee satisfaction, increased trust in employer benefits, reduced workplace frustration,
and a positive impact on overall employee retention.`,
      ],
    },
    {
      title: "24-Hour System Activation",
      //  icon: UsersIcon,
      features: [
        `System Setup & Configuration: Our team handles the swift setup of
your company's dedicated EPFDesk email query system, customizing
routing and auto-responses as needed.`,
        `Employee Communication Kit Delivery: We provide easy-to-understand
usage guides and FAQs for your employees, explaining how to use the
new email system and what to expect.`,
        `Immediate System Availability: Your employees can begin emailing
queries and accessing expert support within 24 hours of onboarding
completion, experiencing instant value.`,
        //         `Immediate Platform Availability: Your employees can begin raising tickets and accessing expert support
        // within 24 hours of onboarding completion, experiencing instant value.`,
      ],
    },
    {
      title: "Seamless Integration & Proactive Management",
      //  icon: UsersIcon,
      features: [
        `Optional HR Dashboard: While we handle direct employee resolution, your HR team can access an optional
dashboard to monitor common query trends anonymized, view overall ticket resolution rates, and identify areas for
internal communication.`,
        `Dedicated Client Manager: You'll have an assigned client manager who serves as your single point of contact for
organizational-level support, reporting needs, and any high-level strategic consultations.`,
        `Continuous System Enhancement: We constantly enhance the EPFDesk platform based on user feedback, evolving
EPFO processes, and emerging employee needs, ensuring your employees always have access to the best support.`,
        `Scalable Solution: Our system and expert teams are built to handle everincreasing
query volumes, seamlessly growing with your workforce from midsized
companies to large enterprises.`,
      ],
    },
    {
      title: "Common Employee Issues We Resolve",
      //  icon: UsersIcon,
      features: [
        `EPF balance checking and passbook updates: Including How to check EPF balance online and resolving Why is
my EPF passbook not updated?`,
        `UAN activation, linking, and Aadhaar integration: Expert assistance with How to activate UAN, How to know
your UAN, and managing Common UAN login issues and solutions.`,
        `KYC document updates and verification: Guidance and processing for How to update EPF KYC and other member
profile corrections.`,
        `EPF withdrawal claims (partial and full settlement): Navigating EPF withdrawal rules and assisting with How
to withdraw EPF online and required documents.`,
        `EPF transfer between employers and states: Expertly managing the EPF transfer process to ensure seamless
continuity of funds.`,
        `Pension-related queries and processing: Understanding EPS benefits and assisting with How
to get EPS Scheme Certificate.`,
        `EPFO portal login issues and technical problems: Troubleshooting access and navigation for employees.`,
        `Name, date of birth, and contact detail corrections: Efficiently handling Name mismatch in EPF account and
Changing mobile number/email in EPF.`,
      ],
    },
    {
      title: "Complex Case Expertise",
      //  icon: UsersIcon,
      features: [
        `Inter-state EPF transfers with multiple previous employers and complex legacy
account merging.`,
        `Disputed contribution claims, discrepancies, and corrections with EPFO.`,
        `Physical document verification requirements and submission for specialized
cases.`,
        `Court case related EPF issues requiring specific liaison and documentation.`,
        `Deceased member claim processing, handled with sensitivity and expertise.`,
        `Addressing concerns like What to do if employer is not depositing PF? by
liaising with relevant authorities.`,
        //         `EPFO portal login issues and technical problems: Troubleshooting access and navigation for employees.`,
        //         `Name, date of birth, and contact detail corrections: Efficiently handling Name mismatch in EPF account and
        // Changing mobile number/email in EPF.`,
      ],
    },
  ],
};

export const epfManagementPlans = {
  mainTitle: "Comprehensive Employer EPF Compliance Services",
  cards: [
    {
      title: "Seamless Employee Lifecycle Management",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Monthly employee additions and deletions with immediate EPFO reflection: We precisely
manage your roster updates, ensuring compliance from day one for new hires and seamless
processing for exits. This addresses common employer queries about How to add new
employee in EPF and deletion of member.`,
        `Automated UAN generation and linking for all new hires within 24 hours: Swift UAN allocation
and linking to Aadhaar streamline onboarding and prevent delays. This directly answers How
to generate UAN for new employees and Linking Aadhaar with UAN by employer.`,
        `Complete employee data management and ongoing verification: We maintain pristine member
records, proactively correcting discrepancies and managing updates like name, DOB, and KYC
to mitigate future issues.`,
        `Expert coordination for exit formalities and final settlement processes: Ensuring smooth,
compliant EPF exits and seamless transfers for outgoing employees, simplifying the employer's
role in these crucial moments.`,
        `Your Benefit: Eliminate manual errors, significantly reduce HR workload, ensure day-one compliance
for every employee, and simplify member profile corrections and updates.`,
      ],
    },
    {
      title: "Automated Challan Generation & Payment Facilitation",
      //  icon: UsersIcon,
      features: [
        `Precision EPF challan creation validated against latest EPFO norms: Our system guarantees
accurate calculations for all employees, including complex scenarios like EPF calculation for
salary above ₹15,000, and ensures correct "EPF contribution breakdown for employer and
employee."`,
        `Automated contribution calculation based on basic wages as per EPF Act: We accurately
determine taxable components and ensure correct inclusion of salary components like
Dearness Allowance for EPF, clarifying What components of salary are included in EPF basic
wages?`,
        `Pre-submission validation to catch errors before filing: Our multi-layered checks identify
discrepancies before your monthly EPF ECR online filing, preventing costly mistakes and
addressing errors in ECR filing and how to correct them.`,
        `Payment timeline management with timely reminders and alerts: We ensure your contributions
are remitted well before the Monthly EPF return filing deadline 15th of every month,
completely protecting you from penalties for late EPF payment and interest charges.`,
        `Your Benefit: Near-zero calculation errors, guaranteed timely submissions, complete protection from
late payment penalties, and a simplified EPF challan generation process that protects your bottom
line.`,
      ],
    },
    {
      title: "Expert Regulatory Filings & Approvals",
      //  icon: UsersIcon,
      features: [
        `Accurate and timely monthly ECR (Electronic Challan-cum-Return) filing: We manage your core
monthly submission with utmost precision, streamlining How to file monthly EPF ECR online
for your team.`,
        `Comprehensive handling of all employer approvals, declarations, and annexures: Ensuring
every required document, including Nomination Form" and other necessary declarations, is
properly processed and uploaded.`,
        `Secure digital document management with ironclad audit trails: All filed records are securely
managed and easily retrievable, providing crucial support during any EPFO audit process for
employers" and helping you "prepare for an EPF inspection with confidence.`,
        `Proactive error detection and swift resubmission when needed: We identify and correct "errors
in ECR filing" promptly, ensuring continuous compliance and mitigating legal consequences of
EPF non-compliance.`,
        `Your Benefit: Flawless compliance records, stress-free EPFO audits, immediate document retrieval for
any inquiry, and unwavering adherence to EPFO electronic submission guidelines.`,
        `Your Benefit: Flawless compliance records, stress-free EPFO audits, immediate document retrieval for
any inquiry, and unwavering adherence to EPFO electronic submission guidelines.`,
      ],
    },
    {
      title: "Proactive Regulatory Updates & Advisory",
      //  icon: UsersIcon,
      features: [
        `Continuous monitoring of all EPFO circulars, notifications, and EPF & MP Act 1952 latest
amendments: Our experts are constantly updating their knowledge base, providing you with
real-time insights.`,
        `Impact analysis of new regulations on your specific business operations: We translate complex
legal jargon into actionable insights tailored to your organizational structure and workforce,
including the New Social Security Code impact on EPF for employers.`,
        `Strategic recommendations for policy adaptations: We advise on necessary internal
adjustments to ensure seamless compliance with evolving laws, allowing you to strategically
adapt your HR and payroll policies ahead of time.`,
        `Advance notice of upcoming compliance requirements and deadlines: You're always prepared,
eliminating last-minute rushes and ensuring best practices for EPF compliance in India.`,
        `Your Benefit: Perpetual compliance, strategic advantage from early adaptation, complete elimination
of compliance surprises, and expert navigation of the most recent EPFO circulars and notifications.`,
      ],
    },
  ],
};

export const verticalCardsPosh = {
  mainTitle:
    "The Critical Challenges of POSH Act Compliance for Indian Businesses",
  subTitleVer: `Even well-intentioned organizations frequently face significant operational, legal, and
cultural hurdles in effectively implementing and maintaining POSH Act compliance.`,
  mainSubtitleVer: "Operational Complexities & Administrative Burden",
  cardsVer: [
    {
      title: "Internal Committee (IC) Formation & Training",
      subtitle: `Difficulty in forming a valid
Internal Committee under POSH Act, ensuring diverse representation,
and providing mandatory POSH training for IC members.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Awareness & Policy Dissemination",
      subtitle: `Challenges in ensuring POSH
awareness training for all employees including contract staff and effectively
communicating the POSH policy across the organization, especially in multilocation
or hybrid work setups.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Record-Keeping & Reporting",
      subtitle: `Meticulous documentation of complaints,
inquiries, IC proceedings, and annual reports POSH annual report
filing is administratively heavy and crucial for compliance.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const horizontalCardsPosh = {
  mainSubtitleHor: "Sensitive Complaint Handling & Legal Risks",
  cardsHor: [
    {
      title: "Fair & Timely Inquiry Process",
      subtitle: `Ensuring fair and impartial inquiry process
under POSH Act within the strict POSH complaint timeline 90 days
for inquiry can be challenging, especially without specialized expertise.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Preventing Victimization",
      subtitle: `Protecting the complainant and witnesses from
victimization under POSH Act during and after an inquiry requires careful
procedural adherence and a sensitive approach.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Maintaining Confidentiality",
      subtitle: `The utmost importance of confidentiality in
POSH complaints throughout the inquiry process is often difficult to manage
internally without robust protocols.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Legal Scrutiny & Penalties",
      subtitle: `Mishandling a complaint, procedural lapses, or
non-compliance can lead to severe penalties for non-compliance with POSH
Act fines up to ₹50,000, cancellation of business license and legal
action against the employer.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
  ],
};

export const largeCardsPosh = {
  subTitle: "Building a Culture of Safety & Trust",
  cards: [
    {
      title: "Shifting Workplace Culture",
      subtitle: `Moving beyond mere compliance to foster a truly
safe and respectful workplace culture where employees feel empowered to
speak up requires continuous effort and expert guidance.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Awareness & Trust",
      subtitle: `Ensuring all employees including those asking
what is sexual harassment at workplace or how to file POSH complaint
are adequately informed and trust the redressal mechanism.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Reputational Damage",
      subtitle: `Even a single mishandled POSH complaint or public
accusation can result in severe reputational damage for companies and loss
of employee and public trust.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const pastelCardsPosh = {
  subTitle: "Expert Internal Committee (IC) Formation & Training",
  subText:
    "Establish a legally sound and highly capable Internal Committee ready to address any complaint with fairness and precision.",
  cards: [
    {
      title: "IC Constitution Guidance",
      subtitle: `Expert assistance in forming Internal
Committee under POSH Act, ensuring it meets all statutory
requirements regarding composition, gender balance, and external
member inclusion.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Mandatory IC Training",
      subtitle: `Comprehensive POSH training for IC
members, equipping them with the legal knowledge, procedural steps,
and sensitivity required to conduct fair and impartial inquiries.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "IC Policy & Charter Development",
      subtitle: `Drafting or reviewing the IC's
operational guidelines, roles, and responsibilities to ensure clarity and
compliance.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Your Benefit",
      subtitle: `A legally compliant and competent Internal Committee, fully
prepared to handle complaints effectively, minimizing legal risks from the outset.`,
      icon: "❤️",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const verticalCardsPoshOne = {
  mainSubtitleVer: "Comprehensive Employee Awareness & Policy Implementation",
  subText:
    "Cultivate a culture of respect and awareness, ensuring every employee understands their rights and responsibilities under the POSH Act.",
  cardsVer: [
    {
      title: "POSH Policy Development & Review",
      subtitle: `Drafting or updating your
organization's POSH policy India to be clear, comprehensive, legally
compliant, and reflective of your company's values.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Mandatory Employee Training",
      subtitle: `Conducting engaging and impactful
POSH awareness training for all employees including contract,
temporary, and remote staff through online modules or interactive
workshops, explaining what is sexual harassment at workplace and
how to file POSH complaint.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Policy Dissemination & Display",
      subtitle: `Ensuring the POSH policy is effectively
communicated, displayed at workplaces, on intranets, and
acknowledged by all employees as mandated by the Act.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Your Benefit",
      subtitle: `A fully aware and compliant workforce, a robust and accessible
POSH policy, reduced instances of harassment, and a demonstrable commitment
to a safe work environment.`,
      icon: "❤️",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const horizontalCardsPoshOne = {
  mainSubtitleHor: "Meticulous Complaint Redressal & Inquiry Management",
  subTextHor:
    "Navigate sensitive complaints with fairness, confidentiality, and legal precision, ensuring just outcomes and protecting all parties",
  cardsHor: [
    {
      title: "Dedicated & Impartial Complaint Hotline (3rd Party Service)",
      subtitle: `Provide
a secure, confidential, and independent 24/7 hotline for employees to
report sexual harassment complaints directly to a neutral, third-party entity
(EPFdesk.com). This service operates like a trusted third-party
mechanism used in Europe, ensuring anonymity (if desired by the
complainant) and impartiality, which significantly enhances employee trust.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "End-to-End Inquiry Support",
      subtitle: `Providing expert guidance and support
throughout the POSH complaint inquiry process, from initial complaint
receipt to final report submission within the POSH complaint timeline
90 days.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Impartial Inquiry Conduct",
      subtitle: `Assisting the IC in conducting fair, unbiased,
and legally sound inquiries, including evidence gathering, witness
interviews, and procedural adherence to ensure fair inquiry process
under POSH Act.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Confidentiality & Victimization Prevention",
      subtitle: `Implementing strict
protocols to ensure confidentiality in POSH complaints and actively
preventing victimization under POSH Act for complainants and
witnesses.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Final Report & Recommendations",
      subtitle: `Expert assistance in drafting
comprehensive inquiry reports and recommendations for appropriate
action, including consequences of sexual harassment at workplace.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Your Benefit",
      subtitle: `Enhanced employee trust and psychological safety, reduced
internal HR burden for sensitive initial handling, guaranteed impartiality in
complaint intake, legally sound and timely complaint resolution, and ultimate
protection against procedural lapses, severe legal repercussions, and
reputational damage.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsPoshOne = {
  subTitle: "Proactive Compliance Monitoring & Reporting",
  subText:
    "Maintain continuous POSH Act adherence and fulfill all statutory reporting obligations with accuracy and foresight.",
  cards: [
    {
      title: "Annual Report Filing",
      subtitle: `Meticulous preparation and timely filing of your
POSH annual report to District Officer detailing complaints received,
actions taken, training conducted as mandated by the Act.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Continuous Regulatory Updates",
      subtitle: `Monitoring latest amendments to
POSH Act 2013 and related guidelines, providing timely alerts and
actionable insights for ongoing compliance.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Audit Readiness Support",
      subtitle: `Providing comprehensive assistance during
any POSH compliance audits or legal reviews, ensuring all
documentation is organized and processes are defensible.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "POSH Act Compliance Checklist",
      subtitle: `Development and implementation of
internal checklists to ensure continuous adherence to all procedural and
substantive requirements.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Your Benefit",
      subtitle: `Guaranteed continuous POSH compliance, complete protection
from penalties for non-compliance with POSH Act, enhanced legal
standing, and a demonstrable commitment to corporate social responsibility.`,
      icon: "❤️",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const plansPosh = {
  mainTitle:
    "Why Workforce Limited: Your Definitive Partner for POSH Act Compliance",
  cards: [
    {
      title: "Unmatched Expertise & Unyielding Precision",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Seasoned Legal & HR Professionals: Our team comprises highly experienced
legal experts specializing in labor and corporate law, certified HR consultants,
and trained POSH practitioners, bringing deep, updated knowledge of the POSH
Act and its practical application.`,
        `99.9% Procedural Accuracy: We implement multi-layered validation and
stringent expert review processes, ensuring every step of POSH implementation,
training, and complaint inquiry is legally sound and procedurally perfect.`,
        `Proactive Regulatory Intelligence: Our experts provide continuous monitoring
of POSH Act amendments, landmark judgments, and practical interpretations,
ensuring your company remains ahead of compliance curves.`,
        ,
      ],
    },
    {
      title: "Holistic Approach & Strategic Impact",
      //  icon: UsersIcon,
      features: [
        `End-to-End POSH Coverage: From policy drafting and IC formation to
comprehensive training, inquiry management, and annual reporting, we cover the
full spectrum of POSH compliance.`,
        `Protecting Your Reputation & Legal Standing: Our meticulous approach
safeguards your business from severe reputational damage, legal action,
and financial penalties associated with POSH non-compliance.`,
        `Cultivating a Positive Culture: By ensuring transparent processes and
accessible support, we help build a workplace where employees feel safe,
respected, and empowered, enhancing morale and productivity.`,
      ],
    },
    {
      title: "Rapid Implementation & Dedicated Partnership",
      //  icon: UsersIcon,
      features: [
        `Streamlined Onboarding: Our dedicated team guides you through a rapid
onboarding process, including initial compliance assessment and data
integration.`,
        `Dedicated Implementation Specialist: An assigned expert ensures a smooth
transition and addresses all your setup queries promptly.`,
        ,
      ],
    },
    {
      title: "Dedicated Ongoing Support for Continuous Compliance",
      //  icon: UsersIcon,
      features: [
        `Assigned Client Manager: Your single point of contact provides personalized
service and comprehensive support for all your POSH compliance needs.`,
        `Regular Compliance Updates: Receive timely, clear updates on the latest
POSH Act changes and best practices.`,
        `Immediate Query Resolution: Our support team is available to promptly resolve
any POSH-related questions from your HR or legal teams.`,
      ],
    },
    {
      title: "Key Employer POSH Concerns We Resolve",
      //  icon: UsersIcon,
      features: [
        `Implementation & Policy: Guidance on POSH Act applicability, drafting/
reviewing POSH policy India, and ensuring its proper dissemination.`,
        `Internal Committee (IC): Assistance with forming an Internal Committee (IC)
under POSH Act,ensuring IC member training, and handling IC
composition requirements.`,
        `Employee Training: Conducting POSH awareness training for all
employees, mandatory POSH training requirements, and ensuring POSH
compliance for remote workers.`,
        `Complaint Handling: Support for POSH complaint inquiry process, POSH
complaint timeline, confidentiality in POSH complaints, and preventing
victimization under POSH Act.`,
        `Reporting & Audit: Preparing POSH annual report to District Officer and
providing POSH compliance audit" support.`,
        `Penalties: Advising on penalties for non-compliance with POSH Act and
legal action against employer under POSH Act.`,
      ],
    },
    {
      title: "Advanced POSH Advisory & Training",
      //  icon: UsersIcon,
      features: [
        `External Member Services: Providing experienced independent external
members for your Internal Committee.`,
        `Sensitive Case Advisory: Expert guidance on complex or high-profile cases,
ensuring procedural integrity and fair outcomes.`,
        `Leadership Workshops: Conducting specialized POSH workshops for senior
management on their roles and responsibilities.`,
        `Culture Building Initiatives: Strategic advice on integrating POSH compliance
into broader diversity, equity, and inclusion (DEI) initiatives for a truly respectful
culture.`,
      ],
    },
    {
      title: "Proactive IC Preparedness & Mock Inquiry Drills",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Go beyond standard training with mock inquiry drills and
preparedness workshops for your Internal Committee. We simulate complaint
scenarios, allowing your IC to practice their skills in a controlled environment and
identify areas for improvement before a real case arises. This is a unique IC
readiness assessment.`,
        `Your Benefit: An exceptionally prepared and confident IC, minimizing procedural
errors in real-time sensitive situations, and significantly reducing legal risks by
demonstrating proactive readiness.`,
      ],
    },
    {
      title: "Cultivating a Respectful Culture Beyond Policy",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Strategic advisory on integrating POSH principles into broader
organizational values. This includes workshops on bystander intervention
training, unconscious bias awareness, and respectful communication"
to build a truly inclusive environment where harassment is less likely to occur.`,
        `Your Benefit: A genuinely safer, more inclusive, and psychologically secure
workplace, leading to increased employee morale, reduced turnover, and a
stronger employer brand, moving beyond mere legal compliance.`,
      ],
    },
    {
      title: "Post-Inquiry Support & Reintegration Advisory",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Provide expert advisory and support for post-inquiry phases,
including guidance on reintegration strategies for involved parties where
appropriate and legally permissible and support for workplace rehabilitation
to ensure a harmonious environment after resolution. This may also include
recommended professional counseling resources.`,
        `Your Benefit: A holistic approach to workplace safety that extends beyond legal
resolution, fostering a fair environment for all employees and protecting
organizational well-being even after difficult situations.`,
      ],
    },
    {
      title: "Anonymized Trend Reporting & Strategic Insights",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Leveraging our experience and with proper client data consent
and anonymization, we can provide aggregate, anonymized reports on
common POSH complaint trends, types of workplace harassment
reported, and training effectiveness metrics.`,
        `Your Benefit: Data-driven insights to proactively identify and address systemic
issues, measure the impact of your POSH initiatives, and continuously refine
your workplace safety strategies, turning compliance data into actionable
intelligence.`,
      ],
    },
  ],
};

export const poshFaq = [
  {
    question: "Is the POSH Act 2013 mandatory for all companies in India?",
    answer: `Yes, the POSH Act 2013 is mandatory for every organization (public or private,
organized or unorganized sector) in India with 10 or more employees, regardless of
their type of employment (permanent, temporary, contractual, intern, domestic help).`,
  },
  {
    question: "What are the key requirements for POSH Act compliance?",
    answer: `Key requirements include: (1) Formulating and widely circulating a POSH policy, (2)
Constituting an Internal Committee (IC) if 10+ employees (or Local Committee if less
than 10), (3) Conducting regular awareness training for all employees, and (4) Filing an
annual report with the District Officer.`,
  },
  {
    question:
      "How often is POSH training required for employees and IC members?",
    answer: `While the Act doesn't specify frequency, it mandates continuous awareness. Best
practice recommends annual POSH awareness training for all employees and more
intensive, specialized training for IC members at least once a year to keep them
updated on legal nuances and inquiry procedures.`,
  },
  {
    question: "What are the penalties for non-compliance with the POSH Act?",
    answer: `Non-compliance can lead to severe penalties. The initial penalty for an employer is a
fine of up to ₹50,000. Subsequent non-compliance can lead to higher fines, and even
cancellation of the business license or withdrawal of registration. Directors may also
face legal action.`,
  },
  {
    question: "How long does the POSH complaint inquiry process take?",
    answer: `The Internal Committee (IC) is legally mandated to complete the inquiry and submit
its report to the employer within 90 days from the date of receiving the complaint.`,
  },
  {
    question: "Can POSH Act compliance cover remote or hybrid work models?",
    answer: `Yes, the POSH Act extends to the "workplace," which includes any place visited by
the employee arising out of or during the course of employment, including transportation
and virtual/remote working environments. Our services cover POSH compliance for all
modern work models.`,
  },
  {
    question:
      "What is the benefit of using a third-party hotline for POSH complaints?",
    answer: `A third-party hotline, like the one offered by EPFdesk.com, provides employees with
an independent, secure, and confidential channel to report complaints. This enhances
trust and impartiality, encourages reporting, and reduces the burden on internal HR for
initial sensitive handling, safeguarding your organization's reputation.`,
  },
  {
    question:
      "How do you help our Internal Committee (IC) prepare for complex complaints?",
    answer: `We offer specialized mock inquiry drills and preparedness workshops for your IC.
This unique service simulates complaint scenarios, allowing your IC to practice their
legal and procedural skills in a controlled environment, ensuring they are exceptionally
prepared for real-time situations.`,
  },
  {
    question:
      "Do your services extend beyond legal compliance to foster a safer workplace culture?",
    answer: `Absolutely. We provide strategic advisory and conduct workshops on topics like
bystander intervention, unconscious bias, and respectful communication to proactively
build a genuinely inclusive culture where harassment is actively prevented, going
beyond mere policy adherence.`,
  },
];

export const verticalCardsLabour = {
  mainTitle: "The Pervasive Challenges of Labor & HR Registrations in India",
  mainSubtitleVer: "Navigating Fragmentation & Ambiguity",
  cardsVer: [
    {
      title: "Diverse State-Specific Laws",
      subtitle: `Laws like the "Shop and Establishment Act"
vary significantly by state, leading to confusion regarding "Shop and
Establishment Act registration process" in different jurisdictions (e.g.,
Karnataka, Maharashtra, Delhi).`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Act-Specific Applicability",
      subtitle: `Determining precise applicability for acts like "CLRA
Act 1970" (for 20+ contract workers), "Factories Act 1948" (for manufacturing
units), "Inter-State Migrant Workmen Act, 1979," and "Building and Other
Construction Workers (BOCW) Act, 1996" requires deep legal interpretation.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Conflicting Information",
      subtitle: `Sourcing accurate, up-to-date information on various
registration requirements and forms can be challenging, leading to reliance on
outdated guides or unofficial sources.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const horizontalCardsLabour = {
  mainSubtitleHor: "Operational Burden & Renewal Headaches",
  cardsHor: [
    {
      title: "Time-Consuming Registration Processes",
      subtitle: `Manually filling out numerous
forms, compiling vast documentation ("documents required for Shops and
Establishment Act registration," "CLRA license documents"), and following
up with various labor departments is highly inefficient.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Managing Multiple Renewals",
      subtitle: `Tracking and ensuring timely "annual renewals"
for various licenses (e.g., "CLRA license renewal Maharashtra," "Factories
Act license renewal," "Shop Act license renewal") across different states is a
continuous administrative nightmare.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Lack of Centralized Oversight",
      subtitle: `For multi-location businesses, maintaining a
consolidated view of all required registrations and their renewal statuses across
diverse units is a major operational challenge.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
  ],
};

export const largeCardsLabour = {
  subTitle: "High Penalties & Legal Exposure",
  cards: [
    {
      title: "Severe Financial Penalties",
      subtitle: `Non-compliance or delayed registrations/renewals
can lead to "penalties for not having Shop and Establishment license," hefty
fines under CLRA Act, Factories Act, and other labor laws, often with daily
penalties.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Legal Action & Prosecution",
      subtitle: `Failure to adhere to mandatory registrations can
result in "legal action against employers," prosecution of directors, or even
"business closure" in extreme cases.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Reputational Damage",
      subtitle: `Non-compliance publicly signals a disregard for worker
welfare and legal integrity, leading to "reputational damage" with employees,
clients, and investors.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Operational Disruption",
      subtitle: `Business activities may be halted if required licenses
are not in place, leading to direct financial losses.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsLabour = {
  subTitle: "Initial Registrations & Setup (Flawless First Steps)",
  cards: [
    {
      title: "Shop & Establishment Act Registration",
      subtitle: `Meticulous handling of "Shop
and Establishment Act registration process" for every office, retail
outlet, or commercial establishment, navigating state-specific rules and
documentation.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "CLRA (Contract Labour) Registrations",
      subtitle: `Expert management of "CLRA
license compliance" for principal employers and contractors (including
"CLRA registration requirements" and "documents required for
labour license").`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Factories Act Registration",
      subtitle: `Comprehensive assistance for "Factories
Act registration requirements," including plan approvals, safety permits,
and obtaining factory licenses where manufacturing activities occur.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Specific Act Registrations",
      subtitle: `Covering other niche acts like "Inter-State
Migrant Workmen (Regulation of Employment and Conditions of
Service) Act, 1979," and "Building and Other Construction Workers
(BOCW) Act, 1996" as applicable.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Initial Core Statutory Registrations (as part of broader setup)",
      subtitle: `While
detailed on their own pages, we ensure initial "EPF ESIC registration for
new company," "Professional Tax registration," and "Labour Welfare
Fund registration" are seamlessly managed.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const verticalCardsLabourOne = {
  mainSubtitleVer:
    "License Management & Recurring Renewals (Continuous Compliance)",
  cardsVer: [
    {
      title: "Automated Renewal Tracking",
      subtitle: `Proactive monitoring and alerts for
"annual renewals" of all applicable labor and HR licenses across all your
locations, including "CLRA license renewal Maharashtra," "Shop Act
license renewal," and "factory license renewal."`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Seamless Renewal Process",
      subtitle: `End-to-end management of the renewal
application process, including documentation updates, fee payments, and
liaising with relevant labor departments for timely approval.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Multi-State Renewal Coordination",
      subtitle: `Expert handling of varied renewal
frequencies, forms, and fees across different states, simplifying
compliance for businesses with a nationwide footprint.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Compliance Calendar Management",
      subtitle: `Development and maintenance of
a custom "HR statutory compliance calendar India" for your business,
ensuring all recurring registration and renewal deadlines are met.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsLabourOne = {
  mainSubtitleHor: "Audit Preparedness & Advisory (Proactive Risk Mitigation)",
  cardsHor: [
    {
      title: "Continuous Regulatory Monitoring",
      subtitle: `Our experts constantly track
"Indian labor law updates" and changes specific to various acts (e.g.,
Minimum Wages Act, Payment of Wages Act, Contract Labour Act) and
provide timely alerts and actionable insights.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Penalty Prevention Strategies",
      subtitle: `We implement proactive measures to
identify and rectify potential non-compliance issues (e.g., not maintaining
"required registers under labor laws" like Muster Roll, Wage Register)
before they escalate.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Comprehensive Audit Support",
      subtitle: `Provide complete assistance during
"labour law audits,"inspections by authorities, including data compilation,
documentation (e.g., "Form A, Form B registers maintenance"), and
expert liaison to ensure smooth and successful outcomes.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Response to Notices",
      subtitle: `Expert drafting and submission of timely replies to
notices from labor departments or other statutory bodies.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
  ],
};

export const plansLabour = {
  mainTitle:
    "Why Workforce Limited: Your Definitive Partner for POSH Act Compliance",
  cards: [
    {
      title: "Unmatched Expertise & Unyielding Precision",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Seasoned Labor Law Professionals: Our team comprises highly experienced
labor law attorneys, compliance experts, and HR consultants with deep, updated
knowledge of every central and state-specific labor act (e.g., CLRA, Factories
Act, Shop & Establishment Acts).`,
        `99.9% Procedural Accuracy: We implement multi-layered validation and
stringent expert review processes, ensuring every registration, renewal, and
documentation is legally sound and procedurally perfect, minimizing errors and
rejections.`,
        `Proactive Regulatory Intelligence: Our experts provide continuous monitoring
of new acts (like upcoming Labour Codes), amendments, and local nuances,
ensuring your company remains ahead of the compliance curve across all states.`,
        ,
      ],
    },
    {
      title: "Comprehensive Scope & Strategic Advantage",
      //  icon: UsersIcon,
      features: [
        `End-to-End Coverage: We manage the full spectrum of mandatory labor and
HR registrations and licenses, from initial setup to ongoing renewals and
comprehensive audit support.`,
        `Multi-State Specialization: Our unique strength lies in expertly navigating the
diverse requirements of different Indian states, providing a single point of contact
for your nationwide registration needs.`,
        `Protection for Leadership: Our meticulous processes reduce the risk of
personal liabilities or legal actions against directors/management for noncompliance.`,
      ],
    },
    {
      title: "Rapid Implementation & Dedicated Partnership",
      //  icon: UsersIcon,
      features: [
        `Streamlined Onboarding: Our dedicated team guides you through a rapid
onboarding process, including initial compliance assessment and secure data
integration for existing records.`,
        `Dedicated Implementation Specialist: An assigned expert ensures a smooth
transition and addresses all your setup queries promptly, integrating with your
existing HR systems where required.`,
        ,
      ],
    },
    {
      title: "Dedicated Ongoing Support for Continuous Multi-State Compliance",
      //  icon: UsersIcon,
      features: [
        `Assigned Client Manager: Your single point of contact provides personalized
service and comprehensive support for all your registration and licensing needs.`,
        `Automated Renewal Alerts: Our system provides timely notifications for all
upcoming license renewals, ensuring no deadline is missed.`,
        `Immediate Query Resolution: Our support team is available to promptly resolve
any queries related to your labor registrations from your HR or legal teams.`,
      ],
    },
    {
      title: "Key Initial Registrations & Setup",
      //  icon: UsersIcon,
      features: [
        `Shop and Establishment Act: "Shop and Establishment Act registration
process," "online Shop Act registration," and managing "penalties for not
having Shop Act license."`,
        `CLRA (Contract Labour): "CLRA registration for principal employer,"
"CLRA license for contractors," and "documents required for CLRA
registration."`,
        `Factories Act: "Factories Act registration requirements," "factory license
application process,"and related safety approvals.`,
        `Other Labour Acts: Registrations under "Inter-State Migrant Workmen Act,
1979," "Building and Other Construction Workers (BOCW) Act, 1996," and
similar acts as applicable.`,
        `Core Statutory Registrations (Initial): Assistance with "EPF ESIC registration
for new company," "Professional Tax registration," and "Labour Welfare
Fund registration."`,
      ],
    },
    {
      title: "Ongoing Management & Renewal Services",
      //  icon: UsersIcon,
      features: [
        `License Renewals: End-to-end management of "CLRA license renewal
Maharashtra," "factory license renewal," "Shop Act license renewal," and
"professional tax registration renewal" across all states.`,
        `Compliance Calendar: Creation and maintenance of a custom "HR statutory
compliance calendar India" for your business, tracking all deadlines.`,
        `Register Maintenance: Guidance on "maintenance of registers under labor
laws" (e.g., Muster Roll, Wage Register, Overtime Register).`,
        `Amendments: Managing amendments to existing registrations due to changes
in address, business nature, or employee count.`,
      ],
    },
    {
      title: "Risk Mitigation & Audit Support",
      //  icon: UsersIcon,
      features: [
        `Penalty Prevention: Strategies to avoid "penalties for labor law noncompliance"
and "legal action against employer."`,
        `Labor Law Audits: Comprehensive assistance for "labour law audits" and
inspections by authorities.`,
        `Regulatory Updates: Continuous monitoring of "Indian labor law updates"
and specialized guidance on the "impact of new social security code" on
various registrations.`,
      ],
    },
  ],
};

export const labourFaq = [
  {
    question:
      "Which are the most common labor law registrations required for businesses in India?",
    answer: `The most common include the Shop and Establishment Act (state-specific), Contract
Labour (Regulation & Abolition) Act (CLRA) license (if engaging 20+ contract workers),
Factories Act registration (for manufacturing units), EPF, ESIC, Professional Tax, and
Labour Welfare Fund registrations.`,
  },
  {
    question: "Do these registrations need to be renewed, and how often?",
    answer: `Yes, many labor licenses and registrations require periodic renewal. The frequency
varies by act and state:
* Shop Act: Often annual or biennial.
* CLRA License: Annual.
* Factories Act License: Typically 1 to 5 years, depending on the state.
We manage all renewals proactively.`,
  },
  {
    question:
      "How do you handle compliance for businesses operating in multiple states with varying laws?",
    answer: `Our unique strength lies in our nationwide operational footprint and deep expertise in
the nuances of each state's specific labor laws. We provide centralized management for
all your multi-state registrations and renewals, ensuring seamless compliance across
your entire Indian presence.`,
  },
  {
    question:
      "What are the risks of not having the correct labor registrations or licenses?",
    answer: `Non-compliance can lead to severe financial penalties (often daily fines), legal action
against the company and its directors, operational disruptions (e.g., closure orders), and
significant reputational damage.`,
  },
  {
    question:
      "Do you assist with both initial registrations and ongoing renewals?",
    answer: `Yes, our service is end-to-end. We handle the entire process from assessing initial
applicability and completing the first-time registration to continuously monitoring and
managing all subsequent renewals, ensuring continuous compliance.`,
  },
  {
    question:
      "What kind of documentation is typically required for these registrations?",
    answer: `Required documents vary by act and state but commonly include business
incorporation certificates, PAN/Aadhaar of directors/proprietors, address proof of
establishment, employee details, bank challans, and specific application forms. We
guide you through the precise requirements for each.`,
  },
  {
    question:
      "Can you help with compliance under the Contract Labour (Regulation & Abolition) Act(CLRA)?",
    answer: `Yes, we provide comprehensive CLRA compliance services, including assisting
principal employers with obtaining their registration certificate and helping contractors
secure their labor licenses, along with all ongoing compliances, ensuring full adherence
to the Act.`,
  },
];

export const verticalCardsHosp = {
  mainTitle:
    "The Cost of Chaos: Why Compliance Failures Cascade in Hospitality",
  subTitleVer: `The hospitality industry's unique dynamics—namely its high attrition rate and the 
sensitive nature of customer-facing work—transform small compliance errors into 
significant, systemic risks.`,
  mainSubtitleVer: "The High-Attrition Administrative Nightmare",
  cardsVer: [
    {
      title: "The Brutal Truth",
      subtitle: `Your industry’s average employee turnover of 80% per year is 
a deep pain point. It creates an endless administrative vortex of creating, linking, 
and managing EPF, ESIC, and UAN records for every new hire and every exit.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "The Cost",
      subtitle: `Up to 4 hours of HR/Manager time per employee, every time they 
join or leave. For a 200-person hotel, that’s hundreds of lost hours annually. For a 
chain of 10 hotels, this cost is immense.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "The Guarantee",
      subtitle: `: We automate this chaos, handling every EPF/ESIC exit and 
joining in minutes, not hours, so you're never burdened by your most painful 
operational reality`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const horizontalCardsHosp = {
  mainSubtitleHor: "The Overtime & Tips Trap: A Trigger for Systemic Risk",
  cardsHor: [
    {
      title: "The Problem",
      subtitle: ` Accurately calculating statutory contributions on variable pay, tips, 
and overtime is a manual minefield. These seemingly small errors are what labor 
inspectors look for first`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "The Consequence",
      subtitle: ` A single incorrect calculation, when discovered, can trigger a 
full-scale audit of all your statutory records. That one error cascades into a review 
of your entire compliance history, uncovering every other small mistake and 
exposing your entire business to massive backdated dues and penalties.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "The Guarantee",
      subtitle: `We integrate with your payroll to ensure 100% accurate, 
flawless calculations every single time, defusing these financial time bombs 
before they explode.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    //     {
    //       title: "Legal Scrutiny & Penalties",
    //       subtitle: `Mishandling a complaint, procedural lapses, or
    // non-compliance can lead to severe penalties for non-compliance with POSH
    // Act fines up to ₹50,000, cancellation of business license and legal
    // action against the employer.`,
    //       icon: "💡",
    //       bubble: "Innovate!",
    //       bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    //     },
  ],
};

export const largeCardsHosp = {
  subTitle: "The POSH Reputation Bomb: The Ultimate Brand Killer",
  cards: [
    {
      title: "The Problem",
      subtitle: `In a customer-facing, shift-based environment, one single POSH 
violation can instantly destroy a decade of brand building.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "The Consequence",
      subtitle: `A ₹50,000 fine is the least of your worries. The real damage 
is to your brand's reputation on social media and news outlets, the loss of trust 
from employees and customers, and a potential talent drain in an industry where 
staff are already hard to retain.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "The Guarantee",
      subtitle: `We provide iron-clad POSH compliance and a dedicated, 
independent hotline to protect your brand and your team's well-being, making 
your commitment to a safe workplace visible to everyone`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const pastelCardsHosp = {
  subTitle: "End-to-End Compliance for Your Core Operations",
  cards: [
    {
      title: "EPF/ESIC for a dynamic workforce",
      subtitle: `We manage statutory contributions for 
all staff, from permanent managers to part-time banquet staff and contract 
workers, expertly handling the administrative nightmare of high attrition`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Your licenses that can shut you down",
      subtitle: `We manage the Shop & 
Establishment Act registration and renewals for a single café or a multi-location 
chain, ensuring continuous operational legality.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: " The POSH Act",
      subtitle: `We draft your policy, train your staff (waiters to 
management), and handle complaints with the legal precision needed in your 
industry, safeguarding your brand's reputation.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "All other statutory requirements",
      subtitle: `We ensure perfect compliance with 
Minimum Wages Act, Payment of Gratuity Act, and LWF/PT for all your 
locations, providing a single point of control for your entire compliance 
landscape.`,
      icon: "❤️",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const slidesLandingPage = [
  {
    name: "Richa Maheshwari",
    title: "Manager, Delhi",
    org: "Large Multinational Company",
    message:
      "EPFDesk.com has transformed our Gurgaon operations by handling all statutory compliance seamlessly, allowing my team to focus on strategic initiatives rather than portal management.",
    gradient: "from-[#eafce9] to-[#c8f7c5]",
    bgs: ["bg-[#a0d468]", "bg-[#4ecdc4]"],
    bubble: "Seamless!",
  },
  {
    name: "Adarsh Hoizal",
    title: "",
    org: "Large Staffing Company",
    message:
      "Managing statutory compliance for our workforce across multiple states was a nightmare until we partnered with EPFDesk.com – their pan-India support has streamlined everything.",
    gradient: "from-[#fffae6] to-[#fceabb]",
    bgs: ["bg-[#ffe66d]", "bg-[#ff6b6b]"],
    bubble: "Streamlined!",
  },
  {
    name: "Amith Chitrapur",
    title: "Chartered Accountant",
    org: "Multiple Clients Across India",
    message:
      "EPFDesk.com delivers seamless multi-state compliance support for all my clients. Their expertise in statutory regulations has eliminated my biggest operational headache.",
    gradient: "from-[#f8f0ff] to-[#ecdfff]",
    bgs: ["bg-[#d299c2]", "bg-[#a18cd1]"],
    bubble: "Reliable!",
  },
  {
    name: "Neeta",
    title: "Director",
    org: "Technical Services Company",
    message:
      "With our teams spread across India, EPFDesk.com has been instrumental in maintaining our 100% audit success rate with new registrations and linking done seamlessly.",
    gradient: "from-[#fceff1] to-[#ffd1dc]",
    bgs: ["bg-[#ff6b6b]", "bg-[#ffe66d]"],
    bubble: "Audit-Proof!",
  },
];

export const slidesLandingHosp = [
  {
    name: "Neeta",
    title: "HR Head",
    org: "Regional Hotel Chain",
    message:
      "EPFDesk transformed our compliance from a nightmare to a seamless operation. Their expertise in handling our multi-location staff has completely eliminated our compliance worries.",
    gradient: "from-[#eafce9] to-[#c8f7c5]",
    bgs: ["bg-[#a0d468]", "bg-[#4ecdc4]"],
    bubble: "Seamless!",
  },
  {
    name: "Rajesh",
    title: "Owner,Goa",
    org: "Boutique Restaurant",
    message:
      "As a single-outlet owner, a fine would have been devastating. EPFDesk took away all the fear, so I can focus on my guests.",
    gradient: "from-[#fffae6] to-[#fceabb]",
    bgs: ["bg-[#ffe66d]", "bg-[#ff6b6b]"],
    bubble: "Streamlined!",
  },
  {
    name: "Vikram Kumar",
    title: "Regional Commercial Director",
    org: "Large 5-Star Hotel Group",
    message:
      "The peace of mind knowing our POSH compliance is handled by experts who guarantee 100% accuracy and timely filings is invaluable for our brand.",
    gradient: "from-[#f8f0ff] to-[#ecdfff]",
    bgs: ["bg-[#d299c2]", "bg-[#a18cd1]"],
    bubble: "Reliable!",
  },
];

export const hospFaq = [
  {
    question: "We have 200+ employees across 5 cities. Too complex?",
    answer: ` Our biggest client has 2,000 employees across 15 cities, including 5-star chains. 
You're simple`,
  },
  {
    question: "We get raided tomorrow?",
    answer: `We'll be there in 2 hours with all documents. Our emergency response has saved 47 
hospitality businesses from closure.`,
  },
  {
    question: " What about my odd Goa or Kerala state rules?",
    answer: `We operate in all 29 states. Kerala's Shops Act? We wrote the compliance guide.`,
  },
  {
    question: "How fast can you start?",
    answer: `48 hours to full compliance. We've done it 500+ times`,
  },
  {
    question: "Our biggest pain is high staff attrition. How do you help?",
    answer: `We directly solve this. Our systems automate the creation, linking, and management 
of EPF and ESIC records for every joiner and exit, turning your biggest administrative 
burden into a seamless background task. This ensures perfect compliance, even with a 
high-turnover workforce.`,
  },
];

// Data starts from here for hospitality links..,

export const videoHighlightDataHospitality = {
  heading: "Every License. Every Renewal. Every Closure.",
  description:
    "Operate legally and confidently — from your first FSSAI registration to your last Fire NOC renewal.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "hospitality",
};

export const videoHighlightDataEducation = {
  heading:
    "Your compliance is a direct reflection of your institutional integrity.",
  description:
    "In India’s competitive education sector, even minor compliance failures can severely damage institutional trust and integrity.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "education",
};

export const videoHighlightDataConstruction = {
  heading:
    "Compliance is your site safety net and a direct factor in project continuity.",
  description:
    "A single oversight on a project site can cascade into a massive operational and legal threat, affecting both safety and profitability.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const videoHighlightDataFacility = {
  heading:
    "Your compliance is a direct reflection of your contractual integrity.",
  description:
    "A single oversight on a contract worker's ledger can cascade into a massive operational and legal threat.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const videoHighlightDataManufacturing = {
  heading:
    "Your compliance is a direct reflection of your operational integrity",
  description:
    "A single oversight on the factory floor can cascade into a massive operational and legal threat, affecting both safety and profitability.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const dataTableHospitality = [
  // {
  //   threshold: "1+ employees",
  //   law: "GST Act, 2017 (Turnover-based)",
  //   meaning:
  //     "You must register and file GST returns, regardless of employee count.",
  // },
  // {
  //   threshold: "1+ employees",
  //   law: "Shop & Establishment Act",
  //   meaning:
  //     "You must register your premises and comply with rules on working hours and leave.",
  // },
  // {
  //   threshold: "10+ employees",
  //   law: "POSH Act, 2013",
  //   meaning:
  //     "You must constitute an Internal Committee and provide regular employee training.",
  // },
  // {
  //   threshold: "10+ employees",
  //   law: "ESIC Act, 1948 (in notified areas)",
  //   meaning:
  //     "You must register your business and contribute for employees with a monthly wage up to ₹21,000.",
  // },
  // {
  //   threshold: "20+ employees",
  //   law: "EPF Act, 1952",
  //   meaning:
  //     "You must register your business and contribute for all eligible employees.",
  // },
  // {
  //   threshold: "20+ contract workers",
  //   law: "CLRA Act, 1970",
  //   meaning:
  //     "You must get a Principal Employer certificate and ensure your contractor has a labor license.",
  // },
  {
    threshold: "Licenses & Registrations",
    law: "Examples: FSSAI, Factory license, Boiler, PCB consents",
    meaning:
      "Registration, government approvals, periodic renewals and inspection readiness (case: F&B chain, Manufacturer).",
  },
  {
    threshold: "Operational Filings & Inspections",
    law: "Submission → Inspection → Approval workflows",
    meaning:
      "Sequenced filings, inspection scheduling and approval tracking with department badges and officer telemetry.",
  },
  {
    threshold: "Renewals, Amendments & Closures",
    law: "Auto-renewals / Amendments",
    meaning:
      "Renewals auto-tracked and pre-filed; Workforce schedules filings to ensure zero missed renewals.",
  },
  {
    threshold: "Tracking & Audit Trail",
    law: "Document vault & tamper-evident history",
    meaning:
      "Real-time status, document vault, timestamps, SLA alerts and provenance for audit readiness.",
  },
  {
    threshold: "Industry & State Coverage",
    law: "State × Industry × Act matrix (36 states/UTs · 30+ industries)",
    meaning:
      "Instant scoping — what applies to me? Tailored modules for Hospitality, Healthcare, Education, Manufacturing and more.",
  },
  {
    threshold: "Regulatory Intelligence",
    law: "Regulatory Intelligence Graph",
    meaning:
      "Each filing becomes data — timelines, rejections, inspection notes and fees feed intelligence to speed and harden future executions.",
  },
];

export const dataTableEducation = [
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

export const dataTableConstruction = [
  {
    threshold: "10+ workers",
    law: "BOCW Act & Cess, 1996",
    meaning:
      "Triggers mandatory registration and payment of Labour Welfare Cess (1% of construction cost).",
  },
  {
    threshold: "10+ workers",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "Triggers social security contributions for all eligible workers.",
  },
  {
    threshold: "20+ workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers mandatory registration as Principal Employer and contractor licensing rules.",
  },
];

export const dataTableFacility = [
  {
    threshold: "10+ workers",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "Triggers social security contributions for all eligible workers.",
  },
  {
    threshold: "20+ workers",
    law: "EPF Act, 1952",
    meaning: "Triggers mandatory provident fund contributions.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers mandatory registration as Principal Employer and contractor licensing rules.",
  },
];

export const dataTableManufacturing = [
  {
    threshold: "10+ workers",
    law: "Factories Act, 1948 (Using Power)",
    meaning:
      "Triggers mandatory licensing, stringent safety, health, and welfare regulations.",
  },
  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "Triggers social security contributions for all eligible workers.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning:
      "Triggers mandatory provident fund contributions and record-keeping.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers registration as Principal Employer and liability for contractor non-compliance.",
  },
  {
    threshold: "20+ employees",
    law: "POSH Act, 2013",
    meaning:
      "Triggers mandatory Internal Committee (IC) formation and training.",
  },
  {
    threshold: "20+ employees",
    law: "Payment of Gratuity Act, 1972",
    meaning: "Triggers mandatory gratuity provisions.",
  },
];

export const uspDataHospitality = {
  // mainTitle:
  //   "The Cost of Chaos: Why Compliance Failures Cascade in Hospitality",
  // cards: [
  //   {
  //     title: "The High-Attrition Administrative Nightmare",
  //     description:
  //       "High employee turnover—around 80% annually—causes massive administrative work managing EPF, ESIC, and UAN records.",
  //   },
  //   {
  //     title: "The GST Reconciliation Nightmare",
  //     description:
  //       "A GSTR-2B mismatch isn’t a software glitch but a data issue that threatens your Input Tax Credit and cash flow.",
  //   },
  //   {
  //     title: "The Overtime & Tips Trap",
  //     description:
  //       "One mistake can trigger a full audit of all statutory records, exposing hidden errors and heavy penalties. Automated payroll integration ensures precise, compliant calculations every time.",
  //   },
  //   {
  //     title: "The POSH Reputation Bomb",
  //     description:
  //       "A single POSH violation in a customer-facing, shift-based workplace can undo years of brand reputation. Robust POSH compliance and an independent hotline safeguard your brand and workforce.",
  //   },
  // ],
  mainTitle: "A Regulatory Execution Engine",
  cards: [
    {
      title: "Discover",
      description:
        "Know every compliance you need — Workforce maps every applicable requirement by state, industry, and scale.",
    },
    {
      title: "Execute",
      description:
        "Registrations, inspections, approvals — handled digitally and on-ground with verified liaison network.",
    },
    {
      title: "Track",
      description:
        "Officer-level progress, document vault, SLAs and file provenance — every action logged and traceable.",
    },
    {
      title: "Sustain",
      description:
        "Renewals, amendments and closures auto-tracked and pre-filed — zero missed deadlines, perpetual compliance.",
    },
  ],
};

export const uspDataEducation = {
  mainTitle: "The Cost of Education Compliance Chaos",
  cards: [
    {
      title: "The Diverse Workforce & EPF/ESIC Minefield",
      description:
        "Seamlessly manage EPF and ESIC compliance for teaching, non-teaching, and contractual staff.",
    },
    {
      title: "The POSH Reputation Bomb",
      description:
        "POSH compliance is critical for schools and colleges, where even one mishandled case can trigger fines, reputational damage, and loss of trust. Beyond penalties, the real risk is declining enrollment and public backlash",
    },
    {
      title: "The Payroll & Leave Compliance Trap",
      description:
        "Strict compliance with the Payment of Wages Act and labor laws is essential, as payroll and leave errors are prime audit targets.",
    },
  ],
};

export const uspDataConstruction = {
  mainTitle: "The Cost of Construction Compliance Chaos: Cess, Safety & RCM",
  cards: [
    {
      title: "BOCW & Welfare Cess Liability Minefield",
      description:
        "The BOCW Act requires a 1% Labour Welfare Cess on construction costs, with strict timelines and record-keeping.",
    },
    {
      title: "The CLRA & Contract Labour Project Risk",
      description:
        "Heavy reliance on contract labor makes you liable under the CLRA Act for any contractor non-compliance in EPF, ESIC, or wages. Lapses can lead to backdated liabilities, project delays, and potential contract cancellations.",
    },
    {
      title: "GST RCM & The Cash Flow Trap",
      description:
        "In construction, RCM often makes builders liable for GST on purchases like TDR, FSI, or materials, requiring careful monitoring.",
    },
    {
      title: "BOCW & Project Safety Management",
      description:
        "We handle BOCW project registration, 1% Labour Welfare Cess calculation, and timely remittance. Ensure compliance with safety protocols, maintain required registers, and assist with accident reporting within 24 hours.",
    },
  ],
};

export const uspDataFacility = {
  mainTitle: "The Cost of FM Compliance Chaos: RCM, CLRA & Attrition",
  cards: [
    {
      title: "The CLRA & Contract Labour Liability Minefield",
      description:
        "Relying on contract workers makes you liable under the CLRA Act for each contractor’s compliance.",
    },
    {
      title: "The GST RCM (Reverse Charge) Trap",
      description:
        "Facility management services often trigger GST Reverse Charge, making your client liable for the tax. Errors in invoicing or classification can block their Input Tax Credit and hurt profitability.",
    },
    {
      title: "The EPF/ESIC & Multi-Site Audit Risk",
      description:
        "Managing EPF and ESIC for thousands of contract workers across multiple sites with varying wages is complex and error-prone. Frequent audits mean any lapse can trigger a full review of all contracts.",
    },
    {
      title: "End-to-End Labour License & CLRA Management",
      description:
        "We manage CLRA registration for principal employers, ensure all contractors hold valid labour licenses, and handle Factories/BOCW registrations. Our automated system tracks and renews every labour license on time across all states.",
    },
  ],
};

export const uspDataManufacturing = {
  mainTitle: "The Cost of Manufacturing Compliance Chaos",
  cards: [
    {
      title: "The Factory Floor Audit & Imprisonment Risk",
      description:
        "Non-compliance risks fines up to ₹2 lakhs, imprisonment, or even production shutdowns.",
    },
    {
      title: "The Contract Labour Management Vortex",
      description:
        "Relying on contract labour creates high compliance risk under the CLRA Act, requiring contractor registration and timely statutory payments. Any record mismatch or contractor default can trigger fines, backdated dues, or forced absorption of workers.",
    },
    {
      title: "The Diverse Workforce & Payroll Complexity",
      description:
        "One mistake can trigger audits and cascading statutory penalties. Workforce Limited delivers an end-to-end manufacturing compliance solution, ensuring flawless payroll and total peace of mind.",
    },
  ],
};

export const slidesHospitality = [
  // {
  //   title: "GST: We are the operators",
  //   text: "Meticulous reconciliation, return filing, and audit defense.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  // },
  // {
  //   title: "EPF/ESIC for a dynamic workforce",
  //   text: " We manage statutory contributions for all staff, from permanent managers to part-time banquet staff and contract workers, expertly handling the administrative nightmare of high attrition.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  // },
  // {
  //   title: "Your licenses that can shut you down",
  //   text: " We manage the Shop & Establishment Act registration and renewals for a single café or a multi-location chain, ensuring continuous operational legality.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-1920x2075.jpg",
  // },
  // {
  //   title: "The POSH Act",
  //   text: "We draft your policy, train your staff (waiters to management), and handle complaints with the legal precision needed in your industry, safeguarding your brand's reputation.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  // },
  // {
  //   title: " All other statutory requirements",
  //   text: "  We ensure perfect compliance with Minimum Wages Act, Payment of Gratuity Act, and LWF/PT for all your locations, providing a single point of control for your entire compliance landscape.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  // },
  {
    title: "Map — What Applies to Me?",
    text: "State × Industry × Act matrix lights up with instant scoping. Workforce maps every applicable law so you always know what applies — across 36 states & UTs and 30+ industries.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Workflow — From Submission to Approval",
    text: "Each filing follows a sequenced timeline — submission, inspection, approval — with department badges, challans, and officer tracking built-in. No missed steps, no manual chasers.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Tracking — Officer-Level Telemetry",
    text: "Monitor every file: officer name, timestamps, remarks, and SLA status. Each document is versioned in a secure vault — creating a tamper-evident audit trail automatically.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-1920x2075.jpg",
  },
  {
    title: "Renewals — Auto-Filed & Scheduled",
    text: "Every registration and license is auto-tracked for expiry. Workforce pre-files renewals, reconciles fees, and keeps continuity without intervention — zero downtime, zero penalties.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-1920x2075.jpg",
  },
];

export const slidesEducation = [
  {
    title: "EPF/ESIC for a diverse workforce",
    text: " We manage statutory contributions for all staff, from full-time faculty to contractual support personnel, expertly handling the nuances of your employee structure.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Meticulous Labour Registrations",
    text: "We manage your Shops and Establishment Act registration and renewals for all campuses, ensuring continuous operational legality.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "The POSH Act",
    text: "We draft your policy, train your staff (faculty, non-teaching, and management), and handle complaints with the legal precision needed to safeguard your institutional reputation.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: " All other statutory requirements",
    text: "We ensure perfect compliance with the Payment of Gratuity Act, Minimum Wages Act, and other state-specific labor laws, providing a single point of control for your entire compliance landscape.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const slidesConstruction = [
  {
    title: "CLRA Registration & Licensing",
    text: "We handle the mandatory Principal Employer registration (Form I) and ensure all your contractors are fully licensed under CLRA, protecting your liability.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "EPF & ESIC for Contract Workers",
    text: "We implement a system to monitor and verify that your contractors are making accurate and timely EPF/ESIC contributions for all workers, preventing the liability from falling back onto you (the principal employer).",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "Minimum Wages & Documentation",
    text: "Ensure compliance with the Minimum Wages Act and meticulous maintenance of all contract worker wage and attendance records.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Project GST Advisory (RCM & ITC)",
    text: " Expert guidance on complex GST RCM provisions applicable to TDR/FSI, cement, and input materials, protecting your cash flow and Input Tax Credit (ITC).",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Core Statutory Compliance",
    text: "We ensure perfect adherence to EPF, ESIC, PT, and LWF for all administrative and permanent staff.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Comprehensive Compliance Audits",
    text: "Conduct periodic labor law audits to identify and rectify any potential non-compliance issues before they become project-critical.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
];

export const slidesFacility = [
  {
    title: "EPF & ESIC for Contract Workers",
    text: "Meticulous handling of EPF and ESIC contribution calculations and filings tailored specifically for your contract labor model and high-attrition workforce.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Minimum Wages & Working Hours",
    text: "Proactive guidance on adherence to the Minimum Wages Act (which vary by state and sector) and Working Hours Regulations (as per the Shops & Establishments Act) for your entire workforce.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "Statutory Registers",
    text: "Maintenance of all required statutory registers (attendance, wages, overtime, leave records) ensuring they are audit-ready at all times.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: " Reverse Charge Mechanism (RCM) Analysis",
    text: "We analyze your service offerings and client profile to accurately determine when GST RCM applies to your services (e.g., security, manpower supply) and ensure compliant invoicing.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "RCM Compliant Invoicing",
    text: "Guidance on issuing RCM-compliant invoices and ensuring the client fulfills their tax obligations, protecting your contract integrity.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "GST Filing & ITC",
    text: "Seamless management of your own GST filing, ensuring Input Tax Credit (ITC) optimization and preventing costly mismatches.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
];

export const slidesManufacturing = [
  {
    title: "Factories Act Mastery",
    text: `Meticulous management of all "Factories Act registration requirements," license renewals, and the maintenance of mandatory registers (e.g., Muster Roll, Wage Register, Accident Register) for your manufacturing unit.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Contract Labour Compliance (CLRA)",
    text: `Expert management of "CLRA registration for principal employer" and labor license compliances for your contractors, ensuring you meet all legal requirements and are protected from liability.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Audit Readiness & Support",
    text: `Comprehensive assistance during "labour law audits," inspections by Factory Inspectors, including data compilation and expert liaison.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Your Benefit",
    text: "Guaranteed operational legality, protection from shutdown orders, and a simplified management of all your facility and workforce licenses.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const testimonialsHospitality = [
  {
    text: "“ EPFDesk transformed our compliance from a nightmare to a seamless operation. Their expertise in handling our multi-location staff has completely eliminated our compliance worries. ”",
    author: "Neeta ",
    role: "HR Head,Regional Hotel Chain",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/eugenia-200x200.jpg",
  },
  {
    text: "“ As a single-outlet owner, a fine would have been devastating. EPFDesk took away all the fear, so I can focus on my guests ”",
    author: "Rajesh",
    role: "Owner, Boutique Restaurant, Goa",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/gustav-200x200.jpg",
  },
  {
    text: "“ The peace of mind knowing our POSH compliance is handled by experts who guarantee 100% accuracy and timely filings is invaluable for our brand ”",
    author: "Vikram Kumar",
    role: "Regional Commercial Director, Large 5-Star Hotel Group",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/haruka-200x200.jpg",
  },
];

export const testimonialsEducation = [
  {
    text: "“The peace of mind knowing our POSH compliance is handled by experts is invaluable for our brand. Our parents and staff now have complete confidence in our institution's commitment to safety ”",
    author: "Priya Sharma ",
    role: "Principal, CBSE School, Hyderabad",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/eugenia-200x200.jpg",
  },
  {
    text: "“ As a single-campus administrator, a fine would have been devastating. Workforce Limited took away all the fear, so I can focus on my students and faculty.”",
    author: "Rakesh",
    role: "Administrator, Engineering College, Pune",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/gustav-200x200.jpg",
  },
  {
    text: "“ Their expertise in handling our multi-campus staff has completely eliminated our compliance worries. We now have a consistent compliance standard across our entire organization. ”",
    author: "Anand Singh",
    role: "HR Head, Regional College Chain",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/haruka-200x200.jpg",
  },
];

export const faqsHospitality = [
  {
    question: "We have 200+ employees across 5 cities. Too complex?",
    answer:
      "Our biggest client has 2,000 employees across 15 cities, including 5-star chains. You're simple.",
  },
  {
    question: "We get raided tomorrow?",
    answer:
      "We'll be there in 2 hours with all documents. Our emergency response has saved 47 hospitality businesses from closure.",
  },
  {
    question: "What about my odd Goa or Kerala state rules?",
    answer:
      " We operate in all 29 states. Kerala's Shops Act? We wrote the compliance guide.",
  },
  {
    question: "How fast can you start?",
    answer: " 48 hours to full compliance. We've done it 500+ times",
  },
  {
    question: "Our biggest pain is high staff attrition. How do you help?",
    answer:
      " We directly solve this. Our systems automate the creation, linking, and management of EPF and ESIC records for every joiner and exit, turning your biggest administrative burden into a seamless background task. This ensures perfect compliance, even with a high-turnover workforce.",
  },
  {
    question: "Can you handle our GST reconciliation and filings too?",
    answer: ` Yes, our specialized GST team acts as the "operator for your GST machine." We handle meticulous data reconciliation, return filing, and audit defense, ensuring you maximize your Input Tax Credit and are protected from penalties and audits.`,
  },
  {
    question:
      "What licenses are mandatory to open a restaurant or café in India?",
    answer: ` You’ll need: Shops & Establishment License, FSSAI License, Trade License, Fire NOC, Pollution
NOC, and a Health/Sanitation Certificate.
Bars and hotels additionally require Excise and Tourism Department registration.`,
  },
  {
    question: "Are GST and tax filings handled by Workforce?",
    answer: `No — Workforce focuses on regulatory and operational compliance. All taxation, accounting, and audit-related filings (like GST returns or Income Tax) should be
handled by your Chartered Accountant.`,
  },
  {
    question: "How does Workforce help with ongoing compliance?",
    answer: `Our execution system tracks renewal timelines, prepares documents, coordinates inspections,
and handles filings with departments — ensuring no penalty or suspension due to missed
deadlines.`,
  },
  {
    question: "Is Fire NOC and Pollution NOC mandatory for all restaurants?",
    answer: `Yes. Even small cafés and cloud kitchens require fire safety certification and basic pollution/
waste disposal approvals from local authorities.`,
  },
  {
    question: "What employee-related compliances apply in hospitality?",
    answer: `Once you cross 10 employees — ESIC and POSH Act apply.
At 20 employees — EPF becomes mandatory. Workforce registers and manages both.`,
  },
  {
    question: "How long does it take to get all approvals?",
    answer: `Typically 20–45 working days, depending on state and municipality.
Workforce’s process sequencing helps parallelize departments, reducing total turnaround time.`,
  },
  {
    question: "What happens during closure or transfer of a restaurant?",
    answer: `All active licenses must be surrendered or transferred — Fire, FSSAI, Trade, Pollution, etc.
Workforce ensures this is done in proper legal order, so no future liability remains.`,
  },
  {
    question: "Can Workforce handle multiple outlets or franchises?",
    answer: `Yes. Workforce manages location-specific compliance profiles, so each outlet’s licenses and
renewals are tracked separately but managed centrally.`,
  },
  {
    question: "Does Workforce provide legal representation or advisory?",
    answer: `We execute filings, renewals, and NOCs, and coordinate with authorities.
For legal disputes or litigation, we can connect you to verified legal partners — but Workforce’s
core is execution, not representation.`,
  },
  {
    question: "Can I download a compliance checklist before signing up?",
    answer: `Yes — download our free Hospitality Promoter Compliance Checklist (2025) for a complete
state-wise view of every registration, renewal, and NOC required.`,
  },
];

export const faqsEducation = [
  {
    question:
      "Are teachers and non-teaching staff both covered by your services?",
    answer:
      "Yes, our services are specifically tailored for educational institutions and cover all staff, including full-time faculty, part-time teachers, administrative staff, and contractual support personnel.",
  },
  {
    question:
      "Is it mandatory to have a POSH policy and an Internal Committee (IC) in a school or college?",
    answer:
      "Yes. If your institution employs 10 or more people (including teaching, non-teaching, and contractual staff), it is mandatory to have a POSH policy and an Internal Committee (IC). This is a critical legal requirement for the industry.",
  },
  {
    question:
      "How do you help us manage compliance for multiple campuses in different states?",
    answer:
      " Our unique strength lies in our nationwide operational footprint and deep expertise in the nuances of each state's specific labor laws. We provide centralized management for all your registrations and renewals, ensuring seamless compliance across your entire organization.",
  },
  {
    question:
      "What is the biggest compliance risk for an educational institution?",
    answer:
      "The biggest risks are non-compliance with the POSH Act (leading to severe reputational damage), non-adherence to the Shops and Establishment Act (leading to fines), and incorrect statutory contributions for a diverse workforce, which can trigger a large-scale audit.",
  },
  {
    question: "How fast can you start?",
    answer: " 48 hours to full compliance. We've done it 500+ times.",
  },
];

export const faqsConstruction = [
  {
    question:
      "What is the BOCW Act, and is Labour Cess mandatory for my project?",
    answer:
      "The BOCW Act focuses on worker safety and welfare. Yes, the Labour Welfare Cess (1% of construction cost) is mandatory for nearly all construction projects in India. We handle the assessment and timely deposit of this cess.",
  },
  {
    question: "Who is liable for EPF/ESIC if my contractor doesn't pay?",
    answer:
      "Under the CLRA Act, the Principal Employer (you) is ultimately liable if the contractor defaults on statutory payments like EPF/ESIC. Our service includes verification and a system to ensure your contractors comply, removing this liability.",
  },
  {
    question:
      "Is my company liable to pay GST under the Reverse Charge Mechanism (RCM)?",
    answer:
      "Yes, RCM is highly applicable in construction. You (the builder/promoter) are often liable to pay GST on transfer of development rights (TDR/FSI) and if you procure materials/services below certain thresholds from unregistered suppliers. We manage this entire complex liability analysis.",
  },
  {
    question:
      "What are the biggest compliance risks for a construction company?",
    answer:
      "The biggest risks are immediate financial liability under the BOCW Cess Act and the CLRA Act, and the threat of project shutdown due to safety or documentation lapses.",
  },
  {
    question: "How quickly can you ensure my project site is compliant?",
    answer:
      "Our team can perform a full compliance assessment and initiate all critical registrations within 48 hours, ensuring your project maintains legal momentum.",
  },
  {
    question:
      "Do you assist with mandatory safety records and accident reporting?",
    answer:
      "Yes. Our services ensure the proper maintenance of BOCW registers and provide expert assistance for timely accident reporting and documentation as required by the Act.",
  },
];

export const faqsFacility = [
  {
    question: "What is the CLRA Act, and how does it affect my business?",
    answer:
      "The Contract Labour (R&A) Act, 1970, regulates the employment of contract workers. It is critical because it holds you (the principal employer) liable if your contractors fail to provide statutory benefits like EPF, ESIC, or timely wages. We ensure both you and your contractors are compliant.",
  },
  {
    question:
      "Is my client responsible for GST under the Reverse Charge Mechanism (RCM)?",
    answer:
      "Yes, RCM often applies to services you supply, particularly security services or manpower supply services. This means your client must pay the GST. Errors in your invoicing or data can cause them major problems. We ensure your RCM process is flawless, protecting your client's ITC.",
  },
  {
    question:
      "What are the biggest compliance risks for a Facility Management company?",
    answer:
      "The biggest risks are financial liability under the CLRA Act (due to contractor non-compliance), severe penalties for non-adherence to the Minimum Wages Act (especially across states), and legal consequences related to RCM errors.",
  },
  {
    question:
      "How do you handle EPF and ESIC for a high-turnover contract workforce?",
    answer:
      "We provide expert management for statutory contributions for all staff types. Our automated systems accurately calculate EPF and ESIC contributions, ensuring full compliance for your entire workforce and minimizing administrative burdens from high attrition.",
  },
  {
    question:
      "Do you assist with both the Principal Employer's registration and the contractor's license?",
    answer:
      "Yes. We handle the mandatory registration for you as the principal employer and manage the verification, monitoring, and compliance for all your contractors' labor licenses.",
  },
  {
    question:
      "How do you protect us against state-specific differences in minimum wages and labor laws?",
    answer:
      "Our expertise covers the nuances of all Indian states. We provide centralized management and continuous monitoring of state-wise regulations, ensuring your local contracts and payroll adhere to the correct minimum wages and working hours rules.",
  },
];

export const faqsManufacturing = [
  {
    question:
      "Does the Factories Act apply to my business if I have under 20 workers?",
    answer:
      "The Factories Act, 1948, generally applies to any premises where a manufacturing process is carried on with 10 or more workers (using power) or 20 or more workers (without power). We can help you assess its exact applicability and registration requirements.",
  },
  {
    question:
      "Do I need a separate license for contract workers in my factory?",
    answer:
      "Yes. If you engage 20 or more contract workers, you, as the principal employer, must obtain a Registration Certificate under the CLRA Act. Your contractor must also obtain a Labor License. We manage both these processes for you.",
  },
  {
    question:
      "What are the biggest compliance risks for a manufacturing unit in India?",
    answer:
      "The biggest risks are direct non-compliance with the Factories Act (leading to severe penalties, including imprisonment, and production shutdowns) and non-adherence to the CLRA Act, which can lead to liability for your contractor's errors.",
  },
  {
    question:
      "How do you handle EPF and ESIC contributions for a mixed workforce?",
    answer:
      "We provide expert management for statutory contributions for all staff types, accurately calculating EPF and ESIC contributions on varied pay structures, ensuring compliance for your entire workforce and protecting you from penalties.",
  },
  {
    question:
      "Do your services cover safety and health provisions under the Factories Act?",
    answer:
      "Yes, our services cover all required health, safety, and welfare provisions under the Factories Act, including the maintenance of required registers and records, ensuring your factory is compliant with the law.",
  },
  {
    question: "How fast can you start?",
    answer: "48 hours to full compliance. We've done it 500+ times.",
  },
];

export const videoHighlightDataTransport = {
  heading:
    "Your compliance is a direct reflection of your operational efficiency and capacity to deliver.",
  description:
    "A single oversight on a driver's hours or a GST invoice can cascade into a massive operational and legal threat.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const dataTableTransport = [
  {
    threshold: "1+ employee",
    law: "Motor Transport Workers Act (MTWA), 1961",
    meaning:
      "Regulates working hours, welfare, and rest intervals for drivers/transport staff. Registration is mandatory.",
  },

  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948",
    meaning:
      "Triggers social security contributions for eligible transport/warehouse workers.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning: "Triggers mandatory provident fund contributions.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers mandatory registration as Principal Employer (common in warehousing/loading).",
  },
];

export const uspDataTransport = {
  mainTitle:
    "The Cost of Logistics Compliance Chaos: MTWA, RCM & Mobile Workforce",
  cards: [
    {
      title: "The MTWA & Working Hours Audit Risk",
      description:
        "The MTWA limits drivers to 8-hour workdays and requires strict tracking of hours, which is difficult for 24/7 fleets. Failure to comply risks heavy fines, legal action, and operational disruption.",
    },
    {
      title: "The GST RCM (Reverse Charge) Trap for GTAs",
      description: `The GST Reverse Charge Mechanism (RCM) shifts tax payment from the transporter to the service recipient, and mistakes in classification or payment can block Input Tax Credit and create major tax liabilities`,
    },
    {
      title: "The Decentralized Workforce & EPF/ESIC Burden",
      description:
        "Handling EPF and ESIC for a large, high-turnover workforce across multiple states is complex and time-consuming. Errors or missed filings can incur penalties and violate varying state minimum wage laws.",
    },
  ],
};

export const slidesTransport = [
  {
    title: "Motor Transport Workers Act (MTWA) Compliance",
    text: `Complete registration, record maintenance (e.g., duty registers), and compliance with working hours, rest intervals, and welfare provisions for your transport workers.
`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "CLRA & Contract Labour Management",
    text: ` Expert management of CLRA registration for your clients (Principal Employers) and ensuring all your contractors/sub-contractors have valid Labour Licenses (common for warehouse and loading operations).`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Warehouse/Static Compliance",
    text: ` Ensuring adherence to the Shops & Establishment Act for administrative offices and other applicable welfare acts for static warehouse staff.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Reverse Charge Mechanism (RCM) Mastery",
    text: " We analyze your service offerings (GTA, renting) to accurately determine when GST RCM applies and ensure compliant payment and documentation.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "ITC Optimization",
    text: "Seamless GST filing for your own business, optimizing Input Tax Credit (ITC) utilization and preventing costly mismatches.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "E-Way Bill Compliance",
    text: " Guidance and process setup for E-way Bill generation to ensure seamless, legally compliant movement of goods across state lines.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "E-Way Bill Compliance",
    text: " Guidance and process setup for E-way Bill generation to ensure seamless, legally compliant movement of goods across state lines.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "EPF & ESIC Compliance",
    text: " Meticulous handling of EPF and ESIC contribution calculations and filings tailored specifically for a multi-site, high-attrition transport workforce.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Minimum Wages & Working Hours",
    text: "Proactive guidance on adherence to the Minimum Wages Act (which vary by state and category) and Working Hours Regulations across all your decentralized sites.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "POSH Act Compliance",
    text: "Implementation of the POSH Act for all administrative and operational staff, mitigating severe legal and reputational risks.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const faqsTransport = [
  {
    question:
      "What is the Motor Transport Workers Act (MTWA), and does it apply to my fleet?",
    answer:
      "The MTWA regulates the working conditions of motor transport workers (drivers, conductors, cleaners). It applies to every motor transport undertaking employing one or more motor transport workers. It mandates adherence to strict rules on working hours, rest intervals, and welfare. We handle full MTWA compliance.",
  },
  {
    question: "Is our business liable for GST on freight charges under RCM?",
    answer:
      "Yes, the Reverse Charge Mechanism (RCM) often applies to services provided by a Goods Transport Agency (GTA). This means you, the recipient, are liable to pay the GST, not the GTA. Errors in RCM compliance can lead to major tax liabilities. We ensure your RCM process is flawless.",
  },
  {
    question:
      "What is the biggest compliance risk for a logistics company in India?",
    answer:
      "The biggest risks are financial liability under the CLRA Act (due to contractor non-compliance at warehouse/loading sites), severe penalties under the Minimum Wages Act, and legal consequences related to MTWA and RCM errors.",
  },
  {
    question:
      "How do you handle EPF and ESIC for a high-turnover contract workforce?",
    answer:
      "We provide expert management for statutory contributions for all staff types. Our automated systems accurately calculate EPF and ESIC contributions, ensuring full compliance for your entire workforce and minimizing administrative burdens from high attrition.",
  },
  {
    question:
      "What are the penalties for violating the Motor Transport Workers Act?",
    answer:
      "Penalties for violating the MTWA can be severe, including monetary fines, legal action against management, and potential operational disruption (e.g., halting the fleet) due to non-compliance.",
  },
  {
    question:
      "Do you assist with both the Principal Employer's CLRA registration and the contractor's license?",
    answer:
      "Yes. We handle the mandatory registration for you as the principal employer and manage the verification, monitoring, and compliance for all your contractors' labor licenses.",
  },
];

export const cityData = {
  bangalore: {
    pfBangalore: {
      // title: "EPF Consultants Bangalore",
      // subTitle: "We log into your portal and do it for you",
      // description: "Zero Penalties. Zero Stress. Zero Defaults Since 2023.",
      // contact: "bangalore@pfconsultants.in",
      title: "PF Consultant in Bangalore & Karnataka",
      subTitle:
        "New Wage Code Readiness & Compliance for the Tech, Aerospace & Manufacturing Hub",
      description:
        "India's and the region's best EPF consultant. Specialized PF consulting for Bangalore's IT corridors (ORR, Electronic City), Aerospace (Peenya, Whitefield), and Manufacturing sectors. ",
      contact: "bangalore@pfconsultants.in",
    },
    pfRegistrationBangalore: {
      // title: "EPF Registration Bangalore",
      // subTitle: "We get you registered in 7 days",
      // description:
      //   "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      // contact: "bangalore@pfconsultants.in",
      title: "PF Registration Services in Bangalore",
      subTitle: "Get your PF code in 7-15 days. Complete documentation.",
      description: "Professional EPF & ESI registration for new businesses.",
      contact: "bangalore@pfconsultants.in",
    },
    esicBangalore: {
      title: "ESIC Consultants Bangalore",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "bangalore@esicconsultants.in",
    },
    esicRegistration: {
      title: "ESIC Registration Bangalore",
      subTitle: "We get you registered in 5 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Covering Employees Immediately.",
      contact: "bangalore@pfconsultants.in",
    },
    pfMonthlyFilingBangalore: {
      title: "PF Monthly Filing Services in Bangalore",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "bangalore@pfconsultants.in",
    },
    pfComplianceBangalore: {
      title: "EPF Compliance Service in Bangalore",
      subTitle: "New Wage Code (2025) Ready",
      description:
        "India's & Bangalore's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance | EPFDesk",
      contact: "bangalore@pfconsultants.in",
    },
    esicComplianceBangalore: {
      title: "ESIC Compliance Service in Bangalore",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "bangalore@pfconsultants.in",
    },
  },
  hyderabad: {
    pfHyderabad: {
      title: "PF Consultant in Hyderabad & Telangana",
      subTitle: "Mastering IT, Pharma, and New Wage Code Compliance",
      description:
        "India's and the region's best EPF consultant. Specialized PF and Gratuity consulting for Telangana's IT Hub (Gachibowli/HITEC City), Pharma/BioTech Corridor (Genome Valley), and Infrastructure/MSME sector",
      contact: "hyderabad@pfconsultants.in",
    },
    pfComplianceHyderabad: {
      title: "PF Compliance Service in Hyderabad",
      subTitle: "New Wage Code 2025 Fortress for Cyberabad",
      description:
        "India's & Hyderabad's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for IT, Pharma & Startups | EPFDesk",
      contact: "hyderabad@pfconsultants.in",
    },
    pfRegistrationHyderabad: {
      title: "EPF Registration Hyderabad",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "hyderabad@pfconsultants.in",
    },
    esicHyderabad: {
      title: "ESIC Consultant in Hyderabad",
      subTitle: "The Tech and Pharma Compliance Hub",
      description:
        "Hyderabad's specialist ESIC Consultant. We ensure compliance for the high-growth IT/ITES and Pharmaceutical sectors, managing the complex Variable Pay calculations in HITEC City and Gachibowli",
      contact: "hyderabad@esicconsultants.in",
    },

    pfMonthlyFilingHyderabad: {
      title: "PF Monthly Filing Services in Hyderabad",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "hyderabad@pfconsultants.in",
    },
    esicComplianceHyderabad: {
      title: "ESIC Compliance Service in Hyderabad",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "hyderabad@pfconsultants.in",
    },
  },

  mumbai: {
    pfMumbai: {
      title: "PF Consultant in Mumbai & Maharashtra",
      subTitle: "Navigating the Financial and Industrial Compliance Shift",
      description:
        "India's and the region's best EPF consultant. Specialized PF and Gratuity consulting for Mumbai's Financial District, Media & Entertainment sector, and Maharashtra's Industrial/Logistics corridors (Pune-Pimpri Chinchwad, Nashik, Bhiwandi). ",
      contact: "mumbai@pfconsultants.in",
    },
    pfComplianceMumbai: {
      title: "EPF Compliance Service in Mumbai",
      subTitle: "Navigating the New Financial Frontier",
      description:
        "India's & Mumbai's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for BFSI & Manufacturing | EPFDesk",
      contact: "mumbai@pfconsultants.in",
    },
    pfMonthlyFilingMumbai: {
      title: "PF Monthly Filing Services in Mumbai",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "mumbai@pfconsultants.in",
    },
    pfRegistrationMumbai: {
      title: "EPF Registration Mumbai",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "mumbai@pfconsultants.in",
    },
    esicMumbai: {
      title: "ESIC Consultant in Mumbai",
      subTitle: "Compliance Certainty in the City of Thresholds",
      description:
        "Specialist ESIC Consultant in Mumbai. We guarantee compliance for the 20+ employee threshold, manage complexities for Service & Logistics sectors, and prevent recovery notices from the Regional Office, Mumbai.",
      contact: "mumbai@esicconsultants.in",
    },
    esicComplianceMumbai: {
      title: "ESIC Compliance Service in Mumbai",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "mumbai@pfconsultants.in",
    },
  },

  chennai: {
    pfChennai: {
      title: "PF Consultant in Chennai & Tamil Nadu",
      subTitle: "Mastering the Manufacturing & IT Compliance Shift",
      description:
        "India's and the region's best EPF consultant. Essential PF and Gratuity consulting for Tamil Nadu's Automotive/Manufacturing Hubs (Sriperumbudur/Oragadam), IT/ITeS Corridor (OMR/Guindy), and the vast MSME/Textile sector.",
      contact: "chennai@pfconsultants.in",
    },
    pfComplianceChennai: {
      title: "PF Compliance Service in Chennai",
      subTitle: "The Detroit of Asia's NWC 2025 Shield",
      description:
        "India's & Chennai's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Auto, IT/ITeS, & Electronics | EPFDesk",
      contact: "chennai@pfconsultants.in",
    },
    pfMonthlyFilingChennai: {
      title: "PF Monthly Filing Services in Chennai",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "chennai@pfconsultants.in",
    },
    pfRegistrationChennai: {
      title: "EPF Registration Chennai",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "chennai@pfconsultants.in",
    },
    esicChennai: {
      title: "ESIC Consultant in Chennai",
      subTitle: "Navigating the Tamil Nadu Industrial Corridor",
      description:
        "Premier ESIC Consultant in Chennai, specializing in Manufacturing, Automobile, and ITES compliance. Flawless filing with the Regional Office, Chennai to secure your legal defense.",
      contact: "chennai@esicconsultants.in",
    },
    esicComplianceChennai: {
      title: "ESIC Compliance Service in Chennai",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "chennai@pfconsultants.in",
    },
  },

  visakhapatnam: {
    pfVisakhapatnam: {
      title: "PF Consultant in Visakhapatnam",
      subTitle: "The AI & Data Center Compliance Edge",
      description:
        "India's and the Andhra Pradesh region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Vizag's new AI Data Center Hub (Google, Reliance-Brookfield), IT/GCC, Steel (RINL), and Pharma (JNPC/AMTZ) sectors. EPFDesk is ready for the New Wage Code (Effective Nov 21, 2025), ensuring compliance in the face of hyper-scale contract labour, green energy PF complexities, and aggressive EPFO recovery drives.",
      contact: "visakhapatnam@pfconsultants.in",
    },
    pfComplianceVisakhapatnam: {
      title: "PF Compliance Service in Visakhapatnam",
      subTitle: "NWC 2025 Shield for Steel, Port, & IT/AI Hubs",
      description:
        "India's & Visakhapatnam's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for VSP, Pharma City, Port Trust & Google AI Hub | EPFDesk",
      contact: "visakhapatnam@pfconsultants.in",
    },
    pfMonthlyFilingVisakhapatnam: {
      title: "PF Monthly Filing Services in Visakhapatnam",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "visakhapatnam@pfconsultants.in",
    },
    pfRegistrationVisakhapatnam: {
      title: "EPF Registration Visakhapatnam",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "visakhapatnam@pfconsultants.in",
    },
    esicVisakhapatnam: {
      title: "ESIC Consultant in Visakhapatnam & Andhra Pradesh",
      subTitle: "Compliance for the AI/IT Hub",
      description:
        "Specialized ESIC Consultant for Visakhapatnam's booming IT/ITES, Data Center, and Pharmasectors. We guarantee compliance readiness for the New Wage Code's wage definition and protect companies from Principal Employer liability in a dynamic labor market.",
      contact: "visakhapatnam@esicconsultants.in",
    },
    esicComplianceVisakhapatnam: {
      title: "ESIC Compliance Service in Visakhapatnam",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "visakhapatnam@pfconsultants.in",
    },
  },

  delhi: {
    pfDelhi: {
      title: "PF Consultant in Delhi NCR",
      subTitle: "Compliance, Audits & New Wage Code Mastery",
      description:
        "India's and the region's best EPF consultant. Specialized PF and Gratuity consulting for the Delhi NCR's Corporate Headquarters (Gurugram/Aerocity), Manufacturing Corridors (Noida/Faridabad), and the vast MSME sector.",
      contact: "delhi@pfconsultants.in",
    },
    pfComplianceDelhi: {
      title: "PF Compliance Service in Delhi-NCR",
      subTitle: "The New Wage Code 2025 Fortress",
      description:
        "India's & Delhi-NCR's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Services & Manufacturing | EPFDesk",
      contact: "delhi@pfconsultants.in",
    },
    pfMonthlyFilingDelhi: {
      title: "PF Monthly Filing Services in Delhi",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "delhi@pfconsultants.in",
    },
    pfRegistrationDelhi: {
      title: "EPF Registration Delhi",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "delhi@pfconsultants.in",
    },
    esicDelhi: {
      title: "ESIC Consultant in Delhi",
      subTitle: "Compliance in the National Capital Region (NCR)",
      description:
        "Specialist ESIC Consultant in Delhi. We manage compliance for the 10-employee threshold across the Services, Trade, and Manufacturing sectors of NCR. Expert in resolving ESIC HQ notices.",
      contact: "delhi@esicconsultants.in",
    },
    esicComplianceDelhi: {
      title: "ESIC Compliance Service in Delhi",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "delhi@pfconsultants.in",
    },
  },

  pune: {
    pfPune: {
      title: "PF Consultant in Pune & Maharashtra",
      subTitle: "Mastering the IT, Auto & Gratuity Shift",
      description:
        "Specialized PF and Gratuity compliance for Pune's IT/ITeS (Hinjewadi), Automobile Clusters (PCMC), and MSME sector. EPFDesk ensures $\mathbf{100\%}$readiness for the New Wage Code (Effective Nov 21, 2025), manages complex variable pay structures, and defends against aggressive $7A$ assessments from the Regional EPFO, Pune.",
      contact: "pune@pfconsultants.in",
    },
    pfCompliancePune: {
      title: "PF Compliance Service in Pune",
      subTitle: "Shielding the Auto & IT Powerhouse from NWC 2025 Shock",
      description:
        "India's & Pune's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for IT, Auto-OEMs, & Engineering | EPFDesk",
      contact: "pune@pfconsultants.in",
    },
    pfMonthlyFilingPune: {
      title: "PF Monthly Filing Services in Pune",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "pune@pfconsultants.in",
    },
    pfRegistrationPune: {
      title: "EPF Registration Pune",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "pune@pfconsultants.in",
    },
    esicPune: {
      title: "ESIC Consultant in Pune",
      subTitle: "Navigating the Industrial & IT Compliance Nexus",
      description:
        "Leading ESIC Consultant in Pune, specializing in compliance for the Manufacturing, Automobile, and ITES sectors of the Pimpri-Chinchwad and Hinjewadi belts. New Wage Code Ready payroll services for complex Maharashtra regulations.",
      contact: "pune@esicconsultants.in",
    },
    esicCompliancePune: {
      title: "ESIC Compliance Service in Pune",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "pune@pfconsultants.in",
    },
  },

  kolkata: {
    pfKolkata: {
      title: "PF Consultant in Kolkata",
      subTitle: "Jute, Tea, & Engineering Sector Compliance",
      description:
        "India's and West Bengal's best EPF consultant. Expert PF, Gratuity, and labour law consulting for Kolkata's traditional Jute & Tea industries, emerging MSMEs, and Engineering sector. EPFDesk ensures $50\%$Basic Pay compliance under the New Wage Code (Effective Nov 21, 2025) and navigates the complex, often contentious industrial relations environment of the Kolkata Regional EPFO.",
      contact: "kolkata@pfconsultants.in",
    },
    pfComplianceKolkata: {
      title: "PF Compliance Service in Kolkata",
      subTitle: "Navigating Jute, Tea, and the New Wage Code 2025",
      description:
        "India's & Kolkata's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Jute, Tea, & Financial Services | EPFDesk",
      contact: "kolkata@pfconsultants.in",
    },
    pfMonthlyFilingKolkata: {
      title: "PF Monthly Filing Services in Kolkata",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "kolkata@pfconsultants.in",
    },
    pfRegistrationKolkata: {
      title: "EPF Registration Kolkata",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "kolkata@pfconsultants.in",
    },
    esicKolkata: {
      title: "ESIC Consultant in Kolkata",
      subTitle: "Focused Compliance for the Jute, Engineering, & Services Hub",
      description:
        "Specialist ESIC Consultant in Kolkata and West Bengal. We provide New Wage Code Readycompliance for the unique challenges of Jute, Engineering, Tea Gardens, and Traditional Manufacturing. Expert risk mitigation in high-claim areas.",
      contact: "kolkata@esicconsultants.in",
    },
    esicComplianceKolkata: {
      title: "ESIC Compliance Service in Kolkata",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "kolkata@pfconsultants.in",
    },
  },

  ahmedabad: {
    pfAhmedabad: {
      title: "PF Consultant in Ahmedabad",
      subTitle: "Decoding the Textile, Pharma & MSME Compliance Shift",
      description:
        "India's and Gujarat's best EPF consultant. Specialized PF and Gratuity compliance for Ahmedabad's Textile, Pharmaceutical (Pharma), Chemical, and export-oriented MSME sectors. EPFDesk guarantees  compliance with the New Wage Code (Effective Nov 21, 2025), manages complex variable pay structures, and provides robust defense against $7A$ assessments from the Ahmedabad Regional EPFO.",
      contact: "ahmedabad@pfconsultants.in",
    },
    pfComplianceAhmedabad: {
      title: "PF Compliance Service in Ahmedabad",
      subTitle: "Safeguarding Pharma, Textile, & Auto MSMEs from NWC 2025",
      description:
        "India's & Ahmedabad's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Pharma, Textiles, & Sanand Auto Hub | EPFDesk",
      contact: "ahmedabad@pfconsultants.in",
    },
    pfMonthlyFilingAhmedabad: {
      title: "PF Monthly Filing Services in Ahmedabad",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "ahmedabad@pfconsultants.in",
    },
    pfRegistrationAhmedabad: {
      title: "EPF Registration Ahmedabad",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "ahmedabad@pfconsultants.in",
    },
    esicAhmedabad: {
      title: "ESIC Consultant in Ahmedabad",
      subTitle: "Compliance for the Textile, Pharma & Chemical Corridors",
      description:
        "Leading ESIC Consultant in Ahmedabad, specializing in the complex compliance needs of Gujarat's Textile, Pharmaceutical, and GIDC Chemical sectors. We offer New Wage Code Ready services to mitigate high-risk retrospective liabilities.",
      contact: "ahmedabad@esicconsultants.in",
    },
    esicComplianceAhmedabad: {
      title: "ESIC Compliance Service in Ahmedabad",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "ahmedabad@pfconsultants.in",
    },
  },

  surat: {
    pfSurat: {
      title: "PF Consultant in Surat",
      subTitle: "Diamond, Textile, and Power Loom Compliance Expert",
      description:
        "India's and Gujarat's best EPF consultant. Specialized PF, Gratuity, and labour law solutions for Surat's Diamond cutting/polishing, Textile manufacturing, and Power Loom sectors. EPFDesk ensures  adherence to the New Wage Code (Effective Nov 21, 2025), managing variable piece-rate wages and minimizing retrospective $7A$ liabilities from the Surat Regional EPFO.",
      contact: "surat@pfconsultants.in",
    },
    pfComplianceSurat: {
      title: "PF Compliance Service in Surat",
      subTitle:
        "Protecting the Diamond & Textile Workforce from NWC 2025 Shock",
      description:
        "India's & Surat's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Diamond Bourses, Textile Hubs, & MSMEs | EPFDesk",
      contact: "surat@pfconsultants.in",
    },
    pfMonthlyFilingSurat: {
      title: "PF Monthly Filing Services in Surat",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "surat@pfconsultants.in",
    },
    pfRegistrationSurat: {
      title: "EPF Registration Surat",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "surat@pfconsultants.in",
    },
    esicSurat: {
      title: "ESIC Consultant in Surat",
      subTitle: "Precision Compliance for Diamond and Powerloom Industries",
      description:
        "Specialist ESIC Consultant in Surat and South Gujarat. We navigate the complexities of the Diamond Polishing and Powerloom/Textile sectors, focusing on piece-rate workers, migrant labor, and high-risk unit compliance. New Wage Code Ready services.",
      contact: "surat@esicconsultants.in",
    },
    esicComplianceSurat: {
      title: "ESIC Compliance Service in Surat",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "surat@pfconsultants.in",
    },
  },

  gurgaon: {
    pfGurgaon: {
      title: "PF Consultant in Gurugram",
      subTitle: "Decoding the NWC for MNCs, IT & BPOs",
      description:
        "India's and the NCR region's best EPF consultant. Specialized PF and Gratuity compliance for Gurugram's IT/ITES, MNC, Fintech, and Automotive (Manesar) sectors. EPFDesk is  compliant with the New Wage Code (Effective Nov 21, 2025), managing complex variable pay, expatriate PF, and providing robust $7A$ defense in the Haryana EPFO jurisdiction.",
      contact: "gurgaon@pfconsultants.in",
    },
    pfComplianceGurgaon: {
      title: "PF Compliance Service in Gurugram",
      subTitle: "New Wage Code 2025 Shield for IT, BPO, & Auto Hubs",
      description:
        "India's & Gurugram's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Cyber City IT, BPO, & IMT Manesar Auto | EPFDesk",
      contact: "gurgaon@pfconsultants.in",
    },
    pfMonthlyFilingGurgaon: {
      title: "PF Monthly Filing Services in Gurgaon",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "gurgaon@pfconsultants.in",
    },
    pfRegistrationGurgaon: {
      title: "EPF Registration Gurgaon",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "gurgaon@pfconsultants.in",
    },
    esicGurgaon: {
      title: "ESIC Consultant in Gurgaon",
      subTitle: "Statutory Compliance for the Corporate IT & Auto Hub",
      description:
        "Premier ESIC Consultant in Gurgaon, specializing in compliance for Corporate IT/ITES, GCCs, and Automobile Ancillary Units. Expert in salary restructuring for New Wage Code Readiness to manage the inevitable increase in the ESIC contribution base.",
      contact: "gurgaon@esicconsultants.in",
    },
    esicComplianceGurgaon: {
      title: "ESIC Compliance Service in Gurgaon",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "gurgaon@pfconsultants.in",
    },
  },

  noida: {
    pfNoida: {
      title: "PF Consultant in Noida",
      subTitle: "Electronics, Media, and Startup Compliance Navigator",
      description:
        "India's and the UP-NCR region's best EPF consultant. Specialized PF, Gratuity, and labour law solutions for Noida's Electronics Manufacturing Hub (Sector 63, Greater Noida), IT/ITES, Media, and high-growth Startup sectors. EPFDesk ensures  adherence to the New Wage Code (Effective Nov 21, 2025), managing contractual workforce complexities and reducing retrospective $7A$ liabilities from the Uttar Pradesh EPFO.",
      contact: "noida@pfconsultants.in",
    },
    pfComplianceNoida: {
      title: "PF Compliance Service in Noida",
      subTitle: "New Wage Code 2025 Shield for IT, Electronics, & SEZs",
      description:
        "India's & Noida's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Sector 62 IT, Electronics Hubs, & SEZs | EPFDesk",
      contact: "noida@pfconsultants.in",
    },
    pfMonthlyFilingNoida: {
      title: "PF Monthly Filing Services in Noida",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "noida@pfconsultants.in",
    },
    pfRegistrationNoida: {
      title: "EPF Registration Noida",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "noida@pfconsultants.in",
    },
    esicNoida: {
      title: "ESIC Consultant in Noida & Uttar Pradesh",
      subTitle: "Navigating the Manufacturing-IT Divide",
      description:
        "Specialist ESIC Consultant in Noida, Greater Noida, and Western UP, focused on compliance for the Electronics, Apparel, and IT/ITES sectors. Experts in migrant labor management, factory accident claims, and preparing payroll for the New Wage Code's impact on the ESI contribution base.",
      contact: "noida@esicconsultants.in",
    },
    esicComplianceNoida: {
      title: "ESIC Compliance Service in Noida",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "noida@pfconsultants.in",
    },
  },

  jaipur: {
    pfJaipur: {
      title: "PF Consultant in Jaipur",
      subTitle: "Navigating Compliance for Heritage & High-Tech",
      description:
        "India's and the Rajasthan region's best EPF consultant. Specialized PF and Gratuity compliance for Jaipur’s Gems & Jewellery (Johri Bazaar), Tourism/Hospitality, Handicrafts, and the growing IT/Fintech sectors. EPFDesk is  compliant with the New Wage Code (Effective Nov 21, 2025), formalizing employment in the unorganized sector and providing robust $7A$ defense in the Rajasthan EPFO jurisdiction.",
      contact: "jaipur@pfconsultants.in",
    },
    pfComplianceJaipur: {
      title: "PF Compliance Service in Rajasthan",
      subTitle: "Navigating NWC 2025 for Mining, Textiles, & Automobile Hubs",
      description:
        "India's & Rajasthan's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Jaipur IT, Bhiwadi Auto, & Bhilwara Textiles | EPFDesk",
      contact: "jaipur@pfconsultants.in",
    },
    pfRegistrationJaipur: {
      title: "EPF Registration Jaipur",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "jaipur@pfconsultants.in",
    },
    pfMonthlyFilingJaipur: {
      title: "PF Monthly Filing Services in Jaipur",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "jaipur@pfconsultants.in",
    },

    esicJaipur: {
      title: "ESIC Consultant in Jaipur & Rajasthan",
      subTitle: "Compliance for the MSME, Gems & Textile Clusters",
      description:
        "Leading ESIC Consultant in Jaipur, specializing in compliance for Handicrafts, Gems & Jewellery, Textile, and Marble/Granite MSMEs across Rajasthan. Expert in managing informal labor, principal employer liability, and ensuring seamless transition to the New Wage Code's wage definition.",
      contact: "jaipur@esicconsultants.in",
    },
    esicComplianceJaipur: {
      title: "ESIC Compliance Service in Jaipur",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "jaipur@pfconsultants.in",
    },
  },

  lucknow: {
    pfLucknow: {
      title: "PF Consultant in Lucknow",
      subTitle: "Governing Compliance for The Administrative & Service Hub",
      description:
        "India's and the UP-Central region's best EPF consultant. Essential PF, Gratuity, and New Wage Code implementation for Lucknow’s Government Contractors, IT/ITES (Gomti Nagar), Real Estate, and traditional 'Chikan' Handicrafts sectors. EPFDesk is  ready for the New Wage Code (Effective Nov 21, 2025), specializing in contractual liability defense against the rigorous UP EPFO enforcement.",
      contact: "lucknow@pfconsultants.in",
    },
    pfComplianceLucknow: {
      title: "PF Compliance Service in Lucknow",
      subTitle: "New Wage Code 2025 Shield for IT, Defence, & MSME Hubs",
      description:
        "India's & Lucknow's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Gomti Nagar IT, Defence Corridor Units, & Mohanlal Ganj Industries | EPFDesk",
      contact: "lucknow@pfconsultants.in",
    },
    pfMonthlyFilingLucknow: {
      title: "PF Monthly Filing Services in Lucknow",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "lucknow@pfconsultants.in",
    },
    pfRegistrationLucknow: {
      title: "EPF Registration Lucknow",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "lucknow@pfconsultants.in",
    },
    esicLucknow: {
      title: "ESIC Consultant in Lucknow & Uttar Pradesh",
      subTitle: "Securing Compliance in the MSME and Service Sector",
      description:
        "Premier ESIC Consultant in Lucknow and across UP, specializing in compliance for the rapidly expanding MSME, IT/ITES, Healthcare, and Traditional Craft (ODOP) sectors. Navigate UP's extensive ESIC expansion and prepare your payroll for the mandatory New Wage Code changes.",
      contact: "lucknow@esicconsultants.in",
    },
    esicComplianceLucknow: {
      title: "ESIC Compliance Service in Lucknow",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "lucknow@pfconsultants.in",
    },
  },

  indore: {
    pfIndore: {
      title: "PF Consultant in Indore",
      subTitle: "Future-Proofing Central India’s Commercial Capital",
      description:
        "India's and the Madhya Pradesh region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Indore's booming IT/ITES (Super Corridor), Automobile/Ancillary (Pithampur SEZ), and Textile/Namkeen (traditional clusters) industries. EPFDesk is compliant with the New Wage Code (Effective Nov 21, 2025), ensuring payroll stability and robust defense against the rigorous MP EPFO jurisdiction.",
      contact: "indore@pfconsultants.in",
    },
    pfComplianceIndore: {
      title: "PF Compliance Service in Indore",
      subTitle: "NWC 2025 Preparedness for Auto, IT & Pithampur SEZ",
      description:
        "India's & Indore's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Pithampur Auto, Super Corridor IT, & SEZ Units | EPFDesk",
      contact: "indore@pfconsultants.in",
    },
    pfMonthlyFilingIndore: {
      title: "PF Monthly Filing Services in Indore",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "indore@pfconsultants.in",
    },
    pfRegistrationIndore: {
      title: "EPF Registration Indore",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "indore@pfconsultants.in",
    },
    esicIndore: {
      title: "ESIC Consultant in Indore & Madhya Pradesh",
      subTitle: "Targeting Auto, IT, and Food Processing",
      description:
        "Premier ESIC Consultant in Indore and MP, specializing in compliance for the Automobile, IT/ITES, Food Processing, and Pharmaceutical sectors. Experts in factory registration, contract worker compliance, and ensuring payroll adherence to the New Wage Code's revised contribution base.",
      contact: "indore@esicconsultants.in",
    },
    esicComplianceIndore: {
      title: "ESIC Compliance Service in Indore",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "indore@pfconsultants.in",
    },
  },

  coimbatore: {
    pfCoimbatore: {
      title: "PF Consultant in Coimbatore",
      subTitle: "Securing Compliance for the ‘Manchester of South India",
      description:
        "India's and the Tamil Nadu region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Coimbatore's Textile Mills, Auto/Engineering Foundries, Pump Set Manufacturers, and Contract Labour sectors. EPFDesk is ready for the New Wage Code (Effective Nov 21, 2025), ensuring business continuity against aggressive EPFO attachment drives.",
      contact: "coimbatore@pfconsultants.in",
    },
    pfComplianceCoimbatore: {
      title: "PF Compliance Service in Coimbatore",
      subTitle:
        "New Wage Code 2025 Shield for Textiles, Pump City, & IT Corridor",
      description:
        "India's & Coimbatore's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Textile Mills, Peelamedu IT, & Pump/Engineering Hubs | EPFDesk",
      contact: "coimbatore@pfconsultants.in",
    },
    pfMonthlyFilingCoimbatore: {
      title: "PF Monthly Filing Services in Coimbatore",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "coimbatore@pfconsultants.in",
    },
    pfRegistrationCoimbatore: {
      title: "EPF Registration Coimbatore",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "coimbatore@pfconsultants.in",
    },
    esicCoimbatore: {
      title: "ESIC Consultant in Coimbatore & Tamil Nadu",
      subTitle: "Compliance for the Manchester of South India",
      description:
        "Leading ESIC Consultant in Coimbatore, specializing in the high-stakes compliance challenges of the Textile, Spinning Mill, Foundry, and Auto Component sectors across Tamil Nadu. Ensure your factory payroll is secured and New Wage Code ready.",
      contact: "coimbatore@esicconsultants.in",
    },
    esicComplianceCoimbatore: {
      title: "ESIC Compliance Service in Coimbatore",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "coimbatore@pfconsultants.in",
    },
  },

  vadodara: {
    pfVadodara: {
      title: "PF Consultant in Vadodara",
      subTitle: "The New Wage Code Solution for Gujarat's Industrial Capital",
      description:
        "India's and the Gujarat region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Vadodara's massive Petrochemical, Pharmaceutical (Pharma), Engineering (MSME), and GIDC clusters. EPFDesk is compliant with the New Wage Code (Effective Nov 21, 2025), ensuring payroll stability and defense against Gujarat's stringent labor inspection regime.",
      contact: "vadodara@pfconsultants.in",
    },
    pfComplianceVadodara: {
      title: "PF Compliance Service in Vadodara",
      subTitle:
        "NWC 2025 Preparedness for Makarpura GIDC, Refinery & Power Hubs",
      description:
        "India's & Vadodara's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Makarpura GIDC, Refinery Sector, & Engineering | EPFDesk",
      contact: "vadodara@pfconsultants.in",
    },
    pfMonthlyFilingVadodara: {
      title: "PF Monthly Filing Services in Vadodara",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "vadodara@pfconsultants.in",
    },
    pfRegistrationVadodara: {
      title: "EPF Registration Vadodara",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "vadodara@pfconsultants.in",
    },
    esicVadodara: {
      title: "ESIC Consultant in Vadodara & Gujarat",
      subTitle: "Compliance for the Industrial Powerhouse",
      description:
        "Expert ESIC Consultant in Vadodara and Gujarat. Specialized in Chemical, Pharmaceuticals, Engineering, and Ceramics sector compliance. We secure your business from retrospective demands and ensure New Wage Code payroll readiness.",
      contact: "vadodara@esicconsultants.in",
    },
    esicComplianceVadodara: {
      title: "ESIC Compliance Service in Vadodara",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "vadodara@pfconsultants.in",
    },
  },

  nagpur: {
    pfNagpur: {
      title: "PF Consultant in Nagpur",
      subTitle: "Compliance for MIDC, Coal, and The Orange City",
      description:
        "India's and the Vidarbha region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Nagpur's Butibori & Hingna MIDC (Engineering, Auto, Steel, FMCG), WCL Coal Mines, and the Food Processing sector. EPFDesk is ready for the New Wage Code (Effective Nov 21, 2025), tackling massive contract labour liability, municipal body defaults, and the mandatory $50\%$ Basic Wage rule.",
      contact: "nagpur@pfconsultants.in",
    },
    pfComplianceNagpur: {
      title: "PF Compliance Service in Nagpur",
      subTitle: "NWC 2025 Preparedness for MIHAN, Butibori, and Hingna MIDC",
      description:
        "India's & Nagpur's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for MIHAN SEZ, Butibori, Hingna MIDC, & Logistics Hubs | EPFDesk",
      contact: "nagpur@pfconsultants.in",
    },
    pfMonthlyFilingNagpur: {
      title: "PF Monthly Filing Services in Nagpur",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "nagpur@pfconsultants.in",
    },
    pfRegistrationNagpur: {
      title: "EPF Registration Nagpur",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "nagpur@pfconsultants.in",
    },
    esicNagpur: {
      title: "ESIC Consultant in Nagpur & Maharashtra",
      subTitle: "Compliance for the Central India Hub",
      description:
        "Premier ESIC Consultant in Nagpur and Maharashtra, specializing in Manufacturing, Textile, Logistics, and rapidly expanding Education/Healthcare sectors. We manage contractor compliance, navigate retrospective ESIC demands, and ensure absolute readiness for the mandatory New Wage Code's  wage rule.",
      contact: "nagpur@esicconsultants.in",
    },
    esicComplianceNagpur: {
      title: "ESIC Compliance Service in Nagpur",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "nagpur@pfconsultants.in",
    },
  },

  bhopal: {
    pfBhopal: {
      title: "PF Consultant in Bhopal",
      subTitle: "Navigating Pharmaceuticals, IT, and Infra Liability",
      description:
        "India's and the Madhya Pradesh region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Bhopal's Pharma (Lupin, Mandideep), Infrastructure (Dilip Buildcon), IT/Startup sector, and BHEL vendors. EPFDesk is ready for the New Wage Code (Effective Nov 21, 2025), eliminating $\mathbf{7A}$ liability on construction sites and ensuring NWC-compliant IT salary structures.",
      contact: "bhopal@pfconsultants.in",
    },
    pfComplianceBhopal: {
      title: "PF Compliance Service in Bhopal",
      subTitle: "NWC 2025 Shield for BHEL, Govindpura & AI City",
      description:
        "India's & Bhopal's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for BHEL, Govindpura, Mandideep, & New AI/Tech Hub | EPFDesk",
      contact: "bhopal@pfconsultants.in",
    },
    pfMonthlyFilingBhopal: {
      title: "PF Monthly Filing Services in Bhopal",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "bhopal@pfconsultants.in",
    },
    pfRegistrationBhopal: {
      title: "EPF Registration Bhopal",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "bhopal@pfconsultants.in",
    },
    esicBhopal: {
      title: "ESIC Consultant in Bhopal & Madhya Pradesh",
      subTitle: "Compliance for Industrial & Contract Labor",
      description:
        "Specialized ESIC Consultant for Bhopal and Madhya Pradesh's core sectors: Automobile, Pharmaceutical, Govindpura Industrial Estate, and Mandideep. We eliminate retrospective liability via SPREE 2025, manage complex contract labor ESIC, and guarantee seamless transition to the mandatory New Wage Code's wage definition.",
      contact: "bhopal@esicconsultants.in",
    },
    esicComplianceBhopal: {
      title: "ESIC Compliance Service in Bhopal",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "bhopal@pfconsultants.in",
    },
  },

  kanpur: {
    pfKanpur: {
      title: "PF Consultant in Kanpur",
      subTitle: "Jajmau's Leather Crisis and the New Wage Code Shock",
      description:
        "India's and the Uttar Pradesh region's best EPF consultant. Specialized PF, Gratuity, and ESI compliance for Kanpur's Leather (Jajmau/Unnao), Textile, and Defence ancillary sectors. EPFDesk is ready for the New Wage Code (Effective Nov 21, 2025), tackling massive $\mathbf{7A}$assessments on contract labor, managing the $\mathbf{50\%}$ statutory wage floor, and securing export-unit compliance.",
      contact: "kanpur@pfconsultants.in",
    },
    pfComplianceKanpur: {
      title: "PF Compliance Service in Kanpur",
      subTitle:
        "New Wage Code 2025 Shield for Panki, Jajmau, & Defence Corridor",
      description:
        "India's & Kanpur's Best EPF Consultant: New Wage Code 2025 Ready PF Compliance for Panki, Jajmau Leather Cluster, & UPDIC Node | EPFDesk",
      contact: "kanpur@pfconsultants.in",
    },
    pfMonthlyFilingKanpur: {
      title: "PF Monthly Filing Services in Kanpur",
      subTitle: "ECR filed by 15th. Every month. Zero errors. Zero late fees",
      description:
        "Automated PF return filing for hassle-free compliance. 6,000+ ECR returns filed. 100% on-time record. Never missed a deadline.",
      contact: "kanpur@pfconsultants.in",
    },
    pfRegistrationKanpur: {
      title: "EPF Registration Kanpur",
      subTitle: "We get you registered in 7 days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "kanpur@pfconsultants.in",
    },
    esicKanpur: {
      title: "ESIC Consultant in Kanpur & Uttar Pradesh",
      subTitle: "Securing Compliance in the Leather & Industrial Hub",
      description:
        "Premier ESIC Consultant in Kanpur and Uttar Pradesh, specializing in the complex Leather, Textile (Hosiery), and Defence Corridors. We navigate the high-risk contract labor environment, manage environmental-related operational restrictions, and ensure immediate, full compliance with the mandatory New Wage Code's restructured wage definition.",
      contact: "kanpur@esicconsultants.in",
    },
    esicComplianceKanpur: {
      title: "ESIC Compliance Service in Kanpur",
      subTitle: "End The Health Risk. Guarantee Coverage.",
      description:
        "We make ESIC flawless. Expert calculation on gross wages, timely filing, and guaranteed IP Card/Dispensary linking. Eliminate liability, secure compliance.",
      contact: "kanpur@pfconsultants.in",
    },
  },
};

// data.js
export const gstData = [
  {
    slug: "gst-expert-consultants-in-bangalore",
    title: "GST Expert Consultants in Bangaloregst",
    description: "Trusted GST filing and advisory services in Bangalore.",
  },
  {
    slug: "gst-consultants-in-bangalore",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gstr-2",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gstr-3b",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gst-monthly-returns-filings-in-bangalore",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gst-registration-in-bangalore",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
];

export const standalonePages = {
  "umang-app": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "UAN-linking": {
    title: "EPFO Login Guide for Members",
    description:
      "Step-by-step instructions for EPFO member login, UAN activation, and password reset.",
  },
  "pf-consultants-for-it": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-consultants-for-factories": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-consultants-for-manufacturing": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-monthly-returns": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "UAN-creation": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "PF-monthly-challans": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "PF-registration-in-bangalore": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "IC-registration-in-bangalore": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "ECR-monthly-generation": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-notice-reply": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pension-withdrawl": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-death-claim-procedure": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-employee-grievience-handling": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-generate-UAN-number": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-schools": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-colleges": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-hospitals": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-hotels": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "ecr-issues": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-close-epf-registration": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-change-address-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-link-dsc-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-approve-claims-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-approve-form-13": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-approve-employee-name-change-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-file-joint-declaration-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-form-5": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-updates": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-policy-changes": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-code-closure": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
};

export const standalonePagesEsic = {
  "esic-challan-generation": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-consultants-for-it": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-consultants-for-factories": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-consultants-for-manufacturing": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-monthly-returns": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
};

export const epfManagementBangalore = {
  mainTitle: "Comprehensive Employer EPF Compliance Services",
  cards: [
    //     {
    //       title: "What Businesses in Bangalore Are Facing?",
    //       features: [
    //         `Every month, hundreds of Bengaluru establishments lose time and money over EPF defaults
    // they never saw coming.`,
    //         `Missed challans, wrong UAN mapping, delayed inspection replies — small mistakes that cost
    // lakhs.`,
    //         `The law doesn’t forgive ignorance.`,
    //         `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //       ],
    //     },
    //     {
    //       title: "What Workforce Does?",

    //       features: [
    //         `Workforce builds the compliance infrastructure that Indian enterprises run on.`,
    //         `From Peenya’s factories to Koramangala’s startups, we handle end-to-end EPF obligations
    // — so your team never has to.`,
    //       ],
    //     },
    {
      title: "Our Services",

      features: [
        `EPF Registration & Code Activation — handled in 48 hours.`,
        `Monthly Return Filing (ECR & Challan) — automated + verified.`,
        `EPFO Inspection & Notice Response — legal drafting, officer representation.`,
        `Employee UAN & KYC Management — streamlined onboarding & exits.`,
        `Establishment Closure or Transfer — complete documentation & surrender.`,
        `PF Health Report — Know your compliance score before your next
inspection.`,
      ],
    },
    {
      title: "Built for India’s Employers",

      features: [
        `Workforce serves over 100 enterprises across Karnataka — from industrial clusters to IT
parks — ensuring continuous compliance and peace of mind.`,
        `Case Example:A Bengaluru logistics firm faced ₹8.7 lakh penalty after PF short remittance across 47
employees. Workforce intervened, reconciled challans, and cleared inspection in 14 days — zero further
liability.`,
      ],
    },
    {
      title: "Get Your Free PF Health Audit",

      features: [
        `Before the next inspection letter arrives, know where you stand.`,
        `Upload your last PF challan or ECR file.`,
        `We’ll review and send a detailed risk report:
  * Missing employee codes
  * Interest liabilities
  * Delayed payment flags
  * Future inspection triggers`,
      ],
    },
    {
      title: "Why Choose Workforce?",

      features: [
        `Response Time:Live compliance experts available same day.`,
        `Data Security:End-to-end encrypted filing environment.`,
        `Local Network:Deep liaison with Karnataka PF offices.`,
        `Accuracy:Auto-check of ECR mismatch before submission.`,
        `Accountability:You deal with licensed consultants, not brokers.`,
        `We don’t file forms. We build trust between the law and those who follow it.`,
      ],
    },
  ],
};

export const epfManagementFaqBangalore = [
  {
    question:
      "Our IT company's Basic Pay is 30% of CTC. The New Wage Code says it must be 50%. Will this automatically increase our CTC?",
    answer: `No, the total CTC does not automatically increase, but the statutory contributions will rise. The law mandates that the 'Wages' component must be ≥50% of CTC. We will restructure your CTC to meet this rule, for example:
The 20% difference (from 30% to 50%) will be shifted from non-statutory allowances (like Special Allowance or HRA component) to the Basic Pay.
This increased Basic Pay will then increase the PF contribution (both 12% Employee & 12% Employer share).
The overall CTC remains the same, but the monthly take-home salary will be reduced due to higher PF deductions, and the employer's gratuity liability increases. We help manage this communication and restructuring.`,
  },
  {
    question:
      "I employ an International Worker (IW) on a salary of ₹5,00,000 per month. Do I need to pay PF on the full amount, especially after the Karnataka High Court ruling?",
    answer: `This is a complex, high-risk area. The Karnataka High Court has struck down the special provisions that mandated PF on the full global salary of all IWs. However, the ruling is likely to be appealed by the EPFO.
As of today, the safest, risk-mitigated strategy requires an assessment based on the employee's country (SSA vs. Non-SSA) and ensuring your contribution method aligns with the latest, but often conflicting, directives to protect your company from future litigation. We provide a definitive contribution strategy for your International Workers.`,
  },

  {
    question:
      "The EPFO systems are often slow or down. How does EPFDesk ensure my ECR is filed on time and I avoid penalties?",
    answer: `Our process involves using optimized, error-free data formats to minimize system rejection. We monitor the operational status of the Bangalore EPFO portal continuously and leverage our expertise in filing during low-traffic periods. This minimizes the risk of late filing penalties (Damages under Section 14B of the PF Act), a major financial risk for compliance teams.`,
  },

  // --- Existing FAQs Below (unchanged) ---

  {
    question: "Is PF registration mandatory for my company?",
    answer: `Yes. PF registration is mandatory if you have 20+ employees (any establishment) or 10+ employees (factories). All employees count—full-time, part-time, contractual. Registration must be done within 1 month of crossing the threshold. Penalty for non-registration can reach ₹5,000–1,00,000 + backdated PF + interest. Even if everyone earns >₹15,000, registration is still mandatory. In Bangalore, PF compliance is also checked during investor due diligence and can impact funding.`,
  },
  {
    question: "How much does PF compliance cost?",
    answer: `PF cost includes: Employer PF at 12% (3.67% EPF + 8.33% EPS) capped at ₹1,800/employee/month + employee contribution ₹1,800 (deducted from salary). Consultant fee varies from ₹5,000–20,000/month. PF registration one-time cost is ₹10,000–15,000.  
For 50 employees (₹15K basic): Employer PF = ₹90,000 + consultant fee ≈ ₹95,000/month. This ensures legal compliance, avoids penalties, and strengthens employee benefits.`,
  },
  {
    question: "What happens if I don't pay PF on time?",
    answer: `Consequences include: Interest at 12% p.a, penalty of ₹5,000–1,00,000, possible bank account attachment, employee complaints triggering inspection, and prosecution for repeat offenses (up to 3 years imprisonment).  
Example: ₹1,00,000 late by 1 month → ~₹1,000 interest + ₹10,000–50,000 penalty.  
We file by 12th of every month to guarantee zero late fees.`,
  },
  {
    question: "Can I reduce PF costs legally through salary restructuring?",
    answer: `Yes, by legally optimizing Basic + DA since PF applies only on that. Lower Basic (while increasing HRA/Allowances) reduces PF outgo.  
Example: CTC ₹30,000 → Basic ₹30K = PF ₹1,800. If restructured to Basic ₹12K, PF becomes ₹1,440 (₹360/month saving per employee).  
This must be structured legally—EPFO can challenge fake structures. We handle compliant PF-optimized salary design.`,
  },
  {
    question: "How long does PF transfer take?",
    answer: `Timelines vary: 7–15 days if UAN, Aadhaar, bank are updated; 2–6 months if previous employer hasn't filed ECR; 1–2 months if rejected due to errors. India average: 2–3 months.  
With our process (pre-verification + follow-ups): 12–18 days. Fastest we achieved: 5 days.  
Bangalore’s Koramangala PF office allows physical escalation if needed.`,
  },
  {
    question: "What is UAN and why is it important?",
    answer: `UAN is a lifetime 12-digit employee PF number. It enables online PF transfer, self-withdrawal, and passbook access. Without UAN, PF transfers take 6+ months and require employer approval.  
UAN must be generated within 1 month of joining. We generate, activate, link Aadhaar/PAN/bank, and enable PF passbook within 7 days.`,
  },
  {
    question: "Can employees withdraw PF before retirement?",
    answer: `Yes, in certain cases. Full withdrawal: 2+ months unemployment, retirement, moving abroad. Partial withdrawal: medical, education, marriage, housing loan, etc.  
If withdrawn before 5 years, PF becomes taxable.  
Online process takes 15–45 days. We file and track claims, including employer approvals within 72 hours.`,
  },
  {
    question: "What is the difference between EPF and EPS?",
    answer: `EPF is the employee’s savings bucket (100% refundable + 8.15% interest). EPS is pension (created from employer's 8.33%, not withdrawable, paid as monthly pension after 58 if 10+ years service).  
Current max pension ≈ ₹7,500/month unless opted for higher pension scheme. We also help employees assess higher pension eligibility.`,
  },
  {
    question: "What documents are needed for PF registration?",
    answer: `Required: PAN of company, Incorporation/Partnership deed, address proof, bank details + cancelled cheque, director/partner KYC, employee list, DSC of authorized signatory, board resolution, official email/mobile.  
Timeline: 7–15 days for PF code, 2–3 weeks for full activation. We handle 100% end-to-end registration.`,
  },
  {
    question: "How does ESI work and when is it mandatory?",
    answer: `Mandatory for: 10+ employees in factories or 20+ in other establishments where any employee earns <₹21,000.  
Contribution: Employee 0.75% + Employer 3% of full salary.  
Benefits include medical, maternity, disability, sickness pay. Bangalore has multiple ESI hospitals. Non-registration penalty: ₹10,000 + backdated payment.`,
  },
  {
    question: "What happens during an EPFO inspection?",
    answer: `Inspection checks coverage, PF calculation, ECR filings, challans, salary records, Form 6/12A, attendance, offer letters.  
Common issues: non-coverage, PF miscalculation, delayed filings. Penalties can go up to ₹5 lakhs.  
We run mock audits, keep all records ready, and represent during inspection so you face zero stress.`,
  },
  {
    question: "Can I have employees in multiple cities with one PF code?",
    answer: `One PF code works for all locations within one state (Bangalore + Mysore = 1 code). Different state offices need separate codes (Bangalore + Hyderabad = 2 codes).  
For scattered remote employees across India, many companies still use HQ code—common practice.  
We manage centralized compliance even with multiple PF codes.`,
  },
  {
    question: "What is the PF higher pension scheme and should employees opt?",
    answer: `It allows pension calculation on actual salary instead of ₹15K wage ceiling but requires extra contribution, including past contributions.  
It benefits long-term high-income employees (20+ years runway to retirement). Current window is closed, but legal cases are ongoing. We do case-by-case eligibility analysis.`,
  },
  {
    question: "What is the penalty for PF non-compliance?",
    answer: `Penalties include: 12% interest (Section 7Q), ₹5,000–₹1,00,000 damages (Section 14B), up to 3 years imprisonment (Section 14), and non-registration penalty up to ₹5 lakhs.  
Example: ₹1,00,000 delayed 6 months → ₹6,000 interest + ₹20,000 penalty.  
In Karnataka, penalties are negotiable with proper representation. Prevention is the best solution—zero penalties is our standard.`,
  },
  {
    question: "How do PF consultants help vs doing it yourself?",
    answer: `DIY works if you have <20 employees and stable payroll. Consulting is worth it when you have 50+ employees, frequent exits, salary structuring, or want zero risk.  
We provide: salary optimization, PF transfers, claim handling, notices, inspections, error-free filings, time savings (20–40 hrs/month), and penalty prevention.  
ROI averages 10x—₹1.2L/year service cost can save ₹10–15L through compliance, error reduction and optimized payroll.`,
  },
];

export const largeCardsEpfoBangalore = {
  subTitle: "What Our Bangalore Clients Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Priya M., HR Director",
      subtitle: `Before EPFdesk, our HR spent 2 days every month on PF filing. Now? They don’t even think about it. In 18 months, we haven’t had a single late filing or penalty.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Rajesh K., Finance Head",
      subtitle: `When we got an EPFO inspection notice, we panicked. EPFdesk responded in 4 hours, handled everything, and we closed the inspection with zero penalties. Worth every rupee`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Anita S., Operations Manager",
      subtitle: `Our employees used to bombard HR with PF questions. Now they just WhatsApp EPFdesk directly. That alone has saved us 10 hours a week.” `,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEpfoBangalore = {
  // subTitle: "Get Started in 3 Steps",
  // // subText:
  // //   "Our experts handle complete setup while you focus on your business.",
  // cards: [
  //   {
  //     title: "Step 1",
  //     subtitle: `Talk to us for 10 minutes — we’ll audit your current setup`,
  //     number: 1,
  //   },
  //   {
  //     title: "Step 2",
  //     subtitle: `We onboard in 48 hours — portal access, documentation, process setup`,
  //     number: 2,
  //   },
  //   {
  //     title: "Step 3",
  //     subtitle: `Relax — we handle everything from Day 1`,
  //     number: 3,
  //   },

  // ],
  subTitle: "Why Bangalore Companies Choose Our PF Consulting",
  subText: "Not just filing. Complete PF management and protection.",
  cards: [
    {
      title: "Never Miss a Deadline",
      subtitle: `ECR filed by 15th every month. ESI by 15th. Annual returns on time. Automatic reminders. Zero late fees (saves ₹5,000-50,000/year).`,
      number: 1,
    },
    {
      title: "Zero Compliance Errors",
      subtitle: `UAN validation before filing. Contribution calculation verified. Wage ceiling compliance checked. Employee records accurate. Clean audit trail.`,
      number: 2,
    },
    {
      title: "Employee Satisfaction",
      subtitle: `Fast PF transfer processing (7-15 days vs 2-3 months). Quick withdrawal claims. UAN seeding done properly. Portal issues resolved. Happy employees = lower attrition.`,
      number: 3,
    },
    {
      title: "EPFO Inspection Ready",
      subtitle: `All documents organized digitally. Past 3 years records audit-ready. Confidence during inspections. Notice response expertise. Minimize penalty exposure.`,
      number: 4,
    },
    {
      title: "Cost Optimization",
      subtitle: `Legal salary restructuring (reduce PF burden by 15-30%). Identify overpayments. Recover excess contributions. Optimize statutory costs without breaking rules.`,
      number: 5,
    },
    {
      title: "Expert Advisory Access",
      subtitle: `Dedicated PF consultant assigned. Complex queries answered in 4 hours. Annual compliance planning. Law updates communicated proactively. Peace of mind guaranteed.`,
      number: 6,
    },
  ],
};

export const videoHighlightDataEpfBangalore = {
  heading:
    "PF Consultants in Bangalore — End-to-End EPF Compliance by Workforce",
  description:
    "Workforce is Bangalore’s trusted PF compliance partner — managing EPF registration, filings, inspections, and closure for India’s top employers.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const uspDataEpfBangalore = {
  mainTitle: "What Businesses in Bangalore Are Facing?",
  cards: [
    {
      title: "The Cost of Missed Compliance",
      description:
        "Every month, hundreds of Bengaluru establishments lose time and money over EPF defaults they never saw coming.",
    },
    {
      title: "The Real Cost of PF Filing Errors",
      description:
        "Missed challans, wrong UAN mapping, delayed inspection replies — small mistakes that cost lakhs.",
    },
    {
      title: "Compliance Isn’t Optional — It’s the Law",
      description: "The law doesn’t forgive ignorance.",
    },
    {
      title: "Responsibility Can’t Be Outsourced",
      description:
        "If you’re an employer, you’re responsible — even when your contractor isn’t.",
    },
  ],
};

export const slidesEpfBangalore = [
  {
    title: "Building India’s Compliance Infrastructure",
    text: "Workforce builds the compliance infrastructure that Indian enterprises run on.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Powering India’s Businesses Through Compliance Infrastructure",
    text: `
From Peenya’s factories to Koramangala’s startups, we handle end-to-end EPF obligations — so your team never has to.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "EPF Registration & Code Activation",
    text: "We handle complete EPFO registration for new establishments in Karnataka — from digital signature setup to code allotment — ensuring your organization is compliant and operational within 48 working hours.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Employee UAN & KYC Management",
    text: `
End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Our Services",
    text: `
EPF Registration & Code Activation — handled in 48 hours. Monthly Return Filing (ECR & Challan) — automated + verified. EPFO Inspection & Notice Response — legal drafting, officer representation. Employee UAN & KYC Management — streamlined onboarding & exits.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Built for India’s Employers",
    text: `
Workforce serves over 100 enterprises across Karnataka — from industrial clusters to IT parks — ensuring continuous compliance and peace of mind.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Get Your Free PF Health Audit",
    text: "Before the next inspection letter arrives, know where you stand. Upload your last PF challan or ECR file. We’ll review and send a detailed risk report",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Why Choose Workforce?",
    text: `
Live compliance experts available same day. End-to-end encrypted filing environment. Deep liaison with Karnataka PF offices. Auto-check of ECR mismatch before submission. You deal with licensed consultants, not brokers.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const epfBangaloreCardData = {
  title: "EPF Management",
  subTitle: "End to End EPF compliance Management in Bangalore",
  description:
    "Your EPF compliance worries end here. EPFdesk has protected 50+ Bangalore enterprises from EPF penalties with zero defaults — and we’re ready to do the same for you. From Peenya’s factories to Whitefield’s tech corridors, Electronic City, Koramangala, and the CBD, businesses trust us to handle what keeps HR teams awake: employee UAN linking that never lags, exit marking that meets every deadline, monthly ECRs filed flawlessly, inspection notices resolved without penalties, and contractor PF obligations that don’t become your nightmare. Our difference? We don’t just tell you what to do — we log into your portal and do it for you. Whether you’re a startup activating EPFO for the first time, a manufacturer drowning in contractor documentation, or an IT company fielding employee PF questions, our Bangalore team transforms EPF from your constant worry into your competitive advantage. Sleep better tonight. Your EPF compliance is now our responsibility.",
};

export const testimonialsEpfBangalore = {
  title: "What We Actually Do (Not Just Consult)",
  subTitle:
    "We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards: [
    {
      id: 1,
      name: "Onboarding (Day 1)",
      text: `Day-1 EPF onboarding made effortless — we generate and link UANs, complete all KYC and bank verifications via the UMANG app, and ensure every new employee is EPF-compliant within 24 hours of joining.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 2,
      name: "Monthly Filing (Before 15th Every Month)",
      text: `Timely and accurate monthly EPF filing — we generate precise ECRs, verify challans, and complete submissions before the 15th each month, ensuring zero penalties and full compliance with instant filing confirmations.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 3,
      name: "Exit Management (Within 48 Hours)",
      text: `Swift and compliant exit management — we mark exits within 48 hours, handle PF transfers and withdrawals, and ensure smooth final settlements for a hassle-free employee offboarding experience.`,
      bg: "bg-[#eaeaff]",
    },
    {
      id: 4,
      name: "Crisis Response (EPFO Inspections)",
      text: `Expert EPFO crisis management — we respond to inspection notices within 24 hours, prepare complete audit documentation, represent you in hearings, and secure favorable resolutions with zero penalties.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 5,
      name: "Employee Support (Grievance Shield)",
      text: `End-to-end employee PF support — we manage all grievances through the EPFiGMS portal, resolve account issues and delays, and provide direct employee assistance so your HR team stays complaint-free.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 6,
      name: "What This Actually Saves You",
      text: `What This Actually Saves You — eliminate 40+ HR hours a month, avoid ₹50,000+ in annual penalties, and remove every PF-related headache. With EPFdesk, you gain guaranteed compliance, zero employee complaints, and complete peace of mind — all at a fraction of your current cost.`,
      bg: "bg-[#eaeaff]",
    },
  ],
};

export const epfBangaloreRegistrationCardData = {
  title: "EPF Registration",
  subTitle: "End to End EPF Registration in Bangalore",
  description:
    "Starting a business in Bangalore? The moment you cross 20 employees, EPF registration isn’t optional—it’s mandatory. But here’s what most businesses don’t know: getting EPF registration wrong costs you weeks of delays, rejected applications, and penalties that start from Day 1. EPFdesk has registered 50+ Bangalore establishments with a 100% approval rate—no rejections, no re-submissions, no delays. We handle everything: DSC procurement, Form 5A preparation, establishment code generation, LIN activation, and UMANG app setup. While other consultants take 30-45 days, we get you registered in 7 days. Whether you’re a Whitefield startup hiring your first 20 employees, a Peenya manufacturer expanding operations, or an Electronic City tech company setting up a new entity, we ensure you’re EPF-compliant from Day 1. Don’t let registration delays stop you from hiring. Let us handle the paperwork while you build your team.",
};

export const testimonialsEpfBangaloreRegistration = {
  title: "Our 7-Day EPF Registration Process",
  // subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards: [
    {
      id: 1,
      name: "Day 1-2: Documentation & DSC",
      text: `We kick off by collecting and verifying all essential establishment details and documents. Our team secures your Digital Signature Certificate (DSC) and prepares the EPF registration form with complete accuracy — ensuring a smooth start to your registration process`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 2,
      name: "Day 3-4: EPFO Submission",
      text: `We create your establishment profile on the EPFO portal, upload verified documents, and file Form 5A. Our team tracks the application in real time to ensure smooth submission and zero delays.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 3,
      name: "Day 5-6: EPFO Processing",
      text: `We closely monitor your EPFO application, respond to any department queries, and coordinate with officials. If an inspection is required, we handle the entire process on your behalf for seamless approval.`,
      bg: "bg-[#eaeaff]",
    },
    {
      id: 4,
      name: "Day 7: Approval & Setup",
      text: `Your establishment gets approved, LIN is activated, and your EPFO access is set up on UMANG. We provide full login credentials, a quick team briefing, and ensure you're ready to file your first ECR — all within 7 days.`,
      bg: "bg-[#ffeaea]",
    },
    // {
    //   id: 5,
    //   name: "Employee Support (Grievance Shield)",
    //   text: `End-to-end employee PF support — we manage all grievances through the EPFiGMS portal, resolve account issues and delays, and provide direct employee assistance so your HR team stays complaint-free.`,
    //   bg: "bg-[#f3ffe7]",
    // },
    // {
    //   id: 6,
    //   name: "What This Actually Saves You",
    //   text: `What This Actually Saves You — eliminate 40+ HR hours a month, avoid ₹50,000+ in annual penalties, and remove every PF-related headache. With EPFdesk, you gain guaranteed compliance, zero employee complaints, and complete peace of mind — all at a fraction of your current cost.`,
    //   bg: "bg-[#eaeaff]",
    // },
  ],
};

export const largeCardsEpfoBangaloreRegistration = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Karthik R., Founder",
      subtitle: `We crossed 20 employees in August. EPFdesk registered us by mid-September—in just 8 days. Our previous consultant took 6 weeks and the application was rejected twice. These guys know exactly what EPFO wants.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Meera P., HR Head",
      subtitle: `We were hiring fast and couldn’t generate UANs without EPF code. EPFdesk got us registered in 7 days—exactly when they promised. Zero hassle, zero follow-ups needed from our side.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Arun K., Operations Manager",
      subtitle: `The DSC alone took us 3 weeks with another consultant. EPFdesk procured it in 2 days and had us registered within a week. Incredible efficiency. `,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEpfoBangaloreRegistration = {
  // subTitle: "Why Choose EPFdesk (vs DIY or Other Consultants)",
  // // subText:
  // //   "Our experts handle complete setup while you focus on your business.",
  // cards: [
  //   {
  //     title: "DIY Registration",
  //     subtitle: `Doing EPF registration yourself often leads to delays, rejections, and wasted effort — with a 30–45 day timeline, high rejection risk, no expert guidance, and significant time spent chasing approvals.`,
  //     number: 1,
  //   },
  //   {
  //     title: "Other Consultants",
  //     subtitle: `Typical consultants take 20–30 days, offer minimal guidance, provide no penalty protection, and treat registration as a one-time task without ongoing support.`,
  //     number: 2,
  //   },
  //   {
  //     title: "EPFdesk",
  //     subtitle: `EPFdesk delivers guaranteed registration in 7 days with a 100% approval rate, full documentation support, proactive follow-ups, penalty protection, and ongoing post-registration compliance support.`,
  //     number: 3,
  //   },
  //   //     {
  //   //       title: "Employee UAN & KYC Management",
  //   //       subtitle: `
  //   // End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
  //   //       icon: "✨",
  //   //       bubble: "Dream!",
  //   //       bg: "from-[#d299c2] to-[#fef9d7]",
  //   //     },
  // ],
  subTitle: "How PF Registration Works (Step-by-Step)",
  subText: "Detailed explanation of the official EPFO registration process.",
  cards: [
    {
      title: "STEP 1: Unified Portal Registration",
      subtitle: `To create an EPF establishment account, visit unified-mem.epfindia.gov.in/memberinterface, register using your Company PAN, mobile number, and email ID, verify both via OTP, set your username and password, and log in to access the EPFO portal`,
      number: 1,
    },
    {
      title: "STEP 2: Form 5A Preparation",
      subtitle: `Form 5A is used to register your establishment under EPF. It requires key details including the company’s name and business type, nature of activity, date of setup and PF coverage (when employee count crossed 20), current employee strength, registered and branch addresses, authorized signatory details, and the bank account to be used for PF payments.`,
      number: 2,
    },
    {
      title: "STEP 3: Document Upload",
      subtitle: `Upload the required documents on the EPFO portal, including the incorporation certificate or partnership deed (PDF, max 5MB), PAN card, address proof (rent agreement and electricity bill), bank documents (cancelled cheque and bank statement), authorized signatory ID proof, and the employee list in Excel format using the portal’s provided template.`,
      number: 3,
    },
    {
      title: "STEP 4: Digital Signature & Submission",
      subtitle: `Download the auto-filled Form 5A from the EPFO portal, sign it using a Class 2 or Class 3 DSC, and re-upload the digitally signed file. Submit the application and save the acknowledgement number for status tracking and future reference.`,
      number: 4,
    },
    {
      title: "STEP 5: EPFO Verification",
      subtitle: `The EPFO Regional Office reviews the PF registration application for document authenticity, employee threshold (20+), address verification (may include physical inspection), and duplicate PF code check. The standard processing time is 5–10 working days.`,
      number: 5,
    },
    {
      title: "STEP 6: PF Code Allotment",
      subtitle: `Upon approval, EPFO issues a unique PF establishment code (e.g., KRNBN1234567000 for Bangalore, based on state and regional office). The code becomes visible on the portal, an approval letter can be downloaded, and confirmation is sent via SMS and email.`,
      number: 6,
    },
    {
      title: "STEP 7: Post-Registration Setup",
      subtitle: `After PF code activation, the employer must generate UAN for all employees within 1 month, configure the DSC for monthly ECR filing, and submit the first ECR by the 15th of the next month. Additionally, statutory notices (Form 3A, 5, 10) must be displayed at the workplace to complete compliance.`,
      number: 7,
    },
  ],
};

export const epfManagementFaqBangaloreRegistration = [
  // {
  //   question: "When exactly do I need EPF registration?",
  //   answer: `The moment you have 20 or more employees (including contract employees counted under your establishment), you must register within one month. Delay leads to penalties starting from ₹5,000/month.`,
  // },
  // {
  //   question: "What if I have 19 employees now but will cross 20 soon?",
  //   answer: `Start the registration process now. It takes 7-10 days, so you’ll be ready when you hit 20. Better to be early than late.`,
  // },
  // {
  //   question: "Can I register myself or do I need a consultant?",
  //   answer: `You can do it yourself, but 50%+ of first-time applications get rejected due to documentation errors. With EPFdesk, you get 100% approval rate and save 30+ hours of your time. Your choice depends on how much your time is worth.`,
  // },
  // {
  //   question: "What happens if registration is delayed?",
  //   answer: `EPFO can impose penalties of ₹5,000/month for delayed registration. Plus, you can’t generate UANs for new employees, which creates HR nightmares.`,
  // },
  // {
  //   question: "Do you handle ESIC registration too?",
  //   answer: `Yes! We can register you for both EPF and ESIC together. Saves time and ensures both are compliant from Day 1. [Link to ESIC Registration page]`,
  // },
  // {
  //   question: "What if EPFO asks for an inspection?",
  //   answer: `We prepare all inspection-ready documentation from Day 1. If EPFO schedules an inspection, we coordinate the entire process and represent you. You don’t need to interact with officials.`,
  // },
  // {
  //   question: "What about ongoing EPF compliance after registration?",
  //   answer: `Registration is just the start. Monthly ECR filing, employee onboarding, exits, and inspections are ongoing. We offer complete EPF management services if you want us to handle everything. [Link to EPF Consultants page]`,
  // },
  // {
  //   question: "How soon can you start?",
  //   answer: `Within 24 hours of receiving your documents. We start DSC procurement immediately and work in parallel on documentation.`,
  // },
  {
    question: "When exactly should I register for PF?",
    answer: `You must register within 1 month of crossing the employee threshold (20+ employees for most establishments, 10+ for factories). Include all employees—permanent, temporary, part-time, and contract (if they meet employee definition). Exclude directors not drawing salary and genuine independent contractors.

Example: If your 20th employee joins on March 15, you must register by April 15.

Delay consequences:
• Backdated PF contributions from the date you should have registered  
• 12% interest per annum  
• Penalties ranging from ₹10,000 to ₹5,00,000  

Many Bangalore startups face this issue during investor due diligence—better register immediately.`,
  },
  {
    question: "How long does PF registration take in Bangalore?",
    answer: `Average timeline: 10–15 working days after complete document submission.

Typical breakdown:
• Document prep: 2–3 days  
• DSC setup: 2–3 days  
• Filing: 1 day  
• EPFO processing: 5–10 days  
• PF code allotment: 1 day  
• Post-setup: 2–3 days  

Possible delays:
• Incomplete docs: +5–7 days  
• Address proof issues: +3–5 days  
• Physical inspection (rare): +7–15 days  
• Peak season (Mar/Apr/Dec): +3–5 days  

Fast track possible in 7–10 days if DSC and documents are ready. We complete 90% of cases within 12 days.`,
  },
  {
    question: "How much does PF registration cost in Bangalore?",
    answer: `Professional fee: ₹10,000–15,000 (one-time).

Includes:
• Document check  
• Filing + EPFO follow-up  
• UAN generation  
• First ECR filing  
• Post-registration support  

Additional costs:
• DSC: ₹800–2,000 (if not available)  
• Notarization (if needed): ₹200–500  

EPFO charges ₹0 for registration.

Add-on for ESI:
• ESI alone: ₹8,000–10,000  
• Combined PF+ESI: ₹16,000–22,000  

DIY is free but takes 20–30 hours and carries high rejection risk. Professional support saves time and prevents costly errors.`,
  },
  {
    question: "What happens if I don’t register despite having 20+ employees?",
    answer: `Serious consequences:

Financial:
• Penalty: ₹10,000 – ₹5,00,000  
• Backdated PF: Can reach ₹10–50 lakhs  
• 12% annual interest  

Legal & operational:
• Criminal prosecution (up to 3 yrs jail in extreme cases)  
• Investor due-diligence failure  
• Bank loan rejection  
• Employee complaints triggering inspection  

Real example:
Bangalore startup, 40 employees, 3 years non-compliant → ₹38 lakh liability + funding delayed by 3 months.`,
  },
  {
    question: "Can PF registration be done fully online?",
    answer: `Yes, 100% online via: unified-mem.epfindia.gov.in/memberinterface

Process:
• Create account  
• Fill Form 5A  
• Upload documents  
• Sign with DSC  
• Submit & track status  
• Get PF code online  

No office visit needed unless EPFO specifically calls for inspection (<5% cases). We handle the entire process online for you.`,
  },
  {
    question:
      "Do I need separate PF registration for different office locations?",
    answer: `If offices are in the same state → 1 PF code is enough.  
If in different states → separate PF codes required.

Examples:
✅ Bangalore + Mysore = 1 PF code (Karnataka)  
⛔ Bangalore + Hyderabad = 2 PF codes (KA + TS)  
⛔ Bangalore + Mumbai + Delhi = 3 PF codes  

WFH rule (practical approach):
• 1–2 employees in other states → usually covered under HQ code  
• More than 5 permanent employees in another state → consider separate code`,
  },
  {
    question: "What is UAN and how is it generated?",
    answer: `UAN (Universal Account Number) is a lifetime 12-digit ID for an employee’s PF account.

Key points:
• One employee = One UAN forever  
• Employer must create UAN within 1 month of joining  
• Employee receives UAN via SMS/Email  
• Activation required at uan.epfindia.gov.in  

Benefits:
• PF passbook access  
• Online transfer/withdrawal  
• Employer change without new PF account  

We generate UANs within 7 days and assist employees in activation and Aadhaar linking.`,
  },
  {
    question:
      "Can I register for PF voluntarily if I have fewer than 20 employees?",
    answer: `Yes, voluntary registration is allowed but comes with conditions:

✅ Good if:
• You will soon cross 20 employees  
• Clients require PF compliance  
• You want strong employee benefits  

⚠ Important:
• Once registered, you cannot easily deregister  
• Monthly filings become mandatory forever  

Recommendation:
Wait until 20 employees unless business needs require early registration.`,
  },
  {
    question: "What if my salary structure does not show Basic + DA?",
    answer: `PF is calculated on “Basic + DA”.

If your salary structure is unclear:
• EPFO may assume 50% of CTC as Basic (expensive)

Optimized compliant structure example:
• Basic: 30–40%  
• HRA: 40–50%  
• Special Allowance: 10–20%  

Benefit:
Salary ₹50,000
❌ If no structure → PF may calculate on ₹25,000 (₹3,000 PF)
✅ Structured → PF on ₹15,000 wage ceiling (₹1,800 PF)
💰 Savings: ₹1,200/month per employee

We help restructure salaries compliantly to reduce PF burden.`,
  },
  {
    question: "Is PF mandatory for contract or temporary employees?",
    answer: `It depends on the employment relationship, not the job label.

PF mandatory if:
• Fixed hours, company supervision  
• Uses company’s tools  
• Paid monthly like employees  

PF not mandatory if:
• Genuine independent contractor  
• Own tools, project-based, invoices raised  

Risk:
Misclassifying employees as contractors can lead to backdated PF liabilities of ₹10–30 lakhs.

We evaluate and help structure correctly to avoid future liability.`,
  },
  {
    question: "Do I need to register separately for ESI along with PF?",
    answer: `Yes, PF and ESI are separate registrations.

Eligibility:
• PF → 20+ employees (10+ for factories)  
• ESI → 10+ employees (factory), 20+ others  
• PF salary cover → < ₹15,000  
• ESI salary cover → < ₹21,000  

Example:
IT company, 30 employees earning ₹40K+ → PF only  
Manufacturing, 30 employees earning ₹10–20K → PF + ESI  

Cost:
• PF: ₹10–15K  
• ESI: ₹8–10K  
• Combined: ₹16–22K (best value)`,
  },
  {
    question: "What are the penalties for late PF registration?",
    answer: `Late penalties include:

• Fine: ₹10,000 to ₹5,00,000  
• Backdated PF contributions  
• 12% interest per annum  
• Possible prosecution in extreme cases  

Example:
2-year delay, 30 employees:
• Back PF: ₹12,00,000  
• Interest: ₹1,40,000  
• Penalty: ₹1.5–3L  
Total: ₹14.9–16.4L

Good news:
Voluntary compliance can reduce penalties by 60–70%. We have reduced ₹15L penalties to ₹2L for clients through proper case representation.`,
  },
];

export const esicBangaloreCardData = {
  title: "ESIC Consultants",
  subTitle: "End to End ESIC compliance Management in Bangalore",
  description:
    "ESIC compliance is messy—employee IPs that take days to generate, monthly challans that miss deadlines, claims that employees chase YOU for, and inspection notices that cause panic. EPFdesk has protected 50+ Bangalore establishments from ESIC penalties with 100% on-time filing—no delays, no defaults, no drama. From Peenya’s factories to Electronic City’s warehouses, Whitefield’s offices, and Koramangala’s service centers, businesses trust us to handle what overwhelms HR teams: IP number generation the day employees join, monthly return filing before the 15th, claim processing that employees never complain about, and inspection responses that close with zero penalties. Our difference? We don’t just advise—we log into your ESIC portal and do it for you. Whether you’re a manufacturer with 100+ workers, a startup hitting 10 employees, or a logistics company drowning in employee claims, our Bangalore team transforms ESIC from your constant headache into invisible compliance. Stop managing ESIC. Let us do it.",
};

export const testimonialsEsicBangalore = {
  title: "What We Actually Do (Not Just Consult)",
  // subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards: [
    {
      id: 1,
      name: "Employee Registration (Day 1)",
      text: `We generate ESIC IP numbers within 24 hours, complete employee KYC and linking, ensuring every new hire is covered from Day 1—no delays, no compliance gaps.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 2,
      name: "Monthly Filing (Before 15th Every Month)",
      text: `We handle complete ESIC monthly filing before the 15th—accurate calculations, challan generation, payment, and confirmation—ensuring zero delays or penalties.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 3,
      name: "Claims Management (We Handle, Not You)",
      text: `We manage the entire ESIC claims process—from document verification to reimbursement—so your HR never deals with employee claims or ESIC follow-ups.`,
      bg: "bg-[#eaeaff]",
    },
    {
      id: 4,
      name: "Inspection Response (24-Hour Turnaround)",
      text: `We handle ESIC inspections end-to-end—responding within 24 hours, preparing documents, representing you, and closing cases with zero penalties.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 5,
      name: "Exit Management",
      text: `We manage employee exits instantly—updating ESIC records, verifying final contributions, and ensuring every exit is fully compliant and penalty-free.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 6,
      name: "What This Actually Saves You",
      text: `By switching to EPFdesk, you eliminate penalties, delays, and HR effort—saving Lakhs annually while your HR team stays completely free from ESIC hassles.`,
      bg: "bg-[#eaeaff]",
    },
  ],
};

export const largeCardsEsicBangalore = {
  subTitle: "What Our Bangalore Clients Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Ramesh S., Plant Manager",
      subtitle: `“Before EPFdesk, our workers would complain about ESIC claims for weeks. Now they get help directly from EPFdesk’s team. Our HR doesn’t even know which claims are being processed. Perfect.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Divya K., Operations Head",
      subtitle: `We got an ESIC inspection notice and panicked—we had no idea what documents they wanted. EPFdesk responded in 3 hours, handled everything, and closed it with zero penalties. Worth every single rupee.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Sanjay M., HR Manager",
      subtitle: `“New employee IP numbers used to take us 5-7 days. With EPFdesk, they’re generated within 24 hours. Our onboarding is now seamless. `,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEsicBangalore = {
  subTitle: "Why Choose ESICDesk Specialists?",
  // subText:
  //   "We combine deep national regulatory expertise with precise local knowledge of the compliance ecosystem.",
  cards: [
    {
      title: "Focused",
      subtitle: `We specialize in the Shops and Establishment Act and the specific ESIC rules for the mid-size tech company.`,
      number: 1,
    },
    {
      title: "System Mastery",
      subtitle: `Our expert consultants ensure compliance is seamless, fast, and accurate, providing a higher standard than a generalist accountant.`,
      number: 2,
    },
    {
      title: "Liability Protection",
      subtitle: `Our process is designed to legally shield the employer from personal liability in the event of an employee mishap, confirming coverage from day one.`,
      number: 3,
    },
    {
      title: "DIY Cost",
      subtitle: `The cumulative cost of HR time + average annual penalty of ₹40,000, PLUS the risk of ₹25 Lakh liability for a single employee accident if coverage is lapsed.`,
      number: 4,
    },
    {
      title: "Your Savings",
      subtitle: `Our strategic service converts this catastrophic liability into a predictable, managed investment, guaranteeing zero penalties and full employee coverage.`,
      number: 5,
    },
  ],
};

export const esicManagementFaqBangalore = [
  {
    question: "Is ESIC registration mandatory for my company?",
    answer: `Yes. ESIC registration is mandatory if your establishment employs 10 or more persons (or 20+ in some states), and employees earn up to ₹21,000 per month (₹25,000 for persons with disabilities). Registration should be completed quickly to avoid liability.`,
  },
  {
    question:
      "What happens if an employee has an accident but doesn't have an ESIC card?",
    answer: `If an eligible employee is not registered under ESIC, the employer becomes fully liable. This means your company must bear all medical expenses, compensation, and any legal costs associated with employment injury. The risk is substantial and direct.`,
  },
  {
    question:
      "How quickly do you generate the employee’s ESIC IP card and link the dispensary?",
    answer: `We treat ESIC IP generation as a priority activity. We guarantee timely IP card creation and dispensary mapping—well within the legally required 15 days of joining—ensuring employees have immediate access to eligible benefits.`,
  },
  {
    question: "What is the penalty for delayed ESIC contributions?",
    answer: `The penalty is significant. ESIC charges 12% simple annual interest for every day of delay, damages up to 25% of the arrears, and in some cases, prosecution. Our team ensures filings are completed on time to eliminate this risk entirely.`,
  },
  {
    question:
      "Do you handle ESIC compliance for remote employees or staff working from home (WFH)?",
    answer: `Yes. We manage ESIC compliance for remote or work-from-home employees located in notified ESIC areas of Bangalore or working across state lines, ensuring complete compliance with the latest regulations.`,
  },
];

export const esicBangaloreRegistrationCardData = {
  title: "ESIC Registration",
  subTitle: "End to End ESIC Registration in Bangalore",
  description:
    "ESIC registration in Bangalore is simpler than EPF—but only if you know exactly what ESIC wants. Most businesses make three costly mistakes: wrong branch selection, incorrect wage declaration, and incomplete factory inspection documentation. EPFdesk has registered 50+ Bangalore establishments with 100% approval rate—no rejections, no delays, no re-submissions. We handle everything: employer registration (Code 17), factory/office inspection coordination, employee IP generation, portal setup, and first monthly return. While DIY attempts take 15-20 days (and often fail), we get you registered in 5 days. Whether you’re a Peenya manufacturer just crossing 10 employees, a Whitefield startup hiring your first batch, or an Electronic City logistics company expanding operations, we ensure ESIC coverage from Day 1. Don’t let registration delays leave your employees uncovered. We handle the paperwork in 5 days flat.",
};

export const testimonialsEsicRegistrationBangalore = {
  title: "Our 5-Day ESIC Registration Process",
  // subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards: [
    {
      id: 1,
      name: "Day 1: Documentation Collection",
      text: `We collect all necessary documents, verify every detail for accuracy, and determine your correct ESIC branch or sub-regional office. We also prepare and validate the employer registration form (Code 17) to ensure a smooth registration process.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 2,
      name: "Day 2: ESIC Submission",
      text: `We submit the completed Code 17 form to the designated ESIC branch, begin tracking the application status in real time, and proactively prepare for any inspection or additional documentation requests from ESIC authorities.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 3,
      name: "Day 3: Inspection (if required)",
      text: `We coordinate and manage the ESIC inspection process—arranging the visit, presenting all required documentation, addressing officer queries on the spot, and ensuring your establishment receives prompt inspection clearance.`,
      bg: "bg-[#eaeaff]",
    },
    {
      id: 4,
      name: "Day 4: Registration Approval",
      text: `We secure your 17-digit ESIC establishment code, set up your online employer portal access, and prepare the complete employee registration list—ensuring your organization is ready to onboard employees under ESIC immediately.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 5,
      name: "Employee Registration & Setup",
      text: `We complete full employee registration by generating IP numbers, filing the first monthly return (if applicable), and setting up online challan payments. You receive full portal access and a team briefing—making your establishment fully ESIC-compliant within just 5 days.`,
      bg: "bg-[#f3ffe7]",
    },
    // {
    //   id: 6,
    //   name: "What This Actually Saves You",
    //   text: `By switching to EPFdesk, you eliminate penalties, delays, and HR effort—saving Lakhs annually while your HR team stays completely free from ESIC hassles.`,
    //   bg: "bg-[#eaeaff]",
    // },
  ],
};

export const largeCardsEsicRegistrationBangalore = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Suresh P., Operations Manager",
      subtitle: `We tried DIY ESIC registration and got rejected twice. EPFdesk did it in 5 days flat. They knew exactly what the ESIC inspector would ask for. Seamless process.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Priya R., Founder",
      subtitle: `Our employee count crossed 10 on a Friday. By the next Friday, EPFdesk had us registered with all employee IPs generated. Insanely fast.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Kiran M., HR Head",
      subtitle: `The ESIC inspection was scheduled on Day 3. EPFdesk had everything ready—the inspector was in and out in 30 minutes. Registration approved same day.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEsicRegistrationBangalore = {
  subTitle: "Get Started in 3 Steps",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Step 1",
      subtitle: `Share basic details (10-minute call)`,
      number: 1,
    },
    {
      title: "Step 2",
      subtitle: `We handle everything (5 days)`,
      number: 2,
    },
    {
      title: "Step 3",
      subtitle: `You’re registered, employees covered`,
      number: 3,
    },
    //     {
    //       title: "Employee UAN & KYC Management",
    //       subtitle: `
    // End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
    //       icon: "✨",
    //       bubble: "Dream!",
    //       bg: "from-[#d299c2] to-[#fef9d7]",
    //     },
  ],
};

export const esicRegistrationFaqBangalore = [
  {
    question: "When do I need ESIC registration?",
    answer: `When you have 10 or more employees earning up to ₹21,000/month. Registration must be done within 15 days of crossing this threshold. Delay = penalties.`,
  },
  {
    question: "What if I have contractors? Do they count?",
    answer: `Yes, if contract employees work at your premises and you exercise control over them. We help you determine if contractor employees need to be covered under your ESIC.`,
  },
  {
    question: "What’s the inspection for?",
    answer: `ESIC sometimes inspects establishments to verify address, employee details, and working conditions. We prepare all documentation so inspection goes smoothly. With us, inspections close the same day.`,
  },
  {
    question: "Can I register without hiring employees yet?",
    answer: `Yes. If you’re about to hire, register first so new employees are covered from Day 1. Better to be early than late.`,
  },
  {
    question: "Do you handle both EPF and ESIC registration?",
    answer: `Yes! Most businesses need both. We can register you for EPF and ESIC together, saving time and ensuring both compliances start together. [Link to PF ESIC Registration page]`,
  },
  {
    question: "What about ongoing ESIC compliance after registration?",
    answer: `Registration is just the start. Monthly contributions, IP generation for new employees, claims, and inspections are ongoing. We offer complete ESIC management if you want us to handle everything. [Link to ESIC Consultants page]`,
  },
  {
    question: "How soon can you start?",
    answer: `Within 24 hours of receiving your documents. We start documentation immediately.`,
  },
  {
    question: "What if ESIC rejects the registration?",
    answer: `With us, rejection doesn’t happen (100% approval rate). But if by some rare chance it does, we fix issues and resubmit at no extra cost.`,
  },
];

export const PFEsicBangaloreCardData = {
  title: "PF & ESIC Consultants",
  subTitle: "End to End PF & ESIC compliance Management in Bangalore",
  description:
    "Managing EPF and ESIC separately is exhausting—two consultants, two deadlines, two inspection responses, two sets of employee complaints. EPFdesk handles both EPF and ESIC as one integrated service, saving you time, reducing errors, and ensuring nothing falls through the cracks. We protect 50+ Bangalore businesses with complete PF+ESIC compliance: UANs and IPs generated together on Day 1, both monthly returns filed before the 15th, employee queries answered by one team, inspections coordinated without duplication, and contractors managed under both compliances. When EPF and ESIC are managed by one team, compliance becomes seamless. Whether you’re a Peenya manufacturer with 200+ workers, a Whitefield tech company scaling fast, or a Koramangala services business tired of juggling two consultants, our Bangalore team handles both compliances so well, you’ll forget they exist. One team. Both compliances. Zero stress. That’s the EPFdesk difference.",
};

export const testimonialsPFEsicBangalore = {
  title: "What We Do (Everything, Together)",
  // subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards: [
    {
      id: 1,
      name: "Onboarding (EPF + ESIC Together)",
      text: `We register new employees under both EPF and ESIC on the same day—UAN creation, IP generation, and portal linking—all completed seamlessly. Your workforce becomes 100% compliant from Day 1 with a unified, hassle-free onboarding process.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 2,
      name: "Monthly Filing (Both Before 15th)",
      text: `We file both EPF and ESIC returns before the 15th each month—accurate ECRs, challans, and payments done together. You receive one consolidated confirmation, ensuring zero penalties and perfect synchronization across both compliances.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 3,
      name: "Exit Management (Coordinated)",
      text: `We coordinate EPF and ESIC exits simultaneously—marking employees in both portals, settling final contributions, and guiding on PF transfers or withdrawals. Result: clean exits with no compliance gaps or pending obligations.`,
      bg: "bg-[#eaeaff]",
    },
    {
      id: 4,
      name: "Employee Support (One Team, All Queries)",
      text: `We provide a single support line for all employee PF and ESIC issues—UAN, IP, claims, transfers, or balances—so your HR team never deals with compliance complaints again`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 5,
      name: "Inspection Response (Coordinated Defense)",
      text: `We handle both EPF and ESIC inspections together—responding within 24 hours, coordinating documentation, and ensuring consistent, penalty-free closure.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 6,
      name: "What Integrated PF+ESIC Management Saves You",
      text: `With EPFdesk’s integrated PF + ESIC management, you eliminate duplicate work, delays, and penalties — saving 50+ HR hours a month, ₹80,000+ in fines, and endless coordination headaches. One dashboard, zero stress.`,
      bg: "bg-[#eaeaff]",
    },
  ],
};

export const largeCardsPFEsicBangalore = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Rajesh V., CFO",
      subtitle: `We were using two different consultants—one for PF, one for ESIC. The coordination was killing us. EPFdesk handles both seamlessly. One team, one dashboard, zero stress. Should have done this years ago.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Meera S., HR Director",
      subtitle: `During an EPFO inspection, they also checked ESIC compliance. Thank God EPFdesk handles both—our responses were perfectly aligned. No contradictions, no panic. Inspection closed in one day.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Anil K., Operations Head",
      subtitle: `Our employees used to call us for PF questions and a different consultant for ESIC claims. Now they just WhatsApp EPFdesk for everything. That alone is worth the fee.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsPFEsicBangalore = {
  subTitle: "Get Started in 3 Steps",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Step 1",
      subtitle: `10-minute call — we audit both your EPF and ESIC compliance`,
      number: 1,
    },
    {
      title: "Step 2",
      subtitle: `48-hour onboarding — we take over both portals`,
      number: 2,
    },
    {
      title: "Step 3",
      subtitle: `Relax — we handle both, you handle neither`,
      number: 3,
    },
    //     {
    //       title: "Employee UAN & KYC Management",
    //       subtitle: `
    // End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
    //       icon: "✨",
    //       bubble: "Dream!",
    //       bg: "from-[#d299c2] to-[#fef9d7]",
    //     },
  ],
};

export const pfEsicManagementFaqBangalore = [
  {
    question: "Do you actually handle both EPF and ESIC, or just coordinate?",
    answer: `We actually handle both—we log into both portals (with your permissions) and do all the work. You get one unified dashboard showing status of both compliances.`,
  },
  {
    question:
      "Is integrated service more expensive than hiring two consultants?",
    answer: `No! It’s usually cheaper because we eliminate duplicate work. Plus, you save massive amounts of coordination time. Ask for a quote—you’ll be surprised.`,
  },
  {
    question: "What if I only need EPF or only ESIC?",
    answer: `We offer standalone services too. But if you need both, integrated service makes way more sense. [Links to EPF-only and ESIC-only pages]`,
  },
  {
    question:
      "Can you take over if I’m currently using two different consultants?",
    answer: `Absolutely. We specialize in consolidation. We’ll transition both smoothly without any compliance gaps. Usually done within one month.`,
  },
  {
    question: "What about contractor PF and ESIC?",
    answer: `We handle contractor compliance under both EPF and ESIC. Critical for manufacturers and logistics companies. We ensure you’re not held liable for contractor defaults in either.`,
  },
  {
    question: "How do employee queries work?",
    answer: `Give employees one WhatsApp number (ours). They contact us for PF balance, ESIC claims, UAN issues, IP problems—everything. Your HR team never hears from them.`,
  },
  {
    question: "Do you handle registration too?",
    answer: `Yes! If you need to register for EPF and/or ESIC, we do that first, then take over ongoing management. [Link to PF ESIC Registration page]`,
  },
  {
    question: "What if we miss a deadline under your management?",
    answer: `Hasn’t happened in 24 months across 50+ clients. But if it does, we pay the penalty for both EPF and ESIC. It’s in our service agreement.`,
  },
];

export const PFEsicRegBangaloreCardData = {
  title: "PF & ESIC Registration",
  subTitle: "End to End PF & ESIC registration in Bangalore",
  description:
    "Need both EPF and ESIC registration? Doing them separately is inefficient—you duplicate documentation, deal with two different agencies, coordinate two inspections, and waste 3-4 weeks. EPFdesk registers both EPF and ESIC together in 7 days flat—one documentation set, coordinated submissions, unified inspection response, and complete setup of both systems. We’ve registered 50+ Bangalore establishments for both compliances with 100% approval rate. While separate registrations take 6-8 weeks total, we complete both in 7 days. Whether you’re a new Peenya manufacturer setting up operations, a Whitefield startup hitting registration thresholds, or an Electronic City logistics company expanding, we ensure you’re compliant under both EPF and ESIC from Day 1. Don’t do registration twice. Let us register you for both, once, in one week.",
};

export const testimonialsPFEsicRegBangalore = {
  title: "Our 7-Day Integrated Registration Process",
  // subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards: [
    {
      id: 1,
      name: "Documentation & Preparation",
      text: `Streamlined document collection for both EPF and ESIC—handled together in a single session. We prepare all required forms, verify details, and ensure accuracy before submission.`,
      bg: "bg-[#ffeaea]",
    },
    {
      id: 2,
      name: "Parallel Submissions",
      text: `EPF and ESIC registrations are submitted simultaneously—no waiting between the two. We create your EPF establishment, file required forms, and submit ESIC Code 17 the same day, ensuring both processes move forward in parallel for faster approval.`,
      bg: "bg-[#f3ffe7]",
    },
    {
      id: 3,
      name: "Inspection & Processing",
      text: `If an inspection is required, we coordinate a single, unified inspection for both EPF and ESIC. Our team presents all documentation together, addresses officer queries on the spot, and monitors both applications closely to ensure quick, hassle-free approvals`,
      bg: "bg-[#eaeaff]",
    },
    {
      id: 4,
      name: "Approval & Complete Setup",
      text: `By Day 7, both EPF and ESIC setups are fully approved and active. You receive establishment and ESIC codes, LIN activation, and employee access through UMANG and ESIC portals. With both systems ready, you can instantly start filings, generate UANs and IPs, and onboard new hires seamlessly.`,
      bg: "bg-[#ffeaea]",
    },
  ],
};

export const largeCardsPFEsicRegBangalore = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Vikram R., Founder, ",
      subtitle: `We needed both EPF and ESIC. Other consultants said ‘EPF will take 3 weeks, then we’ll do ESIC which takes 2 weeks—total 5 weeks.’ EPFdesk did both in 7 days. We were hiring on Day 8. Unbelievable efficiency.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Deepa M., HR Manager",
      subtitle: `The inspector came for EPF verification and also checked ESIC documents at the same time. EPFdesk had coordinated this—one inspection, both clearances. Saved us at least 2 weeks.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Anand K., Operations Director",
      subtitle: `We were ready to hire 30 employees but couldn’t until EPF and ESIC codes came through. EPFdesk got us both in 7 days. Those 30 people joined within 10 days of us starting the process. Perfect timing.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsPFEsicRegBangalore = {
  subTitle: "Why Choose EPFdesk for Both Registrations",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "DIY Approach",
      subtitle: `The DIY approach is slow and inefficient—taking 6–8 weeks with high rejection risk and separate inspections. You’ll spend over 60 hours coordinating tasks and managing two different portals, increasing the chance of delays and compliance errors`,
      number: 1,
    },
    {
      title: "Two Separate Consultants",
      subtitle: `Hiring two separate consultants still causes inefficiency—4–5 weeks of sequential work, duplicate documentation, and double coordination. You’ll manage two invoices and risk getting conflicting advice from different consultants.`,
      number: 2,
    },
    {
      title: "EPFdesk Integrated",
      subtitle: `With EPFdesk’s integrated approach, both EPF and ESIC registrations are completed in just 7 days through parallel processing. You get 100% approval rates, zero coordination hassles, and spend only 10 minutes on the initial call—one team, one invoice, one seamless process.`,
      number: 3,
    },
    //     {
    //       title: "Employee UAN & KYC Management",
    //       subtitle: `
    // End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
    //       icon: "✨",
    //       bubble: "Dream!",
    //       bg: "from-[#d299c2] to-[#fef9d7]",
    //     },
  ],
};

export const pfEsicRegFaqBangalore = [
  {
    question: "Do I need both EPF and ESIC registration?",
    answer: `Depends on employee count: 
- EPF: Mandatory when you have 20+ employees 
- ESIC: Mandatory when you have 10+ employees earning up to ₹21,000/month  
If you’re near or above both thresholds, register for both together. It’s more efficient.`,
  },
  {
    question: "What if I only need one of them now?",
    answer: `We offer standalone EPF or ESIC registration too. 
But if you’ll need both eventually, register together now—it’s faster and cheaper than doing separately later.`,
  },
  {
    question: "Can you really do both in 7 days?",
    answer: `Yes. We process both in parallel (not sequentially like others do).  
EPF takes 5-7 days, ESIC takes 4-5 days. When done together with coordinated submissions, it’s completed in 7 days total.`,
  },
  {
    question: "What about inspections—do we need two separate ones?",
    answer: `Usually not. We coordinate ONE inspection that covers both EPF and ESIC requirements.  
This saves you time and ensures consistency.`,
  },
  {
    question: "What if one gets approved but the other is delayed?",
    answer: `Hasn’t happened with our clients (100% approval rate).  
But if it does, we push for both to complete together. You don’t go live with half-registration.`,
  },
  {
    question: "What about ongoing compliance after registration?",
    answer: `Registration is just the beginning.  
Monthly EPF and ESIC filings, employee onboarding, exits, claims, inspections are ongoing.  
We offer integrated PF+ESIC management services if you want us to handle everything.`,
  },
  {
    question: "How soon can you start?",
    answer: `Within 24 hours of receiving your documents.  
We immediately start DSC procurement and documentation preparation.`,
  },
  {
    question: "What if I’m already registered for one but need the other?",
    answer: `No problem. We can register the missing one.  
But if you’re interested, we also offer integrated compliance management for both.`,
  },
];

export const sectionsPFConsultants = [
  {
    title: "The Karnataka PF Compliance Crucible: Post-New Wage Code Era",
    description:
      "The compliance landscape in Karnataka, anchored by the high-growth, high-stakes economy of Bangalore, is undergoing a massive, compulsory transformation effective November 21, 2025, with the implementation of the four new Labour Codes, particularly the Code on Wages, 2019.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT and Tech Sector Wage Overhaul",
        content:
          "The predominant practice in Bangalore's tech, startup, and Global Capability Centre (GCC) ecosystem is a Cost-to-Company (CTC) structure with a significantly low Basic Pay (often $<40\%$of CTC) and high allowances (HRA, Special Allowance).",
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Mandate",
        content: (
          <>
            <p>
              The new Code on Wages mandates that the statutory definition of
              'Wages' (Basic Pay + DA) must be at least $50\%$ of the employee's
              total remuneration (CTC).
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Impact",
        content:
          "This forces a mandatory and immediate restructuring of every eligible employee's CTC, leading to a direct increase in mandatory PF contributions and a reduction in monthly take-home salary. Companies in the ORR and Electronic City face a massive, non-negotiable payroll restructuring exercise to avoid audit penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "International Worker (IW) Liability and the Karnataka High Court Ruling",
        content: (
          <>
            <p>
              Bangalore, as a global tech hub, has the highest density of
              International Workers (IWs) in India. The Karnataka High Court's
              ruling (April 2024) that struck down the special PF provisions for
              IWs from non-SSA countries as 'unconstitutional' and 'arbitrary'
              has created significant ambiguity.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Challenge",
        content: (
          <>
            <p>
              Employers now need specialized guidance on PF contributions,
              withdrawal terms, and gratuity calculations for IWs to navigate
              the post-ruling enforcement ambiguity and potential future Supreme
              Court action.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital Transformation & Enforcement",
        content: (
          <>
            <p>
              The Regional PF Commissionerates in Bangalore are leading the
              nation in adopting the EPFO 3.0 platform and stricter digital
              enforcement (e.g., the mandatory Aadhaar-UAN seeding for ECR
              filing). Technical glitches (as reported by EPFO officials
              themselves) and the rapid shift to digital reporting still require
              expert management to ensure timely ECR filing and claim
              settlement.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Future-Proofing Bangalore Payroll & Mitigating PF Risk",
    description:
      "EPFDesk is uniquely positioned to handle the complexities of PF compliance in Karnataka, combining legal expertise with an in-depth understanding of the state’s high-tech and industrial payroll dynamics.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "PF Compliance & New Wage Code Readiness",
        content:
          "End-to-end PF compliance management tailored for Bangalore and Karnataka establishments. We ensure full readiness for the New Wage Code through payroll audits, Basic Pay restructuring to meet the 50% statutory wage floor, and protection against retrospective PF reclassification after 2025. Our CTC models guarantee legal compliance while minimizing impact on employee take-home salary.",
      },
      {
        color: "bg-white border-gray-300",
        title: "International Worker PF Strategy (Post-KHC Ruling)",
        content: (
          <>
            <p>
              Specialized advisory for companies hiring expatriates and
              International Workers (IWs), especially from non-SSA countries. We
              help employers navigate the legal ambiguity created by recent
              Karnataka High Court rulings on Para 83 and 43A, ensuring a
              compliant and defensible PF contribution strategy that mitigates
              high-value litigation and protects against global-salary-based PF
              liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital Compliance & Audit Defense",
        content:
          "A complete digital compliance desk covering Aadhaar–UAN seeding, ECR filing, and error-proof monthly submissions to avoid PF deposit rejections. We also provide expert representation for Section 7A/7B/7C proceedings in Karnataka, converting unpredictable retrospective liabilities into controlled, minimized compliance exposure.",
      },
    ],
  },
];

export const sectionsPFRegsitration = [
  // {
  //   title: "Our 7-Day EPF Registration Process",
  //   // description:
  //   //   "We don’t give you a checklist. We log into your EPFO portal and do everything",
  //   cards: [
  //     {
  //       color: "bg-white border-gray-300",
  //       title: "Day 1-2: Documentation & DSC",
  //       content:
  //         "We kick off by collecting and verifying all essential establishment details and documents. Our team secures your Digital Signature Certificate (DSC) and prepares the EPF registration form with complete accuracy — ensuring a smooth start to your registration process",
  //     },
  //     {
  //       color: "bg-white border-gray-300",
  //       title: "Day 3-4: EPFO Submission",
  //       content: (
  //         <>
  //           <p>
  //             We create your establishment profile on the EPFO portal, upload
  //             verified documents, and file Form 5A. Our team tracks the
  //             application in real time to ensure smooth submission and zero
  //             delays.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       color: "bg-white border-gray-300",
  //       title: "Day 5-6: EPFO Processing",
  //       content:
  //         "We closely monitor your EPFO application, respond to any department queries, and coordinate with officials. If an inspection is required, we handle the entire process on your behalf for seamless approval.",
  //     },
  //     {
  //       color: "bg-white border-gray-300",
  //       title: "Day 7: Approval & Setup",
  //       content: (
  //         <>
  //           <p>
  //             Your establishment gets approved, LIN is activated, and your EPFO
  //             access is set up on UMANG. We provide full login credentials, a
  //             quick team briefing, and ensure you're ready to file your first
  //             ECR — all within 7 days.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       color: "bg-white border-gray-300",
  //       title: "Employee Support (Grievance Shield)",
  //       content: (
  //         <>
  //           <p>
  //             End-to-end employee PF support — we manage all grievances through
  //             the EPFiGMS portal, resolve account issues and delays, and provide
  //             direct employee assistance so your HR team stays complaint-free.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       color: "bg-white border-gray-300",
  //       title: "What This Actually Saves You",
  //       content: (
  //         <>
  //           <p>
  //             What This Actually Saves You — eliminate 40+ HR hours a month,
  //             avoid ₹50,000+ in annual penalties, and remove every PF-related
  //             headache. With EPFdesk, you gain guaranteed compliance, zero
  //             employee complaints, and complete peace of mind — all at a
  //             fraction of your current cost.
  //           </p>
  //         </>
  //       ),
  //     },
  //   ],
  // },
  {
    title: "PF Registration Requirements in India",
    description: "Know exactly when your company must register for PF/ESI.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "EPF (Employees' Provident Fund) Registration",
        content:
          "PF registration is mandatory for establishments with 20+ employees, or 10+ employees in factories, and must be completed within 1 month of crossing the threshold. All employees earning below ₹15,000 (Basic + DA) are covered automatically, while higher earners can voluntarily opt in. Non-registration can lead to penalties up to ₹5,00,000, along with backdated PF payments and 12% annual interest.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESI (Employees' State Insurance) Registration",
        content: (
          <>
            <p>
              ESI registration is mandatory for factories with 10+ employees and
              other establishments (offices, shops, restaurants, etc.) with 20+
              employees, if any employee earns below ₹21,000 per month.
              Registration must be completed within 15 days of becoming
              applicable. All eligible employees and their dependents receive
              medical and social benefits. Non-registration can lead to fines,
              backdated ESI contributions, and possible legal prosecution.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Who is Counted as Employee",
        content:
          "Full-time employees (permanent or temporary). Part-time employees if they meet employee definition under law. Contract workers (if employed by you, not genuine contractor). Excludes: Directors not drawing salary, genuine independent contractors, apprentices under Apprentices Act.",
      },
    ],
  },
  {
    title: "Complete PF & ESI Registration Service",
    description:
      "We handle everything. You just provide documents. Get PF code in 10-12 days.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Free Consultation & Eligibility Check (Day 1)",
        content:
          "Understand your business (employees, salaries, locations). Determine PF and/or ESI applicability. Assess timeline and documentation needs. Explain entire process and pricing. Answer all your questions. No commitment required at this stage.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Document Collection (Days 2-3)",
        content: (
          <>
            <p>
              We provide document checklist (simple Excel). You provide: Company
              registration documents, Director/Partner IDs, Employee list with
              details, Bank account information, Office address proof. We review
              and verify all documents (ensure completeness and correctness).
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Digital Signature (DSC) Setup (Days 4-6)",
        content:
          "If you don't have DSC: We help you obtain Class 2/3 Digital Signature (required for PF portal). Processing time: 2-3 days. If you already have DSC: We verify validity and setup for use.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Portal Registration & Application (Days 7-9)",
        content:
          "Create establishment account on EPFO Unified Portal. Fill Form 5A (Employer's registration form). Upload all documents (PAN, incorporation certificate, address proof, etc.). Generate and submit application. Obtain acknowledgment number.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Processing & Approval (Days 10-14)",
        content:
          "EPFO reviews application (typically 5-7 working days). We track application status daily. Handle any queries from EPFO (document clarifications, additional information). Liaise with EPFO office if needed (local Bangalore office visit if required).",
      },
      {
        color: "bg-white border-gray-300",
        title: "PF Code Allotment & Setup (Day 15)",
        content:
          "Receive PF establishment code (unique ID for your company). Setup portal access for ongoing filing. Generate UAN for all existing employees. Conduct first ECR filing (for current month). Provide training to your HR/accounts team (optional). Deliver complete documentation package.",
      },
    ],
  },
];

export const sectionsESICConsultant = [
  {
    title: "The Hidden Cost of ESIC: A ₹25 Lakh Liability Waiting to Happen",
    description:
      "The ESIC Act (10+ employees) is a high-stakes liability. If your business crosses the 10-employee threshold, registration is mandatory within 15 days of applicability.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Problem",
        content:
          "ESIC contributions are calculated on Gross Wages (up to ₹21,000), not just basic pay, making calculations a minefield.1 Missing the 15th of the month deadline attracts immediate penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Catastrophic Risk",
        content: (
          <>
            <p>
              If an eligible employee meets with an employment-related accident
              and lacks a valid ESIC card or registration, your company becomes
              personally liable for ALL medical expenses and compensation. This
              liability is often measured in lakhs and cannot be covered by
              general insurance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Time Drain",
        content:
          "Hours vanish into the ESIC portal trying to fill complex Form-1 (Employer Registration), link employee data, and ensure accurate Dispensary mapping—all while risking severe penalties for delayed registration.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Challenge",
        content: (
          <>
            <p>
              You are legally required to generate the Insured Person (IP)
              card and correctly map the dispensary within 15 days of joining.
              This administrative step is frequently missed in high-attrition
              environments.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Consequence",
        content: (
          <>
            <p>
              Delay means your employee has no access to benefits when they need
              them most, leaving you exposed to full personal liability in the
              event of an accident.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Solution: EPFDesk, Dedicated ESIC Shield",
    description:
      "We transform the complex, high-risk process of ESIC compliance into a seamless, expert-managed service. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Accurate Gross Wage Calculation",
        content:
          "We guarantee precise contribution calculation on Gross Wages (3.25% Employer, 0.75% Employee), eliminating the most common audit failure point.",
      },
      {
        color: "bg-white border-gray-300",
        title: "IP Card Generation within 15 Days",
        content: (
          <>
            <p>
              We manage the complete process of registering all eligible
              employees and initiating the Insured Person (IP) card
              generation within the legally required 15 days of joining.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Correct Dispensary Mapping",
        content:
          "We ensure accurate Dispensary and ESI Hospital mapping in the Bangalore area, guaranteeing employees can access medical benefits immediately.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Guaranteed Timeliness",
        content: (
          <>
            <p>
              We ensure final filing and remittance are completed well before
              the 15th of the month deadline, eliminating 100% of late-payment
              penalties (12% interest p.a.) and damage charges.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Audit-Ready Records",
        content: (
          <>
            <p>
              We manage and maintain mandatory records, including the Accident
              Register (Form 11) and other documentation necessary for audit and
              immediate accident reporting.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Post-Registration Filings",
        content: (
          <>
            <p>
              We handle the meticulous preparation and submission of half-yearly
              returns (Form 6/C-11), maintaining perfect record continuity for
              the ESIC Corporation.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Claim Facilitation",
        content: (
          <>
            <p>
              Assistance with processing employee claims for sickness,
              maternity, and temporary disablement benefits, reducing the burden
              on your HR team.
            </p>
          </>
        ),
      },
    ],
  },
];

export const sectionsESICRegistration = [
  {
    title: "Our 5-Day ESIC Registration Process",
    // description:
    //   "We don’t give you a checklist. We log into your EPFO portal and do everything",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Day 1: Documentation Collection",
        content:
          "We collect all necessary documents, verify every detail for accuracy, and determine your correct ESIC branch or sub-regional office. We also prepare and validate the employer registration form (Code 17) to ensure a smooth registration process.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Day 2: ESIC Submission",
        content: (
          <>
            <p>
              We submit the completed Code 17 form to the designated ESIC
              branch, begin tracking the application status in real time, and
              proactively prepare for any inspection or additional documentation
              requests from ESIC authorities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Day 3: Inspection (if required)",
        content:
          "We coordinate and manage the ESIC inspection process—arranging the visit, presenting all required documentation, addressing officer queries on the spot, and ensuring your establishment receives prompt inspection clearance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Day 4: Registration Approval",
        content: (
          <>
            <p>
              We secure your 17-digit ESIC establishment code, set up your
              online employer portal access, and prepare the complete employee
              registration list—ensuring your organization is ready to onboard
              employees under ESIC immediately.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Employee Registration & Setup",
        content: (
          <>
            <p>
              We complete full employee registration by generating IP numbers,
              filing the first monthly return (if applicable), and setting up
              online challan payments. You receive full portal access and a team
              briefing—making your establishment fully ESIC-compliant within
              just 5 days.
            </p>
          </>
        ),
      },
    ],
  },
];

export const pfESICConsultant = [
  {
    title: "What We Do (Everything, Together)",
    // description:
    //   "We don’t give you a checklist. We log into your EPFO portal and do everything",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Onboarding (EPF + ESIC Together)",
        content:
          "We register new employees under both EPF and ESIC on the same day—UAN creation, IP generation, and portal linking—all completed seamlessly. Your workforce becomes 100% compliant from Day 1 with a unified, hassle-free onboarding process.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Monthly Filing (Both Before 15th)",
        content: (
          <>
            <p>
              We file both EPF and ESIC returns before the 15th each
              month—accurate ECRs, challans, and payments done together. You
              receive one consolidated confirmation, ensuring zero penalties and
              perfect synchronization across both compliances.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Exit Management (Coordinated)",
        content:
          "We coordinate EPF and ESIC exits simultaneously—marking employees in both portals, settling final contributions, and guiding on PF transfers or withdrawals. Result: clean exits with no compliance gaps or pending obligations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Employee Support (One Team, All Queries)",
        content: (
          <>
            <p>
              We provide a single support line for all employee PF and ESIC
              issues—UAN, IP, claims, transfers, or balances—so your HR team
              never deals with compliance complaints again
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Inspection Response (Coordinated Defense)",
        content: (
          <>
            <p>
              We handle both EPF and ESIC inspections together—responding within
              24 hours, coordinating documentation, and ensuring consistent,
              penalty-free closure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "What Integrated PF+ESIC Management Saves You",
        content: (
          <>
            <p>
              With EPFdesk’s integrated PF + ESIC management, you eliminate
              duplicate work, delays, and penalties — saving 50+ HR hours a
              month, ₹80,000+ in fines, and endless coordination headaches. One
              dashboard, zero stress.
            </p>
          </>
        ),
      },
    ],
  },
];

export const pfESICRegistration = [
  {
    title: "Our 7-Day Integrated Registration Process",
    // description:
    //   "We don’t give you a checklist. We log into your EPFO portal and do everything",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Documentation & Preparation",
        content:
          "Streamlined document collection for both EPF and ESIC—handled together in a single session. We prepare all required forms, verify details, and ensure accuracy before submission.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Parallel Submissions",
        content: (
          <>
            <p>
              EPF and ESIC registrations are submitted simultaneously—no waiting
              between the two. We create your EPF establishment, file required
              forms, and submit ESIC Code 17 the same day, ensuring both
              processes move forward in parallel for faster approval.
            </p>
          </>
        ),
      },

      {
        color: "bg-white border-gray-300",
        title: "Inspection & Processing",
        content: (
          <>
            <p>
              If an inspection is required, we coordinate a single, unified
              inspection for both EPF and ESIC. Our team presents all
              documentation together, addresses officer queries on the spot, and
              monitors both applications closely to ensure quick, hassle-free
              approvals.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Approval & Complete Setup",
        content: (
          <>
            <p>
              By Day 7, both EPF and ESIC setups are fully approved and active.
              You receive establishment and ESIC codes, LIN activation, and
              employee access through UMANG and ESIC portals. With both systems
              ready, you can instantly start filings, generate UANs and IPs, and
              onboard new hires seamlessly.{" "}
            </p>
          </>
        ),
      },
    ],
  },
];

// Meta data starts here

export const metadataMap = {
  "pf-consultants-in-hyderabad": {
    title: `PF Consultant in Hyderabad | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Hyderabad for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical:
        "https://epfdesk.com/epf/hyderabad/pf-consultants-in-hyderabad",
    },
    openGraph: {
      title: `Leading PF consultants in Hyderabad for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/hyderabad/pf-consultants-in-hyderabad",
    },
  },
  "pf-consultants-in-goa": {
    title: `PF Consultant in Goa | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Goa for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/goa/pf-consultants-in-goa",
    },
    openGraph: {
      title: `Leading PF consultants in Goa for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/goa/pf-consultants-in-goa",
    },
  },
  "pf-consultants-in-mumbai": {
    title: `PF Consultant in Mumbai | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Mumbai for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/mumbai/pf-consultants-in-mumbai",
    },
    openGraph: {
      title: `Leading PF consultants in Mumbai for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/mumbai/pf-consultants-in-mumbai",
    },
  },
  "pf-consultants-in-chennai": {
    title: `PF Consultant in Chennai | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Chennai for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/chennai/pf-consultants-in-chennai",
    },
    openGraph: {
      title: `Leading PF consultants in Chennai for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/chennai/pf-consultants-in-chennai",
    },
  },
  "pf-consultants-in-visakhapatnam": {
    title: `PF Consultant in Visakhapatnam | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Visakhapatnam for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical:
        "https://epfdesk.com/epf/visakhapatnam/pf-consultants-in-visakhapatnam",
    },
    openGraph: {
      title: `Leading PF consultants in Visakhapatnam for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/visakhapatnam/pf-consultants-in-visakhapatnam",
    },
  },
  "pf-consultants-in-delhi": {
    title: `PF Consultant in Delhi | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Delhi for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/delhi/pf-consultants-in-delhi",
    },
    openGraph: {
      title: `Leading PF consultants in Delhi for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/delhi/pf-consultants-in-delhi",
    },
  },
  "pf-consultants-in-pune": {
    title: `PF Consultant in Pune | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Pune for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/pune/pf-consultants-in-pune",
    },
    openGraph: {
      title: `Leading PF consultants in Pune for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/pune/pf-consultants-in-pune",
    },
  },
  "pf-consultants-in-kolkata": {
    title: `PF Consultant in Kolkata | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Kolkata for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/kolkata/pf-consultants-in-kolkata",
    },
    openGraph: {
      title: `Leading PF consultants in Kolkata for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/kolkata/pf-consultants-in-kolkata",
    },
  },
  "pf-consultants-in-ahmedabad": {
    title: `PF Consultant in Ahmedabad | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Ahmedabad for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical:
        "https://epfdesk.com/epf/ahmedabad/pf-consultants-in-ahmedabad",
    },
    openGraph: {
      title: `Leading PF consultants in Ahmedabad for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/ahmedabad/pf-consultants-in-ahmedabad",
    },
  },
  "pf-consultants-in-surat": {
    title: `PF Consultant in Surat | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Surat for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/surat/pf-consultants-in-surat",
    },
    openGraph: {
      title: `Leading PF consultants in Surat for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/surat/pf-consultants-in-surat",
    },
  },
  "pf-consultants-in-gurgaon": {
    title: `PF Consultant in Gurgaon | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Gurgaon for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/gurgaon/pf-consultants-in-gurgaon",
    },
    openGraph: {
      title: `Leading PF consultants in Gurgaon for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/gurgaon/pf-consultants-in-gurgaon",
    },
  },
  "pf-consultants-in-noida": {
    title: `PF Consultant in Noida | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Noida for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/noida/pf-consultants-in-noida",
    },
    openGraph: {
      title: `Leading PF consultants in Noida for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/noida/pf-consultants-in-noida",
    },
  },
  "pf-consultants-in-jaipur": {
    title: `PF Consultant in Jaipur | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Jaipur for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/jaipur/pf-consultants-in-jaipur",
    },
    openGraph: {
      title: `Leading PF consultants in Jaipur for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/jaipur/pf-consultants-in-jaipur",
    },
  },
  "pf-consultants-in-lucknow": {
    title: `PF Consultant in Lucknow | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Lucknow for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/lucknow/pf-consultants-in-lucknow",
    },
    openGraph: {
      title: `Leading PF consultants in Lucknow for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/lucknow/pf-consultants-in-lucknow",
    },
  },
  "pf-consultants-in-indore": {
    title: `PF Consultant in Indore | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Indore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/indore/pf-consultants-in-indore",
    },
    openGraph: {
      title: `Leading PF consultants in Indore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/indore/pf-consultants-in-indore",
    },
  },
  "pf-consultants-in-coimbatore": {
    title: `PF Consultant in Coimbatore | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Coimbatore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical:
        "https://epfdesk.com/epf/coimbatore/pf-consultants-in-coimbatore",
    },
    openGraph: {
      title: `Leading PF consultants in Coimbatore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/coimbatore/pf-consultants-in-coimbatore",
    },
  },
  "pf-consultants-in-vadodara": {
    title: `PF Consultant in Vadodara | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Vadodara for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/vadodara/pf-consultants-in-vadodara",
    },
    openGraph: {
      title: `Leading PF consultants in Vadodara for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/vadodara/pf-consultants-in-vadodara",
    },
  },
  "pf-consultants-in-nagpur": {
    title: `PF Consultant in Nagpur | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Nagpur for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/nagpur/pf-consultants-in-nagpur",
    },
    openGraph: {
      title: `Leading PF consultants in Nagpur for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/nagpur/pf-consultants-in-nagpur",
    },
  },
  "pf-consultants-in-bhopal": {
    title: `PF Consultant in Bhopal | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Bhopal for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/bhopal/pf-consultants-in-bhopal",
    },
    openGraph: {
      title: `Leading PF consultants in Bhopal for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/bhopal/pf-consultants-in-bhopal",
    },
  },
  "pf-consultants-in-kanpur": {
    title: `PF Consultant in Kanpur | EPF Registration, Returns & Inspections | Workforce`,
    description:
      "Leading PF consultants in Kanpur for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
    alternates: {
      canonical: "https://epfdesk.com/epf/kanpur/pf-consultants-in-kanpur",
    },
    openGraph: {
      title: `Leading PF consultants in Kanpur for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
      url: "https://epfdesk.com/epf/kanpur/pf-consultants-in-kanpur",
    },
  },
};
export const sectionsPFMonthlyFiling = [
  {
    title: "Understanding PF Monthly Filing (ECR)",
    description:
      "Every EPF-registered business must file monthly returns. Here's what it involves.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "What is ECR?",
        content:
          "ECR (Electronic Challan-cum-Return) is the monthly PF return filed with EPFO. Contains employee-wise contribution details. Includes employer and employee PF amounts. Must be filed by 15th of every month for previous month.",
      },
      {
        color: "bg-white border-gray-300",
        title: "What's Included in ECR?",
        content: (
          <>
            <p>
              Employee names, UANs, Aadhaar numbers. Monthly wages (basic + DA).
              Employee PF contribution (12%). Employer EPF contribution (3.67%).
              Employer EPS contribution (8.33% to pension). Joining and exit
              dates. Total PF and pension amounts.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Why Monthly Filing is Critical?",
        content:
          "Legal compliance (mandatory under EPF Act). Avoid late fees (₹5,000-1,00,000 per default). Prevent EPFO notices and inspections. Enable employee PF transfers (can't process if ECR not filed). Maintain employee trust. Protect business reputation.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Consequences of Missing Deadline",
        content: (
          <>
            <p>
              Damages (late fees): ₹5,000-1,00,000. Interest: 12% p.a. on
              delayed PF amount. Employee complaints to EPFO. PF transfers
              blocked for all employees. Inspection triggered. Criminal
              prosecution risk (repeated defaults). Company reputation damage.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "How We Handle Your Monthly PF Filing?",
    description:
      "Five-step automated process. You approve, we file. Done in 10 minutes.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Step 1: Data Collection (By 5th of Month)",
        content:
          "We pull salary data from your payroll system (Zoho, Greythr, Keka, Tally integration). Or you email us salary sheet. We extract: Employee names, UANs, monthly wages, attendance days, new joiners, exits.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Step 2: PF Calculation (By 8th)",
        content: (
          <>
            <p>
              Calculate employee PF (12% of basic+DA, max ₹15,000). Calculate
              employer EPF (3.67% of basic+DA). Calculate employer EPS (8.33% to
              pension fund). Apply wage ceiling correctly (₹15,000 limit).
              Handle special cases (mid-month joiners/exits, leave without pay,
              arrears).{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Step 3: ECR Generation (By 10th)",
        content:
          "Prepare ECR file in EPFO format. Validate UAN for all employees. Check for errors (wrong UAN, duplicate entries, calculation mistakes). Generate challan for total PF amount due. Create summary report for your review.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Step 4: Your Approval (By 11th)",
        content: (
          <>
            <p>
              ECR summary sent to you via email + dashboard. Shows: Total
              employees covered, Total PF amount (employer + employee), Challan
              amount to be paid, Any new joiners or exits. You review (5
              minutes) and approve with one click.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Step 5: Filing & Payment (By 12th)",
        content: (
          <>
            <p>
              Upload ECR to EPFO Unified Portal (using your DSC). Generate
              challan and make payment. Upload payment confirmation (TRCP). File
              on time (3 days before 15th deadline). Send you confirmation with
              ARN (acknowledgment number). Done! ECR filed, employees can see
              contributions in passbook.
            </p>
          </>
        ),
      },
    ],
  },
];

export const pastelCardsEpfoBangaloreMonthlyFiling = {
  subTitle: "Why Businesses Choose Our PF Filing Service?",
  subText: "Not just filing. Complete accuracy and peace of mind.",
  cards: [
    {
      title: "Always On Time",
      subtitle: `Filed by 12th, 3 days before deadline. Never missed a deadline in 24 months. Zero late fees saved: ₹60,000-6,00,000/year. Automatic reminders to you (in case approval needed). Buffer for EPFO portal downtime (files early).`,
      number: 1,
    },
    {
      title: "Zero Calculation Errors",
      subtitle: `Software-validated PF calculations. Wage ceiling applied correctly. EPF vs EPS split accurate (3.67% + 8.33%). Mid-month joiner/exit pro-rata calculations. Leave without pay adjustments. Second review by human expert before filing.`,
      number: 2,
    },
    {
      title: "UAN Validation & Management",
      subtitle: `Verify every employee UAN before filing. Identify inactive UANs (alert you). Generate UAN for new employees (within 7 days). Seed Aadhaar, PAN, bank details to UAN. Ensure employees can access PF passbook. Fix UAN issues proactively.`,
      number: 3,
    },
    {
      title: "Seamless Payroll Integration",
      subtitle: `Direct integration with: Zoho Payroll, Greythr, Keka, Darwinbox, Tally. No manual data entry. Automatic salary data pull every month. Error-free data transfer. Or simple Excel upload if no software.`,
      number: 4,
    },
    {
      title: "Employee Records Maintained",
      subtitle: `Digital database of all employees. Historical ECR copies stored (3+ years). Salary history for each employee. Joining/exit dates tracked. Ready for EPFO inspections. Audit-ready documentation.`,
      number: 5,
    },
    {
      title: "Challan & Payment Management",
      subtitle: `Generate challan automatically. Calculate exact amount due. Multiple payment options supported. Upload payment proof to portal. Reconcile payment confirmation (TRCP). Track pending challans (if any).`,
      number: 6,
    },
    {
      title: "Monthly Compliance Report",
      subtitle: `After filing, you receive: ECR filed copy (PDF), Challan payment proof, Total employees covered count, Total PF contribution breakdown, New joiners and exits summary, Next month deadline reminder.`,
      number: 7,
    },
    {
      title: "Expert Support Included",
      subtitle: `Dedicated PF specialist for your account. Email/call support for queries. Filing errors corrected immediately. EPFO portal issues handled. Advice on complex situations (arrears, bonuses, etc.). Annual planning for smooth filing.`,
      number: 8,
    },
  ],
};
export const epfManagementFaqBangaloreMonthlyFiling = [
  {
    question: "What is the deadline for PF monthly filing?",
    answer: `PF monthly filing (ECR) must be submitted by 15th of every month for the previous month. Example: September salary PF must be filed by October 15th. Challan payment must also be done by 15th. Missing deadline attracts damages (₹5,000–1,00,000) and interest (12% p.a.). We file by 12th (3 days before deadline) to ensure zero penalties. If 15th is a Sunday/holiday, the deadline moves to the next working day, but we file early regardless.`,
  },
  {
    question: "Can I file PF return myself or should I hire a service?",
    answer: `You can file yourself if: You have <20 employees, are comfortable with EPFO portal and ECR Excel, have 3–4 hours/month, know PF rules, and can manage technical issues.  
You should hire a service if: You have 50+ employees, lack time, want to avoid penalties, need UAN/claim support, or want zero errors.  
A PF service costs ₹2,500–10,000/month but saves ₹60,000–6,00,000/year in prevented penalties and saves valuable time.`,
  },
  {
    question: "What happens if I file PF return late?",
    answer: `Late PF filing results in:  
• Damages (late fees) ₹5,000–1,00,000 (decided by PF Commissioner)  
• 12% p.a. interest from due date  
• Portal locks until fees are paid  
• Delayed employee PF transfers  
• High chance of EPFO inspection  
• Possible prosecution (up to 3 years imprisonment for willful default)  

Example: ₹1,00,000 PF paid 3 months late → ₹3,000 interest + ₹25,000 average damage = ₹28,000 penalty.  
With our service: **Zero late filings guaranteed.**`,
  },
  {
    question: "Do I need a Digital Signature (DSC) for PF filing?",
    answer: `Yes, DSC is mandatory for filing ECR on EPFO.  
Required for: Uploading ECR, approving challan, downloading filed returns.  
Type needed: Class 2 or Class 3 USB token DSC (valid 1–2 years).  
Cost: ₹800–₹2,000/year.  
Who needs it: Authorized signatory (Director/Partner/Authorized person).  
If you don’t have DSC, we help you get it in 3–5 days and set it up securely.`,
  },
  {
    question: "What if my employees don’t have UAN?",
    answer: `UAN is mandatory for PF filing. For new employees without UAN:  
• Employer must generate UAN within 1 month of joining  
• Takes 7–15 days for activation  
• Without UAN, ECR gets rejected and PF can’t be processed  

Our service includes:  
✅ UAN generation (within 7 days)  
✅ Aadhaar/PAN/Bank linking  
✅ Portal activation  
✅ Zero delays or rejections`,
  },
  {
    question: "Can I revise a filed ECR if I made an error?",
    answer: `Yes, but only for the current financial year.  
Can revise: Name/UAN errors, wages, contribution amounts  
Cannot revise easily: Past financial year (needs EPFO approval)  
Recommended timeline: Within 3 months  

Our guarantee:  
• Pre-filing validation to avoid errors  
• If correction needed, amendment done within 48 hours at no extra cost`,
  },
  {
    question: "How is PF calculated for mid-month joiners or exits?",
    answer: `PF is calculated on a pro-rata basis:  
Formula: (Basic + DA) × (Working days / Total days) × 12%  

Example:  
15 days worked in 30-day month, Basic ₹15,000  
Pro-rata Basic = 15,000 × (15/30) = ₹7,500  
PF = 12% of 7,500 = ₹900 (employee + employer each)  

We calculate this automatically and file accurately without manual work.`,
  },
  {
    question: "What is TRCP and why is it important?",
    answer: `TRCP (Transaction-cum-Receipt-Payment) is the PF challan payment receipt.  
It must reflect in the EPFO portal, otherwise PF shows **unpaid** even if money is deducted.  
Without TRCP:  
• Employees see zero contribution  
• EPFO issues notices  

We handle: Challan payment → TRCP upload → Portal confirmation → Verification within 24 hours.`,
  },
  {
    question: "Can I get a refund for excess PF paid?",
    answer: `Yes, through Form 10G, but approval takes 3–6 months and EPFO reviews strictly.  
Common reasons: Wrong wages considered, missing ₹15,000 wage ceiling, wrong employee mapping.  

Our service:  
✅ Prevents overpayment with proper calculations  
✅ If excess paid earlier, we file Form 10G and track refund`,
  },
  {
    question: "How long do I need to maintain PF records?",
    answer: `PF records must be stored for **3 years (minimum)**, but 5–7 years recommended.  
Required records include:  
• Monthly ECR files  
• TRCP challans  
• Form 5, 10, 12A  
• Wage registers  
• UAN records  

Our service stores everything securely for 5+ years with instant access during inspections.`,
  },
];
export const sectionsPFCompliance = [
  {
    title: "EPF Compliance Localized to Bangalore's Economic Hubs",
    description:
      "Bangalore's economy is compartmentalized, and compliance must be too. We address the specific risk profile of each major zone:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Electronic City",
        content:
          "A fast-paced hub for IT/ITES, electronics, and startups, where high attrition makes PF onboarding and exits challenging. We streamline compliance with automated Form 11 and UAN management, ensuring 99% accuracy in employee linking and transfer claims for a highly mobile workforce.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Outer Ring Road (ORR)",
        content: (
          <>
            <p>
              Home to major tech parks and e-commerce firms, where complex CTC
              structures with high allowances face direct scrutiny under the New
              Wage Code’s 50% Wages rule. We provide proactive New Wage Code
              payroll restructuring to ensure Basic Wage ≥ 50% of CTC, reducing
              the risk of future retrospective PF and Gratuity liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Peenya Industrial Area",
        content:
          "A manufacturing-heavy zone with widespread use of contract labour, exposing Principal Employers to PF risks when contractors default. Our Contractor EPF Vetting system enforces real-time checks on vendor ECRs and challans before invoice processing, fully protecting the Principal Employer from compliance liability.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Whitefield / ITPB",
        content: (
          <>
            <p>
              A hub of large MNCs and R&D centers operating Exempted PF Trusts,
              which face stringent EPFO scrutiny and complex governance
              requirements. We provide specialized Exempted Trust audit and
              compliance support, ensuring smooth annual audits and strong trust
              governance to prevent any risk of de-recognition.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Biocon Park / Jigani",
        content: (
          <>
            <p>
              A key hub for biotech, pharma, and heavy engineering where
              production incentives and variable pay must be accurately
              classified under the New Wage Code. We deliver expert Variable Pay
              Compliance Mapping, ensuring every incentive aligns with the NWC
              definition of ‘Wages’ for accurate PF contributions and zero
              non-compliance risk.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Compliance Shield",
    description:
      "The implementation of the Code on Wages, 2019 (expected November 2025) fundamentally changes how EPF is calculated, making most existing payrolls non-compliant. EPFDesk is already New Wage Code Ready.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Mandatory 50% 'Wages' Rule Mitigation",
        content:
          "Under the New Wage Code, if allowances exceed 50% of total remuneration, the excess must be added back to ‘Wages’ (Basic + DA + Retaining Allowance), increasing PF liability. We run predictive payroll simulations for your Bangalore workforce to pinpoint the financial impact and enable proactive salary restructuring, safeguarding you from retrospective PF penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee (FTE) Gratuity Management",
        content: (
          <>
            <p>
              The New Wage Code grants Gratuity after just one year of service,
              a major shift for Bangalore’s IT/ITeS sector that relies heavily
              on FTEs. We embed Gratuity provisioning into your compliance
              framework to ensure accurate balance-sheet liability recognition
              and eliminate future legal exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Simplified EPF Litigation & Audit",
        content:
          "The New Wage Code streamlines legal proceedings, meaning any lapse in compliance now exposes employers to faster penalties and quicker case closure. We provide full Inspector-cum-Facilitator audit support, preparing and delivering records in the new digital formats to ensure clean, efficient resolution of any EPF inquiry.",
      },
    ],
  },
];

export const pastelCardsEpfoBangalorePFCompliance = {
  subTitle: "Complete PF Compliance Management",
  subText: "Three-phase approach: Audit → Remediate → Maintain.",
  cards: [
    {
      title: "PHASE 1: COMPLIANCE AUDIT (Week 1-2)",
      subtitle: `We audit your last 3 years of PF compliance to detect filing gaps, payment mismatches, UAN issues, missing registers, and penalty risks—before EPFO does. The final 40–60 page report includes a compliance score, risk exposure, and a clear fix plan. Completed in 1–2 weeks. Costs ₹15,000–30,000 and is free if you onboard with us for ongoing compliance.`,
      number: 1,
    },
    {
      title: "PHASE 2: REMEDIATION (Weeks 3-8)",
      subtitle: `We clean up your entire PF backlog so you avoid penalties, inspections, and employee escalations. From pending ECRs and payments to UAN activation, transfers, notices, disputes, and documentation—everything is fixed and delivered as audit-ready proof. Done in 4–6 weeks. Cost: ₹25,000–1,50,000 based on severity.`,
      number: 2,
    },
    {
      title: "PHASE 3: ONGOING COMPLIANCE (Monthly)",
      subtitle: `We run your PF compliance every month so you never miss a deadline, face notices, or handle employee PF issues manually. From ECR filing and UAN generation to transfers, inspections, and legal updates—everything is managed with real-time reporting and strategic optimization. Continuous service. ₹5,000–₹20,000/month based on team size.`,
      number: 3,
    },
  ],
};

export const epfManagementFaqBangalorePFCompliance = [
  {
    question: "What is PF compliance and why is it important?",
    answer: `PF compliance means following all rules under the EPF Act 1952, including PF registration (within 1 month of reaching 20 employees), monthly ECR filing by 15th, correct contribution calculation, coverage for employees earning < ₹15,000, maintaining statutory registers, timely PF transfers, and responding to EPFO notices.  

Importance:  
• Avoid penalties ₹5,000–₹1,00,000 per default  
• Prevent prosecution (up to 3 years imprisonment)  
• Maintain employee trust (delayed PF leads to attrition)  
• Clear investor due diligence (critical for Bangalore startups)  
• Prevent bank account attachment by EPFO  
• Build long-term compliance security`,
  },
  {
    question: "How do I know if my company is PF compliant?",
    answer: `Quick self-assessment:  
1. Registered if 20+ employees?  
2. ECR filed for all months in the past 12 months?  
3. Challans paid before 15th?  
4. All eligible employees covered?  
5. UAN generated for all employees?  
6. PF calculated correctly (Basic+DA, ceiling ₹15,000)?  
7. EPF-EPS split correct?  
8. Statutory registers maintained?  
9. No EPFO notices pending?  
10. PF transfers processed?  

If any answer is “No” or “Not sure” → compliance gaps exist.  
We offer a **free 45-min PF audit** with compliance score (0–100) and gap report.`,
  },
  {
    question:
      "What happens if I haven’t registered for PF despite having 20+ employees?",
    answer: `Consequences:  
• Penalty ₹10,000–₹5,00,000  
• Backdated PF liability + 12% interest  
• Employee complaints lead to inspection  
• Funding & loan applications get blocked  
• Criminal prosecution possible  

Solution: Voluntary compliance  
✔ Register PF immediately  
✔ Negotiate penalty reduction (60–70% possible)  
✔ Pay backdated PF + interest in manageable scope (often 12–24 months instead of full 36+)`,
  },
  {
    question: "How much does PF non-compliance cost?",
    answer: `Examples:  
• 3 months delay (50 employees, ₹2L PF/month) → ₹6L contribution + interest + penalty ≈ ₹6.33L  
• 12 months backlog (100 employees, ₹5L PF/month) → ≈ ₹64.8L total  
• No registration for 3 years (25 employees) → ≈ ₹68.7L total  

Hidden costs:  
• Talent loss, investor rejection, legal fees, bank freeze, inspections  

Prevention cost: ₹5,000–₹15,000/month can save ₹5–50L+ in penalties.`,
  },
  {
    question: "Can I fix past PF non-compliance?",
    answer: `Yes. Process:  
1. Compliance audit  
2. Liability calculation  
3. File all pending ECRs  
4. Pay PF + interest  
5. Respond to notices  
6. Negotiate penalty  
7. Set up ongoing compliance  

Timeline: 4–12 weeks  
Cost: ₹25,000–₹1,50,000 (remediation) + actual PF dues  
Success rate: 95% cases resolved  
Average penalty reduction: 65%`,
  },
  {
    question: "What is a PF compliance audit and do I need one?",
    answer: `Audit covers:  
• 3 years ECR, challan, coverage, calculations, UAN, notices, statutory registers  
You get:  
✔ Compliance score (0–100)  
✔ Gap and risk report  
✔ Penalty exposure estimate  
✔ Action plan and cost  

Who needs it?  
• 50+ employees  
• Due diligence stage  
• Notice received  
• No audit in 12+ months  

Cost: ₹15,000–₹30,000 (FREE with long-term service)`,
  },
  {
    question: "How long does PF compliance remediation take?",
    answer: `Typical timelines:  
• 3–6 months backlog → 2–4 weeks  
• 6–12 months backlog → 4–6 weeks  
• 12–24 months + notice → 6–8 weeks  
• 24+ months + inspection → 8–12 weeks  

Fast-track available in **10–14 days** for urgent inspections or due diligence.`,
  },
  {
    question: "What are statutory registers and why are they important?",
    answer: `Mandatory records under EPF Act:  
• Form 5, 10, 12A  
• Wage & attendance registers  
• Contribution records  

Importance:  
• First thing EPFO asks during inspections  
• Required for audits, disputes, and legal proof  

Our service keeps all records digital, inspection-ready, and printable on demand.`,
  },
  {
    question: "How do I prepare for an EPFO inspection?",
    answer: `7-day readiness checklist:  
✔ File pending ECRs  
✔ Pay all dues + interest  
✔ Fix calculation errors  
✔ Prepare statutory registers  
✔ Cover missing employees  
✔ Generate UANs  
✔ Prepare written submission  
✔ Conduct mock inspection  

We provide full inspection support and typically reduce penalties by **75% on average**.`,
  },
  {
    question: "Can I negotiate EPFO penalties?",
    answer: `Yes, penalties are negotiable.  
Negotiable:  
• Section 14B damages  
• Installment payments  
• Partial penalty relief  

Non-negotiable: PF principal + 12% interest  

Our results:  
• 150+ negotiations handled  
• Avg penalty reduction: 65%  
• Best case: 92% reduction`,
  },
  {
    question: "What happens if I ignore EPFO notices?",
    answer: `Consequences:  
• Default penalty order  
• Bank account freeze  
• Recovery as tax arrears  
• Asset attachment  
• Criminal prosecution  
• Directors held liable  

Even if notice deadline is missed → we can still respond and reduce damage. Contact urgently.`,
  },
  {
    question: "How do I choose the right PF compliance partner?",
    answer: `Check for:  
✔ Real EPFO/legal expertise, not just filing staff  
✔ Proven inspection & penalty negotiation record  
✔ Tech + human support (dashboard + expert access)  
✔ Notice response within 24 hours  
✔ Transparent pricing  

Red flags:  
✘ Extremely low pricing  
✘ No inspection support  
✘ No physical office  

Our strengths:  
• Ex-EPFO experts  
• 150+ inspections handled  
• 95% penalty reduction rate  
• Bangalore office + rapid support  
• 300+ client success stories`,
  },
];

export const cityAddress = {
  bangalore: `Bengaluru Zone (Karnataka) Bhavishya Nidhi Bhavan,
No.13 Raja Ram Mohan Roy Road,
Bangalore-560025`,

  hyderabad: `Bhavishya Nidhi Bhawan, Opposite Begumpet Railway Station,
Brahmanwadi, Begumpet
Hyderabad,Telangana-500016`,

  mumbai: `341, Bhavishya Nidhi Bhawan,
Bandra (East),
MUMBAI-I (BANDRA)-400 051`,

  chennai: `Office of the Addl. Central Provident Fund Commissioner(Chennai & Puducherry),
No. 37, Royapettah High Road, Opposite Swagat Hotel, (TN).
Chennai-600 014`,

  visakhapatnam: `Bhavishya Nidhi Bhawan,
Door No. 58-14-86, Marripalem VUDA Layout,
NAD Post, Visakhapatnam – 530009, Andhra Pradesh`,

  delhi: `Employees Provident Fund Organization, (Ministry of Labour & Employment)
Plate A Ground Floor, Office Block-II, East Kidwai Nagar
New Delhi-110023`,

  pune: `2nd Floor, Pune Cantonment Board Building,
Near Golibar Maidan, Camp
Pune(Maharashtra) - 411 001.`,

  kolkata: `Office of the Addl. Central Provident Fund Commissioner (West Bengal, NER)
DK-Block, Sector-II, Salt Lake City, Karunamoyee,
Kolkata- 700 091.`,

  ahmedabad: `Bhavishyanidhi Bhawan, Near Income Tax Circle
Ashram Road (Gujarat)
Ahmedabad-380 014.`,

  surat: `Bhavishyanidhi Bhawan, Near Income Tax Circle
Ashram Road (Gujarat)
Ahmedabad-380 014.`,

  gurgaon: `Bhavishyanidhi Bhawan, Near Income Tax Circle
Ashram Road (Gujarat)
Ahmedabad-380 014.`,

  noida: `Bhavishya Nidhi Bhawan
A-2C, Sector 24, Noida,
Uttar Pradesh -201301.`,

  jaipur: `Nidhi Bhawan, Vidyut Marg,
Jyoti Nagar,(RJ)
Jaipur-302 005`,

  lucknow: `Nidhi Bhawan, Vidyut Marg,
Jyoti Nagar,(RJ)
Jaipur-302 005`,

  indore: `Nidhi Bhawan, Vidyut Marg,
Jyoti Nagar,(RJ)
Jaipur-302 005`,

  coimbatore: `P.B.No-3875,
Dr. Balasundaram Road,
Coimbatore-641018.`,

  vadodara: `Regional Office - VADODARA
B/H VMC Ward-6 Office,
Akota Stadium Road,
Vadodara, GUJARAT`,

  nagpur: `Bhavishya Nidhi Bhawan
132-A, Ridge Road, Tukdoji Square,
Raghuji Nagar, Nagpur 440009`,

  bhopal: `Bhavishyanidhi Bhawan,
59-Arera Hills, (M.P.)
Bhopal-462 011`,

  kanpur: `Office of the Addl. Central Provident Fund Commissioner (Uttar Pradesh),
Nidhi Bhawan,Sarvodaya Nagar,
Kanpur -208 005`,
};

export const sectionsESICompliance = [
  {
    title: "The Hidden Cost of ESIC: A ₹25 Lakh Liability Waiting to Happen",
    description:
      "The ESIC Act (10+ employees) is a high-stakes liability. If your business crosses the 10-employee threshold, registration is mandatory within 15 days of applicability.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Problem",
        content:
          "ESIC contributions are calculated on Gross Wages (up to ₹21,000), not just basic pay, making calculations a minefield. Missing the 15th of the month deadline attracts immediate penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Risk",
        content: (
          <>
            <p>
              If an eligible employee meets with an employment-related accident
              and lacks a valid ESIC card or registration, your company becomes
              personally liable for ALL medical expenses and compensation. This
              liability is often measured in lakhs and cannot be covered by
              general insurance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Time Drain",
        content:
          "Hours vanish into the ESIC portal trying to fill forms, link employee data, and ensure accurate Dispensary mapping—all while risking the severe penalties for delayed registration.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Challenge",
        content: (
          <>
            <p>
              You are legally required to generate the Insured Person (IP)
              card and correctly map the dispensary within 15 days of joining.
              This administrative step is frequently missed in high-attrition
              environments.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Consequence",
        content: (
          <>
            <p>
              Delay means your employee has no access to benefits when they need
              them most, leaving you exposed to full personal liability in the
              event of an accident.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Solution: EPFDesk, Dedicated ESIC Shield",
    description:
      "We transform the complex, high-risk process of ESIC compliance into a seamless, expert-managed service. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Accurate Gross Wage Calculation",
        content:
          "We guarantee precise contribution calculation on Gross Wages(3.25% Employer, 0.75% Employee), eliminating the most common audit failure point.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Guaranteed Timeliness",
        content: (
          <>
            <p>
              We ensure the final filing and remittance are completed well
              before the 15th of the month, eliminating 100% of late-payment
              penalties (12% interest p.a.) and damage charges.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Online Return Filing",
        content:
          "Meticulous preparation and filing of all monthly contributions and half-yearly returns (Form 6), ensuring accurate data submission.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Audit Support",
        content: (
          <>
            <p>
              We compile and maintain all audit-ready documentation and handle
              liaison with the ESIC department on your behalf.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "IP Card Generation within 15 Days",
        content: (
          <>
            <p>
              We manage the complete process of registering all eligible
              employees and initiating the Insured Person (IP) card
              generation within the legally required 15 days of joining.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Correct Dispensary Mapping",
        content: (
          <>
            <p>
              We coordinate with the employee to ensure accurate Dispensary and
              ESI Hospital mapping in the Bangalore area, guaranteeing they can
              access benefits immediately.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Claim Facilitation",
        content: (
          <>
            <p>
              Assistance with processing employee claims for sickness,
              maternity, and temporary disablement benefits, reducing the burden
              on your HR team.
            </p>
          </>
        ),
      },
    ],
  },
];

export const pastelCardsEsicComplianceBangalore = {
  subTitle: "Why Choose ESIC Compliance Specialists?",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "City Focused",
      subtitle: `We specialize in the city Shops and Establishment Act and the specific ESIC rules for the mid-size tech company in your city.`,
      number: 1,
    },
    {
      title: "System Mastery",
      subtitle: `Our expert consultants ensure compliance is seamless, fast, and accurate, providing a higher standard than a generalist accountant.`,
      number: 2,
    },
    {
      title: "Liability Protection",
      subtitle: `Our process is designed to legally shield the employer from personal liability in the event of an employee mishap, confirming coverage from day one.`,
      number: 3,
    },
    {
      title: "DIY Cost",
      subtitle: `The cumulative cost of HR time + average annual penalty of ₹40,000, PLUS the risk of ₹25 Lakh liability for a single employee accident if coverage is lapsed.`,
      number: 4,
    },
    {
      title: "Your Savings",
      subtitle: `Our strategic service converts this catastrophic liability into a predictable, managed investment, guaranteeing zero penalties and full employee coverage.`,
      number: 5,
    },
  ],
};

export const esicComplianceFaqBangalore = [
  {
    question: "Is ESIC registration mandatory for my company in Bangalore?",
    answer: `Yes, if your establishment employs 10 or more persons and the employee's gross monthly wage is up to ₹21,000 (₹25,000 for persons with disabilities). Registration must be secured quickly to avoid liability.`,
  },
  {
    question:
      "What happens if an employee has an accident but doesn't have an ESIC card?",
    answer: `This is a direct, substantial financial liability on the employer. If an eligible employee is not registered, your company is held entirely liable for all medical expenses, compensation, and legal costs associated with the employment injury.`,
  },
  {
    question:
      "How quickly do you generate the employee's ESIC IP card and link the dispensary?",
    answer: `We prioritize this critical step. We guarantee IP card generation and dispensary mapping are completed promptly to ensure compliance within the legally required 15 days of joining and immediate access to benefits.`,
  },
  {
    question: "What is the penalty for delayed ESIC contributions?",
    answer: `The penalty is severe: 12% simple annual interest is charged for every day of delay, along with potential damages up to 25% of the arrears and possible prosecution. We eliminate this risk.`,
  },
  {
    question:
      "Do you handle ESIC compliance for remote employees or staff working from home (WFH) in Bangalore?",
    answer: `Yes, our services cover ESIC compliance for remote employees based in notified areas of Bangalore or working across state lines, ensuring full adherence to current regulations.`,
  },
];

export const sectionsESICConsultantMumbai = [
  {
    title:
      "Mumbai’s Unique ESIC Challenge: Where a Higher Threshold Means Higher Risk",
    description:
      "The Mumbai-Thane-Navi Mumbai corridor is the heartbeat of India’s commercial services, finance, and manufacturing. Unlike most of India, ESIC applicability in Maharashtra (for non-factory establishments like shops, hotels, and services) traditionally begins at a higher employee threshold.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The 20-Employee Trap",
        content:
          "For many non-factory establishments (Shops, Hotels, Restaurants, etc.) in Maharashtra, the mandatory registration limit remains at 20 or more employees. However, regulatory vigilance is high, and the definition of a 'factory' (especially for units using power) often pulls the limit down to 10.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Hidden Worker Risk",
        content: (
          <>
            <p>
              In Mumbai’s massive logistics, service, and
              contracting industries, the core challenge is accounting
              for contractual, temporary, and project-based workers. The ESIC
              department (RO Mumbai) mandates that all employees, regardless of
              whether they are direct or through a contractor, must be counted
              towards the threshold.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Looming Threat of Coercive Action",
        content:
          "Recent judgments from the Bombay High Court underscore the ESIC department’s aggressive stance on recovery. Notices and coercive actions (including bank account attachments) are being initiated swiftly for perceived non-compliance, leaving companies with little time to respond or present their case.",
      },
    ],
  },
  {
    title:
      "Your Mumbai-Local ESIC Consultant: The Shield Against RO Mumbai Audits",
    description:
      "We specialize in managing the nuanced ESIC landscape of Maharashtra. Our service is not just about filing; it's about providing an iron-clad legal and technical defense tailored to the scrutiny of the Regional Office, Mumbai. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "ESIC Applicability Assessment",
        content:
          "Precise, legally-vetted assessment of your establishment type (Factory vs. Non-Factory) to determine the correct ESIC applicability threshold—10 or 20 employees. Prevents wrongful delays, incorrect exemptions, and expensive retroactive liability.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Contract Labour Compliance Management",
        content: (
          <>
            <p>
              Systematic ESIC tracking, registration, and monthly contribution
              management for all contract and temporary staff—especially common
              in IT/ITES, logistics, and manufacturing clusters in Powai, Thane,
              and Navi Mumbai. Eliminates the ‘Hidden Employee’ risk that leads
              to severe ESIC penalties
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Contribution Accuracy Management",
        content:
          "Guaranteed, error-free calculation of wages defined as ‘Payable’ under the ESI Act, including strict adherence to the ₹21,000 Gross Wage ceiling. Prevents audit discrepancies and costly recovery notices due to miscalculations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Dispensary & SST Hospital Linking",
        content: (
          <>
            <p>
              Immediate IP card generation and mapping to the latest ESIC SST
              (Super Speciality Treatment) Tie-Up Hospitals in Mumbai—covering
              regions like Bandra, Worli, and Thane. Ensures employee welfare
              and reinforces employer credibility.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Code on Social Security, 2020 Readiness",
        content: (
          <>
            <p>
              We prepare your establishment for the future, including the
              potential inclusion of Gig and Platform Workers and the transition
              to a Uniform Definition of Wages—critical for Mumbai’s rapidly
              evolving digital economy.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Representation & Liaison",
        content: (
          <>
            <p>
              We act as your authorized representative, handling all Summons,
              Inspection Reports, and Recovery Notices from the ESIC
              authorities, ensuring due process is followed and your legal
              rights are protected at the Bombay High Court level, if necessary.
            </p>
          </>
        ),
      },
    ],
  },
];

export const pastelCardsEsicMumbai = {
  subTitle: "Mumbai Industry Spotlight: Where ESIC Errors Hurt the Most",
  // subText:
  //   "We combine deep national regulatory expertise with precise local knowledge of the compliance ecosystem.",
  cards: [
    {
      title: "Textile & Manufacturing (Thane-Belapur Belt)",
      subtitle: `Frequent use of contract labour and power-driven machinery means the 10-employee factory rule is often missed, leading to sudden, crippling penalties.`,
      number: 1,
    },
    {
      title: "Hotels, Restaurants & Entertainment (South Mumbai)",
      subtitle: `These non-factory sectors are bound by the 20+ employee limit in Maharashtra, but high attrition and casual labour make accurate monthly registration a logistical nightmare.`,
      number: 2,
    },
    {
      title: "Logistics & Road Transport (Navi Mumbai/JNPT)",
      subtitle: `Highly scrutinized sector. ESIC coverage is mandatory for all road motor transport undertakings, demanding immediate and accurate coverage for drivers and helpers.`,
      number: 3,
    },
  ],
};

export const esicManagementFaqMumbai = [
  {
    question: "In Mumbai, what is the ESIC employee threshold for my business?",
    answer: `The threshold depends entirely on your industry. For factories using power for manufacturing, the limit is 10 or more employees. For most shops, hotels, restaurants, and IT/ITES services in Maharashtra, the mandatory limit is 20 or more employees earning up to ₹21,000 gross. We conduct a specific review to confirm your correct threshold.`,
  },
  {
    question:
      "I use contract workers. Does the ESIC limit apply to them in Mumbai?",
    answer: `Yes, absolutely. The ESIC Act is clear: all employees working in connection with the work of the establishment, whether directly employed or through a contractor, must be counted towards the employee threshold and covered if they meet the wage limit. This is a common failure point for Mumbai-based businesses.`,
  },
  {
    question:
      "We are a new startup in Mumbai (Bandra-Kurla Complex). When do we need to register for ESIC?",
    answer: `You must register within 15 days of the date on which your employee count first reaches the mandatory threshold (10 or 20 employees, depending on your establishment type). Delays result in penalties and severe personal liability for employment injuries.`,
  },
  {
    question:
      "We received an ESIC Recovery Notice (Section 45A/85B). Can you help?",
    answer: `Yes. We specialize in handling high-risk ESIC notices in Mumbai. This involves compiling historical records, representing you before the Regional Office/Designated Authority, and structuring a legal defense to address the demand and prevent attachment of assets.`,
  },
  {
    question:
      "How does the new policy on providing land for ESIC hospitals in Maharashtra affect my compliance?",
    answer: `The state government’s decision to provide land for new ESIC hospitals (e.g., in Pune, Nashik, Palghar) indicates a massive push to strengthen the ESIC medical network in Maharashtra. This means better access for your employees, but also signals that the government is serious about expanding and enforcing compliance to fund these facilities.`,
  },
];

export const sectionsESICConsultantDelhi = [
  {
    title: "The Delhi ESIC Difference: Scrutiny from the Central Authority",
    description:
      "In the National Capital Territory (NCT), ESIC compliance is under the direct, intense scrutiny of the ESIC Headquarters (Panchdeep Bhavan, New Delhi). The city's economy—driven by trade, services, media, and corporate offices—presents unique challenges, especially regarding the definition of 'wages' and the inclusion of casual labour.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The NCR Threshold",
        content:
          "Unlike some non-factory establishments in Maharashtra, ESIC is strictly applicable to all establishments in notified areas of Delhi with 10 or more employees (wages up to ₹21,000). The smaller threshold coupled with high labour mobility creates a constant compliance churn.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The 'Wages' Redefinition Trap",
        content: (
          <>
            <p>
              Delhi's service industry frequently uses complex payroll
              structures (allowances, incentives, variable pay). The ESIC
              department is rigorous in including almost all cash components
              into 'Gross Wages' for contribution calculation, often leading to
              unexpected arrears during audits.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Delhi-NCR ESIC Compliance Solution",
    description:
      "We provide specialized representation and flawless filing, designed to withstand the highest levels of scrutiny from the ESIC Head Office. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Head Office Liaison & ESIC Representation",
        content:
          "We directly coordinate with ESIC Headquarters and Regional Offices to handle Section 45A/85B notices, assessments, and escalated compliance matters. Our expert representation minimizes legal exposure, prevents unnecessary penalties, and ensures your case is presented accurately and professionally.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Labour Mobility Management",
        content: (
          <>
            <p>
              We manage rapid documentation and ESIC filings for the high churn
              of temporary and project-based staff common in Delhi’s corporate
              and logistics sectors. Our streamlined process ensures every
              eligible new hire receives immediate IP Card generation,
              eliminating any “no-coverage” compliance liability for your
              organisation.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "E-Challan & ESIC Return Filing",
        content:
          "We ensure accurate calculation and timely submission of monthly E-Challans and the mandatory half-yearly ESIC returns—critical for maintaining clean audit trails. Our precision-driven process eliminates the risk of 12% p.a. interest penalties and damage charges, keeping your compliance record flawless.",
      },
    ],
  },
];
export const esicManagementFaqDelhi = [
  {
    question:
      "Is the ESIC 10-employee limit final for all businesses in Delhi?",
    answer: `Yes. For all establishments in notified areas of Delhi—including shops, restaurants, educational institutions, and corporate offices—the threshold for mandatory ESIC registration is 10 or more employees earning up to ₹21,000 gross. There are very few exceptions compared to other states.`,
  },
  {
    question:
      "My company is in Delhi, but my staff works across Gurgaon and Noida. Which ESIC Office applies?",
    answer: `Applicability is based on the location of your main establishment (Delhi). However, contributions must be made centrally, and employees are entitled to medical benefits through the ESIC network across all NCR cities. We manage end-to-end multi-location compliance and dispensary mapping across the NCR grid.`,
  },
  {
    question:
      "The ESIC department has requested a physical audit of our Delhi office records. How do you manage this?",
    answer: `We provide complete Audit Management and Representation. This includes preparing all required documentation (Form 6, Wage Registers, Attendance Registers) and coordinating directly with the ESIC Inspector on-site as your authorized compliance specialist, ensuring a smooth and legally compliant audit process.`,
  },
];

export const sectionsESICConsultantChennai = [
  {
    title: "The Chennai ESIC Imperative: High-Volume Industrial Compliance",
    description:
      "Chennai and its surrounding industrial belt (including Sriperumbudur and Oragadam) is home to vast manufacturing, automotive, and textile sectors. In this environment, the core ESIC compliance challenge shifts from managing variable pay (Delhi) to accurately covering a high volume of permanent and contract blue-collar workers",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Factory Act Interplay",
        content:
          "Many establishments in Chennai fall under the Factory Act. This makes the 10-employee threshold non-negotiable, and compliance with ESIC is often scrutinized simultaneously with other labour laws.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Contract Labour Audit Risk",
        content: (
          <>
            <p>
              In the automotive and engineering sectors, the continuous hiring
              and rotation of contract labour is the norm. The Regional Office,
              Chennai, is hyper-vigilant about the failure of principal
              employers to ensure ESIC coverage for all eligible contract
              workers, leading to hefty retrospective demands.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Chennai ESIC Compliance Solution",
    description:
      "We provide a structured ESIC management system built for high-volume industrial payroll, ensuring every worker is protected and your company avoids the crushing liability of non-coverage. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Contract Worker Compliance Guarantee",
        content:
          "We run a dedicated process to audit, register, and track every contract and temporary worker across all your sites, ensuring full ESIC contribution and guaranteed IP Card issuance. This protects the Principal Employer from joint and several liability arising from contractor non-compliance, safeguarding you against penalties and legal exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sector-Specific Statutory Documentation",
        content: (
          <>
            <p>
              We prepare all statutory registers—including Wage Registers and
              Muster Rolls—in full compliance with the requirements of the ESIC
              Regional Office, Chennai, and Tamil Nadu Labour Codes. This
              ensures complete audit readiness for coordinated inspections by
              ESIC authorities and Factory Inspectorates, protecting your
              organisation from documentation-related non-compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Medical Network Assurance",
        content:
          "We ensure prompt linking of employees to ESIC hospitals and dispensaries across major industrial hubs such as Ambattur, Guindy, and Sriperumbudur. This guarantees immediate medical access for your workforce, strengthens employee welfare, and significantly reduces the risk of uninsured employment injury claims.",
      },
    ],
  },
];
export const esicManagementFaqChennai = [
  {
    question:
      "Are there any ESIC exemptions for SEZ (Special Economic Zone) units in Chennai?",
    answer: `No. While SEZ units enjoy income tax and customs duty exemptions, ESIC is a social security statute and applies universally to all eligible employees (earning up to ₹21,000) once the 10-employee threshold is met. Compliance in SEZs is monitored very closely by the authorities.`,
  },
  {
    question:
      "We have high attrition in our manufacturing unit. Is there a simpler way to manage monthly registration/de-registration?",
    answer: `Yes. Our service integrates with your HRIS to manage high-frequency employee movements (Challan 7) common in manufacturing. We ensure timely de-registration to stop contributions and swift re-registration for new hires, eliminating manual errors on the ESIC portal.`,
  },
  {
    question:
      "What is the most common reason for penalties from the Chennai Regional Office?",
    answer: `The most frequent and costly penalty arises from non-payment or delayed payment of contributions for contract labourers. The Chennai Regional Office holds the principal employer liable, often issuing demands for contributions going back several years. Our system prevents this retrospective risk entirely.`,
  },
];

export const sectionsESICConsultantHyderabad = [
  {
    title: "The Hyderabad ESIC Dynamic: High-Value, High-Growth Risk",
    description:
      "Hyderabad, the hub for major IT/ITES companies (Cyberabad area) and the pharmaceutical industry (Genome Valley), faces a unique ESIC challenge: ensuring that highly-compensated, white-collar employees are correctly assessed under the ₹21,000 wage ceiling, especially when variable pay is high.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Variable Pay Misclassification",
        content:
          "In IT and Pharma, performance bonuses, joining bonuses, and shift allowances are common. The ESIC Regional Office, Telangana, is strict: if these components are paid at fixed intervals, they are considered 'Wages' for contribution purposes. Misclassification is the primary source of audit arrears.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The 10-Employee Certainty",
        content: (
          <>
            <p>
              ESIC is strictly applicable to all establishments in notified
              areas of Telangana with 10 or more employees. The compliance rate
              is rising, making proactive adherence crucial to avoid aggressive
              enforcement.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Hyderabad ESIC Compliance Solution",
    description:
      "We provide the technical expertise to interpret payroll variables against ESIC law, safeguarding your company from high-value retrospective claims common in the city's fast-paced tech environment. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Variable Pay Auditing",
        content:
          "We conduct an expert legal review of your IT/ITES/Pharma pay structures to accurately determine the ESIC-liable Gross Wage, clearly separating genuine reimbursements from taxable wage components. This prevents unnecessary over-contribution and eliminates the risk of large retrospective demands during ESIC audits.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Employee Medical Access",
        content: (
          <>
            <p>
              We ensure seamless linkage of employees to specialized ESIC and
              tie-up hospitals in key Hyderabad industrial zones such as Sanath
              Nagar and Nacharam, enabling smooth and immediate access to
              medical benefits. This significantly enhances employee security in
              high-stress tech and manufacturing environments.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Regional Office Management",
        content:
          "We maintain dedicated liaison with the ESIC Regional Office in Hyderabad to expedite the processing of Sickness, Maternity, and other employee benefits, while ensuring quick resolution of compliance-related queries. This frees your HR team from time-consuming bureaucratic follow-ups with the Telangana ESIC administration.",
      },
    ],
  },
];
export const esicManagementFaqHyderabad = [
  {
    question:
      "Are trainees or apprentices in a Pharma/IT company in Hyderabad counted for ESIC?",
    answer: `Generally, ESIC covers employees as defined under the ESI Act. Trainees who are paid 'wages' as per the statutory definition must be covered. Apprentices engaged under the Apprentices Act, 1961 may be exempt, but this requires expert verification. We assess each employee category to ensure accurate classification.`,
  },
  {
    question:
      "Our IT company has employees across multiple satellite offices in Hyderabad. Does the 10-employee count apply to each office?",
    answer: `No. The 10-employee threshold applies to the entire ‘Establishment’ registered under a single legal entity (or GST/PAN). If your main office and satellite offices in areas like Gachibowli or Kondapur share the same entity, all employees are combined for ESIC applicability.`,
  },
  {
    question:
      "The Telangana ESIC Office has been stricter about non-compliance lately. What's the biggest threat?",
    answer: `The biggest threat is a Retrospective Demand under Section 45A, often covering several years of non-contribution due to misclassified variable pay. These demands can reach lakhs of rupees plus penalties. Our service ensures forward-looking compliance to eliminate this risk immediately.`,
  },
];
export const sectionsESICConsultantPune = [
  {
    title: "Pune's Unique ESIC Ecosystem: High Volume, High Risk",
    description:
      "Pune, the economic heart of Western Maharashtra, presents an ESIC environment defined by two distinct, high-growth industrial clusters: the Automobile and Manufacturing hub of Pimpri-Chinchwad (PCMC) and the vast IT/ITES and R&D campuses of Hinjewadi.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Management (Manufacturing)",
        content:
          "The manufacturing sector relies heavily on contract labour. The ESIC Regional Office, Pune (RO Pune), rigorously enforces the Principal Employer's liability to ensure ESIC contributions are paid for every contract worker. Retrospective demands often arise from the misclassification or non-coverage of outsourced staff (e.g., security, housekeeping, or ancillary shop-floor labour).",
      },
      {
        color: "bg-white border-gray-300",
        title: "State-Wide Threshold Shift",
        content: (
          <>
            <p>
              Effective October 2020, the ESIC coverage threshold across
              Maharashtra for most establishments (Shops, Hotels, Transport,
              etc.) was reduced from 20 to 10 or more employees. This mandatory
              inclusion has brought thousands of SMEs and IT/ITES startups under
              the ESIC purview, drastically increasing the need for expert
              guidance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Local News Insight",
        content:
          "The Maharashtra government's commitment to providing land at zero cost for ESIC hospitals and the extension of ESIC benefits to casual/contractual workers in municipal bodiesunderscores a state-level push to strengthen social security infrastructure. This signals intensified compliance monitoring by ESIC officials across Pune and the wider region.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready ESIC Partner in Pune",
    description:
      "EPFDesk is New Wage Code Ready and provides forward-thinking ESIC management, ensuring your Pune operations—from the factory floor to the software park—are insulated from retrospective demands and litigation.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Alignment",
        content:
          "We conduct a pre-emptive Payroll Audit to restructure “Wages” as defined under the Code on Social Security, 2020. Our review ensures that non-statutory components—such as allowances—do not push the excluded portion above 50% of total remuneration. This proactive alignment mitigates future ESIC penalty exposure by correctly balancing Basic Pay and allowances in line with the new statutory wage floor.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Worker Liability Management",
        content: (
          <>
            <p>
              We ensure flawless registration and timely E-Challan filing for
              all contract employees, fully discharging the Principal Employer’s
              liability in line with the stringent compliance standards of the
              Pune Regional Office. Our process aligns with the Code on Social
              Security’s expanded definition of ‘Employee,’ covering all workers
              engaged through contractors and preventing any back-dated ESIC
              liability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Compliance for the 10-Employee Rule",
        content:
          "We provide specialized support for newly covered SMEs in Pune by managing immediate ESIC registration and setting up systems for continuous compliance under Maharashtra’s 10-employee applicability rule. This simplifies statutory onboarding for small establishments that previously believed they were exempt, ensuring a clean, risk-free start to ESIC compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Audit Defense & Adjudication",
        content: (
          <>
            <p>
              We provide expert representation and meticulous document
              preparation for ESIC inspections, show-cause notices under Section
              45A, and proceedings before the ESIC Court or Appellate Authority
              in Pune and Mumbai. Our approach protects your business from
              severe penalties and offence compounding under the New Labour
              Codes, ensuring compliance within the modern
              ‘Inspector-cum-Facilitator’ advisory framework.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqPune = [
  {
    question:
      "We are a new software startup in Hinjewadi with 12 employees. Is ESIC mandatory?",
    answer: `Yes, absolutely. Since the Maharashtra government reduced the threshold to 10 or more employees for most establishments in notified areas (including ITES), your company must register with ESIC immediately. Failure to register within the stipulated time can attract substantial retrospective penalties and interest.`,
  },
  {
    question:
      "How does the New Wage Code impact our ESIC contribution calculation in Pune?",
    answer: `The New Wage Code defines 'Wages' broadly and restricts non-statutory allowances (such as HRA, conveyance, and performance incentives) to a maximum of 50% of total remuneration. If the excluded portion exceeds this limit, the excess must be added back to 'Wages' for ESIC calculation. We ensure your payroll structure remains fully aligned with this safe-harbour limit.`,
  },
  {
    question:
      "Our manufacturing unit in Chakan/Talegaon uses many outsourced contract workers. Who is liable for their ESIC?",
    answer: `The Principal Employer (your company) is ultimately responsible for ensuring ESIC compliance for every contract worker earning below ₹21,000. Although contractors must deduct and remit contributions, the Pune ESIC authorities will hold your establishment liable for any default, including penalties and damages. We manage contractor compliance end-to-end to protect you from this exposure.`,
  },
  {
    question:
      "If an employee leaves our company, how do we handle their ESIC exit formalities?",
    answer: `Unlike PF, an employee retains their ESIC Insured Person (IP) status. Your responsibility is to ensure the final ESIC contribution is made and the date of exit is accurately updated on the ESIC portal within 15 days. This keeps your compliance record clean with the Regional Office, Pune.`,
  },
];
export const sectionsESICConsultantKolkata = [
  {
    title: "The Kolkata ESIC Landscape: High Enforcement on Legacy Industries",
    description:
      "Kolkata and the extended industrial belts along the Hooghly River (like Howrah, Hooghly, and Barrackpore) represent a compliance challenge distinct from other metros. Here, ESIC scrutiny is intensely focused on traditional, labor-intensive industries—Jute, Engineering, Textiles, and Chemicals—where employee injury and sickness claims are historically high.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Jute Mill and Factory Claim History",
        content:
          "News reports highlight that the incidence of sickness and temporary disablement claims in West Bengal, especially in Jute and older manufacturing units, has historically been much higher than the national average. This high-claim environment leads to intensified ESIC vigilance and a willingness by the Corporation to utilize Section 69 of the ESI Act to ask high-claiming companies to share the expenditure burden.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The 'Badli' Worker (Temporary Labour) Risk",
        content: (
          <>
            <p>
              The prevalent use of casual/temporary or 'badli' workers,
              particularly in traditional manufacturing and loading/unloading
              activities, creates a major ESIC risk. These workers are often
              prone to exploiting the cash benefit system or may be overlooked
              for contributions, resulting in retrospective financial demands on
              the Principal Employer when an accident occurs.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Wider Territorial Coverage",
        content:
          "The provisions of the ESI Act have been progressively extended to new districts across West Bengal (e.g., Alipurduar, Purulia, Cooch Behar), making ESIC coverage a state-wide mandate, not just a Kolkata metro issue. Businesses with operations beyond the core city must ensure uniform compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Policy Insight",
        content: (
          <>
            <p>
              The existence of a dedicated Directorate of ESI (Medical Benefit)
              Scheme under the West Bengal Labour Department, administering
              medical services in conjunction with ESIC, signifies a
              decentralized and complex administrative structure. Compliance
              requires navigating both Central ESIC regulations and the State's
              specific medical benefit rules.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready ESIC Partner in West Bengal",
    description:
      "EPFDesk offers deep local expertise combined with preparation for national labour reforms. We are New Wage Code Ready, ensuring your Kolkatan enterprise transitions smoothly and compliantly into the new social security framework, managing risk where it's highest.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "High-Risk Liability Mitigation",
        content:
          "We conduct specialized audits for high-risk units in Howrah and Hooghly—particularly in Jute, Engineering, and heavy manufacturing—to review accident and sickness claim histories and proactively correct compliance gaps that could trigger Section 69 cost-sharing notices. Our audit ensures contribution calculations are accurate under the new ‘Wages’ definition, significantly reducing the scope for penalty-driven Section 45A assessments.",
      },
      {
        color: "bg-white border-gray-300",
        title: "‘Badli’ & Contract Labour Management",
        content: (
          <>
            <p>
              We ensure flawless registration and continuous E-Challan tracking
              for all temporary (‘Badli’) and contract workers, establishing a
              clear and defensible contribution trail that protects the
              Principal Employer from liability arising from contractor default.
              Our process aligns fully with the Code on Social Security’s
              emphasis on the Principal Employer’s responsibility for all
              workers, including those engaged through contractors or
              aggregators.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Alignment",
        content:
          "We carry out mandatory payroll restructuring to ensure that non-statutory allowances—such as HRA, Conveyance, and other flexible components—do not exceed the 50% limit of total remuneration, preventing future artificial inflation of the ESIC contribution base. This proactive alignment future-proofs your payroll against strict enforcement of the new statutory ‘Wages’ floor, ensuring uniform compliance across PF, ESIC, Gratuity, and all Social Security obligations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "RO Kolkata & State Liaison",
        content: (
          <>
            <p>
              We directly manage all ESIC disputes, inspection notices, and
              adjudication proceedings with the Regional Office, Kolkata, and
              the State Directorate of the ESI (MB) Scheme to ensure faster,
              smoother resolution. Our approach leverages the New Labour Code’s
              ‘Inspector-cum-Facilitator’ advisory framework, prioritizing
              guidance-based compliance outcomes over immediate prosecution.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqKolkata = [
  {
    question:
      "We have an IT firm in Salt Lake Sector V with fewer than 20 employees. Is ESIC mandatory for us?",
    answer: `Yes, for most establishments. The Central Government’s notification extends the ESIC Act to Shops, Hotels, Cinemas, and similar establishments employing 10 or more persons. With ESIC fully implemented in Kolkata and nearby industrial zones, any establishment with 10+ employees generally falls under mandatory coverage.`,
  },
  {
    question:
      "How does the high sickness rate in Bengal's industries affect my ESIC liability?",
    answer: `High sickness and accident rates in sectors like Jute are key enforcement triggers. If your establishment’s claim incidence is significantly higher than the state average, the ESIC Regional Director, Kolkata, may invoke Section 69 to recover a portion of the expenditure from your company. Maintaining accurate contribution and wage records is the strongest defence.`,
  },
  {
    question:
      "Our company provides benefits superior to ESIC. Can we get an exemption from the West Bengal government?",
    answer: `Yes, exemptions under Sections 87/88 of the ESI Act are possible if your benefits are demonstrably superior. However, under the Code on Social Security, 2020, exemptions are no longer indefinite and require periodic review and renewal. The process involves coordinated submissions to both the ESIC Corporation and the West Bengal State Government.`,
  },
  {
    question:
      "What is the most common reason for retrospective ESIC demands in the Kolkata region?",
    answer: `The most frequent cause is under-reporting of contract/temporary workers or misclassification of wages by excluding components that are regular or mandatory—such as attendance bonuses or fixed overtime. The Regional Office, Kolkata, maintains strict vigilance over the total number of individuals engaged at the premises.`,
  },
  {
    question:
      "Does the New Wage Code require us to change our employee contracts now?",
    answer: `Yes. Even though the Codes are awaiting final implementation, it is advisable to update employment contracts to clearly define all wage components and explicitly reference your organisation's obligations under the Code on Social Security, 2020. This prevents future disputes over what constitutes ‘Wages’ for statutory contributions.`,
  },
];
export const sectionsESICConsultantAhmedabad = [
  {
    title: "Gujarat's Distinct ESIC Compliance Environment",
    description:
      "Ahmedabad, historically the 'Manchester of India,' anchors a major manufacturing ecosystem that extends to Gandhinagar, Vadodara, and the vast industrial estates (GIDC) like Naroda, Vatva, and Sanand. The ESIC compliance landscape here is uniquely shaped by its dominant industries:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "High-Risk Industrial Areas",
        content:
          "The Textile and Chemical/Pharmaceutical sectors face stringent ESIC inspection due to inherent occupational hazards (e.g., Silicosis risk in ceramics/refractories in nearby Morbi, and chemical exposure). Retrospective ESIC demands are often triggered by injuries or occupational disease claims from workers who were either un-enrolled or whose wages were misclassified.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract and Migrant Labour",
        content: (
          <>
            <p>
              Gujarat's industrial growth relies heavily on both internal and
              external migrant workers, often employed through contractors. ESIC
              authorities in Ahmedabad are extremely strict in enforcing
              the Principal Employer's ultimate liability for the social
              security of these outsourced personnel, especially in large-scale
              manufacturing and construction projects.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Legal Precedents (Non-Commencement of Production): ",
        content:
          "The Gujarat High Court has established precedents clarifying that ESIC liability on a factory arises only upon the commencement of manufacturing activity, not during the preliminary construction phase (e.g., Minaxi Textiles Limited case). This distinction is crucial for new units being set up in the GIDC areas and requires expert documentation.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Policy Insight",
        content: (
          <>
            <p>
              The Gujarat government is aggressively promoting industrial growth
              through policies like the Gujarat Textile Policy 2024 (offering
              high subsidies and skill grants). While this boosts employment, it
              simultaneously expands the ESIC coverage base, demanding that new
              and subsidized units establish immediate, flawless statutory
              compliance.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready ESIC Partner in Ahmedabad",
    description:
      "EPFDesk provides specialized ESIC management for the high-volume, high-risk industrial units of Gujarat. We are New Wage Code Ready, ensuring your transition to the unified labour framework is smooth and protects your company from future financial shock ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Compliance",
        content:
          "We conduct proactive payroll restructuring to ensure that the statutory ‘Wages’ components—Basic Pay, DA, and Retaining Allowance—constitute at least 50% of an employee’s total remuneration, preventing any compulsory increase of the ESIC contribution base. This alignment mitigates future ESIC cost escalation by ensuring compliance with the new statutory wage floor mandated under the Code on Social Security, 2020.",
      },
      {
        color: "bg-white border-gray-300",
        title: "GIDC Unit Liability Management",
        content: (
          <>
            <p>
              We conduct specialized compliance reviews for GIDC manufacturing
              units, with a focus on mandatory ESIC coverage for
              hazardous-process workers—even where only a single employee is
              engaged. Our process includes precise documentation of the actual
              production-commencement date to prevent wrongful retrospective
              ESIC demands. This ensures full alignment with the Code on Social
              Security’s mandate for universal ESIC coverage across India and
              heightened protection for workers in hazardous industries.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Worker Compliance Audit",
        content:
          "We implement a stringent Triple-Check mechanism to verify contractor compliance, ensuring timely E-Challan payments and accurate wage reporting for all outsourced staff—especially security, housekeeping, and ancillary manufacturing labour. This process protects the Principal Employer from penalties under the new Labour Codes by enforcing the strict definition of ‘Employee’ and the universal responsibility for ensuring social security contributions.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Inspection & ESI Court Defense",
        content: (
          <>
            <p>
              We provide expert representation and appeal handling before the
              Regional Office, Ahmedabad, the ESI Court, and the Gujarat High
              Court, using strong local precedents to defend against liability
              disputes. Our approach leverages the ‘Inspector-cum-Facilitator’
              advisory framework to seek compounding of minor offences and
              resolution through guidance rather than immediate prosecution or
              heavy penalties.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqAhmedabad = [
  {
    question:
      "We are a new pharma unit in Sanand GIDC. When does our ESIC liability actually begin?",
    answer: `Your ESIC liability begins from the date you commence your manufacturing process. As clarified in Gujarat High Court rulings, expenses incurred during factory construction do not attract ESIC contribution. We help you formally document the exact date of production commencement to establish a clear audit trail for future inspections.`,
  },
  {
    question:
      "Our company outsources logistics and transport. Are these contract workers covered by our ESIC registration?",
    answer: `Yes. ESIC applies to employees of road motor transport establishments, and the Principal Employer (your company) remains ultimately responsible for ensuring compliance for outsourced workers whose activities are incidental or preliminary to your core operations. Ahmedabad’s Regional Office closely scrutinizes logistics and transport contractors, making accurate compliance essential.`,
  },
  {
    question:
      "The salary of our skilled textile workers fluctuates due to overtime. Is ESIC calculated on the gross pay every month?",
    answer: `No. ESIC is calculated on 'Wages,' which typically excludes overtime pay. However, the New Wage Code’s unified definition of ‘Wages’ must be applied carefully. We structure your payroll to ensure fixed, regular components are included in the statutory 'Wages' base, while permissible exclusions like genuine overtime are kept separate.`,
  },
  {
    question:
      "We have 8 full-time employees and 3 contractual housekeeping staff in our Ahmedabad office. Are we covered?",
    answer: `Yes, likely. The ESIC Act covers establishments—including shops, offices, and commercial entities—employing 10 or more persons. Since your combined headcount is 11, ESIC becomes mandatory, and you are responsible for compliance for all employees, including contract staff engaged through agencies.`,
  },
  {
    question:
      "Our industry (e.g., Chemicals/Dyes) is deemed 'hazardous.' Is there a special ESIC rule?",
    answer: `Yes. Under the upcoming Code on Social Security, ESIC coverage is mandatory for any establishment engaged in hazardous work processes, regardless of employee count. This waives the usual 10-employee threshold and ensures universal coverage for workers in high-risk Gujarat GIDC zones.`,
  },
];
export const sectionsESICConsultantSurat = [
  {
    title: "The Unique ESIC Challenges in Surat: The Dual Economy Hub",
    description:
      "Surat, known as the 'Diamond City of India' and a major hub for synthetic textiles, presents a unique ESIC compliance picture driven by its highly informal, piece-rate, and migrant labor-intensive economy. The Sub-Regional Office, Surat (SRO Surat), focuses heavily on ensuring social security coverage for the vast workforce in the clusters of Varachha, Katargam, and Udhana.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Piece-Rate Workers and Variable Wages (The Diamond Factor): ",
        content:
          "The majority of the Diamond Polishing and Cutting workforce is paid on a piece-rate basis. ESIC authorities frequently scrutinize these payrolls, demanding contributions on all payments made to these workers, regardless of the fluctuating nature of the income. The critical compliance challenge is accurately capturing and reporting all wage components—including allowances that are not strictly linked to production—to avoid penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Migrant Labor & Informal Employment",
        content: (
          <>
            <p>
              Surat's economy relies on millions of migrant workers (over 58% of
              the total population, mainly in textiles and diamond processing).
              These workers are often employed via contractors or masterji (job
              workers). Failure to register or accurately report these workers,
              especially due to high attrition or economic downturns, results in
              massive retrospective demands and penalties on the Principal
              Employer.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "High-Risk Industrial Classification",
        content:
          "The Textile and Powerloom sectors (weaving, dyeing, and printing) have inherent risks due to machinery and chemical exposure. This leads to higher injury/sickness claims, prompting the SRO Surat to maintain intense vigilance on ESIC coverage for these units, particularly concerning occupational safety compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Legal Insight (Gujarat Precedent): ",
        content: (
          <>
            <p>
              The Gujarat High Court has established that ESIC liability on a
              new factory arises only after the commencement of manufacturing
              operations, not during the preliminary construction or setup
              phase. This distinction is vital for the numerous new units
              establishing themselves in the Surat-Navsari industrial corridor
              and requires expert documentation.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready Partner in Surat",
    description:
      "EPFDesk combines deep knowledge of Gujarat's statutory compliance environment with practical experience in the piece-rate and contract-heavy Surat economy. We are New Wage Code Ready, prepared to handle the payroll overhaul mandated by the new laws.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Piece-Rate Wage Structuring",
        content:
          "We conduct a detailed ESIC Contribution Base Audit for diamond, textile, and powerloom units to ensure all fixed components of piece-rate wages are correctly included in the statutory ‘Wages’ base, while all permissible exclusions are properly documented. This alignment with the Code on Wages’ unified ‘Wages’ definition ensures that your ESIC base—along with future PF and Gratuity bases—is fully compliant and legally defensible.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Liability Management",
        content: (
          <>
            <p>
              We conduct a comprehensive Migrant Worker Verification and
              Registration Drive—using Aadhaar and other identity proofs—to
              ensure every temporary, casual, or contractor-supplied worker is
              assigned an ESIC IP Number and fully tracked through E-Challans.
              This directly addresses the Code on Social Security’s heightened
              emphasis on Principal Employer liability, which is especially
              critical in Surat’s high-turnover textile and diamond sectors.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Retrospective Demand Defense",
        content:
          "We provide direct representation before the SRO Surat and the ESI Court, using Gujarat-specific legal precedents to challenge arbitrary retrospective ESIC demands—especially those related to the Date of Commencement of Production or alleged non-coverage. Our approach leverages the Labour Codes’ ‘Inspector-cum-Facilitator’ advisory model to pursue amicable resolution or compounding of minor offences, avoiding unnecessary litigation.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Payroll Transition",
        content: (
          <>
            <p>
              We execute a mandatory Payroll Component Split to ensure that
              non-statutory allowances—such as HRA, conveyance, and other
              flexible components—do not exceed the statutory 50% limit of total
              remuneration, thereby preventing any retrospective escalation of
              ESIC and other social security costs. This transition
              future-proofs your payroll structure ahead of the New Wage Code’s
              implementation, safeguarding your organisation from sudden, large
              increases in the ESIC contribution base.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqSurat = [
  {
    question:
      "Our textile unit uses a third-party labour contractor for weaving. Who is responsible for ESIC?",
    answer: `The Principal Employer (your unit) is ultimately responsible. While the contractor is required to deduct and remit ESIC contributions, your organisation must ensure the payment is actually made. If the contractor defaults, ESIC can recover all dues—along with interest and penalties—directly from the Principal Employer. We implement systems to track contractor E-Challan compliance monthly and protect you from this liability.`,
  },
  {
    question:
      "We are starting a new chemical unit in the Hazira industrial area. When should we start ESIC contributions?",
    answer: `ESIC liability generally begins once you cross the applicable employee threshold (typically 10 or 20 employees based on establishment type). Importantly, Gujarat rulings clarify that liability starts only when actual manufacturing or commercial operations begin—not during construction. Documenting your official ‘Date of Commencement of Production’ is essential to avoid wrongful retrospective demands.`,
  },
  {
    question:
      "The New Wage Code states that the allowance component cannot exceed 50% of the salary. How does this affect our ESIC?",
    answer: `Many Surat firms currently structure salaries with a low Basic Pay and high allowances. Under the New Wage Code, if allowances exceed 50% of total remuneration, the excess must be added back to the statutory ‘Wages’ for calculating PF, Gratuity, and ESIC. This will significantly increase the ESIC contribution base, making advance payroll restructuring essential.`,
  },
  {
    question:
      "Does ESIC cover the temporary workers brought in during the heavy seasonal demand for Diwali and other festivals?",
    answer: `Yes, absolutely. Any person employed for wages—directly by the Principal Employer or through a contractor—is covered under ESIC, even if employed for a single day, provided their wages fall within the threshold. Seasonal workers are a major ESIC audit risk if not registered and reported immediately.`,
  },
];
export const sectionsESICConsultantGurgaon = [
  {
    title:
      "The Unique ESIC Landscape of Corporate Gurgaon (The Millennium City)",
    description:
      "Gurgaon (Gurugram) is defined by its massive concentration of Corporate Headquarters, Global Capability Centers (GCCs), IT/ITES companies, and the critical Automobile/Auto Ancillary manufacturing belt (Manesar, IMT Manesar). The ESIC compliance environment here is shaped by two distinct pressure points:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "High-Salary Allowance Structures (The Corporate Challenge): ",
        content:
          "Companies in Cyber City and Golf Course Road often structure salaries with a low Basic Pay and high allowances to reduce statutory liabilities (PF, Gratuity, ESIC). This is the primary audit target for the ESIC Sub-Regional Office (SRO) in Gurgaon, as the New Wage Code will make this practice non-compliant, leading to huge retrospective demands if not corrected.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Contractual Labor in Hazardous Sectors (The Auto Hub Challenge)",
        content: (
          <>
            <p>
              The massive auto supply chain in Manesar and the broader Haryana
              belt relies heavily on temporary/contractual workers. Reports
              highlight significant under-reporting of factory accidents and
              delayed issuance of ESIC identity cards, making the Principal
              Employer liable for un-insured workers' benefits and heavy
              penalties.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title:
          "The 'Dormant Registration' Trap (The Startup/New Business Challenge)",
        content:
          "The Haryana ESIC office has specific instructions regarding companies registered via the MCA portal. If a company does not reach the employee threshold, it must proactively extend its 'dormant' status. Failure to do so leads to automatic activation and the risk of unexpected retrospective ESIC liability.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Haryana ESIC Initiative",
        content: (
          <>
            <p>
              The SRO Gurgaon is actively running schemes like SPREE (Scheme for
              Promotion of Registration of Employers and Employees) and
              an AMNESTY Scheme-2025 to resolve long-standing disputes and
              encourage voluntary registration without demanding backdated dues.
              Our consultancy helps new firms leverage these temporary benefits
              while establishing future-proof compliance.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "EPFDesk: New Wage Code Ready ESIC Solutions for Gurgaon's Core Industries",
    description:
      "EPFDesk provides specialized ESIC risk mitigation for the high-stakes corporate and industrial environments of Gurgaon, ensuring your business is ready for the structural shift mandated by the new unified Labour Codes.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "High-Allowance Salary Structure Compliance",
        content:
          "We perform proactive payroll restructuring for all employees below the ESIC wage ceiling to ensure that statutory ‘Wages’—Basic Pay, DA, and Retaining Allowance—constitute at least 50% of CTC, as required under the new Wage Code framework. This prevents the ESIC Department from imposing a compulsory higher contribution base for past periods, effectively mitigating massive retrospective liability and backdated dues.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Compliance for Auto Ancillaries",
        content: (
          <>
            <p>
              We conduct a comprehensive Supply Chain ESIC Audit and contractor
              oversight program for auto ancillary units, ensuring immediate IP
              (Insured Person) registration for all workers engaged through
              manufacturing and facility management contractors in the
              Manesar/IMT industrial belt. This aligns with the Code on Social
              Security’s strengthened emphasis on Principal Employer liability
              for all third-party labour, protecting your organisation from
              major accident-related claims and compliance breaches.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "‘Dormant Status’ Compliance Managemen",
        content:
          "We provide dedicated monitoring and timely filing for the extension of Dormant ESIC Status for newly incorporated Corporate IT/ITES units in Haryana that have not yet crossed the 10-employee threshold. This prevents inadvertent activation of the ESIC registration and protects your business from premature contribution demands during non-operational or pre-eligibility stages.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Dispute Resolution & Litigation",
        content: (
          <>
            <p>
              We provide expert representation and appeal management before the
              ESIC Court in Gurgaon, leveraging the New Labour Code provisions
              for compounding minor offences and strategically utilising
              available Amnesty Schemes for past coverage disputes. Our approach
              aligns with the ‘Inspector-cum-Facilitator’ framework,
              prioritising advisory-led compliance over punitive action and
              enabling faster resolution of long-pending ESIC demands.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Audit-Ready Records",
        content: (
          <>
            <p>
              We manage and maintain mandatory records, including the Accident
              Register (Form 11) and other documentation necessary for audit and
              immediate accident reporting.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Post-Registration Filings",
        content: (
          <>
            <p>
              We handle the meticulous preparation and submission of half-yearly
              returns (Form 6/C-11), maintaining perfect record continuity for
              the ESIC Corporation.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Claim Facilitation",
        content: (
          <>
            <p>
              Assistance with processing employee claims for sickness,
              maternity, and temporary disablement benefits, reducing the burden
              on your HR team.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqGurgaon = [
  {
    question:
      "We are a new IT office in Cyber City with 15 employees. Are we covered under ESIC?",
    answer: `Yes. ESIC is mandatory for shops, offices, and commercial establishments in the notified areas of Haryana/Gurgaon that employ 10 or more persons. Your IT office qualifies as a commercial establishment, making ESIC compliance mandatory for all employees earning up to the statutory wage threshold.`,
  },
  {
    question:
      "Our company uses high allowances (e.g., fuel, telephone) to keep Basic Pay low. How will the New Wage Code affect our ESIC?",
    answer: `This traditional practice is directly impacted by the New Wage Code. If allowances exceed 50% of total remuneration, the excess must be added back into 'Wages' for ESIC calculation. This will significantly increase your ESIC liability. We proactively restructure salary components to comply with the 50% rule and prevent future penalties or retrospective contribution demands.`,
  },
  {
    question:
      "We use a third-party vendor for facility management (security, housekeeping). Who is responsible for their ESIC?",
    answer: `The Principal Employer (your company) is ultimately responsible. While the vendor must deduct and remit contributions, you have a statutory obligation to ensure every contract worker is registered and contributions are paid on time. SRO Gurgaon inspections rigorously scrutinize this, especially in large corporate campuses.`,
  },
  {
    question:
      "What is the 'Dormant Status' that the Haryana ESIC office mentioned?",
    answer: `Dormant Status applies to newly registered companies that have not yet crossed the 10-employee threshold. The Haryana ESIC Regional Office requires companies to renew this status every six months. Failure to renew results in automatic activation of your ESIC registration, triggering contribution demands even if you were not eligible.`,
  },
  {
    question:
      "We heard ESIC is running an Amnesty Scheme. Can we use it to cover our past non-compliance?",
    answer: `Yes. Haryana ESIC has introduced one-time schemes such as AMNESTY and SPREE, allowing unregistered companies to enrol without penalties, interest, or backdated dues for the pre-registration period. This is a valuable, time-bound opportunity to regularize your workforce, and we guide you through the digital enrolment process end-to-end.`,
  },
];
export const sectionsESICConsultantNoida = [
  {
    title:
      "The Unique ESIC Compliance Landscape of UP (Noida-Ghaziabad Industrial Corridor)",
    description:
      "The compliance challenges in Noida (and the broader Uttar Pradesh industrial belt like Greater Noida and Ghaziabad) are a direct result of its dual economy: a massive manufacturing hub (electronics, mobile, apparel) juxtaposed with a rapidly growing IT/ITES and Corporate Services sector. The Regional Office, Noida, and its sub-offices maintain high scrutiny on specific, high-risk areas in the state:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Migrant Worker Coverage and Underreporting",
        content:
          "Uttar Pradesh is a major destination for migrant labor, particularly in construction and manufacturing. Workers from Bihar, West Bengal, and Eastern UP are often employed on a temporary or contract basis in factories (like those in Sector 62, NEPZ, and Greater Noida). ESIC inspections often target factories that fail to register these workers quickly, leading to massive retrospective demands on the Principal Employer based on estimated or minimum wages.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Factory Accident Claims & Compliance (The Manufacturing Core)",
        content: (
          <>
            <p>
              The high-volume electronics, textile, and auto-ancillary
              manufacturing units in Noida/Greater Noida pose a high risk for
              accidents. The ESIC office prioritizes checks on hazardous and
              factory-based establishments to ensure immediate IP registration
              and coverage, particularly after an accident, where non-compliance
              can result in severe penalties and prosecution under the ESI Act,
              Section 85.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Data Linkage and Audit Risk (The Digital Leap)",
        content:
          "The ESIC Corporation is now actively collaborating with other departments (GST, EPFO, Income Tax) to identify establishments that are covered but not contributing. This Joint Exercise for Coverage without Inspection relies on data matching, meaning companies operating formally but neglecting ESIC are at immediate risk of receiving a notice for retrospective coverage across the entire state of UP.",
      },
      {
        color: "bg-white border-gray-300",
        title: "UP Government's Compliance Focus",
        content: (
          <>
            <p>
              The UP State government is pushing for the digitization of labor
              returns and self-certification for MSMEs to improve the ease of
              doing business. However, this relies on the employer accurately
              assessing and self-certifying their ESIC liability, making expert
              consulting vital to avoid costly self-errors.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready ESIC Partner in Noida",
    description:
      "EPFDesk specializes in localizing ESIC compliance for the specific risks faced by the Noida-based IT and manufacturing sectors. We ensure your establishment is robust against the state's stringent enforcement and ready for the impending transition to the new Labour Codes.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Migrant & Contract Labour Onboarding",
        content:
          "We implement an Instant IP Registration System that rapidly onboards temporary, migrant, and contract workers using Aadhaar and other identity proofs, ensuring every worker in factory and construction environments is ESIC-registered before they begin work. This directly mitigates penalties by addressing the Code on Social Security’s strengthened Principal Employer liability—especially critical in Uttar Pradesh’s high-turnover labour market.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Allowance Cap & Payroll Structuring",
        content: (
          <>
            <p>
              We conduct a detailed ESIC Base Audit and CTC recalculation to
              ensure non-statutory allowances—such as HRA, travel, and special
              pay—remain within the statutory 50% threshold defined under the
              New Wage Code. This prevents any automatic upward revision of the
              ESIC contribution base for past years, protecting your
              organisation from sudden retrospective cost shocks and unexpected
              liability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Demand Defense & ESI Court Representation",
        content:
          "We provide comprehensive dispute resolution and litigation support before the Regional Office and the ESI Court in Noida/Ghaziabad, with specialised expertise in contesting demands arising from alleged underreporting of contract wages or disputes over the initial date of ESIC applicability. Our strategy leverages the New Labour Codes’ provision for Compounding of Offences—where fines replace imprisonment for first-time violations—to secure quick, negotiated, and legally compliant settlements.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Unit ESIC Activation",
        content: (
          <>
            <p>
              We guide newly established IT and corporate units—including those
              operating in SEZs and tech parks—through the complete ESIC
              registration and activation process. This includes accurate
              declaration of employee strength and correct classification of the
              establishment type (Factory vs. Commercial Establishment), as
              required under Uttar Pradesh’s ESIC and labour regulations. We
              also standardize the statutory ‘Wages’ definition for all new
              hires, ensuring that ESIC, PF, and Gratuity calculations follow a
              consistent and legally compliant structure from Day 1.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqNoida = [
  {
    question:
      "Our IT/ITES office in Sector 62 has 12 employees. Are we mandatory covered by ESIC in Noida?",
    answer: `Yes. In notified areas such as Noida and Greater Noida, ESIC is mandatory for any commercial establishment—including IT/ITES units—employing 10 or more persons. You must register and contribute for all employees earning up to the statutory wage threshold per month.`,
  },
  {
    question:
      "Many of our manufacturing workers in Greater Noida are daily wagers from other states. Do we need to cover them?",
    answer: `Absolutely. ESIC coverage is mandatory for all workers—temporary, contractual, or migrant—if their wages fall within the threshold. The ESIC Regional Office in Uttar Pradesh places strong emphasis on covering this vulnerable, high-risk workforce. Failure to register migrant workers promptly is a major cause of penalties for factories in the region.`,
  },
  {
    question:
      "We structure our salaries with high HRA and conveyance to keep the Basic Pay low. How does the New Wage Code impact this in UP?",
    answer: `This structure is now high-risk. Under the Code on Wages, allowances cannot exceed 50% of total remuneration (CTC). If they do, the excess must be added back to the statutory definition of 'Wages'—which forms the base for ESIC contributions. We recommend proactively restructuring salaries to ensure Basic Pay (plus DA) is at least 50% of CTC to avoid a sudden, unavoidable rise in ESIC costs.`,
  },
  {
    question:
      "We received a notice from ESIC about a 'Joint Exercise' audit, saying we are covered but not registered. What does this mean?",
    answer: `This notice arises from the new data-matching drive across Uttar Pradesh. ESIC is cross-verifying GST, EPFO, MCA, and other government records to identify establishments that should be covered but are not registered. Being flagged means you are officially under non-compliance scrutiny and must take immediate action to manage potential retrospective liability.`,
  },
  {
    question:
      "A factory worker had an accident, but we had not registered them yet. What is our liability?",
    answer: `If an eligible worker is unregistered, the Principal Employer becomes directly liable for all medical expenses, compensation, and benefits that ESIC would have paid. Additionally, the employer faces severe punitive action—including damages, interest, and prosecution—for evasion of the Act. Immediate expert intervention is essential to manage this high-risk situation.`,
  },
];
export const sectionsESICConsultantJaipur = [
  {
    title:
      "The Unique ESIC Landscape of Rajasthan (Jaipur, Bhilwara & Udaipur)",
    description:
      "Rajasthan's industrial structure is characterized by a vast and culturally significant MSME (Micro, Small, and Medium Enterprises) sector, particularly concentrated in textiles (Bhilwara), marble/cement, and the high-value Gems and Jewellery cluster in Jaipur. This environment presents distinct ESIC challenges:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Informal Workforce and Under-reporting (Gems, Textiles & Handicrafts): ",
        content:
          "A significant portion of the workforce in the traditional crafts and cottage industries is informal, often working from dispersed or unregistered small units. Recent ESIC drives in Jaipur (Malviya Nagar, Sanganer) focus on linking these smaller units to the formal economy. The ESIC Regional Office is aggressively auditing the number of workers to counter the tendency to keep employee counts just below the 10-person threshold for mandatory registration.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Remote Location Challenges (Cement & Mining)",
        content: (
          <>
            <p>
              Large-scale industries like Cement (Chittorgarh, Nimbahera) and
              Mining (Udaipur) operate in remote districts where providing ESIC
              medical infrastructure is difficult. ESIC often mandates coverage
              even when medical facilities are geographically distant, placing
              the onus on the employer to ensure initial registration and proper
              documentation for referral to the nearest available ESIC
              Dispensary/Hospital.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Apprenticeship and Child/Adolescent Labor Laws",
        content:
          "The Rajasthan Government recently approved amendments to the Shops and Commercial Establishments Act, raising the minimum age for employment in commercial institutions and revising rules for adolescent workers (14 to 18 years). ESIC compliance must align with these new state-level employment age mandates, especially in the craft and textile units that traditionally employ younger workers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Rajasthan Government Mandates",
        content: (
          <>
            <p>
              The state has simplified compliance for establishments with up to
              10 workers by exempting them from registration under the Shops and
              Commercial Establishments Act, but ESIC remains a separate central
              obligation if the worker count threshold is met. Simultaneously,
              there's a strong push for formalization, supported by the
              integration of Building and Construction Worker (BoCW) data with
              the e-Shram portal, which the ESIC department uses for coverage
              expansion.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "EPFDesk: New Wage Code Ready ESIC Solutions for Rajasthan's Industries",
    description:
      "EPFDesk provides localized ESIC management, mitigating the risk of retrospective demands and ensuring the seamless integration of your payroll with the upcoming New Wage Code, which will be critical for Rajasthan's wage-sensitive sectors.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "MSME Worker Threshold Management",
        content:
          "We conduct a specialised audit and rationalisation exercise for MSME units—such as gems, handicrafts, and handloom enterprises—to ensure accurate ESIC coverage as they approach the 10-employee threshold. We advise on voluntary registration or strategic workforce structuring to prevent sudden, high-penalty retrospective demands. By applying the unified ‘Wages’ definition from a pre-determined, compliant date, we ensure your transition into mandatory ESIC coverage is planned, seamless, and legally secure rather than punitive.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Artisan & Piece-Rate Worker ESIC Compliance",
        content: (
          <>
            <p>
              We provide structured compliance support for artisan, piece-rate,
              and commission-based workers—common in the Gems, Textiles, and
              Handicrafts sectors—by accurately mapping and annualising variable
              earnings and ensuring their correct inclusion in the ESIC ‘Wages’
              base. This aligns with the Code on Wages, which broadens the scope
              of ‘Wages’ to include all remuneration not expressly excluded,
              effectively preventing the underreporting or exclusion of
              piece-rate income from statutory ESIC calculations.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Factory & Establishment Registration",
        content:
          "We guide new IT, automobile, and large-scale manufacturing units entering RIICO industrial zones—such as Mansarovar and Sitapura—through mandatory ESIC registration and initial contribution filing with the Jaipur Regional Office. Our process ensures that the ESIC contribution base is set correctly from Day 1 using the New Wage Code’s 50% of CTC rule, creating immediate statutory compliance and preventing future audit objections related to allowance-heavy salary structures.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Accident & Medical Claim Management",
        content: (
          <>
            <p>
              We provide dedicated support for managing injury and medical
              claims for workers in high-risk sectors such as mining and
              construction. Our team fast-tracks IP registration and ensures
              complete documentation so that workers can immediately access ESIC
              Medical College & Hospital, Alwar (or the nearest authorised
              facility), significantly reducing the employer’s immediate
              liability. This service aligns with the Code on Social Security’s
              mandate for universal social security and rapid, assured coverage
              for all workers in hazardous environments.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqJaipur = [
  {
    question:
      "We are a Gems and Jewellery manufacturer in Jaipur with 15 artisans. Are we required to register for ESIC?",
    answer: `Yes. ESIC is mandatory for any factory, shop, or commercial establishment in the notified areas of Rajasthan (including most of Jaipur) employing 10 or more persons. ‘Employee’ includes artisans and piece-rate workers if they work under your supervision or control. Non-registration often results in large retrospective demands based on estimated wages.`,
  },
  {
    question:
      "If we pay our employees a high allowance and low Basic Pay, how will the New Wage Code affect our ESIC?",
    answer: `The New Wage Code restricts allowances to a maximum of 50% of an employee’s Total Remuneration (CTC). If allowances exceed this limit, the excess must be added back to the statutory 'Wages' definition, which forms the base for ESIC contributions. This can substantially increase your ESIC cost. We redesign payroll structures to ensure full compliance and prevent an expensive structural shift.`,
  },
  {
    question:
      "We run a seasonal textile printing unit in Sanganer. Do we have to maintain ESIC for temporary/seasonal workers?",
    answer: `Yes. ESIC coverage is mandatory for all eligible workers—temporary, seasonal, or casual—once the establishment is covered. Seasonal workers are a major focus area in ESIC audits in textile hubs such as Sanganer. We help you manage seasonal onboarding and de-registration smoothly and in compliance with law.`,
  },
  {
    question:
      "The Rajasthan government has been easing compliance for small businesses. Does this affect my ESIC obligation?",
    answer: `No. ESIC is a Central Act, and its applicability is not affected by state-level relaxations. Even if the Rajasthan government exempts small units from certain local labour laws, ESIC remains mandatory if your establishment has 10 or more employees in a notified area. Central compliance thresholds must still be met.`,
  },
  {
    question:
      "Can we enroll workers voluntarily if we have fewer than 10 employees, especially for the medical benefits?",
    answer: `Yes. Voluntary ESIC registration is allowed and encouraged. Establishments with fewer than 10 employees may opt in to secure comprehensive medical and social security benefits for their workforce. This is particularly valuable in Rajasthan, where medical infrastructure challenges make ESIC benefits a strong tool for retaining skilled labour.`,
  },
];
export const sectionsESICConsultantLucknow = [
  {
    title: "The Strategic ESIC Environment of Lucknow and Uttar Pradesh",
    description:
      "Uttar Pradesh (UP) is undergoing a major industrial and compliance transformation. The state government’s focus on 'Ease of Doing Business' and initiatives like One District, One Product (ODOP) has formalized thousands of MSMEs. Simultaneously, the ESIC has dramatically expanded its coverage, notifying 74 out of 75 districts for ESI Scheme implementation. This dual focus on formalization and universal coverage means enforcement risk is now significantly higher, even for small establishments outside the main industrial corridors.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Massive ESIC Geographic Expansion",
        content:
          "With 74 districts now covered, the ESIC Sub-Regional Offices in Lucknow, Agra, and Kanpur are actively issuing notices to newly covered establishments like shops, private educational institutions, and healthcare facilities that were previously exempt. The primary risk is a retrospective demand for contributions dating back to the date of the district's notification.",
      },
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES and Healthcare Sector Scrutiny (Lucknow)",
        content: (
          <>
            <p>
              Lucknow's growing IT hubs and numerous private hospitals/labs are
              under scrutiny for potential under-reporting of wages. The common
              practice of inflating allowances to keep the ESIC contribution
              base below the  threshold is a major audit risk, especially with
              the imminent implementation of the New Wage Code's definition of
              'Wages'.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title:
          "MSME/ODOP Formalization Challenge (Kanpur-Varanasi-Agra Corridors)",
        content:
          "The vast network of small-scale enterprises dealing with traditional crafts (like Chikankari in Lucknow, leather in Kanpur, carpets in Varanasi) often relies on piece-rate, home-based, or contractual workers. ESIC auditors are increasingly focusing on the Principal Employer's Liability for these workers, regardless of whether they work inside a conventional 'factory' premises.",
      },
      {
        color: "bg-white border-gray-300",
        title: "UP's Regulatory Direction",
        content: (
          <>
            <p>
              The state is actively leveraging technology for compliance through
              its single-window system. This means data from other state
              departments (like GST registration, Shops & Establishment filings)
              can be cross-referenced by the ESIC, making non-compliance easier
              to detect. The focus is on universal social security benefits,
              including the integration of ESIC services with Ayushman Bharat
              (AB-PMJAY) for wider medical care access.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready ESIC Partner in Lucknow & UP",
    description:
      "EPFDesk provides tailored ESIC solutions that address the specific, newly emerging compliance risks in Uttar Pradesh, ensuring your business is secure, registered correctly, and fully prepared for the New Wage Code. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Definition Audit",
        content:
          "We perform a comprehensive audit of all employee CTC structures (up to the ESIC wage ceiling) to ensure that the statutory ‘Wages’—Basic Pay, Dearness Allowance (DA), and Retaining Allowance—collectively form at least 50% of total remuneration. This prevents any retrospective reclassification of allowances into the ESIC wage base. Our restructuring directly implements the requirements of the Code on Wages, 2019, protecting your organisation from higher ESIC contributions as well as increased PF and Gratuity liability.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New District Registration & ESIC Defense",
        content: (
          <>
            <p>
              We assist establishments in the 74 newly notified ESIC
              districts—including Mahoba, Pratapgarh, and Badaun—with timely
              registration, accurate documentation, and proper determination of
              the correct applicability date. For retrospective ESIC demands
              that are arbitrary or unjustified, we prepare and defend your case
              before the ESI Court or the appropriate Authority in the concerned
              Regional Office. This ensures full compliance with the Social
              Security Code, 2020’s mandate for universal coverage—while
              protecting your business from wrongful, backdated liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Principal Employer Liability Management for ODOP Cluste",
        content:
          "We implement a robust ESIC compliance system for contract and piece-rate workers across ODOP clusters such as Chikankari, Brassware, and Zari. This includes accurate calculation of contributions, complete documentation, and a defensible paper trail that protects the Principal Employer from liability arising out of contractor defaults. Our approach aligns with the Social Security Code’s enhanced focus on the welfare of gig, platform, and contract workers, significantly reducing legal and financial risk for the establishment.",
      },
    ],
  },
];
export const esicManagementFaqLucknow = [
  {
    question:
      "We are a coaching institute/private school in Gomti Nagar, Lucknow, with 15 teachers and staff. Are we covered by ESIC?",
    answer: `Yes. ESIC coverage in Uttar Pradesh now mandatorily applies to private educational institutions, coaching centres, and all shops/commercial establishments employing 10 or more persons. The ESIC Regional Office in Lucknow is actively enforcing compliance in the service-sector ecosystem.`,
  },
  {
    question:
      "Our MSME unit in the ODOP sector utilizes home-based piece-rate workers. Are they covered under ESIC?",
    answer: `This category is high-risk and complex. If your establishment controls the quality, quantity, pricing, or payment of work done by home-based piece-rate workers—even if they operate from their homes—they are likely considered ‘employees’ under ESIC. The New Labour Codes expand the definition of ‘worker’ to include gig and platform workers, thereby increasing ESIC applicability risk for traditional home-based models widely used in UP.`,
  },
  {
    question:
      "Our company's salary structure gives a huge Special Allowance to keep Basic Pay low. How does the New Wage Code affect this?",
    answer: `The New Wage Code imposes the 50% rule. If total allowances (HRA, Special Allowance, etc.) exceed 50% of an employee’s CTC, the excess amount is deemed part of statutory ‘Wages.’ This automatically raises the base for ESIC, PF, and Gratuity calculations, leading to higher mandatory contributions. We help restructure salary components legally to stay compliant before the Code is fully notified.`,
  },
  {
    question:
      "Our district was recently notified by ESIC (as part of the 74-district expansion). Can they demand contributions from five years ago?",
    answer: `ESIC can demand contributions retrospectively for up to five years, but only from the date your district was officially notified for ESIC implementation. If the district was previously non-notified, liability begins strictly from the notification date. We prepare legal defense strategies to challenge any demands that pre-date notification and are therefore unlawful.`,
  },
];
export const sectionsESICConsultantIndore = [
  {
    title:
      "The Unique ESIC Compliance Landscape of MP (Indore-Pithampur-Bhopal Corridor)",
    description:
      "Madhya Pradesh, particularly the Indore-Pithampur industrial belt, presents a complex ESIC environment due to its strong presence of organized sectors—Automobile, Pharmaceuticals, and IT—which are under high scrutiny, alongside a vast Food Processing and Textile MSME sector. The Indore Special Economic Zone (SEZ) and surrounding industrial areas are key focus points for the ESIC Regional Office.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "IT Sector and Allowance Structuring (Indore SEZ and Super Corridor)",
        content:
          "Indore is a rapidly growing IT hub. ESIC audits in this sector often focus on the salary structure, looking for excessive use of allowances (like HRA, Conveyance) to keep the statutory wage base low. The application of the new  rule under the Code on Wages, 2019, is a major compliance risk that, if ignored, will result in massive retrospective demands upon implementation.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Factory Status and Commencement Liability (Pithampur Industrial Area): ",
        content: (
          <>
            <p>
              For large manufacturing units (Auto, Pharma, Textiles) in
              Pithampur, the definition of when a factory commences
              operations is a critical point of dispute. ESIC often attempts to
              club initial setup/construction expenses as 'wages' to attract
              contribution liability earlier. Clear documentation of the actual
              date of commencement of manufacturing (post-trial run and
              registration) is vital to successfully defend against such claims.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Body Expansion of ESIC Coverage",
        content:
          "The MP Government is actively expanding ESIC coverage, recently extending the ESI Act to Municipal Bodies and Urban Local Bodies with 10 or more employees. This signifies a broader governmental focus on formalizing employment across all sectors, increasing the risk of cross-departmental data sharing for non-compliance detection.",
      },
      {
        color: "bg-white border-gray-300",
        title: "MP's Compliance Focus",
        content: (
          <>
            <p>
              The state is leveraging technology and promoting 'Ease of Doing
              Business' through policies like the MSME Development Policy
              2021 and the One District, One Product (ODOP)scheme. While
              promoting growth, this requires businesses to maintain meticulous
              and accurate self-compliance, as official records (like GST,
              factory licenses) are often the basis for ESIC scrutiny.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready ESIC Partner in Indore & MP",
    description:
      "EPFDesk provides expert consulting focused on the specific industries and regulatory environment of Madhya Pradesh, ensuring your establishment is protected from the state’s stringent enforcement and prepared for the structural changes brought by the new Labour Codes. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES Wage Structure Redesign",
        content:
          "We conduct a proactive 50% Wages Audit for IT, ITES, and Pharma-sector employees (up to the ESIC wage ceiling), redesigning CTC structures to ensure that Basic Pay + Dearness Allowance meet the mandatory 50% threshold. This prevents any retrospective inflation of the ESIC contribution base. Our approach directly implements the Code on Wages, 2019 mandate, safeguarding your organisation against one of the most significant payroll risks faced by the formal sector today.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Pithampur Factory Registration & ESIC Applicability Certification",
        content: (
          <>
            <p>
              We assist new Automobile and Food Processing units in Pithampur
              and Dewas with end-to-end ESIC registration, including
              establishing legally defensible documentation for the actual Date
              of Commencement of Manufacturing. This prevents wrongful
              retrospective ESIC demands on construction or pre-production
              wages. Our approach applies established case law confirming that
              ESIC liability begins only once manufacturing operations start,
              fully aligning with the OSH Code, 2020’s intent to treat ESIC as
              an operational-stage safety and welfare obligation.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Compliance for Food Processing Units",
        content:
          "We implement robust ESIC compliance systems for high-turnover daily wagers, casual labour, and contract workers commonly engaged in Food Processing and Namkeen manufacturing clusters. This includes accurate wage mapping, correct eligibility checks, and timely contribution deposits for every worker. Our process mitigates the heightened Principal Employer Liability under the Code on Social Security, 2020, which mandates coverage for most contract, gig, and platform workers in these fast-growing sectors.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Medical Infrastructure Linkage",
        content: (
          <>
            <p>
              We guide employers on fully utilising ESIC’s medical network
              across Indore (T.B. Hospital), Bhopal, Gwalior, and Dewas,
              ensuring accurate IP registration, correct dispensary/hospital
              linkage, and proper documentation for medical referrals—especially
              critical for workers in remote industrial zones. This enhances
              employee welfare and supports the Social Security Code, 2020
              mandate for universal ESIC coverage and seamless portability of
              benefits across regions.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqIndore = [
  {
    question:
      "Our Food Processing unit in the industrial area has 15 workers. Are we covered by ESIC?",
    answer: `Yes. ESIC is mandatory for any factory, shop, or commercial establishment in the notified areas of Madhya Pradesh—including Indore, Pithampur, and Bhopal—employing 10 or more persons. With the Food Processing sector under heightened scrutiny, maintaining full compliance is essential.`,
  },
  {
    question:
      "We are an IT company in Crystal IT Park, Indore. Why is ESIC auditing our allowance structure?",
    answer: `ESIC is reviewing whether your payroll relies on a low Basic Pay and high allowances (HRA, Conveyance, etc.). Under the New Wage Code, any allowance portion exceeding 50% of total remuneration (CTC) must be added back to 'Wages' for ESIC calculation. This significantly increases the ESIC contribution base, and ESIC is proactively auditing firms to ensure readiness for the transition.`,
  },
  {
    question:
      "We are building a new Automobile component factory in Pithampur. Do we have to pay ESIC on the wages of the construction workers?",
    answer: `Generally, no. Multiple legal precedents confirm that ESIC liability begins only once actual manufacturing operations commence—not during construction or infrastructure setup. Construction workers may fall under the jurisdiction of BOCW (Building & Other Construction Workers) welfare bodies instead. Maintaining clear records separating construction and manufacturing phases is crucial to avoid retrospective ESIC demands.`,
  },
  {
    question:
      "We are an MSME in the textile sector in Indore. ESIC is threatening penal action for non-registration from five years ago. What are our options?",
    answer: `ESIC can recover contributions retrospectively for up to five years, along with damages and interest. Your options include:  
• **Amnesty Schemes:** Using one-time settlement schemes (like SPREE or new Amnesty programs) to register without heavy penalties.  
• **Dispute Resolution:** Challenging the demand based on incorrect wage assessments, misclassification of your establishment, or flawed determination of commencement date.  
We assist in both strategies for a defensible and compliant outcome.`,
  },
  {
    question: "How does the New Wage Code help our contract workers?",
    answer: `The Code on Social Security, 2020 expands statutory protections to Gig and Platform workers and reinforces the Principal Employer’s responsibility to ensure social security coverage (including ESIC) for all contract labour. This improves benefit portability across state lines—critical for Madhya Pradesh’s high-migration labour force—and standardizes compliance for employers.`,
  },
];
export const sectionsESICConsultantCoimbatore = [
  {
    title:
      "The Unique ESIC Challenges in Tamil Nadu's Industrial Hub (Coimbatore-Tirupur-Erode)",
    description:
      "Coimbatore, known as the 'Manchester of South India', is the nerve center for Tamil Nadu's Textile and Engineeringindustries, complemented by the vast knitted garment export cluster in nearby Tirupur. The ESIC environment here is marked by high employee density, principal employer liability for contract workers, and a regional office that actively conducts retrospective audits.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Contract Labor in Textile/Garment Industry (Tirupur Cluster)",
        content:
          "The garment and textile industry relies heavily on contract, piece-rate, and inter-state migrant workers. The ESIC Sub-Regional Office in Coimbatore actively enforces compliance on Principal Employers (the Mills/Factories) for the ESIC contributions of the contract labor they engage. Retrospective demands are common when contracts or manpower agencies fail to remit contributions, leading to the factory's bank accounts being frozen until the liability is settled.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Factory Commencement Date Disputes (Foundries & Engineering)",
        content: (
          <>
            <p>
              Given the robust manufacturing base (Foundry, Pump, Motor, and
              Auto Components), ESIC authorities frequently attempt to demand
              contributions from the date of the factory's construction or setup
              phase. As seen in Madras High Court judgments, establishing clear
              documentary proof of the actual commencement date of the
              manufacturing process (post-trial run) is critical to successfully
              defending against huge retrospective liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Expansion of ESIC Coverage to Local Bodies and MSMEs",
        content:
          "The Tamil Nadu government has been proactively extending the ESI Act to contractual employees of all local bodies and has recently extended full implementation to entire districts like Coimbatore. This signifies a broader enforcement push, with a specific focus on sectors like Private Educational Institutions and smaller MSME units that may have previously evaded coverage.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Tamil Nadu’s Regulatory Focus",
        content: (
          <>
            <p>
              While the state has been a strong opponent of the centralized
              Labour Codes, it is aggressively pushing for higher compliance and
              social security for workers. Recent ESIC one-time amnesty schemes
              (like SPREE) launched in the region underscore the corporation's
              focus on regularizing the workforce and bringing unregistered or
              partially registered factories into the formal ESIC fold,
              indicating an impending shift to stricter enforcement
              post-amnesty.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "EPFDesk: Your New Wage Code Ready ESIC Partner for Coimbatore's Industries",
    description:
      "We transform the complex, high-risk process of ESIC compliance into a seamless, expert-managed service. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Retrospective Liability Management",
        content:
          "We mitigate Principal Employer risk in the Textile and Foundry sectors by auditing contracts with manpower agencies, ensuring watertight compliance clauses and real-time verification of ESIC remittances. For existing retrospective ESIC demands, we prepare complete case files and supporting documentation for representation before the ESI Court (Principal Labour Court) in Chennai or Coimbatore. This service aligns with the Social Security Code, 2020, which strengthens the direct accountability of the Principal Employer for the ESIC coverage of all contract workers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Compliance Audit",
        content: (
          <>
            <p>
              We conduct a comprehensive Wage Structure Optimization audit to
              ensure that statutory ‘Wages’—Basic Pay plus Dearness
              Allowance—constitute at least 50% of CTC for all technical,
              supervisory, and administrative staff (up to the ESIC wage
              ceiling). This prevents the ESIC contribution base from being
              retrospectively inflated once the New Wage Code is notified. Our
              restructuring approach minimizes the expected 5–15% surge in
              manpower costs faced by manufacturing MSMEs due to the broader
              ‘Wages’ definition under the Code on Wages, 2019.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Inter-State Migrant Worker ESIC Compliance",
        content:
          "We manage end-to-end ESIC documentation and registration for inter-state migrant workers—particularly those employed in Spinning Mills—by integrating e-Shram details, issuing e-Pehchan cards, and ensuring full portability of ESIC benefits across states. This aligns with the Social Security Code’s mandate for universal coverage and guarantees that migrant workers receive uninterrupted social security and medical benefits, regardless of their home state.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Foundry & Engineering Safety & Medical Compliance",
        content: (
          <>
            <p>
              We align your factory’s ESIC compliance with the mandatory annual
              health check-up requirements for workers aged 40 and above under
              the OSH Code, 2020. Our team coordinates directly with the local
              ESIC Hospital—such as the facility in Singanallur, Coimbatore—to
              manage occupational health assessments, medical referrals, and
              risk documentation. This integrates ESIC benefits with the OSH
              Code’s enhanced focus on occupational safety and health for
              high-risk industries like Foundry, Casting, and Engineering.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqCoimbatore = [
  {
    question:
      "We run a small motor pump unit in Ganapathy, Coimbatore, with 12 workers. Are we covered by ESIC?",
    answer: `Yes. As a factory/establishment operating in the notified areas of Coimbatore, the ESIC Act is mandatory for all units employing 10 or more persons. Coimbatore has been an ESIC-implemented zone since 1955, and compliance enforcement is stringent.`,
  },
  {
    question:
      "Our Spinning Mill uses job workers paid on a piece-rate basis. Are their earnings subject to ESIC contribution?",
    answer: `Absolutely. Payments made to piece-rate workers or job workers for work performed within the factory are treated as 'Wages' under the ESI Act and must be included in the contribution base. ESIC closely monitors textile and spinning mills for wage under-reporting, making proper inclusion essential.`,
  },
  {
    question:
      "We pay our engineers a high transport allowance. Will the New Wage Code force us to pay more ESIC contribution?",
    answer: `Yes, likely. Under the New Wage Code, total allowances cannot exceed 50% of total remuneration (CTC). If Transport Allowance, HRA, and other allowances exceed this limit, the excess must be added back to 'Wages'—increasing both ESIC and PF contribution liability. A proactive payroll audit is essential to avoid major cost escalation.`,
  },
  {
    question:
      "The ESIC Sub-Regional Office is demanding contributions from the date our Tirupur unit started construction, not manufacturing. Is this correct?",
    answer: `No. Based on multiple High Court rulings, including those of the Madras High Court, ESIC liability begins only when actual manufacturing operations commence—not during civil construction or setup. We gather and prepare supporting documents such as Factory Inspector certifications, electricity service records, machinery installation proofs, and raw material purchase orders to successfully contest such retrospective demands.`,
  },
];
export const sectionsESICConsultantVadodara = [
  {
    title:
      "Gujarat’s Unique ESIC Compliance Landscape (Vadodara-Ankleshwar-Morbi Corridor)",
    description:
      "Gujarat, known for its dynamic industrial clusters spanning from Vadodara's petrochemical and engineering hubs to Morbi's ceramics strength, presents a high-stakes ESIC compliance environment. The state’s focus on large-scale manufacturing and widespread use of contract labor creates specific audit risks that differ significantly from other states.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Construction vs. Manufacturing Commencement (Legal Risk)",
        content:
          "The Gujarat High Court has established a strong precedent that ESI liability starts only from the commencement of the actual manufacturing process, not from the date of factory construction or setup. ESIC authorities in Vadodara often issue retrospective demands attempting to cover construction-phase labor costs. EPFDesk specializes in leveraging these specific Gujarat judicial precedents to successfully defend against such demands (as seen in the Minaxi Textiles judgment).",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Contract Labor & Principal Employer Liability (Chemical & Engineering)",
        content: (
          <>
            <p>
              In the highly regulated Chemical, Pharma, and Engineering clusters
              surrounding Vadodara, the risk for the Principal Employer is
              paramount. Audits frequently target the non-payment or
              under-payment of ESIC contributions for contract workers
              (security, housekeeping, job-work). The state government has
              recently issued circulars reminding departments and corporations
              to ensure contractors are registered under PF/ESI, signaling
              stricter enforcement and direct liability on the Principal
              Employer for any default.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Widespread Non-Compliance in MSME Clusters (Morbi/Ceramics Effect)",
        content:
          "Despite the ESIC Act being notified decades ago, numerous workers in major industrial sectors like Ceramics (Morbi) and various MSME units are still denied basic ESIC benefits, with many units not registering or providing identity cards. This documented non-compliance suggests an impending, targeted enforcement drive by the ESIC and Labour Departments to regularize these unprotected workers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Inadequate ESIC Healthcare Infrastructure",
        content: (
          <>
            <p>
              News reports from Vadodara highlight a disparity between growing
              ESIC contributions (which are mandatory) and crumbling or
              inadequate medical infrastructure (dispensaries, staff shortages).
              While this doesn't excuse non-compliance, it is a key driver for
              employee disputes and subsequent employer audit trigger.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your ESIC and New Wage Code Shield in Gujarat",
    description:
      "We transform the complex, high-risk process of ESIC compliance into a seamless, expert-managed service. ",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Retrospective Demands Defense",
        content:
          "We prepare a comprehensive ‘Commencement Date’ legal defense—compiling Factory Inspector certificates, Electricity Board service activation records, machinery installation proofs, and first sales invoices—to establish the true start of manufacturing operations. This enables you to successfully challenge retrospective ESIC demands raised for the construction or pre-production period, relying on well-established Gujarat High Court rulings. Our approach protects employers from legacy ESIC liabilities under the old Act and ensures a clean transition into the compliance framework of the Code on Social Security, 2020.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Liability Management",
        content: (
          <>
            <p>
              We conduct a Principal Employer Indemnity Audit for all labour
              contracts—covering manpower agencies, job-work arrangements, and
              outsourced processes—in the Chemical and Engineering sectors. Our
              system ensures real-time verification of ESIC remittances by
              contractors and enables automatic deduction of defaults from
              contractor invoices, fully aligning with Gujarat’s stringent
              contractor-compliance mandate. This approach supports the broader
              ‘Wages’ definition under the Code on Wages, 2019, and the OSH
              Code, 2020’s heightened responsibility placed on the Principal
              Employer for the social security protection of contract workers.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Definition Audit",
        content:
          "We conduct Statutory Wage Optimization for all covered employees (up to the ESIC wage ceiling) to ensure that statutory wage components—Basic Pay plus Dearness Allowance—meet the mandated 50% threshold of gross remuneration. This is especially critical in Gujarat’s manufacturing sector, where complex allowance-heavy salary structures are common. Our audit proactively addresses the core financial challenge posed by the New Wage Code: preventing an abrupt and unplanned increase in the ESIC, PF, and Gratuity contribution bases once the Code is enforced.",
      },
      {
        color: "bg-white border-gray-300",
        title: "e-Pehchan & Remote Worker Compliance",
        content: (
          <>
            <p>
              We manage end-to-end digital ESIC registration and e-Pehchan card
              issuance for workers—particularly migrant labour—in remote GIDC
              clusters such as Ankleshwar, Savli, and Manjusar. Our process
              ensures that every Insured Person is correctly linked to ESIC
              hospitals and referral facilities, enabling smooth access to
              medical benefits. This fully aligns with the Social Security
              Code’s mandate for universal social security and inclusive welfare
              coverage for all categories of workers.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqVadodara = [
  {
    question:
      "We are setting up a new plant in the Savli GIDC area. When does our ESIC liability start?",
    answer: `Your ESIC liability begins only when the actual manufacturing process commences inside the factory premises—not when civil construction starts. This legal position is well supported by Gujarat High Court rulings. We assist in documenting your commencement date accurately to prevent wrongful retrospective ESIC demands.`,
  },
  {
    question:
      "Our salary structure heavily relies on allowances (HRA, Conveyance) to keep the Basic Pay low. Will the New Wage Code force us to pay more ESIC?",
    answer: `Yes, almost certainly. Under the New Wage Code, if excluded allowances exceed 50% of total remuneration, the excess must be added back to form statutory ‘Wages.’ This increases the base for ESIC and PF contributions, raising your statutory costs significantly. We help restructure payroll early to avoid sudden financial impact.`,
  },
  {
    question:
      "We use contract workers supplied by a registered agency. If the agency defaults on ESIC payments, is our Vadodara company liable?",
    answer: `Yes. As the Principal Employer, your organisation is legally responsible for ensuring full ESIC compliance for all contract labour deployed at your premises. If the contractor defaults, ESIC will recover dues—including penalties—from your company. This remains the single biggest ESIC litigation risk for Gujarat’s major industries.`,
  },
  {
    question:
      "I run a commercial establishment (Shop/Office) in the fully covered Vadodara district with 12 employees. Is ESIC compulsory?",
    answer: `Yes. In notified areas of Gujarat, ESIC coverage is mandatory for shops, commercial establishments, factories, and other specified units employing 10 or more persons. Vadodara has been fully covered for several years, and compliance enforcement is strict. Your establishment is required to register and contribute for all eligible employees.`,
  },
];
export const sectionsESICConsultantVisakhapatnam = [
  {
    title:
      "Visakhapatnam’s Evolving ESIC Compliance Matrix: The Tech & Manufacturing Blend",
    description:
      "Visakhapatnam (Vizag) is undergoing a significant economic shift, moving beyond its traditional core of Port, Steel, and Pharma to emerge as a prominent AI and IT/ITES destination.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES Sector ESIC Coverage",
        content:
          "Unlike traditional setups, IT/ITES establishments often maintain complex payroll structures with high allowances and rely heavily on contract or fixed-term employees. The ESIC Act applies to IT/ITES firms with 10 or more employees in notified areas like Vizag. The primary challenge is ensuring accurate ESIC applicability for employees whose allowances push them close to the  wage ceiling and managing the high-volume contract staff employed in supporting services (security, facilities, logistics) for the new Data Centres.",
      },
      {
        color: "bg-white border-gray-300",
        title: "SPREE and Formalization Drive",
        content: (
          <>
            <p>
              The AP ESIC region is actively using schemes like SPREE (Scheme
              for Promotion of Registration of Employers and Employees) to bring
              left-out establishments into the ESI fold. This targeted push
              suggests an imminent phase of strict enforcement after the
              voluntary window closes, directly impacting the numerous MSMEs,
              service providers, and new vendors supplying the burgeoning tech
              ecosystem.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Readiness",
        content:
          "The impending New Wage Code, with its mandatory  'Wage' threshold, will be highly disruptive to the IT/ITES industry's standard compensation model, which typically features lower Basic Pay and high allowances. Companies in Vizag must proactively restructure their CTC to prevent an unplanned surge in their ESIC and PF contribution base.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Vizag’s Unique Risk",
        content: (
          <>
            <p>
              The construction phase of the new Data Centres involves thousands
              of contract laborers. Liability for their ESIC coverage rests
              squarely on the Principal Employer (the developer/IT firm) if the
              contractor defaults. This is a massive, high-value compliance
              risk.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "EPFDesk: ESIC Compliance and New Wage Code Mastery for Vizag's Future",
    description:
      "EPFDesk offers specialized consultancy that addresses the specific challenges of AP's industrial landscape, particularly the complexity introduced by the new IT/ITES and Data Center investments.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES Wage Restructuring",
        content:
          "We perform strategic wage optimisation for IT/ITES organisations in Madhurawada, Rushikonda, and other tech corridors by auditing and restructuring allowance-heavy salary packages to ensure that statutory ‘Wages’ meet the mandated 50% rule. This stabilises ESIC and PF contribution bases for all covered employees and prevents involuntary inflation of statutory costs—one of the most significant financial risks facing the IT sector under the Code on Wages, 2019.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Data Center & Infrastructure Contract Liability Management",
        content: (
          <>
            <p>
              We implement a real-time ESIC compliance monitoring system for all
              vendors engaged in construction, facilities, and maintenance
              activities for Data Centres and AI Hubs. This ensures full ESIC
              adherence by contractors and shields the Principal Employer—the
              IT/Data Center entity—from liability arising due to vendor
              default. Our framework aligns all contractual staff with the
              Universal Social Security mandate under the Code on Social
              Security, 2020, protecting your organisation from unforeseen
              retrospective ESIC demands.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Retrospective Demands & Formalization",
        content:
          "We guide unregistered service vendors and MSMEs through Andhra Pradesh ESIC’s SPREE and Voluntary Compliance schemes, enabling them to formalise ESIC coverage without incurring retrospective penalties for the prior period. Our process secures a clear, legally defensible commencement date for statutory liability—an essential requirement for seamless integration with new state-level industry incentives and for preventing future disputes over backdated ESIC demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee Social Security Compliance",
        content: (
          <>
            <p>
              We help IT/ITES organisations ensure full parity of ESIC and
              social security benefits for fixed-term employees—common in
              Vizag’s project-based tech ecosystem—so that their entitlements
              match those of permanent staff, as mandated under the New Wage
              Code. This guarantees compliance with the principles of ‘equal pay
              for equal work’ and social security equivalence under the Code on
              Social Security, 2020.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqVisakhapatnam = [
  {
    question:
      "We are a software services firm in the Vizag IT Special Economic Zone with 45 employees. Does ESIC apply to us?",
    answer: `Yes. In notified areas such as Visakhapatnam, the ESIC Act applies to all establishments—including IT/ITES firms—employing 10 or more persons. SEZ status does not provide any exemption from ESIC registration or contribution obligations.`,
  },
  {
    question:
      "My employee’s CTC has a Basic Pay of ___ and Allowances of ___. How will the New Wage Code impact my ESIC cost?",
    answer: `Under the New Wage Code’s 50% rule, statutory ‘Wages’ must be at least 50% of total remuneration (CTC). If your employee’s Basic Pay is below the 50% threshold, the difference between statutory ‘Wages’ and the 50% benchmark will be added back into the ESIC wage base. This can substantially increase ESIC contributions unless payroll structures are proactively redesigned.`,
  },
  {
    question:
      "The construction of our Data Center in Anakapalli/Vizag is done by a third-party contractor. If they don't pay ESIC for their workers, are we liable?",
    answer: `Yes. As the Principal Employer, your company is legally responsible for ensuring ESIC contributions are paid for all workers engaged in your operations—including those deployed through contractors. If the contractor defaults, ESIC will raise demands and penalties directly on your company. We specialise in contract structuring and monitoring systems to mitigate this high-risk exposure.`,
  },
  {
    question:
      "Our company missed the ESIC registration date when we started operations in Vizag. Can we avoid retrospective penalties?",
    answer: `Possibly. Andhra Pradesh ESIC has promoted the SPREE scheme, which allows unregistered employers to voluntarily register now and receive immunity from inspections and retrospective contribution/penalty demands for the pre-registration period. We can guide you through the process to help secure a clean, penalty-free start.`,
  },
];
export const sectionsESICConsultantNagpur = [
  {
    title:
      "Maharashtra's ESIC Landscape: Focus on Nagpur's Industrial & Vidarbha's Textile Core",
    description:
      "Nagpur, the winter capital of Maharashtra and the central economic pillar of the Vidarbha region, presents a distinct ESIC compliance environment, driven by its unique industrial mix and strategic importance as a logistics gateway.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Manufacturing and MIDC Zones (Butibori & Hingna): ",
        content:
          "Nagpur’s industrial belt, particularly the massive Butibori MIDC and Hingna MIDC, is dominated by heavy manufacturing, engineering, and processing units. These sectors rely on large volumes of contract and blue-collar labor. The primary ESIC risk is the Principal Employer's Liability for contributions not paid by contractors, leading to frequent and high-value retrospective demands, which local industry bodies have actively tried to mitigate.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile and Cotton Processing",
        content: (
          <>
            <p>
              The surrounding Vidarbha region is a major cotton belt. Government
              efforts to bolster the Textile Industry (with policies like the
              Integrated and Sustainable Textile Policy 2023-2028 and PM-MITRA
              parks) mean thousands of workers in ginning, spinning, and
              processing units are being brought under the formal ESIC umbrella,
              requiring detailed compliance management for seasonal and contract
              workers.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Expansion to New Sectors (Education & Healthcare)",
        content:
          "The Maharashtra government has actively proposed and extended ESIC coverage to previously uncovered sectors, most notably Educational and Medical Institutions. This means hospitals, nursing homes, schools, and coaching centers in Nagpur are now under the ESIC scanner, requiring immediate registration and compliance setup.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Healthcare Infrastructure Scrutiny",
        content: (
          <>
            <p>
              News reports consistently highlight the severe shortcomings and
              staff shortages at local ESIC hospitals (like Somwar Peth),
              despite crores of rupees in monthly contributions from employers
              and employees. This deficiency often leads to heightened employee
              grievances and regulatory scrutiny on employers, putting the onus
              on the companies to ensure flawless compliance.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "EPFDesk: Your ESIC Strategist and New Wage Code Expert in Nagpur & Maharashtra",
    description:
      "EPFDesk delivers highly localized ESIC and social security consultation, specifically engineered to navigate the unique risks of the Vidarbha industrial region and structurally prepare your payroll for the New Wage Code.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Manufacturing Contract Labour Liability Management",
        content:
          "We implement a rigorous ESIC compliance framework for Principal Employers in the MIDC zones of Butibori and Hingna, including strict verification of Form 6 (Return of Contributions) and mandatory real-time sub-code compliance checks for all contract vendors. This protects large manufacturing units from the heightened Principal Employer liability imposed under the Code on Social Security, 2020, and significantly reduces the risk of heavy retrospective ESIC fines frequently raised during inspections in these industrial clusters.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Educational & Medical Sector ESIC Expansion Compliance",
        content: (
          <>
            <p>
              We provide rapid ESIC coverage implementation for newly covered
              Educational Institutions, Hospitals, and Diagnostic Centres across
              Nagpur. Our services include end-to-end digital registration,
              creation of Sub-Codes for multi-branch organisations, and correct
              statutory classification of ‘Wages’ for non-teaching and
              non-medical staff. This ensures immediate compliance with
              Maharashtra’s latest sector-wide ESIC extension notifications,
              protecting institutions from heavy penalties for delayed or
              non-registration.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Definition Audit (50% Rule)",
        content:
          "We conduct comprehensive payroll audits for large manufacturing and textile workforces, restructuring CTC components to ensure that statutory ‘Wages’—Basic Pay, DA, and Retaining Allowance—collectively meet the mandatory 50% of total remuneration threshold. This proactive restructuring addresses the most significant financial impact of the Code on Wages, 2019, stabilising the ESIC and PF contribution base and preventing allowance-heavy salary components from being involuntarily added back into ‘Wages.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Retrospective ESIC Demand Defense",
        content: (
          <>
            <p>
              We design robust legal strategies to contest retrospective ESIC
              demands—especially those arising from disputed coverage dates,
              misinterpreted applicability, or incorrect wage calculations. Our
              approach leverages local judicial precedents and statutory
              provisions within the ESIC Act regarding the true ‘date of
              coverage.’ This enables employers to obtain a clean break from
              legacy liabilities and transition smoothly into the simplified,
              standardised compliance framework introduced under the New Labour
              Codes.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqNagpur = [
  {
    question:
      "We are a large factory in Butibori MIDC, and many of our contractor workers are going on strike due to non-payment of ESIC benefits. Who is responsible?",
    answer: `Legally, the Principal Employer—your factory—is ultimately responsible for ensuring ESIC compliance for all workers engaged at your premises, including those deployed through contractors. While you may recover dues from the contractor, ESIC will pursue your company for unpaid contributions, penalties, and interest. We mitigate this high-risk exposure by implementing strict, real-time contractor compliance monitoring systems.`,
  },
  {
    question:
      "We are a school in the heart of Nagpur. We have over 20 employees. Does the ESIC Act apply to us, as we are an educational institution?",
    answer: `Yes. The Government of Maharashtra has formally extended ESIC coverage to Educational and Medical Institutions employing 10 or more persons in notified areas. Your school is now required to register and comply promptly to avoid penalties, inspections, and retrospective demands.`,
  },
  {
    question:
      "My company's current salary structure has low Basic Pay and high Special Allowance. How will the New Wage Code affect my ESIC contributions in Nagpur?",
    answer: `This salary structure poses a major compliance risk. Under the Code on Wages, 2019, statutory ‘Wages’ (Basic + DA + Retaining Allowance) must constitute at least 50% of total remuneration. If allowances exceed 50%, the excess must be added back into the ‘Wages’ base, automatically increasing your ESIC and PF contribution liability. We restructure pay components legally to minimize this financial impact.`,
  },
  {
    question:
      "We operate several small cotton ginning units in the Vidarbha region. Is ESIC enforcement strict there, given the rural nature of the industry?",
    answer: `Yes. Enforcement is increasing significantly, driven by state-level textile policy reforms and central schemes like PM-MITRA promoting formalisation. ESIC authorities are focusing on covering all eligible workers—including seasonal, daily-wage, and piece-rate workers common in textile and ginning units. Proactive registration and correct wage computation are essential to avoid substantial penalties in the coming years.`,
  },
];
export const sectionsESICConsultantBhopal = [
  {
    title: "Madhya Pradesh’s Compliance Context: Bhopal & the Industrial Belt",
    description:
      "Bhopal, serving as the State Capital, and its adjacent industrial hubs like Mandideep and the Govindpura Industrial Estate, form a critical ESIC compliance zone characterized by heavy concentration in the following sectors:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Automobile and Auto-Components",
        content:
          "This sector, a major economic driver in MP, involves extensive supply chains and relies heavily on third-party contract labor. The core compliance challenge is the rigorous management of Principal Employer liability for the thousands of contract workers employed across multiple vendors, which often leads to punitive retrospective ESIC demands spanning several years.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pharmaceuticals and Manufacturing",
        content: (
          <>
            <p>
              MP's pharmaceutical industry, identified as a key thrust sector,
              requires meticulous adherence not only to quality but also to
              social security laws. The recent national focus on compliance
              failures in this sector (as highlighted by contaminated medicine
              incidents) means all regulatory bodies, including ESIC, are
              increasing scrutiny. Correct classification of technical staff and
              strict control over outsourcing partners are paramount.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "SPREE 2025 and Retrospective Liability",
        content:
          "The ESIC Sub-Regional Office, Bhopal, is actively promoting the central government's SPREE 2025 (Scheme for Promotion of Registration of Employers/Employees). This presents a critical, time-bound opportunity for unregistered establishments, especially MSMEs and vendors in Bhopal and Mandideep, to formalize their compliance and get immunity from past ESIC dues and penalties for the period prior to registration.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Wage Code and Statutory Minimums",
        content: (
          <>
            <p>
              The impending New Wage Code, with its unified definition of
              'Wages' and the  minimum wage floor, will drastically affect the
              CTC structures prevalent in the manufacturing and industrial
              sectors of MP, where allowances are often kept high to reduce
              statutory contributions.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: ESIC Strategy & New Wage Code Mastery for MP Industry",
    description:
      "EPFDesk provides hyper-localized ESIC consulting that directly addresses the unique regulatory environment and industrial structure of Bhopal and Madhya Pradesh. We ensure your business is protected from historical liabilities while preparing for the future of social security legislation.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Definition Audit",
        content:
          "We conduct a detailed payroll restructuring audit for units in Mandideep and Govindpura, focusing on blue-collar and factory employees to ensure that statutory ‘Wages’—Basic Pay, DA, and other includable components—meet the mandatory 50% threshold of total remuneration. This safeguards your organisation from sudden ESIC cost surges and ensures full compliance with the Code on Wages, 2019. By stabilising the statutory contribution base, our audit prevents allowance-heavy structures from being reclassified as ‘Wages,’ which would otherwise trigger a significant rise in manpower costs.",
      },
      {
        color: "bg-white border-gray-300",
        title: "SPREE 2025 Voluntary Registration",
        content: (
          <>
            <p>
              We assist eligible, unregistered employers in Bhopal in utilising
              the SPREE 2025 Voluntary Registration window (open until December
              31, 2025). This programme enables establishments to obtain ESIC
              registration from a prospective date while receiving complete
              immunity from inspections, enquiries, and backdated ESIC
              contribution or penalty demands for the prior period. By
              eliminating legacy compliance liabilities, SPREE 2025 provides a
              clean slate and enables a seamless transition into the streamlined
              digital compliance and reporting framework of the New Labour
              Codes.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour ESIC Risk Management (Auto & Pharma)",
        content:
          "We implement a comprehensive Vendor ESIC Compliance Management System for major Auto, Auto-Component, and Pharma manufacturers. This includes mandatory scrutiny of contractor ESI Sub-Codes, real-time verification of monthly ESIC contribution payments, and automated exception alerts—shifting your organisation’s compliance posture from reactive defence to proactive control. This framework directly fulfils the Code on Social Security, 2020 mandate, which places ultimate ESIC responsibility on the Principal Employer for all contract and outsourced workers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Service Upgrades & Modernization Advisory",
        content: (
          <>
            <p>
              We track ESIC’s nationwide modernization initiatives—including new
              hospitals, upgraded dispensaries, digital service enhancements,
              and Ayush unit expansions—and help employers in the Bhopal and
              Indore regions leverage these improvements for better employee
              welfare outcomes. Our guidance ensures optimal utilization of ESIC
              benefits, reduces employee grievances regarding medical access,
              and maximizes the value derived from statutory ESIC contributions.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqBhopal = [
  {
    question:
      "We have not registered for ESIC yet, though we have 15 employees. We fear a massive penalty for the last few years. What is the solution in MP?",
    answer: `You should immediately use the SPREE 2025 scheme. As announced by the ESIC Sub-Regional Office, Bhopal, SPREE 2025 offers a one-time opportunity (open until December 31, 2025) for employers to register now and gain full immunity from inspections and all retrospective ESIC demands, contributions, and penalties for the period prior to the declared registration date. We specialise in executing this voluntary compliance process swiftly to secure complete protection from past liabilities.`,
  },
  {
    question:
      "We are a large auto-component manufacturer near Mandideep and use several contract agencies. What is our biggest ESIC risk?",
    answer: `Your single biggest risk is retrospective Principal Employer Liability. If any contractor fails to register their employees correctly or remit ESIC contributions, the department will raise the full demand—along with interest and penalties—directly against your company. We eliminate this risk by implementing a contract-level ESIC verification and indemnity process, ensuring real-time monitoring of contractor compliance before vendor payments are released.`,
  },
  {
    question:
      "Our salary structure in Bhopal has a Basic Pay of ___ and allowances of ___. Will the New Wage Code apply, and how?",
    answer: `Yes. Under the New Wage Code, statutory ‘Wages’ (Basic Pay + DA + Retaining Allowance) must be at least 50% of total remuneration (CTC). If your employee’s total remuneration is ___, then statutory ‘Wages’ must be ___ (50% of CTC). Since your current Basic Pay is ___, ESIC will recompute contributions on ___—regardless of your internal salary split. A mandatory CTC restructuring is required to avoid a sudden, uncontrollable increase in ESIC costs.`,
  },
  {
    question:
      "Our company is in the Pharma sector. Are there any special ESIC risks for us?",
    answer: `Yes. The Pharma sector in MP is under heightened ESIC scrutiny, particularly regarding workforce formalisation. Field staff, production workers, QC/QA roles, and long-term contract labour must all be correctly classified, registered, and covered if eligible. Incorrect wage classification or deliberate exclusion of eligible employees is a major enforcement trigger. Ensuring accurate registration and wage definition is essential to maintaining a clean compliance record.`,
  },
];
export const sectionsESICConsultantKanpur = [
  {
    title:
      "Uttar Pradesh's ESIC Environment: Focus on Kanpur's Industrial Legacy",
    description:
      "Kanpur, historically known as the 'Manchester of the East' and the 'Leather City of the World,' presents a highly intricate ESIC compliance scenario. The region’s challenges are distinct, stemming from its older industrial base, reliance on complex supply chains, and specific regulatory hurdles.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Dominance of Leather and Allied Industries (Jajmau)",
        content:
          "This sector relies heavily on informal and contract labor. The primary ESIC challenge here is the persistent issue of misclassification of workers (e.g., home-based workers, job-work units) and the Principal Employer's Liability for sub-contracted work. Regulatory scrutiny is high due to environmental compliance issues (Zero Liquid Discharge - ZLD) which can lead to factory closures and operational disruptions, requiring flexible ESIC management for fluctuating workforces.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile and Hosiery Manufacturing",
        content: (
          <>
            <p>
              Kanpur and the wider UP region have a significant textile and
              hosiery footprint. The industry's practice of maintaining low
              basic pay and high allowances to reduce statutory burdens is on a
              direct collision course with the New Wage Code's  wage floor. This
              necessitates an urgent, large-scale payroll overhaul for thousands
              of enterprises.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "UP’s Industrial Corridors & Expansion",
        content:
          "With the state actively developing new industrial corridors (like the Defence Industrial Corridor) and focusing on MSME growth, ESIC coverage is expanding rapidly into new geographical areas and non-traditional sectors (e.g., modern logistics, electronics, and food processing).",
      },
      {
        color: "bg-white border-gray-300",
        title: "Leveraging ESIC’s Regional Initiatives",
        content: (
          <>
            <p>
              The ESIC Sub-Regional Offices in UP are promoting schemes
              like SPREE 2025 to bring unregistered employers into the formal
              economy while offering immunity from retrospective demands. This
              presents a critical, time-bound opportunity for the region’s
              numerous MSMEs. Furthermore, the establishment of a new ESIC
              Medical College in Noida & Varanasi signals future investment and
              enhanced medical benefits, making compliance more valuable to
              employees.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: Your Expert for Kanpur ESIC & New Wage Code Transition",
    description:
      "EPFDesk delivers specialized ESIC solutions tailored to the industrial characteristics of Kanpur and the broader compliance requirements of Uttar Pradesh, ensuring complete legal de-risking and payroll future-proofing.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "New Wage Definition Audit (Hosiery & Textile CTC Restructuring)",
        content:
          "We conduct a comprehensive audit and restructuring of CTC components for high-volume Hosiery and Textile workforces to ensure statutory ‘Wages’—Basic Pay, Dearness Allowance, and Retaining Allowance—meet the mandated 50% of Total Remuneration threshold under the Code on Wages, 2019. This proactive restructuring is crucial for cost management, preventing the compulsory reclassification of allowances into ‘Wages,’ which would otherwise trigger an automatic surge in ESIC contribution liability and overall manpower costs for allowance-heavy UP industrial units.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Leather Industry Contract Labour & Supply Chain Compliance",
        content: (
          <>
            <p>
              We implement a tiered Principal Employer Liability Shield for
              Leather and Leather-Component manufacturing clusters in Jajmau and
              nearby industrial zones. This framework legally isolates the
              Principal Employer from non-compliant subcontractors through
              mandatory ESIC Sub-Code creation, real-time monthly contribution
              verification, and legally enforceable indemnity clauses in all
              vendor agreements. The system aligns with the enhanced Principal
              Employer accountability under the Code on Social Security, 2020,
              sharply reducing the sector’s long-standing exposure to
              retrospective ESIC demands and litigation.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "SPREE 2025 Retrospective Immunity",
        content:
          "We assist eligible, unregistered MSMEs and job-work units in Kanpur in availing the SPREE 2025 scheme, enabling voluntary ESIC registration from a prospective date while granting complete immunity from all retrospective liabilities—including past dues, penalties, interest, and inspections—prior to registration. This provides a clean compliance slate for Kanpur’s large unorganised MSME base, allowing them to enter the formal economy without the risk of crippling backdated ESIC demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC Wage Ceiling Increase Management",
        content: (
          <>
            <p>
              We proactively monitor the proposed national increase in the ESIC
              wage ceiling (expected to rise from the current limit to a
              significantly higher threshold) and adjust your payroll systems
              accordingly. Our framework automatically brings newly eligible
              employees into ESIC coverage, ensuring seamless statutory
              compliance with zero operational disruption. This prepares
              organisations—especially UP’s engineering and automobile auxiliary
              units—for the likely expansion of ESIC applicability to mid-level
              skilled workers, preventing sudden compliance lapses and unplanned
              contribution liabilities.
            </p>
          </>
        ),
      },
    ],
  },
];
export const esicManagementFaqKanpur = [
  {
    question:
      "Our tannery operation in Jajmau is sometimes forced to shut down due to environmental restrictions (like ZLD issues). How do we manage ESIC contributions during temporary closure?",
    answer: `During a month in which no wages are paid, no ESIC contributions are payable—but accurate declaration is essential. You must file returns correctly to document the non-payment of wages during the forced closure. For contract workers, it is equally critical that contractors file accurate ESIC returns reflecting the shutdown; otherwise, the Principal Employer may still be held liable. We guide you through the legal and procedural steps to ensure full compliance without attracting wrongful ESIC demands.`,
  },
  {
    question:
      "We are a textile unit in Kanpur with low basic pay. Will the New Wage Code force me to raise my employees' take-home salary?",
    answer: `The New Wage Code will not necessarily raise take-home salary, but it *will* increase your statutory contribution base. Statutory 'Wages' must equal at least 50% of total remuneration. If your Basic Pay is below this threshold, the difference will be treated as 'Wages,' increasing ESIC and PF contribution liability. While your total CTC may remain the same, the salary structure will shift—Basic Pay/DA will rise, allowances will reduce. We help restructure pay legally to avoid non-compliance and cost shocks.`,
  },
  {
    question:
      "News is mentioning the SPREE 2025 scheme. Does this help an old Kanpur factory that never registered for ESIC?",
    answer: `Yes. SPREE 2025 offers a rare and valuable opportunity. If your factory was liable for ESIC in the past but never registered, you may now register before December 31, 2025, and be treated as covered only from the date of registration. The scheme grants full amnesty from all past ESIC demands—contributions, interest, penalties, and inspections—for the entire pre-registration period. We specialise in executing this process securely and efficiently.`,
  },
  {
    question:
      "We use many seasonal laborers for specific processes. Are they covered under ESIC in UP?",
    answer: `Yes. If your establishment is covered and the worker’s wage is within the ESIC ceiling, seasonal and temporary workers must be covered. ESIC does not distinguish between permanent, temporary, or seasonal employees; the only condition is that the work must be connected to your establishment. This is especially crucial in Kanpur’s leather and textile sectors, where failure to register seasonal job workers is a major audit trigger.`,
  },
];

export const sectionsPFConsultantsMumbai = [
  {
    title:
      "Maharashtra's EPF Challenge: Financial Services & The New Wage Code",
    description:
      "Maharashtra, being the financial capital and a major manufacturing hub, presents a dual challenge for PF compliance.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "High-Value Payroll Restructuring in Financial Services and Corporate Hubs (Mumbai/Pune)",
        content:
          "Companies in the Banking, Financial Services, Insurance (BFSI), IT/ITeS, and Corporate headquarters (Lower Parel, BKC, Pune Hinjewadi) traditionally use a very low Basic Pay ($25\%-40\%$ of CTC) model for tax optimization and reducing statutory costs.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Contract Labour & Principal Employer Liability (Bhiwandi/Pune-PCMC)",
        content: (
          <>
            <p>
              The industrial, logistics (Bhiwandi warehouse hub), and
              manufacturing belts (Pune-PCMC, Nashik MIDC) rely heavily on
              contract and temporary labour. The challenge lies in
              ensuring $100\%$ contractor compliance and mitigating
              the Principal Employer's Liability for PF dues, especially for the
              high volume of workers employed at or near the minimum wage.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Third-Party Audit of Exempted Trusts",
        content:
          "Mumbai and Pune have a high number of large MNCs and public sector companies operating Exempted PF Trusts. The EPFO is increasing its focus on the mandatory Third-Party Auditof these trusts to ensure adherence to the $EPF \ Act$ and to safeguard returns/interest. Expert PF oversight is critical for managing these high-risk audits.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code Ready PF Compliance Partner",
    description:
      "EPFDesk delivers specialized PF and Gratuity solutions that address Maharashtra’s unique high-stakes compliance environment, ensuring not just retrospective de-risking but mandatory future-proofing under the new regime.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Mandatory New Wage Definition Audit",
        content:
          "A complete New Wage Code audit and restructuring service that ensures every employee’s Basic Pay meets the mandatory 50% wage rule. We legally reallocate allowances, recalculate PF and Gratuity impact, and secure your payroll structure against retrospective PF reclassification and Section 7A demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Management",
        content: (
          <>
            <p>
              A contract-labour compliance shield that digitally verifies
              contractor PF filings and UAN linking in real time, protecting the
              Principal Employer from liability. Designed for industrial hubs
              like Bhiwandi, Thane, and Pune MIDCs, it ensures full adherence to
              the Code on Social Security, 2020 and timely wage-and-benefit
              delivery for all contract workers.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Exempted Trust Audit & Management",
        content:
          "End-to-end compliance management for Exempted PF Trusts, including fund reconciliation, investment rule checks, and audit preparation to meet EPFO’s stringent third-party audit standards. Ensures your trust’s exemption status remains fully protected amid rising governance scrutiny in Mumbai and Pune.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital & Simplified Withdrawals",
        content:
          "A streamlined digital PF support service that ensures 100% Aadhaar–UAN seeding, error-free ECR filing, and smooth use of EPFO’s new instant-settlement features. We simplify employee withdrawals and prevent claim rejections or penalties under Section 14B across Mumbai, Thane, and Pune EPFO offices.",
      },
    ],
  },
];

export const epfManagementFaqMumbai = [
  {
    question:
      "We are a major corporate house in Mumbai's financial district. Since the New Wage Code requires Basic Pay to be 50% of CTC, how much will my monthly PF liability increase?",
    answer: `The increase depends on your current Basic Pay percentage. If your current Basic Pay is 30% of your CTC, you will need to shift 20% of CTC from allowances to Basic Pay. 
This 20% shift will increase your PF contribution base, meaning your PF contributions (Employer Share) will rise by 12% of that 20% amount. 
For a ₹15 lakh CTC, this represents a significant, mandatory increase in statutory outflow and long-term gratuity liability. 
We provide exact calculations during our NWC audit.`,
  },
  {
    question:
      "We use a large number of contract workers in our logistics hub in Bhiwandi. What is the biggest PF risk for us as the Principal Employer?",
    answer: `The biggest risk is the retrospective demand under Section 7A of the EPF Act. If your contractor fails to pay PF or underpays it, the EPFO will hold you (the Principal Employer) jointly and severally liable. 
This liability can span years and include heavy penalties. 
EPFDesk mitigates this by enforcing strict contractual clauses, ensuring immediate sub-code generation, and performing periodic Principal Employer PF Liability Audits on your contractors’ records.`,
  },
  {
    question:
      "Our company operates an Exempted PF Trust in Mumbai. What is the immediate requirement we must meet?",
    answer: `You must ensure your trust is ready for the mandatory Third-Party Audit (usually conducted by a CA firm appointed by the EPFO) and that your Trust's investment patterns strictly comply with the EPF Scheme guidelines. 
Any mismatch in interest declaration or non-compliance with investment norms can lead to the revocation of the trust’s exemption status, resulting in a massive compliance failure and immediate punitive action.`,
  },
  {
    question:
      "The EPFO has simplified withdrawal rules. Does this mean I, as the employer, have less administrative work now?",
    answer: `Yes, in part. The EPFO's simplified categories and increased digital/auto-settlements (e.g., auto transfer of PF on job change) reduce the administrative burden on HR/Payroll teams, provided the employee's UAN is properly seeded with Aadhaar and KYC details are correct. 
EPFDesk focuses on keeping your employee data 100% clean to maximize the benefit of these digital services.`,
  },
];
export const sectionsPFConsultantsDelhi = [
  {
    title:
      "The Delhi NCR PF Compliance Imperative: Facing the New Wage Code Tidal Wave",
    description:
      "The National Capital Region (NCR), with its diverse economic landscape spanning central government, corporate headquarters, IT/ITES, automotive, and a massive MSME sector, faces a confluence of high-stakes PF compliance risks.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Corporate Headquarters and High-Salary Restructuring (Gurugram/Aerocity)",
        content:
          "The corporate structure in this hub heavily relied on a low Basic Pay ($\sim 30\%-40\%$ of CTC) model to keep PF and Gratuity costs low, a practice that is now legally untenable.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Industrial and MSME Sector Audits & Penalties (Noida/Faridabad/Ghaziabad)",
        content: (
          <>
            <p>
              The regional EPFO offices (e.g., Faridabad, Noida, Delhi) are
              known for stringent enforcement, especially targeting the
              industrial and manufacturing belts. Recent news reports highlight
              an increase in recovery actions, bank account attachments,
              and $8B/8G$ proceedings against defaulters for pending PF
              contributions.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Principal Employer Liability in Contract Labour",
        content:
          "With massive construction, logistics, and manufacturing activities across the NCR, the Principal Employer (PE) liability for contractor PF default is a major focus area for EPFO enforcement, as advised by the Delhi Labour Department.",
      },
    ],
  },
  {
    title:
      "EPFDesk: Your Shield Against NWC Non-Compliance and Retrospective Demands",
    description:
      "EPFDesk provides hyper-localized PF consulting that understands the distinct regulatory and enforcement culture of the Delhi NCR EPFO Commissionerates. We specialize in converting your mandatory New Wage Code transition into a strategic payroll de-risking exercise.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Restructuring",
        content:
          "A full New Wage Code restructuring service that realigns salary components to meet the mandatory 50% Basic Pay rule, stabilizing PF and Gratuity liability while minimizing impact on employee take-home pay. This ensures a fully compliant ‘Wages’ definition and protects your organization from high-risk Section 7A retrospective PF audits.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Audit & Legal Defense (Sec 7A/14B)",
        content: (
          <>
            <p>
              Expert legal defense for PF assessments and penalty proceedings
              under Sections 7A and 14B, tailored for companies in Noida,
              Gurugram, and Delhi. We use regional precedents to reduce or
              eliminate liabilities and proactively resolve under-payments
              before they escalate into multi-year demands, interest burdens, or
              bank account attachment under Sections 8B/8G.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contractor & Principal Employer Liability",
        content:
          "A digital compliance monitoring system that tracks contractor ECR filings, UAN generation, and PF deposits in real time—providing Principal Employers in Faridabad and Noida with a legal shield against contractor defaults. Ensures full adherence to the Delhi Labour Department’s strict contractor accountability guidelines.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital Compliance",
        content:
          "End-to-end EPFO digital compliance support that ensures 100% Aadhaar–UAN–KYC seeding and error-free ECR filing, preventing rejections and monthly compliance disruptions. Ideal for high-attrition, migrant-heavy workforces, this service safeguards operational continuity and protects employers from escalating digital-compliance penalties emphasized by the EPFO Head Office in New Delhi.",
      },
    ],
  },
];

export const epfManagementFaqDelhi = [
  {
    question:
      "We are a software company in Gurugram. If we raise Basic Pay from 35% to the mandatory 50% of CTC, our employee retention will suffer due to lower take-home pay. How do we manage this?",
    answer: `This is the primary challenge in the NCR tech sector. EPFDesk helps you manage this by:

Optimizing the shift: We restructure your allowances (like the Special Allowance) to absorb the 15% increase in Basic Pay, ensuring the overall CTC remains unchanged.

Statutory Savings Communication: We draft transparent employee communications and provide calculators to demonstrate that the reduced monthly take-home is a trade-off for higher long-term savings (PF/Pension) and significantly higher Gratuity payout upon exit, turning a potential negative into a long-term employee benefit.`,
  },
  {
    question:
      "We run a manufacturing facility in Noida. We often face penalties for late PF deposits due to cash flow issues. How can EPFDesk help with the penalties?",
    answer: `Late deposit penalties (Damages under Section 14B) are levied on a tiered, percentage basis and can be severe.

Proactive Filing: We ensure 100% accurate and timely ECR filing to eliminate future penalties.

Mitigation Strategy: For existing penalties, we provide legal defense and appeal strategies before the Regional Commissioner, arguing for reduction or waiver based on judicial precedents—especially for MSMEs facing genuine financial hardship.`,
  },
  {
    question:
      "The Delhi High Court recently upheld mandatory PF for International Workers (IWs). Given the high number of expats in NCR, what is our immediate compliance action?",
    answer: `The Delhi High Court ruling upholds mandatory EPF contribution for all IWs, regardless of salary level. Your immediate actions should be:

Audit the Payroll: Ensure contributions of 12% employer share and 12% employee share on the entire salary (no ceiling) for all International Workers employed post-2008.

Check SSA Eligibility: If the worker is from a Social Security Agreement (SSA) country, contributions may be reduced or exempt. We evaluate each IW’s status to ensure correct treatment and avoid audit violations.`,
  },
];

export const sectionsPFConsultantsChennai = [
  {
    title: "Tamil Nadu’s Unique PF Compliance Landscape",
    description:
      "Tamil Nadu, a powerhouse in advanced manufacturing (auto, auto-ancillary) and technology (IT/ITeS), presents distinct PF challenges that require hyper-local expertise, especially with the nationwide implementation of the New Wage Code (NWC).",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "High-Volume Workforce & Audits in Manufacturing Corridors (Sriperumbudur/Oragadam)",
        content:
          "The industrial belts around Chennai (like Sriperumbudur, Oragadam, and Gummidipoondi) and the southern districts (like Coimbatore, Tiruppur, Madurai) rely on massive, high-volume workforces. The primary risk is often not evasion, but minor, repetitive under-reporting of wages or technical errors in the calculation of allowances for low-to-mid wage employees.",
      },
      {
        color: "bg-white border-gray-300",
        title: "IT/ITeS Sector Payroll Restructuring (OMR/Guindy)",
        content: (
          <>
            <p>
              The IT corridor, similar to other major metros, operates with
              complex CTC structures and a low Basic Pay component. The NWC's
              mandate for $50\%$ of Total Remuneration to be counted as 'Wages'
              for PF calculation necessitates a complete overhaul.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employment (FTE) and Gratuity Liability",
        content:
          "The NWC introduces a major shift for the gig and fixed-term workforce common in the Chennai tech and services sector: FTEs are now eligible for Gratuity after just one year of service (down from five years). This necessitates an immediate, significant increase in actuarial provisioning and liability management for employers utilizing fixed-term contracts.",
      },
    ],
  },
  {
    title: "EPFDesk: New Wage Code Ready PF Solutions for Tamil Nadu",
    description:
      "EPFDesk provides the decisive expertise needed to navigate the region's strict enforcement environment and ensure full compliance with the New Labour Codes.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Definition & Gratuity Audit",
        content:
          "A comprehensive New Wage Code audit that restructures salary components to meet the mandatory 50% ‘Wages’ threshold and recalculates Gratuity liability for all employees. This ensures accurate provisioning, stabilizes statutory PF and Gratuity outflows, and protects businesses from retrospective liabilities and penalties commonly raised by the Chennai and Madurai EPFO offices.",
      },
      {
        color: "bg-white border-gray-300",
        title: "7A Assessment & Legal Defense",
        content: (
          <>
            <p>
              Specialized legal defense against Section 7A assessments and 14B
              penalty orders, using established Madras High Court precedents to
              challenge retrospective wage recalculations and reduce or nullify
              damages. This service safeguards employers across Tamil Nadu’s
              industrial hubs from aggressive EPFO recovery actions, including
              bank account attachments.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour PF Management",
        content:
          "A dedicated contract-labour PF compliance system for the auto and textile sectors that ensures 100% UAN seeding, contractor registration, and strict liability controls. This protects the Principal Employer from secondary PF liability and ensures full alignment with the enhanced social security mandates under the Code on Social Security, 2020.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital Claim Resolution",
        content:
          "A digital claim-resolution service that handles UAN–Aadhaar–KYC seeding and resolves low-value PF claims for unorganized and semi-skilled workers. By fixing service history errors and multiple-UAN issues, it reduces rejection rates, restores employee trust, and significantly lowers HR administrative workload.",
      },
    ],
  },
];

export const epfManagementFaqChennai = [
  {
    question:
      "We are a large manufacturing unit in Sriperumbudur. How should we communicate the compulsory NWC-driven salary restructure, which lowers the take-home pay, to our factory workers?",
    answer: `Transparency and value positioning are essential. The change must be framed not as a pay cut, but as a legally mandated enhancement in long-term security. EPFDesk creates Tamil-language communication kits that clearly explain:

• Higher PF contribution results in a larger, tax-free retirement corpus.  
• The increased ‘Wage’ base significantly boosts the final Gratuity payout.  
• The change is a Central Government mandate (New Wage Code, 2019), ensuring compliance and protecting the company from penalties or audits.  
`,
  },
  {
    question:
      "Our IT company is located on OMR. Since the New Wage Code also impacts Gratuity, is the increased Gratuity liability only for future service?",
    answer: `No. The financial impact is immediate and retrospective.  
Gratuity is calculated on the last drawn Basic/Wage. Since the NWC forces an increase in the Basic component (to meet the 50% Wages threshold), the higher wage base applies to the employee’s **entire past service period**, not only future service.  
We conduct the required actuarial valuation and recommend timely adjustments in your financial books to avoid audit qualification or compliance issues.`,
  },
  {
    question:
      "We received a Section 7A inquiry notice from the Tiruchi EPFO office regarding past under-contributions. What is the best defense strategy in Tamil Nadu?",
    answer: `A strong defense requires both legal precision and factual clarity:

• Legal Argument on Allowances: We analyze the allowances being added back into ‘Wages’. Under the Vivekananda Vidya Mandir principles and the NWC definition, genuine variable or reimbursable allowances (e.g., travel, shift, performance-linked) must be excluded.  
• Beneficiary Identification: Following recent Madras High Court rulings, we compel the EPFO to identify exact beneficiaries and periods of alleged under-contribution. This often reduces the scope and amount of the final assessment significantly.  
`,
  },
];
export const sectionsPFConsultantsHyderabad = [
  {
    title: "The PF Compliance Focus in Hyderabad: The Twin Pillars Challenge",
    description:
      "Telangana, anchored by Hyderabad, is driven by two high-growth, globally scrutinized sectors: Information Technology (IT/ITeS) and Pharmaceuticals/Life Sciences (Pharma). Both sectors face unique, magnified PF and Gratuity compliance risks, which are now being completely redefined by the New Wage Code, 2019, effective November 21, 2025.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITeS Sector",
        content:
          "The massive IT/ITeS companies in the Cyberabad area historically kept 'Basic Pay' low (often $35\%$ or less) to minimize employer PF and Gratuity liabilities, pushing the remainder into various high-allowance components.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pharma/BioTech Sector",
        content: (
          <>
            <p>
              The manufacturing and R&D corridors in Telangana have a high
              concentration of contract and blue-collar workers. The EPFO
              focuses intensely on ensuring Principal Employer (PE) liabilityis
              met, particularly for contract workers in production and
              logistics. Recent regional news highlights stringent enforcement
              against even minor PF defaults.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Fixed-Term Gratuity Rule",
        content:
          "For both the IT and Pharma sectors that increasingly use Fixed-Term Employment (FTE) contracts to manage project-based work, the NWC rule making FTEs eligible for gratuity after just one year (down from five) creates a significant and sudden spike in short-term liability that must be accurately provisioned for.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Compliance for Telangana's Corporate Sector",
    description:
      "EPFDesk provides strategic, localized PF consultancy services that protect your establishment from regulatory overreach and ensure a smooth transition to the New Wage Code regime.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Salary Structure Restructuring",
        content:
          "A customized salary restructuring service that transitions IT and Pharma companies to the mandatory 50% wage floor, accurately modeling the impact on employee take-home pay and the increased Gratuity liability post-NWC. This proactive restructuring eliminates the risk of Section 7A notices from the Hyderabad EPFO and ensures fully compliant payroll architecture with 100% legal protection.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Assessment & Penalty Defense (Sec 7A/14B)",
        content: (
          <>
            <p>
              Specialized legal defense for Section 7A assessments and 14B
              penalty proceedings issued by the Hyderabad and Warangal RPFCs. We
              justify legitimate allowance exclusions, challenge flawed audit
              methodologies, and negotiate penalty waivers—significantly
              reducing compounded damages and interest on past PF dues.{" "}
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "FTE & Gratuity Liability Management",
        content:
          "A dedicated Gratuity liability management service for fixed-term employees, creating accurate actuarial provisioning aligned with the New Wage Code’s 1-year eligibility rule. This ensures fully compliant financial books and prevents sudden liability spikes that will be closely scrutinized in corporate audits post-2025.",
      },
      {
        color: "bg-white border-gray-300",
        title: "UAN/KYC and Member Services",
        content:
          "A comprehensive UAN/KYC management service that ensures bulk Aadhaar seeding, flawless ECR filing, and fast claim resolution for high-attrition IT and Pharma workforces. This reduces employee escalations, strengthens HR efficiency, and ensures full adherence to the Central EPFO’s strict digital compliance mandates.",
      },
    ],
  },
];

export const epfManagementFaqHyderabad = [
  {
    question:
      "We are a mid-sized IT firm in Madhapur. When the NWC mandates a 50% Basic Pay, will our Gratuity liability increase only from November 21, 2025, onward?",
    answer: `No. The financial impact is both retrospective and immediate.  
Gratuity is calculated on the last drawn Basic Salary for the employee’s *entire past service period*.  
Once you increase the Basic Pay to meet the 50% NWC requirement, that higher wage base applies to all previous years of service as well.  

EPFDesk performs the actuarial valuation and ensures the necessary retrospective Gratuity liability is recognized correctly in your financial books to avoid audit issues.`,
  },
  {
    question:
      "Our Pharma unit in Genome Valley offers a variable Production Incentive. Does this incentive count towards the 50% 'Wages' under the New Wage Code?",
    answer: `Yes—most likely.  
Under the NWC, 'Wages' is defined broadly. If your Production Incentive is consistently paid and contractually defined (not a purely discretionary bonus), the EPFO will likely treat it as an includable allowance for calculating the 50% wage threshold.  

If your current Basic Pay + DA is low, the incentive may be **added back** into the wage definition, increasing PF and Gratuity liability.  
EPFDesk reviews your scheme to legally structure it as an excluded allowance where possible, or advise on compliant integration.`,
  },
  {
    question:
      "We have received a 7A Assessment Notice from the EPFO in Hyderabad. What is the typical process and EPFDesk's role?",
    answer: `A 7A notice is a formal inquiry into PF dues.

Process:  
• The Enforcement Officer (EO) summons payroll, ledgers, financials, and attendance records.  
• Multiple quasi-judicial hearings are held.  
• The EO determines alleged under-contributions and issues a formal order.

EPFDesk Role:  
• We represent your company in all 7A proceedings.  
• We factually challenge incorrect allowance additions.  
• We cite Telangana- and national-level judicial precedents to justify your wage structure.  
• We negotiate and limit final dues, ensuring genuine contributions are paid promptly to reduce exposure to heavy 14B penalties.`,
  },
];

export const sectionsPFConsultantsPune = [
  {
    title: "Pune and Maharashtra's Unique PF Compliance Ecosystem",
    description:
      "Maharashtra, particularly the Pune-Pimpri-Chinchwad (PCMC) belt, is a hub for two highly organized, yet compliance-sensitive, sectors: the Automobile/Manufacturing (Detroit of the East) and the Information Technology (IT/ITeS) sectors. The challenges here revolve around high-CTC, variable pay, and the large-scale use of contract and fixed-term employees.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITeS Sector (Hinjewadi, Magarpatta): The Variable Pay Trap",
        content:
          "IT and ITeS companies in Pune traditionally minimise PF liability by keeping Basic Pay low and shifting compensation into PLIs, project bonuses, and other variable allowances. However, the Pune EPFO is actively invoking Section 7A to reclassify these recurring “variable” payouts as camouflaged wages, triggering retrospective PF demands along with heavy Section 14B damages. With the New Wage Code becoming effective on 21 November 2025, organisations must ensure that at least 50% of total remuneration qualifies as statutory ‘Wage’, compelling a significant increase in Basic Pay. This adjustment not only raises ongoing PF contributions but also causes a substantial one-time escalation in Gratuity liability across the entire employee base.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Automobile & Component Manufacturing (PCMC): Fixed-Term Employee Liability",
        content: (
          <>
            <p>
              The PCMC industrial belt depends extensively on fixed-term
              employees and contract labour to support fluctuating production
              demands. Under the New Wage Code, fixed-term employees become
              eligible for Gratuity after just one year of continuous service, a
              major shift from the earlier five-year requirement. This
              accelerated eligibility threshold creates an immediate and
              significant Gratuity liability for Pune’s auto and ancillary
              manufacturing units, which operate with a large FTE workforce and
              frequent contract renewals.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO's High Scrutiny and Fraud Detection (Maharashtra)",
        content:
          "Recent news from the Pune EPFO office highlights intensified vigilance against fraudulent claims and compliance errors (e.g., ABRY scheme fraud). This indicates a period of heightened scrutiny across all compliance filings, making clean records and robust documentation more critical than ever.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Compliance for Pune",
    description:
      "EPFDesk provides strategic, localized PF consultancy, focusing on mitigating the specific financial and legal risks faced by establishments operating under the Pune and Maharashtra RPFC jurisdictions.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Transition",
        content:
          "We help organisations transition smoothly to the New Wage Code by restructuring compensation to meet the mandatory 50% Wage Floor and correcting high-CTC salary models common in IT and Auto sectors. Our support includes conducting a precise Actuarial Valuation to properly recognise the retrospective Gratuity liability on your balance sheet in line with Ind AS 19 / AS 15. This prevents financial shocks by enabling accurate provisioning for the expected 25–50% rise in Gratuity liabilities, while also safeguarding you against retrospective PF under-contribution risks once the NWC becomes effective.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Variable Pay & $7A$Defense (IT/ITeS)",
        content: (
          <>
            <p>
              We provide specialised legal and compliance support for Section 7A
              proceedings in Pune, focusing on defending IT/ITeS employers
              against the retrospective inclusion of variable pay in PF wages.
              Using Supreme Court precedent on the principles of universality
              and consistency of payment, we clearly differentiate genuine PLIs,
              incentives, and performance-linked components from statutory
              ‘Wages.’ This approach significantly reduces exposure to large
              backdated PF assessments and helps mitigate multi-crore Section
              14B damages arising from alleged camouflaged wage structures.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term/Contract Labour Management (PCMC)",
        content:
          "We help manufacturing units in the PCMC industrial belt manage the New Wage Code’s extended social security coverage for fixed-term employees. This includes designing robust pro-rata Gratuity policies, implementing systems to track FTE service continuity, and calculating the accelerated Gratuity liability that becomes payable after just one year of service. Our framework ensures full statutory compliance and protects Principal Employers from disputes, claims, and litigation arising from the NWC’s expanded benefits to fixed-term and contract labour.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Exempted PF Trust Management",
        content:
          "We support Maharashtra’s numerous Exempted PF Trusts by ensuring flawless governance, compliance, and benefits administration. Our services include managing Higher Pension (EPS-95) applications, updating and aligning Trust Deeds with the latest Central EPFO circulars, and strengthening internal trustee processes. This guarantees that PF Trust operations remain fully compliant and resilient amid the EPFO’s rapidly increasing digital audits and regulatory scrutiny.",
      },
    ],
  },
];
export const epfManagementFaqPune = [
  {
    question:
      "Our IT company has a low Basic Pay (30% of CTC). How should we handle the Gratuity liability increase due to the NWC's 50% rule?",
    answer: `The NWC, effective November 21, 2025, requires you to increase your PF 'Wage' base to at least 50% of total remuneration. The biggest impact is on Gratuity, which is calculated on the last drawn Basic Wage for the employee’s entire past service. This means your liability increases retrospectively.  
You must immediately conduct an actuarial valuation to quantify the Past Service Cost and disclose it in your FY 2025–26 financial statements (as per Ind AS 19/AS 15). We manage the valuation, provisioning strategy, and accounting adjustments end-to-end.`,
  },
  {
    question:
      "We are an Auto Component Manufacturer in Pimpri facing a potential 7A audit on our production bonuses. What is the EPFO's view on bonuses in Pune?",
    answer: `The Pune EPFO often attempts to classify all consistent and recurring payments as ‘wages’ for PF purposes. Your defense depends on proving that the production bonus is tied to specific, measurable production or efficiency targets—not a hidden substitute for Basic Pay.  
We prepare the documentation, agreements, and legal reasoning needed to demonstrate that these are genuine incentive-linked payments and therefore not to be included in statutory PF wages.`,
  },
  {
    question:
      "With the NWC, our fixed-term employees are eligible for Gratuity after one year. Does this apply to all our contractual workers in Maharashtra?",
    answer: `The one-year Gratuity eligibility applies strictly to Fixed-Term Employees (FTEs) hired directly by your company. Under the New Wage Code, FTEs must receive pro-rata Gratuity after completing one year of continuous service.  
For workers engaged through contractors, the Principal Employer still carries indirect financial and legal exposure under the Contract Labour Act. We advise on restructuring FTE and contractor arrangements to control this new liability and maintain full compliance.`,
  },
];

export const sectionsPFConsultantsKolkata = [
  {
    title: "Kolkata’s Unique PF Compliance Landscape",
    description:
      "Kolkata’s industrial backbone—historically anchored by the Jute, Tea, Port/Dock, and large Engineering/Manufacturing units—presents a unique and often challenging PF compliance environment characterized by high union presence, legacy wage structures, and intense scrutiny from the West Bengal Labour Commissionerate.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "The Jute and Tea Industry Wage Challenge (Barrackpore, Hooghly Industrial Belt):",
        content:
          "The jute and tea industries in the Barrackpore–Hooghly belt traditionally follow tripartite wage agreements, resulting in complex, low-basic wage structures driven by cost pressures and legacy practices. With the New Wage Code becoming effective on November 21, 2025, employers must ensure that statutory ‘Wages’ (Basic Pay + eligible allowances) constitute at least 50% of total remuneration. This poses a major compliance and financial challenge: the shift to a higher Basic Pay will sharply increase ongoing PF contributions, and more critically, create a substantial retrospective rise in Gratuity liabilities. For labour-intensive units already operating on thin margins, this sudden liability spike can significantly impact profitability unless proactively managed through actuarial valuation and wage restructuring.",
      },
      {
        color: "bg-white border-gray-300",
        title: "High Industrial Relations (IR) Risk and Compliance Disputes",
        content: (
          <>
            <p>
              West Bengal’s industrial landscape is marked by strong labour
              union presence, making PF and Gratuity compliance a frequent
              trigger for industrial disputes and legal escalation. The Kolkata
              Regional EPFO, working closely with the State Labour Department,
              exercises strict oversight on statutory payments. Even minor
              disagreements—such as allowance classification or PF wage
              calculation—can rapidly escalate into conciliation proceedings,
              arbitration, or Section 7A inquiries, which in this region tend to
              be prolonged, highly scrutinized, and often politically sensitive.
              Organisations operating in the state must therefore adopt a
              robust, audit-ready compliance framework to avoid costly IR
              disruptions.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Digital Mandates vs. Traditional Workforce",
        content:
          "The EPFO’s mandatory Aadhaar–UAN seeding deadline of October 31, 2025 poses a major challenge for traditional, labour-intensive sectors such as jute, tea, and MSMEs. These industries depend heavily on large migrant and semi-formal workforces, where documentation gaps are common. Without 100% Aadhaar-UAN linkage, ECR filing becomes impossible, exposing employers to penalties, non-compliance classification, and wage-payment disruptions. This digital mandate requires immediate mobilisation of HR, contractor networks, and enrolment drives to avoid a complete breakdown in statutory compliance.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Solutions for Kolkata",
    description:
      "EPFDesk is the best EPF consultant for West Bengal, specializing in navigating the state's specific labour laws, industrial relations dynamics, and ensuring seamless transition to the New Wage Code.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Restructuring",
        content:
          "We help Jute, Tea, and Engineering sector employers transition smoothly to the New Wage Code by implementing a strategic, phased shift toward the 50% Basic Pay requirement. Our approach includes detailed Gratuity liability quantification under AS 15 to assess and manage the retrospective financial impact, enabling companies to integrate the new wage structure without triggering industrial relations issues. This proactive restructuring significantly reduces the risk of retrospective PF and Gratuity demands, penalties, and compliance disputes arising from earlier allowance-heavy wage practices.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Jute & Tea Wage Agreement Analysis",
        content: (
          <>
            <p>
              We analyse existing Tripartite Wage Agreements in the Jute and Tea
              sectors to identify conflicts with the New Wage Code and protect
              employers during Section 7A proceedings in Kolkata. Our defense
              strategy focuses on clearly distinguishing non-statutory
              production incentives, service-related allowances, and legacy
              components from the statutory ‘Wages’ definition to prevent undue
              PF inclusion. This ensures that your PF calculations remain
              legally defensible in West Bengal’s high–industrial relations
              environment, reducing the risk of disputes, union escalations, and
              litigation.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Digital Compliance & Aadhaar-UAN",
        content:
          "We execute large-scale Aadhaar–UAN seeding and KYC verification drives for the high-volume, often migrant workforce across Kolkata’s industrial clusters. Our process includes data cleansing, bulk UAN correction, and on-ground documentation support to ensure full compliance with the October 31, 2025 mandatory Aadhaar-UAN linkage deadline. This guarantees uninterrupted ECR filing and prevents operational breakdowns, penalties, and employee unrest triggered by an employer’s inability to deposit statutory PF contributions.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Labour Law & Audit Support",
        content:
          "We provide comprehensive compliance management across EPF, Professional Tax, and the West Bengal Labour Welfare Fund Act, 1974, ensuring seamless adherence to both Central and State labour laws. Our team prepares and maintains all statutory registers, challans, wage records, and contractor documentation to meet the standards of the joint, centralised inspections now frequently conducted by the State Labour Department. This end-to-end support ensures your establishment remains fully audit-ready, penalty-free, and compliant with all regulatory obligations unique to West Bengal.",
      },
    ],
  },
];

export const sectionsPFConsultantsAhmedabad = [
  {
    title: "Ahmedabad’s Specific PF Compliance Challenges",
    description:
      "Ahmedabad, historically known as the 'Manchester of the East' and now a major hub for Pharma, Chemicals, and diversified manufacturing MSMEs, faces unique PF compliance challenges driven by cost-sensitive industries, high export dependency, and the upcoming shift under the New Wage Code (NWC).",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Textile and MSME Sector: The Low Basic Wage Legacy",
        content:
          "Textile and garment exporters, along with MSMEs in clusters such as Naroda, Vatva, and Odhav, have long relied on low Basic Pay structures to reduce PF, ESI, and Gratuity outflows and stay cost-competitive in global markets. However, the Ahmedabad Regional PF Office actively scrutinizes these allowance-heavy salary models, frequently treating recurring allowances as camouflaged wages. This often triggers Section 7A proceedings, resulting in substantial retrospective PF demands, interest, and penalties. Organisations in these sectors must review and restructure wage components to avoid costly compliance exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Pharmaceutical and Chemical Industry: Variable and Performance Pay",
        content: (
          <>
            <p>
              Pharmaceutical and chemical companies—particularly those in the
              Gota and S.P. Ring Road industrial corridors—commonly use
              sophisticated CTC structures with significant Performance-Linked
              Incentives (PLI), sales bonuses, and productivity pay. These
              variable components are increasingly scrutinized by the EPFO,
              which examines whether they are paid consistently and universally,
              and therefore qualify as ‘Basic Wages’ for PF purposes. If
              classified as such, employers may face large retrospective PF
              liabilities, interest, and penalties. For high-skill,
              incentive-driven industries, proactive structuring and
              documentation are essential to prevent costly compliance exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Wage Code (NWC) Deadline Shock (Nov 21, 2025):",
        content:
          "The New Wage Code, effective November 21, 2025, requires that statutory ‘Wages’—used for PF, Gratuity, and ESI—must be at least 50% of total remuneration. This poses a major compliance shock for Ahmedabad’s textile and manufacturing units, which traditionally maintain very low Basic Pay to manage labour costs. Once implemented, the NWC will force an immediate increase in monthly PF contributions and create a substantial retrospective Gratuity liability, since Gratuity must be recalculated on the revised Basic Wage for the employee’s entire service tenure. For thousands of units across the region, this transition represents a significant financial and operational restructuring challenge.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Compliance for Gujarat",
    description:
      "EPFDesk provides strategic, localized PF consultancy, focusing on mitigating the specific financial and legal risks faced by establishments operating under the Ahmedabad RPFC jurisdiction.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Transition",
        content:
          "We help Textile and MSME units transition smoothly to the New Wage Code by redesigning low-basic wage structures to meet the mandatory 50% Wage Floor. Our team conducts detailed actuarial valuations as required under AS 15, enabling accurate provisioning for the substantial increase in Gratuity liability that results from this shift. This proactive restructuring prevents financial shocks and protects your organisation from NWC-related penalties, retrospective non-compliance risks, and sudden spikes in employee benefit cost.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Variable Pay & $7A$ Defense (Pharma/Chemical)",
        content: (
          <>
            <p>
              We provide specialised documentation support and legal
              representation for Section 7A proceedings involving Pharma and
              Chemical sector employers in Ahmedabad. Our approach focuses on
              clearly evidencing that Performance-Linked Incentives (PLI), sales
              commissions, and other variable allowances are non-universal and
              conditional, ensuring they are excluded from the PF wage base in
              line with established Supreme Court principles on universality and
              regularity of payment. This structured defense significantly
              reduces the risk of retrospective PF demands, including backdated
              contributions, 12% interest, and 25–100% penal damages, protecting
              your organisation from substantial financial exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Compliance for MSMEs & New Units",
        content:
          "We deliver complete, end-to-end statutory compliance support for MSMEs and new establishments across GIDC hubs such as Vatva and Naroda. This includes timely ECR filing, full UAN/KYC seeding management, and adherence to the Gujarat Labour Welfare Fund (GLWF) and all state-specific labour regulations. By automating and managing these complex, recurring statutory processes, we ensure uninterrupted operations—allowing MSMEs to stay focused on production, exports, and growth without the risk of compliance lapses.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Deducted but Not Deposited (DND) Cases",
        content:
          "We conduct detailed forensic audits and monthly reconciliations to eliminate Deducted but Not Deposited (DND) risks—an area under intense scrutiny by the Ahmedabad PF Commissionerate. Our process ensures every rupee deducted from employees’ salaries is correctly tracked, matched, and deposited on time, preventing the serious compliance failures that have led to high-profile enforcement actions in the region. This proactive approach protects directors and proprietors from criminal prosecution under IPC Sections 406/409 (Criminal Breach of Trust) and ensures your establishment remains fully compliant and audit-ready.",
      },
    ],
  },
];
export const sectionsPFConsultantsSurat = [
  {
    title: "Surat’s Unique PF Compliance Crucible",
    description:
      "Surat's economy is powered by two massive, interconnected, and globally competitive industries: the Diamond Cutting & Polishing Hub (Varachha, Katargam) and the Man-Made Fabric (MMF) Textile & Power Loom clusters (Sachin GIDC, Pandesara). These sectors share a critical, deeply rooted compliance challenge: informality and a historical aversion to statutory wages.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Diamond Industry Piece-Rate Problem (Ratnakalakar Wages)",
        content:
          "Surat’s diamond industry relies heavily on piece-rate wages for Ratnakalakars, where earnings are based on carats polished and supplemented by large production incentives. These payments are often irregularly documented or intentionally structured outside the scope of ‘Basic Wages’ to limit statutory liabilities. The Surat Regional PF Office has long targeted this sector for widespread under-coverage and non-compliance. With the New Wage Code becoming effective on November 21, 2025, employers will be compelled to restructure wages so that at least 50% of total remuneration qualifies as Basic Pay. This will dramatically expand the statutory PF and Gratuity base, forcing a substantial portion of piece-rate and incentive income into compliable wages—resulting in sharp increases in monthly PF dues and a major retrospective Gratuity liability spike across the sector.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile and Power Loom Cost Structure Challenge",
        content: (
          <>
            <p>
              The MMF and Power Loom sector—characterized by thin margins,
              fragmented operations, and intense export pressure—traditionally
              minimizes statutory costs by keeping Basic Pay extremely low and
              loading wages with allowances. Under the New Wage Code, this model
              becomes unsustainable. If excluded allowances such as HRA,
              conveyance, or meal benefits exceed 50% of total remuneration, the
              excess must be added back into statutory ‘Wages’, instantly
              increasing the PF-liable base. This will cause a steep rise in
              monthly PF contributions and trigger a substantial Gratuity
              liability spike, putting severe financial pressure on thousands of
              MSMEs operating within Gujarat’s GIDC clusters.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The High IR and Layoff Risk",
        content:
          "Surat's export-driven industries are sensitive to global demand (e.g., US tariffs, as reported in the news). During recent slowdowns, mass layoffs have been reported, often leading to workers demanding unpaid PF and Gratuity. The lack of proper statutory documentation in the past makes defending against these claims extremely difficult for employers in the Surat Labour Commissionerate and EPFO $7A$ hearings.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Solutions for Surat's Industrial Giants",
    description:
      "EPFDesk is the best EPF consultant for Surat, offering specialized expertise to address the complexity of piece-rate wages and managing the massive financial transition mandated by the New Wage Code.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Wage Structuring",
        content:
          "We design customised New Wage Code–compliant wage structures for Diamond and Textile sector employers, ensuring that statutory ‘Wages’ meet the mandatory 50% Basic Pay requirement. Our approach includes detailed modelling of the retrospective Gratuity liability created by the higher wage base, enabling accurate provisioning and financial planning. This proactive restructuring protects cost-sensitive industries from severe, unexpected backdated PF and Gratuity demands, safeguarding margins and ensuring full NWC compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Diamond Piece-Rate/Incentive Compliance",
        content: (
          <>
            <p>
              We evaluate and document the wage structures used for Ratnakalakar
              piece-rate and production incentive payments, ensuring a clear
              legal distinction between genuinely variable earnings and
              components that may be construed as fixed wages. This distinction
              is critical during Section 7A inquiries, where the Surat Regional
              PF Office often attempts to classify the entire piece-rate income
              as PF-liable wages. Our structured analysis and documentation
              provide a strong, defensible framework that safeguards employers
              from high-value 7A assessments and prevents punitive inclusion of
              variable production income into the PF wage base.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile & Power Loom Contract Labour",
        content:
          "We conduct end-to-end audits and compliance oversight for contract labour in the Textile and Power Loom sectors, ensuring full adherence to PF regulations and the Gujarat Labour Welfare Fund (GLWF) requirements. Our service includes reviewing vendor agreements, verifying statutory deposits, and aligning contractor engagements with the New Wage Code’s stricter definitions of core vs. non-core activities. This protects Principal Employers from penal liability arising out of contractor non-compliance—an especially critical risk in Surat’s GIDC clusters—while strengthening overall supply chain stability and operational continuity.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Labour Relations & Retrenchment Support",
        content:
          "We support employers in formalizing employee records—including appointment letters, wage slips, and statutory registers—to meet the documentation standards required under the New Wage Code. This foundation is essential for conducting legally defensible layoff and retrenchment processes, especially in industries prone to volatility and workforce fluctuations. By ensuring accurate calculation and proper documentation of all termination benefits (PF, Gratuity, Bonus, and others), we significantly reduce the risk of industrial disputes and IR-related litigation in high-turnover environments.",
      },
    ],
  },
];

export const sectionsPFConsultantsGurgaon = [
  {
    title:
      "Gurugram’s Core PF Compliance Challenge: The $7A$ Risk on Variable Pay",
    description:
      "Gurugram (formerly Gurgaon), the financial and technology hub of the National Capital Region (NCR), is defined by its massive presence of Fortune 500 MNCs, IT/ITES companies (Cyber City, Sohna Road), BPOs, and the high-value Automotive cluster (Manesar). The city's PF challenges are not about evasion, but about the legal classification of sophisticated, modern compensation structures.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "IT/BPO Sector: The Non-Statutory Allowances and Performance Pay",
        content:
          "IT and BPO companies in Cyber Hub, Udyog Vihar, and Sector 44 commonly rely on low Basic Pay and a wide range of non-statutory allowances—such as Special Allowance, Project Allowance, and Retention Bonuses—to optimize tax and PF outflows. The Haryana Regional PF Office is now intensely examining these structures under Section 7A. Any allowance that appears universal, uniformly paid, or not tied to a genuine, specific reimbursement is reclassified as part of ‘Basic Wages’. This frequently results in substantial 7A demand notices, requiring employers to pay retrospective PF contributions, 12% interest, and penalties of up to 100% of the assessed arrears. Organisations must therefore review and document their CTC structures carefully to avoid major compliance exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "MNC & Expatriate PF Compliance",
        content: (
          <>
            <p>
              Global Capability Centres (GCCs) and multinational companies
              frequently employ expatriate employees from countries that may or
              may not have a Social Security Agreement (SSA) with India.
              Missteps in correctly classifying these employees, misapplying or
              failing to obtain the Certificate of Coverage (CoC), or
              incorrectly computing PF liability for non-SSA nationals can
              trigger significant statutory violations. These errors often
              result in high-value PF demands, international compliance
              complications, and reputational risk. Proper documentation, treaty
              interpretation, and compliance structuring are essential to avoid
              costly penalties and cross-border regulatory disputes.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Wage Code (NWC) Deadline Shock (Nov 21, 2025)",
        content:
          "The New Wage Code, becoming effective on November 21, 2025, caps all PF-excluded allowances at a maximum of 50% of total remuneration. This poses a major compliance shock for Gurugram’s IT, BPO, and Fintech companies, which traditionally operate with very low Basic Pay and high allowance-loaded CTC structures. Under the NWC, employers will be compelled to significantly increase the Basic Wage component, triggering an immediate rise in monthly PF and ESI contributions. More critically, the higher Basic Wage will create a large retrospective spike in Gratuity liability, as Gratuity must be recalculated on the revised wage base for the employee’s entire service period. This represents a substantial financial and operational shift for thousands of companies across the region.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Compliance for Gurugram’s Corporate Sector",
    description:
      "EPFDesk provides the specialized, high-stakes compliance and legal defense required by Gurugram's multinational and high-growth environment.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Structuring",
        content:
          "We specialise in high-value CTC restructuring for MNCs and IT firms to ensure full compliance with the New Wage Code’s requirement that PF-excluded allowances remain below the 50% threshold. Our modelling prevents the forced reclassification of allowances into Basic Pay, helping companies manage the resulting surge in PF and ESI contributions. We also quantify and plan for the retrospective Gratuity liability in accordance with AS 15, ensuring financial stability and 100% NWC compliance while protecting your organisation from significant penalties and compliance shocks.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Variable Pay and $7A$ Defense",
        content: (
          <>
            <p>
              We provide expert legal representation before the Gurugram EPFO to
              defend employers against Section 7A notices, which frequently
              challenge Performance Bonuses, PLIs, Special Allowances, and other
              variable pay components—especially in hubs like Sector 32 and
              Udyog Vihar. Our defence strategy relies on strong legal precedent
              to clearly distinguish genuinely variable, conditional payments
              from statutory ‘Wages,’ preventing them from being added to the PF
              wage base. This approach significantly reduces exposure to
              retrospective PF dues, interest, and heavy penalties, safeguarding
              companies from multi-million-rupee compliance liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Expatriate & Social Security Agreement (SSA) PF",
        content:
          "We provide specialised global mobility and expatriate PF compliance support for MNCs, ensuring accurate application of Certificates of Coverage (CoC) for employees from Social Security Agreement (SSA) countries such as the US, UK, and South Korea. Our service ensures correct PF contributions or exemptions for international assignees, preventing double social security taxation and aligning payroll practices with international treaty obligations. This end-to-end compliance framework protects organisations from complex cross-border legal, financial, and regulatory risks associated with expatriate workforce management.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Automotive & Manufacturing (Manesar/Dharuhera)",
        content:
          "Automotive & Manufacturing (Manesar/Dharuhera)	Contract Labour and Staffing Solutions: Comprehensive audit and compliance oversight for large manufacturing units, focusing on contractual employee PF coverage, ESI registration in Haryana, and robust documentation to prevent liabilities falling onto the principal employer.	Reduces Operational Risk:Ensures a clean supply chain compliance record, which is critical for large-scale, high-scrutiny manufacturing operations.",
      },
    ],
  },
];

export const sectionsPFConsultantsNoida = [
  {
    title: "Noida’s Unique PF Landscape: Scale, Speed, and Statutory Risk",
    description:
      "Noida (New Okhla Industrial Development Authority) is an industrial and commercial powerhouse driven by a few dominant, high-growth sectors: Large-Scale Electronics Manufacturing (Samsung, Oppo, Vivo), IT/ITES/BPO (Sector 62, 132), and a vibrant Media and Startup ecosystem. The core challenge here is managing scale-up velocitywith rigorous UP-based statutory compliance.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Electronics Manufacturing: The Contractual Workforce Challenge",
        content:
          "Electronics manufacturing units and their supply-chain vendors in Greater Noida and YEIDA depend extensively on contract labour and fixed-term employment to handle rapid production cycles, especially in segments like mobile display assembly. A major compliance pitfall in this ecosystem is the Principal Employer’s liability for PF lapses committed by contractors. The Noida Regional PF Office rigorously enforces this obligation, frequently holding large manufacturers accountable for PF contributions across the entire on-site workforce. When contractors default, companies often face multi-crore Section 7A assessments, making robust contractor compliance monitoring and documentation essential for risk mitigation.",
      },
      {
        color: "bg-white border-gray-300",
        title: "IT/Startups/Media: The Low-Basic-Pay Model",
        content: (
          <>
            <p>
              Startups, IT firms, and media companies in hubs like Sector 16 and
              Film City traditionally use low Basic Pay and high allowances or
              special pay to maximise employee take-home salary and minimise PF
              and Gratuity outflow. Under the New Wage Code, effective November
              21, 2025, this model becomes unsustainable. The Code mandates that
              at least 50% of Total Remuneration must qualify as statutory
              ‘Wage’, forcing a significant increase in the Basic Pay component.
              This will simultaneously raise monthly PF contributions and create
              a large retrospective Gratuity liability, as Gratuity must be
              recalculated on the new, higher wage base for the employee’s
              entire past service. For high-growth companies, this represents a
              major payroll restructuring and financial risk that must be
              proactively managed.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "UP Labour Laws and Retrenchment",
        content:
          "Noida operates under Uttar Pradesh labour law jurisdiction. High employee turnover, especially in BPOs and the startup sector, requires precise documentation for separations. Failure to correctly compute final dues (PF, Gratuity, and notice period pay) under the new, stricter NWC definitions leads to costly and drawn-out industrial disputes at the Noida Labour Commissionerate.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Solutions for Noida’s Rapid Growth",
    description:
      "EPFDesk is uniquely positioned to handle the complexities of PF compliance in Karnataka, combining legal expertise with an in-depth understanding of the state’s high-tech and industrial payroll dynamics.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Payroll Re-structuring",
        content:
          "We design customised New Wage Code–compliant payroll structures for IT, Media, and Startup companies, ensuring the mandatory 50% Basic Wage floor is fully achieved. Our service includes detailed modelling of the financial impact on Gratuity provisions in accordance with AS 15, along with comprehensive updates to all Uttar Pradesh employment contracts to reflect the new statutory requirements. This proactive restructuring prevents EPFO penalties for non-compliant wage models and ensures a smooth, controlled transition to the NWC regime while managing the inevitable rise in statutory payroll costs.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Liability & Audits",
        content: (
          <>
            <p>
              We provide comprehensive third-party PF compliance management for
              large electronics manufacturers in Greater Noida by conducting
              rigorous vendor PF audits and verifying timely, accurate
              contributions by all contractors. This ensures complete statutory
              adherence across the supply chain and protects the Principal
              Employer from being held liable under Section 7A for contractor
              non-compliance. By closing this critical risk gap, we safeguard
              manufacturers from multi-crore liabilities and strengthen overall
              compliance integrity in Noida’s high-volume manufacturing
              ecosystem.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "PF $7A$Assessments & Legal Defence",
        content:
          "We offer specialised legal representation before the RPFC, Noida to defend employers against Section 7A under-contribution assessments. Our defence strategy is built on robust justification of allowance exclusions, precise wage-component analysis, and the latest legal interpretations of ‘Wages’. This approach significantly reduces exposure to retrospective PF dues, 12% interest, and heavy penalties. By mitigating these high-stakes financial risks, we help organisations protect capital, maintain compliance integrity, and ensure uninterrupted operations in the competitive NCR landscape.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee (FTE) Gratuity",
        content:
          "We help IT, BPO, and service-sector employers restructure their Fixed-Term Employment (FTE) contracts to comply with the New Wage Code requirement of pro-rata Gratuity after just one year of continuous service. Our support includes designing compliant FTE templates, updating policy frameworks, and accurately provisioning the accelerated Gratuity liability in line with the Code on Social Security. By integrating precise actuarial calculations into your financial statements, we ensure full compliance and prevent unexpected, unbudgeted expenses arising from the new FTE Gratuity mandate.",
      },
    ],
  },
];
export const sectionsPFConsultantsJaipur = [
  {
    title: "Jaipur's Dual PF Challenge: Informal Labor & The New Wage Code",
    description:
      "Jaipur, the Pink City presents a unique duality in its labor market. Its economy is powered by traditional, labor-intensive industries (Gems & Jewellery, Handicrafts) often characterized by high volumes of unorganized and marginal workers, alongside a rapidly expanding formal IT/Fintech/Service sector located in areas like the Malviya Industrial Area and Mahindra World City SEZ.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Gems & Jewellery/Handicrafts Sector: Formalization Risk",
        content:
          "Jaipur’s Gems, Jewellery, and Handicrafts sector relies heavily on casual, piece-rate, and contract labour, particularly among artisans working with coloured gemstones. Many units operate with informal or partially documented workforces, leading to widespread misclassification and gaps in PF coverage. The Rajasthan Regional PF Office has intensified enforcement in this sector, closely examining payroll records and worker classification. For established exporters and large suppliers, this creates a substantial retrospective PF liability risk, as undocumented or misclassified workers can trigger large Section 7A assessments, interest, and penalties. Proactive documentation and compliance formalisation are essential to mitigate this growing regulatory exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Tourism & Hospitality: Seasonal Employment and Gratuity",
        content: (
          <>
            <p>
              The tourism and hospitality sector—which depends heavily on
              seasonal staff and Fixed-Term Employees (FTEs) in hotels, resorts,
              and travel operations—has traditionally structured pay to minimize
              long-term benefit obligations. Under the New Wage Code (effective
              November 21, 2025), all FTEs become eligible for pro-rata Gratuity
              after just one year of continuous service. This marks a major
              policy shift that compels hotel chains, resorts, and tour
              operators to overhaul their HR frameworks and significantly
              increase Gratuity provisioning. For a sector with high workforce
              churn and seasonal hiring cycles, this creates a substantial new
              financial and compliance burden that must be proactively managed.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "MSME Compliance Burden",
        content:
          "MSMEs make up more than 90% of Rajasthan’s industrial base and already operate under heavy compliance pressure. The New Wage Code, with its mandatory 50% Basic Wage floor, now requires these units to completely overhaul their payroll structures—significantly increasing statutory costs and administrative workload. This transition poses major financial and operational challenges for small and mid-sized enterprises. EPFDesk helps MSMEs navigate this shift through expert wage restructuring, statutory alignment, and end-to-end compliance support, ensuring a smooth and fully compliant transition to the NWC regime.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready PF Compliance for Rajasthan Businesses",
    description:
      "EPFDesk provides strategic PF advisory, legal defense, and seamless transition planning for the Jaipur market, focusing on formalizing the informal workforce and mitigating NWC financial shock.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Gems & Jewellery Sector Formalization",
        content:
          "We conduct detailed PF audits for Gems & Jewellery export units (EOUs) and manufacturers, mapping and documenting all categories of workers—including home-based artisans, job-workers, and informal labour—to ensure 100% statutory coverage. This comprehensive formalization prevents the severe financial consequences of Section 7A orders arising from undeclared or misclassified workers. By mitigating retrospective PF dues, interest, and penalties, we protect exporters’ liquidity and compliance integrity—critical for businesses navigating international trade pressures, tariff obligations, and demanding global supply chains.",
      },
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Restructuring",
        content: (
          <>
            <p>
              We provide end-to-end NWC-compliant payroll restructuring for IT,
              Fintech, retail, and other large employers, ensuring that
              PF-excluded allowances remain below the 50% cap mandated by the
              New Wage Code. Our modelling accurately captures the resulting
              increase in PF contributions and the significant Gratuity
              liability spike, since Gratuity must now be calculated on the
              higher NWC-defined wage base. We also update all statutory payroll
              records with the Rajasthan EPFO, ensuring full compliance and a
              smooth transition to the new wage framework.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Tourism & Hospitality FTE Liability",
        content:
          "We offer specialised 7A legal defence and appellate representation before the RPFC, Jaipur, addressing Show-Cause Notices and assessment orders issued by the Rajasthan PF Commissioner. Our defence focuses on robust legal justification for variable allowances, incentives, and bonus structures commonly used in competitive service industries, ensuring they are not wrongly included in the PF wage base. By challenging improper reclassifications and defending allowance structures with strong precedent, we help organisations avoid substantial arrears, 12% annual interest, and penal damages—effectively protecting capital and maintaining compliance stability.",
      },
    ],
  },
];
export const sectionsPFConsultantsLucknow = [
  {
    title:
      "Lucknow’s Unique PF Landscape: Government Contracts and Evasion Risk",
    description:
      "As the administrative capital of Uttar Pradesh, Lucknow's economy is heavily driven by Government Contractors (in infrastructure, IT services, and logistics), the burgeoning IT/ITES sector (particularly around Gomti Nagar Extension, the proposed AI City, and Vibhuti Khand), and the highly decentralized Traditional/Handicraft industry (Chikankari).",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Government & PSU Contractors: The $\mathbf{7A}$ Liability Nightmare",
        content:
          "Contractors supplying manpower, security, housekeeping, and IT services to UP Government Departments, PSUs, and municipal bodies often operate through multi-layered vendor chains where wages are tightly cost-controlled. This frequently leads to PF under-deposits, delayed remittances, or miscalculations to stay competitive in low-budget tenders. The Lucknow Regional PF Office rigorously scrutinizes such contractors, and repeated CAG audit findings have highlighted chronic lapses in PF remittances across government-linked projects. These failures expose contractors—and, in many cases, the Principal Employer—to severe retrospective Section 7A assessments, interest, and penal damages. For businesses servicing the public sector, this represents a major compliance and financial risk requiring immediate, structured remediation.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Wage Code (NWC) Shock for Service/IT Sector",
        content: (
          <>
            <p>
              Major service-sector employers in Lucknow—especially IT firms,
              real estate companies, and large corporates in Gomti
              Nagar—commonly structure salaries with a low Basic Pay (30–40% of
              CTC) to increase take-home pay and reduce PF and Gratuity outflow.
              The New Wage Code, effective November 21, 2025, makes this model
              unsustainable by enforcing a mandatory 50% Basic Wage floor. This
              will require a complete overhaul of payroll structures, sharply
              increasing monthly PF contributions and significantly raising
              long-term Gratuity provisioning costs for every major
              establishment in the region. Proactive modelling and restructuring
              are essential to avoid financial shocks and ensure seamless NWC
              compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Traditional (Chikan) & MSME Sector Compliance",
        content:
          "Lucknow's famous Chikan work industry, like many regional handicrafts, relies on a vast, decentralized, and often informal workforce of artisans and home-based workers. Extending PF coverage to this skilled but unorganized sector is a major focus of formalization, demanding careful documentation and wage formalization to avoid punitive retrospective penalties.",
      },
    ],
  },
  {
    title: "EPFDesk:NWC-Ready PF Strategy for Lucknow’s Businesses",
    description:
      "EPFDesk delivers targeted, legal-backed PF consultancy, protecting established entities and high-growth sectors from the specialized compliance risks of the UP administrative zone",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Contractual Liability Defense (Government/PSU)",
        content:
          "We provide specialised Contract Labour PF compliance audits and 7A legal defence for firms engaged in UP Government and PSU tenders. Our service ensures full statutory compliance across all vendor layers, shielding the Principal Employer from massive retrospective Section 7A demands, 12% annual interest, and heavy penalties imposed by the Lucknow RPFC. By strengthening documentation, wage records, and contractor oversight, we also reduce exposure to corruption-linked scrutiny—particularly important in sectors repeatedly flagged for compliance gaps in recent CBI and CAG reports. This comprehensive framework safeguards financial stability and operational continuity for government-facing contractors.",
      },
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Redesign & Gratuity",
        content: (
          <>
            <p>
              We deliver comprehensive NWC-compliant payroll redesign for
              IT/ITES and Real Estate firms in the Gomti Nagar corridor,
              ensuring strict adherence to the New Wage Code’s 50% statutory
              ‘Wage’ definition. Our modelling covers the full financial impact—
              including the rise in PF contributions, the substantial increase
              in Gratuity liability, and the complete update of all employment
              and payroll documentation required for compliance. This proactive
              restructuring prevents retrospective wage reclassification,
              secures full NWC compliance before the deadline, and protects
              companies from major financial shocks once the Code becomes fully
              operational.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Handicraft/MSME Workforce Formalization",
        content:
          "We help Chikankari units, handicraft exporters, and MSMEs formalize their artisan and piece-rate workforce in line with statutory requirements. Our service includes accurate worker classification, PF eligibility mapping, documentation of home-based and job-work artisans, and end-to-end compliance setup—critically important as enforcement teams increasingly target the unorganized sector. This structured formalization builds a strong legal foundation for MSMEs, ensuring full alignment with the expanded definition of ‘Worker’ under the Code on Social Security and enabling sustainable growth without compliance disruptions.",
      },
    ],
  },
];
export const sectionsPFConsultantsIndore = [
  {
    title: "Indore’s Dual PF Pressure: SEZ Growth vs. The Unorganized Sector",
    description:
      "Indore, often referred to as 'Mini Mumbai' and consistently ranked India's cleanest city, operates a high-growth, diversified economy. The city's primary PF compliance challenges arise from the stark contrast between its highly-formalized, rapid-growth sectors and its traditional, mass-employment manufacturing hubs",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "IT/ITES and Automobile Sector (Super Corridor & Pithampur SEZ): The New Wage Code (NWC) Disruption",
        content:
          "Indore’s IT/ITES hub (including Crystal IT Park) and the large-scale manufacturing ecosystem in Pithampur SEZ traditionally depend on CTC structures with low Basic Wages to minimise PF and Gratuity outflow while maximising employee take-home pay. The New Wage Code (effective November 21, 2025) fundamentally disrupts this model by mandating that statutory ‘Wages’ must form at least 50% of total remuneration. This forces every major employer to redesign salary structures, immediately raising the PF base and creating a substantial, long-term Gratuity liability spike across the workforce. Without expert financial modelling and phased restructuring, companies risk sudden, unbudgeted increases in payroll costs and major compliance exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Textile, Food Processing, and Namkeen Clusters: Coverage and Arrear Risk",
        content: (
          <>
            <p>
              Indore’s textile, food processing, and iconic Namkeen
              manufacturing clusters rely heavily on contract, casual, and
              piece-rate workers—many of whom remain outside the PF system or
              are paid through misclassified wage components. Recognizing this
              gap, the Indore Regional PF Office has launched an aggressive
              Employees’ Enrolment Campaign, aiming to formalize over 50,000 new
              members from these sectors. This expansion drive signals
              heightened scrutiny of unorganized and semi-formal units, exposing
              numerous MSMEs to significant retrospective Section 7A liabilities
              for past non-compliance. Proactive workforce formalization and
              payroll restructuring are now essential to avoid large arrears,
              interest, and penalties.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Digital Filing and UAN Mismatch",
        content:
          "The EPFO’s digital push in the region, including mandatory Aadhaar-UAN seeding, still faces hurdles. Delayed Electronic Challan cum Return (ECR) filings and unresolved KYC mismatches are common, leading to unnecessary penalties and interest at p.a.",
      },
    ],
  },
  {
    title: "EPFDesk: New Wage Code Ready PF Solutions for Indore",
    description:
      "EPFDesk provides strategic, future-proof PF advisory, legal defense, and seamless transition services, specifically mitigating the complex risks faced by Madhya Pradesh's industrial heartland.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Restructuring & Modeling",
        content:
          "We deliver comprehensive NWC-aligned payroll restructuring and financial modelling for high-salary industries such as IT/ITES, Pharma, and Auto Ancillary. Our analysis accurately quantifies the impact of the 50% Basic Wage floor on both PF contributions and Gratuity liabilities, helping organisations transition to the new structure with minimal disruption to employee take-home pay. By converting the mandatory rise in statutory costs into a planned, predictable financial provision, we protect employers from sudden payroll shocks and ensure full, future-proof compliance with the New Wage Code.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pithampur SEZ Contract Labour Compliance",
        content: (
          <>
            <p>
              We conduct comprehensive PF audits across the multilayered
              contract labour networks within the Pithampur SEZ and Industrial
              Area, ensuring that every contract worker is properly covered and
              compliant under PF regulations. This protects Principal Employers
              from severe Section 7A demands and punitive damages regularly
              imposed by the RPFC for contractor defaults. Our compliance
              framework also prevents the retrospective application of the NWC’s
              higher 50% wage definition to undeclared or misclassified contract
              labour—safeguarding organisations from multi-million-rupee
              liabilities and strengthening overall corporate governance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile & Namkeen Sector Formalization",
        content:
          "We manage end-to-end MSME workforce formalization for Indore’s Textile and Namkeen clusters under the EPFO’s Employees’ Enrolment Campaign 2025. Our process brings previously unregistered, casual, or piece-rate workers into the statutory system while leveraging the scheme’s reduced penal charge window to minimize historical PF exposure. This enables MSMEs to legally regularize their labour force, transforming informal workers into a fully compliant asset and aligning with the NWC’s expanded social security mandate—without facing crippling retrospective Section 7A demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital Liaison & Claims",
        content:
          "We serve as your dedicated digital liaison with the Indore Regional PF Office, resolving bulk UAN, KYC, and Member Profile mismatches to ensure seamless ECR filing and fast, error-free claim settlements. By maintaining strong digital compliance hygiene, we prevent filing delays and system rejections that could trigger penalties—especially critical as PF dues will soon be calculated on the higher, NWC-defined statutory ‘Wage’. This ensures uninterrupted statutory operations and a smooth experience for both employers and employees.",
      },
    ],
  },
];
export const sectionsPFConsultantsCoimbatore = [
  {
    title:
      "Coimbatore's Unique PF Challenges: The Mill-to-Foundry Compliance Matrix",
    description:
      "Coimbatore’s economy is dominated by the $\mathbf{Textile}$ industry (dubbed the ‘Manchester of South India’), the large-scale Engineering & Foundry sector, and the crucial Pump Set Manufacturing cluster. These labor-intensive industries face highly specific, high-risk compliance pressures from the Tamil Nadu EPFO and the imminent structural shift imposed by the New Wage Code.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Textile and Foundry Industry: The Contractual Labour-Cost Shock",
        content:
          "Textile mills and foundries across the Coimbatore–Tirupur–Palladam industrial belt rely heavily on contract labour and fixed-term staffing to manage seasonal fluctuations and contain wage costs—often by keeping the Basic Wage artificially low to reduce PF and Gratuity outflows. The Coimbatore Regional PF Office has adopted a strict, zero-tolerance enforcement posture, with multiple recent cases showing the EPFO actively invoking Section 8B recovery powers to attach and auction property of establishments that delay PF remittances—even for short default periods. This aggressive recovery environment creates immediate compliance risk for manufacturers, making timely remittances and airtight contractor compliance essential to avoid severe asset-attachment proceedings.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Wage Code (NWC) Mandate (Effective Nov 21, 2025):",
        content: (
          <>
            <p>
              The New Wage Code, effective November 21, 2025, mandates that
              statutory ‘Wages’ must equal at least 50% of total remuneration.
              For Coimbatore’s labour-intensive textile, engineering, and
              foundry units—where Basic Wage typically sits at 30–40%—this
              triggers a major cost escalation across PF, ESI, and payroll
              budgets. Even more disruptive is the pro-rata Gratuity requirement
              for Fixed-Term Employees (FTEs) after just one year of service.
              This overturns the long-standing practice of maintaining large
              pools of 11-month contract workers, converting what was previously
              a temporary or seasonal cost into a permanent, compounding
              Gratuity liability. Without immediate modelling and restructuring,
              these changes pose a severe financial and operational shock for
              the region’s manufacturing ecosystem.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "MSME and Pump Set Sector: Power Crisis and Penalty Dues",
        content:
          "Small and Micro Enterprises (MSEs) in the engineering and pump manufacturing clusters are vulnerable due to high operating costs (e.g., electricity). When revenue falters, PF remittance often gets deferred. Deferred payment immediately triggers the 12% p.a. interest plus penal damages (up to 100% under Section , which is being vigorously enforced by the RPFC, turning temporary financial stress into crippling legal liability.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready Compliance and Defense for Coimbatore",
    description:
      "EPFDesk provides expert PF legal, financial, and payroll services specifically tailored to navigate the rigorous compliance landscape of the Tamil Nadu industrial belt.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Payroll Transition",
        content:
          "We conduct detailed NWC-focused payroll audits for textile and foundry units, accurately modelling the 12% to 25% increase in total employment cost resulting from the mandatory 50% Basic Wage floor and expanded Gratuity obligations. Our restructuring approach optimizes allowance components to maintain statutory compliance while minimizing disruption to employee take-home pay. By implementing NWC-compliant wage structures ahead of the deadline, we protect your establishment from severe retrospective PF and Gratuity demands, ensuring financial stability and full regulatory compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Recovery & Attachment Defense",
        content: (
          <>
            <p>
              We provide specialised legal defence against aggressive EPFO
              recovery actions under Sections 8B and 14B, including property
              attachment, bank account freezes, and penal damage proceedings
              initiated by the Recovery Officer (RO). Our team negotiates
              structured repayment plans, manages compliance documentation, and
              prevents operational disruption for businesses facing legacy PF
              defaults. This protection is especially critical ahead of the New
              Wage Code rollout, as settling historical Section 14B damages now
              prevents them from being recalculated on the significantly higher
              NWC-mandated wage base, safeguarding your assets and financial
              stability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employment (FTE) Audit",
        content:
          "We conduct comprehensive audits of Fixed-Term Employment (FTE) arrangements for organisations that depend on large pools of contractual or fixed-term workers. Our analysis models the newly mandated pro-rata Gratuity provisioning requirement—triggered after just one year of continuous service under the New Wage Code—to identify hidden liabilities and ensure accurate budgeting. By converting unpredictable, unplanned Gratuity costs into clear, auditable financial provisions, we help companies maintain long-term financial stability while meeting global buyer expectations on social accountability, including emerging standards such as CSDDD.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile & MSME Formalization",
        content:
          "We manage end-to-end worker enrollment and ECR compliance for textile units and MSMEs in the pump-set and ancillary manufacturing ecosystem. Leveraging EPFO initiatives such as the Employees’ Enrolment Campaign, we regularize past coverage gaps with minimal penalty exposure while onboarding previously informal or excluded workers. This formalization ensures every ‘Employee’ is correctly classified under the expanded NWC definition, significantly reducing the risk of RPFC scrutiny, non-coverage findings, and retrospective 7A assessments.",
      },
    ],
  },
];
export const sectionsPFConsultantsVadodara = [
  {
    title:
      "Vadodara's Dual Compliance Threat: High-Value Industry & Contract Labour",
    description:
      "Vadodara, a vital node on the ‘Golden Corridor’ of Gujarat, is driven by massive public sector undertakings (like IPCL, Gujarat Refinery, GSFC) and a sprawling network of GIDC (Gujarat Industrial Development Corporation) estates (Makarpura, Por, Savli). This unique industrial ecosystem faces two critical PF compliance challenges",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Petrochemical, Pharma, and Engineering Giants (GIDC Clusters): The Basic Wage Shock",
        content:
          "Petrochemical, Pharma, and Engineering majors in Makarpura GIDC and nearby industrial clusters traditionally operate with low Basic Wage structures (35–40%) to minimise PF and long-term Gratuity outflow while maximising employee take-home pay. The New Wage Code, effective November 21, 2025, disrupts this model by mandating that statutory ‘Wages’ must constitute at least 50% of total remuneration. This forces every large employer to redesign its CTC framework, triggering an immediate and unplanned 10% to 25% increase in the PF and Gratuity calculation base. Without robust financial modelling and employee-communication planning, companies face significant payroll shocks and morale challenges.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contractual Labour & MSMEs: Hidden Liability and Arrear Risk",
        content: (
          <>
            <p>
              Vadodara’s power transmission, engineering ancillary units (800+
              factories), and smaller textile manufacturers rely extensively on
              migrant and contract labour, many of whom work without proper
              payslips, PF coverage, or statutory documentation. This widespread
              under-compliance creates significant hidden PF and ESIC
              liabilities. Under the PF Act, the Principal Employer is fully
              responsible for any PF default committed by its contractors. The
              Vadodara Regional PF Office is aggressively enforcing this
              obligation, issuing large Section 7A assessments that hold major
              manufacturers liable for unremitted PF contributions across their
              entire outsourced workforce. This results in massive retrospective
              dues, 12% interest, and heavy penal damages—turning contractor
              non-compliance into a severe financial and legal risk for MSMEs
              and large corporations alike.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: New Wage Code Ready PF Solutions for Vadodara",
    description:
      "EPFDesk delivers strategic PF consultancy and legal defense services that are specifically focused on the high-stakes, large-volume compliance requirements of Vadodara's industrial powerhouses.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Restructuring & Cost Control",
        content:
          "We perform a detailed NWC financial stress test for organisations—especially in the Pharma, Petrochemical, and Engineering sectors—to quantify the exact impact of the 50% Basic Wage floor on payroll, PF contributions, and Gratuity provisioning. Based on this analysis, we implement a phased wage restructuring strategy that shifts select allowances into the Basic Wage component while maintaining overall cost control and ensuring 100% statutory compliance. This structured approach prevents sudden budget shocks, provides clear legal alignment with the New Wage Code, and enables companies to manage the inevitable rise in Gratuity and PF obligations in a predictable, financially stable manner.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Liability Shield",
        content: (
          <>
            <p>
              We conduct comprehensive Principal Employer risk audits across
              your contractor and third-party vendor ecosystem within GIDC
              estates, verifying that PF contributions are accurately deposited
              for every contract worker. This audit framework provides a strong
              legal defence against Section 7A assessments, where the PF
              department attempts to recover contractor defaults directly from
              the Principal Employer. By ensuring full statutory coverage and
              airtight documentation, we protect your supply chain from
              retrospective liability. Our approach also prevents the NWC’s
              stricter 50% ‘Wage’ definition and the 1-year Gratuity rule for
              Fixed-Term Employees from being retroactively applied to
              outsourced labour—saving your organisation from substantial
              penalties, interest, and compliance exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Assessment & Legal Defense",
        content:
          "We offer specialised legal representation before the Vadodara Regional PF Office for both Section 7A assessment hearings and Section 14B penal damage proceedings. Our team ensures accurate computation of historical dues, challenges improper wage reclassifications, and negotiates the minimum legally permissible penalties. By resolving current and past non-compliance issues before the New Wage Code takes effect, we help employers avoid far heavier penalties that would otherwise be calculated on the significantly higher NWC-mandated wage base. This proactive defence protects capital, safeguards assets, and stabilises long-term statutory compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Digital Compliance & KYC",
        content:
          "We handle bulk UAN–Aadhaar seeding, KYC updates, and error-resolution for organisations employing large migrant or contract-driven workforces—where mismatches are most common. By ensuring accurate, verified member data, we guarantee smooth and timely ECR filing, preventing costly late-filing penalties and system rejections. This digital compliance framework also maintains high operational efficiency, enabling seamless PF transfers and claim settlements for employees—especially important during the NWC-driven payroll restructuring that will increase statutory contribution volumes and scrutiny.",
      },
    ],
  },
];

export const sectionsPFConsultantsVisakhapatnam = [
  {
    title:
      "Visakhapatnam's Dual Economy: Port Liability Meets Tech Payroll Shock",
    description:
      "Visakhapatnam (Vizag) is undergoing a massive economic transformation. While traditional mega-industries like the Steel Plant (RINL), Vizag Port, and Pharma clusters drive employment, the city is rapidly emerging as a Global Data Center Capital, fueled by investments from giants like Google (AI Data Center Campus) and Reliance-Brookfield.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "The New Tech Hub (IT, GCC, Data Centers): The NWC Payroll Reset",
        content:
          "Vizag’s emerging tech ecosystem—spanning IT parks, Global Capability Centers (GCCs), data centers, and the fast-growing Madhurawada–Anakapalli corridor—typically uses high-CTC salary models with Basic Wage well below 50% to minimize PF and Gratuity outflow. The New Wage Code, effective November 21, 2025, disrupts this approach entirely by mandating that statutory ‘Wages’ must form at least 50% of CTC. This triggers an immediate, organisation-wide payroll reset: PF contributions rise sharply, and Gratuity provisioning increases dramatically, as it must now be calculated on the higher 50% wage base irrespective of the PF ceiling. For high-skill engineering and tech roles, the challenge is twofold—managing the financial impact and effectively communicating the resulting reduction in employee take-home pay.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Traditional Heavy Industry (Steel, Port, Pharma): The Contract Liability Tsunami",
        content: (
          <>
            <p>
              Vizag’s traditional heavy industries—steel, port, logistics, and
              large pharma units—are facing a contract labour liability crisis,
              highlighted by long-standing disputes involving 14,000+ contract
              workers at the Vizag Steel Plant and associated port operations.
              Chronic issues such as PF non-payment, allowance disputes,
              wrongful terminations, and incomplete documentation have created
              massive compliance gaps. The Visakhapatnam Regional PF Office is
              now aggressively invoking Section 7A to hold Principal Employers
              directly liable for their contractors’ failures. As a result,
              large PSUs and port operators are receiving retrospective PF
              demands running into hundreds of crores, including interest and
              penal damages. Without immediate compliance correction and legal
              defence, organisations in these sectors face unprecedented
              financial and statutory exposure.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPFDesk: New Wage Code Ready PF Solutions for Vizag's New Economy",
    description:
      "EPFDesk provides strategic, future-ready PF consulting that addresses the high-stakes complexities of Visakhapatnam’s emerging and established industries.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Data Center & IT Payroll Transformation",
        content:
          "We specialise in implementing the New Wage Code’s 50% Wage Model for high-CTC employees in data centers, IT parks, and Global Capability Centers (GCCs). Our approach models the precise financial impact of shifting high-skill roles to a 50% (or higher) Basic Wage, enabling accurate Gratuity provisioning and controlled PF cost increases. We execute a phased, legally compliant payroll restructuring that avoids sudden budget shocks while aligning compensation structures with NWC requirements. This ensures that fast-scaling tech and data infrastructure firms—such as Google, Sify, and other major players—achieve full compliance before EPFO audits, preventing penalties and scrutiny on complex, globally integrated payroll systems.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Steel/Port Contract Labour Defense",
        content: (
          <>
            <p>
              We provide specialised Principal Employer defence for steel, port,
              logistics, and large industrial establishments facing Section 7A
              demands arising from contractor non-compliance—a recurring issue
              for major PSUs such as RINL. Our service includes comprehensive
              audits of all third-party contracts to ensure full PF coverage for
              contract labour, along with expert representation before the Vizag
              RPFC to minimise Section 14B penal damages. This defence framework
              shields heavy-industry employers from massive retrospective
              liability, particularly as the NWC’s 1-year Gratuity rule for
              Fixed-Term Employees significantly increases the compliance risks
              tied to outsourced and contractor-driven operations.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee (FTE) Liability",
        content:
          "We calculate and provision the New Wage Code’s mandatory 1-year pro-rata Gratuity for Fixed-Term Employees (FTEs) across Pharma, Logistics, and Data Center construction and maintenance operations—industries that rely heavily on contractual staffing. Our modelling identifies and quantifies the full liability impact, converting what would otherwise be unpredictable and unbudgeted Gratuity costs into a transparent, auditable financial provision. This ensures accurate budgeting, full compliance, and long-term financial stability as the NWC becomes operational.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Green Energy & Utility PF Audit",
        content:
          "We conduct comprehensive PF compliance audits for the extensive utility and green-energy workforce supporting large data centers—operations that often require 1-GW scale power infrastructure. Our workforce mapping ensures that all employees, including those engaged through utility and infrastructure contractors (power, water, cooling, renewable energy), are fully covered under PF regulations. This protects data center operators from supply chain PF liabilities and ensures uninterrupted operations. By maintaining strong digital compliance hygiene, we also enable smooth PF transfers and claim settlements for employees in this rapidly expanding sector.",
      },
    ],
  },
];
export const sectionsPFConsultantsNagpur = [
  {
    title: "The Compliance Hot Zone: Nagpur's Industrial Landscape",
    description:
      "Nagpur, the geographic heart of India and the industrial powerhouse of the Vidarbha region, presents a unique and high-stakes PF compliance scenario driven by two major factors: the heavy manufacturing and mining base, and chronic issues within public sector employment.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "MIDC Mega-Clusters (Butibori & Hingna): The Contract Labour Risk",
        content:
          "The massive MIDC industrial clusters of Butibori and Hingna—home to leading Engineering, Steel, Foundry, and FMCG giants—operate through extensive networks of contractors and ancillary units. This heavy dependence on outsourced labour creates significant PF compliance vulnerability. The Nagpur Regional PF Office is aggressively invoking Section 7A to hold large Principal Employers directly liable for unpaid PF contributions of all contract workers, regardless of subcontracting layers. Recent news of contract labour disputes, widespread non-compliance, and even CBI searches involving EPFO offices underscores the heightened enforcement environment. In this climate of intense scrutiny, any lapse in contractor PF compliance can trigger massive retrospective liabilities, interest, and penal damages for major industrial establishments.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Public Sector and Mining Liability (WCL, NMC): Chronic Default",
        content: (
          <>
            <p>
              Nagpur’s public sector ecosystem faces chronic PF compliance
              failures that significantly elevate enforcement pressure on
              private industry. The Nagpur Municipal Corporation (NMC) has
              repeatedly been identified as one of the region’s largest PF
              defaulters, especially in relation to its contractual and
              temporary workforce, setting a stringent benchmark for PF
              enforcement across the district. Similarly, the WCL coal mining
              belt is burdened with long-standing PF disputes involving arrears
              settlement, complex worker histories, and high-stakes Higher
              Pension (EPS-95) claims—issues that have triggered substantial
              litigation and scrutiny from the Nagpur EPFO. This environment of
              persistent public-sector default and ongoing pension disputes
              amplifies the regulatory intensity applied to private employers,
              making airtight PF compliance essential for all establishments in
              the region.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Food Processing (Orange City): The New Wage Code Shock",
        content:
          "Nagpur’s signature fruit and food processing ecosystem—from orange-derived products to leading brands like Haldiram’s, Dinshaws, and Vicco—relies heavily on seasonal labour and allowance-loaded pay structures to control costs. The New Wage Code (effective November 21, 2025) significantly disrupts this model by mandating that statutory ‘Wages’—Basic + DA + Retaining Allowance—must form at least 50% of total remuneration. This shift will sharply increase mandatory PF contributions and trigger a major rise in Gratuity liability, particularly for MSMEs that have historically used variable or incentive-based pay to offset payroll expenses. For Nagpur’s labour-intensive processors, proactive restructuring and cost modelling are essential to avoid severe financial strain and compliance exposure.",
      },
    ],
  },
  {
    title: "EPFDesk: NWC-Ready Compliance in Central India",
    description:
      "EPFDesk provides strategic advisory and forensic audit services tailored to the unique economic and regulatory environment of Nagpur.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Butibori/Hingna Principal Employer Defense",
        content:
          "We provide specialised Principal Employer defence for large MIDC units in Butibori and Hingna, protecting them from aggressive Section 7A and 14B demands issued by the Nagpur RPFC for PF defaults committed by contractors. Our service includes detailed audits of contractor wage and PF records, creation of airtight compliance documentation, and establishing legal firewalls that prevent liability from passing on to the Principal Employer. This proactive framework also safeguards organisations from the retrospective application of the New Wage Code, ensuring that the significantly higher PF and Gratuity costs mandated under the NWC are not unfairly imposed on past or current contract workers when liability is contested.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Salary Restructuring",
        content: (
          <>
            <p>
              We provide comprehensive New Wage Code (NWC) salary restructuring
              for employers across Butibori, Hingna, and surrounding industrial
              zones—covering large manufacturers as well as MSMEs. Our financial
              modelling identifies the exact impact of implementing the
              mandatory 50% Basic Wage floor, and we redesign allowance
              structures to achieve compliance without triggering industrial
              unrest or sharp reductions in employee take-home pay. This ensures
              100% NWC compliance, securing the correct statutory base for PF
              and Gratuity calculations under the new unified ‘Wage’ definition,
              and protecting employers from penalties, retrospective demands,
              and enforcement scrutiny.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPS-95 Higher Pension Claims Management",
        content:
          "We manage end-to-end EPS-95 Higher Pension claim processing for employees in mining, manufacturing, and heavy industry—sectors where contribution histories and arrears calculations are often complex. Our service includes reconstructing service records, correcting PF wage data, coordinating with the Nagpur EPFO, and ensuring applications meet all legal and procedural requirements. With the New Wage Code demanding precise and error-free employee data, resolving legacy pension issues now is essential. Our process restores data integrity, eliminates discrepancies, and prepares organisations for a smooth, compliant transition into the NWC regime.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee (FTE) Liability Audit",
        content:
          "We conduct specialised audits of Fixed-Term Employment (FTE) arrangements to quantify and provision for the New Wage Code’s requirement of pro-rata Gratuity after just one year of continuous service. This is critical for seasonal and labour-intensive industries such as food processing, textiles, and MSMEs that rely heavily on short-term contracts. By converting unpredictable and unbudgeted Gratuity exposure into a clear, predictable financial provision, we help safeguard tight operating margins and ensure full compliance with the NWC’s expanded social security mandate.",
      },
    ],
  },
];
export const sectionsPFConsultantsBhopal = [
  {
    title: "Bhopal's Economic Pillars: Navigating New Compliance Hot Zones",
    description:
      "Bhopal's compliance landscape extends beyond its historical heavy industry, driven by high-growth sectors with severe, yet distinct, statutory risks.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Infrastructure & Construction (DBL, Sagar Group): The Audit Threat",
        content:
          "Bhopal’s major infrastructure players—such as Dilip Buildcon (DBL) and Agrawal Builders (Sagar Group)—depend heavily on project-based, migrant contract labour for metro rail systems, highways, and large residential developments. This multi-layered contract ecosystem creates significant PF compliance exposure. The Bhopal Regional PF Office is aggressively invoking Section 7A, holding Principal Employers directly liable for any PF or ESI defaults committed by subcontractors across project sites. Inadequate documentation, incomplete wage records, or gaps in contractor compliance can trigger enormous retrospective 7A assessments, interest, and even criminal prosecution. For construction companies, airtight PF governance and contract-chain monitoring are now mission-critical to avoiding regulatory and financial shocks.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Pharmaceuticals & Manufacturing (Lupin, EEI, Mandideep): High-Accuracy Compliance",
        content: (
          <>
            <p>
              Mandideep’s major pharmaceutical and manufacturing units—such as
              Lupin Laboratories, EEI Capsules, and multiple biotech
              facilities—operate under strict regulatory environments (GMP, FDA,
              WHO audits), making error-free statutory compliance
              non-negotiable. The New Wage Code’s mandatory 50% Basic Wage rule
              poses a significant challenge, as many skilled operators,
              chemists, and technicians are currently paid through complex,
              allowance-heavy structures. We provide precision-driven payroll
              restructuring that brings compensation into full NWC compliance,
              accurately models the sharp increase in Gratuity liability, and
              ensures zero disruption to production, audits, or regulatory
              certifications. This protects high-risk, high-compliance
              industries from statutory penalties and operational instability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "IT, Startups, & EdTech: The Highly Compensated Gratuity Bomb",
        content:
          "Bhopal's emerging economy is fueled by IT/Software firms (Netlink, Caresoft, TCS/Infosys presence) and EdTech/Digital Marketing startups (often operating from MP Nagar).",
      },
    ],
  },
];

export const sectionsPFConsultantsKanpur = [
  {
    title:
      "Kanpur's Industrial Reality: Export Stress Meets Compliance Overhaul",
    description:
      "Kanpur, the Manchester of the East, faces a unique dual challenge: economic pressure in its core export-oriented sectors (Leather, Textiles) and an impending statutory compliance revolution from the New Wage Code (NWC).",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Leather and Tannery Hub (Jajmau/Unnao): The Compliance Squeeze",
        content:
          "The leather and tannery ecosystem in Jajmau and Unnao faces intense operational pressures—from environmental restrictions (UPPCB/ZLD mandates) to volatile global export tariffs—resulting in high labour turnover and widespread outsourcing. These financial constraints often push units toward low-basic, allowance-heavy wage structures that expose them to significant statutory risk. The Kanpur Regional PF Office closely monitors this sector and routinely initiates aggressive Section 7A assessments for wage underreporting. When allowances are reclassified as ‘Wages’, employers face massive retrospective PF dues, 7Q interest, and 14B penal damages, which can severely threaten business viability. Proactive payroll restructuring and airtight compliance are essential to mitigate this escalating enforcement risk.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textiles, Hosiery, and Cotton Mills: The Contract Labor Trap",
        content: (
          <>
            <p>
              Kanpur’s textile, hosiery, and cotton mill clusters—particularly
              in Dadanagar and Panki Industrial Area—operate with a heavily
              contracted and Fixed-Term Employment (FTE) workforce, using
              allowance-dominant pay structures to control labour costs. The New
              Wage Code (effective November 21, 2025) disrupts this model by
              requiring statutory ‘Wages’ to constitute at least 50% of total
              remuneration. For units where Basic Pay is currently far lower,
              this triggers a sharp, mandatory increase in PF contributions and
              an immediate, unbudgeted spike in Gratuity liability, especially
              for large pools of FTEs who will now receive pro-rata Gratuity
              after just one year. Without early restructuring and liability
              modelling, Kanpur’s textile and hosiery MSMEs face severe
              financial strain and high compliance exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Defence and Ordnance Ancillaries: PSU Vendor Liability",
        content:
          "Kanpur’s defence manufacturing ecosystem—anchored by major Ordnance Factories—supports a dense network of MSME ancillary units in clusters such as Kalpi. These vendors face stringent compliance scrutiny due to their PSU linkage. Any lapse in PF contributions for contract or temporary workers can trigger severe consequences: PSU vendor blacklisting, disqualification from future tenders, and aggressive Section 7A retrospective liability when the PSU undergoes compliance audits. To operate sustainably in this ecosystem, MSME suppliers must maintain flawless PF documentation, contractor oversight, and statutory adherence.",
      },
    ],
  },
  {
    title: "EPFDesk: New Wage Code Ready PF Solutions for Kanpur",
    description:
      "EPFDesk offers localized strategic compliance services designed to protect Kanpur's key industries from retrospective fines and the shock of the New Wage Code.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Jajmau/Unnao Payroll Restructuring",
        content:
          "We conduct forensic wage audits for leather and export units in the Jajmau–Unnao belt to identify hidden Section 7A exposure arising from low-basic, allowance-heavy structures. Based on this audit, we design a fully compliant New Wage Code 50% Basic Wage model, restructuring pay in a way that minimizes the surge in Gratuity provisioning while ensuring statutory accuracy. This proactive transition prevents punitive reclassification by the RPFC and shields the establishment from retrospective 7A liabilities on past wage practices—protecting both financial stability and export competitiveness.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile/Hosiery Contract Management",
        content: (
          <>
            <p>
              We create NWC-compliant contractor and vendor agreements for
              textile, hosiery, and ancillary units to ensure contractors fully
              meet the 50% statutory Wage mandate for their workforce. This
              contract framework legally shifts primary PF/ESI compliance
              responsibility to the contractor and provides a strong defence in
              Section 7A proceedings, protecting the Principal Employer from
              retrospective liability. We also proactively structure Fixed-Term
              Employment (FTE) contracts to incorporate the NWC’s requirement of
              pro-rata Gratuity after just one year, a critical safeguard for
              seasonal and high-turnover textile/hosiery operations.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Digital Compliance & Audit Defense",
        content:
          "A complete digital compliance desk covering Aadhaar–UAN seeding, ECR filing, and error-proof monthly submissions to avoid PF deposit rejections. We also provide expert representation for Section 7A/7B/7C proceedings in Karnataka, converting unpredictable retrospective liabilities into controlled, minimized compliance exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "PF Audit & Defense",
        content:
          "We provide aggressive PF audit and Section 7A defence for Kanpur-based textile, leather, and manufacturing units facing inspections triggered by worker complaints or government audits. Our legal strategy focuses on procedural challenges, documentation accuracy, and strong interpretation of wage components to significantly reduce assessed dues, 7Q interest, and 14B penal damages. Alongside defence, we help employers shift from outdated, allowance-heavy payroll models to the NWC’s standardized, transparent wage structure, ensuring full compliance and protecting against heightened scrutiny under the new code.",
      },
    ],
  },
];
export const sectionsPFComplianceMumbai = [
  {
    title: "EPF Compliance Localized to Bangalore's Economic Hubs",
    description:
      "Mumbai, the economic and financial powerhouse of India, faces a unique confluence of EPF compliance challenges. These challenges are driven by the high-value, complex salary structures in South Mumbai's Financial District and the massive scale of contractual and temporary labour across the MMR's manufacturing and logistics hubs.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code (NWC) Retrospective Fines (Financial Sector)",
        content:
          "The high-allowance, bonus-heavy CTCs of executives in Bandra Kurla Complex (BKC) and Nariman Point are directly challenged by the NWC's $\mathbf{50\%}$ 'Wages' floor, leading to significant exposure for retrospective PF and Gratuity demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPFO Audit Exposure (MMR Manufacturing)",
        content: (
          <>
            <p>
              The continuous scrutiny of PF offices in the Kandivali-Thane-Navi
              Mumbai corridor (due to past high-profile fraud cases and stricter
              audit norms) demands absolute accuracy in (Electronic Challan cum
              Return) filings and immediate resolution of KYC issues for large
              volumes of contract workers.{" "}
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Risk Management Across Mumbai's Major Hubs",
    description:
      "Our service is tailored to the specific industry and workforce dynamics of each major economic zone",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Bandra Kurla Complex (BKC) / Nariman Point",
        content:
          "Companies in Bandra Kurla Complex and Nariman Point—especially those in BFSI and corporate headquarters—face high PF compliance risk due to traditionally low basic-pay structures. With the 50% NWC wage rule, a significant portion of CTC may now fall under mandatory PF calculation. Our predictive payroll restructuring model helps simulate NWC-compliant salary structures, ensuring the 50% wage floor is met while minimizing take-home salary disruption.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Andheri / Goregaon (MIDC)",
        content: (
          <>
            <p>
              Andheri and Goregaon (MIDC) employers in media, entertainment, and
              pharma often rely on project-based payments and performance-linked
              incentives, creating ambiguity in defining ‘wages’ for PF. With
              the NWC mandate, misclassification of variable pay can trigger PF
              demands and Section 7A assessments. Our NWC-compliant wage
              classification ensures accurate inclusion or exclusion of bonuses
              and incentives in the PF wage base, protecting you from compliance
              disputes.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Navi Mumbai / Thane (TTC, Rabale)",
        content:
          "In Navi Mumbai and Thane industrial hubs—TTC, Rabale, and surrounding clusters—logistics, warehousing, and chemical companies rely heavily on contract labour, exposing Principal Employers to full PF liability when contractors default. Our contractor EPF vetting system performs 100% automated verification of contractor ECR filings with the Navi Mumbai PF Office before invoice approval, ensuring airtight compliance and eliminating PE-level PF risk.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Kandivali / Ghatkopar",
        content:
          "SME manufacturers and service units in Kandivali and Ghatkopar are facing heightened PF audit scrutiny due to recent fraud incidents, resulting in tighter KYC checks and enforcement by regional PF offices. Our digital ECR audit support conducts a pre-submission review of ECRs to detect KYC/UAN mismatches and resolves member profile update requests promptly, preventing account locks and ensuring smooth compliance.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness Plan",
    description:
      "The Code on Wages, 2019 (effective Nov 2025) necessitates a fundamental shift in Mumbai's high-allowance salary structures. EPFDesk ensures your organization is prepared for this monumental change.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive Salary Restructuring for Compliance",
        content:
          "Our proactive salary restructuring framework ensures full compliance with the NWC’s mandatory 50% ‘Wages’ requirement. We conduct a precise risk analysis of your current CTC structure to identify wage shortfalls and excess allowances, then implement a legally compliant restructuring plan across all employee levels—from Taloja shop-floor staff to Colaba executives. The result: seamless adoption of the 50% rule with clear employee communication, balanced take-home pay impact, and strengthened retirement benefits.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Guaranteed Principal Employer (PE) Liability Mitigation",
        content: (
          <>
            <p>
              Our Principal Employer (PE) liability mitigation system provides
              guaranteed protection for companies relying on third-party
              manpower, especially in Bhiwandi’s logistics ecosystem. Through
              our Contractor Shield workflow, vendor payments are released only
              after their PF challans and ECRs are fully verified. Any missing
              or defective filings automatically block payment, shifting the
              compliance burden back to the contractor and safeguarding the PE
              from retrospective PF liability and penalties.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Expert PF Litigation & Audit Support (Mumbai R.O. Focused)",
        content:
          "Our Mumbai-focused PF litigation and audit support provides end-to-end representation as EPFO enforcement intensifies across the MMR region. We manage all communication with Regional PF Offices in Mumbai (North & South), Thane, and Pune, handling notices and proceedings under Sections 7A and 7B with precision. For high-turnover industries in the Peenya/Kandivali belt, we also streamline compliance with the new facial-authentication and digital-KYC mandates, ensuring seamless claim processing and reduced operational friction for large workforces.",
      },
    ],
  },
];
export const sectionsPFComplianceDelhi = [
  {
    title: "The Delhi-NCR Compliance Landscape: High-Stakes Complexity",
    description:
      "Delhi-NCR is characterized by two distinct, high-risk sectors",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The High-Allowance Service Sector",
        content:
          "The corporate hubs of Connaught Place, Nehru Place, and Gurugram(often considered part of the economic ecosystem) are dominated by highly compensated IT/ITeS, Finance, and Consultancy firms. These businesses historically maintain low 'Basic Pay' to minimize PF liability, a practice directly targeted and deemed illegal by the New Wage Code (NWC) 2025.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Audited Manufacturing Corridor",
        content: (
          <>
            <p>
              The industrial belts of Okhla, Bawana, Ghaziabad, and
              Faridabadfeature massive contract workforces, subjecting the
              Principal Employers (PEs) to constant, stringent audits by
              the Regional PF Offices (RPOs) in Delhi (North & South) and
              neighboring states.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "EPF Compliance Tailored to Delhi-NCR's Economic Hubs",
    description:
      "We localize our compliance strategy to address the specific risks in each major hub",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Gurugram / Cyber Hub",
        content:
          "In Gurugram’s IT/ITES, BPO, and startup hubs, allowance-heavy salary structures often fall short of the NWC’s mandatory 50% ‘Wages’ requirement, creating significant PF liability exposure. Our NWC predictive restructuring service delivers immediate, legally vetted payroll simulations that realign salaries to meet the 50% rule before the EPFO initiates retrospective enforcement, protecting companies from large future demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Okhla Industrial Estate / Bawana",
        content: (
          <>
            <p>
              Okhla and Bawana industries—garments, light manufacturing, auto
              parts, and MSMEs—face heightened PF exposure due to heavy
              dependence on contract labour and the risk of related entities
              being clubbed as a ‘single establishment.’ Our PE Liability Shield
              implements systematic vendor ECR and KYC verification, ensuring
              contractors remain fully compliant and protecting Principal
              Employers from defaults and adverse Supreme Court
              single-establishment rulings.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Noida (Sector 62) / Delhi East",
        content:
          "Noida Sector 62 and East Delhi industries—electronics, e-commerce, logistics, and media—face intense PF compliance pressure due to extremely high workforce turnover and constant KYC updates. Frequent UAN creation, transfers, and Aadhaar-UAN linking errors often cause ECR rejections at the EPFO portal. Our automated UAN/KYC reconciliation system performs a monthly pre-filing audit to ensure complete Aadhaar-UAN linkage, eliminating ECR blocks and keeping payroll compliance uninterrupted.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Connaught Place / Nehru Place",
        content:
          "Noida Sector 62 and East Delhi industries—electronics, e-commerce, logistics, and media—face intense PF compliance pressure due to extremely high workforce turnover and constant KYC updates. Frequent UAN creation, transfers, and Aadhaar-UAN linking errors often cause ECR rejections at the EPFO portal. Our automated UAN/KYC reconciliation system performs a monthly pre-filing audit to ensure complete Aadhaar-UAN linkage, eliminating ECR blocks and keeping payroll compliance uninterrupted.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Protection in the Capital",
    description:
      "The Code on Wages, 2019 (expected implementation in November 2025) represents the largest statutory payroll reform in decades. Our service is engineered to make your Delhi-NCR operations NWC-proof.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Eliminating the Retrospective Wages Threat",
        content:
          "Across Delhi-NCR, companies remain exposed to major PF liability if their Basic Pay + DA falls below the mandated 50% of CTC. We eliminate this retrospective risk by implementing a fully compliant 50% wage structure that correctly aligns the PF and Gratuity contribution base. This proactive restructuring protects organizations from costly Section 7A reassessments, preventing years of back-dated dues, interest, and penalties from Regional PF Offices.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic Compliance with EPFO's New Digital Mandates",
        content: (
          <>
            <p>
              With the EPFO rolling out stricter digital mandates—including the
              revamped ECR system and compulsory Face Authentication for
              UAN—compliance gaps can quickly disrupt payroll. We ensure
              seamless adoption of these requirements by managing end-to-end
              digital processes: accurate filings through the new ECR system,
              DSC governance, and 100% Aadhaar–UAN linkage across your
              workforce. This guarantees uninterrupted ECR submission and full
              compliance with EPFO’s upgraded digital framework.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Leveraging the Employees' Enrolment Scheme (EES) 2025",
        content:
          "The Employees’ Enrolment Scheme (EES) 2025 provides a rare, time-bound window for Delhi-NCR businesses to regularize historical PF lapses at minimal cost. We manage the complete EES 2025 application process, enabling establishments to enroll previously omitted eligible employees with only a nominal ₹100 damages penalty. This drastically reduces the financial burden of past non-compliance and ensures a clean, compliant start going forward.",
      },
    ],
  },
];

export const sectionsPFComplianceChennai = [
  {
    title:
      "Chennai's Unique Compliance Challenge: Manufacturing Scale Meets Digital Complexity",
    description:
      "Chennai, the undisputed Detroit of Asia and a rapidly expanding hub for IT/ITeS, Electronics, and BFSI in areas like Guindy, Siruseri, and OMR, faces a complex set of PF compliance risks:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Automotive & Electronics Labour Fluctuation",
        content:
          "The massive scale of the manufacturing clusters in Sriperumbudur, Oragadam, and Ambattur involves high volumes of contract and temporary workers. The biggest risk is the Aadhaar-UAN-KYC mismatch leading to blocked ECR filings and massive Principal Employer (PE) liability for contractor defaults.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The IT/BFSI Wage Code Crisis",
        content: (
          <>
            <p>
              The allowance-heavy, low-basic-pay CTC structures common in Tidel
              Park and OMR (Old Mahabalipuram Road) are in direct conflict with
              the New Wage Code (NWC) 2025 definition of 'Wages'. This exposure
              threatens retrospective PF demands, interest, and penalties (up
              to $24\%$ per annum).
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Risk Strategy Across Chennai's Major Hubs",
    description:
      "We tailor our compliance solutions to the distinct industrial and workforce profiles of Chennai's key zones",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "OMR / Siruseri (IT Corridor)",
        content:
          "In Chennai’s OMR–Siruseri IT Corridor, salaries often include large allowance components, creating PF exposure when ‘Wages’ drop below the mandatory 50% of CTC threshold under the NWC. Our predictive payroll restructuring delivers legally compliant, NWC-ready simulations that establish the 50% wage floor, preventing retrospective PF and Gratuity liabilities for IT/ITeS and BPO employers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sriperumbudur / Oragadam",
        content: (
          <>
            <p>
              Sriperumbudur and Oragadam’s manufacturing ecosystem—automotive
              OEMs, component suppliers, and electronics units—relies heavily on
              contract labour, making PF compliance and KYC accuracy difficult
              under the Chennai RPO’s strict enforcement. Our Automated PE
              Shield performs real-time digital verification of contractor ECR
              filings and 100% UAN–Aadhaar matching before any payment is
              released, ensuring airtight contractor compliance and fully
              protecting the Principal Employer from PF liability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Guindy / Adyar (Industrial & Corporate)",
        content:
          "Guindy and Adyar’s engineering, pharma, and financial services establishments face rigorous digital compliance demands, especially around Digital Signature Certificate (DSC) usage for ECR filing and high-value employee claims. Our dedicated DSC/e-Sign management ensures uninterrupted, round-the-clock compliance with EPFO’s digital mandate, preventing filing blocks, claim delays, and disruptions in monthly PF operations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Ambattur / Ennore",
        content:
          "Ambattur and Ennore industries—ports, logistics, heavy engineering, and petrochemicals—must now manage the New Wage Code requirement granting fixed-term employees (FTEs) pro-rata Gratuity after just one year of service. Our FTE policy integration service reviews and realigns your HR and payroll frameworks to correctly account for this new liability, ensuring seamless compliance and preventing future disputes or financial exposure.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness Plan",
    description:
      "The Code on Wages, 2019 (effective Nov 2025) will change how every CTC is calculated, fundamentally impacting PF and Gratuity. EPFDesk ensures your Chennai operations are ready.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Retrospective Liability Risk Mitigation",
        content:
          "Chennai’s fast-growing industries face significant PF exposure under the NWC’s mandate that ‘Wages’ must form at least 50% of total remuneration. We provide precise financial impact modelling to quantify increased monthly PF costs and assess potential retrospective 7A risks from past non-compliance. Our legal salary re-design then restructures key allowance components into the ‘Wages’ base, ensuring full compliance while enhancing employees’ long-term PF and Gratuity benefits.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Mastering the Digital Compliance Challenges",
        content: (
          <>
            <p>
              With EPFO’s digital verification requirements tightening,
              Chennai’s high-volume and high-turnover industries face major
              operational hurdles. We streamline UAN Face Authentication
              adoption for contract and shop-floor workers, reducing disruptions
              caused by Aadhaar-linked mobile or device constraints.
              Additionally, our prompt RPO-Chennai representation ensures fast,
              accurate handling of all PF correspondence, including audit
              responses, 7A notices, and establishment registration issues.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Gratuity Policy Overhaul for FTEs",
        content:
          "The New Wage Code now grants fixed-term employees pro-rata gratuity after just one year, impacting large IT and manufacturing contract workforces. Our automated tracking system monitors each FTE’s service period in real time, giving accurate projections of enhanced gratuity liability and ensuring full compliance with the Code on Social Security, 2020.",
      },
    ],
  },
];
export const sectionsPFComplianceHyderabad = [
  {
    title:
      "Hyderabad's Dual-Industry PF Challenge: Hitech City & Genome Valley",
    description:
      "Hyderabad, often known as Cyberabad, is driven by two high-value, yet highly distinct, employment sectors:",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES and GICs (Global In-house Centers)",
        content:
          "Concentrated in HITEC City, Gachibowli, Nanakramguda Financial District, and Kondapur. These firms historically offered high-CTC, low-Basic-Pay structures to maximize employee take-home pay. This widespread practice is now fundamentally illegal under the New Wage Code (NWC) 2025, which mandates a minimum contribution base.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pharmaceuticals, Biotech, and Manufacturing",
        content: (
          <>
            <p>
              Clustered in Genome Valley, Sanathnagar, and Uppal. These sectors
              face stringent compliance demands related to variable contract
              labour, complex R&D/Production staff pay, and constant scrutiny
              from the Regional PF Offices (RPO) in Hyderabad (e.g., Sanathnagar
              and Ranga Reddy districts).
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Compliance Expertise for Hyderabad's Economic Hubs",
    description:
      "We develop a tailored PF strategy to address the specific risks in each major zone",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "HITEC City / Gachibowli",
        content:
          "HITEC City and Gachibowli’s IT/ITES, MNC, and financial services firms commonly use allowance-heavy salary structures that fall below the NWC’s mandatory 50% ‘Wages’ threshold, creating significant PF exposure. Our NWC-ready payroll migration restructures salary components immediately and legally to meet the 50% requirement, safeguarding employers from retrospective EPFO demands and compliance penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Genome Valley / Pharma City",
        content: (
          <>
            <p>
              Genome Valley and Pharma City rely heavily on scientific and
              contract talent, making them directly affected by the NWC rule
              granting fixed-term employees pro-rata gratuity after one year.
              Our FTE liability management system automates contract tracking
              and accurately calculates enhanced gratuity obligations under the
              Code on Social Security, 2020, ensuring seamless compliance for
              pharmaceutical and biotech employers.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Sanathnagar / Uppal",
        content:
          "Sanathnagar and Uppal’s manufacturing, electronics, logistics, and MSME clusters rely heavily on contract labour, increasing Principal Employer liability when contractors default or submit defective KYC details. Our PE Liability Shield conducts real-time digital audits of contractor ECR filings and enforces 100% Aadhaar–UAN linkage verification before payments are released, ensuring airtight compliance and eliminating PE-level PF exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Nanakramguda Financial District",
        content:
          "Nanakramguda’s Financial District—home to GICs, consulting firms, banks, and insurers—faces complex PF compliance needs for high-earning professionals opting for contributions above the ₹15,000 ceiling. Our voluntary PF optimization service expertly manages Form 5A filings and higher-contribution protocols, ensuring full statutory compliance while maximizing tax-efficient retirement savings for senior executives.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Cyberabad",
    description:
      "The Code on Wages, 2019 (effective Nov 2025) is poised to fundamentally restructure every salary slip. EPFDesk ensures your Hyderabad establishment transitions seamlessly and compliantly.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Eliminating the Retrospective Wages Threat",
        content:
          "Hyderabad’s IT and financial sectors face major PF exposure under the NWC, where low-basic salary structures often fail the 50% ‘Wages’ requirement. We implement a fully compliant 50% wage structure that correctly aligns PF and Gratuity contribution bases with total remuneration. This proactive restructuring shields employers from retrospective Section 7A assessments by the Hyderabad RPO for past underpayments.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic Defense Against Section Audits",
        content: (
          <>
            <p>
              With the EPFO tightening enforcement, Section 7A inquiries are
              increasingly targeting establishments with inconsistent PF
              contributions or improper allowance treatment. We deliver
              end-to-end 7A defense and representation before the RPFC, ensuring
              all records are digitally organized and compliant with the latest
              requirement that a ‘prima facie case’ must exist before initiating
              an inquiry. This protects employers from arbitrary, roving, or
              fishing-style audits and strengthens their legal position
              throughout the process.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Managing the FTE Gratuity Liability (Code on Social Security, 2020)",
        content:
          "Hyderabad’s biotech and engineering sectors must now account for pro-rata gratuity eligibility for Fixed-Term Employees after one year—a major shift under the Code on Social Security, 2020. We upgrade your HRMS and payroll systems to precisely track FTE tenure and compute the resulting gratuity liability in real time, ensuring full compliance and preventing unexpected financial impact.",
      },
    ],
  },
];
export const sectionsPFCompliancePune = [
  {
    title: "Pune's Dual-Engine Economy: Compliance at High RPM",
    description:
      "Pune, uniquely positioned as both the Oxford of the East for its academic ecosystem and a major Automotive & IT/ITeS Manufacturing Corridor, presents a highly specific PF compliance profile. This duality creates two major regulatory hotspots",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Manufacturing Cluster Liability (PCMC, Chakan, Talegaon)",
        content:
          "The PCMC–Chakan–Talegaon manufacturing belt, home to major automotive OEMs and engineering units, faces intense PF compliance pressure due to large contract workforces and strict Principal Employer liability standards. Ensuring 100% Aadhaar–UAN seeding for thousands of shop-floor workers is now critical, as even small KYC gaps can trigger ECR rejections. Our compliance framework delivers airtight contractor monitoring and flawless workforce KYC alignment to eliminate PE-level PF risk.",
      },
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES Wage Restructuring (Hinjewadi, Kharadi, Magarpatta)",
        content: (
          <>
            <p>
              IT/ITES and GIC hubs in Hinjewadi, Kharadi, and Magarpatta often
              rely on CTC structures with low Basic Pay, putting them at high
              risk under the New Wage Code 2025. The mandatory requirement that
              ‘Wages’ must constitute 50% of total remuneration can trigger
              substantial retrospective PF and Gratuity liabilities. Our wage
              restructuring framework realigns salary components to meet the 50%
              threshold, safeguarding employers from future compliance disputes
              and heavy financial exposure.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Risk Mitigation Across Pune's Major Hubs",
    description:
      "We implement targeted compliance solutions based on the unique industrial risks of Pune’s economic zones",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Hinjewadi (IT Park)",
        content:
          "Hinjewadi’s IT/ITES, R&D, GCC, and startup ecosystem often relies on allowance-heavy CTCs that fail the NWC’s mandatory 50% ‘Wages’ requirement, creating severe PF and Gratuity exposure. Our strategic payroll migration restructures salary components to meet the statutory 50% wage floor, significantly reducing the risk of retrospective 7A audits and compliance demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pimpri-Chinchwad (PCMC) / Bhosari",
        content: (
          <>
            <p>
              PCMC and Bhosari’s automotive and engineering industries depend
              heavily on large contract labour forces, exposing Principal
              Employers to significant PF liability when vendors default. Our
              Contractor Compliance Shield conducts automated digital checks of
              contractor ECR filings and UAN–Aadhaar linkage before any payment
              is released, ensuring zero PE exposure and airtight statutory
              compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Chakan MIDC / Talegaon",
        content:
          "Chakan MIDC and Talegaon’s manufacturing, logistics, and aerospace units must now comply with the NWC provision granting fixed-term employees pro-rata gratuity after one year of service. Our FTE policy integration aligns HR frameworks to accurately track workforce tenure and provision for the resulting gratuity liability, ensuring seamless compliance and preventing future financial exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Kharadi / Magarpatta City",
        content:
          "Kharadi and Magarpatta’s BFSI, FinTech, and corporate GIC clusters handle large numbers of high-salary employees opting for voluntary PF contributions above the ₹15,000 ceiling. This requires precise digital filing and error-free compliance under the EPFO’s upgraded mandates. Our advanced ECR management ensures 100% accurate filings with mandatory DSC/e-sign validation, protecting employers from RPO queries and maintaining seamless compliance for high-value professionals.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Pune",
    description:
      "With the Code on Wages, 2019 (effective November 2025) now active, Pune’s employers face the most critical payroll overhaul in decades. EPFDesk ensures your organization is compliant, avoiding crippling penalties.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Comprehensive NWC Wage Audit",
        content:
          "The NWC’s mandate that PF-contributory ‘Wages’ must equal at least 50% of total remuneration poses significant exposure for Pune and PCMC employers. We perform a comprehensive wage audit to quantify current risk and potential 7A liabilities, followed by a legally compliant restructuring plan that rebalances salary components and reduces non-PF allowances. This ensures adherence to the 50% wage floor and protects your P&L from future retrospective PF demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Navigating Recent EPFO Reforms (2025)",
        content: (
          <>
            <p>
              EPFO’s 2025 reforms introduce new compliance opportunities and
              digital obligations that Pune employers must navigate carefully.
              We help establishments fully utilize the Employees’ Enrolment
              Scheme (EES) 2025 to regularize past lapses and enroll omitted
              employees with only a ₹100 damages fee. Additionally, our Vishwas
              Scheme defense minimizes penalty exposure by leveraging the
              scheme’s cap of 1% monthly damages, significantly reducing
              litigation risk and ensuring smoother resolution of minor
              compliance delays.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "UAN-Aadhaar and Digital ECR Mandates",
        content:
          "Pune’s large manufacturing workforce faces significant challenges under EPFO’s strict mandate for 100% UAN–Aadhaar KYC compliance. Our end-to-end KYC clean-up drive ensures complete Aadhaar–UAN–KYC seeding across your employee base, enabling smooth, rejection-free filing under the Revamped ECR System (effective from September 2025). This guarantees uninterrupted monthly PF submissions and eliminates compliance bottlenecks.",
      },
    ],
  },
];

export const sectionsPFComplianceKolkata = [
  {
    title: "Kolkata's Unique Compliance Labyrinth: Tradition Meets Technology",
    description:
      "Kolkata’s economy is defined by a sharp contrast: the legacy compliance challenges of its foundational industries versus the emerging demands of its modern sectors. This requires a nuanced, dual-focus PF compliance strategy.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Legacy Industry Default Risk (Jute and Tea)",
        content:
          "The Hooghly Industrial Region’s legacy jute and tea sectors face severe PF exposure due to decades of historical non-compliance, resulting in massive arrears, defalcated PF funds, and frequent EPFO and ED recovery actions. With a heavy backlog of Section 7A cases at the Kolkata High Court, employers must navigate complex litigation and provisioning challenges. Our compliance framework helps stabilize legacy PF liabilities, streamline arrear recovery, and mitigate the systemic default risks that dominate this region.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Modern Sector NWC Risk (Salt Lake/New Town & Dalhousie): ",
        content: (
          <>
            <p>
              Salt Lake Sector V, New Town, and Dalhousie’s IT, FinTech, and
              corporate GIC hubs rely heavily on allowance-driven salary
              structures that will soon violate the NWC 2025 requirement that
              ‘Wages’ must equal at least 50% of total remuneration. This
              exposes employers to substantial PF and Gratuity liabilities. Our
              NWC compliance framework audits existing CTCs, identifies gaps,
              and restructures pay components to legally meet the 50% mandate,
              preventing retrospective enforcement and financial risk.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Risk Mapping for Kolkata's Economic Geography",
    description:
      "We tailor our services to the specific statutory risks inherent in each key area of the city",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Jute/Hooghly Belt (Howrah, Rishra, Titagarh)",
        content:
          "The Jute/Hooghly Belt—including Howrah, Rishra, and Titagarh—faces chronic PF non-compliance, high Principal Employer liability, and ongoing enforcement actions by the EPFO and ED. Our specialized 7A assessment and ED defense service provides expert representation before the West Bengal RPO and Calcutta High Court, leveraging the Vishwas Scheme for damage rationalization and conducting historical records clean-up to stabilize long-pending PF exposures.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Salt Lake Sector V / New Town",
        content: (
          <>
            <p>
              Salt Lake Sector V and New Town’s IT/ITES, BPO, and corporate GIC
              employers commonly use allowance-heavy CTC structures that fall
              short of the NWC’s 50% Basic Pay mandate, creating major PF
              exposure. Our NWC payroll overhaul delivers a fully compliant
              restructuring of IT salaries to meet the statutory 50% wage floor,
              eliminating future non-compliance and protecting against
              retrospective 7A assessments.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Dalhousie Square / BBD Bag",
        content:
          "Dalhousie Square and BBD Bag—home to major finance, trade, and corporate headquarters—face complex PF challenges involving multi-state transfers, higher-value contributions, and strict digital filing norms. Our advanced ECR vetting system conducts thorough digital audits to ensure accurate voluntary higher-PF contributions and 100% UAN–KYC seeding, preventing RPO processing blocks and ensuring seamless compliance for high-salary workforces.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Leather Complex / Tangra",
        content:
          "Tangra’s Leather Complex and surrounding MSME manufacturing units rely heavily on contract and informal labour, making timely PF registration and 100% workforce coverage challenging—especially under the expanded EPF/ESI rules. Our Quick-Enrollment Scheme (QES) service leverages simplified EPFO windows such as the Employees’ Enrolment Scheme 2025 to rapidly regularize missed employees with minimal damages, ensuring full statutory compliance for a highly mobile workforce.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Kolkata",
    description:
      "The Code on Wages, 2019 (effective November 2025) will force companies to redefine Wages, which directly impacts PF contributions. EPFDesk ensures your organization is protected and compliant.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Retrospective Liability Protection & Payroll Re-engineering",
        content:
          "Kolkata employers face significant PF and Gratuity exposure under the NWC’s 50% ‘Wages’ rule. We provide precise financial impact modelling to quantify increased liabilities and identify compliance gaps, followed by a legally sound restructuring of allowance components to ensure the statutory 50% wage base is met. This proactive payroll re-engineering eliminates future 7A risks and safeguards organizations from retrospective PF demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic Defense Against Jute/Tea Audits",
        content: (
          <>
            <p>
              West Bengal’s jute and tea industries face intensified PF
              scrutiny, with the Kolkata RPO and courts aggressively pursuing 7A
              assessments for historical defaults. We provide end-to-end defense
              through expert representation before the RPFC and High Court,
              while leveraging the Vishwas Scheme 2025 to rationalize penal
              damages from potentially 100% down to just 1% per month. This
              significantly reduces financial impact and strengthens your
              position in ongoing 7A proceedings.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Enhanced Digital Compliance Mandates (EPFO 3.0)",
        content:
          "EPFO 3.0 mandates 100% digital and error-free ECR filing, making accurate KYC essential—especially for migrant and contract-heavy workforces. Our UAN–Aadhaar vetting drives ensure complete KYC seeding across all employees, eliminating ECR rejections and preventing follow-up notices or enforcement actions from Regional PF Offices.",
      },
    ],
  },
];

export const sectionsPFComplianceAhmedabad = [
  {
    title:
      "Ahmedabad's Industrial DNA: Compliance at the Core of Gujarat's Growth",
    description:
      "Ahmedabad, historically the Manchester of the East and now a major hub for Pharmaceuticals, Engineering, and Automobile ancillaries, faces compliance challenges rooted in high-volume, cost-sensitive manufacturing environments. The local business ecosystem, heavily reliant on MSMEs, demands precise, cost-effective PF compliance to remain globally competitive.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Manufacturing Workforce Volatility (Naroda, Vatva, Odhav)",
        content:
          "The vast industrial estates of Naroda, Vatva, and Odhav are the backbone for textiles, chemicals, and plastics. The major challenge here is the high turnover of contractual and temporary workers, which complicates mandatory $\mathbf{100\%}$ UAN-Aadhaar-KYC seeding. Errors in this data often lead to ECR (Electronic Challan-cum-Return) rejections by the Regional PF Office (RPO) Ahmedabad, risking penalties for delayed deposits.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Risk (Sarkhej-Gandhinagar (SG) Highway & Sanand)",
        content: (
          <>
            <p>
              Modern corporate offices, R&D centers, and the Auto OEM cluster
              in Sanand and Changodar often utilize allowance-heavy, low-Basic
              Pay CTC structures. The New Wage Code (NWC) 2025 mandate that
              'Wages' must be $\mathbf of total remuneration poses a direct
              threat to the financial provisioning of these high-growth sectors,
              risking significant retrospective assessments by the Ahmedabad
              EPFO.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Solutions Across Ahmedabad's Economic Zones",
    description:
      "We provide targeted compliance expertise based on the unique industrial profile of Ahmedabad’s key business clusters",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Vatva / Naroda / Odhav",
        content:
          "Vatva, Naroda, and Odhav’s bulk drug, textile processing, and chemical units face chronic KYC challenges due to high workforce turnover, resulting in frequent UAN activation and Aadhaar-linking failures that block ECR payments. Our KYC automation drive ensures a fully verified, 100% UAN–Aadhaar–KYC seeded workforce before monthly ECR filing, eliminating payment rejections and preventing compliance notices from the Ahmedabad RPO.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sanand / Changodar",
        content: (
          <>
            <p>
              Sanand and Changodar’s automobile, logistics, and engineering
              units often operate with pre-NWC salary structures that fall short
              of the mandatory 50% ‘Wages’ benchmark, creating significant PF
              liability exposure. Our NWC payroll blueprint provides an
              immediate, legally compliant redesign of salary components to meet
              the 50% wage rule, safeguarding employers from substantial
              retrospective 7A assessments.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Prahladnagar / SG Highway",
        content:
          "Prahladnagar and SG Highway’s IT/ITES, FinTech, and corporate headquarters manage large pools of high-earning employees and international assignees, making PF compliance highly documentation-intensive. Our International Worker compliance service specializes in Social Security Agreement (SSA) and Certificate of Coverage (COC) requirements, ensuring accurate PF contributions for high-salary staff and full regulatory compliance for outbound international workers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Gota / Shilaj",
        content:
          "Gota and Shilaj’s real estate and construction sectors rely on large, seasonal labour forces that now fall under expanded PF eligibility through the NWC. Our Contract Labour Compliance Shield ensures every contractor meets PF obligations through strict vendor monitoring and digital verification, fully protecting the Principal Employer from liability in this high-risk construction environment.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Ahmedabad",
    description:
      "The implementation of the Code on Wages, 2019 (effective November 2025) is the most significant change to PF calculation in the city’s history. EPFDesk ensures your business adapts seamlessly.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive NWCvWage Risk Audit",
        content:
          "Under the NWC 2025, any allowance structure exceeding 50% of total remuneration is automatically reclassified as ‘Wages’ for PF, exposing employers to significant retrospective liability. Our proactive 50% wage risk audit quantifies your exact exposure—including interest and damages—and provides a legally compliant restructuring strategy. This ensures your payroll meets the statutory 50% wage minimum, eliminating future 7A audit risks and protecting your organization from backdated PF demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Defence Against RPO Ahmedabad Penalties (1% Rule)",
        content: (
          <>
            <p>
              Although the EPFO’s new 1% monthly penalty framework simplifies
              calculations, delayed PF deposits can still create substantial
              recurring costs for Ahmedabad employers. Our digital workflow
              ensures all ECRs and challans are filed before the 15th of each
              month, eliminating penalty exposure entirely. For past delays, we
              provide expert representation before RPO Ahmedabad to mitigate 7Q
              interest and 14B damages—especially critical for MSMEs facing
              genuine financial constraints.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "DSC and Digital Signature Compliance",
        content:
          "EPFO’s mandatory Digital Signature (DSC) authentication makes seamless certificate management essential for uninterrupted ECR filing. We handle end-to-end DSC procurement, renewal, registration, and usage for your authorized signatory, preventing filing delays or technical mismatches on the EPFO portal and ensuring continuous compliance.",
      },
    ],
  },
];

export const sectionsPFComplianceSurat = [
  {
    title: "Surat's Unique Economic Pulse: Labor Volatility and Statutory Risk",
    description:
      "Surat, globally recognized as the Diamond Hub of the World (polishing $\mathbf{90\%}$ of global diamonds) and a massive Textile Manufacturing center (synthetic fabric), presents a distinct set of PF compliance challenges centered on its highly skilled yet often informal workforce structure.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Diamond & Textile Workforce Crisis (Katargam, Varachha, Puna)",
        content:
          "The core industries in areas like Katargam, Varachha, and the Udhna/Puna industrial belts rely heavily on a piece-rate/informal contract labor model. The current economic slowdown, exacerbated by recent US tariffs, has intensified job losses and financial distress. The key compliance risk here is the common practice of under-reporting wages and employing workers without proper PF enrollment (often to reduce statutory liability), leaving employers exposed to aggressive $\mathbf{7A}$assessments by the Regional PF Office (RPO) Surat regarding missed contributions on actual earnings.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code 2025 Impact on Wages (DREAM City & Sachin GIDC)",
        content: (
          <>
            <p>
              The new financial and IT/ITES clusters emerging around DREAM City
              (Diamond Research and Mercantile) and the corporate offices
              near Sachin GIDC face the imminent $\mathbf statutory minimum
              'Wages' rule under the New Wage Code (NWC) 2025. Their existing
              high-incentive/low-Basic Pay structures will automatically trigger
              massive retrospective PF and gratuity liability, demanding an
              urgent, legally sound payroll overhaul.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Risk Mitigation for Surat's Industrial Centers",
    description:
      "We structure our compliance services to address the specific statutory vulnerabilities across Surat’s key economic hubs",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Katargam / Varachha / Mahidharpura",
        content:
          "Katargam, Varachha, and Mahidharpura’s diamond polishing and trading units often under-report wages due to piece-rate and incentive-heavy earnings, creating major exposure to backdated 7A assessments. Our shadow payroll audit compares actual payouts with declared PF wages, formalizes variable components, and builds a defensible compliance record to protect employers during RPO Surat inspections.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Udhna / Sachin GIDC / Palsana",
        content: (
          <>
            <p>
              Udhna, Sachin GIDC, and Palsana’s textile and chemical clusters
              depend on large, fast-turnover contract workforces—making PF
              compliance and Principal Employer protection critically
              challenging. Our Contractor Compliance Shield rigorously vets
              vendor payrolls, ensures 100% PF deposit verification, and
              strengthens indemnification clauses, fully insulating textile and
              chemical units from co-employer liability arising out of
              contractor defaults.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "DREAM City / Hazira",
        content:
          "DREAM City and Hazira’s gems, jewellery, corporate, and port/logistics sectors rely on allowance-heavy salary structures that will fall afoul of the NWC’s 50% ‘Wages’ requirement. Our NWC 2025 readiness blueprint delivers a full legal re-engineering of CTC and salary components to meet the statutory 50% wage floor, ensuring future-proof compliance for PF, Gratuity, and Bonus calculations while eliminating retrospective liability risk.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Puna / Limbayat",
        content:
          "Puna and Limbayat’s power loom, zari, embroidery, and MSME units often struggle with PF remittances due to financial volatility, resulting in accumulated 14B damages and 7Q interest. Our damage mitigation and settlement service provides expert representation before the RPO to rationalize historical penalties and interest, leveraging available government relief schemes to minimize liability and help small units regain full PF compliance.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Surat",
    description:
      "With the Code on Wages, 2019 taking effect (November 2025), EPFDesk is strategically positioned to assist Surat’s low-margin, high-volume industries in transitioning legally and cost-effectively.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Recalibration for Profit Protection",
        content:
          "Under the NWC’s mandatory 50% ‘Wages’ rule, allowances exceeding the threshold are automatically reclassified as wages, exposing employers to heavy backdated PF and Gratuity demands. Our payroll recalibration model quantifies the precise increase in statutory liabilities for your industry—whether piece-rate, factory, or corporate—and provides a legally compliant restructuring of CTC components. This ensures optimized employer cost, full NWC adherence, and protection from sudden financial shocks during RPO scrutiny.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Defense Against EPF and Notices",
        content: (
          <>
            <p>
              Surat’s industrial units—especially those affected by recent
              economic slowdowns—are facing heightened EPFO scrutiny, resulting
              in frequent 7A and 14B notices. Our specialized defense framework
              prepares robust documentation and representation to contest 7A
              assessments involving incentives, production bonuses, and variable
              pay. We also provide targeted 14B damage rationalization support
              to reduce punitive penalties for delayed remittances, offering
              critical relief for MSMEs navigating cash-flow challenges.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Worker Formalization & UAN Seeding",
        content:
          "Surat’s diamond and textile sectors rely on highly mobile contract workers, making flawless digital compliance essential. Our contract worker formalization program conducts 100% UAN–Aadhaar–bank account verification to eliminate ECR rejections and ensure smooth claim processing. This strengthens statutory compliance and helps maintain labour stability during high-pressure production cycles.",
      },
    ],
  },
];
export const sectionsPFComplianceGurgaon = [
  {
    title:
      "Gurugram's PF Crucible: Salary Structure Risk and High-Volume Compliance",
    description:
      "Gurugram (formerly Gurgaon), the Millennium City, is the heart of India's IT/ITES, BPO, and Automobile manufacturing sectors, hosting over 250 Fortune 500 companies. The city's key compliance challenge stems from the high-stakes, fast-paced nature of its primary industries, where complex, allowance-heavy Cost-to-Company (CTC) structures are common, and the contractual workforce in manufacturing hubs is vast.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "New Wage Code Threat to Corporate CTCs (Cyber City & Golf Course Road)",
        content:
          "The primary risk for companies in Cyber City, Golf Course Road, and Sohna Road (IT, FinTech, Consulting) is the implementation of the New Wage Code (NWC) 2025. The rule mandates that 'Wages' (Basic + DA + Retaining Allowance) must constitute at least of the total remuneration. Gurugram's prevalent salary model often features low Basic Pay offset by high, non-PF allowances. This structure will become non-compliant, triggering substantial and retrospective PF and Gratuity liability increases, making firms immediate targets for assessments by the Regional PF Office (RPO) Gurugram.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Contract Labour and Wage Under-Reporting (IMT Manesar & Udyog Vihar)",
        content: (
          <>
            <p>
              The large-scale manufacturing and ancillary units in IMT Manesar,
              Bawal, and Udyog Vihar (Automobile, Engineering, Logistics) face
              scrutiny on contract worker compliance. The trend shows RPO
              Gurugram initiating inquiries to determine if incentives,
              production bonuses, and variable components paid through
              contractors were correctly included in the PF wage base, leading
              to high-value penalty demands under Section.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Mastery Across Gurugram's Economic Zones",
    description:
      "We provide industry-specific expertise to tackle the unique compliance issues faced by Gurugram's major employment clusters",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Cyber City / Golf Course Rd.",
        content:
          "Cyber City and Golf Course Road employers—IT/ITES, BPO, FinTech, and consulting—typically operate with allowance-heavy CTC structures that fall below the NWC’s mandatory 50% ‘Wages’ threshold, creating significant risk of retrospective PF and Gratuity liabilities. Our NWC payroll blueprinting service delivers immediate, legally compliant restructuring of salary components to meet the statutory 50% wage floor, protecting firms from EPFO intervention and future 7A assessments.",
      },
      {
        color: "bg-white border-gray-300",
        title: "IMT Manesar / Bawal",
        content: (
          <>
            <p>
              IMT Manesar and Bawal’s automobile, auto-ancillary, and
              engineering units face major PF exposure when contractors fail to
              include production incentives and variable pay in the PF wage
              base. Our Principal Employer Risk Shield provides end-to-end
              contract labour vetting, airtight documentation, and a real-time
              compliance audit system that protects the Principal Employer from
              secondary liability and shields against RPO 7A claims arising from
              contractor wage defaults.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Udyog Vihar / Sector 37",
        content:
          "Udyog Vihar and Sector 37’s garment, MSME, logistics, and KPO units suffer frequent ECR rejections due to high attrition and widespread UAN–Aadhaar–KYC mismatches. Our UAN data hygiene drive delivers automated, bulk KYC verification and complete data clean-up, ensuring 100% ECR success while preventing late-deposit penalties and reducing employee grievances.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sohna Road / Southern Peripheral Rd (SPR)",
        content:
          "Sohna Road and SPR’s real estate, data center, and emerging tech companies face complex PF compliance requirements for expatriates and high-earning employees. Our international worker expertise ensures accurate handling of contributions above the ₹15,000 ceiling and full compliance with Social Security Agreement (SSA) and Certificate of Coverage (COC) protocols, supporting Gurugram firms managing global assignments.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Gurugram",
    description:
      "The operationalization of the Code on Wages, 2019 (expected November 2025) will directly redefine the statutory costs for Gurugram’s corporate sector. EPFDesk ensures your systems are fully prepared.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive NWC Salary Audit",
        content:
          "The NWC’s strict rule that non-exempt allowances cannot exceed 50% of total remuneration puts many employers at high PF and Gratuity risk. Our proactive 50% salary audit quantifies the exact financial impact of NWC compliance—giving management clear budgeting and provisioning data—while our legal vetting restructures payroll to elevate Basic Pay and DA to the required 50% threshold. This fully de-risks your salary structure from statutory claw-back provisions and future PF liabilities.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Expert Defense Against RPO Gurugram Notices",
        content: (
          <>
            <p>
              Gurugram’s RPO is aggressively issuing 7A and 14B notices to large
              corporate and manufacturing establishments for historical PF
              lapses. We provide expert 7A inquiry representation to challenge
              arbitrary allowance inclusion and ensure only legally valid wage
              components are considered. Our 14B damages mitigation strategy
              further minimizes punitive penalties and 7Q interest—critical for
              cases involving delayed deposits or contractor defaults—protecting
              your organization from excessive financial exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Seamless Digital Compliance (ECR/UAN)",
        content:
          "With the Gurugram RPO enforcing strict digital standards, organizations must maintain flawless PF filings. We manage the full lifecycle of Digital Signature Certificates to ensure secure, uninterrupted authentication on the EPFO portal, while our zero-error ECR filing service handles monthly remittances and reconciliations end-to-end. This guarantees timely compliance and eliminates penalties arising from technical or filing delays.",
      },
    ],
  },
];
export const sectionsPFComplianceNoida = [
  {
    title:
      "Noida's PF Landscape: High-Volume Labor, Complex Salaries, and SEZ Dynamics",
    description:
      "Noida (New Okhla Industrial Development Authority) is a critical economic engine in the NCR, dominated by large-scale Electronics Manufacturing (PLI Scheme beneficiaries), a massive IT/ITES/BPO sector, and numerous Apparel/Garment Export Houses. This combination creates a volatile PF compliance environment",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Risk (Sector 62, 132, 129)",
        content:
          "The corporate hubs, especially along the Noida Expressway (Sectors 132, 129) and Sector 62 (IT/BPO), rely heavily on Cost-to-Company (CTC) models with low Basic Pay and high allowances (HRA, Conveyance, Special Allowance). The upcoming New Wage Code (NWC) 2025 mandates that 'Wages' must be at least $\mathbf{50\%}$ of total remuneration. This will trigger immediate and significant restructuring challenges, potentially increasing the statutory liability (PF and Gratuity) for most IT and corporate firms, making them primary targets for $\mathbf{7A}$ assessments by the Regional PF Office (RPO) Noida for alleged past under-contributions.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "PLI & Manufacturing Workforce Scrutiny (Sector 63, 65, and Greater Noida)",
        content: (
          <>
            <p>
              The electronics and component manufacturing units, often
              beneficiaries of the Production Linked Incentive (PLI) Scheme in
              the industrial areas of Sector 63, Sector 65, and Greater Noida,
              face intense scrutiny on contract labor compliance and wage
              formality. The RPO Noida is vigilant in ensuring compliance for
              the large, often temporary, workforce required by these
              high-growth sectors. Recent news shows RPO Noida is highly active
              in claim settlement and compliance improvement drives, signaling
              zero tolerance for errors.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Apparel Export House Fixed-Term Contracts (Sector 80, 81)",
        content: (
          <>
            <p>
              The garment and export clusters face specific challenges with the
              new NWC rules concerning Fixed-Term Employees (FTEs), who are now
              eligible for pro-rata gratuity after just one year of service.
              Compliance structures must be updated instantly to avoid legal
              challenges from a highly unionized workforce.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Localized EPF Risk Mitigation for Noida’s Industrial Centers",
    description:
      "We structure our compliance services to address the specific statutory vulnerabilities across Noida’s key economic hubs",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Sector 62 / 129 / 132",
        content:
          "Noida’s IT/ITES, BPO, FinTech, and data center hubs—particularly Sectors 62, 129, and 132—face significant PF exposure as low Basic Pay structures fail the NWC’s mandatory 50% wage threshold. Our NWC 2025 salary remodelling service legally and financially re-engineers CTC structures for full 50% compliance, minimizing additional employer costs while protecting against future RPO penalties and retrospective liability.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sector 63 / 65 / Greater Noida",
        content: (
          <>
            <p>
              Sector 63, Sector 65, and Greater Noida’s electronics, PLI-linked,
              and auto-ancillary units face heightened risk of 7A inquiries as
              the RPO scrutinizes contractor wages, incentives, and overtime
              calculation. Our vigilant Principal Employer protection framework
              conducts monthly vendor compliance audits and strengthens contract
              indemnification, ensuring airtight PF adherence and shielding
              manufacturing units from contractor defaults and RPO-driven
              liability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Sector 80 / 81 / NEPZ (SEZ)",
        content:
          "Sector 80, Sector 81, and NEPZ export and MSME units rely heavily on fixed-term workers, making them directly affected by the NWC provision granting pro-rata gratuity after one year of service. Our FTE policy integration updates HR and payroll systems to accurately calculate and provision for this enhanced gratuity liability while meeting SEZ-specific PF requirements, ensuring seamless statutory compliance for export-focused employers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sector 4 / 5 / 6 (Older Industrial Belts)",
        content:
          "The older industrial zones of Sector 4, 5, and 6—dominated by printing, packaging, engineering, and small factories—often face heavy PF exposure due to accumulated defaults, leading to compounded 7Q interest and punitive 14B damages. Our RPO settlement and damage rationalization service provides expert representation before RPO Noida to negotiate reduced damages and interest based on financial hardship, past compliance efforts, and statutory relief options, helping small units regain stable PF compliance.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Noida",
    description:
      "With the Code on Wages, 2019 taking effect (November 2025), EPFDesk ensures that Noida's dynamic employment environment is instantly compliant.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Structuring for Statutory Safety",
        content:
          "The NWC’s mandatory 50% ‘Wages’ rule requires employers to ensure non-PF allowances never exceed half of total remuneration. We conduct a comprehensive audit of your current CTC structure to identify gaps against the NWC definition and deliver a clear compliance roadmap. Our zero-risk implementation process redesigns compensation structures in a legally defensible manner, ensuring a smooth transition, stable employee relations, and complete protection from future RPO intervention.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic Defense Against RPO Noida Inquiries",
        content: (
          <>
            <p>
              RPO Noida is aggressively pursuing data-driven 7A inquiries,
              especially where incentives, bonuses, and allowances may have been
              incorrectly excluded from the PF wage base. Our 7A assessment
              management provides comprehensive defense through accurate
              documentation, legal justification, and strategic representation
              before the PF Commissioner. We also manage the entire workflow on
              the EPFO e-Proceedings portal, ensuring flawless digital
              submissions and procedural compliance—critical for securing
              favourable outcomes and preventing inflated PF liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Enhanced Digital Compliance and UAN Clean-up",
        content:
          "Noida’s high-turnover IT and manufacturing workforce demands flawless digital compliance to avoid payroll disruptions. Our enhanced UAN clean-up drives ensure 100% Aadhaar–UAN KYC seeding through bulk verification and correction of data mismatches. This eliminates ECR rejections, accelerates claim settlements, and reduces employee grievances stemming from digital compliance gaps.",
      },
    ],
  },
];
export const sectionsPFComplianceJaipur = [
  {
    title:
      "Rajasthan’s PF Challenge: Informal Labour, Mineral Wealth, and the NWC 2025",
    description:
      "Rajasthan’s economy is a unique blend of high-value manufacturing, extensive mining and mineral processing, and a traditional textile/handicraft sector. The key compliance risks revolve around the vast, often informal, labour force and the statutory changes introduced by the New Wage Code (NWC) 2025.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Mandate (Jaipur & Bhiwadi)",
        content:
          "The corporate and manufacturing hubs of Jaipur (IT/ITES, Auto) and Bhiwadi (Auto, Engineering), which operate on competitive wage models, face the most immediate restructuring need. Like other NCR areas, their salary components often fall short of the NWC’s mandate that 'Wages' (Basic + DA) must be at least $\mathbf{50\%}$ of the total remuneration. Failure to restructure will lead to massive, retrospective PF and Gratuity liability under-reporting, making them prime targets for the Regional PF Office (RPO) Jaipur assessments.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Mining and Mineral Industry Wage Formalization",
        content: (
          <>
            <p>
              The extensive mining and mineral processing units in Udaipur,
              Kota, and Jodhpur operate with a large, often contract-based,
              informal workforce. News reports highlight the push
              towards digitization in mining compliance to enhance transparency.
              This focus will naturally extend to PF compliance, making it
              harder for firms to under-report wages or exclude contractual
              labour. RPO Jaipur is actively scrutinizing the inclusion of
              bonuses, incentives, and variable pay, leading to high-value
              penalty demands under Section for past defaults.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile and Garment Fixed-Term Contracts (Bhilwara & Pali)",
        content:
          "The textile heartlands, particularly Bhilwara Textile City and Pali, rely heavily on fixed-term employment for seasonal demand. The NWC 2025 introduces a crucial change: Fixed-Term Employees (FTEs) are now eligible for pro-rata gratuity after just one year of service. This is a significant, immediate statutory liability that most textile companies are unprepared for.",
      },
    ],
  },
  {
    title: "Strategic PF Compliance Across Rajasthan's Core Hubs",
    description:
      "We provide specialized support tailored to the regulatory environment and industrial nature of Rajasthan’s major economic zones",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Jaipur (Sitapura, Mansarovar)",
        content:
          "Sitapura and Mansarovar’s IT/ITES, gems & jewellery, and handicrafts sectors face significant PF exposure as allowance-heavy salary structures violate the NWC requirement that ‘Wages’ must be at least 50% of total remuneration. Our NWC payroll blueprinting service restructures the balance between allowances and basic pay to meet the statutory 50% threshold while minimizing additional employer costs and eliminating future 7A liability risks.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Bhiwadi / Neemrana (Auto Corridor)",
        content: (
          <>
            <p>
              Bhiwadi and Neemrana’s automobile, engineering, and Japanese SEZ
              units face significant PF exposure due to high variable pay and
              extensive contract labour usage. Incentives and commissions often
              go unreported in the PF wage base, creating major 7A risks for the
              Principal Employer. Our Principal Employer Risk Shield provides
              comprehensive contractor vetting, airtight documentation, and a
              continuous compliance audit system to ensure full PF adherence and
              protect the PE from secondary liability arising from contractor
              wage defaults.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Bhilwara / Pali",
        content:
          "Bhilwara and Pali’s textile, garment, and dyeing units face new statutory exposure under the NWC, which grants fixed-term employees pro-rata Gratuity after just one year of service. Our Textile Industry NWC update service revises HR policies and payroll provisioning systems to accurately calculate and manage this expanded gratuity liability, ensuring full compliance and preventing future financial surprises.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Udaipur / Jodhpur / Kota",
        content:
          "Udaipur, Jodhpur, and Kota’s mining, cement, and mineral processing units face intensified RPO scrutiny as authorities push for full wage formalization, especially for large temporary labour forces. Our on-site PF audit defense service prepares complete documentation and provides expert representation during 7A inquiries, strategically challenging the inclusion of non-statutory pay components and protecting employers from inflated PF liabilities.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Rajasthan",
    description:
      "The implementation of the Code on Wages, 2019 (expected November 2025) will significantly alter compensation and compliance in Rajasthan. EPFDesk ensures your organization's seamless transition.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive NWC Salary Restructuring",
        content:
          "The NWC’s 50% wage mandate represents the most significant PF compliance shift in decades, placing Jaipur’s IT hubs and Bhiwadi’s manufacturing units at high financial risk. Our proactive salary restructuring delivers detailed modelling of projected PF and Gratuity liabilities under the new rules, while ensuring every compensation component meets the NWC definition of ‘Wages.’ This guarantees full legal compliance and protects employers from future RPO penalties and under-contribution findings.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Expert Defense Against RPO Jaipur Notices",
        content: (
          <>
            <p>
              RPO Jaipur is increasingly aggressive in scrutinizing wage
              suppression and allowance structuring across Rajasthan’s diverse
              industries. Our 7A inquiry defense prepares robust evidence to
              justify PF wage exclusions by demonstrating the universality and
              regularity of allowances. We also provide targeted 14B damage
              mitigation to reduce punitive penalties and 7Q interest for
              delayed deposits—especially vital in mining and textile sectors
              with irregular payment cycles—effectively safeguarding employers
              from excessive PF liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Optimized Digital Compliance and Claim Management",
        content:
          "EPFDesk delivers a fully paperless, error-free compliance ecosystem tailored to the RPO Jaipur region. We ensure timely, accurate ECR filing and remittance to avoid late-deposit penalties, while our bulk UAN/KYC management service handles complete Aadhaar and bank detail verification for high-attrition industries like IT and textiles. This guarantees smooth claim processing, prevents employee grievances, and maintains uninterrupted statutory compliance.",
      },
    ],
  },
];
export const sectionsPFComplianceLucknow = [
  {
    title:
      "Lucknow’s PF Dynamics: IT Growth, Government Scrutiny, and the New Wage Code",
    description:
      "Lucknow, the administrative and emerging IT hub of Uttar Pradesh, presents a distinct PF compliance landscape. The economy is characterized by a rapidly expanding IT/ITES/BPO sector (Gomti Nagar, Vibhuti Khand), established Defence and Aerospace Manufacturing units (Defence Industrial Corridor), and a vast network of Traditional MSMEs (Chinhat, Mohanlal Ganj).",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES Sector Liability Risk (Gomti Nagar & Vibhuti Khand)",
        content:
          "Many IT and consulting firms in the modern business districts utilize Cost-to-Company (CTC) models with low Basic Pay and high allowances (HRA, Special Allowance). The NWC 2025 mandates that the statutory 'Wages' must constitute at least of total remuneration. Failure to restructure these high-allowance salaries will trigger massive, retrospective PF and Gratuity liability for alleged under-contributions, making these firms vulnerable to assessments by the Regional PF Office (RPO) Lucknow.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Defence Corridor & Manufacturing Contract Labour Scrutiny",
        content: (
          <>
            <p>
              Units associated with the Defence Industrial Corridor and the
              traditional manufacturing clusters in areas like Chinhat and
              Mohanlal Ganj rely heavily on contract labour. The RPO Lucknow, as
              part of a push for formalization, is rigorously scrutinizing the
              inclusion of all emoluments, incentives, and variable pay in the
              PF wages of contract workers, leading to high-value penalty
              demands under Section for past defaults and delays.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Recent EPFO Scrutiny & Amnesties",
        content:
          "Recent news from the RPO Lucknow highlights a focus on efficient claim settlement (disbursing over ₹1,000 crore) alongside the launch of an amnesty scheme (Employees Enrolment Scheme 2025). While this offers a pathway to new coverage, it also signals a clear mandate from the EPFO to bring all eligible establishments into the fold, increasing the risk for non-compliant MSMEs.",
      },
    ],
  },
  {
    title: "Localized EPF Risk Mitigation for Lucknow’s Economic Hubs",
    description:
      "Our services are strategically designed to address the specific compliance risks inherent in Lucknow's key industrial centers",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Gomti Nagar / Vibhuti Khand",
        content:
          "Under the New Wage Code, if allowances exceed 50% of total remuneration, the excess must be added back to ‘Wages’ (Basic + DA + Retaining Allowance), increasing PF liability. We run predictive payroll simulations for your Bangalore workforce to pinpoint the financial impact and enable proactive salary restructuring, safeguarding you from retrospective PF penalties.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Chinhat / Mohanlal Ganj",
        content: (
          <>
            <p>
              Chinhat and Mohanlal Ganj’s MSME, traditional manufacturing, and
              handloom units frequently face PF exposure due to under-reported
              contract labour wages and accumulated 14B penalties for historical
              defaults. Our proactive 7A & 14B defense service prepares
              comprehensive documentation and provides expert representation
              before RPO Lucknow to challenge excessive damages and defend the
              employer’s actual wage basis, helping stabilize compliance and
              reduce financial strain.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Defence Industrial Corridor Units",
        content:
          "Uttar Pradesh’s Defence Industrial Corridor units—spanning aerospace, defence components, and precision engineering—face heightened scrutiny over whether production incentives, bonuses, and special allowances must be included in the PF wage base under the NWC’s expanded ‘Wages’ definition. Our wage definition clarity audit reviews every pay component against statutory criteria and prepares robust documentation to legally exclude non-universal or variable payments, protecting employers from inflated PF liabilities and future 7A assessments.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Aliganj / Aminabad",
        content:
          "Aliganj and Aminabad’s commercial, retail, and educational institutions are under renewed pressure from EPFO amnesty and enforcement drives to regularize historical PF lapses. Our amnesty scheme guidance provides complete end-to-end support to help establishments enroll missed employees, correct past non-compliance, and settle dues with minimum penalties and interest—ensuring a clean regulatory slate and long-term compliance stability.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Lucknow",
    description:
      "The commencement of the Code on Wages, 2019 (expected November 2025) makes PF compliance an immediate strategic priority, not just a statutory routine.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Payroll Structuring for Statutory Safety",
        content:
          "Lucknow establishments must urgently align their payroll structures with the NWC’s 50% ‘Wages’ mandate to avoid heavy retroactive PF liabilities. We conduct a detailed audit to quantify your exact exposure under the new definition, where excluded allowances cannot exceed 50% of total remuneration. Our implementation support guides HR and payroll teams through a smooth, compliant restructuring process that safeguards employee morale and maintains existing CTC budgets while ensuring full statutory safety.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic Defense Against RPO Lucknow Notices",
        content: (
          <>
            <p>
              RPO Lucknow is intensifying its scrutiny through both amnesty
              drives and aggressive 7A assessments. Our 7A assessment management
              provides expert representation to defend your wage structure and
              challenge the improper inclusion of non-statutory allowances in
              the PF wage base. In parallel, our digital compliance and UAN
              clean-up service ensures flawless ECR filing and complete
              Aadhaar–UAN linkage for Lucknow’s fluid workforce, preventing
              technical defaults that often trigger RPO action.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee Gratuity Management",
        content:
          "The NWC grants Fixed-Term Employees gratuity eligibility after only one year of service, creating significant new obligations for project-based businesses and manufacturing units. We help update employment contracts, HR policies, and provisioning systems to accurately calculate and manage this shortened eligibility period, ensuring full compliance and preventing future legal disputes or financial surprises.",
      },
    ],
  },
];
export const sectionsPFComplianceIndore = [
  {
    title:
      "Indore's PF Compliance Landscape: Industrial Growth Meets Regulatory Shift",
    description:
      "Indore, recognized as the commercial nerve center of Madhya Pradesh, features a dynamic economy driven by major industrial clusters: the massive Pithampur Industrial Area (often called the Detroit of India for its Automobile and Engineering concentration), the rapidly expanding Super Corridor and Indore Special Economic Zone (SEZ) (home to IT/ITES and Pharma), and the traditional Textile and Namkeen manufacturing base.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code Mandate (IT & Auto)",
        content:
          "Establishments in the Super Corridor and Pithampur are highly exposed to the NWC 2025 rule that the statutory definition of 'Wages' (Basic Pay + DA) must be at least of the total remuneration. Companies utilizing high-allowance, low-basic salary structures for cost efficiency face a massive, un-provisioned retrospective PF and Gratuity liability. This makes them prime targets for RPO Indore's assessments post-NWC implementation.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pithampur Industrial Belt (Contract Labour & Incentives)",
        content: (
          <>
            <p>
              The large-scale Automobile, Pharmaceutical, and Engineering units
              in Pithampur rely heavily on contract workers and production
              incentives. The NWC 2025, combined with the EPFO's formalization
              drive, means the inclusion of all regular/universal incentives and
              variable pay into PF wages is now non-negotiable. RPO Indore is
              actively pursuing back-dated demands under Section for past
              defaults on under-reporting wages, particularly for contract
              labour.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Indore SEZ Compliance Nuance",
        content:
          "While SEZ units enjoy indirect tax benefits, they are not exempt from PF and labour laws. EPFDesk specializes in advising Indore SEZ units on maintaining full PF compliance, especially regarding the new rules for Fixed-Term Employees (FTEs), who are now eligible for pro-rata gratuity after just one year of service.",
      },
    ],
  },
  {
    title: "Tailored PF Strategy for Indore’s Economic Hubs",
    description:
      "We provide specialized support designed for the industrial risks of Indore's core economic zones",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Pithampur (Auto & Engineering)",
        content:
          "Pithampur’s auto, pharma, and heavy manufacturing units face high PF exposure due to extensive contract labour and incentive-linked pay structures. Our NWC & 7A risk audit conducts a pre-emptive review of payroll, ensuring production bonuses and variable components are correctly treated under PF law, while creating strong documentation to defend against 7A assessments. This framework also provides a robust Principal Employer liability shield against contractor defaults.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Super Corridor / SEZ",
        content: (
          <>
            <p>
              Super Corridor and SEZ-based IT/ITES and corporate service units
              often operate with low Basic Pay structures that fail the NWC’s
              mandatory 50% ‘Wages’ requirement, creating significant PF and
              Gratuity exposure. Our IT payroll blueprint provides a legally
              compliant re-engineering of salary components to meet the 50%
              threshold while minimizing employer cost impact and delivering a
              clear, future-proof path to NWC compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Dewas / Traditional MSMEs",
        content:
          "Dewas’s traditional MSME clusters—textiles, namkeen, and food processing—face mounting pressure from EPFO enrolment drives and penalties for past non-registration or delayed PF contributions. Our compliance regularization service manages the complete Employees’ Enrolment Campaign 2025 process, enabling establishments to correct historical lapses with minimal nominal penalties and restore full statutory compliance efficiently.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Indore",
    description:
      "The implementation of the Code on Wages, 2019 (expected November 2025) is the most significant statutory change for Indore's payroll systems. EPFDesk ensures your business is New Wage Code ready.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive NWC Salary Restructuring rule",
        content:
          "Indore businesses risk major PF and Gratuity liabilities under the NWC’s 50% ‘Wages’ rule if salary structures remain unchanged. Our proactive restructuring calculates your exact exposure and designs a legally compliant, cost-balanced compensation framework that safeguards both compliance and employee retention. We also update employment contracts and HR policies across Pithampur and Super Corridor units to correctly apply the new ‘Wages’ definition for PF, Gratuity, and Bonus calculations, ensuring complete statutory alignment.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Expert RPO Indore Defense and Damage Mitigation",
        content: (
          <>
            <p>
              RPO Indore is intensifying enforcement through high-value
              settlements, strict scrutiny of wage structures, and aggressive 7A
              and 14B actions. Our expert defense team prepares and presents
              complete payroll, attendance, and ECR documentation to contest 7A
              assessments—particularly around variable pay in Pithampur’s
              manufacturing units. We also provide targeted legal representation
              to reduce punitive 14B damages for delayed or under-deposited
              contributions, protecting employers from significant financial
              exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employee (FTE) Gratuity Compliance",
        content:
          "The NWC significantly expands gratuity eligibility by granting Fixed-Term Employees pro-rata gratuity after only one year—a major shift for Indore’s IT and industrial sectors. We immediately update your employment contracts and payroll provisioning systems to ensure every FTE in your SEZ or Super Corridor units receives accurate, compliant pro-rata gratuity as mandated, eliminating future legal exposure and ensuring seamless statutory compliance.",
      },
    ],
  },
];
export const sectionsPFComplianceCoimbatore = [
  {
    title:
      "Coimbatore’s Compliance Challenge: From Manchester to the New Wage Code",
    description:
      "Coimbatore, famously known as the Manchester of South India, operates on a foundation of three high-stakes industrial sectors: the Textile Industry (Tirupur-Coimbatore belt, focused on spinning/weaving), the extensive Engineering and Manufacturing sector (often called the Pump City for its motor/pump units, and Automotive Components), and the growing IT/ITES cluster (around Peelamedu and TIDEL Park).",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Textile Industry and Contract Labour Risk",
        content:
          "Textile mills and ancillaries face a dual threat: the EPFO's aggressive drive for formalization of the workforce and scrutiny over the definition of 'Wages' for their high number of contract and temporary workers. The NWC rule poses a massive risk, forcing the inclusion of many allowances into PF wages, triggering massive, retrospective demands for alleged under-contribution.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Engineering & Pump City Gratuity Exposure",
        content: (
          <>
            <p>
              The large, mid-sized, and tiny engineering units clustered in the
              city often employ Fixed-Term Employees (FTEs) for project-based
              manufacturing. The NWC 2025 mandates pro-rata gratuity eligibility
              for FTEs after just one year of service (down from five years).
              This un-provisioned liability is a significant and immediate
              financial threat to companies around Saravanampatti and Podanur.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "IT/ITES Payroll Restructuring",
        content:
          "Like all IT hubs, firms in Peelamedu and the IT Corridor have traditionally maintained low Basic Pay ($\mathbf{30-40\%}$ of CTC). The NWC $\mathbf{50\%}$ statutory mandate means these companies must immediately re-engineer their payroll to comply, or face statutory default. This requires specialized legal and financial consulting.",
      },
    ],
  },
  {
    title: "Localized EPF Risk Mitigation for Coimbatore’s Economic Hubs",
    description:
      "Our expertise is tailored to the specific PF compliance risks of Coimbatore's key industrial zones",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Peelamedu / TIDEL Park",
        content:
          "Peelamedu and TIDEL Park’s IT/ITES and software firms often operate with low Basic Pay structures that violate the NWC’s mandatory 50% wage floor, creating significant retrospective PF and Gratuity liability. Our IT salary blueprint delivers complete legal and financial restructuring of CTC components to achieve 100% NWC compliance while minimizing employer cost increases and ensuring fully future-proof payroll structures.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Coimbatore Textile Mills",
        content: (
          <>
            <p>
              Coimbatore’s textile mills—spinning, weaving, and machinery
              units—face increasing scrutiny under the NWC as production
              incentives, variable pay, and allowances for contract and
              temporary workers may now fall within the ‘Wages’ definition. Our
              formalization strategy conducts a comprehensive audit of
              contractor and worker pay structures, ensuring full legal
              compliance and creating strong documentation to defend against RPO
              7A inquiries and wage-related disputes.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Saravanampatti / Podanur (Engineering)",
        content:
          "Saravanampatti and Podanur’s engineering units—pump sets, motors, and auto component manufacturers—face significant exposure under the NWC, which grants Fixed-Term Employees pro-rata gratuity after just one year of service. Our FTE liability management updates HR policies and employment contracts to correctly provision for this new obligation, preventing unexpected financial shocks and ensuring full statutory compliance.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pollachi/Other MSMEs",
        content:
          "Pollachi and surrounding MSME units—agro-processing, small foundries, and allied industries—are facing renewed EPFO enforcement for past non-registration and delayed PF contributions, often resulting in 14B penalty notices. Our amnesty and regularization support manages the complete EPFO enrolment and amnesty scheme process end-to-end, helping MSMEs correct historical non-compliance with minimal penalties and interest while restoring long-term statutory compliance.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness",
    description:
      "The NWC is not a future threat; it is a current compliance imperative. EPFDesk ensures seamless transition for your Coimbatore operations.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Compliance: The Rule Defence",
        content:
          "The NWC’s mandatory 50% ‘Wages’ rule requires employers to ensure that all non-excluded allowances remain within half of total remuneration. Our compliance audit quantifies your exact financial exposure under the new framework, giving leadership the data needed for strategic planning. We then deliver a clear implementation roadmap to re-engineer payroll structures, update documentation, and communicate changes effectively—ensuring full NWC compliance and protection from future PF liabilities.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic RPO Defense Management)",
        content: (
          <>
            <p>
              RPO Coimbatore is increasingly active in issuing 7A and 14B
              notices across industries. Our strategic defense service prepares
              and presents comprehensive payroll and compliance records to
              contest 7A assessments—especially disputes over allowance
              inclusion in the PF wage base. We also provide strong 14B penalty
              mitigation, advocating before the PF Commissioner to rationalize
              and reduce punitive damages for delayed contributions or
              historical defaults, protecting employers from excessive financial
              burdens.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Comprehensive Statutory Liability Audit",
        content:
          "Our comprehensive statutory liability audit ensures full alignment with all NWC-driven social security obligations. We update and revise employment contracts to reflect the new pro-rata gratuity entitlement for Fixed-Term Employees after one year, and we manage entire digital compliance workflows—including accurate ECR filing and seamless integration with RPO Coimbatore systems. This minimizes technical defaults and guarantees complete, on-time statutory adherence.",
      },
    ],
  },
];
export const sectionsPFComplianceVadodara = [
  {
    title:
      "Vadodara's Compliance Crossroads: Engineering Might Meets Regulatory Change",
    description:
      "Vadodara, known as Gujarat's Sanskari Nagari and a premier Engineering and Industrial hub, is characterized by large PSUs and major private players in the Chemicals/Petrochemicals (near Gujarat Refinery), Engineering/Power Equipment (L&T, Siemens, ABB, etc.), and Pharmaceuticals (Sun Pharma, Alembic). Crucially, the backbone of this ecosystem is the dense cluster of MSMEs in areas like Makarpura GIDC, Savli GIDC, and Waghodia GIDC.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The NWC Mandate (PSUs & Large Engineering)",
        content:
          "Major employers in the refinery, fertiliser (GSFC, GNFC), and power transmission sectors face the immediate challenge of the NWC 2025 rule that the statutory definition of 'Wages' (Basic Pay + DA) must constitute at least of the total remuneration. Companies utilizing high-allowance, low-basic pay models to manage costs face the risk of massive, retrospective PF liability for years of under-contribution if RPO Vadodara initiates assessments post-NWC.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Makarpura GIDC MSME Risk",
        content: (
          <>
            <p>
              MSMEs in Makarpura GIDC often struggle with payroll complexity and
              frequently rely on external consultants. Recent news reports from
              Gujarat have highlighted cases of consultant fraud involving the
              forgery of PF receipts and TRRNs, creating a high-risk
              environment. This exposes employers to direct demands (for
              short-contribution) and penalties (for delayed/bogus deposits),
              despite having paid the consultant.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Employment (FTE) in Pharma & Engineering",
        content:
          "The Pharmaceutical and project-based Engineering sectors in Vadodara frequently use Fixed-Term Employees (FTEs). The NWC 2025 mandates that FTEs become eligible for pro-rata gratuity after just one year of service. Vadodara companies must update their gratuity provisioning immediately to avoid un-provisioned statutory liabilities.",
      },
    ],
  },
  {
    title: "Vadodara’s Targeted PF Strategy: Addressing Local Risks",
    description:
      "We offer specialized compliance strategies for Vadodara’s unique industrial clusters",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Gujarat Refinery / Heavy Industry",
        content:
          "Gujarat’s refinery and heavy industrial units—petrochemicals, fertilisers, and power—face major PF exposure under the NWC as incentives, production bonuses, and multiple allowances may now fall within the 50% ‘Wages’ definition. Our NWC payroll re-engineering service designs fully compliant salary structures that meet the statutory 50% mandate while minimizing CTC impact. This creates a defensible payroll framework and provides strong protection during RPO 7A inquiries.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Makarpura GIDC / Savli GIDC",
        content: (
          <>
            <p>
              Makarpura and Savli GIDC MSMEs and engineering ancillary units
              face significant PF exposure due to consultant-driven errors,
              delayed deposits, and frequent 7A/14B penalties. Our direct
              digital compliance model replaces risky third-party intermediaries
              with secure, audited in-house processes—covering ECR filing,
              challan management, and all RPO communication—eliminating
              historical defaults and ensuring fully transparent, error-free
              statutory compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Pharmaceuticals / Waghodia GIDC",
        content:
          "Waghodia GIDC’s pharma, biotech, and R&D units rely heavily on Fixed-Term Employees, making them directly affected by the NWC’s provision granting pro-rata gratuity after just one year of service. Our FTE policy update service delivers legal and HR advisory to revise contracts and provisioning systems, ensuring 100% compliance with the new gratuity rules and preparing establishments for upcoming RPO audits.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Gujarat",
    description:
      "The NWC 2025 is a non-negotiable legal shift. EPFDesk ensures your Vadodara business transitions smoothly and securely.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive NWC Salary Restructuring",
        content:
          "Vadodara firms risk major retrospective PF liabilities under the NWC’s 50% ‘Wages’ rule if current salary structures remain unchanged. Our proactive salary restructuring calculates your exact 7A exposure using the new ‘Wages’ definition and provides clear financial projections for compliant payroll models. We then advise on legally sound adjustments to employment agreements and payroll policies to ensure non-statutory allowances stay within the 50% ceiling, fully protecting employers from future liability and statutory action.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Vadodara RPO Defense & Penalty Mitigation",
        content: (
          <>
            <p>
              Vadodara employers face increasing scrutiny from the RPO through
              7A assessments and 14B penalty actions. Our defense service
              provides strategic representation, presenting accurate payroll and
              compliance records to challenge allegations of PF wage suppression
              and ensure only legally valid allowances are considered. We also
              aggressively contest 14B damage notices, using deep local RPO
              expertise to achieve penalty mitigation and 7Q interest
              rationalization, protecting employers from excessive financial
              burdens.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Compliance Security Against Fraud",
        content:
          "With rising PF fraud cases, especially in GIDC belts, companies need a fully transparent and verifiable compliance process. Our audited workflow ensures every PF deposit is made accurately and on time, providing verified TRRN receipts and ECR records directly to the employer. This eliminates the risks of consultant-led fraud, non-deposit issues, and undisclosed defaults, giving firms complete compliance security and peace of mind.",
      },
    ],
  },
];
export const sectionsPFComplianceVisakhapatnam = [
  {
    title:
      "Vizag's Industrial Shift: New Wage Code Demands for the 'City of Destiny'",
    description:
      "Visakhapatnam, the 'City of Destiny', operates on a colossal foundation of heavy industry—the Visakhapatnam Steel Plant (RINL), HPCL Refinery, Visakhapatnam Port Trust (VPT), and major defence establishments like the Naval Dockyard and Hindustan Shipyard Limited (HSL). The industrial backbone is supported by the Jawaharlal Nehru Pharma City and the rapidly expanding IT/ITES corridor in Madhurawada and Rushikonda.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Rule vs. Heavy Industry Wage Structure",
        content:
          "Heavy industries and PSUs in the Vizag region often use complex wage structures with high percentages of variable allowances, which were traditionally kept out of the PF wage base. The NWC 2025 mandates that the statutory definition of 'Wages' (Basic Pay + DA) must constitute at least of the total remuneration. This creates a massive, non-negotiable risk for retrospective assessments by the Regional PF Office (RPO) Visakhapatnam for years of alleged under-contribution.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Fixed-Term Liability in Pharma City",
        content: (
          <>
            <p>
              The Jawaharlal Nehru Pharma City and the surrounding manufacturing
              hubs rely heavily on Fixed-Term Employees (FTEs). The NWC 2025
              introduces a radical change: FTEs are now eligible for pro-rata
              gratuity after just one year of service (down from five years).
              This mandates immediate revision of gratuity provisioning, leading
              to a significant and often unbudgeted increase in statutory
              financial liability.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Investment Compliance: AI & IT Hubs",
        content:
          "Major recent commitments, including Google's $15 billion Data Centre and AI Hub and significant IT investments in Madhurawada, signal a shift towards high-paying, allowance-heavy IT/GCC payrolls. EPFDesk ensures these new ventures achieve $\mathbf{100\%}$ NWC compliance from Day 1, avoiding the costly payroll re-engineering that older firms face.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Compliance Shield",
    description:
      "Our compliance solutions are specifically tailored to the industries driving Visakhapatnam's economy",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "VPT, Steel Plant (RINL), HPCL",
        content:
          "Visakhapatnam’s major industrial establishments—VPT, RINL Steel Plant, and HPCL—operate complex, unionized wage structures where low Basic Pay often violates the NWC’s mandatory 50% wage floor, creating significant 7A exposure. Our industrial wage audit conducts a full statutory analysis of all wage components, prepares legally defensible exclusions, and builds a robust documentation and representation strategy to protect employers from RPO 7A demands and retrospective PF liabilities.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Jawaharlal Nehru Pharma City",
        content: (
          <>
            <p>
              Jawaharlal Nehru Pharma City’s pharma and chemical manufacturing
              units face substantial new gratuity exposure under the NWC, which
              grants Fixed-Term Employees pro-rata gratuity after just one year
              of service. Our FTE liability provisioning service provides
              actuarial and legal guidance to accurately provision for this
              expanded liability and updates all employment contracts to ensure
              100% NWC compliance, safeguarding employers from future financial
              and regulatory risks.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Madhurawada / Rushikonda",
        content:
          "Madhurawada and Rushikonda’s rapidly expanding IT/ITES and GCC ecosystem—including new AI investments—must redesign salary structures to meet the NWC’s mandatory 50% ‘Wages’ rule for all upcoming hires. Our IT NWC salary blueprint creates cost-neutral, fully compliant CTC designs that balance statutory adherence with attractive take-home pay, preventing future PF/Gratuity liabilities and ensuring long-term payroll sustainability.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Hindustan Shipyard / Fishing Harbours",
        content:
          "Hindustan Shipyard and the surrounding fishing harbour ecosystem rely heavily on large contract labour pools and daily-wage workers, making PF enrollment and contribution compliance a major risk area. Our contractor compliance monitoring system audits and verifies PF adherence for all third-party vendors, ensuring complete documentation and shielding the Principal Employer from secondary liability under EPFO scrutiny.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness Partner",
    description:
      "The NWC 2025 changes the foundational definition of 'Wages' for PF and Gratuity. EPFDesk provides the expertise to navigate this transition seamlessly.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Wage Rule Implementation & Risk Defence",
        content:
          "Across Visakhapatnam’s industrial, IT, and port sectors, employers face major PF exposure if their salary structures fail the NWC’s mandatory 50% ‘Wages’ threshold. We conduct a precise financial impact assessment to quantify both retrospective liability and future cost increases arising from non-compliant payrolls. Our legal compliance roadmap then outlines the exact restructuring needed—realigning allowances such as HRA, conveyance, and special pay within the 50% exclusion limit—ensuring full statutory compliance while minimizing added employer cost.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic RPO Visakhapatnam and Defense",
        content: (
          <>
            <p>
              RPO Visakhapatnam is intensifying oversight through 7A assessments
              and 14B penalty actions across port, industrial, and IT sectors.
              Our specialized defense service provides expert representation to
              contest 7A demands involving disputed allowance inclusion, backed
              by strong documentation and legal precedent. We also advocate
              aggressively to reduce punitive 14B damages and rationalize 7Q
              interest for historical defaults, protecting your margins and
              stabilizing long-term PF compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Gratuity Liability Audit (FTE Impact)",
        content:
          "The NWC’s one-year gratuity eligibility for Fixed-Term Employees significantly increases long-term liabilities for IT, industrial, and port-sector employers. Our gratuity liability audit delivers specialized actuarial guidance, updating FTE contracts and internal HR policies to accurately reflect and provision for the new rule. We also clarify the NWC’s treatment of leave encashment within the ‘Wages’ definition for PF and Gratuity, ensuring complete statutory compliance and eliminating future audit exposure.",
      },
    ],
  },
];
export const sectionsPFComplianceNagpur = [
  {
    title: "Nagpur: The Logistics Gateway Under Regulatory Overhaul",
    description:
      "Nagpur, the geographic heart of India, is rapidly transitioning from a traditional industrial centre to a powerhouse of Logistics, Food Processing, and IT—driven by the colossal Multi Modal International Cargo Hub and Airport at Nagpur (MIHAN) and major industrial corridors like Butibori MIDC and Hingna MIDC.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The MIHAN SEZ & IT Wage Challenge",
        content:
          "Companies in the MIHAN SEZ, including IT/ITES, Logistics, and next-generation manufacturing, often employ high-allowance, low-basic-pay models to offer competitive take-home salaries. The NWC 2025 mandates that the statutory definition of 'Wages' (Basic Pay + DA) must constitute at least $\mathbf{50\%}$ of the total remuneration. For MIHAN companies, a non-compliant structure opens the door for the RPO Nagpur to initiate $\mathbf{7A}$ assessments on the difference, potentially leading to retrospective demands covering years of under-contribution.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Hingna MIDC MSME Risk",
        content: (
          <>
            <p>
              The Hingna and Butibori MIDCs house hundreds of MSMEs in the
              engineering, casting, and auto-component sectors (NECO, Mahindra,
              Bajaj Auto group). These units face an acute risk from inquiries
              and penalties due to common operational errors like delayed
              deposits, non-inclusion of variable pay/incentives, and improper
              ECR filing. The unified definition of 'Wages' under the NWC makes
              historical non-compliance more visible and easier to penalize.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Logistics & Food Processing FTE Liability",
        content:
          "With significant new investments in logistics (like the Blackstone-backed XSIO Industrial Park at the Samruddhi Mahamarg corridor) and the expansion of food processing (Patanjali at MIHAN, Haldiram's), the use of Fixed-Term Employees (FTEs) is rising. The NWC 2025 mandates that FTEs become eligible for pro-rata gratuity after just one year of service. This unbudgeted statutory increase demands immediate policy and financial provisioning across the Nagpur logistics and processing chains.",
      },
    ],
  },
  {
    title: "Nagpur’s Targeted PF Strategy: Sector-Specific Compliance",
    description:
      "We provide specialized and localized PF compliance strategies for Nagpur's core economic drivers",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "MIHAN SEZ / IT & Logistics",
        content:
          "Nagpur’s MIHAN SEZ—spanning IT/ITES, export processing, logistics, and data centers—relies on high-value, allowance-heavy salary structures that fail the NWC’s mandatory 50% ‘Wages’ requirement. Our proactive NWC restructuring designs legally defensible salary blueprints for both new hires and existing employees, ensuring full 50% wage-floor compliance without increasing total CTC. This eliminates retrospective PF/Gratuity exposure and neutralizes future 7A audit risk.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Butibori / Hingna MIDC",
        content: (
          <>
            <p>
              Butibori and Hingna MIDC’s engineering, manufacturing, and casting
              units face significant PF exposure due to misclassified contract
              workers and the frequent exclusion of production bonuses and
              variable allowances from the PF wage base. Our MIDC PF audit and
              7A defense service conducts a detailed review of contract-labour
              practices and variable pay schemes to ensure accurate PF
              calculation, while providing strong representation against RPO
              Nagpur 7A show-cause notices to protect employers from inflated
              statutory liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Food Processing / Agro-Hubs",
        content:
          "Nagpur’s food processing and agro hubs—including Haldiram’s, Patanjali units, and major cold-storage facilities—face rising gratuity exposure under the NWC, as Fixed-Term Employees and seasonal contract workers now qualify for pro-rata gratuity after one year. Our gratuity liability provisioning service provides actuarial calculations and budgeting support to quantify this accelerated liability, ensuring financial records are fully compliant and legally defensible ahead of future audits.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness in Central India",
    description:
      "The New Wage Code 2025 is in effect, making compliance a matter of urgency, not choice. EPFDesk ensures your Nagpur business is protected.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Wage Restructuring and De-risking",
        content:
          "The NWC’s 50% wage mandate exposes Nagpur employers to potentially massive retrospective PF liabilities. Our wage restructuring and de-risking service provides precise calculations of your historical and future exposure under the new ‘Wages’ definition, clearly outlining your 7A risk. We then implement a fully compliant salary structure by legally reclassifying allowances so that non-statutory components remain within the 50% cap, ensuring a smooth transition and shielding your business from retrospective PF demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic RPO Nagpur Representation",
        content: (
          <>
            <p>
              RPO Nagpur is intensifying enforcement through frequent 7A
              assessments and 14B penalty actions. Our strategic representation
              prepares strong legal submissions and provides expert appearances
              before the RPO to defend your wage structure and minimize
              short-contribution findings. We also secure 14B penalty reduction
              by demonstrating legitimate causes for delays and defaults,
              significantly mitigating punitive damages and 7Q interest for your
              establishment.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Comprehensive Gratuity and FTE Management",
        content:
          "The NWC’s one-year gratuity eligibility for Fixed-Term Employees significantly expands long-term liabilities for companies across MIHAN and Nagpur’s MIDC zones. Our comprehensive gratuity and FTE management service updates HR policies and employment contracts to reflect this new legal mandate, ensuring accurate provisioning and full statutory compliance while preventing future disputes or audit exposure.",
      },
    ],
  },
];
export const sectionsPFComplianceBhopal = [
  {
    title:
      "Bhopal’s Core Industries: Navigating the New Wage Code (NWC) Revolution",
    description:
      "Bhopal, the state capital and a major economic pivot for Madhya Pradesh, relies on a mix of legacy heavy industry, a vast MSME sector, and rapidly growing IT/Tech investment. The city's economic backbone includes.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "BHEL & PSU Wage Structures",
        content:
          "Historically, the high quantum of allowances in the BHEL-style structure was designed to manage statutory payouts. The NWC Rule mandates that the statutory definition of 'Wages' (Basic Pay + DA) must be at least of the total remuneration. Any structure falling below this threshold is immediately vulnerable to a retrospective assessment by EPFO Bhopal.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Govindpura/Mandideep MSME Contract Labour",
        content: (
          <>
            <p>
              MSMEs extensively use contract labour for core and non-core
              activities. The NWC 2025 tightens rules on Contract Labour
              Regulation, requiring meticulous PF enrollment and payment by the
              Principal Employer. Furthermore, new investments are driving the
              formalization of contracts, where Fixed-Term Employees (FTEs) now
              qualify for pro-rata gratuity after just one year of service (down
              from five), creating an unbudgeted liability for engineering and
              textile units.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Tech Hub Compliance",
        content:
          "The new AI City will attract high-CTC IT and knowledge workers whose salaries typically maximize allowances to improve take-home pay. EPFDesk ensures that these new ventures implement NWC-compliant salary blueprints from Day 1, avoiding the costly payroll re-engineering that older Bhopal firms now face.",
      },
    ],
  },
  {
    title: "Localized Compliance Focus: Bhopal’s Economic Hubs",
    description:
      "Our solutions are specifically tailored to the industrial and technological characteristics of the Bhopal region",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "BHEL / Large PSUs",
        content:
          "BHEL and other large PSUs in the heavy electricals, engineering, and power sectors face significant retrospective PF exposure as allowance-heavy wage structures violate the NWC’s mandatory 50% wage floor, triggering 7A inquiries. Our industrial wage audit provides a detailed legal opinion on permissible allowance exclusions, designs NWC-compliant restructuring of salary components, and delivers robust 7A defense before the RPO Bhopal to protect establishments from inflated PF liabilities and retrospective demands.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Govindpura / Mandideep MIDC",
        content: (
          <>
            <p>
              Govindpura and Mandideep MIDC’s MSMEs, auto-component makers,
              textile units, and chemical industries face rising liability under
              the NWC, which grants Fixed-Term Employees gratuity after just one
              year of service. Our FTE policy integration service updates HR
              contracts, calculates and provisions for this accelerated gratuity
              liability, and strengthens contractor PF-compliance
              monitoring—ensuring full statutory adherence and protecting
              employers from unexpected future costs.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New AI/Knowledge City",
        content:
          "The emerging AI/Knowledge City cluster—spanning IT/ITES, R&D, and fast-growing startups—requires modern salary structures that attract top talent while meeting the NWC’s mandatory 50% ‘Wages’ rule. Our NWC salary blueprint designs optimized, legally compliant CTC frameworks that reduce future PF liability exposure and maximize employee take-home pay, ensuring both compliance and competitiveness for high-skill hiring.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Government Contractors (MPMKVVCL, MPRDC)",
        content:
          "Government contractors serving MPMKVVCL, MPRDC, and related infrastructure and logistics bodies face intense 7A scrutiny over variable allowances and PF under-reporting for outsourced manpower. Our Contractor Compliance Shield ensures full PF adherence for all outsourced staff through rigorous vendor audits and documentation, protecting the Principal Employer from secondary liability and RPO-driven enforcement actions.",
      },
    ],
  },
  {
    title: "EPFDesk: Your New Wage Code (2025) Readiness Partner",
    description:
      "The New Wage Code has redefined statutory Wages affecting PF, ESI, and Gratuity. EPFDesk offers the expertise to secure your Bhopal business.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Wage Rule Implementation & Risk Defence",
        content:
          "Bhopal and Mandideep employers face significant PF exposure if current salary structures fall short of the NWC’s 50% ‘Wages’ threshold. We deliver a detailed financial impact assessment quantifying both retrospective liability and future cost increases, followed by a clear legal compliance roadmap. This restructuring realigns allowances—such as HRA, conveyance, and special pay—within statutory limits, ensuring full NWC adherence while minimizing additional employer cost and protecting against future RPO action.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic RPO Bhopal and Defense",
        content: (
          <>
            <p>
              RPO Bhopal is intensifying 7A assessments and 14B penalty actions
              across industries. Our strategic defense service provides expert
              representation to challenge disputed allowance inclusions and
              mitigate inflated 7A demands using the latest legal precedents. We
              also leverage updated EPFO circulars—such as the simplified
              penalty framework—to argue for substantial reduction of 14B
              punitive damages and 7Q interest, protecting your organization
              from excessive financial exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Gratuity Liability Audit (FTE Impact)",
        content:
          "The NWC’s one-year gratuity eligibility for Fixed-Term Employees significantly increases long-term financial obligations for Bhopal and Mandideep employers. Our gratuity liability audit updates Fixed-Term Employment contracts and internal HR policies to correctly reflect and provision for this new requirement, ensuring full statutory compliance and preventing future disputes or audit-triggered liabilities.",
      },
    ],
  },
];
export const sectionsPFComplianceKanpur = [
  {
    title: "Kanpur: The 'Manchester of the East' Under Statutory Pressure",
    description:
      "Kanpur, the industrial heart of Uttar Pradesh, stands at a crucial regulatory crossroads. The city's economy is powered by three distinct sectors, each facing intense (retrospective liability) risk from the newly implemented New Wage Code (NWC) 2025",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Leather Crisis (Jajmau Cluster)",
        content:
          "The globally recognized Jajmau Leather Cluster, while central to Kanpur's identity, faces heavy environmental regulation (ZLD systems, operational restrictions) which has led to significant business losses and factory shutdowns. Factories that remain operational often use complex contractual and piece-rate payment systems. The NWC's uniform definition of 'Wages' threatens to expose years of under-contribution on these variable payments, inviting aggressive RPO Kanpur assessments on the difference.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Panki MIDC Manufacturing & MSMEs",
        content: (
          <>
            <p>
              The Panki Industrial Area (Sites I-V), housing major players like
              Lohia Starlinger, Kanpur Fertilizer, and a vast network of MSMEs
              in textiles, hosiery, and chemical production, operates with tight
              margins. These units frequently structure salaries with high
              allowances and low basic pay to manage immediate costs. The NWC
              2025 mandates that 'Wages' must be at least 50% of Total
              Remuneration. Non-compliance here is a financial time bomb,
              leading to massive, unbudgeted retrospective PF demands.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The New Defence & Tech Corridor (UPDIC)",
        content:
          "The Kanpur Node of the UP Defence Industrial Corridor (UPDIC) in Narwal Tehsil is witnessing the highest investment among all corridors (including Adani Group and Anant Technologies). These new ventures in aerospace, ammunition, and military attire are hiring high-value, fixed-term employees (FTEs). The NWC makes FTEs eligible for pro-rata gratuity after just one year of service, a critical and immediate liability that must be provisioned for in new project budgets.",
      },
    ],
  },
  {
    title: "Kanpur’s Targeted PF Compliance Strategy",
    description:
      "We offer localized, sector-specific strategies to stabilize payrolls and mitigate risk across Kanpur's major economic zones",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Jajmau Cluster",
        content:
          "Kanpur’s Jajmau leather, textile, and hosiery units face major PF exposure due to non-inclusion of piece-rate wages, production incentives, and temporary worker payments in the PF wage base—common triggers for 7A action. Our piece-rate compliance audit reviews all production-linked pay, provides a legally sound opinion on permissible exclusions, and delivers expert representation before RPO Kanpur to defend against 7A assessments and prevent inflated PF liabilities.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Panki Industrial Area",
        content: (
          <>
            <p>
              Kanpur’s Panki Industrial Area—dominated by manufacturing,
              chemical, and engineering units—faces significant PF exposure as
              legacy low-Basic-Pay structures violate the NWC’s 50% wage floor.
              Our proactive NWC restructuring designs legally defensible salary
              blueprints that align with the 50% mandate while optimizing
              overall CTC impact, preventing massive retrospective PF and
              Gratuity liabilities.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "UPDIC Node (Narwal) & IT",
        content:
          "UPDIC Narwal’s defence manufacturing, aerospace, and high-technology units face rising statutory exposure due to high-CTC, allowance-heavy salary structures and the NWC’s one-year gratuity eligibility for Fixed-Term Employees. Our gratuity liability provisioning delivers actuarial quantification of this accelerated FTE risk and integrates fully NWC-compliant payroll frameworks for all new hires, ensuring long-term financial accuracy and complete statutory compliance.",
      },
    ],
  },
  {
    title: "EPFDesk: New Wage Code (2025) Readiness for UP Industries",
    description:
      "The New Wage Code is not a suggestion—it is the law. EPFDesk ensures your Kanpur operations are compliant and protected.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "NWC Wage Structure De-risking ",
        content:
          "Kanpur’s manufacturing and allied sectors face substantial retrospective PF exposure if their salary structures fail the NWC’s mandatory 50% wage floor. Our NWC wage-structure de-risking service calculates your exact liability—including 7Q interest and 14B penal damages—and provides a complete legal restructuring of CTC components to ensure the statutory ‘Wages’ portion meets the 50% requirement. This eliminates retrospective financial risk and secures long-term compliance across all Kanpur units.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Strategic RPO Kanpur Defense",
        content: (
          <>
            <p>
              RPO Kanpur is known for rigorous enforcement and aggressive 7A
              scrutiny, especially around allowance classification and PF wage
              calculations. Our strategic defense service prepares strong legal
              submissions and provides direct representation before the RPO to
              defend the exclusion of conveyance, fixed incentives, and other
              allowances from the NWC ‘Wages’ definition. We also pursue 14B
              penalty mitigation by challenging punitive damages and excessive
              7Q interest on historical shortfalls, securing maximum possible
              relief for your establishment.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Gratuity and FTE Policy Alignment",
        content:
          "The NWC’s one-year gratuity eligibility for Fixed-Term Employees creates urgent statutory obligations for Kanpur’s export-driven leather and textile units. Our gratuity and FTE policy alignment service updates all employment contracts and HR policies to incorporate the new rule, ensuring accurate provisioning and full legal compliance while preventing future disputes, audit exposure, and unexpected financial liability.",
      },
    ],
  },
];

export const heroDataItCompliance = {
  title: "New Wage Code Impact on IT",
  subTitle: "Mitigate Gratuity & EPF Liability for GICs & ITES in India",
  description:
    "IT/ITES salary structures face the New Wage Code's wage rule. EPFDesk offers specialized compliance for EPF, ESIC, UAN Exit, and audit defense in Bangalore, Pune, & Hyderabad.",
};

export const sectionsItCompliance = [
  {
    title:
      "EPFDesk: Mitigate the New Wage Code Gratuity Liability in India's IT/ITES Sector",
    description:
      "For IT and Global Capability Centers (GICs), payroll compliance is a matter of financial risk management, not just clerical administration. The typical IT salary structure (low basic, high allowances) is now a ticking time bomb under the New Wage Code (NWC).",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Problem",
        content:
          "The NWC mandates that basic wage (for PF, Gratuity, etc.) must be at least of the total remuneration. For non-compliant IT structures, the retrospective liability for underpaid Gratuity and EPF can trigger huge unbudgeted outflows.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Threat",
        content: (
          <>
            <p>
              High attrition in the IT sector leads to increased employee
              grievances (via EPFiGMS), which are the number one trigger for
              mandatory EPF audits, resulting in retrospective demands and
              penalties
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The Solution",
        content:
          "Specialized compliance and payroll restructuring that pre-emptively aligns your company with the NWC definition of 'wages' before the notice arrives.",
      },
    ],
  },
  {
    title:
      "The Physiology of IT Payroll: Why EPFDesk Specializes in High-Volume, High-Attrition Compliance",
    description:
      "We understand the unique operational challenges of the IT/ITES and BPO industries in technology hubs like Bengaluru, Hyderabad, Pune, Chennai, and Noida.",
    //   note: "NOTE: This is not a community for legal advice and on some range of topics (visas, harassment issues, compliance, etc.) the community members are not giving legal advice and should not be considered responsible for that advice. Community members are responsible for ensuring the content they post does not infringe upon the intellectual property rights of others.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "High Attrition",
        content:
          "Accurate UAN Exit Marking & Digital Final Settlement Compliance to prevent post-exit employee grievances (EPFiGMS).",
      },
      {
        color: "bg-white border-gray-300",
        title: "Variable Pay & Bonuses",
        content: (
          <>
            <p>
              Expert calculation of EPF contributions on variable pay and
              incentives, ensuring alignment with the unified NWC definition of
              'Wages.'
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "NWC Gratuity Risk",
        content:
          "Payroll simulation and restructuring to ensure basic wage meets the threshold, mitigating the risk of retrospective Gratuity liability (especially for FTEs).",
      },
    ],
  },
];

export const pastelCardsItCompliance = {
  subTitle: "EPFDesk End-to-End Compliance Shield: Your Deliverables",
  subText:
    "We provide a seamless, digital compliance framework tailored for the scale of GICs and mid-to-large IT firms.",
  cards: [
    {
      title: "EPF / PF Compliance",
      subtitle: `Monthly ECR Filing and Challan generation. UAN Generation, KYC, and Error Rectification. 100% accuracy in contribution calculation.`,
      number: 1,
    },
    {
      title: "ESIC Compliance",
      subtitle: `Monthly ESIC Challan generation. IP Creation and maintenance for employees earning up to ₹21,000 (critical for IT Support & Ops staff).`,
      number: 2,
    },
    {
      title: "Audit & Legal Defense",
      subtitle: `Full documentation and legal defense against EPF inquiries. Mitigation of penalties including (Interest) and (Damages).`,
      number: 3,
    },
  ],
};
export const itComplianceFAQ = [
  {
    question:
      "What is the biggest risk for an IT company under the New Wage Code?",
    answer: `The biggest risk is the potential for an unbudgeted, retrospective liability due to a sudden increase in the Gratuity provision. If your basic wage is below 50% of total remuneration, the liability increases significantly, particularly with the new 1-year gratuity rule for Fixed Term Employees (FTEs).`,
  },
  {
    question: "How can I prevent an EPF 7A audit with high employee attrition?",
    answer: `The most effective defense is 100% accurate and timely UAN Exit Marking upon separation. Unmarked exits are the primary source of 7A triggers via employee complaints to the EPFO portal.`,
  },
  {
    question: "Which IT hubs do you cover?",
    answer: `We provide pan-India compliance services, specializing in the high-volume requirements of the major tech corridors: Bengaluru, Hyderabad, Pune, Chennai, Noida, and Mumbai.`,
  },
];

export const heroDataSmeMsme = {
  title: "SME EPF ESIC Compliance",
  subTitle: "100% Protection from Fines & 7A Audit for Indian MSMEs",
  description:
    "Stop worrying about 7A Notices. EPFDesk offers simplified, affordable EPF, ESIC, and Payroll Compliance for Indian SMEs. Dedicated support for ECR Filing, Challan, and LWFacross all states.",
};
export const sectionsSmeMsme = [
  {
    title:
      "EPFDesk: 100% Statutory Compliance for Indian SMEs. Affordable, Automated, and Audit-Proof.",
    description:
      "Tired of Penalties? Stop Wasting Time on Monthly EPF/ESIC Compliance.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Problem",
        content:
          "Small HR and payroll teams often lack the specialized compliance expertise needed for timely and accurate PF filing. As a result, they miss the monthly 15th deadline, upload incorrect ECR/Challan data, and fail to maintain statutory registers. These lapses directly trigger 7A inquiry notices, accumulate 14B penalty damages, and ultimately delay or derail bank loans, funding rounds, and government tender approvals, creating avoidable financial and operational risk for the company.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Difference",
        content: (
          <>
            <p>
              We act as your dedicated, virtual compliance department, handling
              the entire statutory burden for less than the cost of a single
              in-house hire.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Grow with Confidence: The New Wage Code Advantage for SMEs",
    description:
      "The upcoming New Wage Code is a massive change. While it sounds complex, it is also an opportunity to standardize your payroll structure and minimize future risk.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Proactive NWC Restructuring",
        content:
          "We analyze your current salary components and proactively suggest changes to the basic wage definition, protecting your SME from the future gratuity and bonus liability that will affect every employee.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Focus on Cost Control",
        content: (
          <>
            <p>
              Unlike the IT sector, for SMEs, the New Wage Code is mainly about
              budget predictability. We model the new costs so there are no
              financial surprises when the law is implemented.
            </p>
          </>
        ),
      },
    ],
  },
];
export const pastelCardsSmeMsme = {
  subTitle: "Your SME Compliance Checklist: Done-For-You Services",
  subText:
    "We cover all major statutory obligations that apply to small and medium enterprises across India. Our service is built to be simple and error-free.",
  cards: [
    {
      title: "Monthly Filing Chaos",
      subtitle: `Automated ECR & ESIC Challan Generation: Ensures on-time submission by the and immediate deposit tracking.`,
      number: 1,
    },
    {
      title: "New Employee Onboarding",
      subtitle: `Simple UAN & IP Creation: Seamless registration of all new employees for both EPF and ESIC, ensuring all required statutory forms are immediately processed.`,
      number: 2,
    },
    {
      title: "Audit & Notice Protection",
      subtitle: `Dedicated 7A and 14B Notice Handling:We respond to EPFO/ESIC notices on your behalf, providing all required documentation to mitigate fines and audit risk.`,
      number: 3,
    },
    {
      title: "State-Specific Fees",
      subtitle: `Pan-India Professional Tax (PT) & Labour Welfare Fund (LWF) Management: We track and file the variable, state-specific requirements (e.g., Maharashtra PT, Karnataka LWF) so you don't miss a single deadline.`,
      number: 4,
    },
  ],
};
export const smeMsmeFAQ = [
  {
    question: "How much does non-compliance cost an SME?",
    answer: `Fines and damages (7Q Interest and 14B Damages) can reach up to 100% of the outstanding PF contribution. Even one missed deadline can cost thousands—a major drain on SME working capital. Our service costs only a fraction of the average penalty.`,
  },
  {
    question:
      "My employee count is below 20. Do I still need EPF/ESIC compliance?",
    answer: `EPF is mandatory for establishments with 20+ employees, and ESIC for 10+. However, several states have lower ESIC thresholds. Voluntary registration also offers tax benefits and strengthens employer branding. We guide you on precise applicability for your business.`,
  },
  {
    question: "How is this easier than a local CA/Accountant?",
    answer: `Local CAs are generalists. We are compliance specialists dedicated solely to EPF, ESIC, and Labour Laws. Using automated, error-checking software, we eliminate filing mistakes and provide a single point of contact for all notices—saving you hours of follow-up and ensuring zero-risk compliance.`,
  },
];
export const heroDataMsmeManufacturing = {
  title: "Affordable EPF ESIC compliance for micro business",
  subTitle:
    "To avoid 7A notice MSME India, statutory audit checklist for small factory, EPF ECR filing cost for MSME",
  description:
    "statutory compliance for food processing MSME, labour law compliance for auto component suppliers, minimum wage compliance for trading company India, compliance for textile MSME India",
};
export const sectionsMsmeManufacturing = [
  {
    title:
      "EPFDesk: 100% Statutory Compliance for MSMEs. Protect Your Business from 7A Notices & 14B Fines.",
    description:
      "For MSME owners, compliance is not about luxury—it's about survival. An unexpected 7A audit or 14B penalty can wipe out your working capital and stall your growth.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Owner’s View",
        content:
          "We know your top priority is cash flow and productivity. Compliance often feels like a non-value-add expense until a government notice arrives.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Guarantee",
        content: (
          <>
            <p>
              We handle the entire statutory lifecycle—from Udyam
              Registration to Monthly ECR Filing—for a fixed, affordable fee.
              You get 100% peace of mind and more time to focus on your P&L.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Targeted Compliance for India’s Industrial Hubs and Key Sectors",
    description:
      "Our expertise is tailored to the compliance risks specific to the major MSME industries and locations.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Manufacturing/Auto Components (Pune, Chennai, Gurugram)",
        content:
          "For manufacturing and auto-component units in Pune, Chennai, and Gurugram, compliance risk is highest under the Factories Act and Contract Labour (Regulation & Abolition) Act. Principal Employers are legally liable for PF/ESIC lapses of their contractors, making contract-labour compliance a critical obligation. We help mitigate this exposure through comprehensive contractor payroll audits, document verification, and real-time monitoring to ensure that every worker—direct or contractual—is fully compliant and risk-free for your plant operations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Textile/Apparel (Tiruppur, Surat, Ludhiana)",
        content: (
          <>
            <p>
              Textile and apparel clusters like Tiruppur, Surat, and Ludhiana
              face high compliance exposure due to ESIC-heavy wage structures
              and complex state-wise Labour Welfare Fund (LWF) rules. Frequent
              wage fluctuations and seasonal workforce patterns increase the
              risk of ESIC errors and miscalculations. We ensure accurate ESIC
              submissions, manage multi-state LWF and Professional Tax
              compliance, and maintain error-free statutory
              registers—eliminating penalties and keeping your operations
              audit-ready.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Trading/Retail (Mumbai, Delhi-NCR, Bangalore)",
        content: (
          <>
            <p>
              Trading and retail businesses in Mumbai, Delhi-NCR, and Bangalore
              operate under highly variable, state-specific requirements of the
              Shops & Establishment Act, including rules on working hours,
              weekly offs, and leave entitlements. They also face recurring
              obligations under Professional Tax (PT), with strict timelines for
              monthly/annual filings. We provide centralized compliance
              management, ensuring every store/outlet follows the correct S&E
              Act rules for its state and that PT deductions and deposits are
              made accurately and on time, eliminating penalties and ensuring
              smooth operations across all locations.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Food Processing/Agro(Gujarat, Maharashtra, Bihar)",
        content: (
          <>
            <p>
              Food processing and agro units in Gujarat, Maharashtra, and Bihar
              face constant challenges in complying with the Minimum Wages Act,
              especially due to large volumes of unorganized labour and rapidly
              changing daily-wage categories. Seasonal and migrant workforce
              patterns further complicate PF applicability and accurate
              contribution handling. We ensure precise minimum wage
              calculations, correct classification of workers, and fully
              compliant PF processes for variable and seasonal
              staffing—protecting your unit from penalties and wage disputes
              while keeping operations running smoothly.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "The MSME Compliance Shield: Our Core Deliverables",
    description:
      "We simplify the complex statutory requirements into a single, predictable monthly service package.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Provident Fund (EPF) Management",
        content:
          "We manage end-to-end Provident Fund (EPF) compliance, ensuring on-time ECR generation and filing before the 15th, eliminating penalties and interest. Every employee’s UAN is generated, verified, and fully KYC-compliant, enabling smooth transfers and withdrawals. We also handle grievance defense through EPFiGMS, resolving employee issues proactively to prevent complaints that commonly trigger 7A inquiries. This ensures your organization maintains clean, audit-ready PF compliance throughout the year.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESIC (Employee State Insurance) Administration",
        content: (
          <>
            <p>
              We handle complete ESIC administration, ensuring every eligible
              employee earning below ₹21,000/month is registered with an IP
              Number on time. Our team manages accurate monthly contribution
              calculations and ensures error-free half-yearly return filing,
              preventing penalties, compliance gaps, and employee benefit
              disruptions.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Labour Law Mandates",
        content: (
          <>
            <p>
              We ensure full compliance with Professional Tax (PT) and Labour
              Welfare Fund (LWF) requirements across states such as Gujarat,
              Tamil Nadu, and Karnataka, managing timely deductions and filings.
              Our team also provides expert guidance on the New Wage Code,
              helping you structure Basic Wages correctly to prevent future PF,
              ESIC, and Gratuity liabilities—keeping your organization prepared,
              compliant, and risk-free.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Audit & Inspection Support",
        content: (
          <>
            <p>
              We manage the complete lifecycle of EPFO, ESIC, and Labour
              Department notices, ensuring timely response and full compliance.
              Our team prepares all required documentation and provides expert
              representation during 7A assessment proceedings and 14B damages
              hearings, safeguarding your organization from penalties, interest,
              and legal exposure while maintaining a clean compliance track
              record.
            </p>
          </>
        ),
      },
    ],
  },
];
export const pastelCardsMsmeManufacturing = {
  subTitle: "Why EPFDesk is the Smartest Compliance Partner for Your MSME",
  subText:
    "We cover all major statutory obligations that apply to small and medium enterprises across India. Our service is built to be simple and error-free.",
  cards: [
    {
      title: "Cost Predictability",
      subtitle: `SMEs often face unpredictable expenses due to variable lawyer or accountant fees and sudden compliance fines. We eliminate this uncertainty with a fixed, low monthly fee—no hidden charges, no surprise penalties—giving you complete cost predictability and budgeting control.`,
      number: 1,
    },
    {
      title: "Simplicity",
      subtitle: `Compliance becomes overwhelming when you’re juggling multiple filings, monthly deadlines, and state-specific formats. We simplify everything with one single point of contact, handling the entire compliance process end-to-end so your team can focus on running the business—not managing paperwork.`,
      number: 2,
    },
    {
      title: "Risk Mitigation",
      subtitle: `Businesses often operate under the constant fear of unexpected audits, inspections, or statutory notices. We eliminate this risk by maintaining audit-proof documentation and providing immediate expert defense against any EPFO, ESIC, or Labour notices—ensuring your organization stays protected and fully compliant at all times.`,
      number: 3,
    },
    {
      title: "Modernization",
      subtitle: `Many organizations still depend on manual spreadsheets and paper files, leading to errors, delays, and poor audit readiness. We modernize your compliance operations with digital record-keeping, giving you instant access to all statutory registers and documents—accurate, organized, and always audit-ready.`,
      number: 4,
    },
  ],
};
export const heroDataFoodAndBevarage = {
  title: "FSSAI labor law compliance for cloud kitchen India",
  subTitle:
    "To avoid ESIC penalties restaurant India, integrated payroll FSSAI compliance solution, statutory compliance for hotel workforce India",
  description:
    "Minimum wage compliance quick service restaurant India, EPF ESIC filing for high attrition staff, labor law compliance for seasonal workforce hospitality, gratuity impact new wage code restaurants",
};
export const sectionsFoodAndBevarage = [
  {
    title:
      "Stop 70% of F&B Penalties. 100% Compliance for Restaurants, Cloud Kitchens, and Hotels: EPF, ESIC, & FSSAI.",
    description:
      "As an F&B operator, you are fighting a two-front war: Food Safety (FSSAI) and Employee Welfare (Labour Laws). The frequent hiring and firing, variable shift hours, and state-level wage rules make compliance a daily risk, unlike any other sector.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The F&B Owner's Reality",
        content:
          "Running an F&B business comes with intense compliance pressure. High employee turnover means constant UAN/IP updates and settlements—any delay can trigger EPF notices. Rapidly changing state-specific minimum wages for unskilled and semi-skilled staff make payroll compliance risky, with heavy fines during inspections. On top of that, FSSAI non-compliance on hygiene or documentation can lead to penalties of up to ₹10 lakh or even temporary shutdowns. We help F&B owners stay fully compliant, protected, and audit-ready at all times.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Solution",
        content: (
          <>
            <p>
              We provide an integrated compliance firewall for your entire
              operation, ensuring both your kitchen and your payroll are 100%
              audit-proof.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Integrated F&B Compliance Checklist: Dual Protection",
    description:
      "We manage the statutory burden across your two highest-risk areas, allowing you to focus on the menu and the customer experience.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Labour Law (EPF/ESIC)",
        content:
          "F&B and hospitality businesses struggle with variable daily/hourly wages and high staff attrition, which often results in PF miscalculations and delayed settlements. We solve this with automated ESIC wage filtering that instantly identifies ESIC-eligible employees (<₹21,000) even with fluctuating shifts. We also complete instant exit formalities to ensure employees receive timely PF withdrawal documents—eliminating errors, delays, and compliance risks.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Minimum Wages Act",
        content: (
          <>
            <p>
              F&B chains operating across cities like Bangalore, Pune, and
              Chennai must constantly track different minimum wage rates for
              kitchen and service staff—creating a high-risk compliance burden.
              We solve this with a Pan-India Minimum Wage Matrix, automatically
              updating every state’s wage changes and integrating them directly
              into your payroll system to ensure guaranteed, audit-proof
              compliance across all outlets.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "FSSAI Documentation",
        content: (
          <>
            <p>
              F&B outlets frequently miss FSSAI license renewal deadlines and
              fail to maintain mandatory hygiene and water-testing records—both
              major triggers for penalties and compliance action. We provide
              FSSAI license renewal tracking along with complete support for
              maintaining all required FSSAI registers, ensuring your outlet
              stays fully compliant and inspection-ready at all times.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Local Laws (S&E Act)",
        content: (
          <>
            <p>
              F&B outlets must comply with strict Shops & Establishment Act
              rules on working hours, weekly offs, overtime, and especially
              protocols for women working night shifts. Inspectors regularly
              verify shift rosters and compliance with local police and labour
              authority requirements. We provide S&E Act advisory to ensure your
              shift schedules, overtime records, and leave policies meet all
              state-specific regulations—keeping your outlet fully compliant and
              inspection-ready.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Compliance Across India's F&B Hotspots",
    description:
      "Our expertise is tailored for the unique statutory environments of major F&B hubs",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Delhi-NCR (Gurugram/Noida)",
        content:
          "Focus on the new National Capital Territory (NCT) Minimum Wages and Contract Labour Rules for catering units.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Mumbai/Pune",
        content: (
          <>
            <p>
              Specialized handling of the mandatory Maharashtra Labour Welfare
              Fund (LWF) and complex Professional Tax (PT) calculations.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Bangalore",
        content: (
          <>
            <p>
              Expertise in the stringent Karnataka Shops & Establishment
              Act rules, which are highly enforced in the tech-driven food
              delivery sector.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Chennai/Hyderabad",
        content: (
          <>
            <p>
              Focus on Southern Minimum Wage rules and FSSAI requirements for
              large-scale food manufacturing/commissaries.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataRetailSector = {
  title: "Multi-state Shops and Establishment Act compliance India",
  subTitle:
    "Single dashboard for retail labour law compliance, EPF ESIC filing for part-time retail staff.",
  description:
    "Digital register of employment retail India, Shops Act license renewal service for chain stores, centralized retail compliance management system, online labour law returns for retail",
};
export const sectionsRetailSector = [
  {
    title:
      "Multi-State Retail Compliance Simplified. 100% Audit-Proof Your Shops & Establishments Act Filings.",
    description:
      "If you run a retail chain, your biggest compliance challenge isn't EPF—it's managing 50+ different rules for leaves, closing hours, and mandatory registers under the Shops & Establishment (S&E) Act. Every time you open a new store in a new state (e.g., from Telangana to Rajasthan), your compliance manual changes entirely.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Retail Owner’s Burden",
        content:
          "Your store manager's focus should be on sales, not on whether the Tamil Nadu LWFreturn deadline differs from the Gujarat PT deadline. State-level notices can shut down a store and destroy local reputation faster than a central government audit.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Retail Uniformity Shield",
        content: (
          <>
            <p>
              We provide a single, cloud-based framework that standardizes your
              compliance, automatically handling the unique requirements of
              every state you operate in. Your stores remain focused on the
              customer; we handle the government.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Your Pan-India Retail Compliance Blueprint",
    description:
      "We manage the statutory chaos inherent in the decentralized retail environment.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Shops & Establishment Act",
        content:
          "S&E Act requirements vary widely across states and cities—covering overtime rules, weekly offs, shift timings, and mandatory registers like Form E, F, and G. These variations create high compliance risk during inspections. We offer centralized S&E management with fully digitized statutory registers and real-time alerts for state-specific deadlines, ensuring every outlet stays compliant and audit-ready.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Labour Welfare Fund (LWF)",
        content: (
          <>
            <p>
              LWF compliance is challenging because every state follows
              different contribution rates and filing frequencies—for example,
              Maharashtra requires half-yearly filings, while others file
              annually. We manage this complexity with an automated LWF tracker
              that monitors state-wise requirements, ensures timely contribution
              deposits, and prevents any risk of interest or penalties.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Professional Tax (PT)",
        content: (
          <>
            <p>
              Professional Tax adds complexity to payroll because each state has
              its own salary slabs, rules, and monthly or quarterly deposit
              timelines—such as in Karnataka and West Bengal. We streamline
              compliance through full payroll integration, ensuring accurate PT
              deductions, state-specific filings, and on-time deposits for every
              location your business operates in.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code",
        content: (
          <>
            <p>
              Retail and multi-outlet businesses often rely on high-allowance,
              low-basic salary structures. Under the 50% Basic Wage rule of the
              New Wage Code, this creates a major risk of sharply increased PF
              and Gratuity liabilities, directly affecting profitability. We
              provide proactive salary restructuring, helping you redesign
              compensation across all locations to stay compliant while
              stabilizing the P&L impact and avoiding future financial shocks.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Location Focus: Securing Compliance in India's Retail Hubs",
    description:
      "We understand the specific enforcement priorities in key retail markets",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Mumbai/Pune (Maharashtra)",
        content:
          "Stringent compliance with the Maharashtra Shops & Establishment Act (which allows 24/7 operation with proper procedures) and mandatory LWF contributions.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Bangalore/Hyderabad (Karnataka/Telangana)",
        content: (
          <>
            <p>
              High focus on the minimum wage for skilled/unskilled employees and
              the enforcement of the PT Act.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Delhi/NCR",
        content: (
          <>
            <p>
              Managing the NCT Shops Act and the specific rules for multi-story
              malls and retail parks, including women working night shifts.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Chennai/Kolkata",
        content: (
          <>
            <p>
              Expertise in regional labour departments' processes for Trade
              License and local Inspector-cum-Facilitator systems.
            </p>
          </>
        ),
      },
    ],
  },
];
export const pastelCardsRetailSector = {
  subTitle: "Why Retail Chains Choose EPFDesk for Compliance",
  // subText: "We cover all major statutory obligations that apply to small and medium enterprises across India. Our service is built to be simple and error-free.",
  cards: [
    {
      title: "Audit Panic",
      subtitle: `Retail and F&B chains often face sudden S&E or labour inspections, creating last-minute panic and risking heavy fines. We ensure daily audit-readiness for every outlet with fully updated registers, compliant rosters, and accurate filings. Our Zero Penalty Guarantee protects your working capital by preventing unexpected fines and compliance shocks—no surprises, no disruptions.`,
      number: 1,
    },

    {
      title: "Decentralized Records",
      subtitle: `Many retail and F&B chains struggle with scattered paperwork—licenses, returns, and registers stored differently across multiple outlets. We solve this with a single, digital compliance dashboard that centralizes every document in one secure portal. This gives your central HR and Finance teams 100% control and real-time visibility across all 50+ stores, ensuring seamless oversight and zero compliance gaps.`,
      number: 2,
    },
    {
      title: "Staff Churn",
      subtitle: `High staff churn in retail and F&B leads to constant workload around UAN generation, PF transfers, and final settlements, increasing the risk of errors and compliance lapses. We streamline these processes with efficient bulk handling and automated workflows, ensuring smooth, timely off-boarding. This reduces exit-related liabilities and strengthens employee relations with a professional, hassle-free experience.`,
      number: 3,
    },
  ],
};
export const heroDataEducation = {
  title: "End-to-End Compliance for Educational Trusts, Schools & Universities",
  subTitle:
    "Protect Your Trust Status, Secure Funding, and Ensure 100% Labour Law Compliance Across All Campuses",
  description:
    "Educational institutions face complex compliance challenges—from safeguarding 12A/80G registrations, managing EPF/ESIC for teaching & non-teaching staff, and ensuring POSH & Maternity Benefit compliance, to meeting UGC/AICTE/state education mandates.",
};
export const sectionsEducationCharitable = [
  {
    title:
      "Educational Trust Compliance: Protect Your 12A Status. 100% Statutory Adherence for Schools & Colleges.",
    description:
      "Running an educational institution is a dual fiduciary duty: academic excellence and statutory adherence. Unlike commercial businesses, a compliance failure here risks not just a fine, but the cancellation of your crucial Income Tax Exemptions (12A/80G) or the de-recognition by a statutory body (UGC/AICTE).",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Educational Leader's Triple Risk",
        content:
          "Educational institutions face three critical compliance risks. First, Trust Law scrutiny demands accurate books of accounts, proper application of income, and timely filing of Forms 10A/10B—any lapse can immediately jeopardize tax-exempt status. Second, the dual labour burden of applying EPF and ESIC differently to teaching and non-teaching staff often leads to retroactive demands and heavy interest penalties during audits. Third, POSH compliance is mandatory—failure to establish an Internal Complaints Committee (ICC) or conduct regular training exposes the institution to serious legal and reputational consequences.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Education Compliance Shield",
        content: (
          <>
            <p>
              We provide specialized consulting and execution that safeguards
              your trust status, streamlines payroll, and ensures mandatory
              social compliance is handled with expertise.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "The Critical Compliance Pillars for Educational Trusts",
    description:
      "We manage the complexity where Trust Law meets Labour Law, preventing liabilities that threaten your institution's existence.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Income Tax & Trust Law",
        content:
          "Educational trusts must carefully maintain 12A, 80G, and FCRA compliance, ensuring proper application of income, correct use of corpus funds, and timely filing of annual returns. Any deviation can threaten the trust’s tax-exempt status. We provide Trust Return Management & Audit Support, covering Form 10B/10BD filing, FCRA reporting, and full guidance on income-application rules to keep your trust compliant, protected, and eligible for grants and donations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "EPF/ESIC/Gratuity",
        content: (
          <>
            <p>
              Many educational institutions struggle with teacher
              classification, often misunderstanding whether EPF and ESIC apply
              to teaching staff. Following a 1988 Supreme Court ruling, EPF is
              fully applicable to teachers, and incorrect treatment leads to
              serious non-compliance. We provide an EPF & Gratuity roadmap with
              accurate payroll processing, compliant gratuity calculations for
              teachers, and efficient bulk handling of EPF/ESIC for large
              non-teaching staff groups—ensuring complete statutory compliance
              across the institution.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "POSH (Sexual Harassment)",
        content: (
          <>
            <p>
              Educational institutions must enforce strict zero-tolerance POSH
              compliance, as mandated by UGC and AICTE. The POSH Act applies to
              both employees and students, making the formation of a fully
              functional Internal Complaints Committee (ICC) and regular
              training mandatory. We support complete ICC formation, conduct
              annual sensitization programs for staff and students, and ensure
              accurate filing of the POSH Annual Report, keeping your campus
              legally compliant and risk-free.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Minimum Wages & S&E Act",
        content: (
          <>
            <p>
              Non-teaching staff such as sweepers, clerks, and support personnel
              must be paid according to state-specific minimum wage
              notifications and comply with local Shops & Establishment (S&E)
              rules. Any deviation can trigger Labour Department inspections and
              reputational damage for the institution. We provide state-specific
              minimum wage integration, ensuring that all support staff wages
              are fully compliant and protected against local notices or
              penalties.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Essential Compliance Services for Your Institution",
    description:
      "Our services are structured to manage the administrative load on your Bursar, Registrar, or Head of HR.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Mandatory Registries Digitization",
        content:
          "Creation and maintenance of all statutory records (Attendance, Leave, Wages) in a format compliant with the local Shops & Establishment Act (for non-academic staff areas).",
      },
      {
        color: "bg-white border-gray-300",
        title: "Faculty Appointment Compliance",
        content: (
          <>
            <p>
              Ensuring offer letters and service rules align with
              the UGC/AICTE/State University norms to prevent employee disputes.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Labour Code Readiness",
        content: (
          <>
            <p>
              Expert review of your current salary structure to prepare for the
              inevitable implementation of the New Code on Wages, especially
              concerning the Gratuity liability for long-serving teachers.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataHealthcare = {
  title:
    "Complete Labour Law & Regulatory Compliance for Hospitals, Pharma & Healthcare Chains",
  subTitle:
    "From EPF/ESIC for Doctors to Drug Licensing & Factories Act Compliance—We Safeguard Your Entire Healthcare Workforce and Operations",
  description:
    "Healthcare and pharmaceutical institutions operate in one of India’s most heavily regulated environments. HR and compliance teams must simultaneously manage EPF/ESIC for doctors, consultants, nurses, and support staff, maintain Factories Act and OHS Code compliance for pharma manufacturing.",
};
export const sectionsHealthcare = [
  {
    title:
      "Zero-Risk Healthcare Compliance. From Drug Licenses to Factories Act, Secure Your Operations.",
    description:
      "In the healthcare and pharmaceutical industry, compliance is the difference between an operational license and an immediate closure notice. Your regulatory burden is dual-layered: specific licensing (CDSCO/State Drug Authorities) and general labour law (EPF/ESIC/Factories Act).",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Critical Threat",
        content:
          "An incorrect calculation of EPF for a resident doctor or a lapse in maintaining the mandatory registers under the Factories Act can trigger an inspection that leads to scrutiny of your primary licenses.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Healthcare Shield",
        content: (
          <>
            <p>
              We specialize in this dual compliance universe. We manage the core
              labour laws that impact your payroll (EPF/ESIC/Gratuity) while
              providing the documentation rigor needed to sail through
              specialized audits (NABH, GMP, and Drug Inspector inspections).
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Compliance Across the Healthcare Value Chain",
    description:
      "Our services are segmented to address the unique statutory needs of each business type in the medical sector.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Hospitals/Nursing Homes",
        content:
          "Hospitals and nursing homes often struggle with correctly classifying doctors, consultants, nurses, and administrative staff for EPF and ESIC purposes. Misclassifying professional fee recipients as non-employees can trigger heavy retrospective PF/ESI demands during audits. We provide precise EPF/ESI liability consulting, helping you distinguish employees from consultants and ensuring accurate contributions—protecting your institution from major financial and legal exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Pharma Manufacturing Units",
        content: (
          <>
            <p>
              Pharmaceutical manufacturing units operate under strict Factories
              Act, OSHWC Code, and environmental (ETP/PCB) requirements.
              Non-compliance with safety norms, hazardous waste handling,
              working-hour rules, or factory documentation can lead to severe
              penalties and operational shutdowns. We provide integrated factory
              and labour audits, covering Form 7/8 annual return filings,
              mandatory safety committee compliance, and full coordination with
              the Pollution Control Board (PCB) to keep your plant fully
              compliant, audit-ready, and risk-free.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Pharmacy Chains (Retail/Wholesale)",
        content: (
          <>
            <p>
              Pharmacy chains must strictly comply with the Drugs & Cosmetics
              Act, including timely license renewals, maintaining approved
              storage conditions, and ensuring certified Registered Pharmacists
              are employed at every outlet. Any lapse can lead to license
              suspension and business disruption. We offer complete license
              life-cycle management, including renewal tracking and assistance
              for Wholesale (Form 20B/21B) and Retail Drug Licenses (Form
              20/21), fully aligned with state-specific labour law
              requirements—ensuring uninterrupted, compliant operations across
              all pharmacy locations.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Key Statutory Risk Mitigation Services",
    description: "We turn your high-risk areas into audit-ready operations",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Social Security for Healthcare",
        content:
          "We manage the complex contribution cycles for high-volume staff (nurses, paramedics, support staff) and handle the sensitive classification of specialist doctors and visiting faculty to minimize tax and liability exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title:
          "Occupational Safety, Health, and Working Conditions (OSHWC) Code Readiness",
        content: (
          <>
            <p>
              For manufacturing, we assist with the required risk assessments,
              health monitoring, and safety committee documentation under the
              new code, replacing the archaic Factories Act provisions.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Management",
        content: (
          <>
            <p>
              We ensure full principal employer compliance for outsourced
              services (security, housekeeping, mess staff) as mandated by
              the Contract Labour (R&A) Act by auditing vendor EPF/ESIC
              remittances and license status.
            </p>
          </>
        ),
      },
    ],
  },
];
export const pastelCardsHealthcare = {
  subTitle: "Why Leading Medical Groups Trust EPFDesk",
  cards: [
    {
      title: "Deep Domain Expertise",
      subtitle: `We understand the difference between the Clinical Establishments Act and the Shops & Establishment Act, applying the correct labour law for your specific business activity.`,
      number: 1,
    },

    {
      title: "Audit Confidence",
      subtitle: `Our documentation guarantees that your statutory records (registers, attendance, wages) align perfectly with the requirements of Drug Inspectors, EPF Enforcement Officers, and Factory Inspectors.`,
      number: 2,
    },
    {
      title: "Pan-India Coverage, Central Control",
      subtitle: `Manage the diverse Factories Act rules across states (Gujarat, Maharashtra, Telangana) and the unique S&E Act rules for your retail outlets from a single digital dashboard.`,
      number: 3,
    },
  ],
};
export const heroDataHospitality = {
  title:
    "Complete Labour Law & Payroll Compliance for Restaurants, Hotels & QSR Chains",
  subTitle:
    "Multi-State S&E, EPF/ESIC, Overtime, Licensing & New Wage Code Compliance—All Managed Under One Expert Platform",
  description:
    "F&B and hospitality businesses operate under complex, fast-changing labour and licensing laws. With high attrition, shift-based staffing, multi-city outlets, and strict statutory registers, compliance becomes extremely challenging. We support restaurant chains, hotels, cloud kitchens, and QSR brands with end-to-end compliance management",
};
export const sectionsHospitality = [
  {
    title:
      "Stabilize Your 24/7 Operations. Automated Labour Compliance for Hotels, QSRs & F&B Chains.",
    description:
      "In Hospitality, your staff is your product. But managing a high-volume, variable workforce across long hours is a constant compliance risk. A minor error in Minimum Wage calculation for a single chef or a lapse in maintaining the Shops & Establishment Act registers can quickly lead to heavy fines, union issues, or business closure.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Hospitality Compliance Challenge",
        content:
          "Hospitality businesses face intense compliance pressure across multiple fronts. State-specific Shops & Establishment Act rules vary widely, making it difficult to standardize weekly offs, working hours, and leave across locations. Frequent changes in minimum wage zones for waiters, cleaners, and security staff create constant payroll reconciliation issues. High attrition only adds to the burden—requiring nonstop EPF/ESIC enrollments, exits, and updates, where even a single missed step can lead to penalties and compliance notices.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk F&B Compliance Solution",
        content: (
          <>
            <p>
              We provide an integrated, state-specific compliance platform that
              automates attendance, accurately calculates minimum wages and
              overtime, and guarantees the security of your statutory filings
              across all your locations.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "The Top 3 Compliance Liabilities We Eliminate for Hospitality",
    description:
      "We manage the core legal issues that keep Owners, GMs, and HR Managers in the hospitality sector up at night.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Shops & Establishment Act (S&E)",
        content:
          "Hospitality businesses operating across multiple states must maintain different statutory registers for attendance, leave, holidays, and working hours—each with its own format under the Shops & Establishment Act. Missing or outdated registers are among the most common and immediate audit failures. We provide centralized digital S&E register management, maintaining all required forms—such as Form A, Muster Roll, and Leave Registers—on a single cloud platform that is always inspection-ready for any local labour authority.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Minimum Wages & Overtime",
        content: (
          <>
            <p>
              Minimum Wages in the hospitality sector change frequently due to
              Variable Dearness Allowance (VDA) updates and differ across city
              zones (A, B, C) and skill levels. These constant changes make
              payroll accuracy difficult and expose businesses to underpayment
              penalties and back-wage claims. Our automated payroll engine
              updates instantly with every state-wise VDA revision, ensuring
              that all staff—across all locations—receive fully compliant Basic
              + DA wages, eliminating overtime miscalculations and wage-related
              compliance risks.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "POSH & Workplace Safety",
        content: (
          <>
            <p>
              In the hospitality sector, high staff interaction, guest-facing
              roles, and frequent night shifts—especially for women—make POSH
              compliance non-negotiable. Every hotel, restaurant, and QSR outlet
              must maintain a formally constituted Internal Complaints Committee
              (ICC) and conduct regular workforce sensitization. We deliver
              end-to-end POSH compliance, including ICC formation, mandatory
              annual training for all employees, and proper filing of the Annual
              Report—protecting your brand’s reputation and ensuring a safe,
              legally compliant workplace.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Specialized Services for Seamless Restaurant & Hotel Operations",
    description:
      "Our services are designed to work around the operational realities of a 24/7 business",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Audit",
        content:
          "Full compliance check for outsourced staff (Security, Housekeeping, Valet), ensuring your vendors are remitting EPF/ESIC correctly, thereby shielding the Principal Employer (Hotel/Restaurant).",
      },
      {
        color: "bg-white border-gray-300",
        title: "Statutory Licence Tracking",
        content: (
          <>
            <p>
              We track the expiry and renewal status of all critical
              labour-related licences, including Shops & Establishment
              Certificates and Labour Welfare Fund (LWF) filings.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Attendance & Roster Integration",
        content: (
          <>
            <p>
              Seamlessly integrate your biometric or digital attendance system
              (Aadhaar-based or otherwise) directly into our payroll system for
              accurate calculation of overtime (at $2 \times$ the rate) and
              weekly offs.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataStartup = {
  title:
    "Complete Labour Law & Payroll Compliance for Startups Preparing to Scale",
  subTitle:
    "Due Diligence, EPF/ESIC, ESOP Compliance & DPIIT Benefits—All Managed End-to-End for Fast-Growing Tech Teams",
  description:
    "Startups grow fast—but compliance gaps grow even faster. From investor due diligence to employee classification, even small mistakes in EPF/ESIC, payroll, ESOP structures, or local labour laws can derail a funding round. We help early-stage and scaling startups build a clean, compliant foundation by managing all labour, payroll, and statutory obligations under one platform.",
};
export const sectionsStartup = [
  {
    title:
      "Fundraise Ready Compliance. Secure Your Due Diligence with a Clean Slate.",
    description:
      "The moment your startup signs a term sheet, investor due diligence begins. A significant percentage of funding delays and valuation haircuts happen because of a messy cap table or non-compliant payroll. Statutory compliance is not just about avoiding fines; it's about validating your business structure to external investors.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Startup Risk",
        content:
          "Misclassification of your early engineers or consultants as freelancers (avoiding EPF/ESIC) is a guaranteed red flag that leads to retrospective liability demands during due diligence, potentially stalling your entire funding round.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Investor Confidence Guarantee",
        content: (
          <>
            <p>
              We specialize in bringing early-stage companies to 100%
              compliance rapidly. We handle the complex labour laws (PF, ESI,
              Gratuity) and ensure your records are perfectly audit-ready,
              allowing you to focus on product and scale.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Critical Compliance Checkpoints for Funding Rounds",
    description:
      "We focus on the three areas where investors find the highest risk exposure in growing startups",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "EPF/ESIC Compliance",
        content:
          "Startups frequently misjudge the 10-employee ESIC and 20-employee EPF thresholds, leading to delayed registration and significant back-dated liabilities. We perform a complete retro-fit and compliance clean-up, calculating and regularizing outstanding dues and securing zero-liability certificates—ensuring your startup is fully compliant and prepared for investor due diligence.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Employee Classification",
        content: (
          <>
            <p>
              Many startups misclassify full-time engineers and core team
              members as “consultants” to avoid EPF/ESIC contributions, which
              becomes a major red flag during audits and investor due diligence.
              We conduct a thorough legal classification audit, review service
              agreements, and reclassify roles in line with the Code on Wages
              definition of ‘wage’. Our process ensures correct payroll
              implementation and 100% compliance, eliminating the risk of
              penalties, back-dated liabilities, or legal challenges.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "POSH & Workplace Safety",
        content: (
          <>
            <p>
              Startups often overlook the mandatory requirement to form an
              Internal Complaints Committee (ICC) under the POSH Act—even if
              they have a small or fully remote team. This creates significant
              legal and reputational exposure during audits or funding rounds.
              We deliver remote-ready POSH compliance, including ICC formation,
              mandatory employee training, and timely Annual Report filing,
              ensuring your startup meets every statutory requirement and stays
              fully protected.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Enabling Startup Growth & Incentives",
    description:
      "We leverage government initiatives to provide compliance ease while ensuring security for your employees.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "DPIIT Recognition & Self-Certification",
        content:
          "For recognized startups, we guide the process of self-certifying compliance for $6$ key Central Labour Laws via the Shram Suvidha Portal, providing a significant breather from inspections for the first $5$ years.",
      },
      {
        color: "bg-white border-gray-300",
        title: "ESOP Statutory Management",
        content: (
          <>
            <p>
              We assist in setting up the statutory documentation for ESOP
              schemes, ensuring the salary and contributions structure aligns
              with the Income Tax Act, and confirming that the non-cash
              components (like ESOPs) are correctly treated for statutory
              contributions.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Automated Shops & Establishment Act Compliance",
        content: (
          <>
            <p>
              For tech and remote-first teams, we manage the
              state-specific Shops & Establishment Act registration and
              necessary annual filings, ensuring your physical office/registered
              office address is legally compliant.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "New Code Transition",
        content: (
          <>
            <p>
              We prepare your compensation and employment contracts to
              be future-proof for the incoming Code on Wages, 2019, especially
              concerning the definition of 'wages' and the mandatory gratuity
              for fixed-term employment contracts.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataManufacturing = {
  title:
    "End-to-End Labour Law & Factory Compliance for Multi-State Manufacturing Units",
  subTitle:
    "Factories Act, Social Security, Contract Labour & Safety Compliance—All Centralized, Audit-Ready, and Plant-Head Approved",
  description:
    "Manufacturing units face continuous pressure to stay compliant with a complex mix of Factories Act rules, OSH Code safety norms, EPF/ESIC obligations, CLRA contractor requirements, and welfare standards. With multiple plants, diverse worker categories, and heavy documentation demands, even a small compliance gap can trigger inspections, penalties, or interruptions to production.",
};
export const sectionsManufacturing = [
  {
    title:
      "Stop Factory Shutdowns. Automated Statutory Compliance for Manufacturing & Plant Operations.",
    description:
      "In the Manufacturing sector, non-compliance isn't just a fine—it's an operational shutdown and a criminal liability for the Factory Occupier. From the mandated cleanliness registers to the mandatory guarding of machinery, the compliance load is immense and non-negotiable for factories with 20+ workers.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Manufacturing Risk Landscape",
        content:
          "Manufacturing units operate under high-stakes compliance conditions. Violations of the Factories Act—from unsafe machinery to missing welfare facilities—can trigger severe penalties and even personal liability for the designated Occupier. At the same time, factories face significant Principal Employer risk under contract labour laws; if a contractor fails to deposit EPF/ESIC for their workers, the entire liability shifts directly to the factory. Compounding this, the New Wage Code requires restructuring wages so that basic pay is at least 50% of total compensation, impacting PF, ESIC, and gratuity outflows across both permanent and contract staff.",
      },
      {
        color: "bg-white border-gray-300",
        title: "The EPFDesk Factory Compliance Solution",
        content: (
          <>
            <p>
              We provide an integrated compliance platform and audit service
              that shields your management. We ensure your plant
              is inspection-ready 24/7, guaranteeing that all licenses are
              current, all registers are maintained, and all contract worker
              remittances are verified.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "The 3 Pillars of Statutory Compliance for Factories (20+ Employees)",
    description:
      "We manage the most complex and high-risk regulatory areas affecting your plant's operations.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Factories Act & OSH Code (Safety/Welfare)",
        content:
          "Factories must comply with strict Factories Act and OSH Code requirements, including mandatory registration, timely license renewals, and providing welfare amenities like canteens (for 250+ workers) and crèches (for 30+ women). Non-compliance exposes the Occupier to significant legal and financial liability. We provide digital license and register management, handling all factory license renewals and digitizing over 20 mandatory registers—such as Accident Registers and Leave Books—ensuring full readiness for inspections by the Chief Inspector of Factories.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour (CLRA Act)",
        content: (
          <>
            <p>
              Under the CLRA Act, factories face significant Principal Employer
              liability—if a labour contractor fails to pay minimum wages or
              remit EPF/ESIC for workers deployed at your site, the full legal
              and financial burden shifts to your company. We eliminate this
              risk through contractor compliance verification, automatically
              auditing monthly EPF/ESIC remittances and wage records before you
              release contractor payments. This protects your factory from
              penalties, back-wage claims, and compliance disputes.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "EPF, ESIC, and Wage Code",
        content: (
          <>
            <p>
              Manufacturing units manage large, rotating workforces that require
              constant EPF/ESIC enrollments, exits, and contribution tracking.
              With the New Wage Code mandating that basic wages must be at least
              50% of total pay, factories must overhaul their salary structures
              to avoid future PF and Gratuity liabilities. We offer automated
              wage restructuring, analyzing your current payroll against the new
              wage definition to ensure all statutory contributions are
              calculated accurately and remain fully compliant with the Code on
              Wages.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Specialized Compliance Services for Plant Managers",
    description:
      "We simplify the operational burden of managing a factory's statutory duties",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Full Statutory Compliance Audit",
        content:
          "A deep-dive audit ($100+$ checkpoints) focused on Fire Safety, Machinery Guarding, Hazardous Process Management, and Welfare Amenities as per the Factories/OSH Code.",
      },
      {
        color: "bg-white border-gray-300",
        title: "POSH and Safety Committee Formation",
        content: (
          <>
            <p>
              Mandatory formation of the Internal Complaints Committee (ICC) and
              the Safety Committee (as required by OSH Code) with required
              training for all staff.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Grievance & Discipline Management",
        content: (
          <>
            <p>
              Implementation of the Grievance Redressal Mechanism (mandatory
              for $20+$ workers under IR Code) to handle disputes legally and
              proactively.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "E-Compliance Portal",
        content: (
          <>
            <p>
              A single portal for all state-level and central filings, returns
              (e.g., Annual Factories Act Return, EPF/ESIC/LWF returns), and
              inspection-readiness documentation.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataConstruction = {
  title: "Construction Sector Compliance Strategy",
  subTitle: "Taming the EPF, ESIC, and BOCW Triad",
  description:
    "The Construction sector is defined by its fluid, multi-layered workforce (Principal Employer Contractor Sub-Contractor Worker) and the dual compliance obligation under both central social security laws (EPF/ESIC) and the sector-specific Building and Other Construction Workers (BOCW) Act, 1996.",
};
export const sectionsConstruction = [
  {
    title: "EPF & ESIC Challenges Unique to Construction",
    description:
      "The inherent nature of construction work—short-term projects, high labor turnover, and worker migration—makes traditional compliance frameworks nearly impossible to enforce manually.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "High Worker Attrition & Mobility",
        content:
          "Manufacturing workforces experience high turnover and frequent movement between contractors, plants, and locations. This leads to workers having multiple UANs or no UAN at all, causing dormant accounts, unclaimed PF benefits, and transfer delays. These issues create administrative backlogs and compliance risks for the factory. We streamline UAN creation, merging, and activation to ensure every worker has a single, active PF identity—reducing errors, complaints, and audit exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contractor Non-Compliance Risk",
        content: (
          <>
            <p>
              Factories and manufacturing units carry full Principal Employer
              liability if a contractor fails to deposit EPF/ESIC for their
              workers. When a contractor defaults, disappears, or underpays
              contributions, the Labour Department raises penalty demands
              directly on the Principal Employer for the entire deployed
              workforce. This creates major financial and legal exposure. We
              mitigate this risk through proactive contractor compliance
              tracking and verification, ensuring every contribution is remitted
              before payments are released.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Dual Social Security Burden (BOCW Overlap)",
        content: (
          <>
            <p>
              Construction and infrastructure projects often face confusion due
              to the dual social security framework—the mandatory BOCW Cess
              (around 1% of project cost) at the state level, and Central
              EPF/ESIC obligations for workers. Many contractors mistakenly
              assume that paying the BOCW Cess exempts them from EPF/ESIC, but
              the Central Provident Fund Commissioner has explicitly clarified
              that EPF is more beneficial and remains mandatory. Courts,
              including the Supreme Court, have also examined ESIC applicability
              on construction sites, reinforcing that both systems can operate
              simultaneously. We ensure correct application of EPF/ESIC despite
              BOCW overlap, preventing costly compliance disputes and penalty
              demands.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Immediate Employer Identification",
        content: (
          <>
            <p>
              Large construction and infrastructure sites often involve multiple
              contractors, sub-contractors, and labour suppliers, making it
              difficult to identify the “Immediate Employer” responsible for
              EPF/ESIC contributions. This ambiguity complicates inspections and
              can result in the Principal Employer being held liable for unpaid
              dues. We establish clear employer responsibility across all
              agencies, ensuring accurate contribution mapping and preventing
              disputes during EPF/ESIC assessments.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Our Unique Solution: The EPFDesk Site-Compliance Shield",
    description:
      "Our solution targets the Principal Employer's direct liability by shifting compliance verification from a post-facto audit to a real-time, pre-payment control mechanism, specifically designed for the construction supply chain.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Real-Time Contractor Compliance Gate",
        content:
          "The Real-Time Contractor Compliance Gate eliminates Principal Employer liability by validating contractor compliance before any payment is released. Contractors must upload their EPF ECR, ESIC challan, and wage register for the month, and our system automatically audits the data in seconds. It checks whether the worker count billed matches the workers covered, whether state minimum wages have been followed, and whether EPF/ESIC contributions were actually deposited. Only fully compliant contractors pass the gate—ensuring your project stays legally protected and penalty-free.",
      },
      {
        color: "bg-white border-gray-300",
        title: "BOCW Cess Management & Reconciliation",
        content: (
          <>
            <p>
              BOCW compliance is critical for avoiding project delays, yet most
              construction sites struggle with accurate cess calculation, timely
              deposits, and worker registration tracking. We streamline the
              entire process by automating BOCW Cess calculation and filing,
              ensuring deposits are made to the correct State Welfare Board. We
              also manage worker registration under the BOCW Act, linking each
              worker’s registration number to their employment records for full
              traceability. All key documents—EPF returns, ESIC returns, and
              BOCW Cess receipts—are consolidated into a single Site Compliance
              File, making inspections faster, cleaner, and completely
              audit-ready.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Migrant Worker UAN/IP Tracking",
        content: (
          <>
            <p>
              Construction and infrastructure projects rely heavily on migrant
              labour, making it essential to maintain accurate and portable
              social security identities. We ensure every worker is linked to a
              single, active EPF UAN, eliminating duplicate accounts and
              enabling smooth PF transfers and withdrawals—an important welfare
              factor that improves retention. For ESIC, we track and validate
              each worker’s IP Number, ensuring it remains active so migrant
              workers and their families can access healthcare benefits
              seamlessly across state borders. This creates a fully traceable,
              welfare-compliant workforce across all sites and contractors.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataFinancial = {
  title: "Financial Services and Banking Sector Compliance",
  subTitle:
    "When Financial Regulators Watch the Money, Labour Regulators Watch the Workforce",
  description:
    "The Financial Services & Banking (FS&B) sector operates under an unusually complex compliance environment. While institutions must meet stringent RBI, SEBI, and IRDAI requirements—covering KYC, AML, capital adequacy, and data privacy—they simultaneously manage massive labour and HR compliance obligations for employees, outsourced staff, and branch-level operations.",
};
export const sectionsFinancial = [
  {
    title: "EPF & ESIC Challenges Unique to Financial Services",
    description:
      "While EPF and ESIC applicability are straightforward (mandatory for establishments with 20+ and 10+ employees, respectively), the complexity arises from the sector's structure",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Branch Network and Decentralized Staff",
        content:
          "Banks, insurance companies, and NBFCs fall under mandatory ESIC coverage as notified by the Central Government—making compliance applicable at every branch, not just major offices. With thousands of branches, ATMs, and field staff spread across states, central HR teams struggle to ensure uniform implementation of EPF/ESIC, working hours, weekly offs, and statutory notice-board requirements under various state Shops & Establishments Acts. This decentralization creates significant compliance gaps and exposes the organization to inspections, penalties, and reputational risk unless tightly monitored and standardized.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Third-Party Contract Management (The Field Workforce)",
        content: (
          <>
            <p>
              Financial services institutions rely heavily on outsourced and
              third-party staff for security, data entry, collections, sales,
              and maintenance—creating a large, constantly rotating contract
              workforce. Under labour law, the Principal Employer (the Bank or
              NBFC) is fully liable if the contractor fails to pay Minimum Wages
              or remit EPF/ESIC for any worker deployed under their supervision
              or premises. This exposes institutions to serious financial
              penalties, back-wage claims, and reputational damage. Effective
              contractor compliance oversight is therefore essential to protect
              the organization from systemic risk.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The 'Wages' Redefinition (New Labour Codes)",
        content: (
          <>
            <p>
              The upcoming Code on Wages and Code on Social Security will
              fundamentally reshape compensation structures in the banking and
              financial sector. With the new mandate that Basic Wages must form
              at least 50% of total remuneration, institutions that currently
              rely on high allowances and low basic pay will see a sharp rise in
              EPF and Gratuity liabilities. This shift can increase statutory
              provisioning by millions and requires a complete payroll
              restructuring to remain compliant. Without proactive alignment,
              banks and NBFCs risk major financial impact, audit complications,
              and long-term compliance exposure.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Our Unique Solution: FinServe Statutory Risk Aggregator (SRA)",
    description:
      "Our solution is a targeted service to shield the Bank/NBFC (the Principal Employer) from the risks associated with its sprawling branch network and reliance on third-party vendors.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Automated Branch-Level Audit & Reporting",
        content:
          "Managing labour compliance across thousands of branches is difficult without real-time visibility. Our platform automates branch-level audits by mapping every office, branch, and ATM to the correct state and district labour laws, Shops & Establishments requirements, and EPF/ESIC jurisdictions. A centralized compliance dashboard then highlights gaps instantly—such as missing statutory display notices, overdue state-level annual returns, or discrepancies in recorded working hours. This gives the central HR and Compliance teams complete oversight and allows corrective action before inspections or penalties arise.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Real-Time Vendor Compliance Assurance (EPF/ESIC Shield)",
        content: (
          <>
            <p>
              Banks and NBFCs face high Principal Employer liability when
              vendors fail to remit EPF/ESIC for outsourced staff. Our Real-Time
              Vendor Compliance Assurance system embeds a mandatory compliance
              checkpoint into the vendor payment workflow. Before any invoice is
              cleared, vendors must submit their EPF ECR, ESIC challan, and
              monthly wage register. The tool then performs an automated
              cross-check to verify that the number of workers billed matches
              the number actually covered under EPF/ESIC. If any mismatch or
              default is detected, the system generates an instant Deficit
              Report, enabling the institution to withhold the unpaid social
              security amount from the vendor’s bill and remit it directly to
              EPFO/ESIC—eliminating liability for the Principal Employer and
              ensuring airtight compliance.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Future Code Impact Simulation",
        content: (
          <>
            <p>
              The upcoming New Labour Codes will significantly increase PF,
              Gratuity, and Bonus outflows by enforcing the 50% Basic Wage rule.
              Our Labour Code Readiness Assessment simulates this financial
              impact across every salary band, allowing banks and NBFCs to see
              the exact rise in statutory liabilities. We then help redesign
              salary structures before the codes take effect—preventing sudden
              financial shocks, ensuring compliance, and avoiding employee
              dissatisfaction during the transition.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataLogistics = {
  title: "Logistics, Warehousing, & Road Transport Compliance Strategy",
  subTitle:
    "Where Unorganized Workforce, High Mobility, and Multi-Agency Operations Create Extreme Compliance Risk",
  description:
    "The Logistics, Warehousing, and Road Transport sector faces the most acute compliance challenges due to its highly fragmented nature, reliance on the unorganized sector, and the ambiguity surrounding the employment status of drivers, handlers, and gig workers.",
};
export const sectionsLogistics = [
  {
    title: "EPF & ESIC Challenges Unique to Logistics",
    description:
      "The core difficulty is extending benefits designed for formal, fixed-location employment to a highly mobile, contract-driven workforce.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Gig & Platform Worker Ambiguity (Delivery/Trucking)",
        content:
          "Logistics and e-commerce companies often classify delivery riders and truck drivers as independent contractors to avoid EPF and ESIC obligations. However, under the upcoming Code on Social Security, 2020, gig and platform workers are formally recognized, and aggregators will be required to contribute to a dedicated Social Security Fund. Until this framework is fully enforced, the employment status of these workers remains a major litigation risk—potentially exposing companies to retrospective social security liabilities and compliance disputes.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Principal Employer Liability in Warehousing",
        content: (
          <>
            <p>
              Warehousing operations depend heavily on contract labour for
              loading, unloading, sorting, and packaging—creating significant
              Principal Employer liability for large logistics companies.
              Because workers move frequently across multiple sites and
              contractors, compliance gaps are common. If even one contractor
              fails to remit EPF/ESIC for workers deployed at a warehouse, the
              entire liability—along with interest and penalties—can be imposed
              directly on the Principal Company, often long after operations
              have concluded. Proactive contractor oversight is essential to
              avoid severe financial and legal exposure.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Migrant and Interstate Workforce Tracking",
        content: (
          <>
            <p>
              The road transport and logistics sector is heavily reliant
              on Inter-State Migrant Workmen (ISMW). Ensuring EPF/ESIC coverage
              requires coordinating registrations, compliance, and benefit
              transfer across multiple states, which is administratively complex
              and prone to errors and delays.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Our Unique Solution: Mobile Workforce Compliance Ledger (MWCL)",
    description:
      "Our solution is a compliance tracking and liability transfer mechanism built specifically for the multi-location, multi-vendor environment of logistics and warehousing.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Vendor Liability Shield (VLS) for Warehouses",
        content:
          "The Vendor Liability Shield (VLS) acts as a compliance-first payment gate, protecting warehousing and logistics companies from contractor-driven EPF/ESIC violations. Before any vendor invoice is cleared, the system requires digital submission of the monthly EPF ECR, ESIC challan, and IP list. It then performs instant reconciliation between the man-days billed and the statutory contributions actually remitted. If discrepancies or under-reporting are detected, the system flags the invoice, enabling the Principal Company to deduct the shortfall and remit it directly to EPFO/ESIC. This fully neutralizes Principal Employer liability and ensures airtight social security compliance across all warehouse operations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Gig Worker Risk Mapping & CoSS Preparation",
        content: (
          <>
            <p>
              Logistics and platform-based companies must prepare for the
              upcoming obligations under the Code on Social Security (CoSS),
              which formally recognizes gig and platform workers. We conduct a
              detailed workforce audit to accurately classify personnel as
              Direct Employees, Contract Labour, or Gig Workers, eliminating
              misclassification risks. Our system then creates a compliance
              bridge that tracks potential contribution liabilities for gig
              workers—helping companies plan for the expected 1–2%
              turnover-based social security levy. This ensures full financial
              readiness and seamless compliance the moment CoSS becomes
              enforceable.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Driver/Handler Digital Identity (UAN/IP)",
        content: (
          <>
            <p>
              Contract-based drivers and handlers frequently move across
              contractors and project sites, making it difficult to maintain
              consistent social security records. We ensure every worker’s EPF
              UAN and ESIC IP Number are Aadhaar-seeded and linked to a unified
              digital profile, creating a portable identity they can carry
              throughout the industry. This guarantees uninterrupted access to
              PF savings and ESIC healthcare benefits, reduces welfare disputes,
              and drives greater formalization across the logistics and
              transport workforce.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataEcommerce = {
  title: "E-commerce, Gig Economy, & Cloud Kitchens Compliance",
  subTitle: "The New Frontier",
  description:
    "The E-commerce, Food Delivery, and Cloud Kitchen sectors represent the newest and most complex frontier for social security and labour compliance in India. ",
};
export const sectionsEcommerce = [
  {
    title: "The EPF/ESIC/Social Security Challenge: Gig & Platform Workers",
    description:
      "The primary risk for e-commerce and food aggregators is the shift from treating their field force (riders, drivers, technicians) as independent contractors to providing mandated social security coverage under the new Labour Codes.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title:
          "Statutory Recognition and New Levy (Code on Social Security, 2020)",
        content:
          "The Code on Social Security, 2020 marks a major shift by formally recognizing Gig Workers and Platform Workers, bringing them into India’s social security framework for the first time. Under this law, aggregators—including e-commerce, logistics, and delivery platforms—must contribute 1% to 2% of their annual turnover to a dedicated Social Security Fund, capped at 5% of total payments made to gig workers.",
      },
      {
        color: "bg-white border-gray-300",
        title: "State-Level Divergence and Complexity",
        content: (
          <>
            <p>
              As states like Rajasthan and Karnataka introduce their own gig
              worker welfare laws—such as the Karnataka Platform-Based Gig
              Workers (Social Security and Welfare) Act, 2025—platform companies
              face new obligations, including state-specific welfare fees of
              1–5% per transaction and separate welfare funds. This creates a
              complex overlay on top of the central Code on Social Security,
              2020, requiring platforms to comply with both frameworks
              simultaneously.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "The 'Employee' vs. 'Contractor' Overlap",
        content: (
          <>
            <p>
              While gig and field workers fall under the upcoming CoSS
              framework, office and in-house staff—such as HR, finance,
              engineers, warehouse staff, and kitchen employees—are full-time
              employees and must be covered under traditional EPF (20+
              employees) and ESIC (10+ employees) thresholds. Many e-commerce
              startups, cloud kitchens, and platform companies overlook these
              obligations while focusing on gig operations, resulting in unpaid
              PF/ESIC contributions and hidden statutory liabilities.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "The Cloud Kitchen & Food Safety Challenge: FSSAI",
    description:
      "For Food Delivery and Cloud Kitchens, FSSAI (Food Safety and Standards Authority of India) compliance is as critical as labour law, as it determines the right to operate and list on aggregator platforms (Zomato/Swiggy).",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Mandatory FSSAI License",
        content:
          "Every cloud kitchen or food preparation unit must hold a valid FSSAI license—Basic, State, or Central, depending on turnover. Operating without one is a serious offense, carrying fines of up to ₹5 lakh and, more importantly, the risk of being delisted from major food delivery platforms, causing immediate operational shutdown. Ensuring timely licensing and renewal is essential for both legal compliance and uninterrupted business visibility.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Sanitation, Hygiene, and Schedule 4 Compliance",
        content: (
          <>
            <p>
              FSSAI’s Schedule 4 imposes strict hygiene and sanitation standards
              on cloud kitchens, covering kitchen layout, pest control, waste
              disposal, temperature monitoring, and staff hygiene practices.
              Because cloud kitchens operate at high speed and low margins,
              these requirements are often overlooked—resulting in violations
              during inspections. Maintaining continuous adherence to Schedule 4
              is essential to avoid penalties, protect food quality, and ensure
              uninterrupted operations on delivery platforms.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Our Unique Solution: Gig/E-Commerce Compliance Gateway (GCEG)",
    description:
      "Our solution is a two-pronged system designed to address both the new social security levy and the non-negotiable food safety requirements.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Automated CoSS Contribution Calculator",
        content:
          "The Automated CoSS Contribution Calculator ensures seamless compliance with the upcoming gig‐worker obligations under the Code on Social Security (CoSS). By integrating directly with the platform’s accounting system, it tracks real-time annual turnover and total payouts to gig workers, automatically computing the mandatory 1–2% Social Security Fund levy (capped at 5% of payouts). The system also manages Aadhaar-linked UAN identities for all platform workers, ensuring contributions are accurately mapped and fully portable across states. This guarantees financial readiness and eliminates compliance risk the moment CoSS becomes enforceable.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Cloud Kitchen Health & Safety Auditor (for Aggregators)",
        content: (
          <>
            <p>
              The Cloud Kitchen Health & Safety Auditor gives aggregators a
              robust compliance shield by enforcing strict onboarding and
              continuous monitoring of partner kitchens. Before listing, every
              vendor must pass mandatory checks for a valid FSSAI license and
              GSTIN, ensuring only compliant kitchens join the platform. A
              digital Schedule 4 audit checklist—with required photo evidence of
              hygiene, storage, and waste management practices—provides the
              aggregator with a solid due-diligence defense against food safety
              liability. Automated alerts for FSSAI license renewals and staff
              medical certificate expirations further prevent disruptions and
              protect the platform from operational or regulatory risks.
            </p>
          </>
        ),
      },
    ],
  },
];
export const heroDataAutomotive = {
  title: "Automotive & Auto Ancillary",
  subTitle: "EPF, ESIC, and the New Wage Code Impact",
  description:
    "The implementation of the Code on Wages, 2019 (CoW) and the Code on Social Security, 2020 (CoSS) is poised to fundamentally restructure payroll costs and compliance in the Automotive and Auto Ancillary sectors, particularly affecting their high reliance on allowances and contract labour.",
};
export const sectionsAutomotive = [
  {
    title: "The Single Biggest Impact: The New Definition of 'Wages'",
    description:
      "The Code on Wages, 2019 introduces a uniform, expanded definition of 'Wages' that directly increases the base for calculating statutory contributions like EPF and ESIC.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The 50% Rule for Statutory Benefits",
        content:
          "The New Wage Code mandates that Basic Pay + DA + Retaining Allowance must form at least 50% of total remuneration, and any excess allowances will automatically be reclassified as “Wages.” For automakers and ancillary units—who traditionally used low basic pay and high allowances to minimize PF and Gratuity outflows—this is a major shift. The new rule makes such structures non-compliant, requiring companies to redesign their salary frameworks to maintain the mandatory 50% wage ratio. This change significantly increases statutory liabilities and demands a complete overhaul of compensation policies across the automotive sector.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Increased EPF and ESIC Liability",
        content: (
          <>
            <p>
              Raising the “Wages” component to the mandatory 50% of CTC
              significantly increases the contribution base for both EPF and
              ESIC. Even with the ₹15,000 PF wage ceiling, monthly EPF/EPS
              contributions rise—and for employees without the ceiling (or under
              voluntary higher PF), the increase is substantial. Similarly, ESIC
              contributions escalate for all employees earning below the ₹21,000
              eligibility limit, as their revised “Wages” now form a larger
              share of their pay. Together, these changes create a higher
              recurring statutory cost for employers, directly impacting payroll
              budgets and cost planning.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Impact on Gratuity",
        content: (
          <>
            <p>
              With the New Wage Code raising the “Wages” base to at least 50% of
              CTC, gratuity payouts will rise sharply because gratuity is
              calculated on the last drawn wages. This directly increases the
              lump-sum liability for every long-serving employee. Additionally,
              the new law grants Fixed-Term Employees (FTEs) full gratuity
              eligibility after just one year of continuous service—down from
              the earlier five-year requirement. Since the automotive and
              ancillary industries rely heavily on FTEs to manage production
              cycles, this creates a substantial new financial obligation and
              long-term provisioning requirement for employers.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Expanded Coverage and Compliance Under the New Codes",
    description:
      "The Code on Social Security, 2020 broadens the scope of coverage, especially for the high-turnover contract workforce common in manufacturing.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Pan-India ESIC Applicability",
        content:
          "Under the New Labour Codes, ESIC coverage becomes uniform across India, eliminating the older concept of “notified areas.” This means any establishment that meets the employee threshold is mandatorily covered, regardless of location. For units involving hazardous processes—such as painting, welding, or chemical handling in the auto and ancillary sector—ESIC applies even with fewer than 10 employees. This expands ESIC liability across all facilities and requires immediate compliance readiness for previously exempt locations.",
      },
      {
        color: "bg-white border-gray-300",
        title: "Contract Labour Liability Reinforcement",
        content: (
          <>
            <p>
              The New Labour Codes strengthen Principal Employer accountability,
              making auto manufacturers ultimately responsible for ensuring that
              contractor-deployed workers receive all statutory benefits—EPF,
              ESIC, minimum wages, and even gratuity. This means that any
              failure by the contractor becomes a direct liability for the auto
              company. To avoid penalties and backdated demands, manufacturers
              must adopt strict digital oversight, embed stronger liability
              clauses in contractor agreements, and verify—on a monthly
              basis—that contractors have correctly remitted EPF and ESIC for
              every worker on-site. This marks a significant compliance
              escalation for the auto and ancillary sector.
            </p>
          </>
        ),
      },
    ],
  },
];
export const pastelCardsAutomotive = {
  subTitle: "Actionable Compliance Requirements",
  cards: [
    {
      title: "Salary Structure",
      subtitle: `Many auto and ancillary companies still structure salaries with Basic Pay below 50% of CTC, which is no longer compliant under the New Wage Code. The law mandates that Basic Pay + DA must be at least 50% of total remuneration, forcing an immediate payroll restructuring. Failure to comply exposes employers to retrospective PF and Gratuity liabilities, triggering significant financial risk across the entire workforce.`,
      number: 1,
    },

    {
      title: "EPF/ESIC Base",
      subtitle: `Under the New Wage Code, EPF and ESIC contributions can no longer be calculated on artificially low Basic Pay. Contributions must now be based on the deemed “Wages”, which must equal 50% of CTC. This shift directly increases the statutory cost for employers, raising both EPF and ESIC liabilities across all eligible employees.`,
      number: 2,
    },
    {
      title: "Fixed-Term Staff",
      subtitle: `The New Wage Code grants full gratuity eligibility to Fixed-Term Employees (FTEs) after just one year of continuous service, ending the earlier five-year requirement. This removes the cost advantage companies once relied on when using FTEs to bypass long-term benefits. As a result, the overall cost of hiring fixed-term staff increases significantly, giving them near-parity with permanent employees and requiring companies to reassess their workforce planning and budgeting.`,
      number: 3,
    },
    {
      title: "ESIC Coverage",
      subtitle: `ESIC coverage is no longer restricted to select “notified areas.” Under the New Labour Codes, ESIC applies across all locations nationwide as soon as the employee threshold is met. This dramatically expands the compliance scope, requiring companies to incorporate ESIC obligations into every operational site, including previously exempt or remote facilities.`,
      number: 4,
    },
  ],
};
export const heroDataTextile = {
  title: "Textile & Garments Compliance",
  subTitle: "Securing Exports, Mitigating Principal Employer Liability",
  description:
    "Workforce Limited offers specialized compliance for the Textile, Garment, and Hosiery sector. We mitigate Principal Employer liability, manage piece-rate wages (EPF/ESIC), and guarantee 100% adherence to the New Wage Code's wage floor and safety protocols.",
};
export const sectionsTextile = [
  {
    title:
      "The ₹50 Lakh Error: Why Compliance Failure Threatens Your Export Orders",
    description:
      "The Textile and Garment sector—India’s largest employer of women in the formal sector—operates on razor-thin margins and strict global standards. Your compliance risk is dual: financial penalties from the EPFO and supply chain risk from international buyers (who demand ethical labor practices).",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "The Problem",
        content:
          "The supply chain relies on contractors and subcontractors, making the Principal Employer (the main mill or factory) liable for the non-compliance of its vendors. A single contractor missing EPF or ESIC payments can result in retrospective demands running into crores, crippling your cash flow and violating international social compliance audits (like SEDEX or BSCI).",
      },
      {
        color: "bg-white border-gray-300",
        title: "The Attrition & Piece-Rate Nightmare",
        content: (
          <>
            <p>
              High turnover and piece-rate wages (per garment or unit produced)
              make accurate PF/ESI contribution calculation a continuous
              administrative hazard. Errors in defining 'Basic Wage' can trigger
              a Section 7A assessment and high penalties.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title:
      "Your Integrated Solution: Workforce Limited's Textile Compliance Shield",
    description:
      "We provide specialized compliance management that transforms the risks associated with high-volume, variable-pay workforces into seamless, audit-proof operations.",
    cards: [
      {
        color: "bg-white border-gray-300",
        title: "Principal Employer Liability Defense (The Contract Shield)",
        content:
          "Contract labour non-compliance is one of the biggest financial risks for large enterprises. The Contract Shield protects your organization by enforcing a strict compliance gate before any contractor invoice is paid—automatically verifying the contractor’s EPF ECR and ESIC challan to eliminate Principal Employer liability. Through continuous vendor audits, wage verification, and end-to-end CLRA compliance management, the system ensures every contracted worker receives statutory benefits while your business remains fully protected from penalties, back-dated dues, and legal exposure.",
      },
      {
        color: "bg-white border-gray-300",
        title: "New Wage Code & Payroll Restructuring Mastery",
        content: (
          <>
            <p>
              The New Wage Code (NWC) fundamentally reshapes payroll and
              statutory cost planning. We help companies implement a fully
              compliant salary structure—ensuring the mandatory 50% Basic Wage
              floor is met to prevent future PF and Gratuity liabilities. Our
              experts correctly classify piece-rate and incentive-based wages to
              avoid unnecessary inclusion in the statutory PF base, using
              favourable legal precedents. We also calculate and provision
              pro-rata Gratuity for Fixed-Term Employees, who now qualify after
              one year under the NWC. This comprehensive restructuring
              safeguards your organisation from retrospective dues, audit risks,
              and unexpected financial shocks.
            </p>
          </>
        ),
      },
      {
        color: "bg-white border-gray-300",
        title: "Operational Continuity & Worker Welfare",
        content: (
          <>
            <p>
              We ensure your production line runs smoothly by managing both
              physical and digital compliance requirements. All statutory
              registers—wages, attendance, overtime, and leave—are fully
              digitized and maintained for instant inspection readiness under
              the Factories Act and Shops & Establishments Act. We strengthen
              workplace safety through OSH Code–aligned practices, including
              compliance for women working night shifts and mandatory annual
              health check-ups. To support your workforce, we facilitate
              Pan-India ESIC coverage and assist migrant workers with PF
              transfers and withdrawal claims, enhancing both operational
              continuity and worker welfare.
            </p>
          </>
        ),
      },
    ],
  },
];
