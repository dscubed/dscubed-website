import { redirect } from 'next/navigation';

export default function RedirectPage() {
  // Must use server side redirect to avoid triggering Instagram's auth measures
  redirect('https://www.instagram.com/dscubed.unimelb/');
}