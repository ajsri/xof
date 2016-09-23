//don't judge me
import gulp from "gulp"
import sass from "gulp-sass"

const dirs = {
  src: "./app/styles",
  dest: "./public/css"
}

gulp.task("default", () => {
  return gulp.src("./app/styles/xof.scss"
         .pipe(sass())
         .pipe(gulp.dest("./public/css"))

})