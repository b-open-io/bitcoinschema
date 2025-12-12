// @ts-nocheck
import * as __fd_glob_8 from "../content/docs/schemas/tokens.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/schemas/social-actions.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/schemas/messaging.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/schemas/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/schemas/generic.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/schemas/content.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/schemas/advanced.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/getting-started.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"getting-started.mdx": __fd_glob_0, "index.mdx": __fd_glob_1, "schemas/advanced.mdx": __fd_glob_2, "schemas/content.mdx": __fd_glob_3, "schemas/generic.mdx": __fd_glob_4, "schemas/index.mdx": __fd_glob_5, "schemas/messaging.mdx": __fd_glob_6, "schemas/social-actions.mdx": __fd_glob_7, "schemas/tokens.mdx": __fd_glob_8, });