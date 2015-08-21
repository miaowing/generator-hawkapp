var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

	constructor: function () {
	    generators.Base.apply(this, arguments);

	    // This makes `appname` a required argument.
	    this.argument('moduleName', { type: String, required: true });
	    this.argument('serviceName', {type: String, required: true});
	    this.argument('authorName', {type: String, required: false});
	    // And you can then access it later on this way; e.g. CamelCased
	    this.moduleName = _.camelCase(this.moduleName);
	    this.serviceName = _.camelCase(this.serviceName);
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
		    this.templatePath(this.sourceRoot() + '/tpl.service.js'),
		    this.destinationPath('modules/'+this.moduleName+'/services/'+ this.serviceName +'.service.js'),
		    { 
		    	moduleName: this.moduleName,
		    	authorName: this.authorName,
		    	serviceName: this.serviceName,
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