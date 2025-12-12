'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const examples = [
  {
    id: 'post',
    label: 'Social Post',
    code: `{
  "app": "myapp.com",
  "type": "post",
  "context": "tx",
  "tx": "abc123...",
  "B": {
    "content": "Hello Bitcoin Schema!",
    "content-type": "text/plain",
    "encoding": "utf-8"
  }
}`,
  },
  {
    id: 'like',
    label: 'Like Action',
    code: `{
  "app": "myapp.com",
  "type": "like",
  "context": "tx",
  "tx": "def456..."
}`,
  },
  {
    id: 'follow',
    label: 'Follow',
    code: `{
  "app": "myapp.com",
  "type": "follow",
  "context": "bap",
  "bap": "id_abc123..."
}`,
  },
];

export function CodePreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 bg-muted/30 border-y">
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Speak the same language</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Leveraging the{' '}
            <span className="text-foreground font-medium">Magic Attribute Protocol (MAP)</span> and{' '}
            <span className="text-foreground font-medium">B Protocol</span>, Bitcoin Schema ensures
            your application data is semantic, discoverable, and future-proof.
          </p>

          <div className="space-y-4">
            {['Semantic Data Structure', 'Lightweight Validation', 'Cross-App Indexing'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Code Window */}
        <div className="relative rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex ml-4 gap-1">
              {examples.map((ex, i) => (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    activeTab === i
                      ? 'bg-primary/20 text-primary'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 overflow-x-auto min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-sm leading-relaxed text-blue-100"
              >
                <code>{examples[activeTab].code}</code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
