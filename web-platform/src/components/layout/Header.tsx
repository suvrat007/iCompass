"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/cultural", label: "Cultural" },
  { href: "/about", label: "About" },
  { href: "/ai-guide", label: "AI Guide" },
  { href: "/contact", label: "Contact" },
];

function HeaderContent() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-emerald-950/60 border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">iCompass</Link>
        <nav className="hidden md:flex gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm hover:text-white ${pathname === item.href ? "text-white" : "text-emerald-300"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link href="/marketplace" className="px-4 py-2 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition text-sm">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div className="sticky top-0 z-40 backdrop-blur bg-emerald-950/60 border-b border-emerald-800 h-14"></div>}>
      <HeaderContent />
    </Suspense>
  );
}


