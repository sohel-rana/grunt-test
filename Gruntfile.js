/**

 * User: Sohel
 * Date: 7/24/14
 * Time: 4:47 PM
 */


module.exports = function(grunt){
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat: {
            dist : {
                src : ['src/**/*.js'],
                dest : '.tmp/app.js'
            }
        },
        uglify : {
            options : {
                banner: '/* <%= pkg.name %>, Generated on : <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : '.tmp/app.js',
                dest : 'build/<%=pkg.main_file%>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).

    grunt.registerTask('someCustomTask', "Some Custom Task", function(){
        grunt.log.write('Some custom task created');
    });
    grunt.registerTask('default', ['concat','uglify','someCustomTask']);

};