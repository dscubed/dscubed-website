import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import { ArrowLeftIcon } from '@heroicons/react/24/solid' // Use the left arrow icon
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Section from '@/app/components/Section'
import committeePhoto from '@/public/people/committee2024.png'
import ExecutiveSection from '@/app/components/committee/ExecutiveSection'
import DirectorSection from '@/app/components/committee/DirectorSection'

export const metadata = {
  title: 'Past Committee | DSCubed',
  description: 'Meet the team behind DSCubed. Introducing our past committee for 2024.',
  openGraph: {
    title: 'Past Committee | DSCubed',
    description: 'Meet the team behind DSCubed. Introducing our past committee for 2024.',
    url: '/committee-2024',
    siteName: 'DSCubed',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Past Committee | DSCubed",
    description: 'Meet the team behind DSCubed. Introducing our past committee for 2024.',
  },
}

export default function PastCommitteePage() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <div>
            <h1 className="text-5xl mb-5 sm:text-4xl">2024 Committee</h1>
            <Link className="flex gap-2 text-xl text-theme" href="/committee-2025">
              <ArrowLeftIcon className="w-6 h-6 my-auto" /> {/* Left arrow icon */}
              <span className="my-auto">Present Committee</span>
            </Link>
          </div>
        </Section>

        <div className="px-2 mx-auto max-w-screen-xl">
          <Image
            className="w-full max-w-screen-2xl min-h-80 aspect-video mx-auto rounded-2xl object-cover brightness-[1.1] saturate-[1.2]"
            src={committeePhoto}
            alt="Committee group photo"
            width={1280}
          ></Image>
        </div>

        <ExecutiveSection />
        <DirectorSection />
        <TeamsSection />
      </main>

      <Footer />
    </>
  )
}