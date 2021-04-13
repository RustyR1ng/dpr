const gulp = require('gulp')

module.exports = function fonts() {
    return (
        gulp.src('src/fonts/**/*').pipe(gulp.dest('build/fonts')),
        gulp.src('src/assets/**/*').pipe(gulp.dest('build/assets'))
    )
}
