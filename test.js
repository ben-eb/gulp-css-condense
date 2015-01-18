/* global describe, it */

'use strict';

var expect = require('chai').expect,
    Stream = require('stream'),
    gutil  = require('gulp-util'),
    cssc   = require('./'),
    path   = require('path'),
    fs     = require('fs');

function loadFixture(fixture) {
    var cssFile = path.join('./fixtures', fixture) + '.css';
    console.log(cssFile);
    return fs.readFileSync(cssFile, 'utf-8').replace('\n', '');
}

var inFile  = loadFixture('in');
var outFile = loadFixture('out');
var outSafe = loadFixture('out.safe');

describe('gulp-css-condense', function () {
    it('should condense css files', function (cb) {
        var stream = cssc();

        stream.on('data', function (data) {
            expect(String(data.contents)).to.equal(outFile);
            cb();
        });

        stream.write(new gutil.File({
            contents: new Buffer(inFile)
        }));
    });

    it('should condense css files, safely', function (cb) {
        var stream = cssc({ safe: true });

        stream.on('data', function (data) {
            expect(String(data.contents)).to.equal(outSafe);
            cb();
        });

        stream.write(new gutil.File({
            contents: new Buffer(inFile)
        }));
    });

    it('should let null files pass through', function (cb) {
        var stream = cssc();

        stream.on('data', function (data) {
            expect(data.contents).to.equal(null);
            cb();
        });

        stream.write(new gutil.File({
            contents: null
        }));
    });

    it('in stream mode should throw an error', function (cb) {
        var stream = cssc();

        var fakeFile = new gutil.File({
            contents: new Stream()
        });

        var doWrite = function() {
            stream.write(fakeFile);
            fakeFile.contents.write(inFile);
            fakeFile.contents.end();
        };

        expect(doWrite).to.throw(/Streaming not supported/);
        cb();
    });
});
