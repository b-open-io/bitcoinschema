import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['600'] // Semi-bold
});

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/bitcoin-schema-logo-icon.svg"
              alt="Bitcoin Schema"
              width={32}
              height={32}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className={`${montserrat.className} text-xl font-semibold text-foreground leading-none`}>
              Bitcoin Schema
            </span>
          </Link>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}