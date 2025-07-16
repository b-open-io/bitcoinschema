import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/bitcoin-schema-logo-new.svg"
              alt="Bitcoin Schema"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}