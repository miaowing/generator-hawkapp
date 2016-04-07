/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: './',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json']
//        tasks: ['wiredep']
            },
            js: {
                files: [config.app + '/modules/scripts/{,*/}*.js'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: [
                    config.app + '/**/*.less'
                ],
                tasks: ['less:dev'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    config.app + '/**/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    config.app + '/**/images/{,*/}*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                protocol: 'http',

                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:9000/index.html',
                        appName: 'chrome'
                    },
                    middleware: function (connect) {
                        return [
                            connect.static(config.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    open: false,
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: {
                        target: 'http://localhost:9000/dist/index.html',
                        appName: 'chrome'
                    },
                    middleware: function (connect) {
                        return [
                            connect.static(config.app)
                        ];
                    },
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            config.dist + '/*',
                            '!' + config.dist + '/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },


        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:9000/index.html']
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }
                ]
            }
        },

        // Automatically inject Bower components into the HTML file
        wiredep: {
            app: {
                ignorePath: /^\/|\.\.\//,
                src: [config.app + '/index.html'],
                exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                options: {
                    algorithm: 'md5',
                    length: 8
                },
                files: {
                    src: [
                        config.dist + '/static/css/<%= projectName %>.css',
                        config.dist + '/config.js'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: config.dist
            },
            html: config.app + '/modules/*.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                dirs: [
                    config.dist + '/static/css/*',
                    config.dist + '/core/*'
                ]
            },
            html: config.dist + '/*.html'
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [
                    {
                        expand: true,
                        cwd: config.dist,
                        src: '{,*/}*.html',
                        dest: config.dist
                    }
                ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: config.app + '/modules',
                        dest: config.dist,
                        src: [
                            '**/img/**',
                            '!**/img/sprite/**',
                            'static/fonts/*',
                            'index.html'
                        ]
                    }
                ]
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles'
            ]
        },

        // compile less files
        less: {
            dev: {
                options: {
                    compress: false
                },
                files: {
                    'modules/static/css/<%= projectName %>.css': 'modules/static/less/<%= projectName %>.less'
                }
            },
            dist: {
                options: {
                    compress: true,
                    optimization: 2
                },
                files: {
                    'dist/static/css/<%= projectName %>.css': 'modules/static/less/<%= projectName %>.less'
                }
            }
        },

        requirejs: {
            dist: {
                options: {
                    appDir: './modules',
                    // 基准路径
                    baseUrl: './',
                    // 输出路径
                    dir: './dist',
                    // 配置文件
                    mainConfigFile: './modules/config.js',

                    // 压缩器
                    optimize: 'uglify2',
                    uglify2: {
                        output: {
                            beautify: false
                        },
                        compress: {
                            sequences: false,
                            global_defs: {
                                DEBUG: false
                            }
                        },
                        //是否混淆
                        mangle: true
                    },
                    modules: [
                        {
                            name: 'lib'
                        },
                        {
                            name: 'config',
                            exclude: ['lib']
                        }
                    ]
                }
            }
        }

    });


    grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
        if (grunt.option('allow-remote')) {
            grunt.config.set('connect.options.hostname', '0.0.0.0');
        }
        if (target === 'dist') {
            return grunt.task.run(['connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'less:dev',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test'
//        'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'requirejs:dist',
        'useminPrepare',
        'less:dist',
        'rev:dist',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};
