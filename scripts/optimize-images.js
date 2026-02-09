
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.resolve(__dirname, '../src/assets');
// We will output to the same directory for simplicity in importing, 
// or could use a specific 'optimized' folder. 
// For this plan, let's keep them in place but with new extensions/suffixes.
const OUTPUT_DIR = INPUT_DIR;

const SIZES = {
    sm: 640,
    md: 1024,
    lg: 1920,
    xl: null // Originall size, just compression
};

const FORMATS = ['avif', 'webp'];

async function processImage(filename) {
    if (!filename.match(/\.(jpg|jpeg|png)$/i)) return; // Skip non-images
    if (filename.includes('-sm.') || filename.includes('-md.') || filename.includes('-lg.')) return; // Skip already generated

    console.log(`Processing: ${filename}`);
    const filePath = path.join(INPUT_DIR, filename);
    const fileBuffer = await fs.readFile(filePath);
    const metadata = await sharp(fileBuffer).metadata();
    const name = path.parse(filename).name;

    // 1. Generate Formats & Sizes
    for (const [sizeName, width] of Object.entries(SIZES)) {
        if (width && metadata.width < width) continue; // Skip upscaling

        const resizeOptions = width ? { width } : {};
        const suffix = width ? `-${sizeName}` : '';

        for (const format of FORMATS) {
            const outName = `${name}${suffix}.${format}`;
            const outPath = path.join(OUTPUT_DIR, outName);

            // Check if exists to avoid reprocessing if run multiple times (optional)
            // await fs.access(outPath).catch(async () => { ... })

            let pipeline = sharp(fileBuffer).resize(resizeOptions);

            if (format === 'avif') {
                pipeline = pipeline.avif({ quality: 60, effort: 4 });
            } else if (format === 'webp') {
                pipeline = pipeline.webp({ quality: 75, smartSubsample: true });
            }

            await pipeline.toFile(outPath);
            console.log(`  Generated: ${outName}`);
        }
    }
}

async function main() {
    try {
        const files = await fs.readdir(INPUT_DIR);
        for (const file of files) {
            await processImage(file);
        }
        console.log('Image optimization complete.');
    } catch (error) {
        console.error('Error processing images:', error);
    }
}

main();
