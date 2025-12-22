


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
  faNetworkWired,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "BOT 256MB",
    memory: "256MB RAM",
    storagebasic: "5GB NVMe",
    storagepremium: "5GB NVMe",
    databasesbasic: "1 MySQL Database",
    databasespremium: "1 MySQL Database",
    pricebasic: "£0.50",
    pricepremium: "£0.45",
    image: "/assets/images/discord-bot-hosting/bot.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-256mb",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-256mb&billingcycle=quarterly",
    color: "#5765f0",
  },
  {
    name: "BOT 512MB",
    memory: "512MB RAM",
    storagebasic: "10GB NVMe",
    storagepremium: "10GB NVMe",
    databasesbasic: "1 MySQL Database",
    databasespremium: "1 MySQL Database",
    pricebasic: "£1.00",
    pricepremium: "£0.90",
    image: "/assets/images/discord-bot-hosting/bot.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-512mb",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-512mb&billingcycle=quarterly",
    color: "#5765f0",
  },
  {
    name: "BOT 1024MB",
    memory: "1024MB RAM",
    storagebasic: "20GB NVMe",
    storagepremium: "20GB NVMe",
    databasesbasic: "3 MySQL Databases",
    databasespremium: "3 MySQL Databases",
    pricebasic: "£2.00",
    pricepremium: "£1.80",
    image: "/assets/images/discord-bot-hosting/bot.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-1024mb",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-1024mb&billingcycle=quarterly",
    color: "#5765f0",
  },
  {
    name: "BOT 2048MB",
    memory: "2048MB RAM",
    storagebasic: "40GB NVMe",
    storagepremium: "40GB NVMe",
    databasesbasic: "3 MySQL Databases",
    databasespremium: "3 MySQL Databases",
    pricebasic: "£4.00",
    pricepremium: "£3.60",
    image: "/assets/images/discord-bot-hosting/bot.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-2048mb",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/discord-bot-hosting/bot-2048mb&billingcycle=quarterly",
    color: "#5765f0",
  },
];

const features = [
  "99.99% Uptime",
  "Task Scheduling",
  "Full SFTP Access",
  "Unmetered Bandwidth",
  "Instant Setup",
  "Reliable Hardware",
  "Free MySQL Databases",
  "NeoProtect DDoS Protection",
  "Secure Backups",
  "Package Installer",
  "GitHub Support",
  "Low Traffic IPs",
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
      <Image src={plan.image} alt={`${plan.name} Plan`} width={75} height={0} />
    </div>
    <ul className="mt-6">
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHardDrive} className="w-5" />
        {isPremium ? plan.storagepremium : plan.storagebasic} Storage
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDatabase} className="w-5" />
        {isPremium ? plan.databasespremium : plan.databasesbasic} 
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faCode} className="w-5" />
        Node.js / Python / Java
      </li>
    </ul>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[12px]">Starting from</span>
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
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
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/discord-bot-hosting/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
        <h1 className="mb-1 text-xl font-bold lg:text-3xl">
  DISCORD BOT HOSTING
</h1>
<p className="mb-4 text-sm font-semibold opacity-80 lg:text-base">
  NODE.JS / PYTHON / JAVA
</p>
<p className="w-full text-lg md:w-[700px]">
 Host a Discord bot with blazing fast performance, one-click setup, and 24/7 uptime. Choose from multiple languages and explore features built for developers.

</p>

        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">

            <div className="flex flex-col items-center gap-4 text-center md:flex-row">
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMicrochip} className="w-5" /> Ryzen 9 9950X{" "}
                {isPremium ? "" : ""}
              </div>
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMemory} className="w-5" /> DDR5 RAM{" "}
                {isPremium ? "" : ""}
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faShield} className="w-5" /> DDoS Protection{" "}
                {isPremium
                  ? ""
                  : ""}
              </div>
            </div>
<div className="mb-4 flex flex-row gap-1 text-center md:mb-0">
  {[
    { key: "basic", label: "Monthly" },
    { key: "premium", label: "Quarterly (-10%)" },
  ].map(({ key, label }) => {
    const isActive = (key === "premium") === isPremium;
    return (
      <button
        key={key}
        className={`w-40 rounded-xl py-4 hover:cursor-pointer ${
          isActive
            ? "bg-secondary"
            : "bg-none hover:outline hover:outline-teritiary"
        }`}
        onClick={() => setIsPremium(key === "premium")}
      >
        {label}
      </button>
    );
  })}
</div>
        
          </div>
<div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                  Our sales team is available to answer any questions you may
                  have.
                </p>
              </div>
            </div>
            <Link href="/contact">
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
          backgroundImage: `linear-gradient(164deg, rgba(124, 58, 237, 0.9) 11.33%, rgba(124, 58, 237, 0.9) 88.67%)`,
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

