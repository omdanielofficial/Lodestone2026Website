import Pricing from "@/app/discord-bot-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Discord Bot Hosting",
  description:
    "Host your Discord bots built with Node.js, Python, or Java effortlessly at Lodestone. Experience reliable performance, scalable hosting plans, and advanced features tailored for developers to create and manage powerful Discord bots.",
  keywords:
    "Discord Bot Hosting, Node.js Discord Bot Hosting, Python Discord Bot Hosting, Java Discord Bot Hosting, Lodestone Hosting, Hosting for Discord Bots, Scalable Bot Hosting Solutions,",
  openGraph: {
    title: "Lodestone | Discord Bot Hosting",
    description:
    "Host your Discord bots built with Node.js, Python, or Java effortlessly at Lodestone. Experience reliable performance, scalable hosting plans, and advanced features tailored for developers to create and manage powerful Discord bots.",
  },
  twitter: {
    title: "Lodestone | Discord Bot Hosting",
    description:
    "Host your Discord bots built with Node.js, Python, or Java effortlessly at Lodestone. Experience reliable performance, scalable hosting plans, and advanced features tailored for developers to create and manage powerful Discord bots.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
