import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/bitcoin-schema-logo.svg"
            alt="Bitcoin Schema Logo"
            width={400}
            height={200}
            className="mx-auto h-auto w-auto max-w-lg"
          />
        </div>
        <p className="text-xl text-muted-foreground mb-8">
          Data definitions for Bitcoin applications
        </p>
        <div className="mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            Community driven extensible schemas that enable developers to create interoperable data based applications on Bitcoin SV.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  🔗 Unlock Limitless Interoperability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Standardized data structures allow applications to seamlessly share and understand each other's data
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  🤝 Build Collaborative Networks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enable rich social interactions, content sharing, and collaborative features across applications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/docs">
              Learn More
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs/schemas">
              Browse Schemas
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
