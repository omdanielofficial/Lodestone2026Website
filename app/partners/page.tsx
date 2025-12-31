import type { Metadata } from "next";
import About from "./partners";

export const metadata: Metadata = {
  title: "Lodestone - Partner Program",
  description:
    "Join the Lodestone Partner Program to earn passive income from referrals. Take advantage of benefits such as 15% recurring commission, a £5 sign-up bonus, and more.",
  keywords:
    "game hosting, game servers, minecraft hosting, hytale hosting, 9950x hosting, lodestone, lodehost, dedicated servers, discord bot hosting",
  openGraph: {
    title: "Lodestone - Partner Program",
    description:
    "Join the Lodestone Partner Program to earn passive income from referrals. Take advantage of benefits such as 15% recurring commission, a £5 sign-up bonus, and more.",
  },
  twitter: {
    title: "Lodestone - Partner Program",
    description:
    "Join the Lodestone Partner Program to earn passive income from referrals. Take advantage of benefits such as 15% recurring commission, a £5 sign-up bonus, and more.",
  },
};

export default function Page() {
  return <About />;
}
