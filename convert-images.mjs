import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const IMAGES_DIR = './src/images';
const OUTPUT_DIR = './src/images';

async function convertImages() {
  try {
    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to convert...`);

    for (const file of imageFiles) {
      const inputPath = join(IMAGES_DIR, file);
      const outputName = basename(file, extname(file)) + '.webp';
      const outputPath = join(OUTPUT_DIR, outputName);

      console.log(`Converting: ${file} → ${outputName}`);

      await sharp(inputPath)
        .webp({ 
          quality: 80,
          effort: 6 
        })
        .toFile(outputPath);

      // Get file sizes for comparison
      const originalStats = await sharp(inputPath).metadata();
      const newStats = await sharp(outputPath).metadata();
      
      console.log(`  ✓ Done! Quality: 80%`);
    }

    console.log('\n✅ All images converted successfully!');
    console.log('📝 Remember to update your Astro components to use .webp extensions');

  } catch (error) {
    console.error('Error converting images:', error);
    process.exit(1);
  }
}

convertImages();
