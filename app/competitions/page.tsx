import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Section from '@/app/components/Section'
import Title from '@/app/components/competitions/Title'

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
      <Title/>
      <Footer />
      <p>Paul is awesome</p>
    </>
  )
}