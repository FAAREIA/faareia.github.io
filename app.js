if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
};

alert("ontouchstart" in document.documentElement);
alert("deviceorientation" in document.documentElement);
alert(navigator.MaxTouchPoints);