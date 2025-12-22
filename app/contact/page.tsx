import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone - Contact",
  description:
    "Our experienced support team is available around the clock to assist you, simply get in touch and we'll be on the case.",
  keywords:
    "Lodestone, lodestonehosting, Lodestone hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "Lodestone - Contact",
    description:
      "Our experienced support team is available around the clock to assist you, simply get in touch and we'll be on the case",
  },
  twitter: {
    title: "Lodestone - Contact",
    description:
      "Our experienced support team is available around the clock to assist you, simply get in touch and we'll be on the case",
  },
};

const contactLinks = [
  {
    title: "Sales Enquiries",
    href: "https://billing.lodestone.host/submitticket.php",
    description: "Use this for sales enquiries, affiliate payouts, and other non-account specific questions. Tickets are answered 24/7.",
  },
  {
    title: "Technical Support",
    href: "https://billing.lodestone.host/submitticket.php",
    description: "Having technical issues with your service? Report bugs or errors here, and our team will help troubleshoot and resolve the problems. Tickets are answered 24/7.",
  },
  {
    title: "Billing Support",
    href: "https://billing.lodestone.host/submitticket.php",
    description: "Use this for questions about your account, invoices, payments, subscriptions, or refunds. Tickets are answered Mon-Fri 10:00-17:00 GMT.",
  },
  {
    title: "Support Docs",
    href: "https://docs.lodestone.host/",
    description: "Read our extensive documentation for guidance on managing your servers and account.",
  },
  {
    title: "Community Discord",
    href: "https://discord.gg/lodestonehost",
    description: "Join our community to chat with others as well as receive community support.",
  },
  {
    title: "Email Us",
    href: "mailto:contact@lodestone.host",
    description: "Prefer communicating via email? We aim to respond within three business days.",
  },
];

const Contact = () => {
  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/about-us/contact-banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">Contact Us</h1>
          <p className="w-full text-gray-300 md:w-[700px]">
            Any questions or concerns? Don&apos;t hesitate to get in touch! Our experienced team is available around the clock to assist customers with all kinds of enquiries.
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        {/* Contact Links Grid */}
        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {contactLinks.map(({ title, href, description }, index) => (
            <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
              <div className="rounded-xl bg-gray-700 p-6 text-center hover:cursor-pointer hover:outline hover:outline-gray-200">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p>{description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Company Info Box Centered Below */}
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-gray-700 p-6 text-center max-w-3xl mx-auto hover:outline hover:outline-gray-200">
            <h2 className="mb-4 text-2xl font-semibold">Company Information</h2>
            <p className="mb-4">
              Registered as <b>Intranex Limited</b> in England & Wales under CRN 16068461.
              <br></br>
              Lodestone is a trading name of Intranex Limited.
            </p>
            <div className="space-y-4 text-center">
              <div>
                <h3 className="font-bold">Mail Address</h3>
                <p>
                  Intranex Limited <br></br> 82A James Carter Road <br></br> Mildenhall <br></br> United Kingdom <br></br> IP28 7DE
                </p>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>contact@lodestone.host</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
