// Descarga todas las imágenes del CDN de Wix a /public/img y actualiza lib/data.ts
// para que el sitio las sirva localmente. Uso: npm run descargar-imagenes
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";

const raiz = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dataPath = path.join(raiz, "lib", "data.ts");
const destino = path.join(raiz, "public", "img");
const WIX = "https://static.wixstatic.com/media/";

const fuente = await readFile(dataPath, "utf8");
const ids = new Set();
for (const [, id] of fuente.matchAll(/["'`]([0-9a-f]{32}~mv2[^"'`]*\.(?:jpe?g|png))["'`]/gi)) ids.add(`bf0d7d_${id}`);
for (const [, id] of fuente.matchAll(/m\(["']([^"']+)["']\)/g)) ids.add(`bf0d7d_${id}`);

await mkdir(destino, { recursive: true });
let ok = 0;
for (const id of ids) {
  const archivo = path.join(destino, id);
  try { await access(archivo); ok++; continue; } catch {}
  const res = await fetch(WIX + id);
  if (!res.ok) { console.warn("✗", id, res.status); continue; }
  await writeFile(archivo, Buffer.from(await res.arrayBuffer()));
  ok++;
  console.log("✓", id);
}
console.log(`\n${ok}/${ids.size} imágenes en public/img`);

if (ok === ids.size) {
  await writeFile(dataPath, fuente.replace(`const WIX = "${WIX}";`, `const WIX = "/img/";`));
  console.log("lib/data.ts actualizado: el sitio ya usa las imágenes locales.");
}
