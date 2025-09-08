"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-emerald-950/60 border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">Jharkhand Connect</Link>
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
      </div>
    </header>
  );
}


