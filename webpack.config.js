const webpack = require("webpack");

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ]
                }
            ]
        }
    };
}