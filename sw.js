/* Evyrim service worker: oyunun bütün dosyalarını önbelleğe alır, internetsiz de açılır. */
const CACHE = 'evyrim-e78977664d';
const CORE = [
  "./",
  "./assets/5aUu9_-1phKLFgshYDvh6Vwt5alOqER2i0VBuxOCBA-D7CJMOM7.woff2",
  "./assets/5aUu9_-1phKLFgshYDvh6Vwt5alOqEp2i0VBuxM-DqiCFOjO.woff2",
  "./assets/5aUu9_-1phKLFgshYDvh6Vwt5eFIqER2i0VBuxOCBA-BFZFlHQM.woff2",
  "./assets/5aUu9_-1phKLFgshYDvh6Vwt5eFIqEp2i0VBuxM-wtMREkJN.woff2",
  "./assets/5aUz9_-1phKLFgshYDvh6Vwt7VRtvWdUhm97sg-hZMqAcaJ.woff2",
  "./assets/5aUz9_-1phKLFgshYDvh6Vwt7VptvWdUhm8-CUl-7pZ6.woff2",
  "./assets/Fh4sPjjqNDz1osh_jX9YfjudpDhDHa-IeLT4vlk-Bz4axfir.woff2",
  "./assets/Fh4sPjjqNDz1osh_jX9YfjudpDhNHa-IeLT4-C-WeIWFL.woff2",
  "./assets/O4ZTFGb7hR12BxqH-GImuA8alw-BbeXw2cv.woff2",
  "./assets/O4ZTFGb7hR12BxqH9mImuA8al1md-C4gCCFNM.woff2",
  "./assets/index-9vy8E-p-.js",
  "./assets/index-BpOJjLqg.css",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./manifest.webmanifest"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => { for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k); await self.clients.claim(); })());
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // sayfa: önce ağ (güncellemeler hemen gelsin), ağ yoksa önbellek
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
