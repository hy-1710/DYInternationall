import https from 'https';

async function searchUnsplash(query: string) {
  return new Promise<any[]>((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results.map((r: any) => ({ desc: r.alt_description, url: r.urls.regular })));
        } catch { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const queries = ['white tapioca pearls', 'chemical drums', 'brown coffee grains', 'white crystal flakes macro', 'coarse sea salt', 'basmati rice macro', 'wheat berries macro'];
  for (const q of queries) {
    const res = await searchUnsplash(q);
    console.log(`\n--- ${q} ---`);
    res.forEach(r => console.log(r.desc?.substring(0, 50), ':', r.url?.substring(0, 80)));
  }
}
run();
