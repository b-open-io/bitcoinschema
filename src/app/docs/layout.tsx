import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'Bitcoin Schema',
        url: '/',
      }}
      sidebar={{
        banner: (
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              🎯 Community-driven schemas for Bitcoin applications
            </p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}