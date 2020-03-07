if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js');

const isPwa = matchMedia('(display-mode: fullscreen)').matches;
const pwaInstallMsgShown = localStorage.getItem('pwa-install-msg');

if (!isPwa && !pwaInstallMsgShown) {
	const isFirefox = CSS.supports('-moz-appearance: none');
	const isIos = (navigator.platform.includes('iP')) ? 'iOS' : false;
	const mobileScreen = window.matchMedia('(max-width: 69em)').matches;

	if (isIos || isFirefox && mobileScreen) {
		const lang = header.querySelector('li.is-active').getAttribute('hreflang');

		const alt = (lang === 'en') ? 'Install our App' : 'Instale nuestra App';
		const browser = (isIos) ? 'safari' : 'firefox';
		const text = (lang === 'en') ? 'To install our App, click on the icon:' : 'Para instalar nuestra App, haga click en el ícono:';

		const div = `<div>${text} <img alt="${imgAlt}" src="/themes/custom/faareia/img/app-install-${browser}.svg" /></div>`;

		//XXXXXXXXXXXXXXXXX.insertAdjacentHTML('beforeend', div);
		alert(div);

		localStorage.setItem('pwa-install-msg', 'true');
	}
}