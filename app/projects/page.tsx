import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Section from "@/app/components/Section";
import Workshop from "@/app/components/competitions/workshop";

export const metadata = {
  title: "Projects Initiative | DSCubed",
  description: " ",
  openGraph: {
    title: "Projects Initiative | DSCubed",
    description: " ",
    url: "/projects-initiative",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Initiative | DSCubed",
    description: "",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background-secondary z-10">
        <div className="text-center my-8">
          <h1 className="text-2xl font-bold">Projects Initiative</h1>
        </div>
      <hr className="border-0 border-b border-border" />
      </main>
      <Footer />
    </>
  );
}