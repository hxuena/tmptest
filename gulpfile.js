const { task, src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');

const builddev = function (cb) {
  watch('./src/nodeui/**/*.js', { ignoreInitial: false }, function (cb) {
    src('./src/nodeui/**/*.js')
      .pipe(babel({
        babelrc: false,
        plugins: ['transform-es2015-modules-commonjs']
      }))
      .pipe(dest('dist'))
    cb()
  })
}

const buildProd = function (cb) {
  src('./src/nodeui/**/*.js')
    .pipe(babel({
      babelrc: false,
      ignore: ['./src/nodeui/config/*.js'],
      plugins: ['transform-es2015-modules-commonjs']
    }))
    .pipe(dest('dist'))
  cb()
}

const configClean = function (cb) {
  src('./src/nodeui/**/*.js')
    .pipe(rollup({
      output: {
        format: 'cjs'
      },
      input: './src/nodeui/config/index.js',
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify('production')
        })
      ]
    }))
    .pipe(dest('./dist'));
  cb()
}

const lint = function (cb) {
  src(['./src/nodeui/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  cb()
}

let _task = builddev;
if (process.env.NODE_ENV == 'production') {
  _task = series(configClean, buildProd)
}

if (process.env.NODE_ENV == 'lint') {
  _task = series(configClean, buildProd)
}

task('default', _task)