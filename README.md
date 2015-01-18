# [gulp](https://github.com/gulpjs/gulp)-css-condense [![Build Status](https://travis-ci.org/ben-eb/gulp-css-condense.svg?branch=master)](https://travis-ci.org/ben-eb/gulp-css-condense) [![NPM version](https://badge.fury.io/js/gulp-css-condense.svg)](http://badge.fury.io/js/gulp-css-condense) [![Dependency Status](https://gemnasium.com/ben-eb/gulp-css-condense.svg)](https://gemnasium.com/ben-eb/gulp-css-condense)

> A gulp plugin for [the CSS compressor that shows no mercy](https://github.com/rstacruz/css-condense).

*If you have any difficulties with the output of this plugin, please use the [css-condense tracker](https://github.com/rstacruz/css-condense/issues).*

Install via [npm](https://npmjs.org/package/gulp-css-condense):

```
npm install gulp-css-condense --save-dev
```

## Example

```js
var gulp = require('gulp');
var cssc = require('gulp-css-condense');

gulp.task('default', function() {
    return gulp.src('./main.css')
        .pipe(cssc())
        .pipe(gulp.dest('./out'));
});
```

## Options

### safe
Type: `Boolean`

If this is set to `true`, css-condense will not perform optimisations such as selector and declaration consolidation. [See the docs for more information](https://github.com/rstacruz/css-condense#the-dangerous-things-it-does). Note that you can also choose which optimisations that you deem to be fit for your build by passing them individually:

```js
var gulp = require('gulp');
var cssc = require('gulp-css-condense');

gulp.task('default', function() {
    return gulp.src('./main.css')
        .pipe(cssc({
            consolidateViaDeclarations: true,
            consolidateViaSelectors: false,
            consolidateMediaQueries: true
        }))
        .pipe(gulp.dest('./out'));
});
```

`options.safe` is just a convenience for specifying all of the above options as false.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests to cover it.

## License

MIT © Ben Briggs
