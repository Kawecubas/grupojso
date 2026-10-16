// Descarga todas las imágenes del CDN de Wix a /public/img y actualiza lib/data.ts
// para que el sitio las sirva desde el propio proyecto.
// Uso: npm run descargar-imagenes
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const archivos = [path.join(raiz, "lib", "data.ts"), path.join(raiz, "app", "layout.tsx")];
const destino = path.join(raiz, "public", "img");
const WIX = "https://static.wixstatic.com/media/";
// Tamaño máximo 2000px (los originales llegan a 4000px y pesan varios MB)
const version = (id) => `${WIX}${id}/v1/fit/w_2000,h_2000,q_85/${id}`;

const dataTs = await readFile(archivos[0], "utf8");
const layout = await readFile(archivos[1], "utf8");

const ids = new Set();
for (const [, id] of dataTs.matchAll(/m\(\s*["']([^"']+)["']\s*\)/g)) ids.add(`bf0d7d_${id}`);
for (const [, id] of dataTs.matchAll(/["']([0-9a-f]{32}~mv2[^"']*\.(?:jpe?g|png))["']/gi)) ids.add(`bf0d7d_${id}`);
for (const [, id] of layout.matchAll(/static\.wixstatic\.com\/media\/([^"'\/]+)/g)) ids.add(id);

await mkdir(destino, { recursive: true });
let ok = 0;
let i = 0;
for (const id of ids) {
  i++;
  const archivo = path.join(destino, id);
  try {
    await access(archivo);
    ok++;
    continue;
  } catch {}
  try {
    let res = await fetch(version(id));
    if (!res.ok) res = await fetch(WIX + id); // si falla la versión reducida, baja el original
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(archivo, Buffer.from(await res.arrayBuffer()));
    ok++;
    console.log(`✓ [${i}/${ids.size}] ${id}`);
  } catch (e) {
    console.warn(`✗ [${i}/${ids.size}] ${id} — ${e.message}`);
  }
}
console.log(`\n${ok}/${ids.size} imágenes en public/img`);

if (ok === ids.size) {
  await writeFile(archivos[0], dataTs.replace(`const WIX = "${WIX}";`, `const WIX = "/img/";`));
  await writeFile(archivos[1], layout.replaceAll(WIX, "/img/"));
  console.log("Listo: lib/data.ts y app/layout.tsx ya usan las imágenes locales.");
} else {
  console.log("Faltan imágenes. Vuelve a ejecutar el comando: solo descargará las que faltan.");
}
