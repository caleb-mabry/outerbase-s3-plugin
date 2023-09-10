const path = require('path');

module.exports = {
    mode: 'production',
    entry: './pluginEntry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'plugin.bundle.js',
    },
};
