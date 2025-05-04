"use client";

import VisualiserSection from "@/app/components/visualiser/VisualiserSection";
import VisNavbar from "@/app/components/visualiser/vis-navbar"; // Import the VisNavbar component
import { useRouter } from "next/navigation";
import * as Icon from "react-bootstrap-icons";

export default function VisualiserPage() {
  const router = useRouter();

  return (
    <>
      <main className="relative flex-col items-center justify-center min-h-screen">
        {/* Sidebar */}
        <VisNavbar /> {/* Overlayed Sidebar */}

        {/* Overlayed Title */}
        <h1 className="absolute font-bold top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-4xl text-center mx-auto mb-2 !leading-tight text-white z-10">
          3D Word Embeddings Visualiser
        </h1>

        {/* Subtext Placeholder */}
        <p className="absolute top-[14%] left-1/2 transform -translate-x-1/2 text-lg sm:text-md text-center mx-auto text-gray-300 z-10">
          Explore Machine Learning using our Word Embeddings Visualiser
        </p>

        {/* Visualiser Section */}
        <div className="relative z-0">
          <VisualiserSection />
        </div>

        {/* Overlayed Footer */}
        <footer className="absolute bottom-4 right-4 text-white rounded-lg shadow-lg p-4 z-10">
          <div className="flex flex-col items-end gap-4 text-right">
            <p className="text-sm opacity-30">
              Disclaimer: This is our first prototype and may contain loading, performance issues, and/or bugs.
            </p>
            <p className="text-sm opacity-30">
              © {new Date().getFullYear()} DSCubed · Data Science Student Society
            </p>
            <div className="flex gap-4 opacity-30">
              <a href="mailto:hello@dscubed.org.au" target="_blank" rel="noopener noreferrer">
                <Icon.EnvelopeFill className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/dscubed.unimelb" target="_blank" rel="noopener noreferrer">
                <Icon.Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/dscubed.unimelb/" target="_blank" rel="noopener noreferrer">
                <Icon.Facebook className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/hFX4PJZ5MQ" target="_blank" rel="noopener noreferrer">
                <Icon.Discord className="w-5 h-5" />
              </a>
              <a href="https://medium.com/dscubed-unimelb" target="_blank" rel="noopener noreferrer">
                <Icon.Medium className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/dscubed/" target="_blank" rel="noopener noreferrer">
                <Icon.Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}