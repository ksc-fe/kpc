const stylus = require('stylus');
const path = require('path');

module.exports = function() {
    return function(style) {
        style.define('exists', function(path) {
            return !!stylus.utils.lookup(path.string, this.paths);
        });

        style.define('__dirname', function() {
            return path.dirname(style.nodes.filename);
        });
    };
};
