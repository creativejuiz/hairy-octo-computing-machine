module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './css/style.css': './css/style.scss'
            }
        }
    },
        cssmin: {
            minify: {
                expand: true,
                cwd: './css/',
                src: ['style.css'],
                dest: './css/',
                ext: '.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass', 'cssmin']);


};
