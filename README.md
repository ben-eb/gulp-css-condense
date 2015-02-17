# [gulp][gulp]-css-condense [![Build Status](https://travis-ci.org/ben-eb/gulp-css-condense.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/gulp-css-condense.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/gulp-css-condense.svg)][deps]

> A gulp plugin for [the CSS compressor that shows no mercy][orig].

*If you have any difficulties with the output of this plugin, please use the
[css-condense tracker][bugs].*

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

If this is set to `true`, css-condense will not perform optimisations such as
selector and declaration consolidation ([the docs have more information][docs]).
Note that you can also choose which optimisations that you deem to be fit for
your build by passing them individually:

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

`options.safe` is just a convenience for specifying all of the above options as
`false`.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © Ben Briggs

[bugs]: https://github.com/rstacruz/css-condense/issues
[ci]:   https://travis-ci.org/ben-eb/gulp-css-condense
[deps]: https://gemnasium.com/ben-eb/gulp-css-condense
[docs]: https://github.com/rstacruz/css-condense#the-dangerous-things-it-does
[gulp]: https://github.com/wearefractal/gulp
[npm]:  http://badge.fury.io/js/gulp-css-condense
[orig]: https://github.com/rstacruz/css-condense
