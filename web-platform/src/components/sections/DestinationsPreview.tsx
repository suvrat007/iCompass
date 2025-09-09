"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function DestinationsPreview() {
  const { data } = useQuery({ queryKey: ["destinations"], queryFn: async () => fetch("/api/destinations").then((r) => r.json()) });
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Popular Destinations</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {(data ?? []).map((d: any) => (
          <Link key={d.slug} href={`/destinations/${d.slug}`} className="block border border-emerald-800 rounded p-4 hover:bg-emerald-950/40">
            <div className="font-medium">{d.name}</div>
            <div className="text-sm text-emerald-300">Rating: {d.rating}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}


