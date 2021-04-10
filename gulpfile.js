const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles' , function(){
    return gulp.src("src/sass/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))  // компиляция файла и сжатие
            .pipe(rename({
                prefix: "",
                suffix: ".min", // оконцовка min
              }))
            .pipe(autoprefixer({
                cascade: false
            })) //префиксы
            .pipe(cleanCSS({compatibility: 'ie8'})) //clean css очищение
            .pipe(gulp.dest("src/css")) // сохранение файла
            .pipe(browserSync.stream()) // перезагрузка страницы

});

gulp.task('watch', function(){
    gulp.watch('src/sass/*.+(scss|sass)' , gulp.parallel('styles')) //следит за изменениями в файле sass
    gulp.watch('src/*.html').on('change', browserSync.reload); //изменения в html 
});


gulp.task('default' , gulp.parallel('watch' ,'server', 'styles'))  //запуск команд