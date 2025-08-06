import { redirect } from 'next/navigation'

export default function RootPage() {
  // This page should not be reached due to middleware redirect,
  // but serves as a fallback
  redirect('/en')
}
