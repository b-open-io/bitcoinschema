import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Database, Link2, Users } from 'lucide-react';
import { SchemaVisualization } from '@/components/schema-visualization';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background relative overflow-hidden">
      <Navbar />
      
      <main className="flex-1">
        {/* Decorative elements - hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rounded-full"></div>
        <div className="hidden sm:block absolute top-32 right-32 w-2 h-2 sm:w-3 sm:h-3 bg-primary/20 rounded-sm transform rotate-45"></div>
        <div className="hidden sm:block absolute top-40 right-16 w-1 h-6 sm:w-2 sm:h-8 bg-primary/40"></div>
        <div className="hidden sm:block absolute top-48 right-24 w-4 h-1 sm:w-6 sm:h-2 bg-primary/30"></div>
        
        {/* Hero section */}
        <section className="relative pt-16 md:pt-24 lg:pt-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-border bg-background/50 text-sm text-muted-foreground">
                <span className="mr-2">🚀</span> Community Driven Standards
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Data Definitions for 
                <span className="text-primary block mt-1">Bitcoin Applications</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Community driven extensible schemas that enable developers to create interoperable data based applications on Bitcoin SV.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/docs">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/docs/schemas">
                    Browse Schemas
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right column - visual */}
            <div className="relative">
              <SchemaVisualization />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-lg transform rotate-45"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/30 rounded-full"></div>
              <div className="hidden sm:block absolute top-1/2 -right-8 w-4 h-12 bg-primary/20"></div>
            </div>
          </div>
        </div>
        </section>
        
        {/* Features section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Bitcoin Schema?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Standardized data structures enable powerful interoperability between applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Unlock Limitless Interoperability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Standardized data structures allow applications to seamlessly share and understand each other's data
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Build Collaborative Networks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enable rich social interactions, content sharing, and collaborative features across applications
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Simplify Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce development time and complexity by leveraging pre-defined data structures and validation rules
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        </section>
        
        {/* Partners section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
              Trusted by Bitcoin SV Developers
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              {["GorillaPool", "Taal", "HandCash", "1Sat", "Treechat"].map((company, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-foreground/20 rounded"></div>
                  <span className="text-muted-foreground font-medium text-sm sm:text-base">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
        
        {/* Background Logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Image
            src="/bitcoin-schema-logo.svg"
            alt="Bitcoin Schema Logo"
            width={800}
            height={400}
            className="h-auto w-auto"
          />
        </div>
      </main>
    </div>
  );
}