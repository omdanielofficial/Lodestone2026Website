"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleCollapse = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleTransitionEnd = (index: number) => {
    if (activeIndex !== index && contentRefs.current[index]) {
      contentRefs.current[index]!.style.height = "0px";
    }
  };

  const faqData = [
    {
      question: "🌁 Lorem ipsum dolor, sit amet?",
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quae ab voluptate dolor tenetur eligendi nostrum, explicabo quas maiores, soluta placeat qui consectetur veniam libero pariatur, nobis itaque dignissimos! Aperiam?`,
    },
    {
      question: "🌉 Sit amet consectetur adipisicing elit?",
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quae ab voluptate dolor tenetur eligendi nostrum, explicabo quas maiores, soluta placeat qui consectetur veniam libero pariatur, nobis itaque dignissimos! Aperiam?`,
    },
    {
      question: "🌌 Consequatur quae ab voluptate dolor?",
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quae ab voluptate dolor tenetur eligendi nostrum, explicabo quas maiores, soluta placeat qui consectetur veniam libero pariatur, nobis itaque dignissimos! Aperiam?`,
    },
    {
      question: "🌃 Tenetur eligendi nostrum, explicabo?",
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quae ab voluptate dolor tenetur eligendi nostrum, explicabo quas maiores, soluta placeat qui consectetur veniam libero pariatur, nobis itaque dignissimos! Aperiam?`,
    },
  ];

  return (
    <section className="overflow-hidden bg-secondary p-5 lg:p-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative flex flex-col items-center lg:items-start">
          <h2 className="text-center text-xl font-bold lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-md text-center text-gray-300 lg:text-left">
            Got questions? Check out these FAQs from our latest customers. If
            you need further assistance, explore our knowledge base or reach out
            to our support team.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link
              href=""
              className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold hover:bg-violet-700"
            >
              Full FAQ
            </Link>
            <Link
              href=""
              className="rounded-xl bg-teritiary px-6 py-3 text-sm font-semibold hover:bg-secondary hover:outline hover:outline-teritiary"
            >
              Knowledgebase
            </Link>
          </div>
        </div>
        <ul className="space-y-2">
          {faqData.map((faq, index) => (
            <li
              key={index}
              className={`rounded-xl bg-primary p-5 hover:cursor-pointer hover:bg-teritiary ${
                activeIndex === index ? "bg-teritiary" : ""
              }`}
              onClick={() => toggleCollapse(index)}
            >
              <button className="flex w-full items-center justify-between text-left font-semibold">
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-6 w-6 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                  if (el && activeIndex === index) {
                    const scrollHeight = el.scrollHeight;
                    el.style.height = `${scrollHeight}px`;
                  }
                }}
                onTransitionEnd={() => handleTransitionEnd(index)}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "mt-2 opacity-100" : "mt-0 opacity-0"
                }`}
                style={{
                  height:
                    activeIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <p className="text-dark-n-500">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs;
