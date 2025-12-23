"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHardDrive,
  faHeadset,
  faMemory,
  faMicrochip,
  faWifi,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "Ryzen 7 7700X",
    cpu: "Ryzen 7 7700X",
    cores: "8C/16T",
    memory: "128GB DDR4",
    storage: "2TB NVMe",
    pricebasic: "£125.00",
    image: "/assets/images/dedicated-servers/ryzen7.jpg",
    location: "New York City",
    linkbasic: "https://billing.lodestone.host/submitticket.php",
  },
  {
    name: "Ryzen 9 5950X",
    cpu: "Ryzen 9 5950X",
    cores: "16C/32T",
    memory: "128GB DDR4",
    storage: "2TB NVMe",
    pricebasic: "£140.00",
    image: "/assets/images/dedicated-servers/ryzen9.webp",
    location: "New York City",
    linkbasic: "https://billing.lodestone.host/submitticket.php",
  },
  {
    name: "Ryzen 9 7950X",
    cpu: "Ryzen 9 7950X",
    cores: "16C/32T",
    memory: "192GB DDR5",
    storage: "2x 4TB NVMe",
    pricebasic: "£160.00",
    image: "/assets/images/dedicated-servers/ryzen9.webp",
    location: "New York City",
    linkbasic: "https://billing.lodestone.host/submitticket.php",
  },
  {
    name: "Ryzen 9 9950X",
    cpu: "Ryzen 9 9950X",
    cores: "16C/32T",
    memory: "256GB DDR5",
    storage: "2x 4TB NVMe",
    pricebasic: "£225.00",
    image: "/assets/images/dedicated-servers/ryzen9.webp",
    location: "New York City",
    linkbasic: "https://billing.lodestone.host/submitticket.php",
  },
];

const features = [
  "99.99% Uptime",
  "Quick Setup",
  "Reliable Hardware",
  "High Performance",
  "DDoS Protection",
  "Unmanaged Servers",
  "Full Root Access",
  "IPv6 Supported",
  "No Setup Fees",
  "Linux & Windows",
  "Dedicated Resources",
  "Worldwide Connectivity",
  "NVMe SSDs",
];

const Pricing = () => {
  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/dedicated-servers/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            DEDICATED SERVERS
          </h1>
<p className="mb-4 text-sm font-semibold opacity-80 lg:text-base">
  LINUX & WINDOWS SUPPORTED
  </p>
          <p className="w-full text-lg md:w-[700px]">
            Bare metal dedicated servers with the latest AMD Ryzen CPUs, NVMe storage, and full root access. Perfect for large game servers and resource-intensive applications that need more performance.
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          {/* Pricing Table */}
          <div className="overflow-x-auto mt-5">
            <table className="w-full bg-primary text-white rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <thead>
                <tr className="bg-[#7C3AED] text-white uppercase text-[15px]">
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center">Processor</th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center">Cores</th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center">Memory</th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center">Storage</th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center">Bandwidth</th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center">Location</th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center"></th>
                  <th className="px-4 py-5 font-bold border-b border-white/20 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.name} className="even:bg-primary odd:bg-primary/80 border-b border-white/10 text-white">
                    <td className="px-4 py-5 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <Image src={plan.image} alt={plan.name} width={32} height={32} className="rounded" />
                        <span className="font-semibold">{plan.cpu}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-center">{plan.cores}</td>
                    <td className="px-4 py-5 text-center">{plan.memory}</td>
                    <td className="px-4 py-5 text-center">{plan.storage}</td>
                    <td className="px-4 py-5 text-center">Unmetered: 1 Gbps</td>
                    <td className="px-4 py-5 text-center">{plan.location}</td>
                    <td className="px-4 py-5 text-center">{plan.pricebasic}/mo</td>
                    <td className="px-4 py-5 text-center">
                      <Link href={plan.linkbasic} target="_blank" rel="noopener noreferrer">
                        <div
                          className="rounded-full bg-teritiary px-4 py-2 hover:bg-primary hover:outline hover:outline-teritiary transition cursor-pointer flex items-center justify-center"
                          title="Order Now"
                        >
                          <FontAwesomeIcon icon={faGear} className="w-5 h-5 text-white" />
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Support Section */}
          <div className="mt-8 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex gap-2 md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faHeadset}
                className="h-12 text-blue-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Need help picking a plan?</h2>
                <p>
                  Our sales team is available to answer any questions you may have.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary">
                Get in Touch
              </button>
            </Link>
          </div>

          <br></br>
<p className="mt-2 text-center text-xs lg:text-left">
  *Dedicated servers with standard hardware configurations are provisioned within 48-72 hours.
</p>
<p className="mt-2 text-center text-xs lg:text-left">
  **All dedicated servers and related addons are strictly non-refundable.
</p>

        </div>
      </section>

      
      <section
        className="bg-cover bg-center bg-no-repeat px-6"
        style={{
          backgroundImage: `linear-gradient(164deg, rgba(124, 58, 237, 0.9) 11.33%, rgba(124, 58, 237, 0.9) 88.67%), 
        url('/assets/images/games/minecraft-server-hosting/features.webp')`,
        }}
      >
        <div className="container relative mx-auto flex max-w-7xl flex-col gap-6 py-12">
          <div className="flex justify-center">
            <h2 className="text-center text-xl font-bold lg:text-3xl">
              Included With All Plans
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 rounded-xl bg-primary/60 px-5 py-2.5 backdrop-blur"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pricing;
