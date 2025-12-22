import Pricing from "@/app/hytale-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Hytale Hosting",
  description:
    "Create your ultimate Hytale experience with our server hosting. Enjoy instant setup and seamless gameplay as you build, explore, and adventure with friends!",
  keywords:
    "hytale hosting, hytale, hytale server hosting, cheap hytale hosting, 9950x hytale hosting, lodestone, lodestone hytale hosting",
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
