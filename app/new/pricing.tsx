"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="px-6 py-10 text-center text-white md:px-10">
          <h1 className="mb-1 text-xl font-bold lg:text-3xl">
            HYTALE HOSTING
          </h1>
          <p className="mb-4 text-sm font-semibold opacity-80 lg:text-base">
            COMING SOON
          </p>
          <p className="mx-auto w-full text-base md:w-[700px] md:text-lg">
            Create your ultimate Hytale experience with our server hosting.
            Enjoy instant setup and seamless gameplay as you build, explore, and
            adventure with friends.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-5">
            {/* HELP PICKING A PLAN / HYTALE INFO */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-primary p-6 md:flex-row">
              <div className="flex w-full flex-col items-center gap-3 text-center md:w-auto md:flex-row md:items-center md:text-left">
                <img
                  src="/assets/images/hytale-hosting/hytale-icon.png"
                  alt="Hytale"
                  className="h-20 w-auto max-w-full md:h-24"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-bold md:text-lg">
                    Hytale is releasing on 13th January 2026!
                  </h2>
                  <p className="text-sm opacity-90 md:text-base">
                    We will fully support Hytale server hosting once it releases
                    in early access.
                  </p>
                  <p className="text-sm opacity-90 md:text-base">
                    Please check back soon for more information.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <Link href="https://discord.gg/lodestonehost">
                  <button className="w-full rounded-xl bg-teritiary py-3 text-sm font-semibold hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary md:w-40">
                    Get Notified
                  </button>
                </Link>
              </div>
            </div>

            {/* VIDEO EMBED SECTION */}
            <div className="flex flex-col items-center gap-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/50 p-6 md:p-12">
              <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
                <iframe
                  src="https://www.youtube.com/embed/o77MzDQT1cg"
                  title="Hytale Official Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-full w-full"
                  allowFullScreen
                />
              </div>

              <div className="px-2 text-center text-white/80">
                <p className="text-sm opacity-80 md:text-base">
                  Hytale is a sandbox RPG that blends block-based building with
                  deep exploration, combat, and story-driven gameplay.
                </p>
                <p className="text-sm opacity-80 md:text-base">
                  Looking to pre-order a server? Please get in touch with us to
                  enquire!
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
