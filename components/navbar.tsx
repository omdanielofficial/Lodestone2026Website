"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCircleInfo,
  faGamepad,
  faHandshake,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { name: "Minecraft Server Hosting", href: "/games/minecraft-server-hosting" },
  {
    name: "Games",
    href: "/games",
    subItems: [
      {
        title: "Minecraft",
        subtitle: "Explore, build, survive",
        href: "/games/minecraft-server-hosting",
        imageSrc: "/assets/images/navbar/games-minecraft.webp",
      },
      {
        title: "Terraria",
        subtitle: "Dig, fight, explore, build",
        href: "",
        imageSrc: "/assets/images/navbar/games-terraria.webp",
      },
      {
        title: "Palworld",
        subtitle: "Adventure with monsters",
        href: "",
        imageSrc: "/assets/images/navbar/games-palworld.webp",
      },
      {
        title: "Ark Survival Evolved",
        subtitle: "Survive in a world of dinosaurs",
        href: "",
        imageSrc: "/assets/images/navbar/games-ark-survival-evolved.webp",
      },
      {
        title: "Rust",
        subtitle: "Survive, build, dominate",
        href: "",
        imageSrc: "/assets/images/navbar/games-rust.webp",
      },
      {
        title: "View All Games",
        subtitle: "Browse our entire collection",
        href: "/games",
        imageSrc: "/assets/images/navbar/games.webp",
      },
    ],
  },
  {
    name: "More",
    subItems: [
      {
        title: "About Us",
        href: "/about",
        icon: <FontAwesomeIcon icon={faCircleInfo} className="h-5 w-5" />,
      },
      {
        title: "Contact",
        href: "/contact",
        icon: <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />,
      },
      {
        title: "Privacy",
        href: "/privacy",
        icon: <FontAwesomeIcon icon={faLock} className="h-5 w-5" />,
      },
      {
        title: "TOS",
        href: "/tos",
        icon: <FontAwesomeIcon icon={faBook} className="h-5 w-5" />,
      },
      {
        title: "SLA",
        href: "/sla",
        icon: <FontAwesomeIcon icon={faHandshake} className="h-5 w-5" />,
      },
      {
        title: "Control Panel",
        href: "#",
        icon: <FontAwesomeIcon icon={faGamepad} className="h-5 w-5" />,
      },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGamesSubmenuOpen, setIsGamesSubmenuOpen] = useState(false);
  const [isMoreSubmenuOpen, setIsMoreSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenuMobile = (submenu: string) => {
    if (window.innerWidth < 640) {
      if (submenu === "games") {
        setIsGamesSubmenuOpen(!isGamesSubmenuOpen);
      } else if (submenu === "more") {
        setIsMoreSubmenuOpen(!isMoreSubmenuOpen);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-teritiary bg-primary px-5 shadow-sm">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/images/logo-nusantara.webp"
                alt="Nusantara Original"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="hidden items-center font-bold sm:ml-6 sm:flex sm:space-x-4">
            {menuItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="group relative">
                  <button
                    onClick={() =>
                      toggleSubmenuMobile(
                        item.name === "Games" ? "games" : "more",
                      )
                    }
                    className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-secondary hover:text-white focus:outline-none"
                  >
                    {item.name}
                    <svg
                      className="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pointer-events-none absolute left-0 z-10 rounded-md border border-primary bg-secondary opacity-0 shadow-md transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 ${
                      item.name === "Games" && isGamesSubmenuOpen
                        ? "pointer-events-auto opacity-100"
                        : item.name === "More" && isMoreSubmenuOpen
                          ? "pointer-events-auto opacity-100"
                          : "sm:pointer-events-none sm:opacity-0"
                    }`}
                  >
                    <div
                      className={`grid p-4 ${
                        item.name === "Games"
                          ? "w-[50rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                          : "w-48 grid-cols-1"
                      }`}
                    >
                      {item.subItems.map((subItem) =>
                        "subtitle" in subItem ? (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "/"}
                            className="flex items-center space-x-3 rounded-md px-2 py-2 hover:bg-primary hover:text-white"
                          >
                            <Image
                              src={subItem.imageSrc}
                              alt={subItem.title}
                              width={32}
                              height={32}
                              className="flex-shrink-0 rounded-md"
                            />
                            <div>
                              <div className="text-sm">{subItem.title}</div>
                              <div className="text-xs font-normal text-gray-400">
                                {subItem.subtitle}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "/"}
                            className="flex items-center space-x-3 rounded-md px-2 py-2 hover:bg-primary hover:text-white"
                          >
                            {subItem.icon}
                            <div className="text-sm font-normal">
                              {subItem.title}
                            </div>
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || "/"}
                  className="rounded-md px-3 py-2 text-sm hover:bg-secondary hover:text-white"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </div>

        <Link
          href="/"
          className="hidden items-center gap-2 rounded-md bg-violet-600 px-4 py-2 font-semibold text-white hover:bg-violet-700 active:bg-violet-600 lg:flex"
        >
          <FontAwesomeIcon icon={faLock} className="h-5 w-5" />
          Client Area
        </Link>

        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md bg-secondary p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() =>
                      toggleSubmenuMobile(
                        item.name === "Games" ? "games" : "more",
                      )
                    }
                    className="flex w-full items-center rounded-md px-3 py-2 text-left hover:bg-secondary hover:text-white"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                        item.name === "Games" && isGamesSubmenuOpen
                          ? "rotate-180"
                          : item.name === "More" && isMoreSubmenuOpen
                            ? "rotate-180"
                            : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {(item.name === "Games" && isGamesSubmenuOpen) ||
                  (item.name === "More" && isMoreSubmenuOpen) ? (
                    <div
                      className={`grid gap-4 p-4 ${
                        item.name === "Games"
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                          : "grid-cols-1"
                      }`}
                    >
                      {item.subItems.map((subItem) =>
                        "subtitle" in subItem ? (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "/"}
                            className="flex items-center space-x-3 rounded-md px-2 py-2 hover:bg-secondary hover:text-white"
                          >
                            <Image
                              src={subItem.imageSrc}
                              alt={subItem.title}
                              width={32}
                              height={32}
                              className="flex-shrink-0"
                            />
                            <div>
                              <div className="text-sm">{subItem.title}</div>
                              <div className="text-xs text-gray-400">
                                {subItem.subtitle}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "/"}
                            className="flex items-center space-x-3 rounded-md px-2 py-2 hover:bg-secondary hover:text-white"
                          >
                            {subItem.icon}
                            <div className="text-sm">{subItem.title}</div>
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || "/"}
                  className="block rounded-md px-3 py-2 hover:bg-secondary hover:text-white"
                >
                  {item.name}
                </Link>
              ),
            )}
            <Link
              href="/"
              className="block rounded-md bg-secondary px-3 py-2 text-center text-white hover:opacity-80"
            >
              Client Area
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
