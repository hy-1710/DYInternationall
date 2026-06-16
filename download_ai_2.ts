import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'p4_basmati.jpg', prompt: 'commercial_food_photography_of_premium_extra_long_grain_raw_basmati_rice_in_a_wooden_bowl_8k_highly_detailed' },
  { name: 'p5_wheat.jpg', prompt: 'commercial_food_photography_of_raw_golden_wheat_berries_grains_in_burlap_sack_8k_highly_detailed' },
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
    const url = `https://image.pollinations.ai/prompt/${img.prompt}?width=800&height=600&nologo=true&seed=888`;
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
