import type MarkdownIt from "markdown-it";
import { deeplyParseHeader } from "./parse-header.js";
import { slugify } from "./slugify";

export const headingPlugin = (
  md: MarkdownIt,
  include = ["h1", "h2", "h3", "h4", "h5", "h6"]
) => {
  md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
    const token = tokens[i];
    if (include.includes(token.tag)) {
      const title = tokens[i + 1].content;
      const idAttr = token.attrs!.find(([name]) => name === "id");
      const slug = idAttr && idAttr[1];
      const data = (md as any).__data;
      const headers = data.headers || (data.headers = []);
      headers.push({
        level: parseInt(token.tag.slice(1), 10),
        title: deeplyParseHeader(title),
        slug: slug || slugify(title),
      });
    }
    return self.renderToken(tokens, i, options);
  };
};
