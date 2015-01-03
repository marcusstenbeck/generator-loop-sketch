var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
	constructor: function() {
		generators.NamedBase.apply(this, arguments);
	},
	writing: function() {
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath(this.name + '/app/index.html'),
			{ title: this.name }
		);

		this.fs.copyTpl(
			this.templatePath('app.js'),
			this.destinationPath(this.name + '/app/js/app.js'),
			{}
		);
	}
});