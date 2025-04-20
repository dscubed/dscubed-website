import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Section from '@/app/components/Section'
import FAQSection from '../components/home/FAQSection'

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
        <div className="text-center my-8">
          <h1 className="text-2xl font-bold">Competitions</h1>
        </div>
        <hr className="border-0 border-b border-border" />
          <FAQSection />
      </main>

      <Footer />
      <p>Paul is awesome</p>
    </>
  )
}