import Image from "next/image";
import GameCard from "@/app/game-hosting/gamecard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Game Hosting",
  description:
    "Powerful game servers with unlimited slots, bandwidth, and unbeatable prices. Play your favourite games with friends, lag-free. Hosted on Ryzen 9 9950X CPUs with NVMe storage.",
  keywords:
    "game hosting, game servers, minecraft hosting, hytale hosting, 9950x hosting, lodestone, lodehost, dedicated servers, discord bot hosting, rust hosting, palworld hosting, ark hosting, valheim hosting",
  openGraph: {
    title: "Lodestone - Game Hosting",
    description:
    "Powerful game servers with unlimited slots, bandwidth, and unbeatable prices. Play your favourite games with friends, lag-free. Hosted on Ryzen 9 9950X CPUs with NVMe storage.",
  },
  twitter: {
    title: "Lodestone - Game Hosting",
    description:
    "Powerful game servers with unlimited slots, bandwidth, and unbeatable prices. Play your favourite games with friends, lag-free. Hosted on Ryzen 9 9950X CPUs with NVMe storage.",
  },
};

const Games = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(30,34,39,.80) 100%, rgba(30,34,39,.80) 100%), url('/assets/images/game-hosting/breadcrumb.webp')`,
              }}
            ></div>
            <div className="relative mx-auto max-w-7xl">
              <div className="relative flex flex-row gap-5 overflow-hidden p-8">
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-bold lg:text-3xl">
                    Game Hosting
                  </h1>
                  <p className="text-gray-300">
                    High-performance Ryzen 9 9950X servers and unlimited player slots for all your favourite games.
                  </p>
                </div>
                <Image
                  src="/assets/images/game-hosting/bcr.webp"
                  alt="Breadcrumb"
                  width={200}
                  height={0}
                  className="absolute right-12 top-2 hidden drop-shadow-md lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <GameCard />
    </>
  );
};

export default Games;
