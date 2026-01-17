"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faKey } from "@fortawesome/free-solid-svg-icons";

type Location = {
  name: string;
  region: "North America" | "Europe" | "Asia Pacific";
  cpu: "AMD Ryzen 9 9950X" | "AMD Ryzen 7 7700X";
  ram: "DDR5" | "DDR4";
  clock: string;
  bandwidth: string;
  storage: string;
  watercooled?: boolean;
  rented?: boolean;
  pingUrl: string;
  latencyMs?: number | null;
};

const LOCATIONS: Location[] = [
  {
    name: "New York City, United States",
    region: "North America",
    cpu: "AMD Ryzen 9 9950X",
    ram: "DDR5",
    clock: "4.3 GHz+",
    bandwidth: "10 Gbps Network Port",
    storage: "NVMe SSD",
    rented: true,
    watercooled: true,
    pingUrl: "https://us-nyc-01.lodestone.host/ping",
  },
  {
    name: "Frankfurt, Germany",
    region: "Europe",
    cpu: "AMD Ryzen 9 9950X",
    ram: "DDR5",
    clock: "4.3 GHz+",
    bandwidth: "10 Gbps Network Port",
    storage: "NVMe SSD",
    rented: true,
    pingUrl: "https://de-fra-01.lodestone.host/ping",
  },
];

export default function HardwareClient() {
  const [region, setRegion] = useState("All");
  const [cpu, setCpu] = useState("All");
  const [ram, setRam] = useState("All");
  const [locations, setLocations] = useState<Location[]>(LOCATIONS);

  // Measure latency for each location
  useEffect(() => {
    const measureLatency = async (url: string) => {
      try {
        const start = performance.now();
        await fetch(url, { cache: "no-store", mode: "no-cors" });
        const end = performance.now();
        return Math.round(end - start);
      } catch {
        return null;
      }
    };

    const run = async () => {
      const updated = await Promise.all(
        locations.map(async (loc) => ({
          ...loc,
          latencyMs: await measureLatency(loc.pingUrl),
        }))
      );

      setLocations(updated);
    };

    run();
  }, []);

  const filtered = locations.filter((l) => {
    if (region !== "All" && l.region !== region) return false;
    if (cpu !== "All" && l.cpu !== cpu) return false;
    if (ram !== "All" && l.ram !== ram) return false;
    return true;
  });

  return (
    <section className="overflow-hidden bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">

        {/* FILTERS */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <select
            className="rounded-lg bg-gray-700 p-3"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="All">Region</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia Pacific">Asia Pacific</option>
          </select>

          <select
            className="rounded-lg bg-gray-700 p-3"
            value={cpu}
            onChange={(e) => setCpu(e.target.value)}
          >
            <option value="All">CPU</option>
            <option value="AMD Ryzen 9 9950X">AMD Ryzen 9 9950X</option>
            <option value="AMD Ryzen 7 7700X">AMD Ryzen 7 7700X</option>
          </select>

          <select
            className="rounded-lg bg-gray-700 p-3"
            value={ram}
            onChange={(e) => setRam(e.target.value)}
          >
            <option value="All">RAM</option>
            <option value="DDR5">DDR5</option>
            <option value="DDR4">DDR4</option>
          </select>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-400">
              No locations match your filters.
            </div>
          )}

          {filtered.map((loc, i) => (
            <div
              key={i}
              className="relative rounded-xl bg-gray-700 p-6 hover:outline hover:outline-gray-200"
            >
              {/* BADGES */}
              <div className="absolute -top-3 left-4 flex flex-row gap-2">
                {loc.watercooled && (
                  <span className="flex items-center gap-1 whitespace-nowrap rounded bg-blue-600 px-3 py-1 text-xs font-semibold">
                    <FontAwesomeIcon icon={faDroplet} className="h-3 w-3" />
                    Water Cooled
                  </span>
                )}

                {loc.rented && (
                  <span className="flex items-center gap-1 whitespace-nowrap rounded bg-purple-600 px-3 py-1 text-xs font-semibold">
                    <FontAwesomeIcon icon={faKey} className="h-3 w-3" />
                    Rented Hardware
                  </span>
                )}
              </div>

              {/* HEADER */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{loc.name}</h3>
                <span className="text-sm text-green-400">
                  {loc.latencyMs !== undefined && loc.latencyMs !== null
                    ? `${loc.latencyMs} ms`
                    : "Measuring..."}
                </span>
              </div>

              {/* DETAILS */}
              <div className="space-y-2 text-sm text-gray-300">
                <p><b>CPU:</b> {loc.cpu}</p>
                <p><b>Clock Speed:</b> {loc.clock}</p>
                <p><b>RAM:</b> {loc.ram}</p>
                <p><b>Storage:</b> {loc.storage}</p>
                <p><b>Bandwidth:</b> {loc.bandwidth}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
