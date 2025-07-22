import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang');
    
    const contactInfo = await prisma.contactInfo.findMany({
      where: lang ? { lang } : {},
      orderBy: [
        { isPrimary: 'desc' },
        { type: 'asc' }
      ]
    });
    
    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Delete all existing contact info entries
    await prisma.contactInfo.deleteMany();
    
    // Create new entries
    await prisma.contactInfo.createMany({
      data: data.map((item: {
        type: string;
        value: string;
        label: string;
        lang: string;
        isPrimary: boolean;
      }) => ({
        type: item.type,
        value: item.value,
        label: item.label,
        lang: item.lang,
        isPrimary: item.isPrimary,
      }))
    });

    // Return updated data
    const updatedContactInfo = await prisma.contactInfo.findMany({
      orderBy: [
        { isPrimary: 'desc' },
        { type: 'asc' }
      ]
    });

    return NextResponse.json(updatedContactInfo);
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}
