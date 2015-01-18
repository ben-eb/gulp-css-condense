'use strict';

var cssc        = require('css-condense'),
    gutil       = require('gulp-util'),
    transform   = require('stream').Transform,

    PLUGIN_NAME = 'gulp-uncss';

module.exports = function(options) {
    var stream = new transform({ objectMode: true });

    stream._transform = function(file, unused, done) {
        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        } else if (file.isBuffer()) {
            file.contents = new Buffer(cssc.compress(String(file.contents), options));
            done(null, file);
        } else {
            // Pass through when null
            done(null, file);
        }
    };

    return stream;
};
