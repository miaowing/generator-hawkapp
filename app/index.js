var generators = require('yeoman-generator');
var process= require('process');
var _ = require('lodash');

module.exports = generators.Base.extend({

    initializing: function () {

    },
    //User Interface
    promptingModuleName: function () {
        var tempArr = process.cwd().split('/'),
            tempProjectName = tempArr[tempArr.length - 1];

        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: tempProjectName // Default to current folder name
        }, function (answers) {
            this.projectName = answers.name;
            done();
        }.bind(this));
    },

    promptingAuthorName: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'author',
            message: 'Your name',
            default: 'yeoman' // Default to current folder name
        }, function (answers) {
            this.authorName = answers.author;
            done();
        }.bind(this));
    },

    configuring: function () {

    },

    writing: function () {
        var date = new Date(),
            nowDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();

        var files = [
                'modules/core/app.js',
                'modules/core/main.js',
                'modules/config.js',
                'modules/lib.js',
                '.gitignore',
                'bower.json',
                'GruntFile.js',
                'modules/index.html',
                'package.json',
                'modules/static/less/tpl.less',
                'modules/core/controllers/core.controller.js'
            ],
            outPaths = [
                'modules/core/app.js',
                'modules/core/main.js',
                'modules/config.js',
                'modules/lib.js',
                '.gitignore',
                'bower.json',
                'GruntFile.js',
                'modules/index.html',
                'package.json',
                'modules/static/less/' + this.projectName + '.less',
                'modules/core/controllers/core.controller.js'
            ];

        for (var i = 0; i < files.length; i++) {
            this.fs.copyTpl(
                this.templatePath(this.sourceRoot() + '/' + files[i]),
                this.destinationPath(outPaths[i]),
                {
                    projectName: this.projectName,
                    authorName: this.authorName,
                    nowDate: nowDate
                }
            );
        }

    },

    conflicts: function () {

    },

    install: function () {
        var howToInstall =
            '\nAfter running npm install & bower install.\n' +
            'choose grunt serve to run debug environment.\n' +
            'choose grunt build to build project.';

        this.log(howToInstall);
        this.installDependencies();
    },

    test: function () {
        // console.log(this.sourceRoot());
        // console.log(projectName);
    }
});