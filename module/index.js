var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

	initializing: function () {

	},
	//User Interface
	promptingModuleName: function () {
	    var done = this.async();
	    this.prompt({
	      type    : 'input',
	      name    : 'name',
	      message : 'Your module name',
	      default : 'myModule' // Default to current folder name
	    }, function (answers) {
	      this.moduleName = answers.name;
	      done();
	    }.bind(this));
  	},

  	promptingAuthorName: function () {
  		var done = this.async();
	    this.prompt({
	      type    : 'input',
	      name    : 'author',
	      message : 'Your name',
	      default : 'yeoman' // Default to current folder name
	    }, function (answers) {
	      this.authorName = answers.author;
	      done();
	    }.bind(this));
  	},

	configuring: function () {

	},
	
	writing: function () {
		var date = new Date();
		var nowDate = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
		var folders = ['controller', 'les', 'service', 'repository', 'view'],
			extendName = ['.js', '.less', '.html'],
			i = 0;

		this.fs.copyTpl(
		    this.templatePath(this.sourceRoot() + '/app.js'),
		    this.destinationPath('modules/'+this.moduleName+'/app.js'),
		    { 
		    	moduleName: this.moduleName
		    }
		);

		for(i;i<folders.length;i++) {
			var extend = extendName[0];
			var outputPath = 'modules/'+this.moduleName + '/' + folders[i] + 's/' + this.moduleName + '.' + folders[i] + extend;

			if(folders[i] === 'les') {
				extend = extendName[1];
				outputPath = 'modules/'+this.moduleName + '/' + folders[i] + 's/' + this.moduleName + extend;
			}else if(folders[i] === 'view') {
				extend = extendName[2];
				outputPath = 'modules/'+this.moduleName + '/' + folders[i] + 's/' + this.moduleName + '.' + folders[i] + extend;
			}

			this.fs.copyTpl(
		    this.templatePath(this.sourceRoot() + '/' +folders[i]+ 's' + '/tpl.' + folders[i] + extend),
		    this.destinationPath(outputPath),
		    { 
		    	moduleName: this.moduleName,
		    	authorName: this.authorName,
		    	nowDate: nowDate 
		    }
    	);
		}
		
	},

	conflicts: function () {

	},

	install: function () {

	},

	test: function () {
		// console.log(this.sourceRoot());
		// console.log(projectName);
	}
});