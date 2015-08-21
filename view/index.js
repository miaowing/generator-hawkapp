var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

	constructor: function () {
	    generators.Base.apply(this, arguments);

	    // This makes `appname` a required argument.
	    this.argument('moduleName', { type: String, required: true });
	    this.argument('viewName', {type: String, required: true});
	    // And you can then access it later on this way; e.g. CamelCased
	    this.moduleName = _.camelCase(this.moduleName);
	    this.viewName = _.camelCase(this.viewName);
	},

	initializing: function () {

	},

	configuring: function () {

	},
	
	writing: function () {
		var date = new Date();
		var nowDate = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();

		this.fs.copyTpl(
		    this.templatePath(this.sourceRoot() + '/tpl.view.html'),
		    this.destinationPath('modules/'+this.moduleName+'/views/'+ this.viewName +'.view.html'),
		    { 
		    }
		);

	},

	conflicts: function () {

	},

	install: function () {

	},

	test: function () {

	}
});