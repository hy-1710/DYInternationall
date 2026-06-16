import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'p8_bromine.jpg', prompt: 'commercial_photography_of_heavy_dark_red_brown_liquid_bromine_in_a_sealed_glass_reagent_bottle_with_orange_vapors_laboratory_8k_highly_detailed' }
];

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  for (const img of images) {
    const url = `https://image.pollinations.ai/prompt/${img.prompt}?width=800&height=600&nologo=true&seed=150`;
    console.log(`Downloading ${img.name}...`);
    try {
      await download(url, path.join('public', img.name));
      console.log(`Saved ${img.name}`);
    } catch (e) {
      console.error(`Failed ${img.name}`, e);
    }
  }
}

run();
