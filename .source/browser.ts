// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "schemas/advanced.mdx": () => import("../content/docs/schemas/advanced.mdx?collection=docs"), "schemas/content.mdx": () => import("../content/docs/schemas/content.mdx?collection=docs"), "schemas/generic.mdx": () => import("../content/docs/schemas/generic.mdx?collection=docs"), "schemas/index.mdx": () => import("../content/docs/schemas/index.mdx?collection=docs"), "schemas/messaging.mdx": () => import("../content/docs/schemas/messaging.mdx?collection=docs"), "schemas/social-actions.mdx": () => import("../content/docs/schemas/social-actions.mdx?collection=docs"), "schemas/tokens.mdx": () => import("../content/docs/schemas/tokens.mdx?collection=docs"), }),
};
export default browserCollections;