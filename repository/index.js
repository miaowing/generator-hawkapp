var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

	constructor: function () {
	    generators.Base.apply(this, arguments);

	    // This makes `appname` a required argument.
	    this.argument('moduleName', { type: String, required: true });
	    this.argument('repositoryName', {type: String, required: true});
	    this.argument('authorName', {type: String, required: false});
	    // And you can then access it later on this way; e.g. CamelCased
	    this.moduleName = _.camelCase(this.moduleName);
	    this.repositoryName = _.camelCase(this.repositoryName);
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
		    this.templatePath(this.sourceRoot() + '/tpl.repository.js'),
		    this.destinationPath('modules/'+this.moduleName+'/repositorys/'+ this.repositoryName +'.repository.js'),
		    { 
		    	moduleName: this.moduleName,
		    	repositoryName: this.repositoryName,
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