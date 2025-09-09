interface Params { params: { slug: string } }

export async function generateStaticParams() {
  return [
    { slug: 'netarhat-hills' },
    { slug: 'hundru-falls' },
    { slug: 'betla-national-park' },
    { slug: 'deoghar-temple' },
  ];
}

export default function DestinationPage({ params }: Params) {
  const { slug } = params;
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold capitalize">{slug.replace(/-/g, " ")}</h1>
      <p className="mt-2 text-emerald-200">Immersive hero, AR preview, cultural overview, and bookings coming soon.</p>
    </main>
  );
}


