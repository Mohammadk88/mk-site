import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';

export default async function AdminRootPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token');

  if (!token) {
    redirect('/admin/login');
  }

  const user = verifyToken(token.value);
  if (!user) {
    redirect('/admin/login');
  }

  // If authenticated, redirect to the protected dashboard
  redirect('/admin/dashboard');
}