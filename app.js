if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
};

window.addEventListener('beforeinstallprompt', e => {
	let savedEvent = e;

	e.preventDefault();
	hola.style.display = 'block';
	hola.addEventListener('click', e => {
		savedEvent.prompt();

		console.log(savedEvent);
		console.log('------------------------------');
		console.log(savedEvent.userChoice);
		console.log('------------------------------');
		savedEvent.userChoice
		.then(choice => {
			console.log(choice);
		})
		savedEvent = null;
	})

})