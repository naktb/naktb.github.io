module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          'css/app.css',
          '*.html',
          'js/*.js'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./_site"
        }
      }
    },

    fixturesPath: "_site",

    htmlbuild: {
      dist: {
        src: 'index.html',
        dest: '/',
        options: {
          beautify: true,
          prefix: '//some-cdn',
          relative: true,
          scripts: {
            bundle: [
              '<%= fixturesPath %>/scripts/*.js',
              '!**/main.js',
            ],
            main: '<%= fixturesPath %>/scripts/main.js'
          },
          styles: {
            bundle: [
              '<%= fixturesPath %>/css/libs.css',
              '<%= fixturesPath %>/css/dev.css'
            ],
            test: '<%= fixturesPath %>/css/inline.css'
          },
          sections: {
            views: '<%= fixturesPath %>/views/**/*.html',
            templates: '<%= fixturesPath %>/templates/**/*.html',
            layout: {
              header: '<%= fixturesPath %>/layout/header.html',
              footer: '<%= fixturesPath %>/layout/footer.html'
            }
          },
          data: {
            // Data to pass to templates
            version: "0.1.0",
            title: "test",
          },
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['browserSync','watch']);
}			
