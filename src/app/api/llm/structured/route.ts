import { getStructuredData } from '@/lib/llm';

export function GET() {
  const data = getStructuredData();
  
  return Response.json({
    generated: new Date().toISOString(),
    count: data.length,
    pages: data,
    metadata: {
      project: 'Bitcoin Schema',
      description: 'Structured documentation data for LLM training and AI applications',
      version: '1.0.0',
      license: 'Open BSV License',
      repository: 'https://github.com/b-open-io/bitcoinschema',
      website: 'https://bitcoinschema.org'
    }
  }, {
    headers: {
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}