
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const SRC_DIR = path.resolve(__dirname, '../src');

// Extensions to treat as "source" images
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.svg', '.gif'];

function getAllFiles(dir, extList) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath, extList));
        } else {
            if (extList.some(ext => file.toLowerCase().endsWith(ext))) {
                results.push(filePath);
            }
        }
    });
    return results;
}

function searchInFile(filePath, searchString) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.includes(searchString);
}

function main() {
    console.log('Scanning for unused images...');

    // 1. Get all source images
    const allImages = getAllFiles(ASSETS_DIR, EXTENSIONS);
    const sourceImages = allImages.filter(f => !f.includes('.avif') && !f.includes('.webp'));

    // 2. Get all code files
    const codeFiles = getAllFiles(SRC_DIR, ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json']);

    const unused = [];

    sourceImages.forEach(img => {
        const filename = path.basename(img);
        let isUsed = false;

        // Optimized match: 
        // We look for the filename. 
        // NOTE: This might be triggered by the file existing in the assets folder if we scan assets folder? 
        // No, codeFiles is filtered to src/ but we should exclude assets dir from code scan if possible, 
        // or just ignore self-matches.

        for (const codeFile of codeFiles) {
            // detailed check: Don't check the image file itself (obviously)
            if (codeFile === img) continue;

            if (searchInFile(codeFile, filename)) {
                isUsed = true;
                break;
            }
        }

        if (!isUsed) {
            unused.push(img);
        }
    });

    console.log('\n--- Unused Images Detected ---');
    unused.forEach(u => console.log(path.basename(u)));
    console.log(`\nTotal Unused: ${unused.length}`);
}

main();
