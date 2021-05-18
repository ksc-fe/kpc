var breakpoints = require('./mediaQuery');
var stylus = require('stylus');
var nodes = stylus.nodes;

module.exports = function() {
    return function(style) {
        for (var key in breakpoints) {
            style.define(key, (function(key) {
                return function() {
                    return new nodes.Unit(parseInt(breakpoints[key], 10), 'px')
                }
            })(key));
        }
    };
};
