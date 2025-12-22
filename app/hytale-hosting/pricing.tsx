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

/* 
const plans = [ ... ];
*/

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
  "More Advanced Features",
];

/*
const PlanCard = ({ plan, isPremium }: { plan: any; isPremium: boolean }) => (
  ...
);
*/

const Pricing = () => {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/hytale-hosting/banner.jpg')`,
        }}
      >
        <div className="p-10 text-center text-white">
          <h1 className="mb-1 text-xl font-bold lg:text-3xl">HYTALE HOSTING</h1>
          <p className="mb-4 text-sm font-semibold opacity-80 lg:text-base">
            COMING SOON
          </p>
          <p className="w-full text-lg md:w-[700px]">
            Create your ultimate Hytale experience with our server hosting.
            Enjoy instant setup and seamless gameplay as you build, explore, and
            adventure with friends.
          </p>
        </div>
      </section>

<section className="overflow-hidden bg-secondary p-5 lg:p-16">
  <div className="container mx-auto max-w-7xl">
    <div className="flex flex-col gap-5">
      {/* HELP PICKING A PLAN */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-primary p-6 md:flex-row">
        <div className="mb-4 flex gap-3 md:mb-0 md:items-center">
          <img 
            src="/assets/images/hytale-hosting/hytale-icon.png" 
            alt="Hytale" 
            className="h-32 w-auto object-contain text-blue-500"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Hytale is releasing on 13th January 2026!</h2>
            <p className="opacity-90">We will fully support Hytale server hosting once it releases in early access.</p>
            <p className="opacity-90">Please check back soon for more information.</p>
          </div>
        </div>
            <Link href="https://discord.gg/lodestonehost">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary">
                Get Notified
              </button>
            </Link>
      </div>

      {/* VIDEO EMBED SECTION */}
      <div className="flex flex-col items-center gap-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/50 p-8 md:p-12">
        
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
          <iframe
            src="https://www.youtube.com/embed/o77MzDQT1cg"
            title="Hytale Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center">
          <p className="opacity-80 text-sm md:text-base text-white/80">
Hytale is a sandbox RPG that blends block-based building with deep exploration, combat, and story-driven gameplay. 
          </p>
          <p className="opacity-80 text-sm md:text-base text-white/80">
Looking to pre-order a server? Please get in touch with us to enquire! 
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FEATURES SECTION */}
      <section
        className="bg-cover bg-center bg-no-repeat px-6"
        style={{
          backgroundImage:
            "linear-gradient(164deg, rgba(124, 58, 237, 0.9) 11.33%, rgba(124, 58, 237, 0.9) 88.67%)",
        }}
      >
        <div className="container relative mx-auto flex max-w-7xl flex-col gap-6 py-12 text-white">
          <div className="flex justify-center">
            <h2 className="text-center text-xl font-bold lg:text-3xl">
              Included With All Plans
            </h2>
          </div>

          <Image
            src="/assets/images/hytale-hosting/hytale-characters.png"
            alt="Hytale characters"
            width={250}
            height={0}
            className="-z-1 absolute bottom-0 left-40 hidden -translate-x-full scale-x-[-1] transform 2xl:block"
            priority
          />
          <Image
            src="/assets/images/hytale-hosting/hytale-characters.png"
            alt="Hytale characters"
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
