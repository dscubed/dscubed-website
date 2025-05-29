"use client";

import VisualiserSection from "@/app/components/visualiser/VisualiserSection";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import {
  ArrowLeftIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export default function VisualiserPage() {
  const router = useRouter();

  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      {/* Welcome modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-background text-foreground rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold mb-6">
              Welcome to DSCubed's <br />
              3D Word Embeddings Visualiser
            </h1>
            <p className="text-xl font-bold text-yellow-200 mb-6">
              This experience works best for desktop users!
            </p>
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
        {hasLoaded && (
          <>
            <button
              onClick={() => setShowWelcomeModal(true)}
              className="absolute bottom-8 left-0 flex gap-2 text-text-secondary hover:text-text-primary transition z-10 px-9"
            >
              <InformationCircleIcon className="w-8 h-8 my-auto" />
            </button>

            <button
              onClick={() => router.push("/")}
              className="absolute top-7 left-0 flex gap-2 text-text-secondary hover:text-text-primary transition z-10 px-6"
            >
              <ArrowLeftIcon className="w-4 h-4 my-auto" />
              <span className="my-auto">Back</span>
            </button>
          </>
        )}

        {/* Visualiser Section */}
        <div className="relative z-0">
          <VisualiserSection onLoaded={() => setHasLoaded(true)} />
        </div>

        {/* Overlayed Footer */}
        <footer className="absolute bottom-4 right-4 text-text-primary rounded-lg shadow-lg p-4 z-10 sm:bottom-24 sm:right-0 sm:left-0 sm:mx-auto sm:w-full sm:items-center sm:text-center">
          <div className="flex flex-col items-end gap-4 text-text-secondary text-right sm:items-center sm:text-center">
            <p className="text-sm font-bold">
              Disclaimer: This is our first prototype and may contain <br />{" "}
              loading, performance issues, and/or bugs.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} DSCubed · Data Science Student
              Society
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@dscubed.org.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.EnvelopeFill className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/dscubed.unimelb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/dscubed.unimelb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/hFX4PJZ5MQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Discord className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/dscubed-unimelb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Medium className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/dscubed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
