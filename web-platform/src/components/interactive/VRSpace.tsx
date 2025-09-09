"use client";
import { useEffect, useState } from "react";

export default function VRSpace() {
  // Use ? for the first query parameter
  const src = "https://www.spatial.io/embed/Spectra-Market-65aa550a62783248c496bfd5?autoplay=1&enableRtc=1";
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">VR Space</h2>
      <div className="mt-6 w-full aspect-video rounded-xl overflow-hidden border border-emerald-800 bg-black">
        {mounted ? (
          <iframe
            src={src}
            title="Spatial VR Space"
            allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-emerald-900/40" />
        )}
      </div>
    </section>
  );
}


