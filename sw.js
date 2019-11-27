// Functions
const cacheCleaning = () => {
	return caches.keys()
		.then(keyList => {
			return Promise.all(keyList.map(key => {
				if (cacheId.indexOf(key) === -1) return caches.delete(key);
			}));
		})
		.catch(error => console.log(error));
}

const cacheLookup = e => {
	return caches.match(e.request)
		.then(response => {
			return response || fetch(e.request)
				.catch(error => {
					return caches.match('/offline.html');
				});
		})
		.catch(error => console.log(error));
}

const cacheOpenAdd = (id, files) => {
	return caches.open(id)
		.then(cache => cache.addAll(files))
		.catch(error => console.log(error));
}



// Variables
const appName = "faareia";
const cacheVersion = 'v0.6';
const cacheFiles = [
	'/app.js?v=1.1',
	'/css.css?v.1.1',
	'/manifest.webmanifest?v1.1',
	'/offline.html',
	'/a.jpg',
	'/c.jpg',
	'/d.jpg'
];
const cacheId = `${appName} - ${cacheVersion}`;



// Events
self.addEventListener('install', e => e.waitUntil(cacheOpenAdd(cacheId, cacheFiles)));
self.addEventListener('activate', e => e.waitUntil(cacheCleaning()));
self.addEventListener('fetch', e => e.respondWith(cacheLookup(e)));