"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function MarketplacePage() {
  const { data } = useQuery({ queryKey: ["products"], queryFn: async () => fetch("/api/products").then((r) => r.json()) });
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Tribal Marketplace</h1>
      <p className="mt-2 text-emerald-200">Authentic crafts, artisan stories, and impact tracking.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {(data ?? []).map((p: any) => (
          <Link key={p.id} href={`/marketplace/${p.id}`} className="border border-emerald-800 rounded p-4 hover:bg-emerald-950/40">
            <div className="h-40 w-full bg-emerald-900/40 rounded" />
            <div className="mt-3 font-semibold">{p.name}</div>
            <div className="text-sm text-emerald-300">By {p.artisan}</div>
            <div className="mt-1">₹{p.price}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}


