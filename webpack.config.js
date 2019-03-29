const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}