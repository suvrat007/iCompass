export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1,2,3].map((i) => (
          <div key={i} className="border border-emerald-800 rounded p-4">
            <div className="text-sm text-emerald-300">Verified by Tribal Council</div>
            <p className="mt-2">“An unforgettable cultural journey.”</p>
            <div className="mt-2 text-yellow-400">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}


