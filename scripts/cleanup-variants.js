
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const TRASH_DIR = path.resolve(__dirname, '../src/assets/_trash');

// Base names of unused files (without extension)
const UNUSED_BASENAMES = ['feat-chair', 'life-2', 'react'];

function main() {
    console.log('Moving generated variants to trash...');

    if (!fs.existsSync(TRASH_DIR)) {
        fs.mkdirSync(TRASH_DIR);
    }

    const files = fs.readdirSync(ASSETS_DIR);

    files.forEach(file => {
        // Check if file starts with one of the unused basenames
        // AND is a generated format (avif, webp) or resized version (-sm, -md, -lg)
        const isVariant = UNUSED_BASENAMES.some(base => {
            return file.startsWith(base) && (
                file.endsWith('.avif') ||
                file.endsWith('.webp') ||
                file.includes('-sm.') ||
                file.includes('-md.') ||
                file.includes('-lg.')
            );
        });

        if (isVariant) {
            const oldPath = path.join(ASSETS_DIR, file);
            const newPath = path.join(TRASH_DIR, file);
            console.log(`Moving: ${file}`);
            fs.renameSync(oldPath, newPath);
        }
    });

    console.log('Done.');
}

main();
