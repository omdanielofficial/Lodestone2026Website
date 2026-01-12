"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/about-us/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">About Us</h1>
          <p className="w-full text-gray-300 md:w-[700px] mx-auto">
            Lodestone provides powerful, reliable, and affordable game hosting across the world. Whether you&apos;re hosting
            a server for a few friends or a large community, you can trust us to maintain performance and uptime.
          </p>
        </div>
      </section>

      {/* Our Company Section */}
      <section className="bg-secondary p-10 lg:p-16 text-center flex flex-col items-center justify-center text-white">
        <div className="max-w-4xl">
          <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem] mb-4">Our Company</h2>
          <p className="mb-4 leading-6 opacity-90">
            Lodestone was launched in early 2025 with a clear mission: to make high-performance game hosting accessible
            and affordable for everyone. Built by a UK-based team passionate about gaming and technology, we have created
            a platform that combines reliable infrastructure, smooth user experience, and community-driven support -
            without outsourcing or compromises.
          </p>
          <p className="mb-4 leading-6 opacity-90">
            With server locations around the world and our flagship data centre in New York City, we deliver low-latency
            performance to players across every region. Midway through 2025, we restructured to become a distinct brand
            under Intranex, dedicated to connecting businesses and communities through digital infrastructure.
          </p>
          <p className="leading-6 opacity-90">
We prioritise our customers at every step of the way, from support to service delivery, by providing
            outstanding service. We&apos;re also continuously evolving our technology to stay ahead in the industry, such as
            building our infrastructure with maximum performance and uptime in mind. Whether you&apos;re running a small server or managing a growing community, our focus is on helping you succeed with the stability, transparency, and service you deserve.
          </p>
        </div>
      </section>

    </>
  );
}
