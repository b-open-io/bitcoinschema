'use client';

import { motion } from 'framer-motion';

const companies = [
  'GorillaPool',
  'Taal',
  'HandCash',
  '1Sat',
  'Treechat',
  'yours.org',
  'fbx.fun',
  '1sat.market',
  'themetoken.dev',
  'alchema.world',
  'mintflow.me',
];

export function PartnersMarquee() {
  return (
    <section className="py-16 border-t bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Powering the Ecosystem
        </p>
      </div>

      <div className="flex relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: '-50%' }}
          transition={{ repeat: Number.POSITIVE_INFINITY, ease: 'linear', duration: 20 }}
        >
          {[...companies, ...companies].map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="text-2xl font-bold text-muted-foreground/40 hover:text-primary/80 transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
