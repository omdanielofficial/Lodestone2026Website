const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path
          fill="#6B21A8"
          d="M23.9,11.437A12,12,0,0,0,0,13a11.878,11.878,0,0,0,3.759,8.712A4.84,4.84,0,0,0,7.113,23H16.88a4.994,4.994,0,0,0,3.509-1.429A11.944,11.944,0,0,0,23.9,11.437Zm-4.909,8.7A3,3,0,0,1,16.88,21H7.113a2.862,2.862,0,0,1-1.981-.741A9.9,9.9,0,0,1,2,13,10.014,10.014,0,0,1,5.338,5.543,9.881,9.881,0,0,1,11.986,3a10.553,10.553,0,0,1,1.174.066,9.994,9.994,0,0,1,5.831,17.076ZM7.807,17.285a1,1,0,0,1-1.4,1.43A8,8,0,0,1,12,5a8.072,8.072,0,0,1,1.143.081,1,1,0,0,1,.847,1.133.989.989,0,0,1-1.133.848,6,6,0,0,0-5.05,10.223Zm12.112-5.428A8.072,8.072,0,0,1,20,13a7.931,7.931,0,0,1-2.408,5.716,1,1,0,0,1-1.4-1.432,5.98,5.98,0,0,0,1.744-5.141,1,1,0,0,1,1.981-.286Zm-5.993.631a2.033,2.033,0,1,1-1.414-1.414l3.781-3.781a1,1,0,1,1,1.414,1.414Z"
        />
      </svg>
    ),
    title: "Uptime 99,9%",
    description:
      "Our infrastructure, housed in top-tier data centers with the most reliable uplinks, allows us to offer our clients an impressive 99.5% uptime for their services.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path
          fill="#1E40AF"
          d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"
        />
      </svg>
    ),
    title: "Support 24 / 7",
    description:
      "We are dedicated to supporting you at all times. Our 24/7 Support Team is available to address any commercial or technical issues you may encounter.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path
          fill="#D97706"
          d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z"
        />
      </svg>
    ),
    title: "DDoS Protection",
    description:
      "ur services are protected by enterprise-level security against DDoS attacks, with a capacity of up to 17Tbps, ensuring your services remain online seamlessly.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path
          fill="#DC2626"
          d="M18,0H6C3.24,0,1,2.24,1,5v14c0,2.76,2.24,5,5,5h12c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM6,2h12c1.65,0,3,1.35,3,3V15H3V5c0-1.65,1.35-3,3-3Zm12,20H6c-1.65,0-3-1.35-3-3v-2H21v2c0,1.65-1.35,3-3,3Zm2-2.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm-4,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Z"
        />
      </svg>
    ),
    title: "NvMe Storage",
    description:
      "Immerse yourself in lightning-fast load times and seamless performance with NVMe storage technology, providing unparalleled speed and responsiveness.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path
          fill="#BE185D"
          d="m23,11c.552,0,1-.447,1-1s-.448-1-1-1h-1v-2h1c.552,0,1-.447,1-1s-.448-1-1-1h-1.418c-.505-1.151-1.431-2.077-2.582-2.582v-1.418c0-.553-.448-1-1-1s-1,.447-1,1v1h-2v-1c0-.553-.448-1-1-1s-1,.447-1,1v1h-2v-1c0-.553-.448-1-1-1s-1,.447-1,1v1h-2v-1c0-.553-.448-1-1-1s-1,.447-1,1v1.418c-1.151.505-2.077,1.431-2.582,2.582h-1.418c-.552,0-1,.447-1,1s.448,1,1,1h1v2h-1c-.552,0-1,.447-1,1s.448,1,1,1h1v2h-1c-.552,0-1,.447-1,1s.448,1,1,1h1.418c.505,1.151,1.431,2.077,2.582,2.582v1.418c0,.553.448,1,1,1s1-.447,1-1v-1h2v1c0,.553.448,1,1,1s1-.447,1-1v-1h2v1c0,.553.448,1,1,1s1-.447,1-1v-1h2v1c0,.553.448,1,1,1s1-.447,1-1v-1.418c1.151-.505,2.077-1.431,2.582-2.582h1.418c.552,0,1-.447,1-1s-.448-1-1-1h-1v-2h1c.552,0,1-.447,1-1s-.448-1-1-1h-1v-2h1Zm-6,9H7c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v10c0,1.654-1.346,3-3,3Zm0-13v10c0,.553-.448,1-1,1s-1-.447-1-1V7c0-.553.448-1,1-1s1,.447,1,1Zm-5.435.302c-.182-.777-.811-1.299-1.565-1.299s-1.383.521-1.561,1.28l-2.409,9.471c-.136.535.188,1.079.723,1.215.54.142,1.08-.187,1.216-.723l.317-1.246h3.428l.317,1.246c.115.453.522.754.969.754.082,0,.164-.01.247-.031.535-.136.859-.68.723-1.215l-2.404-9.452Zm-2.77,6.698l1.205-4.739,1.205,4.739h-2.411Z"
        />
      </svg>
    ),
    title: "Ultra-Fast Infrastructure",
    description:
      "Our hosting network is powered by high-performance AMD Ryzen 9 dedicated servers, delivering unparalleled game server performance.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path
          fill="#16A34A"
          d="M2,11H13a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V9A2,2,0,0,0,2,11ZM2,2H13V9H2Z"
        />
        <path d="M22,0H19a2,2,0,0,0-2,2V9a2,2,0,0,0,2,2h3a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm0,9H19V2h3Z" />
        <path d="M5,13H2a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2H5a2,2,0,0,0,2-2V15A2,2,0,0,0,5,13Zm0,9H2V15H5Z" />
        <path
          fill="#16A34A"
          d="M22,13H11a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15A2,2,0,0,0,22,13Zm0,9H11V15H22Z"
        />
      </svg>
    ),
    title: "Powerful Panel",
    description:
      "We use Pterodactyl as our premium control panel for game servers. This user-friendly and efficient platform is ideal for managing any project.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary p-5 lg:p-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, .70), #23272E), url('/assets/images/homepage/features-background.webp')`,
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-4 text-xl font-bold lg:text-3xl">
              Why Choose Nusantara?
            </div>
            <p className="text-gray-300">
              Discover the features that set Nusantara apart from the rest.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {features.map((feature, index) => (
              <div key={index} className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className={`rounded-xl border-teritiary p-6 shadow-md backdrop-blur-sm`}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <div className="mb-2 text-xl font-bold">{feature.title}</div>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
