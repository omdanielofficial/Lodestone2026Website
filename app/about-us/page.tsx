import type { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
  title: "Lodestone | About Us",
  description:
    "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible. Join us in shaping the future of game hosting.",
  keywords:
    "game server hosting, Minecraft hosting, web hosting, game hosting, 99.99% uptime, cheap Minecraft hosting, high-performance hosting, 24/7 support, affordable hosting plans, lodestone, about us, company, mission statement",
  openGraph: {
    title: "Lodestone | About Us",
    description:
      "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible. Join us in shaping the future of game hosting.",
  },
  twitter: {
    title: "Lodestone | About Us",
    description:
      "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible. Join us in shaping the future of game hosting.",
  },
};

export default function Page() {
  return <About />;
}
