import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'p10_psyllium.jpg', prompt: 'commercial_macro_photography_of_pure_creamy_white_psyllium_husk_flakes_isabgol_in_a_rustic_wooden_bowl_8k_highly_detailed_crisp_focus' }
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
    const url = `https://image.pollinations.ai/prompt/${img.prompt}?width=800&height=600&nologo=true&seed=305`;
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
