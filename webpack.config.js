const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.jpg$/,
            user: {
                loader: 'file-loader'
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}