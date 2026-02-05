import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";



// @ts-ignore - estree-walker types issue
import { walk } from "estree-walker";
import { parse } from "@babel/parser";
import MagicString from "magic-string";
import { extname, relative } from "node:path";

const VALID_EXTENSIONS = new Set([".jsx", ".tsx"]);

/**
 * Vite plugin that adds data-smiley-code-id and data-smiley-code-name attributes
 * to JSX elements for visual editing support.
 */
function smileyCodeTagger() {
  return {
    name: "vite-plugin-smiley-code-tagger",
    apply: "serve",
    enforce: "pre",

    async transform(code, id) {
      try {
        if (
          !VALID_EXTENSIONS.has(extname(id)) ||
          id.includes("node_modules")
        )
          return null;

        const ast = parse(code, {
          sourceType: "module",
          plugins: [
    "jsx", "typescript",
    smileyCodeTagger(),
  ],
        });

        const ms = new MagicString(code);
        const fileRelative = relative(process.cwd(), id);

        walk(ast, {
          enter(node) {
            try {
              if (node.type !== "JSXOpeningElement") return;
              if (node.name?.type !== "JSXIdentifier") return;
              const tagName = node.name.name;
              if (!tagName) return;

              const alreadyTagged = node.attributes?.some(
                (attr) =>
                  attr.type === "JSXAttribute" &&
                  attr.name?.name === "data-smiley-code-id",
              );
              if (alreadyTagged) return;

              const loc = node.loc?.start;
              if (!loc) return;
              const smileyId = `${fileRelative}:${loc.line}:${loc.column}`;

              if (node.name.end != null) {
                ms.appendLeft(
                  node.name.end,
                  ` data-smiley-code-id="${smileyId}" data-smiley-code-name="${tagName}"`,
                );
              }
            } catch (error) {
              console.warn(`[smiley-code-tagger] Warning: Failed to process JSX node in ${id}:`, error);
            }
          },
        });

        if (ms.toString() === code) return null;

        return {
          code: ms.toString(),
          map: ms.generateMap({ hires: true }),
        };
      } catch (error) {
        console.warn(`[smiley-code-tagger] Warning: Failed to transform ${id}:`, error);
        return null;
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
