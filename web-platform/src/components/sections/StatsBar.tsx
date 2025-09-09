"use client";
import { useQuery } from "@tanstack/react-query";

export default function StatsBar() {
  const { data } = useQuery({ queryKey: ["metrics"], queryFn: async () => fetch("/api/metrics").then((r) => r.json()) });
  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-4 text-center rounded-lg border border-emerald-800 bg-emerald-950/40 p-6">
        <Stat label="Stories Preserved" value={data?.storiesPreserved ?? 0} />
        <Stat label="Visitors" value={data?.visitors ?? 0} />
        <Stat label="Countries" value={data?.countries ?? 0} />
        <Stat label="Community Impact" value={`₹${(data?.communityImpact ?? 0).toLocaleString()}`} />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-emerald-300">{label}</div>
    </div>
  );
}


