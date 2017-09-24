var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var paths = {};
paths.js = [
    'js/libs/jquery.min.js',
    'js/libs/lightbox.js'
];

paths.css = [
    'scss/**/*.scss'
];


gulp.task('uglify', function(){
    gulp.src(paths.js)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function(){
    return gulp.src(paths.css, {base: 'scss/'})
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch(paths.js, ['uglify']);
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'sass', 'uglify']);