import { remark } from 'remark';
import { source } from './source';

/**
 * Convert documentation pages to LLM-friendly text format
 */
export function getLLMText(pages: any): string {
  let result = '';

  function processPage(page: any): void {
    if (page.type === 'page') {
      const pageContent = source.getPage(page.slugs)?.data;
      if (pageContent) {
        result += `# ${pageContent.title || page.name}\n\n`;
        
        if (pageContent.description) {
          result += `${pageContent.description}\n\n`;
        }
        
        // Add page content metadata
        result += `[Content: ${page.name} - Bitcoin Schema documentation page]\n\n`;
        
        result += '\n\n---\n\n';
      }
    } else if (page.type === 'folder') {
      // Add folder header
      result += `## ${page.name}\n\n`;
      
      // Process all children
      page.children.forEach((child: any) => processPage(child));
    }
  }

  pages.children.forEach((page: any) => processPage(page));
  return result;
}

/**
 * Get individual page content as markdown
 */
export function getPageMarkdown(slugs: string[]): string | null {
  const page = source.getPage(slugs);
  if (!page?.data) return null;

  let content = `# ${page.data.title}\n\n`;
  if (page.data.description) {
    content += `${page.data.description}\n\n`;
  }
  
  // For now, just return metadata since body is processed MDX
  content += `[This is a processed MDX page with title: ${page.data.title}]\n\n`;
  content += `Description: ${page.data.description || 'No description'}\n\n`;
  content += `Path: /docs/${slugs.join('/')}\n\n`;
  
  return content;
}

/**
 * Generate structured data for AI training
 */
export function getStructuredData() {
  const pages = source.pageTree;
  const structuredData: any[] = [];

  function processPage(page: any, path: string[] = []): void {
    if (page.type === 'page') {
      const pageContent = source.getPage(page.slugs)?.data;
      if (pageContent) {
        structuredData.push({
          id: page.slugs.join('/'),
          title: pageContent.title || page.name,
          description: pageContent.description,
          path: path.concat(page.name),
          url: `/docs/${page.slugs.join('/')}`,
          type: 'documentation',
          category: path[0] || 'general',
          subcategory: path[1] || null,
          tags: extractTags(pageContent.title + ' ' + (pageContent.description || '')),
          lastModified: new Date().toISOString(),
        });
      }
    } else if (page.type === 'folder') {
      page.children.forEach((child: any) => 
        processPage(child, path.concat(page.name))
      );
    }
  }

  pages.children.forEach((page: any) => processPage(page));
  return structuredData;
}

/**
 * Extract potential tags from content
 */
function extractTags(content: string): string[] {
  const tags: string[] = [];
  
  // Extract common Bitcoin Schema terms
  const schemaTerms = [
    'bitcoin', 'schema', 'post', 'like', 'follow', 'message', 
    'function', 'payment', 'MAP', 'AIP', 'transaction', 'blockchain'
  ];
  
  schemaTerms.forEach(term => {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      tags.push(term);
    }
  });
  
  return [...new Set(tags)]; // Remove duplicates
}