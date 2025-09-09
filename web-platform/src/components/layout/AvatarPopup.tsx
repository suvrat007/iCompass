"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AvatarPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div className="absolute inset-0 bg-black/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="absolute left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-emerald-800 bg-emerald-950/90 p-6"
          >
            <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-tr from-amber-500/30 to-emerald-400/20 border border-amber-300/30 shadow-[0_0_80px_rgba(251,191,36,0.25)]" />
            <h3 className="mt-4 text-center text-xl font-semibold">Meet Birsa AI - Your Cultural Guide</h3>
            <p className="mt-2 text-center text-sm text-emerald-200">Namaskar! I can help you explore Jharkhand respectfully with stories, routes, and traditions.</p>
            <div className="mt-5 grid gap-2">
              <button className="w-full rounded border border-emerald-700 px-4 py-2 hover:bg-emerald-900/40" onClick={() => { router.push("/ai-guide?mode=journey"); onClose(); }}>Start Cultural Journey</button>
              <button className="w-full rounded border border-emerald-700 px-4 py-2 hover:bg-emerald-900/40" onClick={() => { router.push("/ai-guide?mode=chat"); onClose(); }}>Ask Me Anything</button>
              <button className="w-full rounded bg-amber-500 text-black font-semibold px-4 py-2 hover:bg-amber-400" onClick={() => { router.push("/ai-guide?mode=voice"); onClose(); }}>Voice Interaction</button>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-emerald-300">
              <span>Language: English</span>
              <button onClick={onClose} className="rounded border border-emerald-700 px-2 py-1 hover:bg-emerald-900/40">Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


