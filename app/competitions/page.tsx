import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Section from "@/app/components/Section";
import Workshop from "@/app/components/competitions/workshop";
import EventTimeline from "../components/competitions/timeline";
import KaggleIntro from "@/app/components/competitions/KaggleIntro";
import WhatsInItForMeSection from "@/app/components/competitions/WhatsInItForMeSection";
import FAQSection from "../components/competitions/FAQ/FAQSection";
import Title from "@/app/components/competitions/Title";
import ScrollUpButton from "@/app/components/competitions/ScrollUpButton";
import Prizes from "../components/competitions/prizes";
import CreditsSection from "@/app/components/competitions/credits"; // Corrected import path

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
        <Title />
        <div className="mt-36">
          <KaggleIntro />
        </div>
        <div className="mt-36">
          <WhatsInItForMeSection />
        </div>
        <Section>
          <hr className="border-0 border-b border-border" />
          <Prizes />
        </Section>
        <Section>
          <hr className="border-0 border-b border-border" />
          <EventTimeline />
        </Section>
        <Section>
          <hr className="border-0 border-b border-border" />
          <Workshop />
        </Section>
        <div className="mt-24">
          <Section>
            <hr className="border-0 border-b border-border" />
            <FAQSection />
          </Section>
        </div>
        {/* Add the Credits Section */}
        <Section>
          <hr className="border-0 border-b border-border" />
          <CreditsSection />
          </Section>
      </main>
      <ScrollUpButton />
      <Footer />
    </>
  );
}