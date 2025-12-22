"use client";
import { useState } from "react";
import Image from "next/image";

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
          <p className="leading-6 opacity-90">
            With server locations around the world and our flagship data centre in New York City, we deliver low-latency
            performance to players across every region. Midway through 2025, we restructured to become a distinct brand
            under Intranex, dedicated to connecting businesses and communities through digital infrastructure.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-primary p-10 lg:p-16 text-center flex flex-col items-center justify-center text-white">
        <div className="max-w-4xl">
          <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem] mb-4">Mission & Values</h2>
          <p className="leading-6 opacity-90">
            We prioritise our customers at every step of the way, from support to service delivery, by providing
            outstanding service. We&apos;re also continuously evolving our technology to stay ahead in the industry, such as
            building our infrastructure with maximum performance and uptime in mind. Whether you&apos;re running a small server or managing a growing community, our focus is on helping you succeed with the stability, transparency, and service you deserve.
</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary p-10 lg:p-16 text-center flex flex-col items-center justify-center text-white">
        <div className="max-w-6xl">
          <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem] mb-10">Meet The Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {/* Row 1 - Four members */}
            {[
              {
                name: "Daniel Moore",
                role: "Managing Director",
                image: "/assets/images/about-us/daniel-moore.png",
              },
              {
                name: "Peyton Barbour",
                role: "Head of Operations",
                image: "/assets/images/about-us/anonymous.png",
              },
              {
                name: "Ethan Wheeler",
                role: "Head of Commercial",
                image: "/assets/images/about-us/ethan-wheeler.jpg",
              },
              {
                name: "Robert Allen",
                role: "Software Engineer",
                image: "/assets/images/about-us/robert-allen.png",
              },
              {
                name: "Rahul Bakshi",
                role: "Support Representative",
                image: "/assets/images/about-us/rahul-bakshi.png",
              },
              {
                name: "Zakaria Mokran",
                role: "Sales Associate",
                image: "/assets/images/about-us/anonymous.png",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-md border-2 border-gray-400">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}

            {/* Row 2 - Two centered members */}
            

          </div>
        </div>
      </section>
    </>
  );
}
