import Link from "next/link";
import Image from "next/image";

const items = [
  { slug: "netarhat-hills", name: "Netarhat Hills", badge: "Verified", weather: "22°C" },
  { slug: "hundru-falls", name: "Hundru Falls", badge: "AR Ready", weather: "24°C" },
  { slug: "betla-national-park", name: "Betla National Park", badge: "Blockchain", weather: "26°C" },
  { slug: "deoghar-temple", name: "Deoghar Temple", badge: "Cultural", weather: "25°C" },
];

export default function DestinationShowcase() {
  return (
    <section id="destinations" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Featured Destinations</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-4">
        {items.map((d) => (
          <Link key={d.slug} href={`/destinations/${d.slug}`} className="group relative rounded-xl overflow-hidden border border-emerald-800 bg-emerald-950/30">
            <div className="h-44">
              <Image
                src={getImage(d.slug)}
                alt={d.name}
                width={640}
                height={256}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute top-2 left-2 text-xs px-2 py-1 rounded bg-emerald-900/80 border border-emerald-700">{d.badge}</div>
            <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-emerald-900/80 border border-emerald-700">{d.weather}</div>
            <div className="p-4">
              <div className="font-semibold">{d.name}</div>
              <button className="mt-2 text-sm text-amber-300 group-hover:text-white">Start AR Experience →</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function getImage(slug: string) {
  switch (slug) {
    case "netarhat-hills":
      return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop"; // Mountain sunrise
    case "hundru-falls":
      return "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1600&auto=format&fit=crop"; // Waterfall
    case "betla-national-park":
      return "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"; // Forest wildlife ambiance
    case "deoghar-temple":
      return "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=1600&auto=format&fit=crop"; // Temple architecture
    default:
      return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop";
  }
}


