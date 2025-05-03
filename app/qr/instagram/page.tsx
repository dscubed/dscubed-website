'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google';

export default function InstagramRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Send GTM event for QR scan
    sendGTMEvent({
      event: 'qr_scan',
      event_category: 'QR',
      event_label: `Instagram QR - Poster - Michael`,
    });

    // Redirect after short delay to ensure GA has time
    const timeout = setTimeout(() => {
      router.push('/ssr-redirect/instagram')
    }, 1000) // 1000ms is usually safe

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="bg-background-secondary w-full h-svh flex items-center justify-center">
      <p>Taking you to our Instagram...</p>
    </div>
  )
}