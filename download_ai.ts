import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'p1_urea.jpg', prompt: 'commercial_macro_photography_of_perfect_spherical_white_urea_fertilizer_pellets_in_a_burlap_sack_natural_lighting_8k_highly_detailed' },
  { name: 'p2_solvents.jpg', prompt: 'commercial_photography_of_clean_blue_industrial_chemical_storage_drums_in_a_row_warehouse_lighting_8k_highly_detailed' },
  { name: 'p3_dap.jpg', prompt: 'commercial_macro_photography_of_dark_brown_granular_diammonium_phosphate_fertilizer_8k_highly_detailed_sharp_focus' },
  { name: 'p6_caustic.jpg', prompt: 'commercial_macro_photography_of_pure_white_caustic_soda_flakes_crystals_in_laboratory_glass_bowl_8k_highly_detailed' },
  { name: 'p7_magnesium.jpg', prompt: 'commercial_macro_photography_of_translucent_magnesium_chloride_flakes_crystal_ice_melt_8k_highly_detailed' },
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
