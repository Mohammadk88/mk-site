import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token');
    
    if (!token || !verifyToken(token.value)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // Validate required fields
    if (!data.titleEn || !data.descriptionEn) {
      return NextResponse.json(
        { error: 'Title and description in English are required' },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        titleEn: data.titleEn,
        titleAr: data.titleAr || '',
        titleTr: data.titleTr || '',
        descriptionEn: data.descriptionEn,
        descriptionAr: data.descriptionAr || '',
        descriptionTr: data.descriptionTr || '',
        image: data.image || '',
        demoUrl: data.demoUrl || '',
        githubUrl: data.githubUrl || '',
        technologies: JSON.stringify(data.technologies || []),
        category: data.category || 'web',
        published: data.published || false
      }
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
