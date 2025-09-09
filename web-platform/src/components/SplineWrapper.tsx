"use client";
import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => <SplineFallback />
});

function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-emerald-900/30 to-black rounded-xl">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
        <p className="text-amber-200">Loading 3D Experience...</p>
      </div>
    </div>
  );
}

interface SplineWrapperProps {
  scene: string;
  className?: string;
}

export default function SplineWrapper({ scene, className = "" }: SplineWrapperProps) {
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <SplineFallback />;
  }

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-b from-emerald-900/30 to-black rounded-xl ${className}`}>
        <div className="text-center p-6">
          <div className="text-amber-400 text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold text-amber-200 mb-2">3D Experience</h3>
          <p className="text-emerald-200 text-sm">Interactive tribal art visualization</p>
          <button 
            onClick={() => setHasError(false)}
            className="mt-4 px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-400 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<SplineFallback />}>
      <div className={`w-full h-full ${className}`}>
        <Spline
          scene={scene}
          onError={() => setHasError(true)}
        />
      </div>
    </Suspense>
  );
}
