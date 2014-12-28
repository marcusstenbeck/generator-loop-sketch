// Create app namespace
var app = app || {};
window.app = app;


/* Perform drawing operations */
function draw(time) {
	app.ctx.fillStyle = app.CLEAR_COLOR_FILL;
	app.ctx.fillRect(0, 0, app.canv.width, app.canv.height);
}


/* Update app state */
function update(time) {
}


/* Run this code when window is resized */
function resize() {
	app.canv.setAttribute('width', window.innerWidth);
	app.canv.setAttribute('height', window.innerHeight);
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

	// Hook up resize function to window resize event
	window.addEventListener('resize', resize);

	/**
	 *  This is a good place to set app constants
	 */
	app.CLEAR_COLOR_FILL = '#1F0310';


	/**
	 *  Further initialization ... do your worst
	 */
}


init();
(function loop(time) {
	update(time);
	draw(time);
	window.requestAnimationFrame(loop);
})();