// build.ts
import { build } from "https://deno.land/x/esbuild@v0.17.10/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.js";

await build({
  entryPoints: ["src/index.tsx"], // Entry point for your React app
  bundle: true,
  outfile: "dist/bundle.js", // Output file
  plugins: [denoPlugin()],
  minify: true, // Minify the output for production
  sourcemap: true,
});

console.log("Build complete!");
Deno.exit();