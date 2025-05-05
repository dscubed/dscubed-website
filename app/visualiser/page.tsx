"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Footer from "@/app/components/Footer";
import VisualiserSection from "@/app/components/visualiser/VisualiserSection";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VisualiserPage() {
  const router = useRouter();

  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  return (
    <>
      {/* Welcome modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-background text-foreground rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold mb-6">
              Welcome to the <br />
              3D Word Embeddings Visualiser
            </h1>
            <p className="mb-6">
              This interactive tool lets you explore how words relate to each
              other using high-dimensional embeddings, projected into 3D space.
              It’s powered by the Universal Sentence Encoder (USE), a model used
              in Natural Language Processing (NLP) and essential for LLMs like
              ChatGPT.
            </p>
            <p className="mb-6">
              Use your mouse to rotate and zoom. Click on orbs to find similar
              words (5 nearest neighbours). You can also add your own word to
              see how it fits into the space!
            </p>
            <button
              onClick={() => setShowWelcomeModal(false)}
              className="bg-foreground text-background px-6 py-3 font-medium rounded-full"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <main className="relative flex-col items-center justify-center min-h-screen">
        {/* Overlayed Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-20 left-4 flex gap-2 text-text-secondary hover:text-text-primary transition mt-auto z-10"
        >
          <ArrowLeftIcon className="w-4 h-4 my-auto" />
          <span className="my-auto">Back</span>
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
