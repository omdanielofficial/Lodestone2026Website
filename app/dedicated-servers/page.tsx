import Pricing from "@/app/dedicated-servers/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Dedicated Hosting",
  description:
    "Take full control of your hosting with Lodestone's unmanaged dedicated servers. Built on powerful bare metal hardware, our servers deliver unmatched performance, complete customisation, and enterprise-grade security. Perfect for resource-intensive applications, high-traffic websites, and advanced projects.",
  keywords:
    "dedicated hosting, unmanaged dedicated servers, bare metal hosting, high-performance servers, customisable server hosting, enterprise-grade security, root access hosting, scalable server solutions, single-tenant servers, low-latency hosting",
  openGraph: {
    title: "Lodestone | Dedicated Hosting",
    description:
    "Take full control of your hosting with Lodestone's unmanaged dedicated servers. Built on powerful bare metal hardware, our servers deliver unmatched performance, complete customisation, and enterprise-grade security. Perfect for resource-intensive applications, high-traffic websites, and advanced projects.",
  },
  twitter: {
    title: "Lodestone | Dedicated Hosting",
    description:
    "Take full control of your hosting with Lodestone's unmanaged dedicated servers. Built on powerful bare metal hardware, our servers deliver unmatched performance, complete customisation, and enterprise-grade security. Perfect for resource-intensive applications, high-traffic websites, and advanced projects.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
