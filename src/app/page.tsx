import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { SchemaVisualization } from '@/components/schema-visualization';
import { BentoFeatures } from '@/components/home/bento-features';
import { CodePreview } from '@/components/home/code-preview';
import { PartnersMarquee } from '@/components/home/partners-marquee';
import { SchemaList } from '@/components/home/schema-list';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background relative overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium">
                  Community Driven Standards
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  The Data Layer for
                  <span className="text-primary block mt-2">Bitcoin SV</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  The universal standard for data structure. Build interoperable applications that
                  share a single global database.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="h-12 px-8 text-base">
                    <Link href="/docs/getting-started">
                      Start Building <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                    <Link href="/docs/schemas">Explore Schemas</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <SchemaVisualization />
              </div>
            </div>
          </div>
        </section>

        <PartnersMarquee />
        <BentoFeatures />
        <CodePreview />
        <SchemaList />

        {/* Final CTA */}
        <section className="py-24 px-6 text-center border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Ready to build the future?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join developers building the next generation of data applications on Bitcoin.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/docs">Read the Documentation</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
