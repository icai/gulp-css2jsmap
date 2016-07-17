'use strict';
var gutil = require('gulp-util');
var through = require("through2");
var objectAssign = require('object-assign');

var css2jsmap = function(options) {
    options = objectAssign({
        prefix: 'var css2jsmap = ',
        suffix: ';'
    }, options);
    var cacheObj = {};
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }
        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-css2jsmap', 'Streaming not supported'));
            return;
        }
        file = new gutil.File(file);
        cacheObj[file.basename] = file.contents.toString('utf8');
        cb();

    }, function(cb) {
        if (!options.path) {
            cb(new gutil.PluginError('gulp-css2jsmap', 'path doesnot defined'));
            return;
        }
        var file = new gutil.File({
            path: options.path
        });
        file.contents = new Buffer(options.prefix + JSON.stringify((cacheObj), null, '  ') + options.suffix);
        this.push(file);
        cb();
        cacheObj = null;
    })
};


module.exports = css2jsmap;


