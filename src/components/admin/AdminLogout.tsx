'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function AdminLogout() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
    >
      Logout
    </Button>
  )
}
