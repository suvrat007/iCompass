function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-emerald-800 bg-emerald-950/40 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-emerald-200">{description}</p>
      <button className="mt-4 text-sm text-emerald-300 hover:text-white">Learn more →</button>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
      <FeatureCard title="AR Experience" description="Preview destinations in AR and 360° tours." />
      <FeatureCard title="AI Guide" description="Chat with Birsa for personalized itineraries." />
      <FeatureCard title="Marketplace" description="Shop authentic tribal crafts with impact." />
    </section>
  );
}


