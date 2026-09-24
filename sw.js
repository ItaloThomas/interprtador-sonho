/* Carteira Sonho: guarda todos os arquivos do app no aparelho.
   Ao publicar uma versão nova, aumente o número em VERSAO. */
const VERSAO = 'v1';
const CACHE = 'carteira-sonho-' + VERSAO;
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/chart.umd.min.js',
  './vendor/xlsx.full.min.js',
  './fonts/Carlito-Regular.woff2',
  './fonts/Carlito-Bold.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n.startsWith('carteira-sonho-') && n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Responde com a cópia guardada (funciona offline) e, se houver internet,
// atualiza a cópia em segundo plano para a próxima abertura.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const chave = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const guardado = await cache.match(chave, { ignoreSearch: true });
      const daRede = fetch(req).then(resp => {
        if (resp && resp.ok) cache.put(chave, resp.clone());
        return resp;
      }).catch(() => null);
      if (guardado) { e.waitUntil(daRede); return guardado; }
      const resp = await daRede;
      return resp || new Response('Sem conexão e sem cópia guardada deste arquivo.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    })
  );
});
