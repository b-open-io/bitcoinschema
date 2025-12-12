'use client';

import { motion } from 'framer-motion';
import { Database, Share2, ShieldCheck, Code2 } from 'lucide-react';

const features = [
  {
    title: 'Universal Interoperability',
    description: 'Data written by one app is instantly readable by any other Bitcoin Schema compliant application.',
    icon: Share2,
    className: 'md:col-span-2',
    visual: (
      <div className="absolute right-4 bottom-4 opacity-20 md:opacity-100">
        <div className="flex gap-2">
          <div className="bg-primary/20 p-2 rounded text-xs border border-primary/30">App A</div>
          <div className="text-primary/50">→</div>
          <div className="bg-primary/20 p-2 rounded text-xs border border-primary/30">Schema</div>
          <div className="text-primary/50">→</div>
          <div className="bg-primary/20 p-2 rounded text-xs border border-primary/30">App B</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Type Safety',
    description: 'Strict validation rules ensure data integrity across the network.',
    icon: ShieldCheck,
    className: 'md:col-span-1',
    visual: null,
  },
  {
    title: 'Developer Experience',
    description: 'Copy-paste JSON-LD templates to get started in seconds.',
    icon: Code2,
    className: 'md:col-span-1',
    visual: null,
  },
  {
    title: 'Decentralized Graph',
    description: 'Build a social graph that no single entity owns or controls.',
    icon: Database,
    className: 'md:col-span-2',
    visual: (
      <div className="absolute right-0 bottom-0 w-32 h-24 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full" />
    ),
  },
];

export function BentoFeatures() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Standardize?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Bitcoin Schema turns the global ledger into a structured global database.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl border bg-card p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 ${feature.className}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
              {feature.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
