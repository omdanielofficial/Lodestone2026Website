import Pricing from "@/app/dedicated-servers/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Dedicated Servers",
  description:
    "Bare metal dedicated servers with the latest AMD Ryzen CPUs, NVMe storage, and full root access. Take control of your hosting with dedicated resources.",
  keywords:
    "dedicated hosting, unmanaged dedicated servers, bare metal hosting, high-performance servers, customisable server hosting, enterprise-grade security, root access hosting, scalable server solutions, single-tenant servers, low-latency hosting",
  openGraph: {
    title: "Lodestone - Dedicated Servers",
    description:
    "Bare metal dedicated servers with the latest AMD Ryzen CPUs, NVMe storage, and full root access. Take control of your hosting with dedicated resources.",
  },
  twitter: {
    title: "Lodestone - Dedicated Servers",
    description:
    "Bare metal dedicated servers with the latest AMD Ryzen CPUs, NVMe storage, and full root access. Take control of your hosting with dedicated resources.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
