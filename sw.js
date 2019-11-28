// Functions
const cacheCleaning = () => {
	return caches.keys()
		.then(keyList => {
			const cachesDelete = keyList.map(key => (key !== cacheId) caches.delete(key));
			console.log(cachesDelete);
			return Promise.all(cachesDelete);
		})
		.catch(error => console.log(error));
}

const cacheLookup = e => {
	return caches.match(e.request)
		.then(response => {
			return response || fetch(e.request)
				.catch(error => {
					if (e.request.mode === 'navigate') return caches.match('/offline.html');
					console.log(error);
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