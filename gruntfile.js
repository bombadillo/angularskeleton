/**
* Created with TestAngular.
* User: bombadillo
* Date: 2015-02-17
* Time: 02:57 PM
* To change this template use Tools | Templates.
*/
'use strict';

module.exports = function (grunt) {
    
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: {},
            files: [''],
            folders: ['ToBeCleaned']
        }, 
        jshint: {
            options: {
                // Forces grunt to continue even if jshint fails
                //force: true
                // We can specifiy jshint codes we want to ignore 
                //'-W069': false,
                // We can ignore files by specifying them in an array
                //ignores: [],
                // We can specify a log file to output to
                reporterOutput: 'logs/jshint.txt'
            },
            files: ['app/client/js/*.js']
        },
        uglify: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'app/client/dev/js',
                    src: '**/*.js',
                    dest: 'app/client/deploy/js'
                }]
            },
            options: {
                mangle: true,                
                compress: {
                    // Remove any console.logs
                    drop_console: true
                },
                //beautify: true
            }
        },
        htmlhint: {
            templates: {
                options: {
                    'attr-lower-case': true,
                    'attr-value-not-empty': true,
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'id-class-value': true,
                    'id-class-unique': true,
                    'src-not-empty': true,
                    'img-alt-required': true
                },
                src: ['app/client/dev/js/templates/**/*.html']
            }
        },
        htmlmin: {
            dev: {
                options: {
                    removeEmptyAttributes: true,
                    removeEmptyElements: true,
                    removeRedundantAttributes: true,
                    removeComments: true,
                    removeOptionalTags: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/client/dev/js/templates/',
                    dest: 'app/client/deploy/js/templates',
                    src: ['*.html'],
                    ext: ['.html'],
                    extDot: "last"
                }]
            }
        },
        less: {
            development: {
                options: {
                    cleancss: false,
                    compress: false
                },
                files: [{
                    expand: true,
                    cwd: 'app/client/dev/css',
                    dest: 'app/client/deploy/css',
                    src: 'styles.less',
                    ext: '.css',
                    extDot: 'last'
                }]
            }
        },
        csslint: {
            strict: {
                options: {
                    
                },
                src: ['app/client/deploy/css/styles.css']
            },
            laxed: {
                options: {
                    
                },
                src: ['']
            }            
        },
        cssmin: {
            minify: {
                options: {
                    'report': 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: 'app/client/deploy/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/client/deploy/css/',
                    ext: '.min.css',
                    extDot: 'last'
                }]
            },
            concat: {
                files: {                    
                    'app/client/deploy/css/all.min.css': 'app/client/deploy/css/*.css'
                }
            }
            // Note: use one or the other. Concat gets all files and concatentates them.
            // minify will minify all files into seperate css files
        },
        checkFileSize: {
            options: {
                folderToScan: 'app',
                debug: true
            }
        },
        checkFileSizeMultiTask: {
            options: {
                debug: true
            },
            dev: {
                src: ['app/client/dev', 'grunt2']
            },
            prod: {
                options: {
                    debug: false
                },
                files: [
                    {src: 'app/client/dev'},
                    {src: 'app/client/deploy'}
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadTasks('grunt/tasks');
    
    grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'htmlhint', 'htmlmin', 'less', 'csslint', 'cssmin']);    
};