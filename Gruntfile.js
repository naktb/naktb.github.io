module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlbuild: {
            dist: {
                src: 'pages/**/*.html',
                dest: '_site/',
                options: {
                    beautify: true,
//                    prefix: '//some-cdn',
                    relative: true,
//                scripts: {
//                    bundle: [
//                        '<%= fixturesPath %>/scripts/*.js',
//                        '!**/main.js',
//                    ],
//                    main: '<%= fixturesPath %>/scripts/main.js'
//                },
                    styles: {
                        app: [
                            '<%= compiledSite %>/css/print.css',
                            '<%= compiledSite %>/css/screen.css'
                        ]
                    },
                    sections: {
                        views: '<%= fixturesPath %>/views/**/*.html',
                        templates: '<%= fixturesPath %>/templates/**/*.html',
                        layout: {
                            head: '<%= fixturesPath %>/layout/head.html',
                            header: '<%= fixturesPath %>/layout/header.html',
                            match_centr_top: '<%= fixturesPath %>/layout/match_centr_top.html',
                            top_menu: '<%= fixturesPath %>/layout/top_menu.html',
                            logo_section: '<%= fixturesPath %>/layout/logo_section.html',
                            logo_section_02: '<%= fixturesPath %>/layout/logo_section_02.html',
                            second_menu: '<%= fixturesPath %>/layout/second_menu.html',
                            second_menu_02: '<%= fixturesPath %>/layout/second_menu_02.html',
                            footer: '<%= fixturesPath %>/layout/footer.html',
                            sidebar: '<%= fixturesPath %>/layout/sidebar.html',
                            sidebar_02: '<%= fixturesPath %>/layout/sidebar_02.html'
                        }
                    },
                    data: {
                        // Data to pass to templates
                        version: "0.1.0",
                        title: "test"
                    }
                }
            }
        },
        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);
}
