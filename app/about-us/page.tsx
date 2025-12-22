import type { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
  title: "Lodestone - About Us",
  description:
    "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible.",
  keywords:
    "game hosting, game servers, minecraft hosting, hytale hosting, 9950x hosting, lodestone, lodehost, dedicated servers, discord bot hosting",
  openGraph: {
    title: "Lodestone - About Us",
    description:
      "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible.",
  },
  twitter: {
    title: "Lodestone - About Us",
    description:
      "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible.",
  },
};

export default function Page() {
  return <About />;
}
