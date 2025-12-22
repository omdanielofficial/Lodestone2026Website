import Pricing from "@/app/minecraft-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Minecraft Hosting",
  description:
    "Craft, build and battle bosses on our Ryzen 9 9950X Minecraft server hosting. Enjoy full mod support, unlimited slots, NVMe storage, and bandwidth. Plans start at just £3.00.",
  keywords:
    "minecraft server, minecraft servers, create minecraft server, 247 minecraft server",
  openGraph: {
    title: "Lodestone - Minecraft Hosting",
    description:
    "Craft, build and battle bosses on our Ryzen 9 9950X Minecraft server hosting. Enjoy full mod support, unlimited slots, NVMe storage, and bandwidth. Plans start at just £3.00.",
  },
  twitter: {
    title: "Lodestone - Minecraft Hosting",
    description:
    "Craft, build and battle bosses on our Ryzen 9 9950X Minecraft server hosting. Enjoy full mod support, unlimited slots, NVMe storage, and bandwidth. Plans start at just £3.00.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
