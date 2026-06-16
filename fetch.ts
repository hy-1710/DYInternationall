import https from 'https';

const checkUrl = (url: string) => new Promise(resolve => {
  https.get(url, (res) => {
    resolve({url, status: res.statusCode});
  }).on('error', () => resolve({url, status: 'error'}));
});

async function run() {
  const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/5/5b/Diammonium_phosphate.png',
    'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sodium_hydroxide.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e9/Magnesium_chloride.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/07/Drum_%28container%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/07/Khyma_and_Basmati_rice.jpg'
  ];
  for(let u of urls) {
    const r = await checkUrl(u);
    console.log(r);
  }
}
run();
