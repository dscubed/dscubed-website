import { MetadataRoute } from 'next'
import { fetchMostRecentEventUpdatedAt } from '@/app/lib/data'

const baseURL = 'https://' + process.env.DOMAIN_URL || 'localhost:3000'
const serverUpdatedAt = new Date() // Value updated on deployment

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch the most recent date of when an event is updated
  const eventUpdatedAt = new Date(
    (await fetchMostRecentEventUpdatedAt())?.updated_at || ''
  )
  
  // Find the most recent timestamp, between server update and event update
  // const mostRecentTimestamp = new Date(Math.max(
  //   Number(serverUpdatedAt), 
  //   Number(eventUpdatedAt)
  // ))

  return [
    {
      url: baseURL,
      lastModified: eventUpdatedAt,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: baseURL + '/committee',
      lastModified: serverUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: baseURL + '/committee/2026',
      lastModified: serverUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.85, // Higher priority for the most recent committee
    },
    {
      url: baseURL + '/committee/2025',
      lastModified: serverUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: baseURL + '/committee/2024',
      lastModified: serverUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.75, // Lower priority for older committees
    },
    {
      url: baseURL + '/sponsors',
      lastModified: serverUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseURL + '/events',
      lastModified: eventUpdatedAt,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]
}