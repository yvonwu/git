module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	compass: {
      dev: {
        options: {
          sassDir: ['src/sass'],
          cssDir: ['public/css'],
          environment: 'development'
        }
       }
	  },
	sass: {                              // Task
    dist: {
      files: [{
        expand: true,
		cwd: 'src/sass',
        src: ['*.scss'],
        dest: 'public/css/',
        ext: '.css'
      }]
    }
  },
   compass: {                  // Task
    dist: {                   // Target
      options: {              // Target options
        sassDir: 'sass',
        cssDir: 'css',
        environment: 'production'
      }
		}
	}
	,
    uglify: {
		my_target: {
			files: {
        'js/output.min.js': ['src/input1.js', 'src/input2.js']
					}
	    }
		},
		compass :{
		   dev:{ 
		    option:{
				config: 'config.rb'
		   }
		   }
		},
		watch:{
		    options:{
      livereload: true,
    },
			scripts:{
			files:['src/*.js'],
			tasks: ['uglify']
			},
			html:{ files:['public/*.html']},
			
			compass:{	
                files:['src/sass/*.scss'],
			tasks: ['compass']
			}
			/*sass:{
			files:['src/sass/*.scss'],
			tasks: ['sass']
			},*/
			
		},
		
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
 grunt.registerTask('default', ['watch']);

};