import Pricing from "@/app/discord-bot-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Discord Bot Hosting",
  description:
    "Deploy your Discord bot in minutes and keep it running 24/7 on our reliable hosting services. Plans start at £0.50!",
  keywords:
    "discord bot hosting, bot hosting, cheap discord bot hosting, 9950x bot hosting, nodejs hosting, python hosting, java hosting",
  openGraph: {
    title: "Lodestone - Discord Bot Hosting",
    description:
    "Deploy your Discord bot in minutes and keep it running 24/7 on our reliable hosting services. Plans start at £0.50!",
  },
  twitter: {
    title: "Lodestone - Discord Bot Hosting",
    description:
    "Deploy your Discord bot in minutes and keep it running 24/7 on our reliable hosting services. Plans start at £0.50!",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
