module.exports = function(grunt) {

  var assets = {
    js: {
      "vendor": [
          'vendors/angular/angular.min.js',
          'vendors/angular-route/angular-route.min.js',
          'vendors/jquery/jquery.min.js',
          'vendors/foundation/js/foundation.min.js',
          'vendors/fastclick/lib/fastclick.js'
      ],
      "app": [
          'app/**/*.js'
      ]
    }
  };

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

    fixturesPath: "../",

    htmlbuild: {
      dist: {
        src: 'templates/index.html',
        dest: '_site',
        options: {
          beautify: true,
          relative: true,
          scripts: {
            bundle: [
              assets.js.vendor,
              assets.js.app,
            ],
            main: '<%= fixturesPath %>/js/app.min.js'
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
    },

    uglify: {
      options: {
        mangle: {
          //except: ['jQuery']
        }
      },
      my_target: {
        files: {
            'js/app.min.js': [assets.js.app]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['browserSync','watch']);
}			
