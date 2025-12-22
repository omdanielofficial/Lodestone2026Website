import Pricing from "@/app/vps-hosting-dev/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | VPS Hosting",
  description:
    "Powerful virtual private servers with dedicated resources, instant deployment, and fixed monthly pricing for effortless scalability and control.",
  keywords:
    "vps, virtual private server, vps hosting, cloud compute hosting, virtual servers, cheap vps hosting, kvm hosting, amd epyc vps, lodestone, lodestonehost",
  openGraph: {
    title: "Lodestone | VPS Hosting",
    description:
    "Powerful virtual private servers with dedicated resources, instant deployment, and fixed monthly pricing for effortless scalability and control.",
  },
  twitter: {
    title: "Lodestone | VPS Hosting",
    description:
    "Powerful virtual private servers with dedicated resources, instant deployment, and fixed monthly pricing for effortless scalability and control.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
