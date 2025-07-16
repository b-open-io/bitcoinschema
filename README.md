# Bitcoin Schema Documentation Site

A modern documentation website for Bitcoin Schema built with Next.js, Fumadocs, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, Fumadocs, Tailwind CSS 4
- **Beautiful UI**: Professional documentation interface with dark/light mode
- **Fast Performance**: Optimized for speed with Turbopack and modern tooling
- **Mobile-First**: Responsive design that works on all devices
- **Developer Experience**: Hot reload, TypeScript, and modern tooling
- **SEO Optimized**: Built-in SEO optimization and meta tags
- **Search**: Built-in search functionality for documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.1 with App Router
- **Documentation**: Fumadocs for beautiful docs UI
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Language**: TypeScript
- **Package Manager**: Bun
- **Linting**: Biome (with Ultracite preset)
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

## 🧞 Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun run lint` - Run linting
- `bun run lint:fix` - Fix linting issues
- `bun run format` - Format code
- `bun run check` - Run Biome checks
- `bun run test` - Run tests
- `bun run preview` - Build and preview production
- `bun run clean` - Clean build artifacts
- `bun run type-check` - Run TypeScript type checking

## 📝 Content Structure

```
content/
└── docs/
    ├── index.mdx           # Main documentation index
    ├── getting-started.mdx # Getting started guide
    ├── schemas.mdx         # All schemas overview
    ├── generic-schema.mdx  # Generic schemas
    └── social-schema.mdx   # Social schemas
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Customization

- **Tailwind Config**: Tailwind CSS 4 uses CSS configuration
- **Fumadocs Config**: `source.config.ts` for documentation setup
- **Next.js Config**: `next.config.ts` for Next.js configuration
- **Biome Config**: `biome.json` for linting and formatting

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

The `vercel.json` configuration is already set up for optimal deployment.

### Manual Deployment

```bash
# Build the project
bun run build

# Deploy the .next folder to your hosting provider
```

## 📖 Adding Documentation

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with title and description
3. Write your content using MDX
4. The page will automatically be included in the site

Example:

```mdx
---
title: My New Page
description: A description of my new page
---

# My New Page

Content goes here...
```

## 🎨 Customizing UI

The site uses shadcn/ui components. To customize:

1. Install new components: `bunx shadcn@latest add button`
2. Customize in `src/components/ui/`
3. Use in your MDX files or pages

## 🔍 Search

Search functionality is built-in with Fumadocs. It indexes all your documentation automatically.

## 📱 Mobile Support

The site is fully responsive and optimized for mobile devices with:
- Touch-friendly navigation
- Responsive sidebar
- Optimized typography
- Fast loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the Open BSV License.

## 🆘 Support

- [GitHub Issues](https://github.com/b-open-io/bitcoinschema/issues)
- [Discord Community](https://discord.gg/vqj6wpKeEn)

---

Built with ❤️ by the Bitcoin Schema community
