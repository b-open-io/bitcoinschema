// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { z } from "zod";
var { docs, meta } = defineDocs({
  dir: "content/docs",
  docs: {
    schema: z.object({
      title: z.string().optional().default("Untitled"),
      description: z.string().optional()
    })
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
