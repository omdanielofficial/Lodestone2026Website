import type { Metadata } from "next";
import HardwareClient from "./HardwareClient";

export const metadata: Metadata = {
  title: "Lodestone - Hardware & Locations",
  description:
    "We offer top-tier hardware across all locations so your server runs smoothly, no matter where you are.",
};

export default function HardwarePage() {
  return (
    <>
      {/* HERO – EXACT SAME STRUCTURE AS CONTACT PAGE */}
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/about-us/hardware-banner.jpg')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            Hardware & Locations
          </h1>
          <p className="w-full text-gray-300 md:w-[700px]">
            We offer top-tier hardware across all locations so your server runs
            smoothly, no matter where you are. Choose the best location for your server to enjoy fast and reliable performance.
          </p>
        </div>
      </section>

      {/* CLIENT CONTENT */}
      <HardwareClient />
    </>
  );
}
