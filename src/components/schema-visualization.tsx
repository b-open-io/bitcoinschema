'use client';

import { useEffect, useState } from 'react';
import { useBlockHeight } from '@/hooks/useBlockHeight';

const schemaTypes = [
  'Post',
  'Like',
  'Repost',
  'Message',
  'Follow',
  'Comment',
  'Profile',
  'Media',
  'Vote',
  'Reaction'
];

export function SchemaVisualization() {
  const [currentSchemaIndex, setCurrentSchemaIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { blockHeight, loading } = useBlockHeight();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentSchemaIndex((prev) => (prev + 1) % schemaTypes.length);
        setIsAnimating(false);
      }, 150); // Half the animation duration
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSchema = schemaTypes[currentSchemaIndex];

  return (
    <div className="relative bg-card rounded-xl sm:rounded-2xl p-6 shadow-xl border transform hover:rotate-0 transition-transform duration-300 max-w-md mx-auto">
      <div className="mb-4">
        <div className="text-sm text-muted-foreground mb-1">Bitcoin Schema</div>
        <div className="text-xs text-muted-foreground/70">Data Structure</div>
      </div>
      
      {/* Schema visualization */}
      <div className="grid grid-cols-6 gap-1 mb-4 bg-background/50 p-3 rounded-lg border">
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 ${
              Math.random() > 0.7
                ? Math.random() > 0.5
                  ? "bg-primary/40"
                  : Math.random() > 0.5
                    ? "bg-primary/30"
                    : "bg-primary/20"
                : "bg-muted"
            } rounded-sm`}
          />
        ))}
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <div>
          <div className="mb-1">
            Schema: 
            <span 
              className={`text-primary ml-1 inline-block transition-all duration-300 ${
                isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
              }`}
            >
              {currentSchema}
            </span>
          </div>
          <div className="text-muted-foreground text-xs">
            Block: {loading ? '...' : blockHeight?.toLocaleString() || '905,825'}
          </div>
        </div>
        <div className="text-right">
          <div className="mb-1">Version: 1.2.0</div>
          <div className="text-muted-foreground text-xs">Updated: 2 days ago</div>
        </div>
      </div>
    </div>
  );
}