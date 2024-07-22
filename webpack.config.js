const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.min.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }], 
    },
    plugins: [
        new Dotenv()
    ]
}