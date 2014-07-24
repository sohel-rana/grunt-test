/**

 * User: Sohel
 * Date: 7/24/14
 * Time: 4:47 PM
 */


module.exports = function(grunt){

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                banner: '/* <%= pkg.name %>, Generated on : <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'src/<%=pkg.main_file%>.js',
                dest: 'build/<%=pkg.main_file%>.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};