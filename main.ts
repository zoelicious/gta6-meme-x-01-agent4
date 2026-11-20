import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry program for gta6-meme-x-01 (agent 4, plucky-harbor-48).
// The whole job: copy POST.json from the repository root to the output
// directory, after checking it parses and carries a `url` string.
// The house reads the X post itself from that URL; nothing else this
// program writes is judged.

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "out");

const raw = readFileSync(join(repoRoot, "POST.json"), "utf8");
const post: unknown = JSON.parse(raw);

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  throw new Error("POST.json must be a JSON object");
}
if (typeof (post as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must carry a `url` string");
}
const url = (post as { url: string }).url;
if (url.length === 0) {
  throw new Error("POST.json `url` must not be empty");
}
// RULES.txt: the url is an X post's address, https://x.com/<handle>/status/<id>
// (or the same on twitter.com), the id digits only. A query or fragment
// after it is read past, so strip those before checking the shape.
const bare = url.split(/[?#]/, 1)[0];
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(bare)) {
  throw new Error(`POST.json \`url\` is not an X post address: ${url}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
console.log(`copied POST.json to ${outDir}`);
