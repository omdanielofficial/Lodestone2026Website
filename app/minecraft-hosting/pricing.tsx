


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
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "COAL",
    memory: "2GB RAM",
    storagebasic: "20GB NVMe",
    storagepremium: "20GB NVMe",
    backupsbasic: "10GB",
    backupspremium: "10GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£3.00",
    pricepremium: "£2.70",
    image: "/assets/images/minecraft-hosting/coal.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/coal",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/coal",
    color: "#474747",
  },
  {
    name: "IRON",
    memory: "4GB RAM",
    storagebasic: "40GB NVMe",
    storagepremium: "40GB NVMe",
    backupsbasic: "20GB",
    backupspremium: "20GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£6.00",
    pricepremium: "£5.40",
    image: "/assets/images/minecraft-hosting/iron.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/iron",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/iron",
    color: "#FCB577",
  },
  {
    name: "GOLD",
    memory: "6GB RAM",
    storagebasic: "60GB NVMe",
    storagepremium: "60GB NVMe",
    backupsbasic: "30GB",
    backupspremium: "30GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£9.00",
    pricepremium: "£8.10",
    image: "/assets/images/minecraft-hosting/gold.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/gold",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/gold",
    color: "#DECD2E",
  },
  {
    name: "LAPIS",
    memory: "8GB RAM",
    storagebasic: "80GB NVMe",
    storagepremium: "80GB NVMe",
    backupsbasic: "40GB",
    backupspremium: "40GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£12.00",
    pricepremium: "£10.80",
    image: "/assets/images/minecraft-hosting/lapis.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/lapis",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/lapis",
    color: "#0063CD",
  },
  {
    name: "DIAMOND",
    memory: "12GB RAM",
    storagebasic: "120GB NVMe",
    storagepremium: "120GB NVMe",
    backupsbasic: "60GB",
    backupspremium: "60GB",
    databasesbasic: "5",
    databasespremium: "5",
    pricebasic: "£18.00",
    pricepremium: "£16.20",
    image: "/assets/images/minecraft-hosting/diamond.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/diamond",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/diamond",
    color: "#1DCDE2",
  },
  {
    name: "EMERALD",
    memory: "16GB RAM",
    storagebasic: "160GB NVMe",
    storagepremium: "160GB NVMe",
    backupsbasic: "80GB",
    backupspremium: "80GB",
    databasesbasic: "5",
    databasespremium: "5",
    pricebasic: "£24.00",
    pricepremium: "£21.60",
    image: "/assets/images/minecraft-hosting/emerald.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/emerald",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/emerald",
    color: "#65E185",
  },
  {
    name: "AMETHYST",
    memory: "24GB RAM",
    storagebasic: "240GB NVMe",
    storagepremium: "240GB NVMe",
    backupsbasic: "120GB",
    backupspremium: "120GB",
    databasesbasic: "5",
    databasespremium: "5",
    pricebasic: "£36.00",
    pricepremium: "£32.40",
    image: "/assets/images/minecraft-hosting/amethyst.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/amethyst",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/amethyst",
    color: "#BD4CD8",
  },
  {
    name: "BEACON",
    memory: "32GB RAM",
    storagebasic: "320GB NVMe",
    storagepremium: "320GB NVMe",
    backupsbasic: "160GB",
    backupspremium: "160GB",
    databasesbasic: "5",
    databasespremium: "5",
    pricebasic: "£48.00",
    pricepremium: "£43.20",
    image: "/assets/images/minecraft-hosting/beacon.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/beacon",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/beacon",
    color: "#09A9D7",
  },
];

const features = [
  "Java & Bedrock Editions",
  "Bungeecord Support",
  "Version Switcher",
  "99.99% Uptime",
  "Task Scheduling",
  "Full SFTP Access",
  "Unmetered Bandwidth",
  "All Modpacks & Plugins",
  "Custom JAR Support",
  "Instant Setup",
  "Simple Server Customisation",
  "Free Subdomain",
  "Reliable Hardware",
  "Free MySQL Databases",
  "NeoProtect DDoS Protection",
  "Secure Backups",
  "Unlimited Slots",
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
        <FontAwesomeIcon icon={faBoxOpen} className="w-5" />
        {isPremium ? plan.backupspremium : plan.backupsbasic} Backups Storage
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDatabase} className="w-5" />
        {isPremium ? plan.databasespremium : plan.databasesbasic} MySQL Databases
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUsers} className="w-5" />
        Unlimited Slots
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
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/minecraft-hosting/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
        <h1 className="mb-1 text-xl font-bold lg:text-3xl">
  MINECRAFT HOSTING
</h1>
<p className="mb-4 text-sm font-semibold opacity-80 lg:text-base">
  JAVA & BEDROCK EDITIONS
</p>
<p className="w-full text-lg md:w-[700px]">
  Build your dream Minecraft world with our powerful Minecraft Java & Bedrock server hosting. Enjoy full modpack and plugin support, high-performance hardware, instant setup, and a free subdomain.


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

<div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
  <div className="mb-4 flex gap-2 md:mb-0">
    <img
      src="/assets/images/tebex-logo.svg" // replace with the actual Tebex logo path or URL
      alt="Tebex Logo"
      className="h-12 w-auto"
    />
    <div className="flex flex-col">
      <h2 className="font-bold">Looking to monetise your game server?</h2>
      <p>
        Create a webstore and get a free Tebex Plus license included with every purchase.
      </p>
    </div>
  </div>
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
          <Image
            src="/assets/images/minecraft-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
            width={250}
            height={0}
            className="-z-1 absolute bottom-0 left-40 hidden -translate-x-full scale-x-[-1] transform 2xl:block"
            priority
          />
          <Image
            src="/assets/images/minecraft-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
            width={250}
            height={0}
            className="-z-1 absolute -right-80 bottom-0 hidden -translate-x-full 2xl:block"
            priority
          />
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

