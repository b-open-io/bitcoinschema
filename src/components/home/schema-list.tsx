import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const schemas = [
  { name: 'Post', path: '/docs/schemas/content' },
  { name: 'Like', path: '/docs/schemas/social-actions' },
  { name: 'Follow', path: '/docs/schemas/social-actions' },
  { name: 'Message', path: '/docs/schemas/messaging' },
  { name: 'Reply', path: '/docs/schemas/content' },
  { name: 'Repost', path: '/docs/schemas/content' },
  { name: 'Friend', path: '/docs/schemas/social-actions' },
  { name: 'Payment', path: '/docs/schemas/generic' },
  { name: 'Function', path: '/docs/schemas/advanced' },
  { name: 'Ordinal', path: '/docs/schemas/tokens' },
];

export function SchemaList() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Standardized Primitives</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Common data structures for social, messaging, payments, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {schemas.map((schema) => (
            <Link
              key={schema.name}
              href={schema.path}
              className="group flex items-center gap-2 px-6 py-3 bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 rounded-full transition-all duration-300"
            >
              <span className="font-mono text-sm group-hover:text-primary transition-colors">
                {schema.name}
              </span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
