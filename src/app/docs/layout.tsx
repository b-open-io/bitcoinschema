import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import Image from 'next/image';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center space-x-2">
            <Image
              src="/bitcoin-schema-logo.svg"
              alt="Bitcoin Schema Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span>Bitcoin Schema</span>
          </div>
        ),
        url: '/',
      }}
      sidebar={{
        banner: (
          <div className="rounded-lg border bg-card p-4 text-card-foreground">
            <p className="text-sm">
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