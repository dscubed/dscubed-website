import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Section from "@/app/components/Section";
import Workshop from "@/app/components/competitions/workshop";

export const metadata = {
  title: "Competitions | DSCubed",
  description: "Explore our competitions and challenges.",
  openGraph: {
    title: "Competitions | DSCubed",
    description: "Explore our competitions and challenges.",
    url: "/competitions",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitions | DSCubed",
    description: "Explore our competitions and challenges.",
  },
};

export default function CompetitionsPage() {
  return (
    <>
      <Navbar />

      <main className="relative bg-background-secondary z-10">
        <Section>
        <hr className="border-0 border-b border-border" />
          <Workshop />
        </Section>
      </main>

      <Footer />
    </>
  );
}
