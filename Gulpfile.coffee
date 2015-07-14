gulp   = require "gulp"
gutil  = require "gulp-util"
coffee = require "gulp-coffee"
concat = require "gulp-concat"
uglify = require "gulp-uglify"


# Config
source = "./src/**/*.coffee";
destination = "./"

gulp.task "coffee", =>
  gulp.src(source)
    .pipe(coffee(bare: true).on("error", gutil.log))
    .pipe(concat("speedy-admin-api-client.js"))
   # .pipe(uglify())
    .pipe(gulp.dest(destination))

gulp.task "watch", ->
  gulp.watch source, ["coffee"]

gulp.task "default", [
  "coffee"
  "watch"
]
