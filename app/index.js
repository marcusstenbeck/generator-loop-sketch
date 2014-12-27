var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);

		this.argument('appname', { type: String, required: true });
	},
	writing: function() {
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath(this.appname + '/app/index.html'),
			{ title: this.appname }
		);

		this.fs.copyTpl(
			this.templatePath('app.js'),
			this.destinationPath(this.appname + '/app/js/app.js'),
			{}
		);
	}
});