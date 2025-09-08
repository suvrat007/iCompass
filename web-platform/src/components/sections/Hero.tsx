"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-[70vh] bg-gradient-to-b from-emerald-900 to-black overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Discover Jharkhand's Hidden Treasures</h1>
        <p className="mt-4 text-lg text-emerald-200">AI Avatar, AR tours, and authentic cultural stories.</p>
        <div className="mt-8">
          <a href="#features" className="px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 transition">Start Your Tribal Journey</a>
        </div>
      </motion.div>
    </section>
  );
}


