import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatWeDoSection from "@/app/components/home/WhatWeDoSection";
import StatsSection from "@/app/components/home/StatsSection";
import EventSection from "@/app/components/home/EventSection";
import GallerySection from "@/app/components/home/GallerySection";
import FAQSection from "@/app/components/home/FAQSection";
import FrontPageEmbed from "./components/visualiser/frontpageembed";
import { HomeLoaderProvider } from "@/app/components/home/HomeLoaderContext";

export default function Index() {
  return (
    <HomeLoaderProvider>
      {/* <HeroSection /> */}
      <Navbar />

      <main className="relative bg-background-secondary z-10">
        <FrontPageEmbed />

        <WhatWeDoSection />
        <hr className="border-0 border-b-2 border-border" />
        {/* <AimsSection />
        <hr className="border-0 border-b border-border" /> */}
        <StatsSection />
        <hr className="border-0 border-b-2 border-border" />
        {/* <StatsCounterSection /> */}
        {/* <hr className="border-0 border-b border-border" /> */}
        {/* <AboutSection /> */}
        {/* <hr className="border-0 border-b border-border" /> */}
        {/* <ReasonsSection /> */}
        {/* <hr className="border-0 border-b border-border" /> */}
        {/* <FollowSection /> */}
        <EventSection />
        <hr className="border-0 border-b-2 border-border" />
        <GallerySection />
        <hr className="border-0 border-b-2 border-border" />
        {/* <MapSection /> */}
        {/* <hr className="border-0 border-b-2 border-border" /> */}
        <FAQSection />
      </main>

      <Footer />
    </HomeLoaderProvider>
  );
}

/*
- AimsSection is no longer needed
- AboutSection turned into StatsSection with ReasonsSection style
- ReasonSections is no longer needed
- FollowSection to be ignored
- MapSection to be put in once done
*/
