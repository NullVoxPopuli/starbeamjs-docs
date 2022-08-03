import { defineConfig } from "vitepress";
import { HEAD } from "./config/head.js";
import { MARKDOWN } from "./config/markdown.js";
import { NAV } from "./config/Nav.js";
import { SIDEBAR } from "./config/Sidebar.js";
import { SITE } from "./config/Site.js";

import path from "node:path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  outDir: path.resolve(dirname, "../../docs"),
  head: HEAD,
  markdown: MARKDOWN,
  themeConfig: {
    nav: NAV,
    sidebar: SIDEBAR,
    ...SITE,
  },
});
