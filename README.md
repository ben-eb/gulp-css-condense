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

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests to cover it.

## License

MIT © Ben Briggs
