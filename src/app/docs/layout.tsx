import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { BitcoinLogo } from '@/components/bitcoin-logo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: <BitcoinLogo className="h-8 w-8" />,
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