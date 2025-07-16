import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/bitcoin-schema-logo.svg"
            alt="Bitcoin Schema Logo"
            width={400}
            height={200}
            className="mx-auto"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
          Bitcoin Schema
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Data definitions for Bitcoin applications
        </p>
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Community driven extensible schemas that enable developers to create interoperable data based applications on Bitcoin SV.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">
                🔗 Unlock Limitless Interoperability
              </h3>
              <p className="text-gray-600">
                Standardized data structures allow applications to seamlessly share and understand each other's data
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-orange-600">
                🤝 Build Collaborative Networks
              </h3>
              <p className="text-gray-600">
                Enable rich social interactions, content sharing, and collaborative features across applications
              </p>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <Link
            href="/docs"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/docs/schemas"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Browse Schemas
          </Link>
        </div>
      </div>
    </main>
  );
}
