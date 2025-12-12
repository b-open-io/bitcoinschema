import { getPageMarkdown } from '@/lib/llm';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const content = await getPageMarkdown(slug);

  if (!content) {
    notFound();
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
