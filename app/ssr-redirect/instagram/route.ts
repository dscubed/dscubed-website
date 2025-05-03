import { NextResponse } from 'next/server'

// Must use server side redirect to avoid triggering Instagram's auth measures
export function GET() {
  return NextResponse.redirect('https://www.instagram.com/dscubed.unimelb/')
}