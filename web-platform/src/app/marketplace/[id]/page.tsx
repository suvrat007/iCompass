interface Params { params: { id: string } }

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}

export default function ProductPage({ params }: Params) {
  const { id } = params;
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      <div className="h-80 w-full rounded bg-emerald-900/40 border border-emerald-800" />
      <div>
        <h1 className="text-3xl font-bold">Product #{id}</h1>
        <p className="mt-2 text-emerald-200">360° viewer, artisan bio, and blockchain certificate coming soon.</p>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 rounded bg-emerald-600">Add to Cart</button>
          <button className="px-4 py-2 rounded border border-emerald-700">Meet the Maker</button>
        </div>
      </div>
    </main>
  );
}


