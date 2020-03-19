const path = require('path');

module.exports = {
    resolve(p) {
        return path.resolve(__dirname, '../', p);
    }
};
