const appName = "faareia";
const cacheVersion = 'v1';
let appShellFiles = [
  '/',
  '/index.html',
  '/app.js',
  '/css.css',
  '/icons/a.jpg',
  '/icons/c.jpg',
  '/icons/d.jpg'
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  console.log(e);
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});