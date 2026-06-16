import fs from 'fs';
import https from 'https';
import path from 'path';

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
  // A highly specific, commercial macro photography prompt for perfectly clear, white/translucent Magnesium Chloride flakes
  const prompt = 'commercial_macro_photography_of_pure_white_translucent_magnesium_chloride_flakes_mgcl2_crystals_pile_highly_detailed_crisp_focus_8k';
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=600&nologo=true&seed=90210`;
  
  console.log(`Downloading perfect AI commercial image...`);
  try {
    await download(url, path.join('public', 'p7_mgcl2_perfect.jpg'));
    console.log(`Saved exact image`);
  } catch (e) {
    console.error(`Failed`, e);
  }
}

run();
