var stylus = require('stylus'),
    url = require('url'),
    Path = require('path'),
    Utils = require('advanced').Utils,
    _ = require('lodash');

// 不要生成中间文件，做了下hack
module.exports = function(options) {
    options = _.extend({
        src: process.cwd(),
        dest: Path.join(process.cwd(), '.cache'),
        debug: true
    }, options);
    return function(req, res, next) {
        if ('GET' != req.method && 'HEAD' != req.method) return next();
        var path = url.parse(req.url).pathname;
        if (!/\.css$/.test(path)) return next();

        // 否则删除中间文件
        var stylusMiddleware = stylus.middleware(options);
        return stylusMiddleware(req, res, function(err) {
            if (err) return next(err);
            var filename = Path.join(options.dest, path);
            Utils.fs.readFileAsync(filename)
                .then(function(css) {
                    res.set('Content-Type', 'text/css').send(css);
                })
                .catch(function() {
                    next();
                });
        });
    };
};

