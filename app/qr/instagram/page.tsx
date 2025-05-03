'use client'

import { useEffect } from 'react'

export default function InstagramRedirect() {
  useEffect(() => {
    // Send event to Google Analytics (adjust if using a different GA setup)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'qr_scan', {
        event_category: 'QR',
        event_label: 'Instagram QR',
      })
    }

    // Redirect after short delay to ensure GA has time
    const timeout = setTimeout(() => {
      window.location.replace('https://www.instagram.com/dscubed.unimelb/');
    }, 500) // 500ms is usually safe

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="bg-background-secondary w-full h-svh flex items-center justify-center">
      <p>Taking you to our Instagram...</p>
    </div>
  )
}