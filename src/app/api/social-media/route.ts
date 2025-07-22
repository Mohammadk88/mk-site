import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const socialMedia = await prisma.socialMedia.findMany({
      orderBy: { platform: 'asc' }
    });
    return NextResponse.json(socialMedia);
  } catch (error) {
    console.error('Error fetching social media:', error);
    return NextResponse.json({ error: 'Failed to fetch social media' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Delete all existing social media entries
    await prisma.socialMedia.deleteMany();
    
    // Create new entries
    await prisma.socialMedia.createMany({
      data: data.map((item: {
        platform: string;
        url: string;
        username: string;
        isVisible: boolean;
      }) => ({
        platform: item.platform,
        url: item.url,
        username: item.username,
        isVisible: item.isVisible,
      }))
    });

    // Return updated data
    const updatedSocialMedia = await prisma.socialMedia.findMany({
      orderBy: { platform: 'asc' }
    });

    return NextResponse.json(updatedSocialMedia);
  } catch (error) {
    console.error('Error updating social media:', error);
    return NextResponse.json({ error: 'Failed to update social media' }, { status: 500 });
  }
}
