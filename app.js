if ('serviceWorker' in navigator) {
	console.log(navigator.serviceWorker);
	navigator.serviceWorker.register('/sw.js');
};