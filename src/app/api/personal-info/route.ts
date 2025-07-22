import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const personalInfo = await prisma.personalInfo.findFirst();
    
    if (!personalInfo) {
      return NextResponse.json(null);
    }
    
    return NextResponse.json(personalInfo);
  } catch (error) {
    console.error('Error fetching personal info:', error);
    return NextResponse.json({ error: 'Failed to fetch personal info' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Check if personal info exists
    const existingInfo = await prisma.personalInfo.findFirst();
    
    let personalInfo;
    if (existingInfo) {
      // Update existing record
      personalInfo = await prisma.personalInfo.update({
        where: { id: existingInfo.id },
        data: {
          nameEn: data.nameEn,
          nameAr: data.nameAr,
          nameTr: data.nameTr,
          titleEn: data.titleEn,
          titleAr: data.titleAr,
          titleTr: data.titleTr,
          bioEn: data.bioEn,
          bioAr: data.bioAr,
          bioTr: data.bioTr,
          avatar: data.avatar,
          resumeUrl: data.resumeUrl,
          location: data.location,
          yearsExp: data.yearsExp,
        }
      });
    } else {
      // Create new record
      personalInfo = await prisma.personalInfo.create({
        data: {
          nameEn: data.nameEn,
          nameAr: data.nameAr,
          nameTr: data.nameTr,
          titleEn: data.titleEn,
          titleAr: data.titleAr,
          titleTr: data.titleTr,
          bioEn: data.bioEn,
          bioAr: data.bioAr,
          bioTr: data.bioTr,
          avatar: data.avatar,
          resumeUrl: data.resumeUrl,
          location: data.location,
          yearsExp: data.yearsExp,
        }
      });
    }

    return NextResponse.json(personalInfo);
  } catch (error) {
    console.error('Error updating personal info:', error);
    return NextResponse.json({ error: 'Failed to update personal info' }, { status: 500 });
  }
}
