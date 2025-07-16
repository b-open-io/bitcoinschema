import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export const docs = defineDocs({
  dir: 'content/docs',
});