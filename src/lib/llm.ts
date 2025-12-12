import { source } from './source';
import type { InferPageType } from 'fumadocs-core/source';

/**
 * Get LLM-friendly text content for a single page
 */
export async function getLLMText(page: InferPageType<typeof source>) {
  return `# ${page.data.title} (${page.url})

${page.data.description || ''}`;
}

/**
 * Get individual page content as markdown
 */
export async function getPageMarkdown(slugs: string[]): Promise<string | null> {
  const page = source.getPage(slugs);
  if (!page) return null;

  return getLLMText(page);
}

/**
 * Generate structured data for AI training
 */
export function getStructuredData() {
  const pages = source.getPages();

  return pages.map(page => ({
    id: page.slugs.join('/'),
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    type: 'documentation',
    tags: extractTags(`${page.data.title} ${page.data.description || ''}`),
  }));
}

/**
 * Extract potential tags from content
 */
function extractTags(content: string): string[] {
  const tags: string[] = [];

  const schemaTerms = [
    'bitcoin', 'schema', 'post', 'like', 'follow', 'message',
    'function', 'payment', 'MAP', 'AIP', 'transaction', 'blockchain'
  ];

  for (const term of schemaTerms) {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      tags.push(term);
    }
  }

  return [...new Set(tags)];
}
