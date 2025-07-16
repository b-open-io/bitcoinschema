import { getPageMarkdown } from '@/lib/llm';
import { notFound } from 'next/navigation';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const content = getPageMarkdown(slug);
  
  if (!content) {
    notFound();
  }
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}