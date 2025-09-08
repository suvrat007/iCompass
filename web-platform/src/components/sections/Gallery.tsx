export default function Gallery() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Cultural Gallery</h2>
      <div className="mt-6 columns-1 md:columns-3 gap-4 [&>*]:mb-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-48 bg-emerald-900/40 rounded border border-emerald-800" />
        ))}
      </div>
    </section>
  );
}


