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
      question: "🌍 Where are your servers located?",
      answer: `Our services are hosted in data centres located around the world. If possible, we can transfer your server to a different location completely free-of-charge, because you shouldn't have to pay extra for no reason. Our services are currently located in New York City, United States.`,
    },
    {
      question: "💵 Do you offer refunds?",
      answer: `Yes, we offer a 24 hour money-back guarantee for all services except dedicated servers. If you're not satisfied with our services within the first 24 hours after purchase, we'll provide a full refund, no questions asked.`,
    },
    {
      question: "🚀 Can I upgrade my plan later?",
      answer: `We understand the importance of having flexibility and being able to upgrade your plan. For most services, you're able to easily switch between plans in only a few clicks. When upgrading, you'll only have to pay the difference in cost.`,
    },
    {
      question: "💳 Which payment methods are accepted?",
      answer: `We support payments through PayPal or Stripe (credit and debit cards). We make the billing process simple so that you can focus on managing your services.`,
    },
  ];

  return (
    <section className="overflow-hidden bg-primary p-5 lg:p-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative flex flex-col items-center lg:items-start">
          <h2 className="text-center text-xl font-bold lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-md text-center text-gray-300 lg:text-left">
          Find quick answers to the most common questions about our services. If you still need help, you can check out our extensive support docs or contact our team.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link
              href="https://docs.lodestone.host"
              className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold hover:bg-violet-700"
            >
              Documentation
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-teritiary px-6 py-3 text-sm font-semibold hover:bg-secondary hover:outline hover:outline-teritiary"
            >
              Contact Us
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
