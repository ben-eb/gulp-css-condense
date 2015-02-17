'use strict';

var cssc        = require('css-condense'),
    gutil       = require('gulp-util'),
    transform   = require('stream').Transform,

    PLUGIN_NAME = 'gulp-css-condense';

module.exports = function(options) {
    var stream = new transform({ objectMode: true });

    stream._transform = function(file, unused, done) {
        if (file.isStream()) {
            var msg = 'Streaming not supported';
            return done(new gutil.PluginError(PLUGIN_NAME, msg));
        } else if (file.isBuffer()) {
            var compressed = cssc.compress(String(file.contents), options);
            file.contents = new Buffer(compressed);
        }
        done(null, file);
    };

    return stream;
};
