// Create app namespace
var app = app || {};
window.app = app;


function draw() {

}


function update() {

}


function init() {
	/**
	 *  Init canvas and add to app
	 */
	app.canv = document.body.appendChild(document.createElement('canvas'));
	app.canv.setAttribute('id', 'app-canvas');
	app.canv.setAttribute('width', window.innerWidth);
	app.canv.setAttribute('height', window.innerHeight);
	app.canv.style.setProperty('position', 'absolute');
	app.canv.style.setProperty('top', '0');
	app.canv.style.setProperty('left', '0');
	app.canv.style.setProperty('right', '0');
	app.canv.style.setProperty('bottom', '0');
	app.canv.style.setProperty('width', '100%');
	app.canv.style.setProperty('height', '100%');
	app.ctx = app.canv.getContext('2d');

	app.CLEAR_COLOR_FILL = '#1F0310';

	/**
	 *  Do your worst
	 */
}


init();
(function loop(time) {
	update(time);
	draw(time);
	window.requestAnimationFrame(loop);
})();