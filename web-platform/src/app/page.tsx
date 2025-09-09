import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DestinationsPreview from "@/components/sections/DestinationsPreview";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import MapJharkhand from "@/components/sections/MapJharkhand";
import StatsBar from "@/components/sections/StatsBar";
import DestinationShowcase from "@/components/sections/DestinationShowcase";
import VRSpace from "@/components/interactive/VRSpace";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <MapJharkhand />
      <DestinationShowcase />
      <Features />
      <DestinationsPreview />
      <Testimonials />
      <Gallery />
      <VRSpace />
    </main>
  );
}


