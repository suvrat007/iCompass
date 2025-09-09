"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AvatarPopup from "./AvatarPopup";

export default function FloatingAvatar() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [pressTimer, setPressTimer] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  function handleMouseDown() {
    const id = window.setTimeout(() => {
      // Long press: toggle voice hint by opening with a flag in future
      setOpen(true);
    }, 600);
    setPressTimer(id);
  }

  function handleMouseUp() {
    if (pressTimer) {
      window.clearTimeout(pressTimer);
      setPressTimer(null);
    }
  }

  if (!isVisible) return null;

  return (
    <>
      <button
        aria-label="Open Birsa AI"
        onClick={() => setOpen(true)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full border border-amber-300/40 bg-gradient-to-tr from-emerald-900 to-black shadow-[0_0_40px_rgba(251,191,36,0.25)] flex items-center justify-center"
      >
        <span className="absolute inline-flex h-full w-full rounded-full ring-2 ring-amber-400/40 animate-ping" />
        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-emerald-700">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=256&auto=format&fit=crop"
            alt="Birsa AI Avatar"
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
      </button>
      <AvatarPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}


