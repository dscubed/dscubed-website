import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Section from "@/app/components/Section";
import Workshop from "@/app/components/competitions/workshop";
import ProjectsHero from "../components/projects/ProjectsHero";

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
      <ProjectsHero />
      <Footer />
    </>
  );
}
