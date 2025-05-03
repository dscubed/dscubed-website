'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function InstagramRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Send event to Google Analytics (adjust if using a different GA setup)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'qr_scan', {
        event_category: 'QR',
        event_label: 'Instagram QR - Azlan',
      })
    }

    // Redirect after short delay to ensure GA has time
    const timeout = setTimeout(() => {
      router.push('/ssr-redirect/instagram')
    }, 500) // 500ms is usually safe

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="bg-background-secondary w-full h-svh flex items-center justify-center">
      <p>Taking you to our Instagram...</p>
    </div>
  )
}