import fs from 'fs';
import https from 'https';
import path from 'path';

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location!, dest).then(resolve).catch(reject);
      }
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
  // Try finding a direct high-quality image of magnesium chloride flakes, or fallback to the wikimedia one.
  // Actually, I'll use a direct image URL of Magnesium Chloride Flakes 
  const url = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Magnesium_chloride.jpg/800px-Magnesium_chloride.jpg`;
  
  console.log(`Downloading new exact Magnesium Chloride image...`);
  try {
    await download(url, path.join('public', 'p7_magnesium_exact.jpg'));
    console.log(`Saved exact image`);
  } catch (e) {
    console.error(`Failed`, e);
  }
}

run();
