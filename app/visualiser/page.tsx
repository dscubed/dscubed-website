import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Section from "@/app/components/Section";
import VisualiserSection from "@/app/components/visualiser/VisualiserSection";

export const metadata = {
  title: "Visualiser | DSCubed",
  description: "",
  openGraph: {
    title: "Visualiser | DSCubed",
    description: "",
    url: "/visualiser",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visualiser | DSCubed",
    description: "",
  },
};

export default function VisualiserPage() {
  return (
    <>
      <Navbar />

      <main className="flex-col items-center justify-center min-h-screen">
        <Section>
          <h1 className="text-5xl sm:text-4xl text-center mx-auto mb-5 !leading-tight">
            3D Word Embeddings Visualiser
          </h1>
        </Section>
        <VisualiserSection />
      </main>

      <Footer />
    </>
  );
}
