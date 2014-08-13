var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    bump = require('gulp-bump'),
    jsons = [
      './package.json',
      './urlToLink.jquery.json',
      './bower.json'
    ]

gulp.task('compress', function () {
  "use strict";
  gulp.src('./jquery.urlToLink.js')
    .pipe(uglify())
    .pipe(rename('jquery.urlToLink.min.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('bump', function (params) {
  "use strict";
  gulp.src(jsons)
    .pipe(bump())
    .pipe(gulp.dest('./'))
})

gulp.task('bump:minor', function () {
  "use strict";
  gulp.src(jsons)
    .pipe(bump({
      type : 'minor'
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('bump:major', function () {
  "use strict";
  gulp.src(jsons)
    .pipe(bump({
      type : 'major'
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('default', function () {
  "use strict";
  gulp.run('compress')
})
