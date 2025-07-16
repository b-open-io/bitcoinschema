import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

interface PageProps {
  params: Promise<{ slug?: string[] }>; // Next.js 15 async params!
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug || []);
  
  if (!page) notFound();

  // SYNC MODE - direct access to body and toc
  const MDX = (page.data as any).body;

  return (
    <DocsPage toc={(page.data as any).toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description && (
        <DocsDescription>{page.data.description}</DocsDescription>
      )}
      <DocsBody>
        <MDX components={defaultMdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// Generate metadata
export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug || []);
  
  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  };
}