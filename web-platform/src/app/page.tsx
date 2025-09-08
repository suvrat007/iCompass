export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex items-center justify-center h-[70vh] bg-gradient-to-b from-emerald-900 to-black">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Discover Jharkhand's Hidden Treasures</h1>
          <p className="mt-4 text-lg text-emerald-200">AI, AR/VR, and cultural stories to guide your journey.</p>
          <div className="mt-8">
            <a href="#explore" className="px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 transition">Start Your Tribal Journey</a>
          </div>
        </div>
      </section>
      <section id="explore" className="py-16 px-6 max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        <FeatureCard title="AR Experience" description="Preview destinations in AR and 360° tours." />
        <FeatureCard title="AI Guide" description="Chat with Birsa for personalized itineraries." />
        <FeatureCard title="Marketplace" description="Shop authentic tribal crafts with impact." />
      </section>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-emerald-800 bg-emerald-950/40 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-emerald-200">{description}</p>
      <button className="mt-4 text-sm text-emerald-300 hover:text-white">Learn more →</button>
    </div>
  );
}


