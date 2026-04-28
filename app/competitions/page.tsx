import { redirect } from "next/navigation";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Workshop from "@/app/components/competitions/workshop";
import EventTimeline from "../components/competitions/timeline";
import KaggleIntro from "@/app/components/competitions/KaggleIntro";
import WhatsInItForMeSection from "@/app/components/competitions/WhatsInItForMeSection";
import FAQSection from "../components/competitions/FAQ/FAQSection";
import Title from "@/app/components/competitions/Title";
import Leaderboard from "../components/competitions/Leaderboard";
import CreditsSection from "@/app/components/competitions/credits";

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
  redirect("https://kaggle.dscubed.org.au/");
}

/** Kaggle page has now been moved to "http://kaggle.dscubed.org.au" */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function KagglePage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background-secondary z-10">
        <Title />

        <div className="my-40">
          <KaggleIntro />
        </div>

        <div className="my-40">
          <WhatsInItForMeSection />
        </div>

        <hr className="border-0 border-b-2 border-border" />
        <Leaderboard />

        <hr className="border-0 border-b-2 border-border" />
        <EventTimeline />

        <hr className="border-0 border-b-2 border-border" />
        <Workshop />

        <hr className="border-0 border-b-2 border-border" />
        <FAQSection />

        <hr className="border-0 border-b-2 border-border" />
        <CreditsSection />
      </main>
      <Footer />
    </>
  );
}
