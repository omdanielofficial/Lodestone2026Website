"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const defaultBackground = "/assets/images/homepage/mc.webp";

const HomePage = () => {
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-secondary p-5 lg:p-16"
      style={{ minHeight: "40rem" }}
    >
      {/* Background with fade effect */}
      <div
        className={`absolute inset-0 w-full bg-cover bg-center transition-opacity duration-200 ease-in-out`}
        style={{
          height: "40rem",
          opacity: fade ? 1 : 0.1,
          backgroundImage:
            "radial-gradient(closest-side, rgba(35, 39, 46, .70), #23272E), url(" +
            defaultBackground +
            ")",
        }}
      ></div>

      <div className="container relative mx-auto flex max-w-7xl flex-col items-center justify-start pt-32 gap-6 text-center">
        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl max-w-[48rem]">
          POWERFUL & AFFORDABLE <br></br> GAME HOSTING
        </h1>
        <p className="max-w-xl">
          High-performance Ryzen 9 9950X servers and unlimited player slots for all your favourite games. Play with friends without lag or interruptions.
        </p>

        {/* Buttons container */}
        <div className="mt-4 flex gap-4 justify-center">
          <Link href="/game-hosting" passHref>
            <button
              className="px-4 py-2 rounded-lg bg-purple-400 text-white font-bold shadow-lg hover:bg-purple-500 transition-colors flex items-center justify-center text-sm"
            >
              Browse Games
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>

          <Link href="/contact" passHref>
            <button
              className="px-4 py-2 rounded-lg bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-colors flex items-center justify-center text-sm"
            >
              Get in Touch
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
