"use client";

import Footer from "@/app/components/Footer";
import VisualiserSection from "@/app/components/visualiser/VisualiserSection";
import { useRouter } from "next/navigation";

export default function VisualiserPage() {
  const router = useRouter();

  return (
    <>
      <main className="relative flex-col items-center justify-center min-h-screen">
        {/* Overlayed Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-20 left-4 bg-gray-200 text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition z-10"
        >
          Back
        </button>

        {/* Overlayed Title */}
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-4xl text-center mx-auto mb-5 !leading-tight text-white z-10">
          3D Word Embeddings Visualiser
        </h1>

        {/* Visualiser Section */}
        <div className="relative z-0">
          <VisualiserSection />
        </div>
      </main>

      <Footer />
    </>
  );
}