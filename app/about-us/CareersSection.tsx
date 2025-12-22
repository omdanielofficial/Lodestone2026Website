"use client";
import { useState } from "react";

const positions = [
  {
    title: "Brand Associate",
    overview: [
      "Location: Remote (Flexible Hours)",
      "Pay: Commission (25-40%)",
    ],
    responsibilities: [
      "Research, identify, and contact potential customers across various platforms.",
      "Follow-up with CSQLs which have been identified from the existing customer base.",
      "Ensure customer satisfaction while focusing on sales growth.",
      "Convert identified leads into customers through effective sales efforts.",
    ],
    requirements: [
      "You must be at least 16 years old at the time of application.",
      "You must have excellent communication skills, including fluency in English.",
      "You must have strong sales skills with a customer-oriented approach.",
      "You must have experience within a sales or customer success role.",
      "You must be a team player with the ability to work independently.",
    ],
  },
  {
    title: "Support Representative",
    overview: [
      "Location: Remote (Flexible Hours)",
      "Pay: Voluntary",
    ],
    responsibilities: [
      "Assist customers with a range of billing, sales, and technical enquiries.",
      "Deliver excellent customer service to develop and maintain relationships.",
      "Proactively prioritise and respond to incoming customer enquiries.",
      "Maintain specialist knowledge to ensure accurate information delivery.",
    ],
    requirements: [
      "You must be at least 16 years old at the time of application.",
      "You must have excellent communication skills, including fluency in English.",
      "You must have the ability to work in a fast-paced environment.",
      "You must have experience within a customer support role in the hosting industry.",
      "You must be a team player with the ability to work independently.",
    ],
  },
];

export default function CareersSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative w-full px-6 py-[3.75rem] mt-10 rounded-xl shadow bg-dark-n-0 border border-gray-600"
      style={{ backgroundColor: "rgba(35, 39, 46, 0.95)" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-2">
          <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem] text-center">
            Work With Us
          </h2>
        </div>
        <div className="text-dark-n-300 mt-3 mb-8 text-center text-base leading-6 max-w-3xl mx-auto">
          <p>We&apos;re always looking for passionate people to help us grow.</p>
        </div>
        {/* Open Positions */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {positions.map((position, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-xl shadow-md"
            >
              <button
                className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`position-details-${idx}`}
              >
                {position.title}
                <span>{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && (
                <div
                  id={`position-details-${idx}`}
                  className="px-6 pb-4 text-gray-300 transition-all"
                >
                  <div className="mb-3">
                    <h4 className="font-semibold text-base text-gray-100 mb-1">Overview</h4>
                    <ul className="list-disc list-inside ml-4">
                      {position.overview.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-3">
                    <h4 className="font-semibold text-base text-gray-100 mb-1">Responsibilities</h4>
                    <ul className="list-disc list-inside ml-4">
                      {position.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-100 mb-1">Requirements</h4>
                    <ul className="list-disc list-inside ml-4">
                      {position.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <br />
        <div className="text-dark-n-300 mt-3 mb-8 text-center text-base leading-6 max-w-3xl mx-auto">
          <p>
            Interested? Email your resume to <strong>hr@lodestonetechnologies.co.uk</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
