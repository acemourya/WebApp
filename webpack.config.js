// Define Contant path
const path = require('path');

// Molules exports
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    // loader
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },

    // Server
    devServer: {
        static: {
            directory: path.join(__dirname,'dist')
        },
        compress: true,
        port: 3700
    }
};