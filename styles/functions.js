const stylus = require('stylus');
const path = require('path');
const nodes = stylus.nodes;

module.exports = function() {
    return function(style) {
        style.define('exists', function(file) {
            return !!stylus.utils.lookup(file.string, this.paths);
        });

        style.define('__dirname', function() {
            return path.dirname(style.nodes.filename);
        });

        style.define('require', function(file, path) {
            file = stylus.utils.lookup(file.string, [path.string]);
            if (file) {
                // const res = new nodes.Root();
                // res.push(new nodes.Import(new nodes.String(file)));
                // return res;
                return new nodes.Import(new nodes.String(file));
            }
        });
    };
};
