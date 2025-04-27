import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Section from '@/app/components/Section'
import FAQSection from '../components/competitions/FAQ/FAQSection'
import Title from '@/app/components/competitions/Title'
import ScrollUpButton from '@/app/components/competitions/ScrollUpButton'

export const metadata = {
  title: 'Competitions | DSCubed',
  description: 'Explore our competitions and challenges.',
  openGraph: {
    title: 'Competitions | DSCubed',
    description: 'Explore our competitions and challenges.',
    url: '/competitions',
    siteName: 'DSCubed',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Competitions | DSCubed",
    description: 'Explore our competitions and challenges.',
  },
}

export default function CompetitionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background-secondary z-10">
        <Title />

        <hr className="border-0 border-b border-border" />
        <FAQSection />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  )
}