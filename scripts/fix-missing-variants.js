
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../public/assets');

const TARGET_FILES = ['feat-chair-new.png'];

async function processImage(filename) {
    const inputPath = path.join(ASSETS_DIR, filename);
    const basename = path.basename(filename, path.extname(filename));

    if (!fs.existsSync(inputPath)) {
        console.error(`File not found: ${inputPath}`);
        return;
    }

    console.log(`Processing: ${filename}`);

    // Generate AVIF
    await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(path.join(ASSETS_DIR, `${basename}.avif`));
    console.log(`Generated: ${basename}.avif`);

    // Generate WebP
    await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(path.join(ASSETS_DIR, `${basename}.webp`));
    console.log(`Generated: ${basename}.webp`);
}

async function main() {
    for (const file of TARGET_FILES) {
        await processImage(file);
    }
}

main().catch(err => console.error(err));
