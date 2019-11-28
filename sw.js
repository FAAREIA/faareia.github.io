// Functions
const cacheCleaning = () => {
	return caches.keys()
		.then(keyList => {
			return Promise.all(keyList.map(key => {
				if (key !== cacheId) return caches.delete(key);
			}));
		})
		.catch(error => console.log(error));
}

const cacheFileLookup = e => {
	return caches.match(e.request)
		.then(response => response || fetch(e.request)
			.catch(error => {
				console.log(e.request);
				console.log('111111111111111111111111111111111');
				console.log(error);
				if (e.request.mode === 'navigate') return caches.match('/offline.html');
			})
		)
		.catch(error => console.log(error));
}

const cacheOpenAdd = (id, files) => {
	return caches.open(id)
		.then(cache => cache.addAll(files))
		.catch(error => console.log(error));
}



// Variables
const appName = "faareia";
const cacheVersion = 'v0.7';
const cacheFiles = [
	'/offline.html',
	'/app.js?v=1.1',
	'/css.css?v.1.1',
	'/manifest.webmanifest?v1.1',
	'/a.jpg',
	'/c.jpg',
	'/d.jpg'
];
const cacheId = `${appName} - ${cacheVersion}`;



// Events
self.addEventListener('install', e => e.waitUntil(cacheOpenAdd(cacheId, cacheFiles)));
self.addEventListener('activate', e => e.waitUntil(cacheCleaning()));
self.addEventListener('fetch', e => e.respondWith(cacheFileLookup(e)));
if (navigator.onLine === true) {
} else {

}