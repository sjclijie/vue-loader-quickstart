
var gulp = require('gulp'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS( { advanced: true } ),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix( { browsers: ['last 2 versions'] } ),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    scss = require('gulp-scss'),
    livereload = require('gulp-livereload');


//#####  less

gulp.task('less', function(){
    return gulp.src('./src/ui-components/vue-mui/src/less/*.less')
               .pipe(less({
                    plugin: [autoprefix, cleancss]
               }))
               .pipe( minifyCSS() )
               .pipe(gulp.dest('./static/css/mui/'))
});

gulp.task('concat-less',['less'], function(){

    return gulp.src('./static/css/mui/*.css')
               .pipe(concatCss('mui.min.css'))
               .pipe(minifyCSS())
               .pipe( gulp.dest('./static/css/'));
});

gulp.task('watch-less', ['concat-less'], function(){
    gulp.watch('./src/ui-components/vue-mui/src/less/*.less', ['concat-less']);
});



//#####  livereload
gulp.task('live', function(){
    livereload.listen();
    gulp.watch('./static/css/mui.min.css').on('change', livereload.changed);
});



//##### main
gulp.task('default', ['watch-less','live']);
