const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const postcss = {
    loader: "postcss-loader",
    options: {
        plugins() {
            return [autoprefixer()];
        }
    }
};

process.noDeprecation = true;

module.exports = {
    entry: "./public/js/main.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "public", "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader",
                        // options: { presets: ["env"] }
                        options: { presets: ["@babel/preset-env"] }
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader?sourceMap",
                    postcss,
                    "sass-loader?sourceMap"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css",
            ignoreOrder: false
        })
    ]
};
