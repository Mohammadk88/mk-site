import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'ar';

    const pricingPlans = await prisma.pricingPlan.findMany({
      where: {
        lang: lang
      },
      orderBy: [
        { popular: 'desc' },
        { price: 'asc' }
      ]
    });

    return NextResponse.json(pricingPlans);
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
