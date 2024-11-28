import { getVercelProjects } from '@/utils/vercel-api';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Fetching Vercel projects...');
    const projects = await getVercelProjects();
    console.log('Projects fetched:', projects);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch projects' },
      { status: 500 }
    );
  }
} 