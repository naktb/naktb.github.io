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
        "app/config/ifConfig.js",

        "app/app.js",
        "app/main.js",

        "app/Contact/ContactController.js",
        "app/Home/HomeController.js",
        "app/Price/PriceController.js",
        "app/ReturnPolicy/ReturnPolicyController.js",
        "app/Service/ServiceController.js",
        "app/Terms/TermsController.js",
        "app/WhoWeAre/WhoWeAreController.js",

        "app/directives/menuHighlight.js",

        "app/services/formHandler.js",

        "app/helpers/common.js",

        "app/partials/CallMeBackController.js",
        "app/partials/FooterMenuController.js",
        "app/partials/TopMenuController.js",
        "app/partials/OrderFormController.js",

      ]
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['vendors/foundation/scss']
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
      },

      ngAnnotate: {
        files: assets.js.app,
        tasks: ['ngAnnotate']
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          'css/app.css',
          '*.html',
          'app/**/*.html',
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
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
            'js/vendors.min.js': assets.js.vendor
        }
      }
    },

    ngAnnotate: {
      options: {},
      app: {
        files: {
          'js/app.min.js': assets.js.app
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['browserSync','watch']);
}			
