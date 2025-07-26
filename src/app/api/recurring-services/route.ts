import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'ar';

    const recurringServices = await prisma.recurringService.findMany({
      where: {
        lang: lang
      },
      orderBy: [
        { popular: 'desc' },
        { price: 'asc' }
      ]
    });

    return NextResponse.json(recurringServices);
  } catch (error) {
    console.error('Error fetching recurring services:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
