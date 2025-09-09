import Image from "next/image";

export default function Gallery() {
  const urls = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
  ];
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Cultural Gallery</h2>
      <div className="mt-6 columns-1 md:columns-3 gap-4 [&>*]:mb-4">
        {urls.map((u, i) => (
          <div key={i} className="relative h-48 rounded border border-emerald-800 overflow-hidden">
            <Image src={u} alt="Cultural" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}


