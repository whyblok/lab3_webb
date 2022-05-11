const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    }
}