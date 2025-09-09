import Link from "next/link";

export default function DestinationsIndex() {
  const sample = [
    { slug: "betla-national-park", name: "Betla National Park" },
    { slug: "hundru-falls", name: "Hundru Falls" },
  ];
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Destinations</h1>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {sample.map((d) => (
          <li key={d.slug} className="border border-emerald-800 rounded p-4">
            <div className="font-medium">{d.name}</div>
            <Link className="text-emerald-300 text-sm" href={`/destinations/${d.slug}`}>View →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


