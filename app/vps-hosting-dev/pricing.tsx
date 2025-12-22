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
  faShield,
  faWifi,
  faUsers,
  faDatabase,
  faServer,
  faCircleExclamation,
  faSackDollar,
  faBoxOpen,
  faMoneyBill,
  faSearch,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "VPS-04",
    memory: "4GB RAM",
    coresbasic: "1",
    corespremium: "1",
    storagebasic: "40GB",
    storagepremium: "40GB",
    trafficbasic: "2TB",
    trafficpremium: "2TB",
    pricebasic: "£4.00",
    pricepremium: "£4.00",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-04",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-04",
    color: "#c996eb",
  },
  {
    name: "VPS-08",
    memory: "8GB RAM",
    coresbasic: "2",
    corespremium: "2",
    storagebasic: "80GB",
    storagepremium: "80GB",
    trafficbasic: "4TB",
    trafficpremium: "4TB",
    pricebasic: "£8.00",
    pricepremium: "£8.00",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-08",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-08",
    color: "#c996eb",
  },
  {
    name: "VPS-12",
    memory: "12GB RAM",
    coresbasic: "4",
    corespremium: "4",
    storagebasic: "120GB",
    storagepremium: "120GB",
    trafficbasic: "6TB",
    trafficpremium: "6TB",
    pricebasic: "£12.00",
    pricepremium: "£12.00",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-12",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-12",
    color: "#c996eb",
  },
  {
    name: "VPS-16",
    memory: "16GB RAM",
    coresbasic: "6",
    corespremium: "6",
    storagebasic: "160GB",
    storagepremium: "160GB",
    trafficbasic: "8TB",
    trafficpremium: "8TB",
    pricebasic: "£16.00",
    pricepremium: "£16.00",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-16",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-16",
    color: "#c996eb",
  },
  {
    name: "VPS-32",
    memory: "32GB RAM",
    coresbasic: "8",
    corespremium: "8",
    storagebasic: "320GB",
    storagepremium: "320GB",
    trafficbasic: "16TB",
    trafficpremium: "16TB",
    pricebasic: "£32.00",
    pricepremium: "£32.00",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-32",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/virtual-private-servers/vps-32",
    color: "#c996eb",
  },
];

const features = [
  "99.99% Uptime",
  "Instant Setup",
  "AMD EPYC CPUs",
  "High Performance",
  "DDoS Protection",
  "Linux & Windows",
  "VirtFusion Control Panel",
  "Montreal Location",
  "Low Setup Fees",
  "Dedicated Resources",
  "100% Scalability",
  "Full Root Access",
  "Fixed Pricing",
  "Firewall Configuration",
];

const PlanCard = ({ plan, isPremium }: { plan: any; isPremium: boolean }) => (
  <div
    className="flex flex-col rounded-xl bg-primary px-6 py-10 hover:outline"
    style={{ outlineColor: plan.color }}
  >
    <div className="flex items-center justify-between">
      <div className="flex flex-col text-xl font-bold">
        <small style={{ color: plan.color }}>{plan.name}</small>
        {plan.memory}
      </div>
    </div>
    <ul className="mt-6">
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faServer} className="w-5" />
        {isPremium ? plan.corespremium : plan.coresbasic} vCores
      </li>
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHardDrive} className="w-5" />
        {isPremium ? plan.storagepremium : plan.storagebasic} Storage
      </li>
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faWifi} className="w-5" />
        {isPremium ? plan.trafficpremium : plan.trafficbasic} Traffic
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPowerOff} className="w-5" />
        Linux & Windows
      </li>
    </ul>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[12px]">Starting from</span>
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
        <span className="text-[10px]">Setup fee: £3.00</span> 
      </div>
      <Link
        href={isPremium ? plan.linkpremium : plan.linkbasic}
        className="flex items-end"
      >
        <div
          className="rounded-full bg-teritiary p-5 hover:bg-primary hover:outline active:bg-secondary"
          style={{ outlineColor: plan.color }}
        >
          <FontAwesomeIcon icon={faGear} className="w-6" />
        </div>
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/vps-hosting/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
  VPS HOSTING
</h1>
<p className="w-full text-lg md:w-[700px]">
  Powerful <b>AMD EPYC KVM</b> virtual private servers with dedicated resources, instant deployment, and fixed monthly pricing for effortless scalability and control. Powered by the industry-leading VirtFusion control panel.
</p>

        </div>
      </section>

      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
 
            <div className="flex flex-col items-center gap-4 text-center md:flex-row">
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMicrochip} className="w-5" />{" "}
                <strong>{isPremium ? "AMD EPYC CPUs" : "AMD EPYC CPUs"}</strong>
              </div>
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMemory} className="w-5" />{" "}
                {isPremium ? "DDR4 RAM" : "DDR4 RAM"}
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faShield} className="w-5" />{" "}
                {isPremium
                  ? "DDoS Protection"
                  : "DDoS Protection"}
              </div>

            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} isPremium={isPremium} />
            ))}
          </div>

          <div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex gap-2 md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faHeadset}
                className="h-12 text-blue-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Need help picking a plan?</h2>
                <p>
                  Our support team is available to answer any questions you may
                  have.
                </p>
              </div>
            </div>
            <Link href="https://billing.lodestone.host/submitticket.php">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary">
                Get in Touch
              </button>
            </Link>
          </div>
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
              VPS Hosting Features
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 rounded-xl bg-primary/60 px-5 py-2.5 backdrop-blur"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg> */}
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
