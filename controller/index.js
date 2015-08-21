var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

	constructor: function () {
	    generators.Base.apply(this, arguments);

	    // This makes `appname` a required argument.
	    this.argument('moduleName', { type: String, required: true });
	    this.argument('controllerName', {type: String, required: true});
	    this.argument('authorName', {type: String, required: false});
	    // And you can then access it later on this way; e.g. CamelCased
	    this.moduleName = _.camelCase(this.moduleName);
	    this.controllerName = _.camelCase(this.controllerName);
	    this.authorName = _.camelCase(this.authorName);
	},

	initializing: function () {

	},

	configuring: function () {

	},
	
	writing: function () {
		var date = new Date();
		var nowDate = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();

		this.fs.copyTpl(
		    this.templatePath(this.sourceRoot() + '/tpl.controller.js'),
		    this.destinationPath('modules/'+this.moduleName+'/controllers/'+ this.controllerName +'.controller.js'),
		    { 
		    	moduleName: this.moduleName,
		    	controllerName: this.controllerName,
		    	authorName: this.authorName,
		    	nowDate: nowDate
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