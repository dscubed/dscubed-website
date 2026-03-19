import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatWeDoSection from "@/app/components/home/WhatWeDoSection";
import StatsSection from "@/app/components/home/StatsSection";
import EventSection from "@/app/components/home/EventSection";
import GallerySection from "@/app/components/home/GallerySection";
import FAQSection from "@/app/components/home/FAQSection";
import FrontPageEmbed from "./components/visualiser/frontpageembed";
// import IntroSection from "@/app/components/home/IntroSection";
// import AimsSection from "@/app/components/home/AimsSection";
// import AboutSection from "@/app/components/home/AboutSection";
// import HeroSection from "@/app/components/home/HeroSection";
// import MapSection from "@/app/components/home/MapSection";
// import ReasonsSection from "@/app/components/home/ReasonsSection";

export default function Index() {
  return (
    <>
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
    </>
  );
}

/*
- AimsSection is no longer needed
- AboutSection turned into StatsSection with ReasonsSection style
- ReasonSections is no longer needed
- FollowSection to be ignored
- MapSection to be put in once done
*/
