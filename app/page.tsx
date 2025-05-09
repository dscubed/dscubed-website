import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import IntroSection from '@/app/components/home/IntroSection'
import WhatWeDoSection from '@/app/components/home/WhatWeDoSection'
import AimsSection from '@/app/components/home/AimsSection'
import ReasonsSection from '@/app/components/home/ReasonsSection'
import MapSection from '@/app/components/home/MapSection'
import HeroSection from '@/app/components/home/HeroSection'
import EventSection from '@/app/components/home/EventSection'
import GallerySection from '@/app/components/home/GallerySection'
import FAQSection from '@/app/components/home/FAQSection'
import AboutSection from '@/app/components/home/AboutSection'
import FrontPageEmbed from './components/visualiser/FrontPageEmbed'
import Section from './components/Section'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <HeroSection />
      <Navbar />

      <main className="relative bg-background-secondary z-10">
        <div className='relative'>
          <FrontPageEmbed />
          <Section className="flex flex-col justify-center absolute top-0 z-10 h-[calc(100vh+66.48px)] w-screen my-0 [&>*]:mx-0 [&>*]:ml-32 ">
            <div className="flex flex-col gap-10 my-auto max-w-xl lg:max-w-xl">
              <h1 className="text-5xl sm:text-4xl font-medium">
                <span className="block leading-tight xl:leading-snug">The Leading </span>
                <span className="block leading-tight xl:leading-snug">Data Science Club at </span>
                <span className="block leading-tight xl:leading-snug">The University of </span>
                <span className="block leading-tight xl:leading-snug">Melbourne.</span>
              </h1>
              <p className="text-xl sm:text-lg leading-relaxed">We are committed in our mission to connect and empower data enthusiasts, providing an unparalleled platform for students who are passionate about Data Science.</p>
              <Link
                target="_blank"
                href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/"
                className="w-max bg-foreground text-background px-8 py-4 font-medium rounded-full"
                >
                Become a Member
              </Link>
            </div>
          </Section>

        </div>
        <hr className="border-0 border-b border-border" />
        <IntroSection />
        <hr className="border-0 border-b border-border" />
        <WhatWeDoSection />
        <hr className="border-0 border-b border-border" />
        <AimsSection />
        <hr className="border-0 border-b border-border" />
        <AboutSection />
        <hr className="border-0 border-b border-border" />
        <ReasonsSection />
        <hr className="border-0 border-b border-border" />
        <MapSection />
        <hr className="border-0 border-b border-border" />
        {/* <FollowSection /> */}
        <EventSection />
        <hr className="border-0 border-b border-border" />
        <GallerySection />
        <hr className="border-0 border-b border-border" />
        <FAQSection />
      </main>

      <Footer />
    </>
  )
}
