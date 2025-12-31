"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faGift,
  faWallet,
  faLink as faLinkIcon,
  faHeadset,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

/* Partner Benefits */
const partnerBenefits = [
  {
    icon: <FontAwesomeIcon icon={faPercent} className="text-green-500" size="2x" />,
    title: "15% Recurring Commission",
    description:
      "Earn a recurring 15% rate for every new customer that you refer to us. When they purchase or renew a service, you get paid.",
  },
  {
    icon: <FontAwesomeIcon icon={faGift} className="text-purple-500" size="2x" />,
    title: "£5.00 Bonus",
    description:
      "Get a free £5.00 in your account just for signing up. Create an account in a few minutes and claim the bonus.",
  },
  {
    icon: <FontAwesomeIcon icon={faWallet} className="text-blue-500" size="2x" />,
    title: "Quick Withdrawals",
    description:
      "We make withdrawals as easy as possible. Get paid to PayPal or account credit once you meet our £10.00 payout threshold.",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkIcon} className="text-yellow-500" size="2x" />,
    title: "Custom Affiliate Link",
    description:
      "Track referrals and conversions effortlessly using your own unique affiliate link.",
  },
  {
    icon: <FontAwesomeIcon icon={faHeadset} className="text-red-500" size="2x" />,
    title: "Priority Support",
    description:
      "All support tickets created by partners are automatically prioritised by our team.",
  },
  {
    icon: <FontAwesomeIcon icon={faPalette} className="text-emerald-500" size="2x" />,
    title: "Branding Kit",
    description:
      "Access logos, banners, and brand assets to use in your promotional efforts.",
  },
];

export default function Partners() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/partners/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">Partner Program</h1>
          <p className="mx-auto w-full text-gray-300 md:w-[700px]">
            Become a partner to earn passive income and grow your audience. The program is designed for content creators, server owners, developers, and businesses.
          </p>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="bg-secondary p-10 lg:p-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-xl font-black sm:text-4xl">
              Partner Benefits
            </h2>
            <p className="text-gray-300">
              Our partners can avail of a wide range of benefits to help them earn passive income.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="rounded-xl bg-primary p-6 shadow-md transition hover:scale-[1.02]">
                  <div className="mb-4">{benefit.icon}</div>
                  <div className="mb-2 text-xl font-bold">{benefit.title}</div>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Partners Grid */}
<section className="bg-primary p-10 text-white lg:p-16">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="mb-10 text-xl font-black sm:text-4xl">
      Official Partners
    </h2>

    {/** Partner logos */}
<div className="grid grid-cols-2 justify-items-center gap-10 sm:grid-cols-3 lg:grid-cols-3">
  {[
    {
      logo: "/assets/images/partners/icynutella.webp",
      href: "https://www.youtube.com/channel/UCNv8iB--rsS_CwfJ2T8B3qw",
    },
    {
      logo: "/assets/images/partners/mousery.webp",
      href: "https://www.youtube.com/@mousery",
    },
    {
      logo: "/assets/images/partners/pqtrick.webp",
      href: "https://www.youtube.com/@Pqtrick/videos",
    },
  ].map((partner, i) => (
    <Link
      key={i}
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center"
    >
      <div className="relative h-32 w-32 overflow-hidden rounded-xl border-2 border-gray-400 bg-secondary shadow-md transition hover:shadow-lg">
        <Image
          src={partner.logo}
          alt={`Partner ${i + 1}`}
          width={128}
          height={128}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Link>
  ))}
</div>


  </div>
</section>


      {/* CTA */}
      <section className="bg-secondary p-10 lg:p-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-xl font-black sm:text-4xl">
            Join the Program
          </h2>
          <p className="mb-8 leading-6 opacity-90">
            Interested in partnering with Lodestone? There&apos;s no requirements to join the program and start earning immediately. We welcome all content creators, server owners, and everyone inbetween.
          </p>
        <div className="mt-4 flex gap-4 justify-center">
          <Link href="https://billing.lodestone.host/affiliates.php" passHref>
            <button
              className="px-4 py-2 rounded-lg bg-purple-400 text-white font-bold shadow-lg hover:bg-purple-500 transition-colors flex items-center justify-center text-sm"
            >
              Become a Partner
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
              Contact Us
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
    </>
  );
}
