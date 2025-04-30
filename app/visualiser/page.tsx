
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Section from '@/app/components/Section'

export const metadata = {
  title: 'Visualiser | DSCubed',
  description: '',
  openGraph: {
    title: 'Visualiser | DSCubed',
    description: '',
    url: '/visualiser',
    siteName: 'DSCubed',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visualiser | DSCubed",
    description: '',
  },
}

export default function VisualiserPage() {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-center">Visualiser</h1>
      </main>

      <Footer />
    </>
  )
}