import { source } from '@/lib/source';
import { getLLMText } from '@/lib/llm';

export function GET() {
  const text = getLLMText(source.pageTree);
  
  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}