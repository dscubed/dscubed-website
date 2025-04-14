import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Section from '@/app/components/Section'
import committeePhoto from '@/public/people/committee2025.jpg'
import ExecutiveSection from '@/app/components/committee/ExecutiveSection'
import DirectorSection from '@/app/components/committee/DirectorSection'
import TeamsSection from '@/app/components/committee/TeamsSection'

// Import member data
import { executives, directors } from '@/app/components/committee/memberData2025'

export const metadata = {
  title: 'Committee | DSCubed',
  description: 'Meet the team behind DSCubed. Introducing our committee for 2025.',
  openGraph: {
    title: 'Committee | DSCubed',
    description: 'Meet the team behind DSCubed. Introducing our committee for 2025.',
    url: '/committee',
    siteName: 'DSCubed',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Committee | DSCubed",
    description: 'Meet the team behind DSCubed. Introducing our committee for 2025.',
  },
}

export default function CommitteePage() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <div>
            <h1 className="text-5xl mb-5 sm:text-4xl">2025 Committee</h1>
            {(new Date()).getFullYear() > 2024 && (
              <Link className="flex gap-2 text-xl text-theme" href="/committee-2024">
                <span className="my-auto">Past Committee</span>
                <ArrowRightIcon className="w-6 h-6 my-auto" />
              </Link>
            )}
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

        {/* Pass data to the ExecutiveSection */}
        <ExecutiveSection
          executives={executives}
          teamPhoto="/people/2025-teams/Execs-Directors.png"
        />

        {/* Pass data to the DirectorSection */}
        <DirectorSection directors={directors} />

        {/* <RepresentativeSection /> */}
        <TeamsSection />
      </main>

      <Footer />
    </>
  )
}