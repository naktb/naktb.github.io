module.exports = function(grunt) {

  var assets = {
    js: {
      "vendor": [
          'vendors/angular/angular.min.js',
          'vendors/angular-route/angular-route.min.js',
          'vendors/jquery/dist/jquery.min.js',
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
          baseDir: "./"
        }
      }
    },

    fixturesPath: "app",

    htmlbuild: {
      dist: {
        src: 'templates/index.html',
        dest: './',
        options: {
          beautify: true,
          relative: true,
          scripts: {
            app: 'js/app.min.js',
            bundle: [
              assets.js.vendor,
              assets.js.app
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
            views: ['<%= fixturesPath %>/Home/*.html', '<%= fixturesPath %>/Price/*.html'],
            templates: '/templates/pages/*.html',
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
            'js/app.min.js': [assets.js.vendor, assets.js.app],
            'js/vendors.min.js': assets.js.vendor
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
