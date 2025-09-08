import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DestinationsPreview from "@/components/sections/DestinationsPreview";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Download from "@/components/sections/Download";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <DestinationsPreview />
      <Testimonials />
      <Gallery />
      <Download />
    </main>
  );
}


