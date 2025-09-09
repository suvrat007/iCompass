"use client";
import { useEffect, useRef, useState } from "react";

const JHARKHAND_CITIES = [
  { name: "Ranchi", x: 45, y: 35, type: "capital", population: "1.1M" },
  { name: "Jamshedpur", x: 65, y: 60, type: "industrial", population: "1.3M" },
  { name: "Dhanbad", x: 55, y: 50, type: "mining", population: "1.2M" },
  { name: "Bokaro", x: 50, y: 55, type: "steel", population: "563K" },
  { name: "Deoghar", x: 75, y: 25, type: "religious", population: "203K" },
  { name: "Hazaribagh", x: 40, y: 45, type: "district", population: "153K" },
  { name: "Giridih", x: 60, y: 40, type: "district", population: "114K" },
  { name: "Dumka", x: 70, y: 50, type: "district", population: "47K" },
  { name: "Chaibasa", x: 35, y: 65, type: "district", population: "64K" },
  { name: "Medininagar", x: 30, y: 30, type: "district", population: "88K" },
];

const CONNECTIONS = [
  { from: "Ranchi", to: "Jamshedpur" },
  { from: "Ranchi", to: "Dhanbad" },
  { from: "Ranchi", to: "Hazaribagh" },
  { from: "Ranchi", to: "Giridih" },
  { from: "Jamshedpur", to: "Bokaro" },
  { from: "Jamshedpur", to: "Dhanbad" },
  { from: "Dhanbad", to: "Bokaro" },
  { from: "Deoghar", to: "Dumka" },
  { from: "Hazaribagh", to: "Medininagar" },
  { from: "Chaibasa", to: "Jamshedpur" },
];

export default function MapJharkhand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const getCityColor = (type: string) => {
    switch (type) {
      case "capital": return "bg-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.9)]";
      case "industrial": return "bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.9)]";
      case "mining": return "bg-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.9)]";
      case "steel": return "bg-gray-400 shadow-[0_0_25px_rgba(156,163,175,0.9)]";
      case "religious": return "bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.9)]";
      default: return "bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.9)]";
    }
  };

  const getConnectionPath = (from: string, to: string) => {
    const fromCity = JHARKHAND_CITIES.find(c => c.name === from);
    const toCity = JHARKHAND_CITIES.find(c => c.name === to);
    if (!fromCity || !toCity) return null;

    const x1 = fromCity.x;
    const y1 = fromCity.y;
    const x2 = toCity.x;
    const y2 = toCity.y;

    return `M ${x1} ${y1} L ${x2} ${y2}`;
  };

  return (
    <section id="map" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-amber-400">Explore Jharkhand</h2>
      <p className="text-center text-emerald-200 mb-8">Discover the vibrant cities and their connections</p>
      
      <div ref={containerRef} className="mt-6 relative h-96 rounded-xl border border-emerald-800 bg-gradient-to-br from-emerald-950 to-black overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,#10b981_0%,transparent_30%),radial-gradient(circle_at_70%_60%,#22c55e_0%,transparent_30%)]" />
        
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {CONNECTIONS.map((connection, index) => {
            const path = getConnectionPath(connection.from, connection.to);
            if (!path) return null;
            
            return (
              <path
                key={index}
                d={path}
                stroke="rgba(251, 191, 36, 0.4)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{
                  strokeDasharray: "5,5",
                  animation: `dash 2s linear infinite`,
                }}
              />
            );
          })}
        </svg>

        {/* Cities */}
        {JHARKHAND_CITIES.map((city) => (
          <div
            key={city.name}
            className="absolute group cursor-pointer"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <div className={`h-4 w-4 rounded-full ${getCityColor(city.type)} animate-pulse transition-all duration-300 ${hoveredCity === city.name ? 'scale-150' : ''}`} />
            
            {/* City info tooltip */}
            <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-2 rounded-lg bg-emerald-900/90 border border-emerald-700 text-emerald-100 text-sm transition-all duration-300 ${
              hoveredCity === city.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}>
              <div className="font-semibold">{city.name}</div>
              <div className="text-xs text-emerald-300 capitalize">{city.type}</div>
              <div className="text-xs text-amber-300">Pop: {city.population}</div>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-emerald-900/80 border border-emerald-700 rounded-lg p-3 text-xs">
          <div className="text-emerald-200 font-semibold mb-2">City Types</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <span className="text-emerald-100">Capital</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-emerald-100">Industrial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span className="text-emerald-100">Mining</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <span className="text-emerald-100">Religious</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
    </section>
  );
}


