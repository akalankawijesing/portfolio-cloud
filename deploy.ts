// deploy.ts
import { $ } from "https://deno.land/x/dax/mod.ts";

const owner = "akalankawijesing";
const repo = "portfolio-cloud";
const branch = "main";
const distFolder = "dist";  // The folder where Vite outputs the build

// Ensure Git is available
await $`git --version`;

// Delete any previous deployment files
await $`rm -rf .deploy`;
await $`mkdir .deploy`;
await $`cp -r ${distFolder}/* .deploy/`;

// Initialize the gh-pages branch if it doesn't exist
await $`git checkout --orphan ${branch}`;

// Copy the built files to the current directory (root of the gh-pages branch)
await $`cp -r .deploy/* ./`;

// Add all files, commit, and force push to gh-pages branch
await $`git add -A`;
await $`git commit -m "Deploy Vite app to GitHub Pages"`;

await $`git push -u origin ${branch} --force`;

// Clean up and return to the previous branch
await $`git checkout -`;
await $`rm -rf .deploy`;

console.log("Deployment complete.");
