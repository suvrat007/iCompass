import dynamic from "next/dynamic";
const VRSpace = dynamic(() => import("@/components/interactive/VRSpace"), { ssr: false });

export default function ExperiencesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">AR/VR Experiences</h1>
      <p className="mt-2 text-emerald-200">Explore an interactive VR scene embedded below.</p>
      <VRSpace />
    </main>
  );
}


