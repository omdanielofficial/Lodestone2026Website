import Pricing from "@/app/hytale-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Hytale Hosting",
  description:
    "Create your ultimate Hytale experience with our server hosting. Enjoy instant setup and seamless gameplay as you build, explore, and adventure with friends!",
  keywords:
    "minecraft server, minecraft servers, create minecraft server, 247 minecraft server",
  openGraph: {
    title: "Lodestone - Hytale Hosting",
    description:
    "Create your ultimate Hytale experience with our server hosting. Enjoy instant setup and seamless gameplay as you build, explore, and adventure with friends!",
  },
  twitter: {
    title: "Lodestone - Hytale Hosting",
    description:
    "Create your ultimate Hytale experience with our server hosting. Enjoy instant setup and seamless gameplay as you build, explore, and adventure with friends!",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
