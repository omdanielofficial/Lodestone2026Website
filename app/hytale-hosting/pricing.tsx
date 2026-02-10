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
  faUsers,
  faDatabase,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

/* ================= PLANS ================= */

const plans = [
  {
    name: "KWEEBEC",
    memory: "4GB RAM",
    storagebasic: "40GB NVMe",
    storagepremium: "40GB NVMe",
    backupsbasic: "20GB",
    backupspremium: "20GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£3.75",
    pricepremium: "£4.50",
    image: "/assets/images/hytale-hosting/kweebec.webp",
    linkbasic:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/kweebec&promocode=SWITCH25",
    linkpremium:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/kweebec&billingcycle=quarterly",
    color: "#487451",
  },
  {
    name: "TESSA",
    memory: "6GB RAM",
    storagebasic: "60GB NVMe",
    storagepremium: "60GB NVMe",
    backupsbasic: "30GB",
    backupspremium: "30GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£5.62",
    pricepremium: "£6.75",
    image: "/assets/images/hytale-hosting/tessa.webp",
    linkbasic:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/tessa&promocode=SWITCH25",
    linkpremium:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/tessa&billingcycle=quarterly",
    color: "#9c6222",
  },
  {
    name: "KYROS",
    memory: "8GB RAM",
    storagebasic: "80GB NVMe",
    storagepremium: "80GB NVMe",
    backupsbasic: "40GB",
    backupspremium: "40GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£7.50",
    pricepremium: "£9.00",
    image: "/assets/images/hytale-hosting/kyros.webp",
    linkbasic:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/kyros&promocode=SWITCH25",
    linkpremium:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/kyros&billingcycle=quarterly",
    color: "#d317e9",
  },
  {
    name: "VARYN",
    memory: "12GB RAM",
    storagebasic: "120GB NVMe",
    storagepremium: "120GB NVMe",
    backupsbasic: "60GB",
    backupspremium: "60GB",
    databasesbasic: "3",
    databasespremium: "3",
    pricebasic: "£11.25",
    pricepremium: "£13.50",
    image: "/assets/images/hytale-hosting/varyn.webp",
    linkbasic:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/varyn&promocode=SWITCH25",
    linkpremium:
      "https://billing.lodestone.host/index.php?rp=/store/hytale-hosting/varyn&billingcycle=quarterly",
    color: "#a6d386",
  },
];

const features = [
  "Mod Support",
  "Easy Configuration",
  "Latest Game Updates",
  "Version Switcher",
  "Task Scheduling",
  "Full SFTP Access",
  "Unmetered Bandwidth",
  "Instant Setup",
  "Simple Server Customisation",
  "Free Subdomain",
  "Reliable Hardware",
  "Free MySQL Databases",
  "NeoProtect DDoS Protection",
  "Secure Backups",
  "Unlimited Slots",
  "Advanced Features",
];

/* ================= PLAN CARD ================= */

const PlanCard = ({ plan, isPremium }: any) => (
  <div
    className="relative flex flex-col rounded-xl bg-primary px-6 py-10 hover:outline"
    style={{ outlineColor: plan.color }}
  >
    {/* Basic-only discount banner */}
    {!isPremium && (
      <div
        className="absolute left-0 top-0 w-full rounded-t-xl py-1 text-center text-xs font-bold uppercase tracking-wide"
        style={{ backgroundColor: plan.color }}
      >
        25% OFF FIRST MONTH
      </div>
    )}

    {/* Header */}
    <div className={`flex items-center justify-between ${!isPremium ? "mt-4" : ""}`}>
      <div className="flex flex-col text-xl font-bold">
        <small style={{ color: plan.color }}>{plan.name}</small>
        {plan.memory}
      </div>
      <Image src={plan.image} alt={plan.name} width={75} height={75} />
    </div>

    {/* Features */}
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

    {/* Footer */}
    <div className="mt-6 flex items-center justify-between">
      <div>
        <span className="text-xs">Starting from</span>
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
      </div>

      <Link href={isPremium ? plan.linkpremium : plan.linkbasic}>
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


/* ================= PAGE ================= */

export default function Pricing() {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      {/* HERO */}
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, rgba(35,39,46,0.7), #23272E), url('/assets/images/hytale-hosting/banner.jpg')",
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-1 text-xl font-bold lg:text-3xl">
            HYTALE HOSTING
          </h1>
          <p className="mb-4 text-sm font-semibold opacity-80 lg:text-base">
            SERVERS NOW AVAILABLE AT LODESTONE
          </p>
          <p className="mx-auto max-w-2xl text-lg">
            Create your ultimate Hytale experience with our server hosting.
            Enjoy instant setup and seamless gameplay as you build, explore,
            and adventure with friends.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">

          {/* TOP BAR (RESTORED) */}
          <div className="flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMicrochip} />
                Ryzen 9 9950X
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMemory} />
                DDR5 RAM
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faShield} />
                DDoS Protection
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-2 text-center md:mb-0 md:flex-row">
              {[
                { key: "basic", label: "Monthly (-25%)" },
                { key: "premium", label: "Quarterly (-10%)" },
              ].map(({ key, label }) => {
                const isActive = (key === "premium") === isPremium;
                return (
                  <button
                    key={key}
                    className={`w-40 rounded-xl py-4 ${
                      isActive
                        ? "bg-secondary"
                        : "hover:outline hover:outline-teritiary"
                    }`}
                    onClick={() => setIsPremium(key === "premium")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PLANS */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} isPremium={isPremium} />
            ))}
          </div>

          {/* SUPPORT */}
          <div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex gap-2 md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faHeadset}
                className="h-12 text-blue-500"
              />
              <div>
                <h2 className="font-bold">Need help picking a plan?</h2>
                <p>
                  Our sales team is available to answer any questions you may
                  have.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:outline hover:outline-teritiary">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* TEBEX */}
          <div className="mt-5 flex items-center rounded-xl bg-primary p-3">
            <img
              src="/assets/images/tebex-logo.svg"
              alt="Tebex Logo"
              className="h-12 w-auto"
            />
            <div className="ml-3">
              <h2 className="font-bold">
                Looking to monetise your game server?
              </h2>
              <p>
                Free Tebex Plus license included with every purchase.
              </p>
            </div>
          </div>
<br></br>
          {/* VIDEO */}
          <div className="mt-6 flex justify-center">
            <iframe
              className="aspect-video w-full max-w-4xl rounded-2xl"
              src="https://www.youtube.com/embed/o77MzDQT1cg"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-purple-600 py-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Included With All Plans
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl bg-primary/60 px-5 py-2.5"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
