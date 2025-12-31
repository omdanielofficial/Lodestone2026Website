import Pricing from "@/app/minecraft-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Minecraft Hosting",
  description:
    "Craft, build and battle bosses on our Ryzen 9 9950X Minecraft server hosting. Enjoy full mod support, unlimited slots, NVMe storage, and bandwidth. Plans start at just £2.50.",
  keywords:
    "minecraft, minecraft hosting, java hosting, geysermc hosting, 9950x hosting, game hosting, minecraft servers, budget minecraft hosting",
  openGraph: {
    title: "Lodestone - Minecraft Hosting",
    description:
    "Craft, build and battle bosses on our Ryzen 9 9950X Minecraft server hosting. Enjoy full mod support, unlimited slots, NVMe storage, and bandwidth. Plans start at just £2.50.",
  },
  twitter: {
    title: "Lodestone - Minecraft Hosting",
    description:
    "Craft, build and battle bosses on our Ryzen 9 9950X Minecraft server hosting. Enjoy full mod support, unlimited slots, NVMe storage, and bandwidth. Plans start at just £2.50.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
