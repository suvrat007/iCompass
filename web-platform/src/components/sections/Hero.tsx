"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F0E]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.10),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-amber-400">iCompass</h1>
          <p className="mt-3 text-lg md:text-xl text-amber-200/90">Where Ancient Wisdom Meets Future Technology</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <Chip>Forest</Chip>
            <Chip>Blockchain Marketplace</Chip>
            <Chip>VR Experiences</Chip>
          </div>
          <p className="mt-4 text-emerald-200">Respectful culture. AR journeys. AI guidance. Real community impact.</p>
          <div className="mt-8 flex gap-4">
            <a href="#map" className="px-6 py-3 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">Explore the Map</a>
            <a href="#destinations" className="px-6 py-3 rounded-md border border-emerald-700 hover:bg-emerald-900/40 transition">Start AR Experience</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative h-80 md:h-[28rem] rounded-xl border border-emerald-800 bg-gradient-to-b from-emerald-900/30 to-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.18),transparent_40%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fmannankoothu-kerala-tribal-artform-1728484747_ba47395706aa1f6b448e.webp&w=3840&q=75" 
              alt="Kerala Tribal Artform - Mannankoothu" 
              width={400} 
              height={400} 
              className="h-full w-full object-cover rounded-xl" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-900/40 px-3 py-1 text-emerald-200">{children}</span>;
}


