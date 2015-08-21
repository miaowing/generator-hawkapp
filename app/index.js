var generators = require('yeoman-generator');
var projectName = '';
module.exports = generators.Base.extend({
	
	initializing: function () {

	},
	//User Interface
	prompting: function () {
	    var done = this.async();
	    this.prompt({
	      type    : 'input',
	      name    : 'name',
	      message : 'Your project name',
	      default : this.appname // Default to current folder name
	    }, function (answers) {
	      projectName = answers.name;
	      done();
	    }.bind(this));
  	},

	configuring: function () {

	},
	
	writing: function () {
		this.fs.copyTpl(
		    this.templatePath(this.sourceRoot()),
		    this.destinationPath('modules'),
		    { title: 'Templating with Yeoman' }
    	);
	},

	conflicts: function () {

	},

	install: function () {

	},

	test: function () {
		// console.log(this.sourceRoot());
		console.log(projectName);
	}
});