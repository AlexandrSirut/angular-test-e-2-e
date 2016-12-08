var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

gulp.task('default', function(callback) {
    gulp.src(['SuperCalculator.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js'
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});