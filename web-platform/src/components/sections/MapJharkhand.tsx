"use client";
import { useEffect, useRef } from "react";

const LOCATIONS = [
  { name: "Netarhat", x: 35, y: 40 },
  { name: "Hundru Falls", x: 58, y: 55 },
  { name: "Betla National Park", x: 20, y: 70 },
  { name: "Deoghar", x: 75, y: 30 },
];

export default function MapJharkhand() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Future: replace with vector map/WebGL. For now, styled container with pins.
  }, []);

  return (
    <section id="map" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Explore Jharkhand</h2>
      <div ref={containerRef} className="mt-6 relative h-80 rounded-lg border border-emerald-800 bg-gradient-to-br from-emerald-950 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,#10b981_0%,transparent_30%),radial-gradient(circle_at_70%_60%,#22c55e_0%,transparent_30%)]" />
        {LOCATIONS.map((p) => (
          <div key={p.name} className="absolute group" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
            <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)] animate-pulse" />
            <div className="mt-2 whitespace-nowrap px-2 py-1 text-xs rounded bg-emerald-900/80 border border-emerald-700 text-emerald-100 opacity-0 group-hover:opacity-100 transition">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


