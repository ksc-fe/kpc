const breakpoints = require('./mediaQuery');
const stylus = require('stylus');
const nodes = stylus.nodes;

module.exports = function() {
    return function(style) {
        for (let key in breakpoints) {
            style.define(key, function() {
                return new nodes.Unit(parseInt(breakpoints[key], 10), 'px')
            });
        }
    };
};
