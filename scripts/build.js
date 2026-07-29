import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'src']) {
  const source = path.join(root, entry);
  const dest = path.join(out, entry);
  fs.cpSync(source, dest, { recursive: true });
}
console.log('Built static site to dist/');
