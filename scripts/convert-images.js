import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(res)));
    } else {
      files.push(res);
    }
  }
  return files;
}

async function convert() {
  const files = await walk(ASSETS_DIR);
  const images = files.filter((f) => /\.(jpe?g|png)$/i.test(f));
  console.log(`Found ${images.length} images.`);
  for (const img of images) {
    const out = img.replace(/\.(jpe?g|png)$/i, '.webp');
    try {
      await sharp(img).webp({ quality: 80 }).toFile(out);
      console.log('Converted', path.relative(process.cwd(), img), '->', path.relative(process.cwd(), out));
    } catch (err) {
      console.error('Failed', img, err.message);
    }
  }
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
